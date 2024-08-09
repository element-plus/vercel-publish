import{_ as t}from"./chunks/theme.CK6SIbTt.js";import{c as n,a as i,X as s,y as l,v as h,q as k,o as p}from"./chunks/framework.DcRevfCx.js";const u=JSON.parse('{"title":"Quick Start","description":"","frontmatter":{"title":"Quick Start","lang":"es-ES"},"headers":[{"level":2,"title":"Uso","slug":"uso","link":"#uso","children":[{"level":3,"title":"Importación completa","slug":"importacion-completa","link":"#importacion-completa","children":[{"level":4,"title":"Soporte Volar","slug":"soporte-volar","link":"#soporte-volar","children":[]}]},{"level":3,"title":"Importación a petición","slug":"importacion-a-peticion","link":"#importacion-a-peticion","children":[{"level":4,"title":"Autoimportación <el-tag type=\\"primary\\" style=\\"vertical-align: middle;\\" effect=\\"dark\\" size=\\"small\\">Recomendado</el-tag>","slug":"autoimportacion-recomendado","link":"#autoimportacion-recomendado","children":[{"level":5,"title":"Vite","slug":"vite","link":"#vite","children":[]},{"level":5,"title":"Webpack","slug":"webpack","link":"#webpack","children":[]}]},{"level":4,"title":"Nuxt","slug":"nuxt","link":"#nuxt","children":[]}]},{"level":3,"title":"Importar manualmente","slug":"importar-manualmente","link":"#importar-manualmente","children":[]}]},{"level":2,"title":"Plantilla de inicio","slug":"plantilla-de-inicio","link":"#plantilla-de-inicio","children":[]},{"level":2,"title":"Configuración global","slug":"configuracion-global","link":"#configuracion-global","children":[]},{"level":2,"title":"Usando Nuxt.js","slug":"usando-nuxt-js","link":"#usando-nuxt-js","children":[]},{"level":2,"title":"Empecemos","slug":"empecemos","link":"#empecemos","children":[]}],"relativePath":"es-ES/guide/quickstart.md","filePath":"es-ES/guide/quickstart.md","lastUpdated":null}'),r={name:"es-ES/guide/quickstart.md"},y=Object.assign(r,{setup(o){return(d,E)=>{const e=k("el-tag"),a=t;return p(),n("div",null,[i("h1",{id:"inicio-rapido",tabindex:"-1"},[s("Inicio Rápido "),i("a",{class:"header-anchor vp-link",href:"#inicio-rapido","aria-label":'Permalink to "Inicio Rápido"'},"​")]),i("p",null,"Esta sección describe cómo utilizar Element Plus en su proyecto."),i("h2",{id:"uso",tabindex:"-1"},[s("Uso "),i("a",{class:"header-anchor vp-link",href:"#uso","aria-label":'Permalink to "Uso"'},"​")]),i("h3",{id:"importacion-completa",tabindex:"-1"},[s("Importación completa "),i("a",{class:"header-anchor vp-link",href:"#importacion-completa","aria-label":'Permalink to "Importación completa"'},"​")]),i("p",null,"Si no le importa tanto el tamaño del paquete, es más conveniente utilizar la importación completa."),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// main.ts")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { createApp } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ElementPlus "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus/dist/index.css'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," App "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," './App.vue'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," app"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," createApp"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(App)")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"app."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"use"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ElementPlus)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"app."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mount"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'#app'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")])])])]),i("h4",{id:"soporte-volar",tabindex:"-1"},[s("Soporte Volar "),i("a",{class:"header-anchor vp-link",href:"#soporte-volar","aria-label":'Permalink to "Soporte Volar"'},"​")]),i("p",null,[s("Si utiliza volar, agregue la definición global a "),i("code",null,"compilerOptions.types"),s(" en "),i("code",null,"tsconfig.json"),s(".")]),i("div",{class:"language-json vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"json"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// tsconfig.json")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'  "compilerOptions"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "types"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"element-plus/global"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])]),i("h3",{id:"importacion-a-peticion",tabindex:"-1"},[s("Importación a petición "),i("a",{class:"header-anchor vp-link",href:"#importacion-a-peticion","aria-label":'Permalink to "Importación a petición"'},"​")]),i("p",null,"Necesita usar un plugin adicional para importar componentes que haya utilizado."),i("h4",{id:"autoimportacion-recomendado",tabindex:"-1"},[s("Autoimportación "),l(e,{type:"primary",style:{"vertical-align":"middle"},effect:"dark",size:"small"},{default:h(()=>[s("Recomendado")]),_:1}),s(),i("a",{class:"header-anchor vp-link",href:"#autoimportacion-recomendado","aria-label":'Permalink to "Autoimportación <el-tag type="primary" style="vertical-align: middle;" effect="dark" size="small">Recomendado</el-tag>"'},"​")]),i("p",null,[s("Primero necesita instalar "),i("code",null,"unplugin-vue-components"),s(" y "),i("code",null,"unplugin-auto-import"),s(".")]),i("div",{class:"language-shell vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"shell"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"npm"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -D"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," unplugin-vue-components"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," unplugin-auto-import")])])])]),i("p",null,[s("Then add the code below into your "),i("code",null,"Vite"),s(" or "),i("code",null,"Webpack"),s(" config file.")]),i("h5",{id:"vite",tabindex:"-1"},[s("Vite "),i("a",{class:"header-anchor vp-link",href:"#vite","aria-label":'Permalink to "Vite"'},"​")]),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// vite.config.ts")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { defineConfig } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vite'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," AutoImport "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'unplugin-auto-import/vite'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Components "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'unplugin-vue-components/vite'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ElementPlusResolver } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'unplugin-vue-components/resolvers'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," defineConfig"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  plugins: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    AutoImport"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      resolvers: ["),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ElementPlusResolver"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    Components"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      resolvers: ["),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ElementPlusResolver"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])]),i("h5",{id:"webpack",tabindex:"-1"},[s("Webpack "),i("a",{class:"header-anchor vp-link",href:"#webpack","aria-label":'Permalink to "Webpack"'},"​")]),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// webpack.config.js")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," AutoImport"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," require"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'unplugin-auto-import/webpack'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," Components"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," require"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'unplugin-vue-components/webpack'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"ElementPlusResolver"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," require"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'unplugin-vue-components/resolvers'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"module"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"exports"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  plugins: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    AutoImport"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      resolvers: ["),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ElementPlusResolver"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    Components"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      resolvers: ["),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ElementPlusResolver"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])]),i("p",null,[s("Para más paquetes ("),i("a",{href:"https://rollupjs.org/",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("Rollup"),l(a,{class:"link-icon"})]),s(", "),i("a",{href:"https://cli.vuejs.org/",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("Vue CLI"),l(a,{class:"link-icon"})]),s(") y configuraciones, por favor consulte "),i("a",{href:"https://github.com/antfu/unplugin-vue-components#installation",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("unplugin-vue-components"),l(a,{class:"link-icon"})]),s(" y "),i("a",{href:"https://github.com/antfu/unplugin-auto-import#install",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("unplugin-auto-import"),l(a,{class:"link-icon"})]),s(".")]),i("h4",{id:"nuxt",tabindex:"-1"},[s("Nuxt "),i("a",{class:"header-anchor vp-link",href:"#nuxt","aria-label":'Permalink to "Nuxt"'},"​")]),i("p",null,[s("Para usuarios de Nuxt, solo necesita instalar "),i("code",null,"@element-plus/nuxt"),s(".")]),i("div",{class:"language-shell vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"shell"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"npm"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -D"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," @element-plus/nuxt")])])])]),i("p",null,"Luego añada el código de abajo en su archivo de configuración."),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// nuxt.config.ts")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," defineNuxtConfig"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  modules: ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'@element-plus/nuxt'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])]),i("p",null,[s("Consulte los "),i("a",{href:"https://github.com/element-plus/element-plus-nuxt#readme",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("documentos"),l(a,{class:"link-icon"})]),s(" para saber cómo configurarlo.")]),i("h3",{id:"importar-manualmente",tabindex:"-1"},[s("Importar manualmente "),i("a",{class:"header-anchor vp-link",href:"#importar-manualmente","aria-label":'Permalink to "Importar manualmente"'},"​")]),i("p",null,[s("Element Plus proporciona funcionalidades de "),i("a",{href:"https://webpack.js.org/guides/tree-shaking/",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("Tree Shaking"),l(a,{class:"link-icon"})]),s(" basada en los Módulos ES.")]),i("p",null,[s("Pero necesita instalar "),i("a",{href:"https://github.com/element-plus/unplugin-element-plus",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("unplugin-element-plus"),l(a,{class:"link-icon"})]),s(" para importar estilo. Y consulte la "),i("a",{href:"https://github.com/element-plus/unplugin-element-plus#readme",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("documentación"),l(a,{class:"link-icon"})]),s(" para saber cómo configurarla.")]),i("blockquote",null,[i("p",null,"App.vue")]),i("div",{class:"language-html vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"html"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">I am ElButton</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ElButton } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    components: { ElButton },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// vite.config.ts")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { defineConfig } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vite'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ElementPlus "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'unplugin-element-plus/vite'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," defineConfig"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  plugins: ["),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ElementPlus"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])]),i("div",{class:"warning custom-block"},[i("p",{class:"custom-block-title"},"WARNING"),i("p",null,[s("Necesita importar manualmente los estilos si está usando "),i("code",null,"unplugin-element-plus"),s(" y solo ha usado la API del componente.")]),i("p",null,"Ejemplo:"),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus/es/components/message/style/css'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ElMessage } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'")])])])])]),i("h2",{id:"plantilla-de-inicio",tabindex:"-1"},[s("Plantilla de inicio "),i("a",{class:"header-anchor vp-link",href:"#plantilla-de-inicio","aria-label":'Permalink to "Plantilla de inicio"'},"​")]),i("p",null,[s("Proporcionamos una "),i("a",{href:"https://github.com/element-plus/element-plus-vite-starter",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("Plantilla de Vite"),l(a,{class:"link-icon"})]),s(".")]),i("p",null,[s("Para los usuarios de Nuxt tenemos una "),i("a",{href:"https://github.com/element-plus/element-plus-nuxt-starter",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("Plantilla de Nuxt"),l(a,{class:"link-icon"})]),s(".")]),i("p",null,[s("Para los usuarios de Laravel tenemos una "),i("a",{href:"https://github.com/element-plus/element-plus-in-laravel-starter",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("Plantilla de Laravel"),l(a,{class:"link-icon"})]),s(".")]),i("h2",{id:"configuracion-global",tabindex:"-1"},[s("Configuración global "),i("a",{class:"header-anchor vp-link",href:"#configuracion-global","aria-label":'Permalink to "Configuración global"'},"​")]),i("p",null,[s("Al registrar Element Plus, se puede pasar un objeto de configuración global. Este objeto soporta actualmente los campos "),i("code",null,"size"),s(" y "),i("code",null,"zIndex"),s(),i("code",null,"size"),s(" se utiliza para cambiar el tamaño por defecto del componente y "),i("code",null,"zIndex"),s(" establece el "),i("code",null,"z-indez"),s(" inicial de la caja emergente, valor por defecto "),i("code",null,"2000"),s(".")]),i("p",null,"Importación completa:"),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { createApp } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ElementPlus "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," App "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," './App.vue'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," app"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," createApp"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(App)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"app."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"use"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ElementPlus, { size: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'small'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", zIndex: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"3000"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," })")])])])]),i("p",null,"Bajo demanda:"),i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-config-provider"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"size"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"size"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"z-index"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"zIndex"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"app"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-config-provider"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { defineComponent } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ElConfigProvider } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," defineComponent"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  components: {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ElConfigProvider,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      zIndex: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"3000"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      size: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'small'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),i("h2",{id:"usando-nuxt-js",tabindex:"-1"},[s("Usando Nuxt.js "),i("a",{class:"header-anchor vp-link",href:"#usando-nuxt-js","aria-label":'Permalink to "Usando Nuxt.js"'},"​")]),i("p",null,[s("We can also use "),i("a",{href:"https://nuxt.com",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("Nuxt.js"),l(a,{class:"link-icon"})]),s(":")]),i("div",{class:"glitch-embed-wrap",style:{height:"420px",width:"100%"}},[i("iframe",{src:"https://glitch.com/edit/#!/element-plus-nuxt-starter?path=components%2FExamples.vue%3A1%3A0",alt:"nuxt-element-plus on glitch",style:{height:"100%",width:"100%",border:"0"}})]),i("h2",{id:"empecemos",tabindex:"-1"},[s("Empecemos "),i("a",{class:"header-anchor vp-link",href:"#empecemos","aria-label":'Permalink to "Empecemos"'},"​")]),i("p",null,[s("Puede arrancar su proyecto a partir de ahora. Para el uso de cada componente, por favor consulte "),i("a",{href:"https://element-plus.org/ee-ES/component/button.html",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("la documentación individual de cada componente"),l(a,{class:"link-icon"})]),s(".")])])}}});export{u as __pageData,y as default};
