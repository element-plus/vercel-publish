import{u as p}from"./theme.OkkKDdTK.js";import{p as i,k as A,q as c,o as _,t as m,v as a,y as o,W as t,X as r,r as $,c as k,a as d}from"./framework.BfK9qma0.js";const g={"en-US":{"basic-usage":"basic-usage","horizontal-mode":"horizontal-mode","scroll-container":"scroll-container","anchor-api":"anchor-api","anchor-attributes":"anchor-attributes","anchor-events":"anchor-events","Basic Usage":"Basic Usage","Horizontal Mode":"Horizontal Mode","Scroll Container":"Scroll Container","Anchor API":"Anchor API","Anchor Attributes":"Anchor Attributes","Anchor Events":"Anchor Events"},"es-ES":{"basic-usage":"basic-usage","horizontal-mode":"horizontal-mode","scroll-container":"scroll-container","anchor-api":"anchor-api","anchor-attributes":"anchor-attributes","anchor-events":"anchor-events","Basic Usage":"Basic Usage","Horizontal Mode":"Horizontal Mode","Scroll Container":"Scroll Container","Anchor API":"Anchor API","Anchor Attributes":"Anchor Attributes","Anchor Events":"Anchor Events"},"zh-CN":{"basic-usage":"基础用法","horizontal-mode":"水平模式","scroll-container":"滚动的容器","anchor-api":"anchor-api","anchor-attributes":"anchor-attributes","anchor-events":"anchor-events","Basic Usage":"基础用法","Horizontal Mode":"水平模式","Scroll Container":"滚动的容器","Anchor API":"Anchor API","Anchor Attributes":"Anchor Attributes","Anchor Events":"Anchor Events"}},C=i({__name:"affix",setup(f){const s=p(),e=A(()=>g[s.value]);return(h,u)=>{const n=c("el-anchor-link"),l=c("el-anchor"),v=c("el-affix");return _(),m(v,{offset:60},{default:a(()=>[o(l,{offset:70,style:{width:"300px"}},{default:a(()=>[o(n,{href:`#${e.value["basic-usage"]}`},{default:a(()=>[t(r(e.value["Basic Usage"]),1)]),_:1},8,["href"]),o(n,{href:`#${e.value["horizontal-mode"]}`},{default:a(()=>[t(r(e.value["Horizontal Mode"]),1)]),_:1},8,["href"]),o(n,{href:`#${e.value["scroll-container"]}`},{default:a(()=>[t(r(e.value["Scroll Container"]),1)]),_:1},8,["href"]),o(n,{href:`#${e.value["anchor-api"]}`},{"sub-link":a(()=>[o(n,{href:`#${e.value["anchor-attributes"]}`},{default:a(()=>[t(r(e.value["Anchor Attributes"]),1)]),_:1},8,["href"]),o(n,{href:`#${e.value["anchor-events"]}`},{default:a(()=>[t(r(e.value["Anchor Events"]),1)]),_:1},8,["href"])]),default:a(()=>[t(r(e.value["Anchor API"])+" ",1)]),_:1},8,["href"])]),_:1})]),_:1})}}}),B=i({__name:"basic",setup(f){const s=p(),e=A(()=>g[s.value]);return(h,u)=>{const n=c("el-anchor-link"),l=c("el-anchor");return _(),m(l,{offset:70},{default:a(()=>[o(n,{href:`#${e.value["basic-usage"]}`},{default:a(()=>[t(r(e.value["Basic Usage"]),1)]),_:1},8,["href"]),o(n,{href:`#${e.value["horizontal-mode"]}`},{default:a(()=>[t(r(e.value["Horizontal Mode"]),1)]),_:1},8,["href"]),o(n,{href:`#${e.value["scroll-container"]}`},{default:a(()=>[t(r(e.value["Scroll Container"]),1)]),_:1},8,["href"]),o(n,{href:`#${e.value["anchor-api"]}`},{"sub-link":a(()=>[o(n,{href:`#${e.value["anchor-attributes"]}`},{default:a(()=>[t(r(e.value["Anchor Attributes"]),1)]),_:1},8,["href"]),o(n,{href:`#${e.value["anchor-events"]}`},{default:a(()=>[t(r(e.value["Anchor Events"]),1)]),_:1},8,["href"])]),default:a(()=>[t(r(e.value["Anchor API"])+" ",1)]),_:1},8,["href"])]),_:1})}}}),S=i({__name:"change",setup(f){const s=p(),e=A(()=>g[s.value]),h=u=>{console.log(`anchor change: ${u}`)};return(u,n)=>{const l=c("el-anchor-link"),v=c("el-anchor");return _(),m(v,{offset:70,onChange:h},{default:a(()=>[o(l,{href:`#${e.value["basic-usage"]}`},{default:a(()=>[t(r(e.value["Basic Usage"]),1)]),_:1},8,["href"]),o(l,{href:`#${e.value["horizontal-mode"]}`},{default:a(()=>[t(r(e.value["Horizontal Mode"]),1)]),_:1},8,["href"]),o(l,{href:`#${e.value["scroll-container"]}`},{default:a(()=>[t(r(e.value["Scroll Container"]),1)]),_:1},8,["href"]),o(l,{href:`#${e.value["anchor-api"]}`},{"sub-link":a(()=>[o(l,{href:`#${e.value["anchor-attributes"]}`},{default:a(()=>[t(r(e.value["Anchor Attributes"]),1)]),_:1},8,["href"]),o(l,{href:`#${e.value["anchor-events"]}`},{default:a(()=>[t(r(e.value["Anchor Events"]),1)]),_:1},8,["href"])]),default:a(()=>[t(r(e.value["Anchor API"])+" ",1)]),_:1},8,["href"])]),_:1})}}}),y=i({__name:"horizontal",setup(f){const s=p(),e=A(()=>g[s.value]);return(h,u)=>{const n=c("el-anchor-link"),l=c("el-anchor");return _(),m(l,{offset:70,direction:"horizontal"},{default:a(()=>[o(n,{href:`#${e.value["basic-usage"]}`},{default:a(()=>[t(r(e.value["Basic Usage"]),1)]),_:1},8,["href"]),o(n,{href:`#${e.value["horizontal-mode"]}`},{default:a(()=>[t(r(e.value["Horizontal Mode"]),1)]),_:1},8,["href"]),o(n,{href:`#${e.value["scroll-container"]}`},{default:a(()=>[t(r(e.value["Scroll Container"]),1)]),_:1},8,["href"])]),_:1})}}}),E=i({__name:"scroll",setup(f){const s=$(null),e=h=>{h.preventDefault()};return(h,u)=>{const n=c("el-col"),l=c("el-anchor-link"),v=c("el-anchor"),b=c("el-row");return _(),k("div",null,[o(b,null,{default:a(()=>[o(n,{span:18},{default:a(()=>[d("div",{style:{height:"30px",width:"70%",background:"#000",position:"absolute",top:"0",left:"0",color:"#fff"}}," Fixed Top Block "),d("div",{ref_key:"containerRef",ref:s,style:{height:"300px","overflow-y":"auto"}},[d("div",{id:"part1",style:{height:"300px",background:"rgba(255, 0, 0, 0.02)","margin-top":"30px"}}," part1 "),d("div",{id:"part2",style:{height:"300px",background:"rgba(0, 255, 0, 0.02)","margin-top":"30px"}}," part2 "),d("div",{id:"part3",style:{height:"300px",background:"rgba(0, 0, 255, 0.02)","margin-top":"30px"}}," part3 ")],512)]),_:1}),o(n,{span:6},{default:a(()=>[o(v,{container:s.value,direction:"vertical",type:"default",offset:30,onClick:e},{default:a(()=>[o(l,{href:"#part1",title:"part1"}),o(l,{href:"#part2",title:"part2"}),o(l,{href:"#part3",title:"part3"})]),_:1},8,["container"])]),_:1})]),_:1})])}}}),U=i({__name:"underline",setup(f){const s=p(),e=A(()=>g[s.value]);return(h,u)=>{const n=c("el-anchor-link"),l=c("el-anchor");return _(),m(l,{type:"underline",offset:70},{default:a(()=>[o(n,{href:`#${e.value["basic-usage"]}`},{default:a(()=>[t(r(e.value["Basic Usage"]),1)]),_:1},8,["href"]),o(n,{href:`#${e.value["horizontal-mode"]}`},{default:a(()=>[t(r(e.value["Horizontal Mode"]),1)]),_:1},8,["href"]),o(n,{href:`#${e.value["scroll-container"]}`},{default:a(()=>[t(r(e.value["Scroll Container"]),1)]),_:1},8,["href"]),o(n,{href:`#${e.value["anchor-api"]}`},{"sub-link":a(()=>[o(n,{href:`#${e.value["anchor-attributes"]}`},{default:a(()=>[t(r(e.value["Anchor Attributes"]),1)]),_:1},8,["href"]),o(n,{href:`#${e.value["anchor-events"]}`},{default:a(()=>[t(r(e.value["Anchor Events"]),1)]),_:1},8,["href"])]),default:a(()=>[t(r(e.value["Anchor API"])+" ",1)]),_:1},8,["href"])]),_:1})}}});export{B as _,y as a,E as b,S as c,U as d,C as e};
