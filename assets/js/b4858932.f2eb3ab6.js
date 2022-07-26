(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[238],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9493:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={id:"product_intro",title:"Intro",slug:"/"},s={unversionedId:"product_intro",id:"product_intro",isDocsHomePage:!1,title:"Intro",description:"Welcome to the Basilisk Documentation page! Here you can find a collection of useful resources which will help you navigate your Basilisk journey. The available content will grow as the project unfolds, and we promise to do our best to provide translations in a timely manner to ensure that everyone can participate.",source:"@site/docs/product_intro.md",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/product_intro.md",version:"current",frontMatter:{id:"product_intro",title:"Intro",slug:"/"},sidebar:"sidebar",next:{title:"Snek Swap",permalink:"/product_snek_swap"}},l=[{value:"What is Basilisk?",id:"what-is-basilisk",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the Basilisk Documentation page! Here you can find a collection of useful resources which will help you navigate your Basilisk journey. The available content will grow as the project unfolds, and we promise to do our best to provide translations in a timely manner to ensure that everyone can participate."),(0,i.kt)("p",null,"Before you continue, don't forget to subscribe to the ",(0,i.kt)("a",{parentName:"p",href:"https://basiliskfi.substack.com"},"Basilisk newsletter")," to not miss any important updates."),(0,i.kt)("h2",{id:"what-is-basilisk"},"What is Basilisk?"),(0,i.kt)("p",null,"Basilisk is a ",(0,i.kt)("strong",{parentName:"p"},"liquidity protocol built for the Kusama ecosystem"),". Its mission is to ",(0,i.kt)("strong",{parentName:"p"},"enable frictionless liquidity")," that caters to the evolving needs of crypto assets - ",(0,i.kt)("strong",{parentName:"p"},"both fungible, and non-fungible (NFTs)"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"modular design")," of Basilisk enables fungible assets to bootstrap liquidity by choosing the Automated Market Maker (AMM) model which they find the most convenient. The first version comes with an implementation of ",(0,i.kt)("a",{parentName:"p",href:"/product_snek_swap"},"Snek Swap (XYK) pools")," which allow users to ",(0,i.kt)("strong",{parentName:"p"},"buy and sell tokens"),", or to ",(0,i.kt)("strong",{parentName:"p"},"become a liquidity provider and earn rewards generated from trades"),"."),(0,i.kt)("p",null,"For the ",(0,i.kt)("strong",{parentName:"p"},"non-fungibles"),", we are soon about to release the ",(0,i.kt)("strong",{parentName:"p"},"Basilisk NFT Marketplace")," which has spicy features under the hood. Besides ",(0,i.kt)("strong",{parentName:"p"},"minting and listing NFTs"),", the Marketplace also brings the ability to ",(0,i.kt)("strong",{parentName:"p"},"set a royalty fee")," (a percentage of every trade goes to the owner of the fee), and to ",(0,i.kt)("strong",{parentName:"p"},"place an offer for non-listed NFTs"),". The Basilisk NFT Marketplace is made available with the kind support of our frens at KodaDot who have integrated our pallet into their UI."),(0,i.kt)("p",null,"In the following version, Basilisk is preparing to release an array of new features. ",(0,i.kt)("strong",{parentName:"p"},"Liquidity Mining (LM)")," will allow the Basilisk Protocol to incentivize liquidity provisioning to selected pools with BSX tokens from the Basilisk Treasury. Furthermore, ",(0,i.kt)("strong",{parentName:"p"},"Liquidity Bootstrapping Pools (LBP)")," will allow young crypto assets to bootstrap liquidity in a fair and economically efficient manner. And for the NFTs, we have been developing a mechanism which will allow you to ",(0,i.kt)("strong",{parentName:"p"},"flip your NFTs using auctions")," - English, Top up and Candle auctions."))}p.isMDXComponent=!0}}]);