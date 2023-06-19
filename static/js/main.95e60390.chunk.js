(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a,n=c(12),r=c.n(n),s=c(11),o=c(20),i=c(9),l=c(18),d=c(19);!function(e){e.SET="currentTodo/SET",e.REMOVE="currentTodo/REMOVE"}(a||(a={}));var u,j,b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.REMOVE:return null;case a.SET:return t.payload;default:return e}},h=c(6);!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(u||(u={})),function(e){e.SET_STATUS="filter/SET_STATUS",e.SET_QUERY="filter/SET_QUERY",e.CLEAR_QUERY="filter/CLEAR_QUERY"}(j||(j={}));var O,f={query:"",status:u.ALL},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.SET_STATUS:return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});case j.SET_QUERY:return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case j.CLEAR_QUERY:return Object(h.a)(Object(h.a)({},e),{},{query:""});default:return e}};!function(e){e.ADD="todos/ADD",e.LOADED="todos/LOADED",e.ERROR="todos/ERROR"}(O||(O={}));var m={todos:[],isLoaded:!1,isError:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.ADD:return Object(h.a)(Object(h.a)({},e),{},{todos:t.payload});case O.LOADED:return Object(h.a)(Object(h.a)({},e),{},{isLoaded:t.payload});case O.ERROR:return Object(h.a)(Object(h.a)({},e),{},{isError:t.payload});default:return e}},v=Object(i.combineReducers)({currentTodo:b,filter:p,todos:x}),y=Object(i.createStore)(v,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(d.a))),E=c(4),N=c(2),T=c.n(N),g=c(0),S=(c(29),c(30),s.b),R=s.c,A=function(e){return{type:a.SET,payload:e}},L=function(){return{type:a.REMOVE}},w=function(e){return e.currentTodo},C=c(8),D=c.n(C),k=c(1),_=function(e){var t=e.id,c=e.isSelectedTodo,a=e.completed,n=e.title,r=e.onSelect;return Object(k.jsxs)("tr",{"data-cy":"todo",className:D()({"has-background-info-light":c}),children:[Object(k.jsx)("td",{className:"is-vcentered",children:t}),Object(k.jsx)("td",{className:"is-vcentered",children:a&&Object(k.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(k.jsx)("i",{className:"fas fa-check"})})}),Object(k.jsx)("td",{className:"is-vcentered is-expanded",children:Object(k.jsx)("p",{className:D()({"has-text-success":a,"has-text-danger":!a}),children:n})}),Object(k.jsx)("td",{className:"has-text-right is-vcentered",children:Object(k.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return r(t)},children:Object(k.jsx)("span",{className:"icon",children:Object(k.jsx)("i",{className:D()("far",{"fa-eye":!c,"fa-eye-slash":c})})})})})]})},U=function(e){var t=e.todos,c=R(w),a=S(),n=function(e){var c=t.find((function(t){return t.id===e}));c&&a(A(c))},r=Object(g.useMemo)((function(){return t.length>0}),[t]);return Object(k.jsxs)(k.Fragment,{children:[!r&&Object(k.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),r&&Object(k.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"#"}),Object(k.jsx)("th",{children:Object(k.jsx)("span",{className:"icon",children:Object(k.jsx)("i",{className:"fas fa-check"})})}),Object(k.jsx)("th",{children:"Title"}),Object(k.jsx)("th",{children:" "})]})}),Object(k.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.completed,r=e.title;return Object(k.jsx)(_,{id:t,completed:a,title:r,isSelectedTodo:(null===c||void 0===c?void 0:c.id)===t,onSelect:n},t)}))})]})]})},M=function(e){return{type:j.SET_STATUS,payload:e}},Q=function(e){return{type:j.SET_QUERY,payload:e}},Y=function(){return{type:j.CLEAR_QUERY,payload:""}};var V=function(e){return e.filter},q=function(){var e=R(V).query,t=S(),c=Boolean(e);return Object(k.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(k.jsx)("p",{className:"control",children:Object(k.jsx)("span",{className:"select",children:Object(k.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){var c=e.currentTarget.value.toUpperCase(),a=u[c];t(M(a))},children:[Object(k.jsx)("option",{value:u.ALL,children:"All"}),Object(k.jsx)("option",{value:u.ACTIVE,children:"Active"}),Object(k.jsx)("option",{value:u.COMPLETED,children:"Completed"})]})})}),Object(k.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(k.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:e,onChange:function(e){t(Q(e.currentTarget.value))}}),Object(k.jsx)("span",{className:"icon is-left",children:Object(k.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(k.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(k.jsx)("button",{"aria-label":"Clear query input","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){t(Y())}})})]})]})},I=c(3);function P(e){var t,c="".concat("https://mate-academy.github.io/react_dynamic-list-of-todos/api").concat(e,".json");return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(32);var B=function(){return Object(k.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(k.jsx)("div",{className:"Loader__content"})})},F=function(e){var t=e.user,c=e.todo,a=t.name,n=t.email,r=c.id,s=c.title,o=c.completed,i=S();return Object(k.jsxs)("div",{className:"modal-card",children:[Object(k.jsxs)("header",{className:"modal-card-head",children:[Object(k.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",r]}),Object(k.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"Close modal",onClick:function(){i(L())}})]}),Object(k.jsxs)("div",{className:"modal-card-body",children:[Object(k.jsx)("p",{className:"block","data-cy":"modal-title",children:s}),Object(k.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(k.jsx)("strong",{className:D()({"has-text-success":o,"has-text-danger":!o}),children:o?"Done":"Planned"})," by ",Object(k.jsx)("a",{href:n,children:a})]})]})]})},J=function(){var e=Object(g.useState)(null),t=Object(I.a)(e,2),c=t[0],a=t[1],n=Object(g.useState)(!1),r=Object(I.a)(n,2),s=r[0],o=r[1],i=R(w);Object(g.useEffect)((function(){var e=function(){var e=Object(E.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,c=i.userId,P("/users/".concat(c));case 5:t=e.sent,a(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),window.console.log("error");case 12:return e.prev=12,o(!0),e.finish(12);case 15:case"end":return e.stop()}var c}),e,null,[[2,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var l=s&&c&&i;return Object(k.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(k.jsx)("div",{className:"modal-background"}),!s&&Object(k.jsx)(B,{}),l&&Object(k.jsx)(F,{user:c,todo:i})]})},W=function(e){return{type:O.ADD,payload:e}},z=function(e){return{type:O.LOADED,payload:e}},G=function(e){return{type:O.ERROR,payload:e}},H=function(e){return e.todos},K=function(){var e=R(H),t=e.todos,c=e.isError,a=e.isLoaded,n=R(w),r=R(V),s=S();Object(g.useEffect)((function(){var e=function(){var e=Object(E.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P("/todos");case 3:t=e.sent,s(W(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(G(!0));case 10:return e.prev=10,s(z(!0)),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var o=Object(g.useMemo)((function(){return function(e,t){var c=t.status,a=t.query,n=e;switch(c){case u.ACTIVE:n=e.filter((function(e){return!e.completed}));break;case u.COMPLETED:n=e.filter((function(e){return e.completed}))}if(a){var r=a.toLowerCase();n=n.filter((function(e){return e.title.toLowerCase().includes(r)}))}return n}(t,r)}),[t,r]);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"section",children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"box",children:[Object(k.jsx)("h1",{className:"title",children:"Todos:"}),Object(k.jsx)("div",{className:"block",children:Object(k.jsx)(q,{})}),Object(k.jsxs)("div",{className:"block",children:[a?Object(k.jsx)(U,{todos:o}):Object(k.jsx)(B,{}),c&&Object(k.jsx)("p",{className:"notification is-warning",children:"Something went wrong, please try again later"})]})]})})}),n&&Object(k.jsx)(J,{})]})},X=function(){return Object(k.jsx)(s.a,{store:y,children:Object(k.jsx)(o.a,{children:Object(k.jsx)(K,{})})})};r.a.render(Object(k.jsx)(X,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.95e60390.chunk.js.map