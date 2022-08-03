(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[708],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),d=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=d(n),k=i,m=c["".concat(l,".").concat(k)]||c[k]||s[k]||a;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:i,o[1]=p;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3919:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function i(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return i}})},4996:function(t,e,n){"use strict";n.d(e,{C:function(){return a},Z:function(){return o}});var r=n(2263),i=n(3919);function a(){var t=(0,r.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,a=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,p=void 0!==o&&o,l=a.absolute,d=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(p)return e+n;var u=n.startsWith(e)?n:e+n.replace(/^\//,"");return d?t+u:u}(a,n,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,a().withBaseUrl)(t,e)}},7267:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=n(4996),p={id:"howto_snek_swap_provide_liquidity",title:"\u63d0\u4f9b\u6d41\u52a8\u6027"},l={unversionedId:"howto_snek_swap_provide_liquidity",id:"howto_snek_swap_provide_liquidity",isDocsHomePage:!1,title:"\u63d0\u4f9b\u6d41\u52a8\u6027",description:"\u5728\u8fd9\u4e00\u9875\uff0c\u4f60\u4f1a\u627e\u5230\u5728 Snek Swap\uff08XYK\uff09\u6c60 \u6210\u4e3a\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u7684\u5206\u6b65\u6307\u5357\u3002\u63d0\u4f9b\u6d41\u52a8\u6027\uff0c\u60a8\u4f1a\u4ece\u6c60\u4e2d\u4ea4\u6613\u4ea7\u751f\u7684\u8d39\u7528\u4e2d \u8d5a\u53d6\u56de\u62a5\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/howto_snek_swap_provide_liquidity.md",sourceDirName:".",slug:"/howto_snek_swap_provide_liquidity",permalink:"/cn/howto_snek_swap_provide_liquidity",editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/howto_snek_swap_provide_liquidity.md",version:"current",frontMatter:{id:"howto_snek_swap_provide_liquidity",title:"\u63d0\u4f9b\u6d41\u52a8\u6027"},sidebar:"sidebar",previous:{title:"\u4ea4\u6613",permalink:"/cn/howto_snek_swap_trade"},next:{title:"\u6865\u63a5\u4ee4\u724c",permalink:"/cn/howto_bridge"}},d=[{value:"\u6dfb\u52a0\u6d41\u52a8\u6027",id:"add",children:[{value:"\u6b65\u9aa4 0: \u6865\u63a5\u4ee4\u724c",id:"add-0-bridge",children:[]},{value:"\u6b65\u9aa4 1: \u5bfc\u822a\u81f3 Basilisk \u6c60\u9875\u9762",id:"add-1-navigate",children:[]},{value:"\u6b65\u9aa4 2: \u8fde\u63a5\u60a8\u7684\u8d26\u6237",id:"add-2-connect",children:[]},{value:"\u6b65\u9aa4 3: \u9009\u62e9\u4ee4\u724c\u6dfb\u52a0\u6d41\u52a8\u6027",id:"add-3-add-liquidity",children:[]}]},{value:"\u64a4\u56de\u6d41\u52a8\u6027",id:"withdraw",children:[{value:"\u6b65\u9aa4 1: \u5bfc\u822a\u81f3 Basilisk \u6c60\u9875\u9762",id:"withdraw-1-navigate",children:[]},{value:"\u6b65\u9aa4 2: \u8fde\u63a5\u60a8\u7684\u8d26\u6237",id:"withdraw-2-navigate",children:[]},{value:"\u6b65\u9aa4 3: \u9009\u62e9\u4ee4\u724c\u64a4\u56de\u6d41\u52a8\u6027",id:"withdraw-1-withdraw-liquidity",children:[]}]}],u={toc:d};function s(t){var e=t.components,n=(0,i.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u8fd9\u4e00\u9875\uff0c\u4f60\u4f1a\u627e\u5230\u5728 Snek Swap\uff08XYK\uff09\u6c60 ",(0,a.kt)("strong",{parentName:"p"},"\u6210\u4e3a\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u7684\u5206\u6b65\u6307\u5357"),"\u3002\u63d0\u4f9b\u6d41\u52a8\u6027\uff0c\u60a8\u4f1a\u4ece\u6c60\u4e2d\u4ea4\u6613\u4ea7\u751f\u7684\u8d39\u7528\u4e2d ",(0,a.kt)("strong",{parentName:"p"},"\u8d5a\u53d6\u56de\u62a5"),"\u3002"),(0,a.kt)("p",null,"\u672c\u6307\u5357\uff0c\u6db5\u76d6\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#add"},"\u6dfb\u52a0"))," \u548c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#withdraw"},"\u64a4\u56de"))," \u6d41\u52a8\u6027\u4e24\u4e2a\u6d41\u7a0b\u3002"),(0,a.kt)("p",null,"\u5728\u51b3\u5b9a\u6210\u4e3a\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u524d\uff0c\u9f13\u52b1\u60a8\u8bbf\u95ee ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/product_snek_swap"},"Snek Swap"))," \u4ea7\u54c1\u9875\u9762\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6df1\u5165\u4e86\u89e3")," XYK \u6c60\u7684\u529f\u80fd\u548c\u6ce8\u610f\u4e8b\u9879\u3002"),(0,a.kt)("h2",{id:"add"},"\u6dfb\u52a0\u6d41\u52a8\u6027"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,o.Z)("/img/howto_xyk/lp-add-screen.jpg")})),(0,a.kt)("h3",{id:"add-0-bridge"},"\u6b65\u9aa4 0: \u6865\u63a5\u4ee4\u724c"),(0,a.kt)("p",null,"\u5728\u60a8\u4e3a BSX \u548c aUSD \u6216 KSM \u6c60\u63d0\u4f9b\u6d41\u52a8\u6027\u524d\uff0c\u9996\u5148\u9700\u8981 ",(0,a.kt)("strong",{parentName:"p"},"\u5c06\u8fd9\u4e9b\u975e\u672c\u5730\u8d44\u4ea7")," \u8fde\u63a5\u5230 Basilisk \u94fe\u3002\u4e3a\u6b64\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://apps.karura.network/bridge"},"Karura \u6865")),"\u3002"),(0,a.kt)("p",null,"\u6865\uff0c\u4e5f\u53ef\u4ee5\u7528\u6765\u5c06 BSX\u3001aUSD \u6216 KSM \u4ece Basilisk \u94fe\u8f6c\u79fb\u5230 Karura \u6216 Kusama\u3002"),(0,a.kt)("p",null,"\u8981\u4e86\u89e3 Kusama \u94fe\u95f4\u4ee4\u724c\u8f6c\u79fb\u7684\u5206\u6b65\u6307\u5bfc\uff0c\u8bf7\u8bbf\u95ee\u6211\u4eec\u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/howto_bridge"},"\u6865\u63a5\u6307\u5357")),"\u3002"),(0,a.kt)("h3",{id:"add-1-navigate"},"\u6b65\u9aa4 1: \u5bfc\u822a\u81f3 Basilisk \u6c60\u9875\u9762"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.basilisk.cloud/#/pools"},"https://app.basilisk.cloud/#/pools")),(0,a.kt)("h3",{id:"add-2-connect"},"\u6b65\u9aa4 2: \u8fde\u63a5\u60a8\u7684\u8d26\u6237"),(0,a.kt)("p",null,"\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect Account")," ",(0,a.kt)("strong",{parentName:"p"},"\uff08\u4e0a\u56fe\u4e2d 1\uff09"),"\uff0c\u8fde\u63a5\u5230 Basilisk \u94b1\u5305\u3002"),(0,a.kt)("h3",{id:"add-3-add-liquidity"},"\u6b65\u9aa4 3: \u9009\u62e9\u4ee4\u724c\u6dfb\u52a0\u6d41\u52a8\u6027"),(0,a.kt)("p",null,"\u786e\u4fdd\u5207\u6362\u9009\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"Add")," \u9875\u9762\u3002"),(0,a.kt)("p",null,"\u9009\u62e9\u4ee4\u724c\u5bf9 ",(0,a.kt)("strong",{parentName:"p"},"\uff082\uff09")," \u548c\u60a8\u5e0c\u671b\u8d21\u732e\u7684\u6d41\u52a8\u6027\u91d1\u989d ",(0,a.kt)("strong",{parentName:"p"},"\uff083\uff09"),"\u3002\u7136\u540e\uff0c\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Add Liquidity")," ",(0,a.kt)("strong",{parentName:"p"},"\uff084\uff09"),"\uff0c\u4f7f\u7528\u94b1\u5305\u5e94\u7528\u7a0b\u5e8f\u7b7e\u7f72\u4ea4\u6613\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u60a8\u5fc5\u987b\u540c\u65f6\u6301\u6709\u4e24\u4e2a\u4ee4\u724c\u4ee5\u63d0\u4f9b\u6d41\u52a8\u6027\u3002\u5982\u679c\u60a8\u8fd8\u6ca1\u6709\u4ee4\u724c\uff0c\u53ef\u5728 Basilisk XYK \u4e0a\u8d2d\u4e70\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"withdraw"},"\u64a4\u56de\u6d41\u52a8\u6027"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,o.Z)("/img/howto_xyk/lp-remove-screen.jpg")})),(0,a.kt)("h3",{id:"withdraw-1-navigate"},"\u6b65\u9aa4 1: \u5bfc\u822a\u81f3 Basilisk \u6c60\u9875\u9762"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.basilisk.cloud/#/pools"},"https://app.basilisk.cloud/#/pools")),(0,a.kt)("h3",{id:"withdraw-2-navigate"},"\u6b65\u9aa4 2: \u8fde\u63a5\u60a8\u7684\u8d26\u6237"),(0,a.kt)("p",null,"\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect Account")," ",(0,a.kt)("strong",{parentName:"p"},"\uff08\u4e0a\u56fe\u4e2d 1\uff09"),"\uff0c\u8fde\u63a5\u5230 Basilisk \u94b1\u5305\u3002"),(0,a.kt)("h3",{id:"withdraw-1-withdraw-liquidity"},"\u6b65\u9aa4 3: \u9009\u62e9\u4ee4\u724c\u64a4\u56de\u6d41\u52a8\u6027"),(0,a.kt)("p",null,"\u8fde\u63a5\u94b1\u5305\u540e\uff0c\u5207\u6362\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Remove")," ",(0,a.kt)("strong",{parentName:"p"},"\uff082\uff09"),"\u3002"),(0,a.kt)("p",null,"\u9009\u62e9\u60a8\u60f3\u8981\u4ece ",(0,a.kt)("strong",{parentName:"p"},"\uff083\uff09")," \u4e2d\u79fb\u9664\u6d41\u52a8\u6027\u7684\u4ee4\u724c\u5bf9\u3002\u4e4b\u540e\uff0c\u8f93\u5165\u60a8\u8981\u64a4\u56de\u7684 LP \u4efd\u989d\u4ee4\u724c\u6570\u91cf ",(0,a.kt)("strong",{parentName:"p"},"\uff084\uff09"),"\u3002"),(0,a.kt)("p",null,"\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Remove Liquidity")," ",(0,a.kt)("strong",{parentName:"p"},"\uff085\uff09"),"\uff0c\u4f7f\u7528\u60a8\u7684\u94b1\u5305\u5e94\u7528\u7a0b\u5e8f\u7b7e\u7f72\u4ea4\u6613\u3002"))}s.isMDXComponent=!0}}]);