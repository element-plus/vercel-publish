import{h as p,p as b,r as e,o as d,c as m,b as v,a as u,w as a,d as _,l as f,g as B,j as x,F as y,U as F,i as C,u as w}from"../app.3ba323c5.js";const T={m:"b-2"},A=_(" autoInsertSpace "),k=_("\u4E2D\u6587"),S=p({__name:"button",setup(g){const t=b({autoInsertSpace:!0});return(r,n)=>{const s=e("el-checkbox"),l=e("el-button"),o=e("el-config-provider");return d(),m("div",null,[v("div",T,[u(s,{modelValue:t.autoInsertSpace,"onUpdate:modelValue":n[0]||(n[0]=i=>t.autoInsertSpace=i)},{default:a(()=>[A]),_:1},8,["modelValue"])]),u(o,{button:t},{default:a(()=>[u(l,null,{default:a(()=>[k]),_:1})]),_:1},8,["button"])])}}});var Y=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const M={class:"flex flex-wrap gap-4 items-center"},O=p({__name:"empty-values",setup(g){const t=f(""),r=f(""),n=[{value:"",label:"All"},{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],s=l=>{[void 0,null].includes(l)&&F.info(`The clear value is: ${l}`)};return(l,o)=>{const i=e("el-option"),h=e("el-select"),E=e("el-select-v2"),D=e("el-config-provider");return d(),B(D,{"value-on-clear":null,"empty-values":[void 0,null]},{default:a(()=>[v("div",M,[u(h,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=c=>t.value=c),clearable:"",placeholder:"Select",style:{width:"240px"},onChange:s},{default:a(()=>[(d(),m(y,null,x(n,c=>u(i,{key:c.value,label:c.label,value:c.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),u(E,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=c=>r.value=c),clearable:"",placeholder:"Select",style:{width:"240px"},options:n,"value-on-clear":()=>{},onChange:s},null,8,["modelValue","value-on-clear"])])]),_:1})}}});var I=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));const P=_("OPEN"),N=p({__name:"message",setup(g){const t=b({max:3}),r=()=>{F("This is a message.")};return(n,s)=>{const l=e("el-button"),o=e("el-config-provider");return d(),m("div",null,[u(o,{message:t},{default:a(()=>[u(l,{onClick:r},{default:a(()=>[P]),_:1})]),_:1},8,["message"])])}}});var J=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));/*! Element Plus v2.7.0 */var j={name:"zh-cn",el:{breadcrumb:{label:"\u9762\u5305\u5C51"},colorpicker:{confirm:"\u786E\u5B9A",clear:"\u6E05\u7A7A"},datepicker:{now:"\u6B64\u523B",today:"\u4ECA\u5929",cancel:"\u53D6\u6D88",clear:"\u6E05\u7A7A",confirm:"\u786E\u5B9A",selectDate:"\u9009\u62E9\u65E5\u671F",selectTime:"\u9009\u62E9\u65F6\u95F4",startDate:"\u5F00\u59CB\u65E5\u671F",startTime:"\u5F00\u59CB\u65F6\u95F4",endDate:"\u7ED3\u675F\u65E5\u671F",endTime:"\u7ED3\u675F\u65F6\u95F4",prevYear:"\u524D\u4E00\u5E74",nextYear:"\u540E\u4E00\u5E74",prevMonth:"\u4E0A\u4E2A\u6708",nextMonth:"\u4E0B\u4E2A\u6708",year:"\u5E74",month1:"1 \u6708",month2:"2 \u6708",month3:"3 \u6708",month4:"4 \u6708",month5:"5 \u6708",month6:"6 \u6708",month7:"7 \u6708",month8:"8 \u6708",month9:"9 \u6708",month10:"10 \u6708",month11:"11 \u6708",month12:"12 \u6708",weeks:{sun:"\u65E5",mon:"\u4E00",tue:"\u4E8C",wed:"\u4E09",thu:"\u56DB",fri:"\u4E94",sat:"\u516D"},months:{jan:"\u4E00\u6708",feb:"\u4E8C\u6708",mar:"\u4E09\u6708",apr:"\u56DB\u6708",may:"\u4E94\u6708",jun:"\u516D\u6708",jul:"\u4E03\u6708",aug:"\u516B\u6708",sep:"\u4E5D\u6708",oct:"\u5341\u6708",nov:"\u5341\u4E00\u6708",dec:"\u5341\u4E8C\u6708"}},select:{loading:"\u52A0\u8F7D\u4E2D",noMatch:"\u65E0\u5339\u914D\u6570\u636E",noData:"\u65E0\u6570\u636E",placeholder:"\u8BF7\u9009\u62E9"},cascader:{noMatch:"\u65E0\u5339\u914D\u6570\u636E",loading:"\u52A0\u8F7D\u4E2D",placeholder:"\u8BF7\u9009\u62E9",noData:"\u6682\u65E0\u6570\u636E"},pagination:{goto:"\u524D\u5F80",pagesize:"\u6761/\u9875",total:"\u5171 {total} \u6761",pageClassifier:"\u9875",page:"\u9875",prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875",currentPage:"\u7B2C {pager} \u9875",prevPages:"\u5411\u524D {pager} \u9875",nextPages:"\u5411\u540E {pager} \u9875",deprecationWarning:"\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863"},messagebox:{title:"\u63D0\u793A",confirm:"\u786E\u5B9A",cancel:"\u53D6\u6D88",error:"\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!"},upload:{deleteTip:"\u6309 delete \u952E\u53EF\u5220\u9664",delete:"\u5220\u9664",preview:"\u67E5\u770B\u56FE\u7247",continue:"\u7EE7\u7EED\u4E0A\u4F20"},table:{emptyText:"\u6682\u65E0\u6570\u636E",confirmFilter:"\u7B5B\u9009",resetFilter:"\u91CD\u7F6E",clearFilter:"\u5168\u90E8",sumText:"\u5408\u8BA1"},tour:{next:"\u4E0B\u4E00\u6B65",previous:"\u4E0A\u4E00\u6B65",finish:"\u7ED3\u675F\u5BFC\u89C8"},tree:{emptyText:"\u6682\u65E0\u6570\u636E"},transfer:{noMatch:"\u65E0\u5339\u914D\u6570\u636E",noData:"\u65E0\u6570\u636E",titles:["\u5217\u8868 1","\u5217\u8868 2"],filterPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",noCheckedFormat:"\u5171 {total} \u9879",hasCheckedFormat:"\u5DF2\u9009 {checked}/{total} \u9879"},image:{error:"\u52A0\u8F7D\u5931\u8D25"},pageHeader:{title:"\u8FD4\u56DE"},popconfirm:{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"},carousel:{leftArrow:"\u4E0A\u4E00\u5F20\u5E7B\u706F\u7247",rightArrow:"\u4E0B\u4E00\u5F20\u5E7B\u706F\u7247",indicator:"\u5E7B\u706F\u7247\u5207\u6362\u81F3\u7D22\u5F15 {index}"}}};/*! Element Plus v2.7.0 */var z={name:"en",el:{breadcrumb:{label:"Breadcrumb"},colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};const V=_("Switch Language"),L=v("br",null,null,-1),$=p({__name:"usage",setup(g){const t=f("zh-cn"),r=C(()=>t.value==="zh-cn"?j:z),n=()=>{t.value=t.value==="zh-cn"?"en":"zh-cn"};return(s,l)=>{const o=e("el-button"),i=e("el-table"),h=e("el-pagination"),E=e("el-config-provider");return d(),m("div",null,[u(o,{"mb-2":"",onClick:n},{default:a(()=>[V]),_:1}),L,u(E,{locale:w(r)},{default:a(()=>[u(i,{"mb-1":"",data:[]}),u(h,{total:100})]),_:1},8,["locale"])])}}});var W=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));export{Y as _,I as a,J as b,W as c};
