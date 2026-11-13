function krishna(x,y,s,arm='up',extra={}){
  // blue form, yellow cloth, crown and peacock feather
  const hy=extra.sit?-46:-62;
  return `<g transform="translate(${x} ${y}) scale(${s})">${person(0,0,1,Object.assign({skin:'#3a6fd0',cloth:'#f2c14e',crown:'#f2c14e',arm,halo:'#bfe6ff',mala:1},extra))}
  <g transform="translate(6 ${hy-18}) rotate(20)"><path d="M0,0 C-6,-8 -4,-20 0,-24 C4,-20 6,-8 0,0Z" fill="#2a8a6a"/><ellipse cx="0" cy="-15" rx="3" ry="4" fill="#1f4fa8"/><circle cx="0" cy="-15" r="1.4" fill="#e8b923"/></g></g>`;
}
function vina(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s}) rotate(-30)"><line x1="-30" y1="0" x2="30" y2="0" stroke="#8b5a2b" stroke-width="4"/><circle cx="-30" cy="4" r="9" fill="#c98f5a"/><circle cx="30" cy="4" r="9" fill="#c98f5a"/><line x1="-28" y1="-2" x2="28" y2="-2" stroke="#f4e3b0" stroke-width=".8"/></g>`;}
function chariot(x,y,s=1,flip=0){return `<g transform="translate(${x} ${y}) scale(${flip?-s:s} ${s})"><path d="M-40,-30 L40,-30 L34,0 L-34,0Z" fill="#c9a032"/><path d="M-40,-30 L-46,-56 L-30,-34Z" fill="#e2b83c"/><line x1="30" y1="-30" x2="30" y2="-95" stroke="#6b4a1a" stroke-width="2.5"/><path d="M30,-95 L58,-88 L30,-80Z" fill="#ef8a3c" class="sway"/><g transform="translate(-10 4)"><circle r="18" fill="none" stroke="#6b4a1a" stroke-width="4"/><g class="spin">${[0,45,90,135].map(a=>`<line x1="-18" y1="0" x2="18" y2="0" stroke="#6b4a1a" stroke-width="2" transform="rotate(${a})"/>`).join('')}</g></g></g>`;}
function petals(n){let s='';for(let i=0;i<n;i++){const x=(i*53+20)%400;s+=`<g transform="translate(${x} 0)"><ellipse class="petal" style="animation-delay:-${(i*0.7)%5}s;animation-duration:${4+i%3}s" cx="0" cy="0" rx="4" ry="2.5" fill="${['#ff8fab','#ffd34d','#ff9f43','#fff'][i%4]}"/></g>`;}return s;}
function arrowsBed(x,y){let s=`<rect x="${x-80}" y="${y-6}" width="160" height="6" fill="#6b4a1a"/>`;for(let i=0;i<22;i++){const ax=x-78+i*7.4;s+=`<line x1="${ax}" y1="${y}" x2="${ax+(i%2?3:-3)}" y2="${y+40}" stroke="#7a5a2a" stroke-width="1.6"/><path d="M${ax-2},${y+40} l2,6 l2,-6Z" fill="#999"/>`;}return s;}

const NEW={
forest:()=>{const sk=sky('#ffd89a','#f2a65a');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/><circle class="pulse" cx="70" cy="70" r="28" fill="#fff3c4"/>
 <rect y="225" width="400" height="75" fill="#7c9a4a"/>${tree(25,230,1.2)}${tree(380,230,1.3)}${tree(330,228,.9,'#2f7a46')}${tree(75,228,.8,'#2f7a46')}
 <g transform="translate(200 255)"><path d="M-14,0 L14,0 L10,-8 L-10,-8Z" fill="#6b4a1a"/><g class="flicker"><path d="M-8,-8 Q0,-34 8,-8Z" fill="#ff8c1a"/><path d="M-4,-8 Q0,-24 4,-8Z" fill="#ffd34d"/></g></g>
 <rect x="170" y="196" width="60" height="16" rx="3" fill="#a8763f"/>
 ${person(200,198,.95,{sit:1,cloth:'#f1faee',beard:'#eee',hair:'#bbb',topknot:1,arm:'up',tilak:1,mala:1,halo:'#fff3b0'})}
 ${[[60,282],[110,290],[150,296],[250,296],[290,290],[340,282]].map(([x,y],i)=>person(x,y,.7,{sit:1,cloth:['#e9c46a','#f4a261'][i%2],beard:'#ddd',hair:'#888',topknot:1,arm:'fold',flip:x>200})).join('')}`)},
narada:()=>{const sk=sky('#a7d3f0','#f4e3b5');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>
 ${river(235,'#4a9fd1','#bfe6ff')}<rect y="215" width="400" height="22" fill="#d9c08a"/>${tree(370,220,1)}
 <g class="float"><ellipse cx="280" cy="150" rx="55" ry="16" fill="#fff" opacity=".9"/><ellipse cx="255" cy="142" rx="28" ry="14" fill="#fff"/>
 ${person(280,145,1,{cloth:'#ffb347',topknot:1,arm:'fold',tilak:1,mala:1,halo:'#fff6c8'})}${vina(280,110,1)}</g>
 ${person(120,232,1.05,{sit:1,cloth:'#f1faee',beard:'#ddd',hair:'#888',topknot:1,arm:'lap',tilak:1})}
 <g class="write"><rect x="138" y="198" width="34" height="9" rx="2" fill="#f4e3b0"/><line x1="140" y1="202" x2="168" y2="202" stroke="#8a5a2a" stroke-width=".8"/></g>`)},
draupadi:()=>{const sk=sky('#1b1640','#3d2a5c');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>${stars(30,140)}<circle cx="330" cy="60" r="20" fill="#f4f0d6"/>
 <rect y="230" width="400" height="70" fill="#3c3552"/>
 ${person(110,262,1,{cloth:'#d6336c',arm:'fold',hair:'#120a05'})}<circle class="tear" cx="107" cy="205" r="1.6" fill="#9fd3ff"/>
 ${person(205,268,.85,{sit:1,skin:'#5a4a3a',cloth:'#2b2b2b',arm:'fold',hair:'#000'})}<path d="M196,238 L214,238" stroke="#c0a060" stroke-width="3"/>
 ${person(300,262,1.05,{cloth:'#1f6fb3',crown:'#f2c14e',arm:'bow',flip:1})}`)},
kunti:()=>{const sk=sky('#fbd3a0','#f7a072');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>
 <g class="rays" style="transform-origin:260px 150px">${Array.from({length:14},(_,i)=>`<rect x="258" y="40" width="4" height="110" fill="#fff6d6" opacity=".3" transform="rotate(${i*25.7} 260 150)"/>`).join('')}</g>
 <rect y="235" width="400" height="65" fill="#d8b77a"/>${chariot(350,240,.9)}
 ${krishna(250,262,1.1,'up')}
 ${person(130,268,1,{sit:1,cloth:'#f6f6f6',hair:'#ddd',arm:'fold',tilak:1})}
 <g transform="translate(70 120)"><g class="float"><circle r="22" fill="#ffb7c5" opacity=".5" class="pulse"/><ellipse cx="0" cy="3" rx="9" ry="7" fill="#f1c6a0"/></g></g>`)},
bhishma:()=>{const sk=sky('#f7b267','#c8553d');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/><circle cx="330" cy="200" r="34" fill="#ffd27a" opacity=".9"/>
 <rect y="240" width="400" height="60" fill="#7a5a3a"/>
 ${arrowsBed(150,206)}
 
 <g transform="translate(86 196)"><path d="M8,-12 L138,-12 L138,2 L8,2Z" fill="#f4a261"/><circle cx="0" cy="-12" r="13" fill="#e3a978"/><path d="M-6,-2 Q2,14 12,-4Z" fill="#fff"/><path d="M-13,-16 Q0,-30 12,-18" fill="#eee"/><circle cx="-3" cy="-14" r="1.3" fill="#222"/><circle class="pulse" cx="0" cy="-12" r="17" fill="#fff3b0" opacity=".18"/></g>
 ${krishna(290,262,1,'fold')}
 ${[220,350].map((x,i)=>person(x,266,.8,{cloth:['#1f6fb3','#2a9d8f'][i],crown:'#f2c14e',arm:'fold',flip:1})).join('')}`)},
dvaraka:()=>{const sk=sky('#9fd8f5','#fff1c9');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>
 <rect x="0" y="120" width="400" height="120" fill="#f3d38a"/>${[30,110,290,370].map(x=>`<path d="M${x-22},120 Q${x},80 ${x+22},120Z" fill="#f8e3a8"/><rect x="${x-22}" y="120" width="44" height="120" fill="#efc96e"/>`).join('')}
 <path d="M150,240 L150,140 Q200,90 250,140 L250,240Z" fill="#e8b84a"/><path d="M165,240 L165,150 Q200,112 235,150 L235,240Z" fill="#7a3e12" opacity=".35"/>
 <rect y="240" width="400" height="60" fill="#e6c98f"/>
 <g class="walkL">${chariot(200,270,1.05)}${krishna(190,236,.85,'up')}</g>
 ${petals(16)}
 ${[60,340].map((x,i)=>person(x,272,.8,{cloth:['#e76f51','#7b2cbf'][i],arm:'up',flip:x>200})).join('')}`)},
birth:()=>{const sk=sky('#fde2c8','#f6b98a');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>
 ${[60,340].map(x=>`<rect x="${x-10}" y="40" width="20" height="200" fill="#e9c98f"/>`).join('')}<path d="M40,40 Q200,-10 360,40Z" fill="#f4dcae"/>
 <rect y="240" width="400" height="60" fill="#c9905a"/>
 <line x1="160" y1="60" x2="200" y2="150" stroke="#8b5a2b" stroke-width="2"/><line x1="240" y1="60" x2="200" y2="150" stroke="#8b5a2b" stroke-width="2"/>
 <g class="rock" style="transform-origin:200px 60px"><line x1="200" y1="60" x2="200" y2="150" stroke="none"/><path d="M160,150 Q200,185 240,150Z" fill="#d6336c"/><ellipse cx="200" cy="150" rx="40" ry="6" fill="#f2c14e"/><circle cx="200" cy="146" r="9" fill="#f1c6a0"/><circle cx="197" cy="145" r="1.2" fill="#222"/><circle cx="203" cy="145" r="1.2" fill="#222"/></g>
 <circle class="pulse" cx="200" cy="146" r="40" fill="#fff3b0" opacity=".3"/>
 ${person(110,268,.95,{cloth:'#e76f51',arm:'fold'})}${person(295,268,.95,{cloth:'#7b2cbf',crown:'#f2c14e',arm:'fold',flip:1})}`)},
vidura:()=>{const sk=sky('#f7a072','#6d3b6e');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/><circle cx="200" cy="215" r="44" fill="#ffcf73" opacity=".9"/>
 <rect y="230" width="400" height="70" fill="#5a3d2b"/>${tree(370,232,1,'#2b4a2f')}${tree(30,232,.9,'#2b4a2f')}
 ${person(140,268,1.05,{sit:1,cloth:'#4a3a7a',crown:'#b8a060',beard:'#ccc',hair:'#aaa',arm:'lap',eyesClosed:1})}
 ${person(260,264,1.05,{cloth:'#ef8a3c',beard:'#999',hair:'#666',topknot:1,arm:'point',tilak:1,mala:1,flip:1})}
 <path d="M300,300 Q340,250 400,240" stroke="#c9a46a" stroke-width="6" fill="none" opacity=".6"/>`)},
depart:()=>{const sk=sky('#ffd89a','#7a4f9a');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>
 <g class="rays" style="transform-origin:220px 110px">${Array.from({length:16},(_,i)=>`<rect x="218" y="0" width="4" height="110" fill="#fff6d6" opacity=".35" transform="rotate(${i*22.5} 220 110)"/>`).join('')}</g>
 <rect y="240" width="400" height="60" fill="#6b5a3a"/>
 <g class="rise">${krishna(220,190,1,'up')}</g>
 <g transform="translate(110 270)">${person(0,0,.95,{sit:1,cloth:'#1f6fb3',crown:'#f2c14e',arm:'fold'})}</g><circle class="tear" cx="108" cy="228" r="1.6" fill="#9fd3ff"/>
 ${[300,340].map((x,i)=>person(x,268,.8,{cloth:['#2a9d8f','#e9c46a'][i],crown:'#f2c14e',arm:'fold',flip:1})).join('')}`)},
cover:()=>{const sk=sky('#0b2a6b','#123c8c');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>${stars(60,300)}`)}
};

