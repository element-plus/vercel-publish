import{f as m,r as o,o as r,g as u,w as e,b as a,a as t,d as _,h as f,c as y,ar as $,u as S,J as T}from"../app.9635afe0.js";const z={},j={class:"flex items-center"},O=a("span",{class:"text-large font-600 mr-3"}," Title ",-1),k=a("span",{class:"text-sm mr-2",style:{color:"var(--el-text-color-regular)"}}," Sub title ",-1),P=_("Default"),w={class:"flex items-center"},B=_("Print"),M=_("Edit");function E(d,s){const n=o("el-avatar"),c=o("el-tag"),l=o("el-button"),p=o("el-page-header");return r(),u(p,{icon:null},{content:e(()=>[a("div",j,[t(n,{size:32,class:"mr-3",src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),O,k,t(c,null,{default:e(()=>[P]),_:1})])]),extra:e(()=>[a("div",w,[t(l,null,{default:e(()=>[B]),_:1}),t(l,{type:"primary",class:"ml-2"},{default:e(()=>[M]),_:1})])]),_:1})}var N=m(z,[["render",E]]),xe=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));const C=a("span",{class:"text-large font-600 mr-3"}," Title ",-1),A=f({__name:"basic",setup(d){const s=()=>{console.log("go back")};return(n,c)=>{const l=o("el-page-header");return r(),u(l,{onBack:s},{content:e(()=>[C]),_:1})}}});var ye=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const D={},V=_(" homepage "),J=a("a",{href:"./page-header.html"},"route 1",-1),W=_("route 2"),Y=a("span",{class:"text-large font-600 mr-3"}," Title ",-1);function q(d,s){const n=o("el-breadcrumb-item"),c=o("el-breadcrumb"),l=o("el-page-header");return r(),u(l,null,{breadcrumb:e(()=>[t(c,{separator:"/"},{default:e(()=>[t(n,{to:{path:"./page-header.html"}},{default:e(()=>[V]),_:1},8,["to"]),t(n,null,{default:e(()=>[J]),_:1}),t(n,null,{default:e(()=>[W]),_:1})]),_:1})]),content:e(()=>[Y]),_:1})}var I=m(D,[["render",q]]),$e=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const R={"aria-label":"A complete example of page header"},U=_(" homepage "),F=a("a",{href:"./page-header.html"},"route 1",-1),G=_("route 2"),H={class:"flex items-center"},K=a("span",{class:"text-large font-600 mr-3"}," Title ",-1),L=a("span",{class:"text-sm mr-2",style:{color:"var(--el-text-color-regular)"}}," Sub title ",-1),Q=_("Default"),X={class:"flex items-center"},Z=_("Print"),ee=_("Edit"),te=_("kooriookami"),oe=_("18100000000"),ae=_("Suzhou"),_e=_("School"),ne=_("No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province "),le=a("p",{class:"mt-4 text-sm"},[_(" Element Plus team uses "),a("b",null,"weekly"),_(" release strategy under normal circumstance, but critical bug fixes would require hotfix so the actual release number "),a("b",null,"could be"),_(" more than 1 per week. ")],-1),se=f({__name:"complete",setup(d){const s=()=>{$("Back")};return(n,c)=>{const l=o("el-breadcrumb-item"),p=o("el-breadcrumb"),g=o("el-avatar"),h=o("el-tag"),b=o("el-button"),i=o("el-descriptions-item"),v=o("el-descriptions"),x=o("el-page-header");return r(),y("div",R,[t(x,{onBack:s},{breadcrumb:e(()=>[t(p,{separator:"/"},{default:e(()=>[t(l,{to:{path:"./page-header.html"}},{default:e(()=>[U]),_:1},8,["to"]),t(l,null,{default:e(()=>[F]),_:1}),t(l,null,{default:e(()=>[G]),_:1})]),_:1})]),content:e(()=>[a("div",H,[t(g,{class:"mr-3",size:32,src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),K,L,t(h,null,{default:e(()=>[Q]),_:1})])]),extra:e(()=>[a("div",X,[t(b,null,{default:e(()=>[Z]),_:1}),t(b,{type:"primary",class:"ml-2"},{default:e(()=>[ee]),_:1})])]),default:e(()=>[t(v,{column:3,size:"small",class:"mt-4"},{default:e(()=>[t(i,{label:"Username"},{default:e(()=>[te]),_:1}),t(i,{label:"Telephone"},{default:e(()=>[oe]),_:1}),t(i,{label:"Place"},{default:e(()=>[ae]),_:1}),t(i,{label:"Remarks"},{default:e(()=>[t(h,{size:"small"},{default:e(()=>[_e]),_:1})]),_:1}),t(i,{label:"Address"},{default:e(()=>[ne]),_:1})]),_:1}),le]),_:1})])}}});var Se=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));const ce=a("span",{class:"text-large font-600 mr-3"}," Title ",-1),re=f({__name:"custom-icon",setup(d){return(s,n)=>{const c=o("el-page-header");return r(),u(c,{icon:S(T)},{content:e(()=>[ce]),_:1},8,["icon"])}}});var Te=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));const de={},ue=a("span",{class:"text-large font-600 mr-3"}," Title ",-1),ie=a("div",{class:"mt-4 text-sm font-bold"}," Your additional content can be added with default slot, You may put as many content as you want here. ",-1);function me(d,s){const n=o("el-page-header");return r(),u(n,null,{content:e(()=>[ue]),default:e(()=>[ie]),_:1})}var pe=m(de,[["render",me]]),ze=Object.freeze(Object.defineProperty({__proto__:null,default:pe},Symbol.toStringTag,{value:"Module"}));const fe={},he=a("span",{class:"text-large font-600 mr-3"}," Title ",-1);function be(d,s){const n=o("el-page-header");return r(),u(n,{icon:null},{content:e(()=>[he]),_:1})}var ge=m(fe,[["render",be]]),je=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"}));export{xe as _,ye as a,$e as b,Se as c,Te as d,ze as e,je as f};
