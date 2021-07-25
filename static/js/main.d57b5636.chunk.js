(this.webpackJsonptmdb_test=this.webpackJsonptmdb_test||[]).push([[0],{10:function(e,t,a){e.exports={movie:"styles_movie__38M7X",link:"styles_link__1cA5Q",image:"styles_image__DtLsA",title:"styles_title__3E8Mw"}},15:function(e,t,a){e.exports={header:"styles_header__2dQfB",logo:"styles_logo__2I-b3"}},17:function(e,t,a){e.exports={pagination:"styles_pagination__rwfBx",active:"styles_active__spz6-"}},18:function(e,t,a){e.exports={container:"styles_container__332Lk",content:"styles_content__1yzZG"}},23:function(e,t,a){e.exports={footer:"styles_footer__2jx7K"}},25:function(e,t,a){e.exports={movies:"styles_movies__1GBBJ"}},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),o=(a(30),a(3)),i=a(1),s=a(9),m=a.n(s);var u=function(){var e=Object(i.f)();return l.a.createElement("nav",{className:m.a.nav},l.a.createElement("div",{className:m.a.title},"Search by name"),l.a.createElement("input",{type:"text",id:"name",placeholder:"...search movie"}),l.a.createElement("button",{onClick:function(){var t=document.getElementById("name").value;t&&t.length>4&&(e.push("/name/".concat(t)),location.reload())}},"search"),l.a.createElement("div",{className:m.a.separator}," | "),l.a.createElement("div",{className:m.a.title},"Filter by genre"),l.a.createElement("select",{onChange:function(t){return function(t){var a=t.target.value.toLowerCase();e.push("/genre/".concat(a)),location.reload()}(t)}},l.a.createElement("option",{default:!0},"..."),l.a.createElement("option",null,"Action"),l.a.createElement("option",null,"Adventure"),l.a.createElement("option",null,"Animation"),l.a.createElement("option",null,"Comedy"),l.a.createElement("option",null,"Crime"),l.a.createElement("option",null,"Documentary"),l.a.createElement("option",null,"Drama"),l.a.createElement("option",null,"Family"),l.a.createElement("option",null,"Fantasy"),l.a.createElement("option",null,"History"),l.a.createElement("option",null,"Horror"),l.a.createElement("option",null,"Music"),l.a.createElement("option",null,"Mystery"),l.a.createElement("option",null,"Romance"),l.a.createElement("option",null,"Science Fiction"),l.a.createElement("option",null,"TV Movie"),l.a.createElement("option",null,"Thriller"),l.a.createElement("option",null,"War"),l.a.createElement("option",null,"Western")))},p=a(15),E=a.n(p);var v=function(){var e=Object(i.f)();return l.a.createElement("header",{className:E.a.header},l.a.createElement(o.b,{className:E.a.logo,to:"/",onClick:function(){e.push("/"),location.reload()}},"TMDB"),l.a.createElement(u,null))},_=a(23),f=a.n(_);var d=function(){return l.a.createElement("footer",{className:f.a.footer},"\xa9 TMDB. All rights reserved.")},h=a(16),g=a.n(h),y=a(24),b=a(11),N=a(17),k=a.n(N);var j=function(e){var t=e.total/20;return l.a.createElement("div",{className:k.a.pagination},l.a.createElement(o.c,{to:"/page/1"}," < "),function(){for(var e=[],a=0;a<t;a++){var n=a+1;e.push(l.a.createElement(o.c,{activeClassName:k.a.active,key:n,to:"/page/".concat(n)},n))}return e}(),l.a.createElement(o.c,{to:"/page/".concat(t)}," > "))},x=a(10),w=a.n(x);var O=function(e){var t=e.movie,a=t.title,n=t.poster_path,r=t._id;return l.a.createElement("div",{className:w.a.movie},l.a.createElement(o.b,{className:w.a.link,to:"/detail/".concat(r)},l.a.createElement("img",{src:"https://www.themoviedb.org/t/p/w185".concat(n),alt:a,className:w.a.image})),l.a.createElement("div",{className:w.a.title},l.a.createElement(o.b,{to:"/detail/".concat(r)},a)))};var B=function(e){var t="";switch(e.type){case"page":t="http://localhost:8080/movies?page=".concat(--e.value);break;case"genre":t="http://localhost:8080/movies?genre=".concat(e.value);break;case"name":t="http://localhost:8080/movies?name=".concat(e.value);break;default:t="http://localhost:8080/movies"}return fetch(t).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error("api error",e)}))},M=a(25),C=a.n(M);var A=function(){var e=Object(i.g)(),t=e.page,a=e.name,r=e.genre,c=Object(n.useState)([]),o=Object(b.a)(c,2),s=o[0],m=o[1],u=Object(n.useState)(),p=Object(b.a)(u,2),E=p[0],v=p[1],_=Object(n.useState)(!0),f=Object(b.a)(_,2),d=f[0],h=f[1];return Object(n.useEffect)((function(){Object(y.a)(g.a.mark((function e(){var n,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:t?"page":a?"name":r?"genre":"",value:t||a||r},e.next=3,B(n);case 3:(l=e.sent)&&(m(l.movies),v(l.total),h(!1));case 5:case"end":return e.stop()}}),e)})))()}),[t]),l.a.createElement(l.a.Fragment,null,d?l.a.createElement("div",null,"Loading..."):s&&s.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:C.a.movies},s.map((function(e){return l.a.createElement(O,{movie:e,key:e._id})}))),l.a.createElement(j,{total:E})):l.a.createElement("div",null,"No results"))},F=a(18),S=a.n(F);var D=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:S.a.container},l.a.createElement(v,null),l.a.createElement("div",{className:S.a.content},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(A,null)),l.a.createElement(i.a,{path:"/page/:page"},l.a.createElement(A,null)),l.a.createElement(i.a,{path:"/genre/:genre"},l.a.createElement(A,null)),l.a.createElement(i.a,{path:"/name/:name"},l.a.createElement(A,null)))),l.a.createElement(d,null)))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root"))},9:function(e,t,a){e.exports={nav:"styles_nav__19zlJ",title:"styles_title__3dpy2",separator:"styles_separator__31baZ"}}},[[37,1,2]]]);
//# sourceMappingURL=main.d57b5636.chunk.js.map