import asyncio,sys,subprocess,os
import os
HASH=os.environ.get('HASH','')
from playwright.async_api import async_playwright
FPS=30
async def scene(b,i):
    pg=await b.new_page(viewport={'width':1080,'height':1920})
    await pg.goto('file:///home/claude/video/build.html'+HASH)
    dur=await pg.evaluate(f"show({i});S[{i}].dur")
    n=round(dur*FPS); P=os.environ.get('PFX','s');tmp=f'tmp_{P}{i:02d}.mp4'
    ff=subprocess.Popen(['ffmpeg','-y','-loglevel','error','-f','image2pipe','-c:v','mjpeg','-framerate',str(FPS),'-i','-','-c:v','libx264','-crf','20','-preset','veryfast','-pix_fmt','yuv420p','-r',str(FPS),tmp],stdin=subprocess.PIPE)
    for f in range(n):
        await pg.evaluate(f"setTime({f/FPS})")
        ff.stdin.write(await pg.screenshot(type='jpeg',quality=92))
    ff.stdin.close(); ff.wait()
    if ff.returncode==0: os.rename(tmp,f'{P}{i:02d}.mp4')
    print('done',i,n,flush=True); await pg.close()
async def main():
    ids=[int(x) for x in sys.argv[1:]]
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome')
        for i in ids: await scene(b,i)
        await b.close()
asyncio.run(main())
