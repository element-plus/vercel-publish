import{_ as e}from"./chunks/theme.B80B4RRr.js";import{c as n,a as s,y as t,X as i,aG as l,o as p}from"./chunks/framework.lYNz_Rcs.js";const h=s("h2",{id:"custom-namespace",tabindex:"-1"},[i("Custom namespace "),s("span",{class:"vp-tag"},"2.2.0"),i(),s("a",{class:"header-anchor vp-link",href:"#custom-namespace","aria-label":'Permalink to "Custom namespace ^(2.2.0)"'},"​")],-1),c={class:"tip custom-block"},k=s("p",{class:"custom-block-title"},"TIP",-1),o=i("We provide a example in "),d={href:"https://github.com/element-plus/element-plus-vite-starter",class:"vp-link",target:"_blank",rel:"noreferrer"},r=i("element-plus-vite-starter"),E=i(". Just check it."),g=l(`<p>Default namespace is <code>el</code>. In special cases, we may need to customize its namespace.</p><p>Since we use sass to write styles, if you want to customize all namespaces. We have to assume that you already use sass.</p><p>You must set <code>ElConfigProvider</code> and scss <code>$namespace</code> at the same time.</p><h3 id="set-elconfigprovider" tabindex="-1">Set <code>ElConfigProvider</code> <a class="header-anchor vp-link" href="#set-elconfigprovider" aria-label="Permalink to &quot;Set \`ElConfigProvider\`&quot;">​</a></h3><p>Use <code>ElConfigProvider</code> wrap your root component.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- App.vue --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-config-provider</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> namespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ep&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- ... --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-config-provider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="set-scss-css-vars" tabindex="-1">Set Scss &amp; Css Vars <a class="header-anchor vp-link" href="#set-scss-css-vars" aria-label="Permalink to &quot;Set Scss &amp; Css Vars&quot;">​</a></h3><p>Create <code>styles/element/index.scss</code>:</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// styles/element/index.scss</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// we can add this to custom namespace, default is &#39;el&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@forward</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus/theme-chalk/src/mixins/config.scss&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  $namespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ep&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div><p>Import <code>styles/element/index.scss</code> in <code>vite.config.ts</code>:</p><blockquote><p>The same is true for webpack, which needs to be set in <code>preprocessorOptions</code>.</p></blockquote><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  css: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    preprocessorOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      scss: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        additionalData: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`@use &quot;~/styles/element/index.scss&quot; as *;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>That&#39;s all.</p>`,13),C=JSON.parse('{"title":"Custom Namespace","description":"","frontmatter":{"title":"Custom Namespace","lang":"en-US"},"headers":[{"level":2,"title":"Custom namespace <span class=\\"vp-tag \\">2.2.0</span>","slug":"custom-namespace","link":"#custom-namespace","children":[{"level":3,"title":"Set ElConfigProvider","slug":"set-elconfigprovider","link":"#set-elconfigprovider","children":[]},{"level":3,"title":"Set Scss & Css Vars","slug":"set-scss-css-vars","link":"#set-scss-css-vars","children":[]}]}],"relativePath":"en-US/guide/namespace.md","filePath":"en-US/guide/namespace.md","lastUpdated":1721987674000}'),m={name:"en-US/guide/namespace.md"},b=Object.assign(m,{setup(u){return(y,v)=>{const a=e;return p(),n("div",null,[h,s("div",c,[k,s("p",null,[o,s("a",d,[r,t(a,{class:"link-icon"})]),E])]),g])}}});export{C as __pageData,b as default};
