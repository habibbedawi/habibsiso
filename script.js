/* HABIB SISO Portfolio - logic (language, theme, navigation, gallery) */
const IC=['<path d="M3 11 12 3l9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>','<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>','<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>','<path d="M12 3l2.5 5.500 6 .7-4.500 4 1.300 6L12 16.300 6.700 19.200 8 13.200 3.500 9.200l6-.7z"/>','<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>','<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'];
let L='ku',cur=0,tm;

const $=s=>document.querySelector(s);
$('#nav').innerHTML=IC.map((p,i)=>`<button onclick="go(${i})"><svg class="i" viewBox="0 0 24 24">${p}</svg></button>`).join('');
function go(i){cur=i;document.querySelectorAll('.sec').forEach((s,j)=>s.classList.toggle('on',i==j));document.querySelectorAll('#nav button').forEach((b,j)=>b.classList.toggle('on',i==j));if(i==3||i==4)setTimeout(()=>document.querySelectorAll('.t i').forEach(e=>e.style.width=e.dataset.w+'%'),60)}
function bars(id,arr,lg){$(id).innerHTML=arr.map(a=>`<div class="bar"><div class="l"><span>${a[0]}${lg?' · <small style="color:var(--mu)">'+a[1]+'</small>':''}</span><span dir="ltr">${a[lg?2:1]}%</span></div><div class="t"><i data-w="${a[lg?2:1]}"></i></div></div>`).join('')}
const CI={posters:'<svg class="i" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>',videos:'<svg class="i" viewBox="0 0 24 24"><rect x="2" y="5" width="14" height="14" rx="3"/><path d="m16 10 6-3v10l-6-3z"/></svg>'};let CAT=-1;
function med(x,i){return x.img?`<img src="${x.img}" alt="" onerror="imgFix(this,${i})">`:`<video src="${x.src}#t=0.5" preload="metadata" muted playsinline></video>`}
function card(x,i,k){return `<div class="card" onclick="lbo(${i})"><div class="th">${med(x,i)}${x.type=='video'?'<div class="play"><span><svg class="i" viewBox="0 0 24 24" style="fill:currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>':''}</div><div class="cb"><b>${x.t[k]}</b><p>${x.d[k]}</p></div></div>`}
function showCat(c){CAT=c;gal();$('#s1').scrollTop=0}
function gal(){const k={ku:0,en:1,ar:2}[L];$('#cats').style.display=CAT<0?'grid':'none';$('#catv').style.display=CAT<0?'none':'block';
if(CAT<0){$('#cats').innerHTML=CATS.map((c,ci)=>{const ids=DES.map((x,i)=>i).filter(i=>DES[i].cat==c.id),f=ids[0];return `<div class="card cat" onclick="showCat(${ci})"><div class="th">${f==null?'':med(DES[f],f)}<div class="catb"><span>${CI[c.id]||CI.posters}</span></div></div><div class="cb"><b>${c.t[k]}</b><p>${c.d[k]}</p><small>${ids.length} ${D[L].cnt}</small></div></div>`}).join('');return}
const c=CATS[CAT];$('#cath').textContent=c.t[k];$('#gal').innerHTML=DES.map((x,i)=>x.cat==c.id?card(x,i,k):'').join('')}
function lbo(i){const k={ku:0,en:1,ar:2}[L],x=DES[i],im=$('#lbi'),vi=$('#lbv');if(x.type=='video'){im.style.display='none';vi.style.display='block';vi.src=x.src;vi.poster=x.img||'';vi.play().catch(()=>{})}else{vi.pause();vi.removeAttribute('src');vi.style.display='none';im.style.display='block';im.src=x.img}$('#lbc').innerHTML='<b>'+x.t[k]+'</b><br>'+x.d[k];$('#lb').classList.add('on')}
function closeLb(e){if(e&&e.target.closest('video,img,figcaption'))return;$('#lbv').pause();$('#lb').classList.remove('on')}
document.addEventListener('keydown',e=>{if(e.key=='Escape')closeLb()});
function downloadCV(){if(!CV_FILE){window.print();return}const a=document.createElement('a');a.href=CV_FILE;a.download='';a.click()}
function type(){clearTimeout(tm);const R=D[L].roles;let r=0,c=0,del=0;const el=$('#role');(function s(){const w=R[r];el.textContent=w.slice(0,c);if(!del&&c<w.length){c++;tm=setTimeout(s,90)}else if(!del){del=1;tm=setTimeout(s,1400)}else if(c>0){c--;tm=setTimeout(s,45)}else{del=0;r=(r+1)%R.length;tm=setTimeout(s,300)}})()}
function setL(l){L=l;const d=D[l];document.documentElement.lang=l=='ku'?'ckb':l;document.documentElement.dir=l=='en'?'ltr':'rtl';document.body.className=l=='en'?'en':'';
document.querySelectorAll('[data-i]').forEach(e=>e.textContent=d[e.dataset.i]);
document.querySelectorAll('#nav button').forEach((b,i)=>b.title=d.nav[i]);
bars('#sk',d.sk);bars('#lg',d.lg,1);gal();type();
['bK','bE','bA'].forEach(id=>$('#'+id).classList.remove('on'));$('#'+{ku:'bK',en:'bE',ar:'bA'}[l]).classList.add('on');go(cur)}
function toggleT(){const r=document.documentElement,dark=getComputedStyle(r).getPropertyValue('--bg').trim()=='#050a16';r.dataset.theme=dark?'light':'dark'}
{const a=$('#av');a.innerHTML='';a.style.backgroundImage='url("'+PROFILE_IMG+'")'}
setL('ku');


/* Auto-fix: if an image fails (wrong letter case or extension such as .JPG/.jpg/.PNG/.png/.jpeg/.webp), try the other variants */
function imgFix(el,i){const x=DES[i],m=(x._o||x.img).match(/^(.*)\.([^.\/]+)$/);if(!m)return;if(!x._o){x._o=x.img;x._n=0;x._c=[...new Set([m[2],'jpg','jpeg','png','webp','JPG','JPEG','PNG','WEBP'])].slice(1)}
if(x._n<x._c.length){x.img=m[1]+'.'+x._c[x._n++];el.src=x.img}else{x.img=x._o;el.onerror=null;el.style.opacity='.4'}}
