(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={"form-main":"CourseInput_form-main__2sJGB",far:"CourseInput_far__3-3wM",fab:"CourseInput_fab__2he8h","content-para":"CourseInput_content-para__2UvWS","form-control":"CourseInput_form-control__1bI9w",invalid:"CourseInput_invalid__OYTGD"}},,function(t,e,n){t.exports={button:"Button_button__aVXOY"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(7),i=n.n(o),a=(n(14),n(9)),r=n(3),s=(n(15),n(0)),u=function(t){return Object(s.jsx)("li",{className:"goal-item",onClick:function(){t.onDelete(t.id)},children:t.children})},l=(n(17),function(t){return Object(s.jsx)("ul",{className:"goal-list",children:t.items.map((function(e){return Object(s.jsx)(u,{id:e.id,onDelete:t.onDeleteItem,children:e.text},e.id)}))})}),d=n(8),j=n.n(d),f=function(t){return Object(s.jsx)("button",{type:t.type,className:j.a.button,onClick:t.onClick,children:t.children})},b=n(6),m=n.n(b),h=function(t){var e=Object(c.useState)(""),n=Object(r.a)(e,2),o=n[0],i=n[1],a=Object(c.useState)(!0),u=Object(r.a)(a,2),l=u[0],d=u[1];return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==o.trim().length?t.onAddGoal(o):d(!1)},className:"form-main",children:[Object(s.jsxs)("div",{className:"".concat(m.a["form-control"]," ").concat(!l&&m.a.invalid),children:[Object(s.jsxs)("label",{children:["Things To Do...",Object(s.jsx)("i",{className:"fab fa-angellist"})]}),Object(s.jsx)("input",{type:"text",onChange:function(t){t.target.value.trim().length>0&&d(!0),i(t.target.value)}})]}),Object(s.jsx)(f,{type:"submit",children:"Add Items "})]})},x=(n(18),function(){var t=Object(c.useState)([{text:"Do all exercises!",id:"g1"},{text:"Finish the course!",id:"g2"}]),e=Object(r.a)(t,2),n=e[0],o=e[1],i=Object(s.jsxs)("p",{style:{textAlign:"center"},className:"content-para",children:["No tasks found. Maybe add one ",Object(s.jsx)("i",{className:"fab fa-react"})]});return n.length>0&&(i=Object(s.jsx)(l,{items:n,onDeleteItem:function(t){o((function(e){return e.filter((function(e){return e.id!==t}))}))}})),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("section",{id:"goal-form",children:Object(s.jsx)(h,{onAddGoal:function(t){o((function(e){var n=Object(a.a)(e);return n.unshift({text:t,id:Math.random().toString()}),n}))}})}),Object(s.jsx)("section",{id:"goals",children:i})]})});i.a.render(Object(s.jsx)(x,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.a9562829.chunk.js.map