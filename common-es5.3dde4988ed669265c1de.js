(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{m158:function(l,n,u){"use strict";var t=u("8Y7J"),e=u("SVse"),r=u("iInd"),o=u("s7LF"),a=function(){function l(l){this.router=l}return l.prototype.onSubmitSearch=function(){this.router.navigate(["/search-results"],{queryParams:{"search-term":this.searchTerm}})},l}(),i=t.nb({encapsulation:2,styles:[],data:{}});function s(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,18,"div",[["class","card mb-4"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"h5",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Search"])),(l()(),t.pb(3,0,null,null,15,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,14,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,r=l.component;return"submit"===n&&(e=!1!==t.Bb(l,6).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Bb(l,6).onReset()&&e),"ngSubmit"===n&&(e=!1!==r.onSubmitSearch()&&e),e}),null,null)),t.ob(5,16384,null,0,o.m,[],null,null),t.ob(6,4210688,[["blogPostCommentForm",4]],0,o.i,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Gb(2048,null,o.b,null,[o.i]),t.ob(8,16384,null,0,o.h,[[4,o.b]],null,null),(l()(),t.pb(9,0,null,null,9,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,5,"input",[["class","form-control"],["id","searchTerm"],["name","searchTerm"],["placeholder","Search for..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,r=l.component;return"input"===n&&(e=!1!==t.Bb(l,11)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Bb(l,11).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Bb(l,11)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Bb(l,11)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(r.searchTerm=u)&&e),e}),null,null)),t.ob(11,16384,null,0,o.c,[t.B,t.k,[2,o.a]],null,null),t.Gb(1024,null,o.e,(function(l){return[l]}),[o.c]),t.ob(13,671744,null,0,o.j,[[2,o.b],[8,null],[8,null],[6,o.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,o.f,null,[o.j]),t.ob(15,16384,null,0,o.g,[[4,o.f]],null,null),(l()(),t.pb(16,0,null,null,2,"span",[["class","input-group-btn"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,1,"button",[["class","btn btn-secondary"],["type","submit"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Go!"]))],(function(l,n){l(n,13,0,"searchTerm",n.component.searchTerm)}),(function(l,n){l(n,4,0,t.Bb(n,8).ngClassUntouched,t.Bb(n,8).ngClassTouched,t.Bb(n,8).ngClassPristine,t.Bb(n,8).ngClassDirty,t.Bb(n,8).ngClassValid,t.Bb(n,8).ngClassInvalid,t.Bb(n,8).ngClassPending),l(n,10,0,t.Bb(n,15).ngClassUntouched,t.Bb(n,15).ngClassTouched,t.Bb(n,15).ngClassPristine,t.Bb(n,15).ngClassDirty,t.Bb(n,15).ngClassValid,t.Bb(n,15).ngClassInvalid,t.Bb(n,15).ngClassPending)}))}var c=u("L2NZ"),b=function(){function l(l){this.blogRoutingService=l,this.categoryFrequencyMap=new Map}return l.prototype.ngOnInit=function(){this.initCategoryFrequencyMap()},l.prototype.getTop6Categories=function(){return new Map(this.categoryFrequencyMap.slice().sort((function(l,n){return n[1]-l[1]})).slice(0,6))},l.prototype.getEnumString=function(l){return c.a[l]},l.prototype.initCategoryFrequencyMap=function(){var l=this;this.blogRoutingService.getAllBlogPosts().map((function(l){return l.postCategories})).reduce((function(l,n){return l.concat(n)}),[]).forEach((function(n){l.categoryFrequencyMap.has(n)?l.categoryFrequencyMap.set(n,l.categoryFrequencyMap.get(n)+1):l.categoryFrequencyMap.set(n,1)}))},l}(),p=u("Nfsq"),g=t.nb({encapsulation:2,styles:[],data:{}});function d(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,5,"div",[["class","list-unstyled mb-0"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(2,671744,null,0,r.o,[r.l,r.a,e.j],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),t.Eb(3,{category:0}),t.Cb(4,1),(l()(),t.Jb(5,null,[" "," (",")"]))],(function(l,n){var u=l(n,3,0,n.context.$implicit.key),t=l(n,4,0,"/search-results");l(n,2,0,u,t)}),(function(l,n){var u=n.component;l(n,1,0,t.Bb(n,2).target,t.Bb(n,2).href),l(n,5,0,u.getEnumString(n.context.$implicit.key),n.context.$implicit.value)}))}function m(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,6,"div",[["class","card my-4"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"h5",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Categories"])),(l()(),t.pb(3,0,null,null,3,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,2,null,d)),t.ob(5,278528,null,0,e.l,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.Db(0,e.g,[t.r])],(function(l,n){var u=n.component;l(n,5,0,t.Kb(n,5,0,t.Bb(n,6).transform(u.getTop6Categories())))}),null)}var h=function(){},f=t.nb({encapsulation:2,styles:[],data:{}});function y(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"app-blog-sidebar-search",[],null,null,null,s,i)),t.ob(1,49152,null,0,a,[r.l],null,null),(l()(),t.pb(2,0,null,null,1,"app-blog-sidebar-category",[],null,null,null,m,g)),t.ob(3,114688,null,0,b,[p.a],null,null)],(function(l,n){l(n,3,0)}),null)}u("mo5H"),u.d(n,"a",(function(){return v})),u.d(n,"b",(function(){return k}));var v=t.nb({encapsulation:2,styles:[],data:{}});function P(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"h1",[["class","mt-4 mb-3"]],null,null,null,null,null)),(l()(),t.Jb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.blogTitle)}))}function C(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,0,"img",[["alt","Card image cap"],["class","card-img-top"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.tb(1,"assets/images/",n.parent.context.$implicit.postImageName,""))}))}function B(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,18,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,17,"div",[["class","card mb-4"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,C)),t.ob(3,16384,null,0,e.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(4,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,1,"h2",[["class","card-title"]],null,null,null,null,null)),(l()(),t.Jb(6,null,["",""])),(l()(),t.pb(7,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),t.Jb(8,null,["",""])),(l()(),t.pb(9,0,null,null,2,"a",[["class","btn btn-primary"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,10).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(10,671744,null,0,r.o,[r.l,r.a,e.j],{routerLink:[0,"routerLink"]},null),(l()(),t.Jb(-1,null,["Read More \u2192"])),(l()(),t.pb(12,0,null,null,6,"div",[["class","card-footer text-muted"]],null,null,null,null,null)),(l()(),t.Jb(13,null,[" Posted on "," by "])),t.Fb(14,2),(l()(),t.pb(15,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,16).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(16,671744,null,0,r.o,[r.l,r.a,e.j],{routerLink:[0,"routerLink"]},null),t.Cb(17,1),(l()(),t.Jb(-1,null,["Zimcke Van de Staey"]))],(function(l,n){l(n,3,0,n.component.postImagePresent(n.context.$implicit)),l(n,10,0,n.context.$implicit.path);var u=l(n,17,0,"/about");l(n,16,0,u)}),(function(l,n){l(n,6,0,n.context.$implicit.postTitle),l(n,8,0,n.context.$implicit.postAbstract),l(n,9,0,t.Bb(n,10).target,t.Bb(n,10).href);var u=t.Kb(n,13,0,l(n,14,0,t.Bb(n.parent,0),n.context.$implicit.postDate,"longDate"));l(n,13,0,u),l(n,15,0,t.Bb(n,16).target,t.Bb(n,16).href)}))}function k(l){return t.Lb(0,[t.Db(0,e.e,[t.s]),(l()(),t.eb(16777216,null,null,1,null,P)),t.ob(2,16384,null,0,e.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(3,0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,15,"div",[["class","col-md-9"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,B)),t.ob(6,278528,null,0,e.l,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(7,0,null,null,12,"ul",[["class","pagination justify-content-center mb-4"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,5,"li",[["class","page-item"]],null,null,null,null,null)),t.Gb(512,null,e.v,e.w,[t.q,t.r,t.k,t.B]),t.ob(10,278528,null,0,e.k,[e.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Eb(11,{disabled:0}),(l()(),t.pb(12,0,null,null,1,"button",[["class","page-link"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.previousPage()&&t),t}),null,null)),(l()(),t.Jb(-1,null,["\u2190 Newer"])),(l()(),t.pb(14,0,null,null,5,"li",[["class","page-item"]],null,null,null,null,null)),t.Gb(512,null,e.v,e.w,[t.q,t.r,t.k,t.B]),t.ob(16,278528,null,0,e.k,[e.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Eb(17,{disabled:0}),(l()(),t.pb(18,0,null,null,1,"button",[["class","page-link"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.nextPage()&&t),t}),null,null)),(l()(),t.Jb(-1,null,["Older \u2192"])),(l()(),t.pb(20,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,1,"app-blog-sidebar",[],null,null,null,y,f)),t.ob(22,49152,null,0,h,[],null,null)],(function(l,n){var u=n.component;l(n,2,0,u.blogTitle),l(n,6,0,u.blogPostsForCurrentPage());var t=l(n,11,0,!u.hasNewerPage());l(n,10,0,"page-item",t);var e=l(n,17,0,!u.hasOlderPage());l(n,16,0,"page-item",e)}),null)}},mo5H:function(l,n,u){"use strict";u.d(n,"a",(function(){return e}));var t=u("QC/d"),e=function(){function l(l,n){this.activatedRoute=l,this.router=n,this.blogPosts=[],this.pageSize=5}return l.prototype.ngOnInit=function(){this.blogPosts.sort((function(l,n){return t.a.compareBlogPostsByDate(l,n)})),this.initCurrentPage()},l.prototype.postImagePresent=function(l){return l.postImageName&&""!==l.postImageName},l.prototype.blogPostsForCurrentPage=function(){var l=(this.currentPage-1)*this.pageSize;return this.blogPosts.slice(l,l+this.pageSize)},l.prototype.hasNewerPage=function(){return this.currentPage>1},l.prototype.hasOlderPage=function(){return this.currentPage*this.pageSize<this.blogPosts.length},l.prototype.nextPage=function(){this.setCurrentPage(this.currentPage+1)},l.prototype.previousPage=function(){this.setCurrentPage(this.currentPage-1)},l.prototype.initCurrentPage=function(){this.currentPage=+this.activatedRoute.snapshot.queryParamMap.get("page"),(isNaN(this.currentPage)||this.currentPage<1||(this.currentPage-1)*this.pageSize+1>this.blogPosts.length)&&this.setCurrentPage(1)},l.prototype.setCurrentPage=function(l){this.currentPage=l,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{page:l},queryParamsHandling:"merge"})},l}()}}]);