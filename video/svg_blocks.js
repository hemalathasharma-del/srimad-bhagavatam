/* ---------- SVG building blocks ---------- */
let uid=0;
function sky(top,bottom){const id='g'+(++uid);return {def:`<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient>`,fill:`url(#${id})`};}
function stars(n,maxY=150){let s='';for(let i=0;i<n;i++){const x=(i*73+17)%400,y=(i*41+11)%maxY,r=(i%3)*0.5+0.6;s+=`<circle class="twinkle" style="animation-delay:${(i%7)*0.4}s" cx="${x}" cy="${y}" r="${r}" fill="#fff"/>`;}return s;}
function tree(x,y,s=1,c='#1f5d3a'){return `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-4" y="-30" width="8" height="30" fill="#4a2f1b"/><g class="sway"><circle cx="0" cy="-44" r="22" fill="${c}"/><circle cx="-14" cy="-34" r="14" fill="${c}"/><circle cx="14" cy="-34" r="14" fill="${c}"/></g></g>`;}
function person(x,y,s,o={}){
  const skin=o.skin||'#e3a978', cloth=o.cloth||'#c0392b', sit=o.sit;
  const hy=sit?-46:-62; let g='';
  if(o.halo) g+=`<circle class="pulse" cx="0" cy="${hy}" r="20" fill="${o.halo}" opacity=".5"/>`;
  if(sit){
    g+=`<ellipse cx="0" cy="-6" rx="24" ry="8" fill="${cloth}" opacity=".9"/>`;
    g+=`<path d="M-12,${hy+11} L12,${hy+11} L15,-8 L-15,-8 Z" fill="${cloth}"/>`;
  } else {
    g+=`<path d="M-11,${hy+11} L11,${hy+11} L18,0 L-18,0 Z" fill="${cloth}"/>`;
  }
  // arms
  const sh=hy+15, L=[-10,sh], R=[10,sh];
  const arm=(a,b)=>`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${skin}" stroke-width="5" stroke-linecap="round"/>`;
  const a=o.arm||'down';
  if(a==='down'){g+=arm(L,[-16,sh+22])+arm(R,[16,sh+22]);}
  if(a==='fold'){g+=arm(L,[-2,sh+10])+arm(R,[2,sh+10]);}
  if(a==='lap'){g+=arm(L,[-8,sh+24])+arm(R,[8,sh+24]);}
  if(a==='up'){g+=arm(L,[-16,sh+22])+arm(R,[24,sh-18]);}
  if(a==='point'){g+=arm(L,[-16,sh+22])+arm(R,[30,sh+2]);}
  if(a==='sword'){g+=arm(L,[-16,sh+22])+arm(R,[22,sh-14])+`<line x1="22" y1="${sh-14}" x2="34" y2="${sh-46}" stroke="#dfe6ee" stroke-width="3"/><line x1="17" y1="${sh-12}" x2="27" y2="${sh-17}" stroke="${'#d4a017'}" stroke-width="3"/>`;}
  if(a==='bow'){g+=arm(L,[-26,sh+2])+arm(R,[4,sh+4])+`<path d="M-26,${sh-22} Q-40,${sh+2} -26,${sh+26}" fill="none" stroke="#8b5a2b" stroke-width="2.5"/><line x1="-26" y1="${sh-22}" x2="-26" y2="${sh+26}" stroke="#ddd" stroke-width=".8"/>`;}
  if(a==='stick'){g+=arm(L,[-16,sh+22])+arm(R,[20,sh-8])+`<line x1="14" y1="${sh+20}" x2="30" y2="${sh-26}" stroke="#3b2414" stroke-width="3.5"/>`;}
  // head
  g+=`<circle cx="0" cy="${hy}" r="10" fill="${skin}"/>`;
  g+=`<path d="M-10,${hy-1} Q0,${hy-15} 10,${hy-1} Q5,${hy-8} -10,${hy-1}" fill="${o.hair||'#1b1209'}"/>`;
  if(o.topknot) g+=`<circle cx="0" cy="${hy-13}" r="5" fill="${o.hair||'#1b1209'}"/>`;
  if(o.beard) g+=`<path d="M-8,${hy+3} Q0,${hy+24} 8,${hy+3} Z" fill="${o.beard}"/>`;
  if(o.crown) g+=`<path d="M-9,${hy-8} L-9,${hy-18} L-4,${hy-13} L0,${hy-21} L4,${hy-13} L9,${hy-18} L9,${hy-8} Z" fill="${o.crown}"/>`;
  if(o.tilak) g+=`<line x1="0" y1="${hy-6}" x2="0" y2="${hy-1}" stroke="#fff" stroke-width="1.2"/>`;
  if(o.eyesClosed) g+=`<path d="M-5,${hy} q2,2 4,0 M1,${hy} q2,2 4,0" stroke="#3a2412" stroke-width="1" fill="none"/>`;
  else g+=`<circle cx="-3.5" cy="${hy}" r="1.2" fill="#2a1a0c"/><circle cx="3.5" cy="${hy}" r="1.2" fill="#2a1a0c"/>`;
  if(o.mala) g+=`<path d="M-7,${hy+12} Q0,${hy+26} 7,${hy+12}" fill="none" stroke="#f6e7b0" stroke-width="1.6" stroke-dasharray="1.5 1.5"/>`;
  const cls=o.cls?` class="${o.cls}"`:'';
  return `<g transform="translate(${x} ${y}) scale(${s}) ${o.flip?'scale(-1 1)':''}"${cls}>${g}</g>`;
}
function palace(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s})">
 <rect x="-70" y="-60" width="140" height="60" fill="#f1dcb1"/><rect x="-90" y="-40" width="25" height="40" fill="#e6c98f"/><rect x="65" y="-40" width="25" height="40" fill="#e6c98f"/>
 <path d="M-30,-60 Q0,-110 30,-60 Z" fill="#f3e3bf"/><path d="M-90,-40 Q-77.5,-66 -65,-40 Z" fill="#f3e3bf"/><path d="M65,-40 Q77.5,-66 90,-40 Z" fill="#f3e3bf"/>
 <line x1="0" y1="-95" x2="0" y2="-112" stroke="#b8860b" stroke-width="2"/><path d="M0,-112 L14,-107 L0,-102 Z" fill="#ef8a3c" class="sway"/>
 ${[-50,-25,0,25,50].map(i=>`<path d="M${i-7},0 L${i-7},-24 Q${i},-34 ${i+7},-24 L${i+7},0 Z" fill="#c9a46a"/>`).join('')}
</g>`;}
function bull(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s})">
 <ellipse cx="0" cy="-30" rx="34" ry="16" fill="#f4f0e6"/><circle cx="34" cy="-38" r="10" fill="#f4f0e6"/>
 <path d="M30,-46 q-4,-12 -10,-12 M38,-46 q4,-12 10,-12" stroke="#d8c9a3" stroke-width="3" fill="none"/>
 <path d="M-6,-46 q8,-10 16,0" fill="#efe7d6"/>
 <rect x="-3" y="-16" width="6" height="16" fill="#f4f0e6"/>
 <rect x="-24" y="-18" width="5" height="5" rx="2" fill="#e8dfcf"/><rect x="18" y="-18" width="5" height="5" rx="2" fill="#e8dfcf"/><rect x="-14" y="-18" width="5" height="4" rx="2" fill="#e8dfcf"/>
 <circle cx="37" cy="-39" r="1.3" fill="#222"/><path d="M-34,-32 q-10,6 -6,18" stroke="#e8dfcf" stroke-width="2" fill="none"/>
</g>`;}
function cow(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s})">
 <ellipse cx="0" cy="-28" rx="30" ry="14" fill="#c98f5a"/><circle cx="-30" cy="-34" r="9" fill="#c98f5a"/>
 ${[-20,-10,12,22].map(i=>`<rect x="${i-2}" y="-16" width="4" height="16" fill="#b57c48"/>`).join('')}
 <circle cx="-33" cy="-35" r="1.3" fill="#222"/>
 <circle class="tear" cx="-34" cy="-31" r="1.6" fill="#9fd3ff"/><circle class="tear" style="animation-delay:1s" cx="-34" cy="-31" r="1.6" fill="#9fd3ff"/>
 <path d="M30,-30 q8,4 6,16" stroke="#b57c48" stroke-width="2" fill="none"/>
</g>`;}
function hut(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-30" y="-34" width="60" height="34" fill="#a8763f"/><path d="M-42,-32 L0,-70 L42,-32 Z" fill="#d9b25f"/><rect x="-8" y="-24" width="16" height="24" fill="#3a2414"/></g>`;}
function snake(x,y,s=1,c='#3b7d3a',cls='sway'){return `<g transform="translate(${x} ${y}) scale(${s})"><g class="${cls}"><path d="M0,0 C10,-10 -10,-20 0,-30 C10,-40 -6,-50 4,-58" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/><ellipse cx="5" cy="-60" rx="6" ry="4" fill="${c}"/><circle cx="7" cy="-61" r="1" fill="#ff4"/></g></g>`;}
function river(y,c1='#2f6fb3',c2='#5aa0e0'){let w='';for(let i=0;i<3;i++){w+=`<path class="flow" style="animation-duration:${5+i*2}s" d="M0,${y+8+i*12} ${Array.from({length:12},(_,k)=>`q20,-6 40,0`).join(' ')}" stroke="${c2}" stroke-width="2" fill="none" opacity=".6"/>`;}return `<rect x="0" y="${y}" width="400" height="${300-y}" fill="${c1}"/>${w}`;}
function svgWrap(def,body){return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs>${def}</defs><g class="kenburns">${body}</g></svg>`;}

