"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const i={id:"product_snek_swap",title:"Snek Swap"},a=void 0,s={unversionedId:"product_snek_swap",id:"product_snek_swap",title:"Snek Swap",description:"Snek Swap is an AMM built for the Kusama ecosystem which enables users to trade tokens in a decentralized and permissionless manner using so-called XYK pools. With Snake Swap, users can trade tokens or become a liquidity provider and earn rewards from the generated trading fees.",source:"@site/docs/product_snek_swap.md",sourceDirName:".",slug:"/product_snek_swap",permalink:"/de/product_snek_swap",draft:!1,editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/product_snek_swap.md",tags:[],version:"current",frontMatter:{id:"product_snek_swap",title:"Snek Swap"},sidebar:"sidebar",previous:{title:"Intro",permalink:"/de/"},next:{title:"Snek LBP",permalink:"/de/product_snek_lbp"}},l={},d=[{value:"A short intro into AMMs",id:"intro",level:2},{value:"Order Books",id:"intro-order-book",level:3},{value:"AMMs",id:"intro-amm",level:3},{value:"Mechanics of Snek Swap (XYK)",id:"xyk",level:2},{value:"Providing Liquidity",id:"lp",level:2},{value:"Impermanent Loss (IL)",id:"impermanent-loss-il",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Snek Swap is an ",(0,r.kt)("a",{parentName:"p",href:"#intro"},"AMM")," built for the Kusama ecosystem which enables users to trade tokens in a decentralized and permissionless manner using so-called ",(0,r.kt)("a",{parentName:"p",href:"#xyk"},"XYK pools"),". With Snake Swap, users can trade tokens or become a ",(0,r.kt)("a",{parentName:"p",href:"#lp"},"liquidity provider")," and earn rewards from the generated trading fees."),(0,r.kt)("p",null,"If you are looking for step-by-step guides, please check out our guides on ",(0,r.kt)("a",{parentName:"p",href:"/howto_snek_swap_trade"},"swapping tokens")," and on ",(0,r.kt)("a",{parentName:"p",href:"/howto_snek_swap_provide_liquidity"},"providing liquidity"),"."),(0,r.kt)("h2",{id:"intro"},"A short intro into AMMs"),(0,r.kt)("p",null,"In order to better understand Automated Market Makers (AMMs) and how they work, we should first take a look at their centralized counterpart: Order Books."),(0,r.kt)("h3",{id:"intro-order-book"},"Order Books"),(0,r.kt)("p",null,"Order Books provide a mechanism deployed by centralized exchanges to facilitate trading between two assets. Users can place a Buy or Sell order in an electronic list managed by the exchange. The orders in this so-called Order Book are organized by price level and progressively filled as demand shifts and orders are being matched."),(0,r.kt)("p",null,"The limitations of Order Books become apparent against the background of their centralized nature. The need for an intermediary to \u201ckeep\u201d the Order Books and to facilitate the process of order matching creates a dependency on this central authority."),(0,r.kt)("p",null,"The central authority has control over the trading and needs to be trusted by the participants. Currently in crypto, in moments of substantial volume traffic and volatility, halting of trading or degradated liquidity is not an uncommon mishap. Furthermore, the process of adding new tradable assets is permissioned; meaning that, it is dependent upon the approval by the same authority which operates the Order Book."),(0,r.kt)("h3",{id:"intro-amm"},"AMMs"),(0,r.kt)("p",null,"Automated Market Makers (AMMs) is the answer by the DeFi industry to centrally operated Order Books. AMMs provide a decentralized, permissionless way of trading tokens without the need to subdue oneself to a central authority of control."),(0,r.kt)("p",null,"AMMs consist of liquidity pools that hold the available liquidity of the underlying tradable assets. This liquidity is provided by users (the so-called \u201cliquidity providers\u201d) who are incentivized to do so by the prospect of earning rewards from the fees generated by trades in the pool."),(0,r.kt)("p",null,"In the case of AMMs, any user can execute a Buy or Sell order on top of a given trading pool. The price of a trade is determined on the spot by a deterministic algorithm which takes as input the relationship between the liquidity of the traded assets, together with other factors which depend on the particular AMM implementation in question."),(0,r.kt)("p",null,"At Basilisk, we have an implementation of the the most commonly used AMM model - XYK, which provides swap functionality. In the nearest future, we will deliver our implementation of Liquidity Bootstrapping Pools (LBP) which empowers early-staged projects by allowing them to autonomously bootstrap initial liquidity, navigate price discovery and achieve a fair token distribution."),(0,r.kt)("h2",{id:"xyk"},"Mechanics of Snek Swap (XYK)"),(0,r.kt)("p",null,"Snek Swap is built using the so-called XYK AMM model which is the most common AMM used to facilitate swaps from one asset to another. An XYK pool typically consists of a pair of tradable tokens, ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Y"),'. The relationship between the two assets is expressed by the so-called \u201cconstant product\u201d formula, which is also where the name "XYK" comes from:'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"x * y = k")),(0,r.kt)("p",null,"A practical example would be helpful to understand the XYK mechanics. Imagine that a new pool is launched holding ",(0,r.kt)("inlineCode",{parentName:"p"},"100 tokens of X")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"100 tokens of Y"),". In this example, the constant product would be ",(0,r.kt)("inlineCode",{parentName:"p"},"k = 10000"),"."),(0,r.kt)("p",null,"Now imagine that Bob wants to perform a trade to obtain ",(0,r.kt)("inlineCode",{parentName:"p"},"1 token of X")," by depositing ",(0,r.kt)("inlineCode",{parentName:"p"},"some amount tokens of Y"),". The constant product formula tells us how much ",(0,r.kt)("inlineCode",{parentName:"p"},"tokens of Y")," there should be in order to keep the pool in balance after the trade:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Y_new = (k / X_new) = 10000/99 = 101.01")),(0,r.kt)("p",null,"In other words, Bob can withdraw ",(0,r.kt)("inlineCode",{parentName:"p"},"1 token of X")," under the condition that he deposits enough tokens to bring the amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"Y = 101.01"),". This means that Bob needs to cover the difference between the old state (Y = 100) and the new state (Y = 101.01), resulting in ",(0,r.kt)("inlineCode",{parentName:"p"},"1.01 tokens of Y"),". This is the price of the swap."),(0,r.kt)("h2",{id:"lp"},"Providing Liquidity"),(0,r.kt)("p",null,"Thanks to the decentralized manner of an AMM, anyone can become a liquidity provider (LP) for a pool by depositing an equivalent value of each underlying token in return for an LP share."),(0,r.kt)("p",null,"LPs are rewarded with fees for providing this liquidity based on the trading activity experienced by this individual liquidity pool that they have selected to LP for."),(0,r.kt)("h3",{id:"impermanent-loss-il"},"Impermanent Loss (IL)"),(0,r.kt)("p",null,"A risk faced by LPs is called Impermanent loss (or divergence loss)."),(0,r.kt)("p",null,"This is the risk of the difference in value between holding tokens in an AMM liquidity pool and holding them in your wallet."),(0,r.kt)("p",null,"Liquidity pools consist of multiple tokens (usually two) paired together in a pool. IL occurs when the tokens inside the pool diverge in price. The greater the divergence, the greater the risk of negative returns for the pool's LPs."),(0,r.kt)("p",null,'The risk is referred to as "impermanent" because the loss is only realized when you withdraw your tokens from the pool. If the relative prices of tokens in the pool return to their original state when you deposited tokens, the loss is minimized or eliminated.'),(0,r.kt)("p",null,"The losses become ",(0,r.kt)("em",{parentName:"p"},"permanent")," the moment you withdraw your tokens, reducing your earnings and sometimes wiping out your entire share of profits. "),(0,r.kt)("p",null,"As such, LPs need to weigh the fees and rewards earned from being a LP versus simply holding your tokens in your wallet."))}u.isMDXComponent=!0}}]);