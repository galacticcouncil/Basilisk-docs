"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[833],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var o=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=o.createContext({}),d=function(e){var a=o.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=d(e.components);return o.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=t,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(b,i(i({ref:a},c),{},{components:n})):o.createElement(b,i({ref:a},c))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5923:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(7462),t=(n(7294),n(3905));const r={id:"basilisk_crowdloan_1",title:"Basilisk Crowdloan"},i=void 0,s={unversionedId:"basilisk_crowdloan_1",id:"basilisk_crowdloan_1",title:"Basilisk Crowdloan",description:"Detalles de Crowdloan",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/basilisk_crowdloan_1.md",sourceDirName:".",slug:"/basilisk_crowdloan_1",permalink:"/es/basilisk_crowdloan_1",draft:!1,editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/basilisk_crowdloan_1.md",tags:[],version:"current",frontMatter:{id:"basilisk_crowdloan_1",title:"Basilisk Crowdloan"},sidebar:"sidebar",previous:{title:"Writing Docs",permalink:"/es/contributing"}},l={},d=[{value:"Detalles de Crowdloan",id:"crowdloan-details",level:2},{value:"Mecanismo de recompensas",id:"rewards-mechanism",level:2},{value:"BSX Rewards",id:"bsx-rewards",level:3},{value:"HDX Bonus",id:"hdx-bonus",level:3}],c={toc:d};function u(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",(0,o.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"crowdloan-details"},"Detalles de Crowdloan"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Visita: ",(0,t.kt)("a",{parentName:"li",href:"https://loan.bsx.fi/"},"https://loan.bsx.fi/")),(0,t.kt)("li",{parentName:"ul"},"Comienza el: ",(0,t.kt)("strong",{parentName:"li"},"31 August 2021")),(0,t.kt)("li",{parentName:"ul"},"Duraci\xf3n de la Parachain: ",(0,t.kt)("strong",{parentName:"li"},"48 semanas")),(0,t.kt)("li",{parentName:"ul"},"Target parachain slot: ",(0,t.kt)("strong",{parentName:"li"},"#6 - #10")),(0,t.kt)("li",{parentName:"ul"},"Crowdloan cap: ",(0,t.kt)("strong",{parentName:"li"},"222,222 KSM")),(0,t.kt)("li",{parentName:"ul"},"Recompensas Totales de BSX : ",(0,t.kt)("strong",{parentName:"li"},"15,000,000,000 BSX")," (15% of total supply)"),(0,t.kt)("li",{parentName:"ul"},"Recompensas maxima de HDX : ",(0,t.kt)("strong",{parentName:"li"},"56,873,469 HDX")),(0,t.kt)("li",{parentName:"ul"},"Deadline o cierre del Crowdloan : 09 Octubre 2021"),(0,t.kt)("li",{parentName:"ul"},"Tiempo o Per\xedodo  de Vesting :  las recompensas en BSX y el bonus en HDX se distribuyen linealmente. La distribuci\xf3n comenzar\xe1 una vez que el evento Basilisk LBP haya concluido (~ 2 semanas despu\xe9s de que gane el slot parachain) y continuar\xe1 hasta 1 semana antes de que expire dicho slot.")),(0,t.kt)("h2",{id:"rewards-mechanism"},"Mecanismo de recompensas"),(0,t.kt)("p",null,"Todos los partidarios de la comunidad son recompensados por participar en el Crowdloan despu\xe9s de que Basilisk haya asegurado un slot parachain. Las recompensas disponibles consisten en tokens BSX y HDX que se distribuyen a una tasa diferente seg\xfan el estado del Crowdloan o en el momento de la contribuci\xf3n.\nEl mecanismo de recompensas se ha dise\xf1ado teniendo en cuenta el mejor inter\xe9s de las partes interesadas de Basilisk. El objetivo es no pagar de m\xe1s por el slot parachain, minimizando as\xed los costos de oportunidad para los patrocinadores y maximizando el potencial alcista futuro. A continuaci\xf3n, encontrar\xe1 los mecanismos de recompensas BSX y HDX explicados."),(0,t.kt)("h3",{id:"bsx-rewards"},"BSX Rewards"),(0,t.kt)("p",null,"La cantidad de recompensas BSX que recibir\xe1 cada participante solo se puede determinar al final del Crowdloan despu\xe9s de que Basilisk haya asegurado un slot parachain. El c\xe1lculo de las recompensas consta de dos pasos."),(0,t.kt)("p",null,"En primer lugar, todas las contribuciones de KSM se pesan utilizando un multiplicador de recompensas. El multiplicador tiene un ",(0,t.kt)("strong",{parentName:"p"},"valor flotante entre 1 y 0")," dependiendo del momento en el que se realiz\xf3 la contribuci\xf3n. Se aplica un multiplicador de recompensas de ",(0,t.kt)("strong",{parentName:"p"},"1.0")," a todos los KSM que se comprometieron ",(0,t.kt)("strong",{parentName:"p"},"antes de que la subasta ganadora omenzara a cerrarse (Subasta N\xb0.6 3 de septiembre alrededor de las 09:00 GMT)"),". Despu\xe9s de eso, el multiplicador comienza a disminuir linealmente hasta llegar a ",(0,t.kt)("strong",{parentName:"p"},"0 a la hora de cierre de la subasta")," (subasta N\xb0. 8 de septiembre alrededor de las 09:00 GMT). Si el KSM total comprometido no es suficiente para ganar un puesto en la subasta N\xb0.6  entonces la siguiente subasta, la N.\xb0 7, se convertira en el ",(0,t.kt)("strong",{parentName:"p"},"nuevo target"),". En consecuencia, el multiplicador para todos los KSM contribuidos durante la subasta anterior( N\xb06), se restablecer\xe1 a 1( Los contribuyentes recibir\xe1n las recompensas del Bonus en HDX completas)"),(0,t.kt)("p",null,"Una vez que se han establecido las contribuciones ponderadas de KSM mediante el procedimiento descrito anteriormente, se calcula la cantidad exacta de recompensas individuales. El monto de las recompensas se determina de acuerdo con la proporci\xf3n de la contribuci\xf3n individual ponderada en relaci\xf3n con todas las contribuciones ponderadas de KSM, como se muestra en la siguiente f\xf3rmula:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"rewards = (weighted_indivudial_contribution / total_weighted_contributions) * crowdloan_cap\n")),(0,t.kt)("p",null,"Si bien no podemos determinar la cantidad exacta de recompensas hasta que realmente se haya ganado el slot parachain, es posible calcular la cantidad m\xednima de recompensas BSX para cualquier contribuci\xf3n determinada. Esto se puede hacer bajo el supuesto de que el pr\xe9stamo colectivo lograr\xeda alcanzar su l\xedmite m\xe1ximo de 200,000 KSM y que todas las contribuciones tendr\xedan el multiplicador de recompensas m\xe1s alto de 1.0. Este, por supuesto, es un escenario muy poco probable, pero nos permite indicar en la interfaz de usuario de Crowdloan la cantidad m\xednima de tokens BSX que los contribuyentes pueden esperar a cambio de su KSM."),(0,t.kt)("h3",{id:"hdx-bonus"},"HDX Bonus"),(0,t.kt)("p",null,"Para incentivar a\xfan m\xe1s el soporte oportuno, todos los patrocinadores de pr\xe9stamos colectivos recibir\xe1n un bono HDX adicional que ",(0,t.kt)("strong",{parentName:"p"},"cubrir\xe1 entre el 5 y el 30% de los costos de oportunidad")," de su contribuci\xf3n en KSM. Para un per\xedodo de bloqueo de ~ 11 meses, estos costos de oportunidad se estiman actualmente en ",(0,t.kt)("strong",{parentName:"p"},"13.75%")," (basado en un APY del 15% para la participaci\xf3n de KSM)."),(0,t.kt)("p",null,"Tambi\xe9n aqu\xed, el porcentaje exacto de los costos de oportunidad que se cubrir\xe1n est\xe1 determinado por el estado del Crowdloan en el momento en que se realiza la contribuci\xf3n de KSM. El multiplicador de bonificaci\xf3n HDX estar\xe1 en su ",(0,t.kt)("strong",{parentName:"p"},"m\xe1ximo de 0.3"),", mientras que Basilisk se est\xe1 quedando atr\xe1s de su principal competidor por el slot. A medida que Basilisk toma la delantera sobre el competidor principal con almenos una ",(0,t.kt)("strong",{parentName:"p"},"ventaja del 15%"),", el multiplicador de bonificaci\xf3n comenzar\xe1 a disminuir linealmente hacia un ",(0,t.kt)("strong",{parentName:"p"},"m\xednimo de 0.05"),". Este m\xednimo se alcanza una vez que Basilisk lidera la carrera en un 20% o m\xe1s"),(0,t.kt)("p",null,"Teniendo en cuenta lo anterior, el monto de la bonificaci\xf3n (en KSM) para una contribuci\xf3n individual se calcula utilizando la siguiente f\xf3rmula:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"bonus_in_KSM = contributed_KSM * opportunity_costs * bonus_multiplier\n")),(0,t.kt)("p",null,"Al final, el bono se convierte a HDX utilizando el \xfaltimo precio hist\xf3rico conocido de $ 0.08059 por 1 HDX"))}u.isMDXComponent=!0}}]);