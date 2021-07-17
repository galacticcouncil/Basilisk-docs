(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[774],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(2263),o=n(3919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,l=i.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},3383:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=n(4996),c={id:"crowdloan_guide",title:"Participate in Crowdloan"},l={unversionedId:"crowdloan_guide",id:"crowdloan_guide",isDocsHomePage:!1,title:"Participate in Crowdloan",description:"This article guides you through the process of participating in the Basilisk crowdloan using the dedicated crowdloan page//loan.bsx.fi",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/crowdloan_guide.md",sourceDirName:".",slug:"/crowdloan_guide",permalink:"/fr/crowdloan_guide",editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/crowdloan_guide.md",version:"current",frontMatter:{id:"crowdloan_guide",title:"Participate in Crowdloan"},sidebar:"sidebar",previous:{title:"Basilisk Crowdloan",permalink:"/fr/basilisk_crowdloan"},next:{title:"Paracha\xeenes",permalink:"/fr/parachains"}},u=[{value:"Requirements",id:"requirements",children:[]},{value:"00 Crowdloan UI",id:"00-crowdloan-ui",children:[]},{value:"01 Select your address",id:"01-select-address",children:[]},{value:"02 Enter your KSM Contribution",id:"02-enter-ksm-contribution",children:[]},{value:"03 Submit your Contribution",id:"03-submit",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article guides you through the process of participating in the ",(0,i.kt)("a",{parentName:"p",href:"/basilisk_crowdloan"},"Basilisk crowdloan")," using the dedicated crowdloan page: ",(0,i.kt)("a",{parentName:"p",href:"https://loan.bsx.fi"},"https://loan.bsx.fi")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To participate using the dedicated crowdloan page, you need to have a ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot.js wallet")," holding the KSM tokens you want to stake."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is not possible to participate in the crowdloan using a hardware wallet. Currently, hardware wallets do not support the Kusama crowdloan module."))),(0,i.kt)("h2",{id:"00-crowdloan-ui"},"00 Crowdloan UI"),(0,i.kt)("p",null,"To access the Basilisk Crowdloan UI, navigate to ",(0,i.kt)("a",{parentName:"p",href:"https://loan.bsx.fi"},"https://loan.bsx.fi"),"."),(0,i.kt)("div",{style:{textAlign:"center",marginBottom:"2rem"}},(0,i.kt)("img",{alt:"create-account",src:(0,a.Z)("/img/crowdloan-guide/chart.png")})),(0,i.kt)("p",null,"The chart in the middle provides information about the ongoing auction for the parachain slot. The green line shows the amount of KSM tokens which have been raised by Basilisk, while the yellow line corresponds to the KSM raised by the main competitor of Basilisk. The horizontal red line demarks the beginning of the closing period of the target parachain auction. All this information is relevant for determining the amount of ",(0,i.kt)("a",{parentName:"p",href:"/basilisk_crowdloan"},"BSX awards and HDX bonus")," which you will receive for your contribution."),(0,i.kt)("h2",{id:"01-select-address"},"01 Select your address"),(0,i.kt)("p",null,"To begin, click on ",(0,i.kt)("em",{parentName:"p"},"change your account")," and select the address holding your KSM tokens."),(0,i.kt)("div",{style:{textAlign:"center",marginBottom:"2rem"}},(0,i.kt)("img",{alt:"create-account",src:(0,a.Z)("/img/crowdloan-guide/select-account.png")})),(0,i.kt)("h2",{id:"02-enter-ksm-contribution"},"02 Enter your KSM Contribution"),(0,i.kt)("p",null,"As a next step, you can enter the amount of KSM you would like to contribute. After doing so, you will see a prediction of the rewards you are going to receive:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Minimum BSX Received")," - the minimum amount of BSX tokens you can expect to receive for your contribution. The exact amount can only be determined after the crowdloan has closed in the event of a successful auction.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Current BSX Received")," - a ",(0,i.kt)("strong",{parentName:"p"},"wild")," estimate of how much you would receive under the current auction conditions. This estimate can be unreliable.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Current HDX Received")," - the amount of HDX bonus which will be received for the contribution."))),(0,i.kt)("p",null,"If you want to know more about the mechanics behind the rewards calculation, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/basilisk_crowdloan"},"Basilisk crowdloan post"),"."),(0,i.kt)("h2",{id:"03-submit"},"03 Submit your Contribution"),(0,i.kt)("p",null,"To finalize the process, click on ",(0,i.kt)("em",{parentName:"p"},"Contribute")," and sign the transaction using the account holding your KSM tokens."),(0,i.kt)("div",{style:{textAlign:"center",marginBottom:"2rem"}},(0,i.kt)("img",{alt:"create-account",src:(0,a.Z)("/img/crowdloan-guide/sign-submit.png")})))}d.isMDXComponent=!0}}]);