(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[875],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,k=d["".concat(s,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(2263),o=n(3919);function a(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,u=void 0!==i&&i,s=a.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(u)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+c:c}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},9485:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=n(4996),u={id:"howto_snek_swap_trade",title:"Trade"},s={unversionedId:"howto_snek_swap_trade",id:"howto_snek_swap_trade",isDocsHomePage:!1,title:"Trade",description:"This page provides a step-by-step guide which will help you execute your first trades of tokens using Snek Swap.",source:"@site/docs/howto_snek_swap_trade.md",sourceDirName:".",slug:"/howto_snek_swap_trade",permalink:"/howto_snek_swap_trade",editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/howto_snek_swap_trade.md",version:"current",frontMatter:{id:"howto_snek_swap_trade",title:"Trade"},sidebar:"sidebar",previous:{title:"Snek Swap",permalink:"/product_snek_swap"},next:{title:"Provide Liquidity",permalink:"/howto_snek_swap_provide_liquidity"}},p=[{value:"Step 0: Bridge Tokens",id:"0-bridge",children:[]},{value:"Step 1: Navigate to the Snek Swap Page",id:"1-navigate",children:[]},{value:"Step 2: Connect to Your Account",id:"2-connect",children:[]},{value:"Step 3: Execute a Trade",id:"3-trade",children:[]}],c={toc:p};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page provides a ",(0,a.kt)("strong",{parentName:"p"},"step-by-step guide")," which will ",(0,a.kt)("strong",{parentName:"p"},"help you execute your first trades")," of tokens using Snek Swap."),(0,a.kt)("p",null,"Before trading, we encourage you to visit our ",(0,a.kt)("a",{parentName:"p",href:"/product_snek_swap"},"Snek Swap")," product page and to ",(0,a.kt)("strong",{parentName:"p"},"get yourself familiar")," with the features and caveats of XYK pools."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,i.Z)("/img/howto_xyk/trade-screen.jpg")})),(0,a.kt)("h3",{id:"0-bridge"},"Step 0: Bridge Tokens"),(0,a.kt)("p",null,"Before you can buy BSX with aUSD or KSM, you will first need to ",(0,a.kt)("strong",{parentName:"p"},"bridge these non-native assets")," into the Basilisk chain. For this purpose, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://apps.karura.network/bridge"},"Karura Bridge"),"."),(0,a.kt)("p",null,"The bridge can also be used to transfer BSX, aUSD or KSM out of the Basilisk chain and into Karura or Kusama."),(0,a.kt)("p",null,"For a step-by-step guidance on transfering tokens between Kusama chains, please visit our ",(0,a.kt)("a",{parentName:"p",href:"/howto_bridge"},"bridging guide"),"."),(0,a.kt)("h3",{id:"1-navigate"},"Step 1: Navigate to the Snek Swap Page"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.basilisk.cloud/#/trade"},"https://app.basilisk.cloud/#/trade")),(0,a.kt)("h3",{id:"2-connect"},"Step 2: Connect to Your Account"),(0,a.kt)("p",null,"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect Account")," ",(0,a.kt)("strong",{parentName:"p"},"(1 in image above)")," and connect to your BSX wallet. "),(0,a.kt)("p",null,"If you still do not have a BSX account, please ",(0,a.kt)("a",{parentName:"p",href:"https://docs.bsx.fi/create_account"},"follow this guide")," to create one."),(0,a.kt)("h3",{id:"3-trade"},"Step 3: Execute a Trade"),(0,a.kt)("p",null,"The Snek Swap UI allows you to intuitively execute a trade:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the pair of tokens you intend to trade ",(0,a.kt)("strong",{parentName:"li"},"(2)"),"."),(0,a.kt)("li",{parentName:"ul"},"Enter the amount of tokens for the trade ",(0,a.kt)("strong",{parentName:"li"},"(3)"),".","  You can enter the amount of tokens you would like to pay with (e.g. 5000 aUSD), but you can also enter the amount of tokens you would like to receive (e.g. 1000 BSX).\n"),(0,a.kt)("li",{parentName:"ul"},"If you would like to adjust your slippage preferences, you can do so by clicking on the ",(0,a.kt)("strong",{parentName:"li"},"Settings Icon (4).")),(0,a.kt)("li",{parentName:"ul"},"To complete the trade, click on ",(0,a.kt)("strong",{parentName:"li"},"Swap")," ",(0,a.kt)("strong",{parentName:"li"},"(5)")," and sign the transaction using your wallet app.")),(0,a.kt)("p",null,"Thanksss for trading with Snek!"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Next up, you can learn ",(0,a.kt)("a",{parentName:"p",href:"/howto_snek_swap_provide_liquidity"},"how to become a liquidity provider")," and earn rewards from the fees generated from trading in your Snek Swap pool of choice."))}l.isMDXComponent=!0}}]);