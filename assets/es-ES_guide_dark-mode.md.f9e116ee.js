import{o as p,c,b as s,a as n,d as a,e,B as l,_ as r}from"./app.9635afe0.js";const i={id:"dark-mode",tabindex:"-1"},d=a("Dark Mode"),u=a(),k=s("a",{class:"header-anchor vp-link",href:"#dark-mode","aria-hidden":"true"},"#",-1),m=e(`<p>Despu\xE9s de un largo tiempo, Element Plus soporta modo oscuro!</p><p>Extrajimos y unificamos todas las variables necesarias para hacer posible la implementaci\xF3n basada en variables CSS.</p><h2 id="\xBFcomo-activarlo" tabindex="-1">\xBFC\xF3mo activarlo? <a class="header-anchor vp-link" href="#\xBFcomo-activarlo" aria-hidden="true">#</a></h2><p>Puede crear un switch para cambiar la clase <code>dark</code> del Html.</p><blockquote><p>Si solo necesita el modo oscuro, solo tiene que a\xF1adir la clase <code>dark</code> al Html.</p></blockquote><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,6),_=a("Si quiere alternarlo, le recomendamos "),h={href:"https://vueuse.org/core/useDark/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},g=a("useDark | VueUse"),v=a("."),b=e(`<p>Entonces, puede activarlo r\xE1pidamente con una sola l\xEDnea de c\xF3digo para importar CSS en su entrada.</p><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>
<span class="token comment">// if you just want to import css</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-plus/theme-chalk/dark/css-vars.css&#39;</span>
</code></pre></div>`,2),S=a("Si quiere un ejemplo, puede referirse a "),f={href:"https://github.com/element-plus/element-plus-vite-starter",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},T=a("element-plus-vite-starter"),y=a("."),P=e(`<h2 id="variables-personalizadas" tabindex="-1">Variables personalizadas <a class="header-anchor vp-link" href="#variables-personalizadas" aria-hidden="true">#</a></h2><h3 id="por-css" tabindex="-1">Por CSS <a class="header-anchor vp-link" href="#por-css" aria-hidden="true">#</a></h3><p>Solo sobrescriba las variables CSS.</p><p>Por ejemplo, nuevo archivo <code>styles/dark/css-vars.css</code>:</p><div class="language-css"><pre><code><span class="token selector">html.dark</span> <span class="token punctuation">{</span>
  <span class="token comment">/* custom dark bg color */</span>
  <span class="token property">--el-bg-color</span><span class="token punctuation">:</span> #626aef<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Imp\xF3rtelo despu\xE9s de los estilos de Element Plus:</p><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-plus/theme-chalk/dark/css-vars.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./styles/dark/css-vars.css&#39;</span>
</code></pre></div><h3 id="por-scss" tabindex="-1">Por SCSS <a class="header-anchor vp-link" href="#por-scss" aria-hidden="true">#</a></h3><p>Si utiliza scss, tambi\xE9n puede importar el archivo scss para compilar.</p><blockquote><p>Puedes referirse a <a href="./theming.html" class="vp-link">Tema</a> para obtener m\xE1s informaci\xF3n.</p></blockquote><div class="language-scss"><pre><code><span class="token comment">// styles/element/index.scss</span>
<span class="token comment">/*just override what you need*/</span>
<span class="token keyword">@forward</span> <span class="token string">&#39;element-plus/theme-chalk/src/dark/var.scss&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$bg-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">&#39;page&#39;</span><span class="token punctuation">:</span> #0a0a0a<span class="token punctuation">,</span>
    <span class="token string">&#39;&#39;</span><span class="token punctuation">:</span> #626aef<span class="token punctuation">,</span>
    <span class="token string">&#39;overlay&#39;</span><span class="token punctuation">:</span> #1d1e1f<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token string">&#39;./styles/element/index.scss&#39;</span>

<span class="token comment">// or just want to import scss?</span>
<span class="token comment">// import &#39;element-plus/theme-chalk/src/dark/css-vars.scss&#39;</span>
</code></pre></div>`,12),D='{"title":"Dark Mode","description":"","frontmatter":{"title":"Dark Mode","lang":"es-ES"},"headers":[{"level":2,"title":"\xBFC\xF3mo activarlo?","slug":"\xBFcomo-activarlo"},{"level":2,"title":"Variables personalizadas","slug":"variables-personalizadas"},{"level":3,"title":"Por CSS","slug":"por-css"},{"level":3,"title":"Por SCSS","slug":"por-scss"}],"relativePath":"es-ES/guide/dark-mode.md","lastUpdated":null}',C={},E=Object.assign(C,{__name:"dark-mode",setup(V){return(q,w)=>{const o=l,t=r;return p(),c("div",null,[s("h1",i,[d,n(o,{version:"2.2.0"}),u,k]),m,s("blockquote",null,[s("p",null,[_,s("a",h,[g,n(t,{class:"link-icon"})]),v])]),b,s("blockquote",null,[s("p",null,[S,s("a",f,[T,n(t,{class:"link-icon"})]),y])]),P])}}});export{D as __pageData,E as default};
