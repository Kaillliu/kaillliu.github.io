if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const a=e=>r(e,d),f={module:{uri:d},exports:n,require:a};i[d]=Promise.all(s.map((e=>f[e]||a(e)))).then((e=>(c(...e),n)))}}define(["./workbox-22fa8b82"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/27/HI/index.html",revision:"4f965e14944a68476877d2a779265673"},{url:"404/index.html",revision:"e943eda92a8baa72868cdf7f7bf3efb7"},{url:"about/index.html",revision:"f5fe2c26b60c2246f783f15156a3ed5a"},{url:"archives/2022/03/index.html",revision:"7b3f11fcdde0f383004a66851e7a3e73"},{url:"archives/2022/index.html",revision:"f88b66ce7a8aa6bf4017ef2ec181a39e"},{url:"archives/index.html",revision:"0239bea38e87269a132b537fd46cc932"},{url:"categories/Hexo/index.html",revision:"45261e15c99ffd546b181e4cc3988758"},{url:"categories/index.html",revision:"bcb2095238174e79d2355ef0b612290d"},{url:"contact/index.html",revision:"0fd6daec66683c2872576048f9c01aa3"},{url:"css/index.css",revision:"d0cfbe50637f6acd712bab6572d9b719"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"11eb449db7c4e8a3794d522e3b382a5c"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"75c5515cb5873193f1b7e9e694487e16"},{url:"tags/Hexo/index.html",revision:"deeb9a42b3fd59825a8118841b588457"},{url:"tags/index.html",revision:"d47fedcef6784f400eac82a2a5ca833f"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
