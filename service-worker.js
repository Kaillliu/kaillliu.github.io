if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const a=e=>d(e,s),l={module:{uri:s},exports:n,require:a};i[s]=Promise.all(r.map((e=>l[e]||a(e)))).then((e=>(c(...e),n)))}}define(["./workbox-22fa8b82"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/27/HI/index.html",revision:"24fc47ab807781b6386e446cf187ed34"},{url:"2022/03/29/leetcode-42-数组中的最大矩形/index.html",revision:"67d3312db2b53c00eaa2d6e0352c9c82"},{url:"2022/04/02/设计模式笔记之Adapter（适配器）模式/index.html",revision:"7fc6e60c4d6464d8b4e793929d7ff56c"},{url:"2022/04/02/设计模式笔记之Iterator（迭代器）模式/index.html",revision:"f022db2388de681f1fc69f3e90373ff4"},{url:"404/index.html",revision:"09bdc943e75d0cff5a711d662cb17c40"},{url:"about/index.html",revision:"1ebbf9c480746140b96493428da001b8"},{url:"archives/2022/03/index.html",revision:"dfd26bd1a95ea231cd2e99b0d4a84763"},{url:"archives/2022/04/index.html",revision:"823bc5878816ac82dd82991e3cceea34"},{url:"archives/2022/index.html",revision:"249cbc30bbec181ae002f926c566b1ec"},{url:"archives/index.html",revision:"c5457c4283dfd2c8c6f3115194c5252a"},{url:"categories/Hexo/index.html",revision:"cb88fd2239ad8dd5029e5cf20aa19657"},{url:"categories/index.html",revision:"681d22f92f208e0d9b24401646676806"},{url:"categories/LeetCode/index.html",revision:"5f7636a6670bd219de3d6f317b9ed120"},{url:"categories/计算机基础/index.html",revision:"46728dc9bc6ad99183d8d2f2927dbf30"},{url:"contact/index.html",revision:"7161ae52078c55a5ba0b075d090cc2c7"},{url:"css/index.css",revision:"1a0ce9e0fa75c719038d65987cac87a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"10e72d6b0549d3f21271601f9d60f345"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"7627e83df6fc4efbac31b5f1e9065146"},{url:"tags/Hexo/index.html",revision:"675978d7cb65d0c4b53ca9425b09d9e8"},{url:"tags/index.html",revision:"f2814203d09d1aa9e2fa4bf43122b053"},{url:"tags/Java/index.html",revision:"02270e4a5ab0955353560f6c312d9e72"},{url:"tags/LeetCode/index.html",revision:"e902723407e2a5878d31b5422cff18c6"},{url:"tags/单调栈/index.html",revision:"ce12624ea78aade6017e33015eac867e"},{url:"tags/计算机基础/index.html",revision:"9df300e52ff9d8846f9192dff54ae02e"},{url:"tags/设计模式/index.html",revision:"c3d518ea8e74b17e8fe5d916688e309d"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
