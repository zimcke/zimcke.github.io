(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2XDI":function(n,t,u){"use strict";u.r(t);var o=u("8Y7J"),r=function(){},l=u("pMnS"),e=u("6twO"),c=function(){function n(n){this.document=n}return n.prototype.mailTo=function(){this.document.location.href=e({to:"zimcke@gmail.com"})},n}(),i=u("SVse"),a=o.nb({encapsulation:2,styles:[],data:{}});function s(n){return o.Lb(0,[(n()(),o.pb(0,0,null,null,1,"h1",[["class","mt-4 mb-3"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["About - Zimcke Van de Staey"])),(n()(),o.pb(2,0,null,null,1,"h3",[["class","mt-4 mb-3"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Contact Me"])),(n()(),o.pb(4,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),o.pb(5,0,null,null,1,"a",[["href","javascript:void(0);"]],null,[[null,"click"]],(function(n,t,u){var o=!0;return"click"===t&&(o=!1!==n.component.mailTo()&&o),o}),null,null)),(n()(),o.Jb(-1,null,["Email me"]))],null,null)}var p,f=o.lb("app-about",c,(function(n){return o.Lb(0,[(n()(),o.pb(0,0,null,null,1,"app-about",[],null,null,null,s,a)),o.ob(1,49152,null,0,c,[i.d],null,null)],null,null)}),{},{},[]),b=u("s7LF"),d=u("iInd"),m=u("6Hhg"),y=u("BHSk"),h=u("2sm0"),v=u("PBW8"),z=u("aIzd"),g=u("PCNd"),j=((p=function(){}).components=[c],p);u.d(t,"AboutModuleNgFactory",(function(){return w}));var w=o.mb(r,[],(function(n){return o.yb([o.zb(512,o.j,o.X,[[8,[l.a,f]],[3,o.j],o.v]),o.zb(4608,i.o,i.n,[o.s,[2,i.y]]),o.zb(4608,b.n,b.n,[]),o.zb(1073742336,i.c,i.c,[]),o.zb(1073742336,d.p,d.p,[[2,d.u],[2,d.l]]),o.zb(1073742336,m.a,m.a,[]),o.zb(1073742336,b.m,b.m,[]),o.zb(1073742336,b.d,b.d,[]),o.zb(1073742336,y.a,y.a,[]),o.zb(1073742336,h.a,h.a,[]),o.zb(1073742336,v.a,v.a,[]),o.zb(1073742336,z.a,z.a,[]),o.zb(1073742336,g.a,g.a,[]),o.zb(1073742336,j,j,[]),o.zb(1073742336,r,r,[]),o.zb(1024,d.j,(function(){return[[{path:"",component:c}]]}),[])])}))},"6twO":function(n,t,u){"use strict";var o=u("Plff"),r=u("UXXG"),l=u("o0rg"),e=u("aD9X");function c(n){return n?r(n).join(","):void 0}n.exports=function(n){o(n,"options are required");var t={to:c(n.to),cc:c(n.cc),bcc:c(n.bcc),subject:n.subject,body:n.body},u=t.to;delete(t=l(t,Boolean)).to;var r=e.stringify(t);return"mailto:"+(u||"")+(r?"?"+r:"")}},IsUS:function(n,t){n.exports=Array.isArray||function(n){return"[object Array]"==Object.prototype.toString.call(n)}},Plff:function(n,t,u){"use strict";n.exports=function(n,t){if(!n)throw new Error(t||"Expected true, got "+n)}},UXXG:function(n,t,u){"use strict";var o=u("IsUS");n.exports=function(n){return o(n)?n:[n]}},ZFOp:function(n,t,u){"use strict";n.exports=function(n){return encodeURIComponent(n).replace(/[!'()*]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()}))}},aD9X:function(n,t,u){"use strict";var o=u("ZFOp");t.extract=function(n){return n.split("?")[1]||""},t.parse=function(n){return"string"!=typeof n?{}:(n=n.trim().replace(/^(\?|#|&)/,""))?n.split("&").reduce((function(n,t){var u=t.replace(/\+/g," ").split("="),o=u.shift(),r=u.length>0?u.join("="):void 0;return o=decodeURIComponent(o),r=void 0===r?null:decodeURIComponent(r),n.hasOwnProperty(o)?Array.isArray(n[o])?n[o].push(r):n[o]=[n[o],r]:n[o]=r,n}),{}):{}},t.stringify=function(n){return n?Object.keys(n).sort().map((function(t){var u=n[t];return Array.isArray(u)?u.sort().map((function(n){return o(t)+"="+o(n)})).join("&"):o(t)+"="+o(u)})).filter((function(n){return n.length>0})).join("&"):""}},o0rg:function(n,t){n.exports=function(n,t,u){if("function"!=typeof t)throw new TypeError("`f` has to be a function");var o={};return Object.keys(n).forEach((function(r){t.call(u||this,n[r],r,n)&&(o[r]=n[r])})),o}}}]);