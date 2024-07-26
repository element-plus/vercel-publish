import{p as w,l as P,q as l,o as k,t as $,v as t,y as e,a as S,X as s,r as x,c as N,aa as L,M as R,a5 as Z,u as I}from"./framework.lYNz_Rcs.js";const D=S("p",null,'"Full Name" label is automatically attached to the input:',-1),B=S("p",null,[s(' "Your Information" serves as a label for the group of inputs. '),S("br"),s(' You must specify labels on the individal inputs. Placeholders are not replacements for using the "label" attribute. ')],-1),Y=w({__name:"accessibility",setup(U){const n=P({fullName:"",firstName:"",lastName:""});return(c,a)=>{const d=l("el-alert"),r=l("el-input"),i=l("el-form-item"),p=l("el-space"),_=l("el-col"),m=l("el-row"),o=l("el-form");return k(),$(o,{"label-position":"left","label-width":"auto",style:{"max-width":"600px"}},{default:t(()=>[e(p,{fill:""},{default:t(()=>[e(d,{type:"info","show-icon":"",closable:!1},{default:t(()=>[D]),_:1}),e(i,{label:"Full Name"},{default:t(()=>[e(r,{modelValue:n.fullName,"onUpdate:modelValue":a[0]||(a[0]=u=>n.fullName=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{fill:""},{default:t(()=>[e(d,{type:"info","show-icon":"",closable:!1},{default:t(()=>[B]),_:1}),e(i,{label:"Your Information"},{default:t(()=>[e(m,{gutter:20},{default:t(()=>[e(_,{span:12},{default:t(()=>[e(r,{modelValue:n.firstName,"onUpdate:modelValue":a[1]||(a[1]=u=>n.firstName=u),"aria-label":"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(_,{span:12},{default:t(()=>[e(r,{modelValue:n.lastName,"onUpdate:modelValue":a[2]||(a[2]=u=>n.lastName=u),"aria-label":"Last Name",placeholder:"Last Name"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),Xe=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),H=s("Left"),E=s("Right"),Q=s("Top"),X=s("Empty"),G=s("Left"),J=s("Right"),K=s("Top"),W=w({__name:"alignment",setup(U){const n=x("right"),c=x(""),a=P({name:"",region:"",type:""});return(d,r)=>{const i=l("el-radio-button"),p=l("el-radio-group"),_=l("el-form-item"),m=l("el-input"),o=l("el-form");return k(),$(o,{"label-position":n.value,"label-width":"auto",model:a,style:{"max-width":"600px"}},{default:t(()=>[e(_,{label:"Form Align","label-position":"right"},{default:t(()=>[e(p,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=u=>n.value=u),"aria-label":"label position"},{default:t(()=>[e(i,{value:"left"},{default:t(()=>[H]),_:1}),e(i,{value:"right"},{default:t(()=>[E]),_:1}),e(i,{value:"top"},{default:t(()=>[Q]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(_,{label:"Form Item Align","label-position":"right"},{default:t(()=>[e(p,{modelValue:c.value,"onUpdate:modelValue":r[1]||(r[1]=u=>c.value=u),"aria-label":"item label position"},{default:t(()=>[e(i,{value:""},{default:t(()=>[X]),_:1}),e(i,{value:"left"},{default:t(()=>[G]),_:1}),e(i,{value:"right"},{default:t(()=>[J]),_:1}),e(i,{value:"top"},{default:t(()=>[K]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(_,{label:"Name","label-position":c.value},{default:t(()=>[e(m,{modelValue:a.name,"onUpdate:modelValue":r[2]||(r[2]=u=>a.name=u)},null,8,["modelValue"])]),_:1},8,["label-position"]),e(_,{label:"Activity zone","label-position":c.value},{default:t(()=>[e(m,{modelValue:a.region,"onUpdate:modelValue":r[3]||(r[3]=u=>a.region=u)},null,8,["modelValue"])]),_:1},8,["label-position"]),e(_,{label:"Activity form","label-position":c.value},{default:t(()=>[e(m,{modelValue:a.type,"onUpdate:modelValue":r[4]||(r[4]=u=>a.type=u)},null,8,["modelValue"])]),_:1},8,["label-position"])]),_:1},8,["label-position","model"])}}}),Ge=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),ee=S("span",{class:"text-gray-500"},"-",-1),te=s(" Online activities "),le=s(" Promotion activities "),oe=s(" Offline activities "),ae=s(" Simple brand exposure "),ne=s("Sponsor"),ie=s("Venue"),ue=s("Create"),se=s("Cancel"),re=w({__name:"basic-form",setup(U){const n=P({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),c=()=>{console.log("submit!")};return(a,d)=>{const r=l("el-input"),i=l("el-form-item"),p=l("el-option"),_=l("el-select"),m=l("el-date-picker"),o=l("el-col"),u=l("el-time-picker"),f=l("el-switch"),b=l("el-checkbox"),h=l("el-checkbox-group"),V=l("el-radio"),F=l("el-radio-group"),A=l("el-button"),O=l("el-form");return k(),$(O,{model:n,"label-width":"auto",style:{"max-width":"600px"}},{default:t(()=>[e(i,{label:"Activity name"},{default:t(()=>[e(r,{modelValue:n.name,"onUpdate:modelValue":d[0]||(d[0]=v=>n.name=v)},null,8,["modelValue"])]),_:1}),e(i,{label:"Activity zone"},{default:t(()=>[e(_,{modelValue:n.region,"onUpdate:modelValue":d[1]||(d[1]=v=>n.region=v),placeholder:"please select your zone"},{default:t(()=>[e(p,{label:"Zone one",value:"shanghai"}),e(p,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Activity time"},{default:t(()=>[e(o,{span:11},{default:t(()=>[e(m,{modelValue:n.date1,"onUpdate:modelValue":d[2]||(d[2]=v=>n.date1=v),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(o,{span:2,class:"text-center"},{default:t(()=>[ee]),_:1}),e(o,{span:11},{default:t(()=>[e(u,{modelValue:n.date2,"onUpdate:modelValue":d[3]||(d[3]=v=>n.date2=v),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{label:"Instant delivery"},{default:t(()=>[e(f,{modelValue:n.delivery,"onUpdate:modelValue":d[4]||(d[4]=v=>n.delivery=v)},null,8,["modelValue"])]),_:1}),e(i,{label:"Activity type"},{default:t(()=>[e(h,{modelValue:n.type,"onUpdate:modelValue":d[5]||(d[5]=v=>n.type=v)},{default:t(()=>[e(b,{value:"Online activities",name:"type"},{default:t(()=>[te]),_:1}),e(b,{value:"Promotion activities",name:"type"},{default:t(()=>[le]),_:1}),e(b,{value:"Offline activities",name:"type"},{default:t(()=>[oe]),_:1}),e(b,{value:"Simple brand exposure",name:"type"},{default:t(()=>[ae]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Resources"},{default:t(()=>[e(F,{modelValue:n.resource,"onUpdate:modelValue":d[6]||(d[6]=v=>n.resource=v)},{default:t(()=>[e(V,{value:"Sponsor"},{default:t(()=>[ne]),_:1}),e(V,{value:"Venue"},{default:t(()=>[ie]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Activity form"},{default:t(()=>[e(r,{modelValue:n.desc,"onUpdate:modelValue":d[7]||(d[7]=v=>n.desc=v),type:"textarea"},null,8,["modelValue"])]),_:1}),e(i,null,{default:t(()=>[e(A,{type:"primary",onClick:c},{default:t(()=>[ue]),_:1}),e(A,null,{default:t(()=>[se]),_:1})]),_:1})]),_:1},8,["model"])}}}),Je=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),de=s(" Submit "),_e=s("Reset"),me=w({__name:"custom-validation",setup(U){const n=x(),c=(m,o,u)=>{if(!o)return u(new Error("Please input the age"));setTimeout(()=>{Number.isInteger(o)?o<18?u(new Error("Age must be greater than 18")):u():u(new Error("Please input digits"))},1e3)},a=(m,o,u)=>{if(o==="")u(new Error("Please input the password"));else{if(r.checkPass!==""){if(!n.value)return;n.value.validateField("checkPass")}u()}},d=(m,o,u)=>{o===""?u(new Error("Please input the password again")):o!==r.pass?u(new Error("Two inputs don't match!")):u()},r=P({pass:"",checkPass:"",age:""}),i=P({pass:[{validator:a,trigger:"blur"}],checkPass:[{validator:d,trigger:"blur"}],age:[{validator:c,trigger:"blur"}]}),p=m=>{m&&m.validate(o=>{console.log(o?"submit!":"error submit!")})},_=m=>{m&&m.resetFields()};return(m,o)=>{const u=l("el-input"),f=l("el-form-item"),b=l("el-button"),h=l("el-form");return k(),$(h,{ref_key:"ruleFormRef",ref:n,style:{"max-width":"600px"},model:r,"status-icon":"",rules:i,"label-width":"auto",class:"demo-ruleForm"},{default:t(()=>[e(f,{label:"Password",prop:"pass"},{default:t(()=>[e(u,{modelValue:r.pass,"onUpdate:modelValue":o[0]||(o[0]=V=>r.pass=V),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(f,{label:"Confirm",prop:"checkPass"},{default:t(()=>[e(u,{modelValue:r.checkPass,"onUpdate:modelValue":o[1]||(o[1]=V=>r.checkPass=V),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(f,{label:"Age",prop:"age"},{default:t(()=>[e(u,{modelValue:r.age,"onUpdate:modelValue":o[2]||(o[2]=V=>r.age=V),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),e(f,null,{default:t(()=>[e(b,{type:"primary",onClick:o[3]||(o[3]=V=>p(n.value))},{default:t(()=>[de]),_:1}),e(b,{onClick:o[4]||(o[4]=V=>_(n.value))},{default:t(()=>[_e]),_:1})]),_:1})]),_:1},8,["model","rules"])}}}),Ke=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"})),pe=s(" Delete "),ce=s("Submit"),fe=s("New domain"),be=s("Reset"),ge=w({__name:"form-items",setup(U){const n=x(),c=P({domains:[{key:1,value:""}],email:""}),a=p=>{const _=c.domains.indexOf(p);_!==-1&&c.domains.splice(_,1)},d=()=>{c.domains.push({key:Date.now(),value:""})},r=p=>{p&&p.validate(_=>{console.log(_?"submit!":"error submit!")})},i=p=>{p&&p.resetFields()};return(p,_)=>{const m=l("el-input"),o=l("el-form-item"),u=l("el-button"),f=l("el-form");return k(),$(f,{ref_key:"formRef",ref:n,style:{"max-width":"600px"},model:c,"label-width":"auto",class:"demo-dynamic"},{default:t(()=>[e(o,{prop:"email",label:"Email",rules:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]},{default:t(()=>[e(m,{modelValue:c.email,"onUpdate:modelValue":_[0]||(_[0]=b=>c.email=b)},null,8,["modelValue"])]),_:1}),(k(!0),N(R,null,L(c.domains,(b,h)=>(k(),$(o,{key:b.key,label:"Domain"+h,prop:"domains."+h+".value",rules:{required:!0,message:"domain can not be null",trigger:"blur"}},{default:t(()=>[e(m,{modelValue:b.value,"onUpdate:modelValue":V=>b.value=V},null,8,["modelValue","onUpdate:modelValue"]),e(u,{class:"mt-2",onClick:Z(V=>a(b),["prevent"])},{default:t(()=>[pe]),_:2},1032,["onClick"])]),_:2},1032,["label","prop"]))),128)),e(o,null,{default:t(()=>[e(u,{type:"primary",onClick:_[1]||(_[1]=b=>r(n.value))},{default:t(()=>[ce]),_:1}),e(u,{onClick:d},{default:t(()=>[fe]),_:1}),e(u,{onClick:_[2]||(_[2]=b=>i(n.value))},{default:t(()=>[be]),_:1})]),_:1})]),_:1},8,["model"])}}}),We=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"})),ve=s("Query"),ye=w({__name:"inline-form",setup(U){const n=P({user:"",region:"",date:""}),c=()=>{console.log("submit!")};return(a,d)=>{const r=l("el-input"),i=l("el-form-item"),p=l("el-option"),_=l("el-select"),m=l("el-date-picker"),o=l("el-button"),u=l("el-form");return k(),$(u,{inline:!0,model:n,class:"demo-form-inline"},{default:t(()=>[e(i,{label:"Approved by"},{default:t(()=>[e(r,{modelValue:n.user,"onUpdate:modelValue":d[0]||(d[0]=f=>n.user=f),placeholder:"Approved by",clearable:""},null,8,["modelValue"])]),_:1}),e(i,{label:"Activity zone"},{default:t(()=>[e(_,{modelValue:n.region,"onUpdate:modelValue":d[1]||(d[1]=f=>n.region=f),placeholder:"Activity zone",clearable:""},{default:t(()=>[e(p,{label:"Zone one",value:"shanghai"}),e(p,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Activity time"},{default:t(()=>[e(m,{modelValue:n.date,"onUpdate:modelValue":d[2]||(d[2]=f=>n.date=f),type:"date",placeholder:"Pick a date",clearable:""},null,8,["modelValue"])]),_:1}),e(i,null,{default:t(()=>[e(o,{type:"primary",onClick:c},{default:t(()=>[ve]),_:1})]),_:1})]),_:1},8,["model"])}}}),et=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"})),Ve=s("Submit"),he=s("Reset"),ke=w({__name:"number-validate",setup(U){const n=x(),c=P({age:""}),a=r=>{r&&r.validate(i=>{console.log(i?"submit!":"error submit!")})},d=r=>{r&&r.resetFields()};return(r,i)=>{const p=l("el-input"),_=l("el-form-item"),m=l("el-button"),o=l("el-form");return k(),$(o,{ref_key:"formRef",ref:n,style:{"max-width":"600px"},model:c,"label-width":"auto",class:"demo-ruleForm"},{default:t(()=>[e(_,{label:"age",prop:"age",rules:[{required:!0,message:"age is required"},{type:"number",message:"age must be a number"}]},{default:t(()=>[e(p,{modelValue:c.age,"onUpdate:modelValue":i[0]||(i[0]=u=>c.age=u),modelModifiers:{number:!0},type:"text",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(_,null,{default:t(()=>[e(m,{type:"primary",onClick:i[1]||(i[1]=u=>a(n.value))},{default:t(()=>[Ve]),_:1}),e(m,{onClick:i[2]||(i[2]=u=>d(n.value))},{default:t(()=>[he]),_:1})]),_:1})]),_:1},8,["model"])}}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),Pe=s("large"),$e=s("default"),xe=s("small"),we=s("Left"),Ue=s("Right"),Ae=s("Top"),Se=S("br",null,null,-1),Fe=s("-"),Oe=s(" Online activities "),ze=s(" Promotion activities "),Ce=s("Sponsor"),je=s("Venue"),Ne=s("Create"),Re=s("Cancel"),qe=w({__name:"size-control",setup(U){const n=x("default"),c=x("right"),a=P({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""});function d(){console.log("submit!")}return(r,i)=>{const p=l("el-radio-button"),_=l("el-radio-group"),m=l("el-input"),o=l("el-form-item"),u=l("el-option"),f=l("el-select"),b=l("el-date-picker"),h=l("el-col"),V=l("el-time-picker"),F=l("el-checkbox-button"),A=l("el-checkbox-group"),O=l("el-radio"),v=l("el-button"),z=l("el-form");return k(),N(R,null,[S("div",null,[e(_,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=y=>n.value=y),"aria-label":"size control"},{default:t(()=>[e(p,{value:"large"},{default:t(()=>[Pe]),_:1}),e(p,{value:"default"},{default:t(()=>[$e]),_:1}),e(p,{value:"small"},{default:t(()=>[xe]),_:1})]),_:1},8,["modelValue"]),e(_,{modelValue:c.value,"onUpdate:modelValue":i[1]||(i[1]=y=>c.value=y),"aria-label":"position control"},{default:t(()=>[e(p,{value:"left"},{default:t(()=>[we]),_:1}),e(p,{value:"right"},{default:t(()=>[Ue]),_:1}),e(p,{value:"top"},{default:t(()=>[Ae]),_:1})]),_:1},8,["modelValue"])]),Se,e(z,{style:{"max-width":"600px"},model:a,"label-width":"auto","label-position":c.value,size:n.value},{default:t(()=>[e(o,{label:"Activity name"},{default:t(()=>[e(m,{modelValue:a.name,"onUpdate:modelValue":i[2]||(i[2]=y=>a.name=y)},null,8,["modelValue"])]),_:1}),e(o,{label:"Activity zone"},{default:t(()=>[e(f,{modelValue:a.region,"onUpdate:modelValue":i[3]||(i[3]=y=>a.region=y),placeholder:"please select your zone"},{default:t(()=>[e(u,{label:"Zone one",value:"shanghai"}),e(u,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(o,{label:"Activity time"},{default:t(()=>[e(h,{span:11},{default:t(()=>[e(b,{modelValue:a.date1,"onUpdate:modelValue":i[4]||(i[4]=y=>a.date1=y),type:"date","aria-label":"Pick a date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(h,{class:"text-center",span:1,style:{margin:"0 0.5rem"}},{default:t(()=>[Fe]),_:1}),e(h,{span:11},{default:t(()=>[e(V,{modelValue:a.date2,"onUpdate:modelValue":i[5]||(i[5]=y=>a.date2=y),"aria-label":"Pick a time",placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(o,{label:"Activity type"},{default:t(()=>[e(A,{modelValue:a.type,"onUpdate:modelValue":i[6]||(i[6]=y=>a.type=y)},{default:t(()=>[e(F,{value:"Online activities",name:"type"},{default:t(()=>[Oe]),_:1}),e(F,{value:"Promotion activities",name:"type"},{default:t(()=>[ze]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(o,{label:"Resources"},{default:t(()=>[e(_,{modelValue:a.resource,"onUpdate:modelValue":i[7]||(i[7]=y=>a.resource=y)},{default:t(()=>[e(O,{border:"",value:"Sponsor"},{default:t(()=>[Ce]),_:1}),e(O,{border:"",value:"Venue"},{default:t(()=>[je]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(o,null,{default:t(()=>[e(v,{type:"primary",onClick:d},{default:t(()=>[Ne]),_:1}),e(v,null,{default:t(()=>[Re]),_:1})]),_:1})]),_:1},8,["model","label-position","size"])],64)}}}),lt=Object.freeze(Object.defineProperty({__proto__:null,default:qe},Symbol.toStringTag,{value:"Module"})),Te=S("span",{class:"text-gray-500"},"-",-1),Me=s(" Online activities "),Le=s(" Promotion activities "),Ze=s(" Offline activities "),Ie=s(" Simple brand exposure "),De=s("Sponsorship"),Be=s("Venue"),Ye=s(" Create "),He=s("Reset"),Ee=w({__name:"validation",setup(U){const n=x("default"),c=x(),a=P({name:"Hello",region:"",count:"",date1:"",date2:"",delivery:!1,location:"",type:[],resource:"",desc:""}),d=["Home","Company","School"],r=P({name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],count:[{required:!0,message:"Please select Activity count",trigger:"change"}],date1:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],date2:[{type:"date",required:!0,message:"Please pick a time",trigger:"change"}],location:[{required:!0,message:"Please select a location",trigger:"change"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]}),i=async m=>{m&&await m.validate((o,u)=>{o?console.log("submit!"):console.log("error submit!",u)})},p=m=>{m&&m.resetFields()},_=Array.from({length:1e4}).map((m,o)=>({value:`${o+1}`,label:`${o+1}`}));return(m,o)=>{const u=l("el-input"),f=l("el-form-item"),b=l("el-option"),h=l("el-select"),V=l("el-select-v2"),F=l("el-date-picker"),A=l("el-col"),O=l("el-time-picker"),v=l("el-switch"),z=l("el-segmented"),y=l("el-checkbox"),q=l("el-checkbox-group"),C=l("el-radio"),T=l("el-radio-group"),j=l("el-button"),M=l("el-form");return k(),$(M,{ref_key:"ruleFormRef",ref:c,style:{"max-width":"600px"},model:a,rules:r,"label-width":"auto",class:"demo-ruleForm",size:n.value,"status-icon":""},{default:t(()=>[e(f,{label:"Activity name",prop:"name"},{default:t(()=>[e(u,{modelValue:a.name,"onUpdate:modelValue":o[0]||(o[0]=g=>a.name=g)},null,8,["modelValue"])]),_:1}),e(f,{label:"Activity zone",prop:"region"},{default:t(()=>[e(h,{modelValue:a.region,"onUpdate:modelValue":o[1]||(o[1]=g=>a.region=g),placeholder:"Activity zone"},{default:t(()=>[e(b,{label:"Zone one",value:"shanghai"}),e(b,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(f,{label:"Activity count",prop:"count"},{default:t(()=>[e(V,{modelValue:a.count,"onUpdate:modelValue":o[2]||(o[2]=g=>a.count=g),placeholder:"Activity count",options:I(_)},null,8,["modelValue","options"])]),_:1}),e(f,{label:"Activity time",required:""},{default:t(()=>[e(A,{span:11},{default:t(()=>[e(f,{prop:"date1"},{default:t(()=>[e(F,{modelValue:a.date1,"onUpdate:modelValue":o[3]||(o[3]=g=>a.date1=g),type:"date","aria-label":"Pick a date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(A,{class:"text-center",span:2},{default:t(()=>[Te]),_:1}),e(A,{span:11},{default:t(()=>[e(f,{prop:"date2"},{default:t(()=>[e(O,{modelValue:a.date2,"onUpdate:modelValue":o[4]||(o[4]=g=>a.date2=g),"aria-label":"Pick a time",placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f,{label:"Instant delivery",prop:"delivery"},{default:t(()=>[e(v,{modelValue:a.delivery,"onUpdate:modelValue":o[5]||(o[5]=g=>a.delivery=g)},null,8,["modelValue"])]),_:1}),e(f,{label:"Activity location",prop:"location"},{default:t(()=>[e(z,{modelValue:a.location,"onUpdate:modelValue":o[6]||(o[6]=g=>a.location=g),options:d},null,8,["modelValue"])]),_:1}),e(f,{label:"Activity type",prop:"type"},{default:t(()=>[e(q,{modelValue:a.type,"onUpdate:modelValue":o[7]||(o[7]=g=>a.type=g)},{default:t(()=>[e(y,{value:"Online activities",name:"type"},{default:t(()=>[Me]),_:1}),e(y,{value:"Promotion activities",name:"type"},{default:t(()=>[Le]),_:1}),e(y,{value:"Offline activities",name:"type"},{default:t(()=>[Ze]),_:1}),e(y,{value:"Simple brand exposure",name:"type"},{default:t(()=>[Ie]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(f,{label:"Resources",prop:"resource"},{default:t(()=>[e(T,{modelValue:a.resource,"onUpdate:modelValue":o[8]||(o[8]=g=>a.resource=g)},{default:t(()=>[e(C,{value:"Sponsorship"},{default:t(()=>[De]),_:1}),e(C,{value:"Venue"},{default:t(()=>[Be]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(f,{label:"Activity form",prop:"desc"},{default:t(()=>[e(u,{modelValue:a.desc,"onUpdate:modelValue":o[9]||(o[9]=g=>a.desc=g),type:"textarea"},null,8,["modelValue"])]),_:1}),e(f,null,{default:t(()=>[e(j,{type:"primary",onClick:o[10]||(o[10]=g=>i(c.value))},{default:t(()=>[Ye]),_:1}),e(j,{onClick:o[11]||(o[11]=g=>p(c.value))},{default:t(()=>[He]),_:1})]),_:1})]),_:1},8,["model","rules","size"])}}}),ot=Object.freeze(Object.defineProperty({__proto__:null,default:Ee},Symbol.toStringTag,{value:"Module"}));export{Xe as _,Ge as a,Je as b,Ke as c,We as d,et as e,tt as f,lt as g,ot as h};
