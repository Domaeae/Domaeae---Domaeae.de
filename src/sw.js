if(!self.define){let s,e={};const c=(c,r)=>(c=new URL(c+".js",r).href,e[c]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=c,s.onload=e,document.head.appendChild(s)}else s=c,importScripts(c),e()})).then((()=>{let s=e[c];if(!s)throw new Error(`Module ${c} didn’t register its module`);return s})));self.define=(r,i)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let t={};const f=s=>c(s,o),n={module:{uri:o},exports:t,require:f};e[o]=Promise.all(r.map((s=>n[s]||f(s)))).then((s=>(i(...s),t)))}}define(["./workbox-0e874947"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"scss/_animations.scss",revision:"498d39b07dcf7a33f2a9104bf1571488"},{url:"scss/_buttons.scss",revision:"c2b51ca0a1d8fcc789919b9280805c9a"},{url:"scss/_colors.scss",revision:"8f3761be18ee329801b03e62743a709a"},{url:"scss/_form.scss",revision:"698ed0f079654885abd4649a2cadc681"},{url:"scss/_layout.scss",revision:"1b4e19013f6a22dbf03aa4170537c439"},{url:"scss/_reslayout.scss",revision:"755ca4950e504d3e24b0df772152000f"},{url:"scss/layout/_form.scss",revision:"7ff85a8ed18122edc5f1737e195fd02f"},{url:"scss/master.scss",revision:"4a30af61dcf0711961626c2f8f40824f"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map

// This is the "Offline copy of assets" service worker

const CACHE = "pwabuilder-offline";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);