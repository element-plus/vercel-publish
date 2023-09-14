import{o,c as p,b as s,a as e,d as n,e as t,_ as c}from"./app.d0cca265.js";const l=s("h1",{id:"tema-personalizado",tabindex:"-1"},[n("Tema personalizado "),s("a",{class:"header-anchor vp-link",href:"#tema-personalizado","aria-hidden":"true"},"#")],-1),i=s("p",null,"Element Plus utiliza la metodolog\xEDa BEM en CSS con la finalidad de que pueda sobrescribir los estilos f\xE1cilmente. Pero si necesita reemplazar estilos a gran escala, p.ej. cambiar el color del tema de azul a naranja o verde, tal vez sobreescribirlos uno por uno no es una buena idea.",-1),u=s("p",null,"Proporcionamos cuatro maneras de cambiar las variables de estilo.",-1),r=s("h2",{id:"cambia-el-color-del-tema",tabindex:"-1"},[n("Cambia el color del tema "),s("a",{class:"header-anchor vp-link",href:"#cambia-el-color-del-tema","aria-hidden":"true"},"#")],-1),k=s("p",null,"Estos son ejemplos sobre temas personalizados.",-1),d=n("Importaci\xF3n completa: [elemento-plus-vite-starter]("),m={href:"https://github",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},_=n("https://github"),g=n(". com/element-plus/element-plus-vite-starter)"),h=n("A demanda: [unplugin-element-plus/examples/vite]("),v={href:"https://github",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},b=n("https://github"),f=n(". com/element-plus/unplugin-element-plus)"),S=s("h3",{id:"por-variables-scss",tabindex:"-1"},[n("Por variables SCSS "),s("a",{class:"header-anchor vp-link",href:"#por-variables-scss","aria-hidden":"true"},"#")],-1),y=s("code",null,"theme-chalk",-1),C=n(" est\xE1 escrito en SCSS. Puede encontrar las variables SCSS en "),w={href:"https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"packages/theme-chalk/src/common/var.scss",-1),P=n("."),q={class:"warning custom-block"},T=s("p",{class:"custom-block-title"},"WARNING",-1),E=n("Utilizamos m\xF3dulos sass ("),z={href:"https://sass-lang.com/documentation/values/maps",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},A=n("sass:map"),I=n("...) y "),j=s("code",null,"@use",-1),V=n(" para refactorizar todas las variables SCSS. Y usar "),N=s("code",null,"@use",-1),D=n(" para todas las variables SCSS, resuelve el problema de salida duplicada causado por "),R=s("code",null,"@import",-1),U=n("."),$={href:"https://css-tricks.com/introducing-sass-modules/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},B=n("Introducci\xF3n de los m\xF3dulos Sass | CSS-TRICKS"),W=s("p",null,[n("Por ejemplo, usamos "),s("code",null,"$colors"),n(" como mapa para preservar diferentes tipos de colores.")],-1),O=s("p",null,[s("code",null,"$notification"),n(" es un mapa donde todas las variables del componente "),s("code",null,"notification"),n(".")],-1),G=n("En el futuro, escribiremos documentaci\xF3n para variables que pueden ser personalizadas para cada componente. Tambi\xE9n puede consultar directamente el c\xF3digo fuente "),L={href:"https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},M=n("var.scss"),Y=n("."),H=t("",3),K={class:"warning custom-block"},F=s("p",{class:"custom-block-title"},"WARNING",-1),J=s("p",null,[n("Deber\xEDa usar "),s("code",null,"@use 'xxx.scss' as *;"),n(" en lugar de "),s("code",null,"@import 'xxx.scss';"),n(".")],-1),Q=s("p",null,[n("Debido a que el equipo de sass dijo que eliminar\xE1n "),s("code",null,"@import"),n(" eventualmente.")],-1),X={href:"https://sass-lang.com/documentation/at-rules/use",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Z=n("Sass: @use"),ss=n(" vs "),ns={href:"https://sass-lang.com/documentation/at-rules/import",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},as=n("Sass: @import"),es=t("",13),ts=n("Aprenda m\xE1s de [Uso de propiedades personalizadas (variables) en CSS | MDN]("),os={href:"https://developer",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},ps=n("https://developer"),cs=n(". mozilla. org/es/docs/Web/CSS/Using_CSS_custom_properties)"),ls=t("",12),is=n("Si desea una forma m\xE1s elegante, compruebe esto. "),us={href:"https://vueuse.org/core/usecssvar/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},rs=n("useCssVar | VueUse"),hs='{"title":"Theming","description":"","frontmatter":{"title":"Theming","lang":"es-ES"},"headers":[{"level":2,"title":"Cambia el color del tema","slug":"cambia-el-color-del-tema"},{"level":3,"title":"Por variables SCSS","slug":"por-variables-scss"},{"level":3,"title":"\xBFC\xF3mo anularlo?","slug":"\xBFcomo-anularlo"},{"level":3,"title":"Por variables CSS","slug":"por-variables-css"}],"relativePath":"es-ES/guide/theming.md","lastUpdated":null}',ks={},vs=Object.assign(ks,{__name:"theming",setup(ds){return(ms,_s)=>{const a=c;return o(),p("div",null,[l,i,u,r,k,s("ul",null,[s("li",null,[d,s("a",m,[_,e(a,{class:"link-icon"})]),g]),s("li",null,[h,s("a",v,[b,e(a,{class:"link-icon"})]),f])]),S,s("p",null,[y,C,s("a",w,[x,e(a,{class:"link-icon"})]),P]),s("div",q,[T,s("p",null,[E,s("a",z,[A,e(a,{class:"link-icon"})]),I,j,V,N,D,R,U]),s("blockquote",null,[s("p",null,[s("a",$,[B,e(a,{class:"link-icon"})])])]),W,O,s("p",null,[G,s("a",L,[M,e(a,{class:"link-icon"})]),Y])]),H,s("div",K,[F,J,Q,s("blockquote",null,[s("p",null,[s("a",X,[Z,e(a,{class:"link-icon"})]),ss,s("a",ns,[as,e(a,{class:"link-icon"})])])])]),es,s("blockquote",null,[s("p",null,[ts,s("a",os,[ps,e(a,{class:"link-icon"})]),cs])]),ls,s("p",null,[is,s("a",us,[rs,e(a,{class:"link-icon"})])])])}}});export{hs as __pageData,vs as default};
