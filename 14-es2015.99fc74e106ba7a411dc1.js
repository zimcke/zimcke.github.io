(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{PbHm:function(t,e,l){"use strict";l.r(e);var a=l("8Y7J");class n{}var r=l("pMnS"),s=l("m158"),o=l("mo5H"),u=l("iInd");class i{constructor(t,e){this.activatedRoute=t,this.blogRoutingService=e,this.title="Search results"}getMatchingPosts(){let t=this.blogRoutingService.getAllBlogPosts();return t=this.filterByQueryParameterCategory(t),this.filterByQueryParameterSearchTerm(t)}filterByQueryParameterCategory(t){const e=this.activatedRoute.snapshot.queryParamMap.get("category");if(null==e)return t;const l=+e;return t.filter(t=>t.postCategories.some(t=>t===l))}filterByQueryParameterSearchTerm(t){let e=this.activatedRoute.snapshot.queryParamMap.get("search-term");return null==e?t:t.filter(t=>t.postTitle&&t.postTitle.toLowerCase().includes(e.toLowerCase())||t.postAbstract&&t.postAbstract.toLowerCase().includes(e.toLowerCase()))}}var c=l("Nfsq"),b=a.nb({encapsulation:2,styles:[],data:{}});function p(t){return a.Lb(0,[(t()(),a.pb(0,0,null,null,2,"div",[["class","container clearfix"]],null,null,null,null,null)),(t()(),a.pb(1,0,null,null,1,"app-blog-overview",[],null,null,null,s.b,s.a)),a.ob(2,114688,null,0,o.a,[u.a,u.l],{blogTitle:[0,"blogTitle"],blogPosts:[1,"blogPosts"]},null)],(function(t,e){var l=e.component;t(e,2,0,l.title,l.getMatchingPosts())}),null)}function g(t){return a.Lb(0,[(t()(),a.pb(0,0,null,null,1,"app-search-results",[],null,null,null,p,b)),a.ob(1,49152,null,0,i,[u.a,c.a],null,null)],null,null)}var h=a.lb("app-search-results",i,g,{},{},[]),m=l("SVse"),y=l("s7LF"),z=l("6Hhg"),d=l("BHSk"),f=l("2sm0"),v=l("PBW8"),P=l("aIzd"),w=l("PCNd");let S=(()=>{class t{}return t.components=[i],t})();l.d(e,"SearchResultsModuleNgFactory",(function(){return C}));var C=a.mb(n,[],(function(t){return a.yb([a.zb(512,a.j,a.X,[[8,[r.a,h]],[3,a.j],a.v]),a.zb(4608,m.o,m.n,[a.s,[2,m.y]]),a.zb(4608,y.n,y.n,[]),a.zb(1073742336,m.c,m.c,[]),a.zb(1073742336,u.p,u.p,[[2,u.u],[2,u.l]]),a.zb(1073742336,z.a,z.a,[]),a.zb(1073742336,y.m,y.m,[]),a.zb(1073742336,y.d,y.d,[]),a.zb(1073742336,d.a,d.a,[]),a.zb(1073742336,f.a,f.a,[]),a.zb(1073742336,v.a,v.a,[]),a.zb(1073742336,P.a,P.a,[]),a.zb(1073742336,w.a,w.a,[]),a.zb(1073742336,S,S,[]),a.zb(1073742336,n,n,[]),a.zb(1024,u.j,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);