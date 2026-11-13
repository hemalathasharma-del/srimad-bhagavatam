const SVG=[
()=>{const sk=sky('#1a1240','#3d1f5c');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>${stars(40,300)}
 <circle class="pulse" cx="200" cy="155" r="95" fill="#ff9ab0" opacity=".25"/><circle cx="200" cy="155" r="75" fill="#ffb7c5" opacity=".35"/>
 <g transform="translate(200 165)"><ellipse cx="0" cy="0" rx="26" ry="20" fill="#f1c6a0"/><circle cx="-18" cy="-14" r="13" fill="#f1c6a0"/><path d="M-24,-15 q3,3 6,0" stroke="#7a4a2a" fill="none"/></g>
 <g class="float"><circle class="pulse" cx="232" cy="118" r="18" fill="#7ec8ff" opacity=".6"/>${person(232,140,.42,{skin:'#3a6fd0',cloth:'#f2c14e',crown:'#f2c14e',arm:'up',halo:'#bfe6ff'})}<circle cx="242" cy="113" r="4" fill="#d4a017"/></g>
 <g class="bounce-off"><circle cx="290" cy="110" r="7" fill="#ff7a1a"/><circle cx="290" cy="110" r="12" fill="#ffb347" opacity=".4"/></g>
 <g class="bounce-off2"><circle cx="120" cy="120" r="6" fill="#ff7a1a"/><circle cx="120" cy="120" r="11" fill="#ffb347" opacity=".4"/></g>`)},
()=>{const sk=sky('#ffcf8a','#ff9d6c');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>
 <circle class="pulse" cx="320" cy="80" r="34" fill="#fff3c4"/>
 <rect y="230" width="400" height="70" fill="#d79a52"/>${palace(200,232,1.2)}
 ${person(200,262,.9,{cloth:'#7b2cbf',crown:'#f2c14e',arm:'down',tilak:1,mala:1})}
 ${person(140,262,.65,{cloth:'#2a9d8f',arm:'fold'})}${person(260,262,.65,{cloth:'#e76f51',arm:'fold',flip:1})}`)},
()=>{const sk=sky('#6e8fb8','#c9b48a');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>
 <rect y="225" width="400" height="75" fill="#8a6d3b"/>${tree(40,228,.9)}${tree(370,228,.8)}
 ${bull(150,252,1)}${cow(250,252,.95)}
 ${person(205,252,.8,{skin:'#3b3b3b',cloth:'#1a1a1a',crown:'#7a6a3a',arm:'stick',hair:'#000'})}
 ${person(330,262,1,{cloth:'#7b2cbf',crown:'#f2c14e',arm:'sword',tilak:1,flip:1})}`)},
()=>{const sk=sky('#87b6e0','#f2d9a6');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>
 <rect y="225" width="400" height="75" fill="#8fa35a"/>${tree(50,228,.9,'#2f7a46')}
 ${person(250,262,1,{cloth:'#7b2cbf',crown:'#f2c14e',arm:'point',tilak:1})}
 <g transform="translate(305 258) rotate(70)"><g>${person(0,0,.7,{skin:'#3b3b3b',cloth:'#1a1a1a',arm:'fold',hair:'#000'})}</g></g>
 <line x1="330" y1="270" x2="365" y2="262" stroke="#3b2414" stroke-width="3"/>
 <g class="float">${bull(110,252,.9)}</g>${cow(175,254,.75).replace(/class="tear"/g,'class="tear" style="display:none"')}`)},
()=>{const sk=sky('#f7b267','#e07a5f');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>
 <rect y="230" width="400" height="70" fill="#7a8c3e"/>${tree(30,232,1)}${tree(380,232,1.1)}${hut(110,234,1)}
 <g class="breathe">${person(210,262,1.05,{sit:1,cloth:'#e9c46a',beard:'#eee',hair:'#999',topknot:1,eyesClosed:1,arm:'lap',tilak:1,mala:1})}</g>
 <path d="M196,214 C190,224 200,232 210,226 C220,220 230,230 224,240" fill="none" stroke="#5b6b3a" stroke-width="4" stroke-linecap="round"/>
 ${person(315,262,.95,{cloth:'#7b2cbf',crown:'#f2c14e',arm:'bow',flip:1})}`)},
()=>{const sk=sky('#3d2c5e','#a3485a');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>
 ${stars(18,90)}${river(235,'#2b4f7e','#7fb6e8')}
 <rect y="205" width="400" height="32" fill="#6b5a3a"/>
 <circle class="glowred" cx="170" cy="170" r="55" fill="#ff3b3b" opacity=".4"/>
 ${person(170,232,1,{cloth:'#f4a261',arm:'up',topknot:1})}
 <g opacity=".85">${snake(300,190,1.4,'#2e7d32')}</g>
 <text x="300" y="80" text-anchor="middle" font-family="Cormorant Garamond,serif" font-size="56" font-weight="700" fill="#f2c14e" class="pulse">7</text>
 <text x="300" y="100" text-anchor="middle" font-family="Nunito" font-size="12" fill="#f6efe1">days</text>`)},
()=>{const sk=sky('#9fd1e8','#f4e3b5');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>
 ${river(205,'#4a9fd1','#bfe6ff')}
 <rect y="230" width="400" height="70" fill="#e6d3a3"/>
 ${tree(25,232,.8)}${tree(375,232,.8)}
 ${person(200,268,1.05,{sit:1,cloth:'#f1faee',arm:'fold',tilak:1,mala:1})}
 ${[70,115,285,330].map((x,i)=>person(x,272,.75,{sit:1,cloth:['#e9c46a','#f4a261','#e9c46a','#f4a261'][i],beard:'#ddd',hair:'#888',topknot:1,arm:'lap',flip:x>200,eyesClosed:i%2}) ).join('')}`)},
()=>{const sk=sky('#f9d77e','#f7a072');return svgWrap(sk.def,`<rect width="400" height="300" fill="${sk.fill}"/>
 <g class="rays" style="transform-origin:200px 140px">${Array.from({length:16},(_,i)=>`<rect x="198" y="20" width="4" height="120" fill="#fff6d6" opacity=".35" transform="rotate(${i*22.5} 200 140)"/>`).join('')}</g>
 <rect y="235" width="400" height="65" fill="#e6d3a3"/>
 <g class="walk">${person(205,262,1.1,{cloth:'#f6efe1',arm:'up',halo:'#fff3b0',tilak:1,mala:1})}</g>
 ${person(110,268,.95,{sit:1,cloth:'#f1faee',arm:'fold',tilak:1})}
 ${[45,300,350].map((x,i)=>person(x,262,.72,{cloth:['#e9c46a','#f4a261','#e9c46a'][i],beard:'#ddd',hair:'#888',topknot:1,arm:'fold',flip:x>200})).join('')}
 <g class="float"><rect x="245" y="70" width="44" height="30" rx="3" fill="#fff8e6"/><line x1="267" y1="70" x2="267" y2="100" stroke="#c9a46a"/><text x="267" y="118" text-anchor="middle" font-size="9" font-family="Nunito" fill="#5a3a12">Bhāgavatam</text></g>`)}
];
