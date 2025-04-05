(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8223:function(e,s,t){Promise.resolve().then(t.bind(t,969))},969:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return o}});var n=t(7437),r=t(703),a=t(8792),l=()=>(0,n.jsx)("nav",{className:"p-4 max-w-7xl mx-auto",children:(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsxs)(a.default,{href:"/",className:"text-2xl font-bold flex items-center gap-2",children:[(0,n.jsx)(r.default,{src:"/logo-blue.png",alt:"Code Schmiede Logo",width:32,height:32,className:"object-contain"}),"Code Schmiede"]}),(0,n.jsx)("div",{className:"hidden md:flex space-x-8",children:[{label:"Home",href:"#home"},{label:"Ansatz",href:"#approach"},{label:"Leistungen",href:"#services"},{label:"Kontakt",href:"#contact"}].map(e=>(0,n.jsx)("a",{href:e.href,className:"text-gray-800 hover:text-gray-600 transition-colors",children:e.label},e.href))})]})}),i=t(2265);let c=[{icon:"/idea.png",title:"Idee",description:"Wir starten mit Ihren Ideen und Zielen – der Grundstein f\xfcr den Erfolg."},{icon:"/analysis.png",title:"Analyse",description:"Detaillierte Vor-Ort-Besprechung, um alle Anforderungen pr\xe4zise zu erfassen."},{icon:"/transfer.png",title:"Transfer",description:"Effiziente Weitergabe an unser erfahrenes europ\xe4isches Entwicklerteam."},{icon:"/development.png",title:"Entwicklung",description:"Technische Umsetzung mit h\xf6chster Qualit\xe4t unter Schweizer Leitung."},{icon:"/success.png",title:"Erfolg",description:"Ma\xdfgeschneiderte L\xf6sungen, die begeistern und langfristig Kosten sparen."}];function o(){let[e,s]=(0,i.useState)(null),[t,a]=(0,i.useState)(!1),o=async e=>{e.preventDefault(),a(!0);let t=new FormData(e.currentTarget),n=t.get("name"),r=t.get("_replyto"),l=t.get("phone"),i=t.get("message"),c=n;c.indexOf(" ")>=0&&(c=n.split(" ").slice(0,-1).join(" "));try{if(!(await fetch("https://papamuffloncontact20231031175711.azurewebsites.net/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:r,phone:l,message:i})})).ok)throw Error("Network response was not ok");console.log("all good!"),s({success:!0,message:"Nachricht erfolgreich gesendet.",show:!0}),console.log("resetting form"),e.currentTarget.reset(),console.log("form reset")}catch(e){console.error("Error sending message:",e),s({success:!1,message:"Sorry ".concat(c,", it seems that my mail server is not responding. Please try again later!"),show:!0})}finally{a(!1)}},d=()=>{s(null)};return(0,n.jsxs)("div",{className:"min-h-screen",children:[(0,n.jsx)(l,{}),(0,n.jsx)("section",{id:"home",className:"max-w-7xl mx-auto px-4 py-12",children:(0,n.jsxs)("div",{className:"grid md:grid-cols-2 gap-8 items-center",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("h1",{className:"text-4xl md:text-5xl font-bold mb-6",children:["Code Schmiede:",(0,n.jsx)("br",{}),(0,n.jsxs)("span",{className:"text-3xl md:text-4xl",children:["Hochwertige Software,",(0,n.jsx)("br",{}),"erschwinglich entwickelt."]})]}),(0,n.jsx)("p",{className:"text-lg mb-8",children:"Wir verbinden Schweizer Pr\xe4zision mit europ\xe4ischen Top-Entwicklern – so entsteht kosteng\xfcnstige Software auf h\xf6chstem Niveau."}),(0,n.jsx)("button",{onClick:()=>{let e=document.getElementById("contactForm"),s=document.getElementById("name");null==e||e.scrollIntoView({behavior:"smooth"}),setTimeout(()=>null==s?void 0:s.focus(),800)},className:"bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors",children:"Kontakt aufnehmen"})]}),(0,n.jsx)("div",{className:"relative h-[400px]",children:(0,n.jsx)(r.default,{src:"/dev.png",alt:"Developer",fill:!0,sizes:"(max-width: 768px) 100vw, 50vw",className:"object-contain"})})]})}),(0,n.jsx)("section",{id:"approach",className:"bg-gray-50 rounded-t-[2rem] px-4 py-16",children:(0,n.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,n.jsx)("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Unser Ansatz"}),(0,n.jsx)("div",{className:"relative w-full h-40",children:(0,n.jsx)(r.default,{src:"/flags.png",alt:"Swiss and EU Flags",fill:!0,sizes:"100vw",className:"object-contain"})}),(0,n.jsxs)("div",{className:"grid md:grid-cols-2 gap-8 mb-32",children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("h3",{className:"text-3xl font-bold mb-6",children:"Schweizer Beratung"}),(0,n.jsxs)("p",{className:"text-xl",children:["Wir bieten umfassende Beratung",(0,n.jsx)("br",{}),"und Unterst\xfctzung f\xfcr ma\xdf-",(0,n.jsx)("br",{}),"geschneiderte Schweizer L\xf6sungen."]})]}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("h3",{className:"text-3xl font-bold mb-6",children:"Europ\xe4ische Entwicklung"}),(0,n.jsxs)("p",{className:"text-xl",children:["Wir entwickeln europ\xe4ische",(0,n.jsx)("br",{}),"Ideen und Projekte, die den",(0,n.jsx)("br",{}),"h\xf6chsten Standards entsprechen"]})]})]}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-4 relative",children:c.map((e,s)=>(0,n.jsxs)("div",{className:"text-center relative",children:[(0,n.jsx)("div",{className:"relative w-20 h-20 mx-auto mb-4",children:(0,n.jsx)(r.default,{src:e.icon,alt:e.title,fill:!0,sizes:"(max-width: 768px) 80px, 80px",className:"object-contain"})}),(0,n.jsx)("h3",{className:"font-bold mb-2",children:e.title}),(0,n.jsx)("p",{className:"text-sm",children:e.description}),s<c.length-1&&(0,n.jsx)("div",{className:"hidden md:block absolute top-8 -right-4 w-8 h-8 transform translate-x-1/2",children:(0,n.jsx)(r.default,{src:"/arrow-right.svg",alt:"Next Step",width:32,height:32,className:"w-8 h-8"})})]},e.title))})]})}),(0,n.jsx)("section",{id:"services",className:"px-4 py-16",children:(0,n.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,n.jsx)("h2",{className:"text-4xl font-bold mb-4 text-center",children:"LEISTUNGEN"}),(0,n.jsx)("p",{className:"text-xl text-center text-gray-600 italic mb-16",children:"Was wir anbieten."}),(0,n.jsxs)("div",{className:"grid md:grid-cols-3 gap-12",children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"bg-yellow-300 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center",children:(0,n.jsx)(r.default,{src:"/cloud.svg",alt:"Process Automation",width:48,height:48,className:"w-12 h-12"})}),(0,n.jsx)("h3",{className:"text-2xl font-bold mb-4",children:"Prozess-Automatisierung"}),(0,n.jsx)("p",{className:"text-gray-600",children:"Massgeschneiderte Cloud-Software-Entwicklung, auch f\xfcr KMUs, die Ihre Anforderungen perfekt erf\xfcllt."})]}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"bg-yellow-300 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center",children:(0,n.jsx)(r.default,{src:"/mobile.svg",alt:"Mobile Apps",width:48,height:48,className:"w-12 h-12"})}),(0,n.jsx)("h3",{className:"text-2xl font-bold mb-4",children:"Mobile Apps"}),(0,n.jsx)("p",{className:"text-gray-600",children:"Innovative und nutzerfreundliche App-Entwicklung f\xfcr iOS und Android, um Ihre Ideen in erstklassige mobile Anwendungen umzusetzen."})]}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"bg-yellow-300 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center",children:(0,n.jsx)(r.default,{src:"/robot.svg",alt:"AI Bots",width:48,height:48,className:"w-12 h-12"})}),(0,n.jsx)("h3",{className:"text-2xl font-bold mb-4",children:"AI"}),(0,n.jsx)("p",{className:"text-gray-600",children:"Entwicklung oder Konfiguration von AI-Systemen mit individuellen Daten oder eingebauten Aktionen."})]})]})]})}),(0,n.jsx)("section",{id:"contact",className:"bg-gray-50 px-4 py-16",children:(0,n.jsxs)("div",{className:"max-w-3xl mx-auto",children:[(0,n.jsx)("h2",{className:"text-4xl font-bold mb-4 text-center",children:"KONTAKT"}),(0,n.jsx)("p",{className:"text-xl text-center text-gray-600 italic mb-12",children:"Lassen Sie uns zusammenarbeiten!"}),(0,n.jsxs)("form",{id:"contactForm",onSubmit:o,noValidate:!0,className:"w-full",children:[(0,n.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"text",id:"name",name:"name",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent form-control",placeholder:"Name*",required:!0,onFocus:d})}),(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"email",id:"email",name:"_replyto",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent form-control",placeholder:"E-Mail*",required:!0,onFocus:d})}),(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"tel",id:"phone",name:"phone",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent form-control",placeholder:"Telefonnummer",onFocus:d})})]}),(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("textarea",{id:"message",name:"message",className:"w-full h-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent form-control",placeholder:"Nachricht*",required:!0,onFocus:d})})]}),(0,n.jsx)("input",{type:"hidden",name:"_subject",id:"email-subject",value:"Kontakt-Formular Best\xe4tigung"}),(0,n.jsx)("input",{type:"hidden",name:"_next",value:"#"}),(0,n.jsx)("input",{type:"text",name:"_gotcha",className:"hidden"}),(0,n.jsxs)("div",{className:"mt-8 text-center",children:[e&&(0,n.jsx)("div",{id:"success",className:"mb-4 ".concat(e.success?"text-green-600":"text-red-600"),children:(0,n.jsx)("div",{className:"alert ".concat(e.success?"alert-success":"alert-danger"," p-4 rounded-md ").concat(e.success?"bg-green-50":"bg-red-50"),children:(0,n.jsx)("strong",{children:e.message})})}),(0,n.jsx)("button",{id:"sendMessageButton",type:"submit",disabled:t,className:"bg-blue-500 text-white px-8 py-3 rounded-md transition-colors ".concat(t?"opacity-50 cursor-not-allowed":"hover:bg-blue-600"),children:t?"Sending...":"Nachricht absenden"})]})]})]})})]})}}},function(e){e.O(0,[607,971,69,744],function(){return e(e.s=8223)}),_N_E=e.O()}]);