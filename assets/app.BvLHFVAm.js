import{aC as o,aT as p,aU as u,aV as l,aW as c,aX as f,aY as d,aZ as m,a_ as h,a$ as b,b0 as g,p as A,az as P,b as v,e as C,b1 as w,b2 as y,b3 as R,ak as T}from"./chunks/framework.BfK9qma0.js";import{aU as _}from"./chunks/theme.OkkKDdTK.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(_),E=A({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=P();return v(()=>{C(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),y(),R(),s.setup&&s.setup(),()=>T(s.Layout)}});async function S(){globalThis.__VITEPRESS__=!0;const e=V(),a=D();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function D(){return h(E)}function V(){let e=o,a;return b(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&S().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{S as createApp};
