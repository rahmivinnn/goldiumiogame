import{r as I,u as O,j as e,a as t,b as s,B as G,R as U,c as F}from"./vendor.b58d40d6.js";(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))x(o);new MutationObserver(o=>{for(const m of o)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&x(g)}).observe(document,{childList:!0,subtree:!0});function p(o){const m={};return o.integrity&&(m.integrity=o.integrity),o.referrerpolicy&&(m.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?m.credentials="include":o.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function x(o){if(o.ep)return;o.ep=!0;const m=p(o);fetch(o.href,m)}})();var X={},j=I.exports;X.createRoot=j.createRoot,X.hydrateRoot=j.hydrateRoot;const _=()=>{const c=O();return e("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-black p-4",children:t("div",{className:"text-center",children:[e("h1",{className:"text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600",children:"Card Battle Game"}),e("p",{className:"text-gray-400 text-xl mb-8",children:"Experience epic card battles with amazing characters!"}),e("button",{onClick:()=>c("/battle"),className:"px-8 py-4 text-xl font-bold rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 text-white shadow-lg shadow-purple-500/30",children:"Start Battle"})]})})},D=({title:c,variant:h="default",att:p,def:x,health:o,mana:m,imageUrl:g,specialAbilities:u=[],isSelected:f=!1,onClick:v,disabled:A=!1,className:P="",level:T=1,isAttacking:M=!1,isDefending:L=!1})=>{const[b,E]=s.exports.useState(!1),[Y,k]=s.exports.useState(0),[N,$]=s.exports.useState({x:0,y:0}),w=s.exports.useRef(null),[C,S]=s.exports.useState("rgba(255, 255, 255, 0.1)");s.exports.useEffect(()=>{if(b){const l=setInterval(()=>{k(Math.random()*.5+.5),S(`rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.3)`)},100);return()=>clearInterval(l)}else k(0),S("rgba(255, 255, 255, 0.1)")},[b]);const z=l=>{if(!w.current)return;const r=w.current.getBoundingClientRect(),a=l.clientX-r.left,i=l.clientY-r.top,d=r.width/2,n=r.height/2,y=(i-n)/20,H=(d-a)/20;$({x:y,y:H})},Z=()=>{E(!1),$({x:0,y:0})},R=()=>{const l={default:"/frames/default-frame.svg",gold:"/frames/gold-frame.svg",silver:"/frames/silver-frame.svg",diamond:"/frames/diamond-frame.svg",emerald:"/frames/emerald-frame.svg",royal:"/frames/royal-frame.svg"};return l[h.toLowerCase()]||l.default},B=()=>{const l={default:"from-gray-700 to-gray-900",gold:"from-yellow-500 to-yellow-700",silver:"from-gray-300 to-gray-500",diamond:"from-blue-300 to-blue-500",emerald:"from-green-500 to-green-700",royal:"from-purple-500 to-purple-700"};return l[h.toLowerCase()]||l.default};return t("div",{ref:w,className:`
        relative w-72 h-96 cursor-pointer transform transition-all duration-300
        ${b?"scale-105":""}
        ${f?"ring-4 ring-yellow-400":""}
        ${A?"opacity-50 cursor-not-allowed":""}
        ${M?"animate-attack":""}
        ${L?"animate-defend":""}
        ${P}
      `,style:{transform:`perspective(1000px) rotateX(${N.x}deg) rotateY(${N.y}deg)`,boxShadow:`0 0 30px ${C}`},onMouseEnter:()=>E(!0),onMouseMove:z,onMouseLeave:Z,onClick:()=>!A&&(v==null?void 0:v()),children:[e("div",{className:"absolute inset-0 transform-gpu transition-transform duration-300",style:{transform:"translateZ(20px)",filter:"drop-shadow(0 0 10px rgba(0,0,0,0.3))"},children:e("img",{src:R(),alt:"frame",className:"w-full h-full pointer-events-none"})}),t("div",{className:"relative z-10 h-full p-6 flex flex-col transform-gpu transition-transform duration-300",style:{transform:"translateZ(30px)"},children:[t("div",{className:"flex justify-between items-center mb-4 transform-gpu",style:{transform:"translateZ(40px)"},children:[e("h3",{className:"text-xl font-bold text-white truncate flex-1 drop-shadow-lg",children:c}),t("span",{className:"px-2 py-1 bg-yellow-500/20 rounded-full text-yellow-300 text-sm font-bold drop-shadow-lg",children:["Lv.",T]})]}),t("div",{className:"relative w-full h-36 mb-4 group transform-gpu",style:{transform:"translateZ(50px)"},children:[e("div",{className:"absolute inset-0 z-10",children:t("div",{className:"absolute inset-0 animate-flame",style:{opacity:Y},children:[e("div",{className:"absolute inset-0 bg-gradient-to-t from-orange-500/50 to-transparent"}),e("div",{className:"absolute inset-0 bg-gradient-to-t from-yellow-500/30 to-transparent"}),e("div",{className:"absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent"})]})}),e("img",{src:g,alt:c,className:`
              w-full h-full object-contain rounded-lg transform transition-all duration-300
              ${b?"scale-110":""}
              drop-shadow-lg
            `}),e("div",{className:`
            absolute inset-0 rounded-lg bg-gradient-to-b ${B()} 
            opacity-20 transition-opacity duration-300
            ${b?"opacity-40":""}
          `})]}),e("div",{className:"grid grid-cols-2 gap-2 mb-2 transform-gpu",style:{transform:"translateZ(40px)"},children:[{icon:"\u2694\uFE0F",value:p,color:"red",label:"ATK"},{icon:"\u{1F6E1}\uFE0F",value:x,color:"blue",label:"DEF"},{icon:"\u2764\uFE0F",value:o,color:"green",label:"HP"},{icon:"\u2728",value:m,color:"purple",label:"MP"}].map((l,r)=>t("div",{className:`
                flex items-center gap-2 bg-black/30 rounded-lg p-1.5 group 
                hover:bg-${l.color}-500/20 transition-all duration-300
                transform hover:scale-105 hover:translate-z-10
              `,children:[e("span",{className:`text-${l.color}-500 group-hover:animate-pulse`,children:l.icon}),t("span",{className:"text-white font-semibold text-sm",children:[l.label,": ",l.value]})]},r))}),u.length>0&&t("div",{className:"bg-black/30 rounded-lg p-2 mt-auto max-h-[5.5rem] overflow-hidden group transform-gpu",style:{transform:"translateZ(30px)"},children:[t("h4",{className:"text-sm font-semibold text-white/90 mb-1 flex items-center gap-2",children:[e("span",{className:"text-yellow-400 group-hover:animate-spin",children:"\u2B50"}),"Special Abilities:"]}),e("div",{className:"space-y-1 overflow-y-auto custom-scrollbar pr-1",style:{maxHeight:"3.5rem"},children:u.map((l,r)=>t("div",{className:"text-xs bg-white/5 rounded px-2 py-1 flex items-center gap-1.5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105",children:[e("span",{className:"text-purple-300 flex-shrink-0 group-hover:animate-bounce",children:"\u{1F52E}"}),e("span",{className:"text-white/80 truncate",children:l})]},r))})]})]}),M&&t("div",{className:"absolute inset-0 animate-attack-flash",style:{transform:"translateZ(60px)"},children:[e("div",{className:"absolute inset-0 bg-red-500/30"}),e("div",{className:"absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0"}),e("div",{className:"absolute inset-0 animate-attack-sparkles"})]}),L&&t("div",{className:"absolute inset-0 animate-defend-flash",style:{transform:"translateZ(60px)"},children:[e("div",{className:"absolute inset-0 bg-blue-500/30"}),e("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"}),e("div",{className:"absolute inset-0 animate-shield-effect"})]}),e("style",{jsx:!0,children:`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        @keyframes attack {
          0% { transform: perspective(1000px) translateZ(0) rotateX(0) rotateY(0); }
          25% { transform: perspective(1000px) translateZ(-20px) rotateX(-5deg) rotateY(-5deg); }
          50% { transform: perspective(1000px) translateZ(150px) rotateX(5deg) rotateY(5deg); }
          75% { transform: perspective(1000px) translateZ(-10px) rotateX(-2deg) rotateY(-2deg); }
          100% { transform: perspective(1000px) translateZ(0) rotateX(0) rotateY(0); }
        }
        @keyframes defend {
          0% { transform: perspective(1000px) translateZ(0) rotateX(0) rotateY(0); }
          25% { transform: perspective(1000px) translateZ(20px) rotateX(5deg) rotateY(5deg); }
          50% { transform: perspective(1000px) translateZ(-50px) rotateX(-10deg) rotateY(-10deg); }
          75% { transform: perspective(1000px) translateZ(10px) rotateX(2deg) rotateY(2deg); }
          100% { transform: perspective(1000px) translateZ(0) rotateX(0) rotateY(0); }
        }
        @keyframes attack-flash {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes defend-flash {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes flame {
          0% { transform: scale(1) translateY(0); opacity: 0.5; }
          50% { transform: scale(1.1) translateY(-5px); opacity: 0.8; }
          100% { transform: scale(1) translateY(0); opacity: 0.5; }
        }
        @keyframes attack-sparkles {
          0% { background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%); }
          50% { background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 50%); }
          100% { background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%); }
        }
        @keyframes shield-effect {
          0% { transform: scale(1); opacity: 0; }
          50% { transform: scale(1.2); opacity: 0.5; }
          100% { transform: scale(1); opacity: 0; }
        }
        .animate-attack {
          animation: attack 1s ease-in-out;
        }
        .animate-defend {
          animation: defend 1s ease-in-out;
        }
        .animate-attack-flash {
          animation: attack-flash 0.5s ease-in-out infinite;
        }
        .animate-defend-flash {
          animation: defend-flash 0.5s ease-in-out infinite;
        }
        .animate-flame {
          animation: flame 1s ease-in-out infinite;
        }
        .animate-attack-sparkles {
          animation: attack-sparkles 0.5s ease-in-out infinite;
        }
        .animate-shield-effect {
          animation: shield-effect 0.5s ease-in-out infinite;
        }
      `})]})},K=()=>{const[c,h]=s.exports.useState({playerName:"Player 1",att:8,def:6,health:100,mana:10,goldBalance:1e3,level:25,imageUrl:"/characters/garfield-gold.svg",specialAbilities:[{name:"Food Heal",cost:3,goldCost:50},{name:"Monday Rage",cost:5,goldCost:100},{name:"Lazy Attack",cost:2,goldCost:30},{name:"Cat Nap",cost:4,goldCost:80},{name:"Pizza Power",cost:6,goldCost:150}]}),[p]=s.exports.useState({playerName:"Player 2",att:5,def:8,health:100,mana:4,goldBalance:1e3,level:18,imageUrl:"/characters/garfield-silver.svg",specialAbilities:[{name:"Happy Bark",cost:.1,goldCost:20},{name:"Tail Spin",cost:.2,goldCost:40},{name:"Puppy Eyes",cost:.15,goldCost:30},{name:"Bark Attack",cost:.25,goldCost:50},{name:"Doggy Dash",cost:.3,goldCost:60}]}),[x,o]=s.exports.useState([]),[m,g]=s.exports.useState(!1),[u,f]=s.exports.useState({type:"",message:"",damage:0}),[v,A]=s.exports.useState(!1),[P,T]=s.exports.useState(1);s.exports.useState({player1:[],player2:[]}),s.exports.useState("PREPARE"),s.exports.useState(null);const[M,L]=s.exports.useState(3),[b,E]=s.exports.useState(0),[Y,k]=s.exports.useState(!1),[N,$]=s.exports.useState({x:0,y:0}),[w,C]=s.exports.useState(!1),[S,z]=s.exports.useState(null),[Z,R]=s.exports.useState(0),B=r=>{let a={...c},i={...p},d="",n=0;switch(r){case"attack":a.mana>=2&&(n=Math.max(1,a.att-i.def),i.health=Math.max(0,i.health-n),a.mana-=2,d=`${a.playerName} attacked for ${n} damage!`,f({type:"attack",message:"ATTACK!",damage:n}));break;case"heal":a.mana>=3&&(a.health=Math.min(100,a.health+20),a.mana-=3,d=`${a.playerName} healed for ${20} health!`,f({type:"heal",message:"HEAL!",damage:20}));break;case"special":a.mana>=5&&(n=a.att*2.5,i.health=Math.max(0,i.health-n),a.mana-=5,d=`${a.playerName} unleashed ultimate attack for ${n} damage!`,f({type:"special",message:"ULTIMATE ATTACK!",damage:n}));break;case"charge":a.mana=Math.min(10,a.mana+3),d=`${a.playerName} charged mana!`,f({type:"charge",message:"MANA CHARGED!",damage:3});break;case"shield":a.mana>=4&&(a.def+=6,a.mana-=4,d=`${a.playerName} activated shield! Defense increased by ${6}!`,f({type:"shield",message:"SHIELD UP!",damage:6}));break;case"lazy_attack":a.mana>=2&&a.goldBalance>=30&&(n=Math.max(1,a.att*1.5-i.def),i.health=Math.max(0,i.health-n),a.mana-=2,a.goldBalance-=30,d=`${a.playerName} used Lazy Attack for ${n} damage!`,f({type:"special",message:"LAZY ATTACK!",damage:n}));break;case"cat_nap":a.mana>=4&&a.goldBalance>=80&&(a.health=Math.min(100,a.health+30),a.mana-=4,a.goldBalance-=80,d=`${a.playerName} took a Cat Nap and recovered ${30} health!`,f({type:"heal",message:"CAT NAP!",damage:30}));break;case"pizza_power":a.mana>=6&&a.goldBalance>=150&&(n=a.att*3,i.health=Math.max(0,i.health-n),a.att+=3,a.mana-=6,a.goldBalance-=150,d=`${a.playerName} used Pizza Power for ${n} damage and gained 3 attack!`,f({type:"special",message:"PIZZA POWER!",damage:n}));break}d&&(o(y=>[d,...y].slice(0,5)),g(!0),A(!0),setTimeout(()=>g(!1),2e3),h(a))},l=(r,a,i=0)=>{const d=a.target.getBoundingClientRect();$({x:a.clientX-d.left,y:a.clientY-d.top}),k(!0),setTimeout(()=>k(!1),1e3),i>0?(z(r),R(i),C(!0)):B(r)};return t("div",{className:"min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-black relative overflow-hidden",children:[t("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[e("div",{className:"absolute top-0 left-0 w-full h-full bg-[url('/patterns/game-bg.png')] opacity-20"}),e("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50"})]}),t("div",{className:"relative z-10 min-h-screen flex flex-col items-center justify-center p-8",children:[t("div",{className:"absolute top-0 left-0 right-0 p-4 flex justify-between items-center",children:[t("div",{className:"flex items-center space-x-4",children:[e("div",{className:"bg-black/50 backdrop-blur-sm rounded-lg p-2",children:t("span",{className:"text-white",children:["Turn ",P]})}),t("div",{className:"bg-black/50 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2",children:[e("div",{className:"w-4 h-4 bg-yellow-500 rounded-full animate-pulse"}),t("span",{className:"text-white",children:["Energy: ",M,"/10"]})]}),e("div",{className:"bg-black/50 backdrop-blur-sm rounded-lg p-2",children:t("span",{className:"text-white",children:["Combo: x",b]})})]}),t("div",{className:"bg-black/50 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2",children:[e("span",{className:"text-yellow-400",children:"\u{1F4B0}"}),t("span",{className:"text-white font-bold",children:[c.goldBalance," GOLD"]})]})]}),e("h1",{className:"text-4xl font-bold text-white mb-8 text-center",children:"Battle Arena"}),t("div",{className:`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto ${v?"animate-shake":""}`,children:[e("div",{className:"flex flex-col items-center",children:e(D,{title:c.playerName,variant:"gold",att:c.att,def:c.def,health:c.health,mana:c.mana,imageUrl:c.imageUrl,specialAbilities:c.specialAbilities.map(r=>r.name),level:c.level})}),e("div",{className:"flex flex-col items-center",children:e(D,{title:p.playerName,variant:"silver",att:p.att,def:p.def,health:p.health,mana:p.mana,imageUrl:p.imageUrl,specialAbilities:p.specialAbilities.map(r=>r.name),level:p.level})})]}),e("div",{className:"mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto",children:[{text:"Attack (2 Mana)",action:"attack",color:"red",cost:0},{text:"Heal (3 Mana)",action:"heal",color:"green",cost:0},{text:"Special (5 Mana)",action:"special",color:"purple",cost:0},{text:"Charge Mana",action:"charge",color:"blue",cost:0},{text:"Shield (4 Mana)",action:"shield",color:"yellow",cost:0},{text:"Lazy Attack (2 Mana, 30 GOLD)",action:"lazy_attack",color:"orange",cost:30},{text:"Cat Nap (4 Mana, 80 GOLD)",action:"cat_nap",color:"teal",cost:80},{text:"Pizza Power (6 Mana, 150 GOLD)",action:"pizza_power",color:"pink",cost:150},{text:"Pass Turn",action:"pass",color:"indigo",cost:0},{text:"Clear Log",action:"clear",color:"gray",cost:0}].map((r,a)=>t("button",{className:`
                relative overflow-hidden px-4 py-2 bg-${r.color}-500 
                text-white font-bold rounded-lg hover:bg-${r.color}-600 
                transition-all transform hover:scale-105
              `,onClick:i=>l(r.action,i,r.cost),children:[r.text,Y&&e("div",{className:"absolute bg-white/30 rounded-full animate-ripple",style:{left:N.x,top:N.y,width:"4px",height:"4px"}})]},a))}),t("div",{className:"mt-8 w-full max-w-md bg-black/50 backdrop-blur-sm rounded-lg p-4",children:[e("h3",{className:"text-white font-bold mb-2",children:"Battle Log:"}),e("div",{className:"space-y-1 max-h-32 overflow-y-auto custom-scrollbar",children:x.map((r,a)=>e("p",{className:"text-gray-300 text-sm",children:r},a))})]})]}),m&&e("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:e("div",{className:"transform perspective-1000",children:e("div",{className:`
              text-6xl font-bold text-center transform-gpu animate-popup
              ${u.type==="attack"?"text-red-500":u.type==="heal"?"text-green-500":u.type==="special"?"text-purple-500":u.type==="charge"?"text-blue-500":"text-yellow-500"}
            `,children:t("div",{className:"relative",children:[e("div",{className:"absolute inset-0 blur-lg opacity-50 bg-white"}),e("span",{className:"relative",children:u.message}),u.damage>0&&e("div",{className:"text-4xl mt-4 animate-bounce-slow",children:u.damage})]})})})}),w&&t("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[e("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm"}),t("div",{className:"relative bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4",children:[e("h3",{className:"text-xl font-bold text-white mb-4",children:"Confirm Action"}),t("p",{className:"text-gray-300 mb-4",children:["This action will cost ",Z," GOLD. Do you want to proceed?"]}),t("div",{className:"flex justify-end space-x-4",children:[e("button",{className:"px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500",onClick:()=>C(!1),children:"Cancel"}),e("button",{className:"px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500",onClick:()=>{C(!1),B(S)},children:"Confirm"})]})]})]}),e("style",{jsx:!0,children:`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(50); opacity: 0; }
        }
        @keyframes popup {
          0% { transform: scale(0.5) translateY(-50px); opacity: 0; }
          50% { transform: scale(1.2) translateY(0); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }
        .animate-ripple { animation: ripple 0.6s linear forwards; }
        .animate-popup { animation: popup 0.5s ease-out forwards; }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
        .perspective-1000 { perspective: 1000px; }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `})]})};X.createRoot(document.getElementById("root")).render(e(G,{children:e("div",{className:"min-h-screen bg-[#1a1a1a]",children:t(U,{children:[e(F,{path:"/",element:e(_,{})}),e(F,{path:"/battle",element:e(K,{})})]})})}));
