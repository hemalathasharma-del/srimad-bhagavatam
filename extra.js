/* Extra scenes from the chapter contents (Ch 12, 13, 15, 16, 17, 18) */
Object.assign(NEW,{
astrologers:()=>sc('#2a2f6a','#5a4a8a',240,'#7a5a3a',`${stars(30,150)}${['🪐','☀️','🌙','⭐'].map((e,i)=>emojiOrb(70+i*85,60,e,18,i*.4)).join('')}
 <g class="rock" style="transform-origin:200px 110px"><path d="M165,170 Q200,200 235,170Z" fill="#d6336c"/><ellipse cx="200" cy="170" rx="36" ry="6" fill="#f2c14e"/><circle cx="200" cy="166" r="8" fill="#f1c6a0"/></g><line x1="170" y1="110" x2="200" y2="170" stroke="#8b5a2b" stroke-width="1.5"/><line x1="230" y1="110" x2="200" y2="170" stroke="#8b5a2b" stroke-width="1.5"/>
 ${sage(80,280,.8,{arm:'point'})}${sage(320,280,.8,{arm:'up',flip:1})}<rect x="105" y="236" width="26" height="8" rx="2" fill="#f4e3b0"/>`),
tour:()=>sc('#a9d6f5','#f4e3b5',235,'#a8b86a',`${mountains(235,'#8ea4c8','#fff')}${river(262,'#4a9fd1','#bfe6ff')}
 <g class="walkL">${chariot(200,258,1)}${king(190,226,.8,'#7b2cbf',{arm:'up'})}</g>${person(330,256,.6,{sit:1,cloth:'#e76f51',arm:'fold',flip:1})}${person(60,256,.6,{sit:1,cloth:'#2a9d8f',arm:'fold'})}`,{sun:[350,50]}),
dharmaEarth:()=>sc('#c9d8e8','#e8d9b5',220,'#8fa35a',`${river(255,'#4a9fd1','#bfe6ff')}${tree(40,222,.9)}${tree(370,222,1)}
 ${bull(150,250,1)}${cow(260,250,.95)}
 <g class="float"><ellipse cx="150" cy="150" rx="34" ry="20" fill="#fff"/><text x="150" y="157" text-anchor="middle" font-size="20">❓</text></g>
 <g class="float" style="animation-delay:1s"><ellipse cx="270" cy="140" rx="38" ry="22" fill="#fff"/><text x="270" y="148" text-anchor="middle" font-size="20">💧👣</text></g>`),
fourLegs:()=>sc('#6e8fb8','#c9b48a',230,'#8a6d3b',`${bull(200,262,1.6)}
 ${[['🧘',70,80],['🧼',150,60],['💗',250,60]].map(([e,x,y])=>`<g opacity=".35">${emojiOrb(x,y,e,22)}</g><path d="M${x-16},${y-16} L${x+16},${y+16} M${x+16},${y-16} L${x-16},${y+16}" stroke="#c0392b" stroke-width="4"/>`).join('')}
 <circle class="pulse" cx="330" cy="80" r="34" fill="#fff3b0" opacity=".5"/>${emojiOrb(330,80,'✔️',24)}`),
chanting:()=>sc('#ffe7b0','#f7b267',240,'#c9a46a',`${raysAt(200,120,16,120,.3)}<g class="pulse"><circle cx="200" cy="110" r="34" fill="#fff6d6"/></g><text x="200" y="122" text-anchor="middle" font-size="34" class="float">📿</text>
 ${[70,140,260,330].map((x,i)=>person(x,276,.75,{sit:1,cloth:['#e9c46a','#f4a261','#2a9d8f','#d6336c'][i],arm:i%2?'up':'fold',flip:x>200})).join('')}
 ${['♪','♫','♪','♫'].map((n,i)=>`<text class="float" style="animation-delay:${i*.5}s" x="${100+i*65}" y="${190-(i%2)*20}" font-size="22" fill="#7b2cbf">${n}</text>`).join('')}`),
viduraPast:()=>sc('#3a1f3a','#7a2f4a',235,'#3a2a2a',`<circle class="glowred" cx="250" cy="150" r="70" fill="#ff3b3b" opacity=".35"/>
 ${person(260,270,1.15,{skin:'#4a5a8a',cloth:'#7a1b2a',crown:'#d4a017',arm:'down',hair:'#111'})}<line x1="282" y1="190" x2="290" y2="270" stroke="#d4a017" stroke-width="3"/>
 ${person(120,270,1,{cloth:'#e9c46a',beard:'#ddd',hair:'#888',topknot:1,arm:'point',tilak:1})}
 <g class="float">${person(330,150,.5,{cloth:'#ef8a3c',topknot:1,arm:'fold'})}</g>`),
moreMemories:()=>sc('#2a3a6a','#5a6aa0',240,'#2a2a3a',`${stars(30,230)}${emojiOrb(90,80,'💪',24,0)}${emojiOrb(200,55,'🍃',24,.4)}${emojiOrb(310,80,'🏹',24,.8)}
 ${person(200,272,1.1,{sit:1,cloth:'#1f6fb3',crown:'#f2c14e',arm:'lap',eyesClosed:1})}`)
});
{
 const P=EPS[8].scenes;
 P.splice(2,0,
  {art:'astrologers',en:["The Astrologers' Predictions","At his birth, learned astrologers studied the stars and said: this child will protect his people like Lord Rāma, be as generous as King Śibi and as brave as Arjuna. And at the end of his life he will hear about the Lord from Śukadeva and reach Him."],
   hi:["ज्योतिषियों की भविष्यवाणी","उसके जन्म पर विद्वान ज्योतिषियों ने ग्रह-नक्षत्र देखकर कहा: यह बालक भगवान राम की तरह प्रजा की रक्षा करेगा, राजा शिबि जितना उदार और अर्जुन जितना वीर होगा। और जीवन के अंत में यह शुकदेव जी से भगवान की कथा सुनकर उन्हें प्राप्त करेगा।"]},
  {art:'tour',en:["The Emperor's World Tour","As emperor, Parīkṣit toured the whole world. Everywhere he went, people sang the glories of his grandfathers, the Pāṇḍavas, and of Krishna's kindness to them."],
   hi:["सम्राट की विश्व-यात्रा","सम्राट बनकर परीक्षित ने पूरे संसार की यात्रा की। जहाँ भी वे गए, लोग उनके दादाओं, यानी पांडवों की, और उन पर श्रीकृष्ण की कृपा की महिमा गाते थे।"]},
  {art:'dharmaEarth',en:["Dharma and Mother Earth","By the Sarasvatī river, the bull, Dharma, asked the cow, Mother Earth, why she was crying. She said: Krishna has left, and His lotus feet no longer touch me. Without Him, Kali has come."],
   hi:["धर्म और धरती माता","सरस्वती नदी के किनारे बैल रूपी धर्म ने गाय रूपी धरती माता से पूछा कि वे क्यों रो रही हैं। उन्होंने कहा: श्रीकृष्ण चले गए हैं, और उनके चरण-कमल अब मुझे नहीं छूते। उनके बिना कलि आ गया है।"]});
 const bi=P.findIndex(x=>x.art===2);
 P.splice(bi+1,0,{art:'fourLegs',en:["Dharma's Four Legs","Parīkṣit asked the bull who had broken his legs. The bull's four legs stood for austerity, cleanliness, mercy and truthfulness. In the age of Kali the first three were broken. Only truthfulness was left."],
   hi:["धर्म के चार पैर","परीक्षित ने बैल से पूछा कि उसके पैर किसने तोड़े। बैल के चार पैर थे: तप, पवित्रता, दया और सत्य। कलियुग में पहले तीन टूट गए थे। केवल सत्य बचा था।"]});
 const ki=P.findIndex(x=>x.art===3);
 P.splice(ki+1,0,{art:'chanting',en:["One Good Thing About Kali","Parīkṣit knew one good point of the age of Kali: good wishes bear fruit even when only thought of, but bad ones only when done. And in this age the easiest path to God is chanting His holy names."],
   hi:["कलियुग की एक अच्छी बात","परीक्षित कलियुग का एक गुण जानते थे: इस युग में अच्छे संकल्प केवल सोचने से फल देते हैं, पर बुरे काम करने पर ही। और इस युग में भगवान तक पहुँचने का सबसे सरल मार्ग उनके पवित्र नामों का जप है।"]});
 const gi=P.findIndex(x=>x.art===6);
 P[gi]={art:6,en:["On the Bank of the Gaṅgā","Parīkṣit did not get angry or try to escape. He felt he deserved the curse for his mistake. He gave the kingdom to his son Janamejaya and sat by the holy Gaṅgā, whose waters carry the dust of the Lord's feet, without food or water. Great sages and saintly kings came from everywhere. He asked them: 'What should a person do when death is near?'"],
   hi:["गंगा के तट पर","परीक्षित न क्रोधित हुए, न बचने का प्रयास किया। उन्हें लगा कि अपनी भूल के कारण वे इस श्राप के योग्य हैं। उन्होंने राज्य अपने पुत्र जनमेजय को सौंप दिया और बिना अन्न-जल के पवित्र गंगा के तट पर बैठ गए, जिसका जल भगवान के चरणों की धूल लिए बहता है। हर दिशा से महान ऋषि और संत राजा आए। उन्होंने उनसे पूछा: 'जब मृत्यु निकट हो, तो मनुष्य को क्या करना चाहिए?'"]};
 EPS[8].quiz.splice(2,0,{a:3,en:["Which leg of Dharma (the bull) was left in the age of Kali?",["Austerity","Cleanliness","Mercy","Truthfulness"],"Austerity, cleanliness and mercy were broken. Only truthfulness was left."],hi:["कलियुग में धर्म रूपी बैल का कौन-सा पैर बचा था?",["तप","पवित्रता","दया","सत्य"],"तप, पवित्रता और दया टूट गए थे। केवल सत्य बचा था।"]});
 EPS[8].quiz.push({a:0,en:["What is the easiest path to God in the age of Kali?",["Chanting the Lord's holy names","Going to war","Collecting gold","Sleeping a lot"],"In this age, chanting the Lord's names is the easiest path."],hi:["कलियुग में भगवान तक पहुँचने का सबसे सरल मार्ग क्या है?",["भगवान के पवित्र नामों का जप","युद्ध करना","सोना इकट्ठा करना","बहुत सोना"],"इस युग में भगवान के नामों का जप सबसे सरल मार्ग है।"]});
 EPS[8].lessons.en.push("In the age of Kali, the easiest way to God is chanting His names.");
 EPS[8].lessons.hi.push("कलियुग में भगवान तक पहुँचने का सबसे सरल मार्ग उनके नामों का जप है।");

 EPS[6].scenes.splice(1,0,{art:'viduraPast',en:["Who Was Vidura?","Vidura was really Yamarāja, the judge of the dead. Once he gave the sage Māṇḍavya a punishment far too heavy for a small childhood mistake. The sage cursed him to be born on earth, and so he was born as Vidura."],
   hi:["विदुर कौन थे?","विदुर वास्तव में मृतकों के न्यायाधीश यमराज थे। एक बार उन्होंने माण्डव्य ऋषि को बचपन की एक छोटी-सी भूल का बहुत बड़ा दंड दिया। ऋषि ने उन्हें पृथ्वी पर जन्म लेने का श्राप दिया, और इस प्रकार वे विदुर के रूप में जन्मे।"]});
 EPS[6].quiz.push({a:1,en:["Who was Vidura before he was born on earth?",["Indra","Yamarāja","Nārada","Brahmā"],"Vidura was Yamarāja, born on earth because of the sage Māṇḍavya's curse."],hi:["पृथ्वी पर जन्म से पहले विदुर कौन थे?",["इंद्र","यमराज","नारद","ब्रह्मा"],"विदुर यमराज थे, जो माण्डव्य ऋषि के श्राप के कारण पृथ्वी पर जन्मे।"]});

 EPS[7].scenes.splice(3,0,{art:'moreMemories',en:["How Krishna Helped","Arjuna remembered more: Krishna's plan helped Bhīma defeat the mighty Jarāsandha. When the angry sage Durvāsā came with his disciples and there was no food, Krishna ate one tiny leaf from Draupadī's pot, and they all felt full. By His mercy, Arjuna even received weapons from Lord Śiva and the demigods."],
   hi:["श्रीकृष्ण की सहायता","अर्जुन को और याद आया: श्रीकृष्ण की योजना से भीम ने शक्तिशाली जरासंध को हराया। जब क्रोधी ऋषि दुर्वासा अपने शिष्यों के साथ आए और भोजन नहीं था, तब श्रीकृष्ण ने द्रौपदी के पात्र से एक छोटा-सा पत्ता खाया, और सबका पेट भर गया। उनकी कृपा से अर्जुन को भगवान शिव और देवताओं से अस्त्र भी मिले।"]});
 EPS[7].quiz.push({a:2,en:["How did Krishna save the Pāṇḍavas from Durvāsā's anger?",["He hid them","He fought Durvāsā","He ate one leaf from Draupadī's pot","He sent rain"],"Krishna ate one tiny leaf, and Durvāsā and his disciples all felt full."],hi:["श्रीकृष्ण ने पांडवों को दुर्वासा के क्रोध से कैसे बचाया?",["उन्हें छिपा दिया","दुर्वासा से युद्ध किया","द्रौपदी के पात्र से एक पत्ता खाया","वर्षा भेज दी"],"श्रीकृष्ण ने एक छोटा-सा पत्ता खाया, और दुर्वासा तथा उनके शिष्यों का पेट भर गया।"]});
}
