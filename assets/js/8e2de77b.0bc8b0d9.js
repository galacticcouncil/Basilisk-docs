"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[875],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),k=a,h=d["".concat(s,".").concat(k)]||d[k]||c[k]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=r(4996);const i={id:"howto_snek_swap_trade",title:"Trade"},p=void 0,s={unversionedId:"howto_snek_swap_trade",id:"howto_snek_swap_trade",title:"Trade",description:"This page provides a step-by-step guide which will help you execute your first trades of tokens using Snek Swap.",source:"@site/docs/howto_snek_swap_trade.md",sourceDirName:".",slug:"/howto_snek_swap_trade",permalink:"/howto_snek_swap_trade",draft:!1,editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/howto_snek_swap_trade.md",tags:[],version:"current",frontMatter:{id:"howto_snek_swap_trade",title:"Trade"},sidebar:"sidebar",previous:{title:"Use Parity Signer",permalink:"/howto_wallet_parity_signer"},next:{title:"Provide Liquidity",permalink:"/howto_snek_swap_provide_liquidity"}},l={},u=[{value:"Step 0: Bridge Tokens",id:"0-bridge",level:3},{value:"Step 1: Navigate to the Snek Swap Page",id:"1-navigate",level:3},{value:"Step 2: Connect to Your Account",id:"2-connect",level:3},{value:"Step 3: Execute a Trade",id:"3-trade",level:3}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page provides a ",(0,a.kt)("strong",{parentName:"p"},"step-by-step guide")," which will ",(0,a.kt)("strong",{parentName:"p"},"help you execute your first trades")," of tokens using Snek Swap."),(0,a.kt)("p",null,"Before trading, we encourage you to visit our ",(0,a.kt)("a",{parentName:"p",href:"/product_snek_swap"},"Snek Swap")," product page and to ",(0,a.kt)("strong",{parentName:"p"},"get yourself familiar")," with the features and caveats of XYK pools."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,o.Z)("/img/howto_xyk/trade-screen.jpg")})),(0,a.kt)("h3",{id:"0-bridge"},"Step 0: Bridge Tokens"),(0,a.kt)("p",null,"Before you can buy BSX with aUSD or KSM, you will first need to ",(0,a.kt)("strong",{parentName:"p"},"bridge these non-native assets")," into the Basilisk chain. For this purpose, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://apps.karura.network/bridge"},"Karura Bridge"),"."),(0,a.kt)("p",null,"The bridge can also be used to transfer BSX, aUSD or KSM out of the Basilisk chain and into Karura or Kusama."),(0,a.kt)("p",null,"For a step-by-step guidance on transfering tokens between Kusama chains, please visit our ",(0,a.kt)("a",{parentName:"p",href:"/howto_bridge"},"bridging guide"),"."),(0,a.kt)("h3",{id:"1-navigate"},"Step 1: Navigate to the Snek Swap Page"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.basilisk.cloud/#/trade"},"https://app.basilisk.cloud/#/trade")),(0,a.kt)("h3",{id:"2-connect"},"Step 2: Connect to Your Account"),(0,a.kt)("p",null,"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect Account")," ",(0,a.kt)("strong",{parentName:"p"},"(1 in image above)")," and connect to your BSX wallet. "),(0,a.kt)("p",null,"If you still do not have a BSX account, please ",(0,a.kt)("a",{parentName:"p",href:"https://docs.bsx.fi/create_account"},"follow this guide")," to create one."),(0,a.kt)("h3",{id:"3-trade"},"Step 3: Execute a Trade"),(0,a.kt)("p",null,"The Snek Swap UI allows you to intuitively execute a trade:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the pair of tokens you intend to trade ",(0,a.kt)("strong",{parentName:"li"},"(2)"),"."),(0,a.kt)("li",{parentName:"ul"},"Enter the amount of tokens for the trade ",(0,a.kt)("strong",{parentName:"li"},"(3)"),".","  You can enter the amount of tokens you would like to pay with (e.g. 5000 aUSD), but you can also enter the amount of tokens you would like to receive (e.g. 1000 BSX).\n"),(0,a.kt)("li",{parentName:"ul"},"If you would like to adjust your slippage preferences, you can do so by clicking on the ",(0,a.kt)("strong",{parentName:"li"},"Settings Icon (4).")),(0,a.kt)("li",{parentName:"ul"},"To complete the trade, click on ",(0,a.kt)("strong",{parentName:"li"},"Swap")," ",(0,a.kt)("strong",{parentName:"li"},"(5)")," and sign the transaction using your wallet app.")),(0,a.kt)("p",null,"Thanksss for trading with Snek!"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Next up, you can learn ",(0,a.kt)("a",{parentName:"p",href:"/howto_snek_swap_provide_liquidity"},"how to become a liquidity provider")," and earn rewards from the fees generated from trading in your Snek Swap pool of choice."))}d.isMDXComponent=!0}}]);