import{N as C,E as x,G as M,aF as L,aG as R,d as q,ak as z,aH as P}from"./theme.gZBTnNau.js";import{p as m,r,q as u,o as d,t as v,v as e,c as j,y as s,u as h,_ as E,a as p,R as b,z as $,T as V}from"./framework.CKY1kIjS.js";const B=m({__name:"avatar",setup(_){const l=r(""),c=(o,n)=>{l.value=URL.createObjectURL(n.raw)},i=o=>o.type!=="image/jpeg"?(x.error("Avatar picture must be JPG format!"),!1):o.size/1024/1024>2?(x.error("Avatar picture size can not exceed 2MB!"),!1):!0;return(o,n)=>{const t=u("el-icon"),a=u("el-upload");return d(),v(a,{class:"avatar-uploader",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","show-file-list":!1,"on-success":c,"before-upload":i},{default:e(()=>[l.value?(d(),j("img",{key:0,src:l.value,class:"avatar"},null,8,["src"])):(d(),v(t,{key:1,class:"avatar-uploader-icon"},{default:e(()=>[s(h(C))]),_:1}))]),_:1})}}}),A=E(B,[["__scopeId","data-v-11e0307c"]]),N=m({__name:"basic",setup(_){const l=r([{name:"element-plus-logo.svg",url:"https://element-plus.org/images/element-plus-logo.svg"},{name:"element-plus-logo2.svg",url:"https://element-plus.org/images/element-plus-logo.svg"}]),c=(t,a)=>{console.log(t,a)},i=t=>{console.log(t)},o=(t,a)=>{x.warning(`The limit is 3, you selected ${t.length} files this time, add up to ${t.length+a.length} totally`)},n=(t,a)=>M.confirm(`Cancel the transfer of ${t.name} ?`).then(()=>!0,()=>!1);return(t,a)=>{const f=u("el-button"),g=u("el-upload");return d(),v(g,{"file-list":l.value,"onUpdate:fileList":a[0]||(a[0]=k=>l.value=k),class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:"","on-preview":i,"on-remove":c,"before-remove":n,limit:3,"on-exceed":o},{tip:e(()=>[p("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500KB. ")]),default:e(()=>[s(f,{type:"primary"},{default:e(()=>[b("Click to upload")]),_:1})]),_:1},8,["file-list"])}}}),G=m({__name:"custom-thumbnail",setup(_){const l=r(""),c=r(!1),i=r(!1),o=a=>{console.log(a)},n=a=>{l.value=a.url,c.value=!0},t=a=>{console.log(a)};return(a,f)=>{const g=u("el-icon"),k=u("el-upload"),w=u("el-dialog");return d(),j(V,null,[s(k,{action:"#","list-type":"picture-card","auto-upload":!1},{file:e(({file:y})=>[p("div",null,[p("img",{class:"el-upload-list__item-thumbnail",src:y.url,alt:""},null,8,["src"]),p("span",{class:"el-upload-list__item-actions"},[p("span",{class:"el-upload-list__item-preview",onClick:U=>n(y)},[s(g,null,{default:e(()=>[s(h(L))]),_:1})],8,["onClick"]),i.value?$("",!0):(d(),j("span",{key:0,class:"el-upload-list__item-delete",onClick:U=>t(y)},[s(g,null,{default:e(()=>[s(h(R))]),_:1})],8,["onClick"])),i.value?$("",!0):(d(),j("span",{key:1,class:"el-upload-list__item-delete",onClick:U=>o(y)},[s(g,null,{default:e(()=>[s(h(q))]),_:1})],8,["onClick"]))])])]),default:e(()=>[s(g,null,{default:e(()=>[s(h(C))]),_:1})]),_:1}),s(w,{modelValue:c.value,"onUpdate:modelValue":f[0]||(f[0]=y=>c.value=y)},{default:e(()=>[p("img",{"w-full":"",src:l.value,alt:"Preview Image"},null,8,["src"])]),_:1},8,["modelValue"])],64)}}}),T=m({__name:"drag-and-drop",setup(_){return(l,c)=>{const i=u("el-icon"),o=u("el-upload");return d(),v(o,{class:"upload-demo",drag:"",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:""},{tip:e(()=>[p("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ")]),default:e(()=>[s(i,{class:"el-icon--upload"},{default:e(()=>[s(h(z))]),_:1}),p("div",{class:"el-upload__text"},[b(" Drop file here or "),p("em",null,"click to upload")])]),_:1})}}}),D=m({__name:"file-list-with-thumbnail",setup(_){const l=r([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),c=(o,n)=>{console.log(o,n)},i=o=>{console.log(o)};return(o,n)=>{const t=u("el-button"),a=u("el-upload");return d(),v(a,{"file-list":l.value,"onUpdate:fileList":n[0]||(n[0]=f=>l.value=f),class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","on-preview":i,"on-remove":c,"list-type":"picture"},{tip:e(()=>[p("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ")]),default:e(()=>[s(t,{type:"primary"},{default:e(()=>[b("Click to upload")]),_:1})]),_:1},8,["file-list"])}}}),S=m({__name:"file-list",setup(_){const l=r([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),c=(i,o)=>{l.value=l.value.slice(-3)};return(i,o)=>{const n=u("el-button"),t=u("el-upload");return d(),v(t,{"file-list":l.value,"onUpdate:fileList":o[0]||(o[0]=a=>l.value=a),class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","on-change":c},{tip:e(()=>[p("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ")]),default:e(()=>[s(n,{type:"primary"},{default:e(()=>[b("Click to upload")]),_:1})]),_:1},8,["file-list"])}}}),H=m({__name:"limit-cover",setup(_){const l=r(),c=o=>{l.value.clearFiles();const n=o[0];n.uid=P(),l.value.handleStart(n)},i=()=>{l.value.submit()};return(o,n)=>{const t=u("el-button"),a=u("el-upload");return d(),v(a,{ref_key:"upload",ref:l,class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",limit:1,"on-exceed":c,"auto-upload":!1},{trigger:e(()=>[s(t,{type:"primary"},{default:e(()=>[b("select file")]),_:1})]),tip:e(()=>[p("div",{class:"el-upload__tip text-red"}," limit 1 file, new file will cover the old file ")]),default:e(()=>[s(t,{class:"ml-3",type:"success",onClick:i},{default:e(()=>[b(" upload to server ")]),_:1})]),_:1},512)}}}),J=m({__name:"manual",setup(_){const l=r(),c=()=>{l.value.submit()};return(i,o)=>{const n=u("el-button"),t=u("el-upload");return d(),v(t,{ref_key:"uploadRef",ref:l,class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","auto-upload":!1},{trigger:e(()=>[s(n,{type:"primary"},{default:e(()=>[b("select file")]),_:1})]),tip:e(()=>[p("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ")]),default:e(()=>[s(n,{class:"ml-3",type:"success",onClick:c},{default:e(()=>[b(" upload to server ")]),_:1})]),_:1},512)}}}),K=m({__name:"photo-wall",setup(_){const l=r([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"plant-1.png",url:"/images/plant-1.png"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"plant-2.png",url:"/images/plant-2.png"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"figure-1.png",url:"/images/figure-1.png"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"figure-2.png",url:"/images/figure-2.png"}]),c=r(""),i=r(!1),o=(t,a)=>{console.log(t,a)},n=t=>{c.value=t.url,i.value=!0};return(t,a)=>{const f=u("el-icon"),g=u("el-upload"),k=u("el-dialog");return d(),j(V,null,[s(g,{"file-list":l.value,"onUpdate:fileList":a[0]||(a[0]=w=>l.value=w),action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","list-type":"picture-card","on-preview":n,"on-remove":o},{default:e(()=>[s(f,null,{default:e(()=>[s(h(C))]),_:1})]),_:1},8,["file-list"]),s(k,{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=w=>i.value=w)},{default:e(()=>[p("img",{"w-full":"",src:c.value,alt:"Preview Image"},null,8,["src"])]),_:1},8,["modelValue"])],64)}}});export{A as E,N as _,H as a,K as b,G as c,D as d,S as e,T as f,J as g};
