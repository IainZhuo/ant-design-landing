(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{934:function(n,s){n.exports={content:["article",["p",["a",{title:null,href:"https://pro.ant.design"},"Ant Design pro"]," 是 Ant Design 推出的一个开箱即用的中台前端/设计解决方案。"],["h2","文件路径"],["p",["a",{title:null,href:"https://pro.ant.design"},"Ant Design pro v2.x"]," 使用的为 umi 脚手架，文件目录同样为 ",["code","src/pages"],", 首先我们需要将下载的 Home 文件包直接复制到 ",["code","pages"]," 文件夹下。"],["h2","修改路由"],["p","文件目录：  ",["code","config/router.config.js"],"；"],["p","修改 ",["code","dashboard"]," 的路由， 增加 ",["code","Home"]," 路由；"],["pre",{lang:"js",highlighted:'<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>\n<span class="token operator">+</span> <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> <span class="token string">\'./Home\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// 增加 Home 路由</span>\n  <span class="token comment" spellcheck="true">// user</span>\n  <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">\'/user\'</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment" spellcheck="true">// app</span>\n  <span class="token punctuation">{</span>\n<span class="token operator">-</span>   path<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n<span class="token operator">+</span>   path<span class="token punctuation">:</span> <span class="token string">\'/dashboard\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// 更改 dashboard 路由；</span>\n    component<span class="token punctuation">:</span> <span class="token string">\'../layouts/BasicLayout\'</span><span class="token punctuation">,</span>\n    Routes<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'src/pages/Authorized\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    authority<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'admin\'</span><span class="token punctuation">,</span> <span class="token string">\'user\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>'},["code","export default [\n+ { path: '/', component: './Home' }, // 增加 Home 路由\n  // user\n  {\n    path: '/user',\n    ...\n  },\n  // app\n  {\n-   path: '/',\n+   path: '/dashboard', // 更改 dashboard 路由；\n    component: '../layouts/BasicLayout',\n    Routes: ['src/pages/Authorized'],\n    authority: ['admin', 'user'],\n    ...\n  },\n];"]],["h2","安装依赖"],["p","详细参考",["a",{title:null,href:"docs/use/getting-started#安装依赖"},"开始使用里的安装依赖"],";"],["h2","CSS Modules"],["p","多方案请查看 ",["a",{title:null,href:"/docs/use/umi#CSS-Modules"},"umi 里使用的 css module"],";"],["p","这里推荐使用 css-module 的 global;"],["p","antMotionStyle.less 如下"],["pre",{lang:null,highlighted:'<span class="token punctuation">:</span><span class="token keyword">global</span> {\n  <span class="token variable">@import</span> <span class="token string">\'./common.less\'</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token variable">@import</span> <span class="token string">\'./custom.less\'</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token variable">@import</span> <span class="token string">\'./content.less\'</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token variable">@import</span> <span class="token string">\'./nav0.less\'</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token variable">@import</span> <span class="token string">\'./banner0.less\'</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n}'},["code",":global {\n  @import './common.less';\n  @import './custom.less';\n  @import './content.less';\n  @import './nav0.less';\n  @import './banner0.less';\n  ...\n}"]],["h2","暂时先删除换肤插件"],["p","由于换肤插件需要重新 build 全部的 less, 暂时不支持 landing 的 less，所以我们先暂时删除换肤插件。"],["p","文件目录：",["code","config/config.js"],";"],["p","删除 ",["code","webpackPlugin"]," 相关的代码："],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// https://umijs.org/config/</span>\n<span class="token keyword">import</span> os <span class="token keyword">from</span> <span class="token string">\'os\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> pageRoutes <span class="token keyword">from</span> <span class="token string">\'./router.config\'</span><span class="token punctuation">;</span>\n<span class="token operator">-</span> <span class="token keyword">import</span> webpackPlugin <span class="token keyword">from</span> <span class="token string">\'./plugin.config\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> defaultSettings <span class="token keyword">from</span> <span class="token string">\'../src/defaultSettings\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// add for transfer to umi</span>\n  <span class="token operator">...</span>\n  manifest<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    basePath<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n<span class="token operator">-</span> chainWebpack<span class="token punctuation">:</span> webpackPlugin<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","// https://umijs.org/config/\nimport os from 'os';\nimport pageRoutes from './router.config';\n- import webpackPlugin from './plugin.config';\nimport defaultSettings from '../src/defaultSettings';\n\n...\n\nexport default {\n  // add for transfer to umi\n  ...\n  manifest: {\n    basePath: '/',\n  },\n\n- chainWebpack: webpackPlugin,\n};"]]],meta:{order:4,category:{"zh-CN":"使用教程","en-US":"Tutorial"},title:{"zh-CN":"pro 2.x 里使用","en-US":"Use in pro 2.x"},filename:"docs/use/pro.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#文件路径",title:"文件路径"},"文件路径"]],["li",["a",{className:"bisheng-toc-h2",href:"#修改路由",title:"修改路由"},"修改路由"]],["li",["a",{className:"bisheng-toc-h2",href:"#安装依赖",title:"安装依赖"},"安装依赖"]],["li",["a",{className:"bisheng-toc-h2",href:"#CSS-Modules",title:"CSS Modules"},"CSS Modules"]],["li",["a",{className:"bisheng-toc-h2",href:"#暂时先删除换肤插件",title:"暂时先删除换肤插件"},"暂时先删除换肤插件"]]]}}}]);