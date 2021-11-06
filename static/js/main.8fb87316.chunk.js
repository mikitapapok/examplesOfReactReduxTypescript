(this["webpackJsonpreact-typescript-one"]=this["webpackJsonpreact-typescript-one"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var o,c=n(0),r=n(8),a=n.n(r),d=n(3),s=n(2),i=n(13),u=n(10),l=n(4),p=n.n(l),b=n(7),f=Object(d.b)("todo/createNewTodo",function(){var t=Object(b.a)(p.a.mark((function t(e,n){var o,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.rejectWithValue,n.dispatch,t.next=3,fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");case 3:return o=t.sent,t.next=6,o.json();case 6:return c=t.sent,t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),j=Object(d.b)("todo/removeSomeTodo",function(){var t=Object(b.a)(p.a.mark((function t(e,n){var o,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.dispatch,c="https://jsonplaceholder.typicode.com/todos/".concat(e),t.next=4,fetch(c,{method:"DELETE"});case 4:t.sent,o(y(e));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),m=Object(d.b)("todo/switchState",function(){var t=Object(b.a)(p.a.mark((function t(e,n){var o,c,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.dispatch,c=n.getState,r=c().todo.todos.find((function(t){return t.id===e})),t.next=4,fetch("https://jsonplaceholder.typicode.com/todos/".concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({completed:!(null===r||void 0===r?void 0:r.completed)})});case 4:t.sent,console.log(r),o(k(e));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),h=Object(d.b)("todo/addNewItem",function(){var t=Object(b.a)(p.a.mark((function t(e,n){var o,c,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.dispatch,c=n.getState,o(N()),r={userId:"1",id:c().todo.currentId,title:e,completed:!1},t.next=5,fetch("https://jsonplaceholder.typicode.com/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 5:o(v(r));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),O=Object(d.c)({name:"todo",initialState:{todos:[],currentId:547,sort:"all",status:""},reducers:{addTodo:function(t,e){t.todos=[].concat(Object(u.a)(t.todos),[e.payload])},deleteTodo:function(t,e){t.todos=t.todos.filter((function(t){return t.id!==e.payload}))},addNewId:function(t){t.currentId=t.currentId+1},toggleComplete:function(t,e){var n=t.todos.find((function(t){return t.id===e.payload}));n.completed=!n.completed},addNewCompleted:function(t,e){"completed"===e.payload?t.sort=!0:"incompleted"===e.payload?t.sort=!1:t.sort=e.payload}},extraReducers:(o={},Object(i.a)(o,f.pending.type,(function(t){t.status="load"})),Object(i.a)(o,f.fulfilled.type,(function(t,e){t.todos=[].concat(Object(u.a)(t.todos),Object(u.a)(e.payload))})),o)}),x=O.actions,v=x.addTodo,y=x.deleteTodo,N=x.addNewId,k=x.toggleComplete,w=x.addNewCompleted,g=O.reducer,C=Object(s.b)({todo:g}),T=n(6),S=Object(d.a)({reducer:C}),I=T.c,_=function(){return Object(T.b)()},E=n(1),J=function(t){var e=t.children,n=_(),o=e;return Object(E.jsxs)("div",{className:"list-component ",children:[Object(E.jsx)("input",{type:"checkbox",onChange:function(){n(m(o.id))},checked:!!o.completed}),Object(E.jsx)("p",{className:o.completed?"completed":"incompleted",children:o.title}),Object(E.jsx)("button",{className:"delete-button",onClick:function(){n(j(o.id))},children:"delete Todo"})]})},L=function(){var t=I((function(t){return t.todo.sort})),e=I((function(t){return t.todo.todos}));return Object(E.jsx)("div",{className:"list",children:e?e.filter((function(e){return"all"===t?e:e.completed===t})).map((function(t){return Object(E.jsx)(J,{children:t},t.id)})):null})},A=function(){var t=I((function(t){return t.todo.sort})),e=_(),n=function(t){e(w(t.currentTarget.innerHTML.toLocaleLowerCase()))};return Object(E.jsxs)("div",{className:"button-block",children:[Object(E.jsx)("button",{className:"all"===t?"currentSort":"button-block__element",onClick:n,children:"All"}),Object(E.jsx)("button",{className:!0===t?"currentSort":"button-block__element",onClick:n,children:"Completed"}),Object(E.jsx)("button",{className:t?"button-block__element":"currentSort",onClick:n,children:"Incompleted"})]})},D=n(15),H=function(){var t=_(),e=Object(c.useState)(""),n=Object(D.a)(e,2),o=n[0],r=n[1];return Object(E.jsxs)("form",{className:"input-form",children:[Object(E.jsx)("input",{className:"input-form-input",onChange:function(t){r(t.target.value)},value:o}),Object(E.jsx)("button",{className:"input-form-button add-button",onClick:function(e){e.preventDefault(),o.trim().length&&t(h(o)),r("")},children:"Add some todo"}),Object(E.jsx)("button",{className:"input-form-button get-button",onClick:function(e){e.preventDefault(),t(f())},children:"Get todos from server"})]})},P=function(){return Object(E.jsxs)("div",{className:"content",children:[Object(E.jsx)(H,{}),Object(E.jsx)(A,{}),Object(E.jsx)(L,{})]})},B=function(){return Object(E.jsx)(P,{})};n(26);a.a.render(Object(E.jsx)(T.a,{store:S,children:Object(E.jsx)(B,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.8fb87316.chunk.js.map