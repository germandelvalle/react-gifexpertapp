(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(7),s=n.n(i),u=n(2),o=n(9),j=function(e){var t=e.setCategories,n=e.categories,r=Object(c.useState)(""),i=Object(u.a)(r,2),s=i[0],j=i[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),s.trim().length>2&&(t([s].concat(Object(o.a)(n))),j(""))},children:Object(a.jsx)("input",{type:"text",value:s,onChange:function(e){j(e.target.value)}})})},d=n(10),l=n(6),b=n.n(l),m=n(8),p=function(){var e=Object(m.a)(b.a.mark((function e(t){var n,a,c,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=SsliZFEBrmo5e93ESaZQbqy5vhgBJ3aB"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:n,alt:t}),Object(a.jsx)("p",{children:t})]})},h=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){p(e).then((function(e){console.log(e),r({data:e,loading:!1})}))}),[e]),a}(t),r=n.loading,i=n.data;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:t}),r&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(a.jsx)("div",{className:"card-item animate__animated animate__fadeIn",children:i.map((function(e){return Object(a.jsx)(f,Object(d.a)({},e),e.id)}))})]})},O=function(){var e=Object(c.useState)(["naruto"]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(j,{setCategories:r,categories:n}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{className:"card-item",children:n.map((function(e){return Object(a.jsx)(h,{category:e},e)}))})]})};n(17);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2b316d7b.chunk.js.map