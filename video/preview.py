import asyncio,sys
HASH='#hi'
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome')
        pg=await b.new_page(viewport={'width':1080,'height':1920})
        pg.on('pageerror',lambda e:print('ERR',e))
        await pg.goto('file:///home/claude/video/build.html'+HASH)
        for i in [int(x) for x in sys.argv[1:]]:
            await pg.evaluate(f"show({i});setTime(S[{i}].dur*0.6)")
            await pg.screenshot(path=f'p{i}.jpg',quality=70,type='jpeg')
        await b.close()
asyncio.run(main())
