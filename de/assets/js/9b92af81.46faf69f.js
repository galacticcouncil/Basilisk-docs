(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[154],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return p},kt:function(){return h}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=u(i),h=r,k=c["".concat(l,".").concat(h)]||c[h]||s[h]||o;return i?n.createElement(k,a(a({ref:t},p),{},{components:i})):n.createElement(k,a({ref:t},p))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var u=2;u<o;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},3919:function(e,t,i){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}i.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,i){"use strict";i.d(t,{C:function(){return o},Z:function(){return a}});var n=i(2263),r=i(3919);function o(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,i=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,i,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,d=void 0!==a&&a,l=o.absolute,u=void 0!==l&&l;if(!i)return i;if(i.startsWith("#"))return i;if((0,r.b)(i))return i;if(d)return t+i;var p=i.startsWith(t)?i:t+i.replace(/^\//,"");return u?e+p:p}(o,i,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},100:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return d},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var n=i(2122),r=i(9756),o=(i(7294),i(3905)),a=i(4996),d={id:"howto_snek_swap_provide_liquidity",title:"Provide Liquidity"},l={unversionedId:"howto_snek_swap_provide_liquidity",id:"howto_snek_swap_provide_liquidity",isDocsHomePage:!1,title:"Provide Liquidity",description:"On this page you will find a step-by-step guide for becoming a Liquidity Provider in a Snek Swap (XYK) pool. Providing liquidity allows you to earn rewards from the fees generated by trades in the pool.",source:"@site/docs/howto_snek_swap_provide_liquidity.md",sourceDirName:".",slug:"/howto_snek_swap_provide_liquidity",permalink:"/de/howto_snek_swap_provide_liquidity",editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/howto_snek_swap_provide_liquidity.md",version:"current",frontMatter:{id:"howto_snek_swap_provide_liquidity",title:"Provide Liquidity"},sidebar:"sidebar",previous:{title:"Trade",permalink:"/de/howto_snek_swap_trade"},next:{title:"Bridge Tokens",permalink:"/de/howto_bridge"}},u=[{value:"Add Liquidity",id:"add",children:[{value:"Step 0: Bridge Tokens",id:"add-0-bridge",children:[]},{value:"Step 1: Navigate to Basilisk Pools Page",id:"add-1-navigate",children:[]},{value:"Step 2: Connect to Your Account",id:"add-2-connect",children:[]},{value:"Step 3: Select Tokens and Add Liquidity",id:"add-3-add-liquidity",children:[]}]},{value:"Withdraw Liquidity",id:"withdraw",children:[{value:"Step 1: Navigate to Basilisk Pools Page",id:"withdraw-1-navigate",children:[]},{value:"Step 2: Connect to Your Account",id:"withdraw-2-navigate",children:[]},{value:"Step 3: Select Tokens and Withdraw Liquidity",id:"withdraw-1-withdraw-liquidity",children:[]}]}],p={toc:u};function s(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"On this page you will find a ",(0,o.kt)("strong",{parentName:"p"},"step-by-step guide for becoming a Liquidity Provider")," in a Snek Swap (XYK) pool. Providing liquidity allows you to ",(0,o.kt)("strong",{parentName:"p"},"earn rewards")," from the fees generated by trades in the pool."),(0,o.kt)("p",null,"This guide covers both processes of ",(0,o.kt)("a",{parentName:"p",href:"#add"},"adding")," and ",(0,o.kt)("a",{parentName:"p",href:"#withdraw"},"withdrawing")," liquidity."),(0,o.kt)("p",null,"Before deciding to become a liquidity provider, we encourage you to visit our ",(0,o.kt)("a",{parentName:"p",href:"/product_snek_swap"},"Snek Swap")," product page and to ",(0,o.kt)("strong",{parentName:"p"},"get yourself familiar")," with the features and caveats of XYK pools."),(0,o.kt)("h2",{id:"add"},"Add Liquidity"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,a.Z)("/img/howto_xyk/lp-add-screen.jpg")})),(0,o.kt)("h3",{id:"add-0-bridge"},"Step 0: Bridge Tokens"),(0,o.kt)("p",null,"Before you can provide liquidity for a pool with BSX and aUSD or KSM, you will first need to ",(0,o.kt)("strong",{parentName:"p"},"bridge these non-native assets")," into the Basilisk chain. For this purpose, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://apps.karura.network/bridge"},"Karura Bridge"),"."),(0,o.kt)("p",null,"The bridge can also be used to transfer BSX, aUSD or KSM out of the Basilisk chain and into Karura or Kusama."),(0,o.kt)("p",null,"For a step-by-step guidance on transfering tokens between Kusama chains, please visit our ",(0,o.kt)("a",{parentName:"p",href:"/howto_bridge"},"bridging quide"),"."),(0,o.kt)("h3",{id:"add-1-navigate"},"Step 1: Navigate to Basilisk Pools Page"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://app.basilisk.cloud/#/pools"},"https://app.basilisk.cloud/#/pools")),(0,o.kt)("h3",{id:"add-2-connect"},"Step 2: Connect to Your Account"),(0,o.kt)("p",null,"Connect your wallet to Basilisk by clicking ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Connect Account")," (1 in image above)"),"."),(0,o.kt)("h3",{id:"add-3-add-liquidity"},"Step 3: Select Tokens and Add Liquidity"),(0,o.kt)("p",null,"Make sure that ",(0,o.kt)("inlineCode",{parentName:"p"},"Add")," is selected in the toggle."),(0,o.kt)("p",null,"Select the token pair ",(0,o.kt)("strong",{parentName:"p"},"(2)")," and amount of liquidity you would like to contribute ",(0,o.kt)("strong",{parentName:"p"},"(3)"),". Then, click ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Add Liquidity")," (4)")," and sign the transaction using the wallet app."),(0,o.kt)("p",null,"Please note that you must hold both tokens in the pair to provide liquidity. If you don't have both tokens, you can purchase the other token on Basilisk XYK."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"withdraw"},"Withdraw Liquidity"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,a.Z)("/img/howto_xyk/lp-remove-screen.jpg")})),(0,o.kt)("h3",{id:"withdraw-1-navigate"},"Step 1: Navigate to Basilisk Pools Page"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://app.basilisk.cloud/#/pools"},"https://app.basilisk.cloud/#/pools")),(0,o.kt)("h3",{id:"withdraw-2-navigate"},"Step 2: Connect to Your Account"),(0,o.kt)("p",null,"Connect your wallet to Basilisk by clicking ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect Account")," ",(0,o.kt)("strong",{parentName:"p"},"(1 in image above)")),(0,o.kt)("h3",{id:"withdraw-1-withdraw-liquidity"},"Step 3: Select Tokens and Withdraw Liquidity"),(0,o.kt)("p",null,"After connecting your wallet, toggle to ",(0,o.kt)("inlineCode",{parentName:"p"},"Remove")," ",(0,o.kt)("strong",{parentName:"p"},"(2).")),(0,o.kt)("p",null,"Select the token pair you would like to remove liquidity from ",(0,o.kt)("strong",{parentName:"p"},"(3).")," After that, enter the amount of LP share tokens you are withdrawing ",(0,o.kt)("strong",{parentName:"p"},"(4)"),"."),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Remove Liquidity")," ",(0,o.kt)("strong",{parentName:"p"},"(5)")," and sign the transaction using your wallet app."))}s.isMDXComponent=!0}}]);