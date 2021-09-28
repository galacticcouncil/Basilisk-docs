(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[467],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5877:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return a},toc:function(){return u},default:function(){return c}});var n=r(2122),i=r(9756),s=(r(7294),r(3905)),o={id:"intro",title:"Pr\xe9sentation de Basilisk",slug:"/"},a={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Pr\xe9sentation de Basilisk",description:"Bienvenue sur la page de documentation de Basilisk! Ici vous pourrez trouver une collection de ressources utiles qui vous aidera pendant votre voyage sur Basilisk. Le contenu disponible va s\u2019\xe9toffer \xe0 mesure que le projet se d\xe9veloppe, et nous promettons de faire de notre mieux pour fournir des traductions le plus rapidement possible de fa\xe7on \xe0 ce que tout le monde puisse participer.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/fr/",editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/intro.md",version:"current",frontMatter:{id:"intro",title:"Pr\xe9sentation de Basilisk",slug:"/"},sidebar:"sidebar",next:{title:"Basilisk Crowdloan",permalink:"/fr/basilisk_crowdloan"}},u=[{value:"Qu\u2019est-ce que Basilisk?",id:"what-is-basilisk",children:[]}],l={toc:u};function c(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Bienvenue sur la page de documentation de Basilisk! Ici vous pourrez trouver une collection de ressources utiles qui vous aidera pendant votre voyage sur Basilisk. Le contenu disponible va s\u2019\xe9toffer \xe0 mesure que le projet se d\xe9veloppe, et nous promettons de faire de notre mieux pour fournir des traductions le plus rapidement possible de fa\xe7on \xe0 ce que tout le monde puisse participer."),(0,s.kt)("p",null,"Avant de continuer, n\u2019oubliez pas de vous inscrire \xe0 la ",(0,s.kt)("a",{parentName:"p",href:"https://basiliskfi.substack.com"},"newsletter de Basilisk")," pour ne pas manquer de mises \xe0 jour importantes."),(0,s.kt)("h2",{id:"what-is-basilisk"},"Qu\u2019est-ce que Basilisk?"),(0,s.kt)("p",null,"Basilisk est un protocole de liquidity bootstrapping (gestion de liquidit\xe9 entre plusieurs actifs) construit pour Kusama. Sa mission est de permettre des liquidit\xe9s sans frictions pour les actifs \xe0 longue tra\xeene."),(0,s.kt)("p",null,"Le design modulaire de Basilisk permet \xe0 de nouveaux actifs crypto de g\xe9rer leur liquidit\xe9s en choisissant le model \xabAutomated Market Maker\xbb (AMM) (Faiseur de march\xe9 automatis\xe9) qu\u2019ils trouvent le mieux appropri\xe9. La premi\xe8re version arrive avec des impl\xe9mentations de pool de gestions de liquidit\xe9 (Liquidity Bootstrapping  Pool: LBP) aussi bien qu\u2019avec des pools XYK avec commandes de transactions correspondantes. Les it\xe9rations suivantes vont apporter des m\xe9caniques de d\xe9couverte des prix plus avanc\xe9es, comme des ench\xe8res ou des courbes de liaisons (bonding curves). Un march\xe9 des NFT est aussi en chemin!"),(0,s.kt)("p",null,"Basilisk est \xe9troitement li\xe9 \xe0 ",(0,s.kt)("a",{parentName:"p",href:"https://hydradx.io"},"HydraDX")," qui a d\xe9cid\xe9 de devenir le fournisseur de liquidit\xe9 principal sur le r\xe9seau Polkadot. Ensemble, Basilisk et HydraDX cr\xe9e une synergie qui r\xe9pond aux diff\xe9rents besoins de liquidit\xe9 des actifs crypto pendant leur cycle de vie complet. La gestion de liquidit\xe9 (Bootstrap liquidity) dans les premi\xe8res phases utilise le faiseur de march\xe9 automatis\xe9 (AMM) de Basilisk, puis se d\xe9place dans l\u2019Omnipool HydraDX pour d\xe9verrouiller des liquidit\xe9s inter-cha\xeenes sans pr\xe9c\xe9dent dans un oc\xe9an d\u2019actifs."))}c.isMDXComponent=!0}}]);