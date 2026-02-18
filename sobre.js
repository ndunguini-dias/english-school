/* =========================
IMAGENS SOBRE / INSTITUCIONAL
========================= */

const instImgs = [
 "imagens/IMG-20260216-WA0002.jpg",
 "imagens/IMG-20260216-WA0001.jpg",
 "imagens/IMG-20260216-WA0003.jpg"
];

let instI = 0;

setInterval(()=>{
 const el = document.getElementById("imgInst");
 if(!el) return;

 el.classList.add("fade");

 setTimeout(()=>{
   instI = (instI+1)%instImgs.length;
   el.src = instImgs[instI];
   el.classList.remove("fade");
 },400);

},5000);


/* =========================
ANÚNCIOS
========================= */

const ads = [
 "imagens/IMG-20260216-WA0002.jpg",
 "imagens/IMG-20260216-WA0001.jpg",
 "imagens/IMG-20260216-WA0003.jpg"
];

let adI = 0;

setInterval(()=>{
 const el = document.getElementById("imgAds");
 if(!el) return;

 el.classList.add("fade");

 setTimeout(()=>{
   adI = (adI+1)%ads.length;
   el.src = ads[adI];
   el.classList.remove("fade");
 },400);

},5000);

