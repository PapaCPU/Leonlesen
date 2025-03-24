(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{2418:(e,t,r)=>{Promise.resolve().then(r.bind(r,9246))},9246:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(1133),i=r(9188);function a(e){let{children:t}=e;return(0,n.jsx)("html",{lang:"de",children:(0,n.jsx)("body",{children:(0,n.jsx)(i.f,{children:t})})})}},2498:(e,t,r)=>{"use strict";r.d(t,{O:()=>a});class n{setApiKey(e){this.apiKey=e,localStorage.setItem("openai_api_key",e)}hasApiKey(){return!!this.apiKey}async generateWord(e){if(!this.apiKey)throw Error("Kein API-Key gesetzt");try{let t=this.getDifficultyDescription(e),r=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.apiKey)},body:JSON.stringify({model:this.model,messages:[{role:"system",content:"Du bist ein Lehrer, der Kindern beim Lesenlernen hilft. Generiere ein einzelnes deutsches Wort f\xfcr eine Lese\xfcbung. Das Wort sollte f\xfcr die folgende Schwierigkeitsstufe geeignet sein: ".concat(t,". Antworte nur mit dem Wort, ohne Anf\xfchrungszeichen oder zus\xe4tzlichen Text.")}],max_tokens:50,temperature:.7})});if(!r.ok)throw Error("API-Fehler: ".concat(r.status));return(await r.json()).choices[0].message.content.trim()}catch(e){return console.error("Fehler beim Generieren des Wortes:",e),["Hund","Katze","Maus","Haus","Ball"][Math.floor(5*Math.random())]}}async checkAnswer(e,t){if(!this.apiKey){let r=e.toLowerCase()===t.toLowerCase();return{correct:r,feedback:r?"Richtig! Gut gemacht!":"Nicht ganz richtig. Versuche es noch einmal!"}}try{let r=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.apiKey)},body:JSON.stringify({model:this.model,messages:[{role:"system",content:"Du bist ein freundlicher Lehrer, der Kindern beim Lesenlernen hilft. \xdcberpr\xfcfe, ob die Antwort des Kindes korrekt ist und gib ein kurzes, motivierendes Feedback."},{role:"user",content:'Das zu lesende Wort ist "'.concat(e,'". Die Antwort des Kindes ist "').concat(t,'". Ist die Antwort korrekt? Antworte im JSON-Format: {"correct": true/false, "feedback": "Dein Feedback"}')}],max_tokens:100,temperature:.5})});if(!r.ok)throw Error("API-Fehler: ".concat(r.status));let n=(await r.json()).choices[0].message.content;try{let e=JSON.parse(n);return{correct:e.correct,feedback:e.feedback}}catch(n){let r=e.toLowerCase()===t.toLowerCase();return{correct:r,feedback:r?"Richtig! Gut gemacht!":"Nicht ganz richtig. Versuche es noch einmal!"}}}catch(n){console.error("Fehler beim \xdcberpr\xfcfen der Antwort:",n);let r=e.toLowerCase()===t.toLowerCase();return{correct:r,feedback:r?"Richtig! Gut gemacht!":"Nicht ganz richtig. Versuche es noch einmal!"}}}async generateImage(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];if(!this.apiKey)throw Error("Kein API-Key gesetzt");try{let r=this.getImagePrompt(e,t),n=await fetch("https://api.openai.com/v1/images/generations",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.apiKey)},body:JSON.stringify({model:this.imageModel,prompt:r,n:1,size:"1024x1024"})});if(!n.ok)throw Error("API-Fehler: ".concat(n.status));return(await n.json()).data[0].url}catch(e){throw console.error("Fehler beim Generieren des Bildes:",e),e}}getDifficultyDescription(e){switch(e){case 1:return"Sehr einfach: Kurze W\xf6rter mit 2-3 Buchstaben, einfache Laute, keine Umlaute oder Doppellaute.";case 2:return"Einfach: W\xf6rter mit 3-4 Buchstaben, einfache Laute, keine komplexen Buchstabenkombinationen.";case 3:default:return"Mittel: W\xf6rter mit 4-5 Buchstaben, kann Umlaute enthalten, einfache Alltagsw\xf6rter.";case 4:return"Fortgeschritten: W\xf6rter mit 5-6 Buchstaben, kann Doppellaute und Umlaute enthalten.";case 5:return"Herausfordernd: L\xe4ngere W\xf6rter mit 6-8 Buchstaben, kann komplexere Buchstabenkombinationen enthalten."}}getImagePrompt(e,t){return"Ein kindgerechtes, fr\xf6hliches Bild f\xfcr ein Kind, das gerade ".concat(e," Lese\xfcbungen erfolgreich abgeschlossen hat. Das Bild sollte motivierend und belohnend wirken.")+(t?" Das Bild muss absolut kindgerecht sein, ohne be\xe4ngstigende oder unangemessene Elemente.":"")+" Im Stil einer bunten, freundlichen Kinderillustration."}constructor(){this.apiKey="",this.model="gpt-4o-mini-realtime-preview-2024-12-17",this.imageModel="dall-e-3",this.apiKey=localStorage.getItem("openai_api_key")||""}}let i=null;function a(){return i||(i=new n),i}},9188:(e,t,r)=>{"use strict";r.d(t,{f:()=>s,r:()=>c});var n=r(1133),i=r(1321),a=r(2498);let o=(0,i.createContext)(void 0);function s(e){let{children:t}=e,[r,s]=(0,i.useState)(0),[c,l]=(0,i.useState)(3),[h,u]=(0,i.useState)(!0),[d,m]=(0,i.useState)(""),g=(0,a.O)();return(0,i.useEffect)(()=>{{let e=parseInt(localStorage.getItem("trophies")||"0"),t=parseInt(localStorage.getItem("difficulty")||"3"),r="false"!==localStorage.getItem("safe_mode"),n=localStorage.getItem("openai_api_key")||"";s(e),l(t),u(r),m(n),n&&g.setApiKey(n)}},[]),(0,i.useEffect)(()=>{localStorage.setItem("trophies",r.toString())},[r]),(0,i.useEffect)(()=>{localStorage.setItem("difficulty",c.toString())},[c]),(0,i.useEffect)(()=>{localStorage.setItem("safe_mode",h.toString())},[h]),(0,i.useEffect)(()=>{localStorage.setItem("openai_api_key",d),g.setApiKey(d)},[d]),(0,n.jsx)(o.Provider,{value:{trophies:r,addTrophy:()=>{s(e=>e+1)},difficulty:c,setDifficulty:l,safeMode:h,setSafeMode:u,apiKey:d,setApiKey:m},children:t})}function c(){let e=(0,i.useContext)(o);if(void 0===e)throw Error("useReadingApp must be used within a ReadingAppProvider");return e}}},e=>{var t=t=>e(e.s=t);e.O(0,[634,775,358],()=>t(2418)),_N_E=e.O()}]);