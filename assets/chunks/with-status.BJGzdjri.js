import{p as d,r as w,q as n,o as i,c as m,y as e,v as o,R as y,T as f,_ as a,t as r,u as l}from"./framework.CKY1kIjS.js";import{e as S,ak as $,R as x,n as E}from"./theme.gZBTnNau.js";const W=d({__name:"basic",setup(p){const c=w(0),t=()=>{c.value++>2&&(c.value=0)};return(s,_)=>{const u=n("el-step"),h=n("el-steps"),v=n("el-button");return i(),m(f,null,[e(h,{style:{"max-width":"600px"},active:c.value,"finish-status":"success"},{default:o(()=>[e(u,{title:"Step 1"}),e(u,{title:"Step 2"}),e(u,{title:"Step 3"})]),_:1},8,["active"]),e(v,{style:{"margin-top":"12px"},onClick:t},{default:o(()=>[y("Next step")]),_:1})],64)}}}),b={};function g(p,c){const t=n("el-step"),s=n("el-steps");return i(),r(s,{style:{"max-width":"600px"},active:2,"align-center":""},{default:o(()=>[e(t,{title:"Step 1",description:"Some description"}),e(t,{title:"Step 2",description:"Some description"}),e(t,{title:"Step 3",description:"Some description"})]),_:1})}const q=a(b,[["render",g]]),F=d({__name:"simple",setup(p){return(c,t)=>{const s=n("el-step"),_=n("el-steps");return i(),m(f,null,[e(_,{class:"mb-4",style:{"max-width":"600px"},space:200,active:1,simple:""},{default:o(()=>[e(s,{title:"Step 1",icon:l(S)},null,8,["icon"]),e(s,{title:"Step 2",icon:l($)},null,8,["icon"]),e(s,{title:"Step 3",icon:l(x)},null,8,["icon"])]),_:1}),e(_,{style:{"max-width":"600px"},active:1,"finish-status":"success",simple:""},{default:o(()=>[e(s,{title:"Step 1"}),e(s,{title:"Step 2"}),e(s,{title:"Step 3"})]),_:1})],64)}}}),k={};function C(p,c){const t=n("el-step"),s=n("el-steps");return i(),m("div",{style:{height:"300px","max-width":"600px"}},[e(s,{direction:"vertical",active:1},{default:o(()=>[e(t,{title:"Step 1"}),e(t,{title:"Step 2"}),e(t,{title:"Step 3"})]),_:1})])}const P=a(k,[["render",C]]),B={};function N(p,c){const t=n("el-step"),s=n("el-steps");return i(),r(s,{style:{"max-width":"600px"},active:1},{default:o(()=>[e(t,{title:"Step 1",description:"Some description"}),e(t,{title:"Step 2",description:"Some description"}),e(t,{title:"Step 3",description:"Some description"})]),_:1})}const j=a(B,[["render",N]]),z=d({__name:"with-icon",setup(p){return(c,t)=>{const s=n("el-step"),_=n("el-steps");return i(),r(_,{style:{"max-width":"600px"},active:1},{default:o(()=>[e(s,{title:"Step 1",icon:l(S)},null,8,["icon"]),e(s,{title:"Step 2",icon:l(E)},null,8,["icon"]),e(s,{title:"Step 3",icon:l(x)},null,8,["icon"])]),_:1})}}}),V={};function D(p,c){const t=n("el-step"),s=n("el-steps");return i(),r(s,{style:{"max-width":"600px"},space:200,active:1,"finish-status":"success"},{default:o(()=>[e(t,{title:"Done"}),e(t,{title:"Processing"}),e(t,{title:"Step 3"})]),_:1})}const A=a(V,[["render",D]]);export{A as E,W as _,q as a,j as b,z as c,P as d,F as e};
