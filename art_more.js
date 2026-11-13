/* More scene art for Canto 1 episodes */
function sc(top,bot,gy,gc,body,o={}){const k=sky(top,bot);return svgWrap(k.def,`<rect width="400" height="300" fill="${k.fill}"/>${o.stars?stars(o.stars,gy):''}${o.sun?`<circle class="pulse" cx="${o.sun[0]}" cy="${o.sun[1]}" r="${o.sun[2]||28}" fill="${o.sun[3]||'#fff3c4'}"/>`:''}${o.moon?`<circle cx="${o.moon[0]}" cy="${o.moon[1]}" r="18" fill="#f4f0d6"/>`:''}<rect y="${gy}" width="400" height="${300-gy}" fill="${gc}"/>${body}`);}
function raysAt(x,y,n=14,len=110,op=.3){return `<g class="rays" style="transform-origin:${x}px ${y}px">${Array.from({length:n},(_,i)=>`<rect x="${x-2}" y="${y-len}" width="4" height="${len}" fill="#fff6d6" opacity="${op}" transform="rotate(${i*360/n} ${x} ${y})"/>`).join('')}</g>`;}
function sage(x,y,s=.8,o={}){return person(x,y,s,Object.assign({sit:1,cloth:'#e9c46a',beard:'#ddd',hair:'#888',topknot:1,arm:'fold'},o));}
function boy(x,y,s=.7,o={}){return person(x,y,s,Object.assign({cloth:'#f4a261',topknot:1,arm:'down'},o));}
function vyasa(x,y,s=1.05,o={}){return person(x,y,s,Object.assign({sit:1,cloth:'#f1faee',beard:'#ddd',hair:'#888',topknot:1,arm:'lap',tilak:1},o));}
function narada(x,y,s=1,o={}){return person(x,y,s,Object.assign({cloth:'#ffb347',topknot:1,arm:'fold',tilak:1,mala:1,halo:'#fff6c8'},o))+vina(x,y-35*s,s);}
function king(x,y,s=.95,c='#1f6fb3',o={}){return person(x,y,s,Object.assign({cloth:c,crown:'#f2c14e',arm:'fold'},o));}
function lady(x,y,s=.95,c='#d6336c',o={}){return person(x,y,s,Object.assign({cloth:c,arm:'fold',hair:'#120a05'},o));}
function tent(x,y,s=1,c='#c9a46a'){return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-34,0 L0,-46 L34,0Z" fill="${c}"/><path d="M-6,0 L0,-20 L6,0Z" fill="#3a2414"/><line x1="0" y1="-46" x2="0" y2="-58" stroke="#6b4a1a" stroke-width="2"/><path d="M0,-58 L12,-54 L0,-50Z" fill="#ef8a3c"/></g>`;}
function mountains(gy,c1='#7d8fb3',c2='#e9eef7'){return `<path d="M0,${gy} L60,${gy-90} L110,${gy-40} L170,${gy-120} L240,${gy-50} L300,${gy-110} L360,${gy-60} L400,${gy-80} L400,${gy}Z" fill="${c1}"/><path d="M150,${gy-95} L170,${gy-120} L190,${gy-96} L178,${gy-100} L170,${gy-92} L160,${gy-100}Z" fill="${c2}"/><path d="M285,${gy-90} L300,${gy-110} L315,${gy-90} L305,${gy-94} L300,${gy-88} L292,${gy-94}Z" fill="${c2}"/>`;}
function emojiOrb(x,y,e,r=20,delay=0){return `<g transform="translate(${x} ${y})"><g class="float" style="animation-delay:${delay}s"><circle r="${r}" fill="#fff6d6" opacity=".9"/><circle r="${r}" fill="none" stroke="#f2c14e" stroke-width="2"/><text y="${r*0.38}" text-anchor="middle" font-size="${r*1.1}">${e}</text></g></g>`;}
function fireball(x,y,s=1,cls='pulse'){return `<g transform="translate(${x} ${y}) scale(${s})"><circle class="${cls}" r="16" fill="#ffb347" opacity=".5"/><circle r="9" fill="#ff7a1a"/><circle r="4" fill="#fff3b0"/></g>`;}
function banyan(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-8" y="-60" width="16" height="60" fill="#5a3a22"/>${[-30,-12,12,30].map(d=>`<line x1="${d}" y1="-50" x2="${d}" y2="0" stroke="#5a3a22" stroke-width="2"/>`).join('')}<g class="sway"><ellipse cx="0" cy="-74" rx="62" ry="30" fill="#2b5d34"/><ellipse cx="-30" cy="-60" rx="30" ry="18" fill="#2f6b3a"/><ellipse cx="32" cy="-60" rx="30" ry="18" fill="#2f6b3a"/></g></g>`;}
function cows(x,y,s=.7){return cow(x,y,s).replace(/class="tear"/g,'class="tear" style="display:none"');}
function bookGlow(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s})"><circle class="pulse" r="40" fill="#fff3b0" opacity=".5"/><g class="float"><rect x="-26" y="-18" width="52" height="34" rx="3" fill="#fff8e6"/><line x1="0" y1="-18" x2="0" y2="16" stroke="#c9a46a"/><path d="M-20,-8 h14 M-20,-2 h14 M-20,4 h12 M6,-8 h14 M6,-2 h14 M6,4 h12" stroke="#c9a46a" stroke-width="1.2"/></g></g>`;}
function conch(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0,0 C-14,-4 -18,-18 -6,-24 C6,-28 16,-16 12,-6 Z" fill="#fffaf0" stroke="#d8c9a3"/><path d="M-6,-24 c4,4 8,6 14,6" stroke="#d8c9a3" fill="none"/>${[0,1,2].map(i=>`<path class="pulse" style="animation-delay:${i*.6}s" d="M${18+i*10},-14 q6,8 0,16" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>`).join('')}</g>`;}
function wheel(x,y,r=22){return `<g transform="translate(${x} ${y})"><circle r="${r}" fill="none" stroke="#6b4a1a" stroke-width="4"/><g class="spin">${[0,45,90,135].map(a=>`<line x1="-${r}" y1="0" x2="${r}" y2="0" stroke="#6b4a1a" stroke-width="2" transform="rotate(${a})"/>`).join('')}</g></g>`;}
function jackal(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="-14" rx="16" ry="7" fill="#b08a5a"/><path d="M14,-18 l12,-10 l2,8 Z" fill="#b08a5a"/><path d="M20,-26 l2,-8 l3,7Z" fill="#b08a5a"/>${[-10,-4,6,12].map(i=>`<rect x="${i}" y="-9" width="2.5" height="9" fill="#b08a5a"/>`).join('')}<path d="M-16,-14 q-10,0 -12,8" stroke="#b08a5a" stroke-width="3" fill="none"/></g>`;}

Object.assign(NEW,{
/* Ep1 */
questions:()=>sc('#ffd89a','#f2a65a',225,'#7c9a4a',`${tree(25,230,1.2)}${tree(380,230,1.3)}
 ${person(200,200,.95,{sit:1,cloth:'#f1faee',beard:'#eee',hair:'#bbb',topknot:1,arm:'lap',tilak:1,mala:1,halo:'#fff3b0'})}<rect x="170" y="198" width="60" height="16" rx="3" fill="#a8763f"/>
 ${[[70,285],[120,292],[280,292],[330,285]].map(([x,y],i)=>sage(x,y,.75,{arm:i%2?'up':'point',flip:x>200,cloth:['#e9c46a','#f4a261'][i%2]})).join('')}
 ${['?','?','?'].map((q,i)=>`<text class="float" style="animation-delay:${i*.7}s" x="${110+i*90}" y="${110-(i%2)*20}" font-size="34" font-weight="800" fill="#7b2cbf" text-anchor="middle">?</text>`).join('')}`,{sun:[350,60]}),
bhakti:()=>sc('#fde2a8','#f7b267',230,'#c9a46a',`${raysAt(200,150,18,140,.35)}
 ${person(200,250,1.15,{sit:1,cloth:'#f1faee',beard:'#eee',hair:'#bbb',topknot:1,arm:'up',tilak:1,mala:1,halo:'#fff3b0'})}
 <g class="float"><path d="M200,70 c-10,-14 -30,-4 -20,12 l20,18 l20,-18 c10,-16 -10,-26 -20,-12Z" fill="#e5484d" opacity=".85"/></g>`),
avatars:()=>sc('#123c8c','#3d5fb0',270,'#0b2a6b',`${stars(40,270)}
 ${[['🐟',60,80],['🐢',130,60],['🐗',200,48],['🦁',270,60],['☂️',340,80],['🏹',95,150],['🪓',305,150]].map(([e,x,y],i)=>emojiOrb(x,y,e,22,i*.3)).join('')}
 ${krishna(200,250,.95,'up')}`),
source:()=>sc('#1d1842','#3a2f7a',270,'#120f2b',`${stars(50,270)}${raysAt(200,140,20,130,.25)}
 ${['🐟','🐢','🐗','🦁','☂️','🏹','🪓','🐚'].map((e,i)=>{const a=i/8*Math.PI*2;return emojiOrb(200+Math.cos(a)*120,140+Math.sin(a)*95,e,15,i*.2);}).join('')}
 ${krishna(200,200,1.1,'up')}`),
sunrise:()=>sc('#ffb36b','#ffe7b0',230,'#e6c98f',`<circle class="pulse" cx="200" cy="230" r="70" fill="#ffd27a"/>${raysAt(200,230,16,170,.3)}
 ${bookGlow(200,150,1.4)}${sage(80,270,.8)}${sage(320,270,.8,{flip:1})}`),
/* Ep2 */
vyasaSad:()=>sc('#a7d3f0','#e9e2c9',215,'#d9c08a',`${river(235,'#4a9fd1','#bfe6ff')}${tree(360,220,1.1)}${tree(40,218,.9)}
 ${vyasa(200,232,1.15,{arm:'lap',eyesClosed:1})}${[0,1,2].map(i=>`<rect x="${120+i*14}" y="${222-i*4}" width="30" height="8" rx="2" fill="#f4e3b0" stroke="#c9a46a"/>`).join('')}
 <text x="250" y="140" font-size="28" class="float">💭</text>`),
naradaArrives:()=>NEW.narada(),
serve:()=>sc('#9fb6c9','#d9d4c0',225,'#7c9a4a',`${[0,1,2,3,4,5].map(i=>`<line x1="${30+i*70}" y1="0" x2="${10+i*70}" y2="60" stroke="#cfe3f5" stroke-width="2" opacity=".7" class="flow"/>`).join('')}
 ${hut(310,228,1.2)}${sage(90,280,.8)}${sage(150,284,.8,{cloth:'#f4a261'})}${sage(210,280,.8)}
 ${boy(265,272,.75,{arm:'fold'})}<ellipse cx="265" cy="250" rx="0" ry="0"/>`),
alone:()=>sc('#f7b267','#e07a5f',230,'#7a8c3e',`${tree(330,232,1.2)}${tree(380,232,1)}${tree(290,232,.9,'#2f7a46')}
 <path d="M0,280 Q120,250 200,262 T400,240" stroke="#c9a46a" stroke-width="10" fill="none" opacity=".7"/>
 <g class="walkL">${boy(170,262,.8)}</g>`),
vision:()=>sc('#0f1a3a','#2a2f6a',245,'#1f2a1f',`${stars(40,240)}${banyan(250,250,1.3)}
 ${person(170,262,.8,{sit:1,cloth:'#f4a261',topknot:1,arm:'lap',eyesClosed:1})}
 <g class="pulse"><circle cx="170" cy="150" r="40" fill="#bfe6ff" opacity=".35"/></g><g class="float">${krishna(170,175,.55,'up')}</g>`),
naradaSings:()=>sc('#a7c8f0','#f3e3ff',300,'#fff',`<g class="float"><ellipse cx="200" cy="220" rx="90" ry="22" fill="#fff"/><ellipse cx="160" cy="210" rx="40" ry="18" fill="#fff"/>${narada(200,212,1.2)}</g>
 ${['♪','♫','♪'].map((n,i)=>`<text class="float" style="animation-delay:${i*.6}s" x="${250+i*30}" y="${110-i*12}" font-size="26" fill="#5b3f8c">${n}</text>`).join('')}
 ${vyasa(70,290,.9)}`),
/* Ep3 */
camp:()=>sc('#120f2b','#2a2155',240,'#2c2640',`${stars(40,230)}${tent(90,240,1.1)}${tent(200,240,1.3,'#b48d55')}${tent(310,240,1.1)}
 <g class="walk">${person(260,270,.9,{skin:'#5a4a3a',cloth:'#1a1a1a',arm:'sword',hair:'#000'})}</g>`,{moon:[340,50]}),
grief:()=>sc('#1b1640','#3d2a5c',230,'#3c3552',`${stars(30,140)}
 ${lady(150,266,1.1,'#d6336c')}<circle class="tear" cx="146" cy="196" r="1.8" fill="#9fd3ff"/><circle class="tear" style="animation-delay:1s" cx="154" cy="196" r="1.8" fill="#9fd3ff"/>
 ${king(260,266,1.1,'#1f6fb3',{arm:'sword',flip:1})}`,{moon:[330,60]}),
weapons:()=>sc('#2a1240','#a83250',240,'#4a2a3a',`${fireball(170,110,1.8,'pulse')}${fireball(230,110,1.8,'pulse')}<circle class="pulse" cx="200" cy="110" r="50" fill="#fff3b0" opacity=".35"/>
 ${krishna(310,262,.9,'point',{flip:1})}${king(250,266,.95,'#1f6fb3',{arm:'bow',flip:1})}
 ${person(80,266,.9,{skin:'#5a4a3a',cloth:'#1a1a1a',arm:'up',hair:'#000'})}`),
bound:()=>NEW.draupadi(),
mercy:()=>sc('#2b2152','#5a4a8a',230,'#3c3552',`${stars(25,140)}${lady(130,266,1.1,'#d6336c',{arm:'fold',halo:'#fff3b0'})}
 ${person(210,268,.85,{sit:1,skin:'#5a4a3a',cloth:'#2b2b2b',arm:'fold',hair:'#000'})}${king(300,266,1,'#1f6fb3',{arm:'down',flip:1})}`,{moon:[60,50]}),
jewel:()=>sc('#3a2a5c','#7a5a9a',240,'#3c3552',`${person(200,272,1.05,{sit:1,skin:'#5a4a3a',cloth:'#2b2b2b',arm:'lap',hair:'#000'})}
 <g class="float"><circle class="pulse" cx="300" cy="110" r="30" fill="#bfe6ff" opacity=".4"/><path d="M300,92 l12,14 l-12,18 l-12,-18Z" fill="#7ec8ff" stroke="#fff"/></g>
 ${krishna(90,262,.9,'point')}`),
/* Ep4 */
funeral:()=>sc('#c9d8e8','#f4e3b5',205,'#e6d3a3',`${river(205,'#4a9fd1','#bfe6ff')}<rect y="236" width="400" height="64" fill="#e6d3a3"/>
 ${[80,130,180].map((x,i)=>king(x,272,.8,['#1f6fb3','#2a9d8f','#e9c46a'][i])).join('')}${lady(240,272,.85,'#f6f6f6')}${chariot(340,262,.85)}`),
womb:()=>SVG[0](),
actor:()=>sc('#fbd3a0','#f7a072',235,'#d8b77a',`${raysAt(260,150,14,110,.3)}<path d="M200,40 Q260,20 320,40 L320,230 L200,230Z" fill="#7a1b2a" opacity=".2"/>
 ${krishna(260,262,1.1,'up')}${person(130,268,1,{sit:1,cloth:'#f6f6f6',hair:'#ddd',arm:'fold',tilak:1})}`),
memories:()=>sc('#f7c08a','#e88f5a',235,'#d8b77a',`${emojiOrb(80,80,'🍯',22,0)}${emojiOrb(160,60,'🔥',22,.3)}${emojiOrb(240,60,'🎲',22,.6)}${emojiOrb(320,80,'🏹',22,.9)}
 ${person(200,272,1.05,{sit:1,cloth:'#f6f6f6',hair:'#ddd',arm:'fold',tilak:1,eyesClosed:1})}`),
calamity:()=>sc('#4a3a6a','#c97a5a',235,'#8a6d4b',`<path d="M0,0 L400,0 L400,90 Q300,110 200,90 Q100,70 0,95Z" fill="#3a2f52" opacity=".6"/><path class="pulse" d="M120,40 l-14,30 h12 l-10,26 l26,-34 h-12 l12,-22Z" fill="#ffd34d"/>
 ${raysAt(280,170,12,90,.35)}${krishna(280,262,1,'up')}${person(140,268,1.05,{sit:1,cloth:'#f6f6f6',hair:'#ddd',arm:'up',tilak:1})}`),
smile:()=>sc('#fde2a8','#f7b267',235,'#d8b77a',`${palace(200,236,1)}${krishna(150,268,.95,'down')}${king(250,268,.95,'#1f6fb3',{arm:'fold',flip:1})}`,{sun:[340,60]}),
/* Ep5 */
gather:()=>NEW.bhishma(),
teach:()=>sc('#f7b267','#c8553d',240,'#7a5a3a',`${arrowsBed(200,206)}<g transform="translate(136 196)"><path d="M8,-12 L138,-12 L138,2 L8,2Z" fill="#f4a261"/><circle cx="0" cy="-12" r="13" fill="#e3a978"/><path d="M-6,-2 Q2,14 12,-4Z" fill="#fff"/><path d="M-13,-16 Q0,-30 12,-18" fill="#eee"/><circle cx="-3" cy="-14" r="1.3" fill="#222"/></g>
 ${['👑','🏠','🧘','🙏'].map((e,i)=>emojiOrb(70+i*85,70,e,20,i*.3)).join('')}
 ${[60,110,290,340].map((x,i)=>king(x,272,.75,['#1f6fb3','#2a9d8f','#e9c46a','#7b2cbf'][i],{flip:x>200})).join('')}`),
wheelPromise:()=>sc('#d9a066','#8a4a3a',240,'#6b4a2a',`${chariot(90,250,.9)}<g class="float">${krishna(230,262,1.05,'up')}</g>${wheel(262,178,24)}
 ${person(340,266,.95,{cloth:'#f6f1e7',beard:'#fff',hair:'#ddd',arm:'fold',flip:1})}`),
gaze:()=>sc('#ffd89a','#f2a65a',240,'#7a5a3a',`${arrowsBed(150,206)}<g transform="translate(86 196)"><path d="M8,-12 L138,-12 L138,2 L8,2Z" fill="#f4a261"/><circle cx="0" cy="-12" r="13" fill="#e3a978"/><path d="M-6,-2 Q2,14 12,-4Z" fill="#fff"/><path d="M-13,-16 Q0,-30 12,-18" fill="#eee"/><circle cx="-3" cy="-14" r="1.3" fill="#222"/></g>
 ${raysAt(300,170,14,100,.35)}${krishna(300,262,1.05,'down')}`,{sun:[60,60]}),
farewell:()=>sc('#ffe0b0','#f7b267',240,'#7a5a3a',`${raysAt(150,120,18,150,.35)}${arrowsBed(150,206)}<circle class="pulse" cx="150" cy="120" r="30" fill="#fff6d6"/>
 ${petals(18)}${krishna(310,262,.95,'fold')}`),
/* Ep6 */
kingdom:()=>sc('#bfe3f5','#fff1c9',232,'#9ab65a',`${palace(200,234,1.1)}${cows(80,270,.7)}${cows(330,272,.65)}${king(200,272,.9,'#7b2cbf')}`,{sun:[350,50]}),
leaving:()=>sc('#f2c79a','#e8a07a',235,'#c9a46a',`${palace(90,236,.8)}<g class="walk">${chariot(290,262,1)}${krishna(280,228,.8,'up')}</g>
 ${[40,80,130].map((x,i)=>lady(x,272,.7,['#d6336c','#7b2cbf','#2a9d8f'][i],{arm:'up'})).join('')}`),
arrive:()=>sc('#9fd8f5','#fff1c9',240,'#e6c98f',`<rect x="0" y="120" width="400" height="120" fill="#f3d38a"/><path d="M150,240 L150,140 Q200,90 250,140 L250,240Z" fill="#e8b84a"/>
 ${krishna(200,262,1.05,'up')}${conch(240,170,1.2)}`),
welcome:()=>NEW.dvaraka(),
mothers:()=>sc('#fde2c8','#f6b98a',240,'#c9905a',`${[60,340].map(x=>`<rect x="${x-10}" y="40" width="20" height="200" fill="#e9c98f"/>`).join('')}
 ${krishna(170,262,1,'fold')}${lady(250,266,1,'#e76f51',{arm:'up',halo:'#fff3b0',flip:1})}${lady(310,268,.9,'#f6f6f6',{flip:1})}${petals(8)}`),
palaces:()=>sc('#f9d77e','#f7a072',240,'#e6c98f',`${[40,120,200,280,360].map(x=>`<rect x="${x-26}" y="150" width="52" height="90" fill="#f3e3bf"/><path d="M${x-26},150 Q${x},110 ${x+26},150Z" fill="#f8e9c8"/>`).join('')}
 ${krishna(200,272,.9,'up')}`,{sun:[350,50]}),
/* Ep7 */
viduraArrives:()=>sc('#bfe3f5','#f4e3b5',235,'#c9a46a',`${palace(270,236,.9)}<g class="walkL">${person(110,270,1,{cloth:'#ef8a3c',beard:'#999',hair:'#666',topknot:1,arm:'down',tilak:1})}<line x1="128" y1="200" x2="132" y2="270" stroke="#6b4a1a" stroke-width="3"/></g>
 ${king(230,272,.85,'#1f6fb3',{flip:1})}${king(320,272,.85,'#2a9d8f',{flip:1})}`),
silence:()=>sc('#d9c4e8','#f4d9c4',235,'#c9a46a',`${person(150,268,1.05,{cloth:'#ef8a3c',beard:'#999',hair:'#666',topknot:1,arm:'fold',tilak:1,eyesClosed:1})}
 <text x="160" y="140" font-size="30" class="float">🤫</text>${king(270,270,.95,'#1f6fb3',{flip:1})}`),
warn:()=>NEW.vidura(),
time:()=>sc('#f7a072','#4a2a5e',230,'#4a3324',`<circle cx="200" cy="230" r="50" fill="#ffcf73" opacity=".9"/><g transform="translate(320 80)"><circle r="30" fill="#fff8e6" stroke="#c9a46a" stroke-width="3"/><line x1="0" y1="0" x2="0" y2="-20" stroke="#5a3a12" stroke-width="3"/><g class="spin" style="animation-duration:6s"><line x1="0" y1="0" x2="16" y2="0" stroke="#e5484d" stroke-width="2"/></g></g>
 ${person(130,268,1.05,{sit:1,cloth:'#4a3a7a',crown:'#b8a060',beard:'#ccc',hair:'#aaa',arm:'lap',eyesClosed:1})}`),
nightWalk:()=>sc('#0f1a3a','#2a2f6a',240,'#1f2a1f',`${stars(50,230)}${mountains(240,'#2b3a5a','#c9d6ee')}
 <g class="walk">${person(230,272,.85,{cloth:'#4a3a7a',beard:'#ccc',hair:'#aaa',arm:'down',eyesClosed:1})}${lady(270,274,.8,'#6b5a8a',{arm:'down'})}</g>`,{moon:[80,50]}),
naradaComforts:()=>sc('#bfe3f5','#f4e3b5',240,'#c9a46a',`${palace(320,242,.8)}${king(200,272,1,'#1f6fb3',{arm:'fold'})}<circle class="tear" cx="198" cy="203" r="1.6" fill="#7fb6e8"/>
 <g class="float">${narada(100,240,1)}</g>`),
/* Ep8 */
omens:()=>sc('#3a2f52','#7a4f5a',235,'#4a3a2a',`<path d="M0,0 L400,0 L400,80 Q300,100 200,80 Q100,60 0,85Z" fill="#2a2240" opacity=".7"/>${jackal(80,262,1.3)}${cows(320,262,.75).replace('style="display:none"','')}
 ${king(200,272,1,'#1f6fb3')}`),
arjunaReturns:()=>sc('#9a8fa8','#5a4a6a',235,'#4a3a3a',`${king(200,270,1.1,'#1f6fb3',{arm:'down'})}<circle class="tear" cx="196" cy="198" r="1.8" fill="#9fd3ff"/><circle class="tear" style="animation-delay:1s" cx="204" cy="198" r="1.8" fill="#9fd3ff"/>
 ${king(300,272,.9,'#2a9d8f',{flip:1})}${king(90,272,.9,'#e9c46a')}`),
remember:()=>sc('#2a3a6a','#5a6aa0',240,'#2a2a3a',`${stars(30,230)}<g opacity=".8">${emojiOrb(110,80,'🏹',22,0)}${emojiOrb(200,60,'🐎',22,.4)}${emojiOrb(290,80,'🤝',22,.8)}</g>
 <g class="pulse"><circle cx="200" cy="140" r="30" fill="#bfe6ff" opacity=".25"/></g>${person(200,272,1.1,{sit:1,cloth:'#1f6fb3',crown:'#f2c14e',arm:'lap',eyesClosed:1})}`),
robbed:()=>sc('#c9b48a','#8a6d4b',235,'#7a5a3a',`${king(120,270,1,'#1f6fb3',{arm:'bow'})}
 <g class="walk">${[230,280,330].map(x=>person(x,272,.8,{cloth:'#6b4a2a',arm:'stick',flip:1})).join('')}</g>`),
gita:()=>sc('#ffe7b0','#f7b267',240,'#c9a46a',`${bookGlow(280,110,1.3)}${raysAt(280,110,14,90,.3)}${person(170,272,1.15,{sit:1,cloth:'#1f6fb3',crown:'#f2c14e',arm:'lap',eyesClosed:1,halo:'#fff3b0'})}`),
himalaya:()=>sc('#bcd8f0','#eef4fb',250,'#e8eef5',`${mountains(250,'#8ea4c8','#fff')}
 <g class="walk">${[150,190,230,270,310].map((x,i)=>king(x,284,.6,['#1f6fb3','#2a9d8f','#e9c46a','#7b2cbf','#e76f51'][i],{arm:'down',flip:1})).join('')}${lady(345,284,.6,'#d6336c',{arm:'down',flip:1})}</g>`)
});
