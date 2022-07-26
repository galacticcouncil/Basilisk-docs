(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[615],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(2263),o=r(3919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,s=void 0!==a&&a,u=i.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(s)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+c:c}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},3847:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=r(4996),s={id:"howto_bridge",title:"Bridge Tokens"},u={unversionedId:"howto_bridge",id:"howto_bridge",isDocsHomePage:!1,title:"Bridge Tokens",description:"If you want to trade BSX, or provide liquidity for some of the Basilisk XYK pools, you may want to bridge tokens into the Basilisk chain, or out of it. You can do so using XCM - Kusama\u2019s cross-messaging protocol.",source:"@site/docs/howto_bridge.md",sourceDirName:".",slug:"/howto_bridge",permalink:"/es/howto_bridge",editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/howto_bridge.md",version:"current",frontMatter:{id:"howto_bridge",title:"Bridge Tokens"},sidebar:"sidebar",previous:{title:"Provide Liquidity",permalink:"/es/howto_snek_swap_provide_liquidity"},next:{title:"Create a new BSX Account",permalink:"/es/create_account"}},l=[{value:"Using Karura Bridge",id:"karura",children:[{value:"Step 1: Navigate to the Karura Bridge Page",id:"step-1-navigate-to-the-karura-bridge-page",children:[]},{value:"Step 2: Connect to Your Account",id:"step-2-connect-to-your-account",children:[]},{value:"Step 3: Bridge Tokens",id:"step-3-bridge-tokens",children:[]}]}],c={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you want to ",(0,i.kt)("strong",{parentName:"p"},"trade BSX"),", or ",(0,i.kt)("strong",{parentName:"p"},"provide liquidity")," for some of the Basilisk XYK pools, you may want to bridge tokens into the Basilisk chain, or out of it. You can do so using XCM - Kusama\u2019s cross-messaging protocol."),(0,i.kt)("p",null,"Currently, the following tokens are supported by Basilisk for XCM transfers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BSX"),(0,i.kt)("li",{parentName:"ul"},"aUSD"),(0,i.kt)("li",{parentName:"ul"},"KSM")),(0,i.kt)("p",null,"To perform XCM transfers for one of the assets listed above, you can use ",(0,i.kt)("a",{parentName:"p",href:"#karura"},"Karura\u2019s Bridge"),"."),(0,i.kt)("h2",{id:"karura"},"Using Karura Bridge"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:(0,a.Z)("/img/howto_bridge/ausd.jpg")})),(0,i.kt)("h3",{id:"step-1-navigate-to-the-karura-bridge-page"},"Step 1: Navigate to the Karura Bridge Page"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://apps.karura.network/bridge"},"https://apps.karura.network/bridge")),(0,i.kt)("h3",{id:"step-2-connect-to-your-account"},"Step 2: Connect to Your Account"),(0,i.kt)("p",null,"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect Account")," ",(0,i.kt)("strong",{parentName:"p"},"(1 in image above)")," and connect to your Dotsama wallet. "),(0,i.kt)("p",null,"If you still do not have a BSX account, please ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bsx.fi/create_account"},"follow this guide")," to create one."),(0,i.kt)("h3",{id:"step-3-bridge-tokens"},"Step 3: Bridge Tokens"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Origin Chain")," ",(0,i.kt)("strong",{parentName:"li"},"(2)")," you want to bridge tokens from, as well as the ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination Chain")," ",(0,i.kt)("strong",{parentName:"li"},"(2)")," which will be receiving the tokens."),(0,i.kt)("li",{parentName:"ul"},"Select the token you would like to bridge ",(0,i.kt)("strong",{parentName:"li"},"(3)"),", and enter the amount."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Transfer")," ",(0,i.kt)("strong",{parentName:"li"},"(4)")," and sign the transaction using your Kusama wallet app.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Examples:\n\nAlice wants to bridge KSM from Kusama to the Basilisk chain. To do so, Alice will select:\n* Origin Chain: Kusama\n* Destination Chain: Basilisk\n* Token: KSM\n\nBob wants to bridge BSX from Basilisk to Karura. To do so, Bob will select:\n* Origin Chain: Basilisk\n* Destination Chain: Karura\n* Token: BSX\n")),(0,i.kt)("p",null,"Congratulations! You have just used the Karura Bridge to bridge tokens to Basilisk."))}p.isMDXComponent=!0}}]);