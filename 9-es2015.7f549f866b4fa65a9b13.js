(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{U9ly:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),o=u("z+vk");const s=o.a;class a{}var t=u("pMnS"),i=u("m158"),r=u("mo5H"),b=u("iInd"),c=u("tufI"),p=e.nb({encapsulation:2,styles:[],data:{}});function d(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,2,"div",[["class","container clearfix"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,1,"app-blog-overview",[],null,null,null,i.b,i.a)),e.ob(2,114688,null,0,r.a,[b.a,b.l],{blogTitle:[0,"blogTitle"],blogPosts:[1,"blogPosts"]},null)],(function(l,n){var u=n.component;l(n,2,0,u.blogTitle,u.posts)}),null)}function m(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,1,"app-chinese-blog",[],null,null,null,d,p)),e.ob(1,114688,null,0,c.a,["CHINESE_ROUTES"],null,null)],(function(l,n){l(n,1,0)}),null)}var g=e.lb("app-chinese-blog",c.a,m,{},{},[]),h=u("SVse"),f=u("s7LF"),v=u("35Rh"),y=u("f4XN");const w=u("6twO");class C{constructor(l){this.document=l}postImagePresent(){return this.postImageName&&""!==this.postImageName}mailSubject(){return"Comment - "+this.postTitle}onSubmit(){this.document.location.href=w({to:"zimcke@gmail.com",subject:this.mailSubject(),body:this.mailBody})}}var k=e.nb({encapsulation:2,styles:[],data:{}});function B(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,0,"img",[["alt",""],["class","img-fluid rounded"]],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(2,0,null,null,0,"hr",[],null,null,null,null,null))],null,(function(l,n){l(n,1,0,e.tb(1,"assets/images/",n.component.postImageName,""))}))}function I(l){return e.Lb(0,[e.Db(0,h.e,[e.s]),(l()(),e.pb(1,0,null,null,48,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,1,"h2",[["class","mt-4 mb-3"]],null,null,null,null,null)),(l()(),e.Jb(3,null,["",""])),(l()(),e.pb(4,0,null,null,45,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.pb(5,0,null,null,41,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,B)),e.ob(7,16384,null,0,h.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(8,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e.Jb(9,null,["Posted on "," by "])),e.Fb(10,2),(l()(),e.pb(11,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Bb(l,12).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o}),null,null)),e.ob(12,671744,null,0,b.o,[b.l,b.a,h.j],{routerLink:[0,"routerLink"]},null),e.Cb(13,1),(l()(),e.Jb(-1,null,["Zimcke Van de Staey"])),(l()(),e.pb(15,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.pb(16,0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(l()(),e.Jb(17,null,["",""])),e.Ab(null,0),(l()(),e.pb(19,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.pb(20,0,null,null,26,"div",[["class","card my-4"]],null,null,null,null,null)),(l()(),e.pb(21,0,null,null,1,"h5",[["class","card-header"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["E-mail a comment:"])),(l()(),e.pb(23,0,null,null,23,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.pb(24,0,null,null,22,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,s=l.component;return"submit"===n&&(o=!1!==e.Bb(l,26).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.Bb(l,26).onReset()&&o),"ngSubmit"===n&&(o=!1!==s.onSubmit()&&o),o}),null,null)),e.ob(25,16384,null,0,f.o,[],null,null),e.ob(26,4210688,[["blogPostCommentForm",4]],0,f.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Gb(2048,null,f.b,null,[f.j]),e.ob(28,16384,null,0,f.i,[[4,f.b]],null,null),(l()(),e.pb(29,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.pb(30,0,null,null,5,"input",[["class","form-control"],["id","mailTitle"],["name","mailTitle"],["type","text"]],[[8,"readOnly",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==e.Bb(l,31)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e.Bb(l,31).onTouched()&&o),"compositionstart"===n&&(o=!1!==e.Bb(l,31)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e.Bb(l,31)._compositionEnd(u.target.value)&&o),o}),null,null)),e.ob(31,16384,null,0,f.c,[e.B,e.k,[2,f.a]],null,null),e.Gb(1024,null,f.f,(function(l){return[l]}),[f.c]),e.ob(33,671744,null,0,f.k,[[2,f.b],[8,null],[8,null],[6,f.f]],{name:[0,"name"],model:[1,"model"]},null),e.Gb(2048,null,f.g,null,[f.k]),e.ob(35,16384,null,0,f.h,[[4,f.g]],null,null),(l()(),e.pb(36,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.pb(37,0,null,null,7,"textarea",[["class","form-control"],["id","mailBody"],["name","mailBody"],["required",""],["rows","3"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0,s=l.component;return"input"===n&&(o=!1!==e.Bb(l,38)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e.Bb(l,38).onTouched()&&o),"compositionstart"===n&&(o=!1!==e.Bb(l,38)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e.Bb(l,38)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(s.mailBody=u)&&o),o}),null,null)),e.ob(38,16384,null,0,f.c,[e.B,e.k,[2,f.a]],null,null),e.ob(39,16384,null,0,f.l,[],{required:[0,"required"]},null),e.Gb(1024,null,f.e,(function(l){return[l]}),[f.l]),e.Gb(1024,null,f.f,(function(l){return[l]}),[f.c]),e.ob(42,671744,null,0,f.k,[[2,f.b],[6,f.e],[8,null],[6,f.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,f.g,null,[f.k]),e.ob(44,16384,null,0,f.h,[[4,f.g]],null,null),(l()(),e.pb(45,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Submit"])),(l()(),e.pb(47,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),e.pb(48,0,null,null,1,"app-blog-sidebar",[],null,null,null,v.b,v.a)),e.ob(49,49152,null,0,y.a,[],null,null)],(function(l,n){var u=n.component;l(n,7,0,u.postImagePresent());var e=l(n,13,0,"/about");l(n,12,0,e),l(n,33,0,"mailTitle",u.mailSubject()),l(n,39,0,""),l(n,42,0,"mailBody",u.mailBody)}),(function(l,n){var u=n.component;l(n,3,0,u.postTitle);var o=e.Kb(n,9,0,l(n,10,0,e.Bb(n,0),u.postDate,"longDate"));l(n,9,0,o),l(n,11,0,e.Bb(n,12).target,e.Bb(n,12).href),l(n,17,0,u.postAbstract),l(n,24,0,e.Bb(n,28).ngClassUntouched,e.Bb(n,28).ngClassTouched,e.Bb(n,28).ngClassPristine,e.Bb(n,28).ngClassDirty,e.Bb(n,28).ngClassValid,e.Bb(n,28).ngClassInvalid,e.Bb(n,28).ngClassPending),l(n,30,0,!0,e.Bb(n,35).ngClassUntouched,e.Bb(n,35).ngClassTouched,e.Bb(n,35).ngClassPristine,e.Bb(n,35).ngClassDirty,e.Bb(n,35).ngClassValid,e.Bb(n,35).ngClassInvalid,e.Bb(n,35).ngClassPending),l(n,37,0,e.Bb(n,39).required?"":null,e.Bb(n,44).ngClassUntouched,e.Bb(n,44).ngClassTouched,e.Bb(n,44).ngClassPristine,e.Bb(n,44).ngClassDirty,e.Bb(n,44).ngClassValid,e.Bb(n,44).ngClassInvalid,e.Bb(n,44).ngClassPending)}))}var J=u("uUCQ"),T=e.nb({encapsulation:2,styles:[],data:{}});function S(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,4,"app-blog-post",[],null,null,null,I,k)),e.ob(1,49152,null,0,C,[h.d],{postTitle:[0,"postTitle"],postDate:[1,"postDate"],postAbstract:[2,"postAbstract"]},null),(l()(),e.pb(2,0,null,0,1,"p",[["class","p-spaced"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" In the 4th year we are required to record a 5-minute video about our home and present it to the rest of the group. I really enjoy traveling, so I never feel bound to one location. Thus I chose to include three different locations in the video: (1) the farm from my grandparents and parents, (2) my sisters new house and (3) my workplace. "])),(l()(),e.pb(4,0,null,0,0,"iframe",[["allow","autoplay; fullscreen"],["allowfullscreen",""],["frameborder","0"],["height","410"],["src","https://player.vimeo.com/video/381244824"],["width","100%"]],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,1,0,u.postTitle(),u.postDate(),u.postAbstract())}),null)}function z(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,1,"app-wojia",[],null,null,null,S,T)),e.ob(1,49152,null,0,J.a,[],null,null)],null,null)}var j=e.lb("app-wojia",J.a,z,{},{},[]),A=u("rTic"),P=e.nb({encapsulation:2,styles:[],data:{}});function H(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,74,"app-blog-post",[],null,null,null,I,k)),e.ob(1,49152,null,0,C,[h.d],{postTitle:[0,"postTitle"],postDate:[1,"postDate"],postAbstract:[2,"postAbstract"]},null),(l()(),e.pb(2,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(3,0,null,0,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.pb(4,0,null,null,0,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),e.pb(5,0,null,null,2,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),e.pb(6,0,null,null,1,"h3",[["class","mb-3"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["1. Todesm\xe4rchen (2016)"])),(l()(),e.pb(8,0,null,0,10,"div",[["class","row mt-1"]],null,null,null,null,null)),(l()(),e.pb(9,0,null,null,1,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),e.pb(10,0,null,null,0,"img",[["alt",""],["class","img-fluid rounded mb-4"],["src","assets/images/todesmarchen.jpg"]],null,null,null,null,null)),(l()(),e.pb(11,0,null,null,7,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),e.pb(12,0,null,null,1,"p",[["class","p-spaced"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" by Andreas Gruber "])),(l()(),e.pb(14,0,null,null,1,"p",[["class","p-spaced"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" When learning a new language, I find that crime stories are usually a good way to start reading books. As a reader, you often create expectations (hypotheses) that you will check during the reading process. Crime stories often start from a recognizable situation, with characters that have clearly defined personalities. These aspects make the story easy to follow, even when you don't pick up all the details in the new language. "])),(l()(),e.pb(16,0,null,null,1,"p",[["class","p-spaced"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" I currently only speak German to my mother in law and studying Chinese makes me forget a lot of vocabulary and grammar. Hence I want to put a bit more effort in surrounding myself with German literature. I've already started reading this book and it seems promising (there is a lot of suspense, right from the beginning)! Seems like I had a lucky day when I found this book for 2 euro at a second hand book sale. "])),(l()(),e.pb(18,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(19,0,null,0,4,"div",[["class","row mt-1"]],null,null,null,null,null)),(l()(),e.pb(20,0,null,null,0,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),e.pb(21,0,null,null,2,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),e.pb(22,0,null,null,1,"h3",[["class","mb-3"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["2. Hong Kong Cantopop: A Concise History (2017)"])),(l()(),e.pb(24,0,null,0,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.pb(25,0,null,null,1,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),e.pb(26,0,null,null,0,"img",[["alt",""],["class","img-fluid rounded mb-4"],["src","assets/images/cantopop.jpg"]],null,null,null,null,null)),(l()(),e.pb(27,0,null,null,5,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),e.pb(28,0,null,null,1,"p",[["class","p-spaced"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" by Chu Yiu-Wai "])),(l()(),e.pb(30,0,null,null,1,"p",[["class","p-spaced"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Until six years ago, I was rather clueless about Chinese culture. Then I started learning about the differences in Chinese languages, such as Mandarin and Cantonese (spoken for example in Hong Kong). I was amazed that Cantonese sounded so powerful and melodic in my ears. As a musicologist, I quickly gained interest in Cantonese music as well. I started listening to Hong Kong radio channels and was introduced to Cantopop. I was baffled. I was head over heels with the rythm in the music, the emotions buried deeply into the singer's voices, the absurdity of some of the lyrics... How could I not know this existed? I had studied so many different musicalities, but not once was this mentioned in any of the courses I followed or books I read. I hope this book is a starting point for a historic study of cantopop and a a good way to make the existence of cantopop known on a global scale. "])),(l()(),e.pb(32,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(33,0,null,0,4,"div",[["class","row mt-1"]],null,null,null,null,null)),(l()(),e.pb(34,0,null,null,0,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),e.pb(35,0,null,null,2,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),e.pb(36,0,null,null,1,"h3",[["class","mb-3"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["3. 21 Lessons for the 21st Century (2018)"])),(l()(),e.pb(38,0,null,0,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.pb(39,0,null,null,1,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),e.pb(40,0,null,null,0,"img",[["alt",""],["class","img-fluid rounded mb-4"],["src","assets/images/21lessons.jpg"]],null,null,null,null,null)),(l()(),e.pb(41,0,null,null,5,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),e.pb(42,0,null,null,1,"p",[["class","p-spaced"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" by Yuval Noah Harari "])),(l()(),e.pb(44,0,null,null,1,"p",[["class","p-spaced"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" This book has been recommended to me by many people and it seems that it is not a moment too early to read this, now that we're officially done with 20% of the 21st century. "])),(l()(),e.pb(46,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(47,0,null,0,4,"div",[["class","row mt-1"]],null,null,null,null,null)),(l()(),e.pb(48,0,null,null,0,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),e.pb(49,0,null,null,2,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),e.pb(50,0,null,null,1,"h3",[["class","mb-3"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["4. \u7535\u8111\u516c\u53f8\u7684\u79d8\u5bc6 Secrets of a Computer Company (2009)"])),(l()(),e.pb(52,0,null,0,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.pb(53,0,null,null,1,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),e.pb(54,0,null,null,0,"img",[["alt",""],["class","img-fluid rounded mb-4"],["src","assets/images/secrets-of-a-computer-company.jpg"]],null,null,null,null,null)),(l()(),e.pb(55,0,null,null,5,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),e.pb(56,0,null,null,1,"p",[["class","p-spaced"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" by Liu Yuehua and Chu Chengzhi "])),(l()(),e.pb(58,0,null,null,1,"p",[["class","p-spaced"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Reading this book is an assignment for Chinese class this year. We read the first book (\u4f60\u6700\u559c\u6b22\u8c01\uff1f) in the first semester and it was about the love story (or breakup story) of a Chinese software developer who specifically developed software in Chinese during the 1980s. Combining software development en Chinese culture into one book, is enough to convince me to read it! I am very curious to see how the story continuous. "])),(l()(),e.pb(60,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(61,0,null,0,4,"div",[["class","row mt-1"]],null,null,null,null,null)),(l()(),e.pb(62,0,null,null,0,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),e.pb(63,0,null,null,2,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),e.pb(64,0,null,null,1,"h3",[["class","mb-3"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["5. Clean Code: A Handbook of Agile Software Craftsmanship (2008)"])),(l()(),e.pb(66,0,null,0,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.pb(67,0,null,null,1,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),e.pb(68,0,null,null,0,"img",[["alt",""],["class","img-fluid rounded mb-4"],["src","assets/images/clean-code.jpg"]],null,null,null,null,null)),(l()(),e.pb(69,0,null,null,5,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),e.pb(70,0,null,null,1,"p",[["class","p-spaced"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" by Robert Cecil Martin "])),(l()(),e.pb(72,0,null,null,1,"p",[["class","p-spaced"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Another book that has been on my list for a while. I am currently working on multiple software projects and they are not small project anymore. I thus feel the need to improve the way I work, in particular because I work in team. "])),(l()(),e.pb(74,0,null,null,0,"br",[],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,1,0,u.postTitle(),u.postDate(),u.postAbstract())}),null)}function L(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,1,"app-books2020",[],null,null,null,H,P)),e.ob(1,49152,null,0,A.a,[],null,null)],null,null)}var D=e.lb("app-books2020",A.a,L,{},{},[]),E=u("6Hhg"),G=u("BHSk"),N=u("2sm0"),x=u("PBW8"),M=u("aIzd"),U=u("PCNd");u.d(n,"ChineseBlogModuleNgFactory",(function(){return _}));var _=e.mb(a,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[t.a,g,j,D]],[3,e.j],e.v]),e.zb(4608,h.o,h.n,[e.s,[2,h.y]]),e.zb(4608,f.n,f.n,[]),e.zb(1073742336,h.c,h.c,[]),e.zb(1073742336,b.p,b.p,[[2,b.u],[2,b.l]]),e.zb(1073742336,E.a,E.a,[]),e.zb(1073742336,f.m,f.m,[]),e.zb(1073742336,f.d,f.d,[]),e.zb(1073742336,G.a,G.a,[]),e.zb(1073742336,N.a,N.a,[]),e.zb(1073742336,x.a,x.a,[]),e.zb(1073742336,M.a,M.a,[]),e.zb(1073742336,U.a,U.a,[]),e.zb(1073742336,o.b,o.b,[]),e.zb(1073742336,a,a,[]),e.zb(1024,b.j,(function(){return[[{path:"",component:c.a},{path:"wojia",data:o.c,component:J.a},{path:"book2020",data:o.d,component:A.a}]]}),[]),e.zb(256,"CHINESE_ROUTES",s,[])])}))}}]);