import{p as m,r,q as i,o as _,t as b,c as k,a as f,y as c,v as s,R as h,S as y,T as C}from"./framework.CKY1kIjS.js";const $=m({__name:"basic",setup(g){const d=r((()=>{const l=[];for(let e=1;e<=15;e++)l.push({key:e,label:`Option ${e}`,disabled:e%4===0});return l})()),o=r([]);return(l,e)=>{const n=i("el-transfer");return _(),b(n,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),data:d.value},null,8,["modelValue","data"])}}}),D=m({__name:"customizable",setup(g){const d=r((()=>{const a=[];for(let t=1;t<=15;t++)a.push({key:t,label:`Option ${t}`,disabled:t%4===0});return a})()),o=r([1]),l=r([1]),e=(a,t)=>a("span",null,t.label),n=(a,t,u)=>{console.log(a,t,u)};return(a,t)=>{const u=i("el-button"),V=i("el-transfer");return _(),k(C,null,[f("p",{style:{"text-align":"center",margin:"0 0 20px"}}," Customize data items using render-content "),f("div",{style:{"text-align":"center"}},[c(V,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=p=>l.value=p),style:{"text-align":"left",display:"inline-block"},filterable:"","left-default-checked":[2,3],"right-default-checked":[1],"render-content":e,titles:["Source","Target"],"button-texts":["To left","To right"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:d.value,onChange:n},{"left-footer":s(()=>[c(u,{class:"transfer-footer",size:"small"},{default:s(()=>[h("Operation")]),_:1})]),"right-footer":s(()=>[c(u,{class:"transfer-footer",size:"small"},{default:s(()=>[h("Operation")]),_:1})]),_:1},8,["modelValue","data"]),f("p",{style:{"text-align":"center",margin:"50px 0 20px"}}," Customize data items using scoped slot "),f("div",{style:{"text-align":"center"}},[c(V,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=p=>o.value=p),style:{"text-align":"left",display:"inline-block"},filterable:"","left-default-checked":[2,3],"right-default-checked":[1],titles:["Source","Target"],"button-texts":["To left","To right"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:d.value,onChange:n},{default:s(({option:p})=>[f("span",null,y(p.key)+" - "+y(p.label),1)]),"left-footer":s(()=>[c(u,{class:"transfer-footer",size:"small"},{default:s(()=>[h("Operation")]),_:1})]),"right-footer":s(()=>[c(u,{class:"transfer-footer",size:"small"},{default:s(()=>[h("Operation")]),_:1})]),_:1},8,["modelValue","data"])])])],64)}}}),T=m({__name:"empty-content",setup(g){const d=r((()=>{const l=[];for(let e=1;e<=15;e++)l.push({key:e,label:`Option ${e}`,disabled:e%4===0});return l})()),o=r([]);return(l,e)=>{const n=i("el-empty"),a=i("el-transfer");return _(),b(a,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t),data:d.value},{"left-empty":s(()=>[c(n,{"image-size":60,description:"No data"})]),"right-empty":s(()=>[c(n,{"image-size":60,description:"No data"})]),_:1},8,["modelValue","data"])}}}),z=m({__name:"filterable",setup(g){const d=r((()=>{const e=[],n=["California","Illinois","Maryland","Texas","Florida","Colorado","Connecticut "],a=["CA","IL","MD","TX","FL","CO","CT"];return n.forEach((t,u)=>{e.push({label:t,key:u,initial:a[u]})}),e})()),o=r([]),l=(e,n)=>n.initial.toLowerCase().includes(e.toLowerCase());return(e,n)=>{const a=i("el-transfer");return _(),b(a,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=t=>o.value=t),filterable:"","filter-method":l,"filter-placeholder":"State Abbreviations",data:d.value},null,8,["modelValue","data"])}}}),O=m({__name:"prop-alias",setup(g){const d=r((()=>{const l=[];for(let e=1;e<=15;e++)l.push({value:e,desc:`Option ${e}`,disabled:e%4===0});return l})()),o=r([]);return(l,e)=>{const n=i("el-transfer");return _(),b(n,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),props:{key:"value",label:"desc"},data:d.value},null,8,["modelValue","data"])}}});export{$ as _,z as a,D as b,T as c,O as d};
