"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4023:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,title:"Otterize OSS Helm chart"},i=void 0,p={unversionedId:"components/otterize-chart/README",id:"components/otterize-chart/README",title:"Otterize OSS Helm chart",description:"The Otterize OSS helm chart is a chart that installs all Otterize components and supporting components together, and configures them to work with each other.",source:"@site/docs/10-components/1-otterize-chart/README.mdx",sourceDirName:"10-components/1-otterize-chart",slug:"/components/otterize-chart/",permalink:"/components/otterize-chart/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/10-components/1-otterize-chart/README.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Otterize OSS Helm chart"},sidebar:"docSidebar",previous:{title:"FAQ",permalink:"/faq/"},next:{title:"Intents operator",permalink:"/components/intents-operator/"}},l={},s=[{value:"Deployment parameters",id:"deployment-parameters",level:2},{value:"Global parameters",id:"global-parameters",level:2},{value:"Intents operator parameters",id:"intents-operator-parameters",level:2},{value:"SPIRE parameters",id:"spire-parameters",level:2},{value:"SPIRE integration operator parameters",id:"spire-integration-operator-parameters",level:2}],m={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/otterize/helm-charts/tree/main/otterize-kubernetes"},"Otterize OSS helm chart")," is a chart that installs all Otterize components and supporting components together, and configures them to work with each other.\nFor example, it configures the SPIRE Integration Operator to work with the deployed SPIRE server, and the Intents Operator to get mTLS credentials from the SPIRE Integration Operator."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"/components/network-mapper"},"network mapper")," is not deployed by this chart. You can deploy it with ",(0,a.kt)("a",{parentName:"p",href:"/components/network-mapper/helm-chart"},"its own chart"),".")),(0,a.kt)("h1",{id:"parameters"},"Parameters"),(0,a.kt)("h2",{id:"deployment-parameters"},"Deployment parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"deployment.spire")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether or not to deploy spire."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"deployment.spireIntegrationOperator")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether or not to deploy spire-integration."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"deployment.intentsOperator")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether or not to deploy intents-operator."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"))))),(0,a.kt)("h2",{id:"global-parameters"},"Global parameters"),(0,a.kt)("p",null,"These parameters are used by multiple charts, and must be kept the same for the correct functioning of the separate components.\n| Key                                    | Description                                                           | Default         |\n|----------------------------------------|-----------------------------------------------------------------------|-----------------|\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"global.spiffe.CASubject"),"              | The Subject that CA certificates should use (see below).\t             |                 |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"global.spiffe.CASubject.country"),"      | Spire's CA certificates ",(0,a.kt)("inlineCode",{parentName:"p"},"Country")," value.                              | ",(0,a.kt)("inlineCode",{parentName:"p"},'"US"'),"          |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"global.spiffe.CASubject.organization")," | Spire's CA certificates ",(0,a.kt)("inlineCode",{parentName:"p"},"Organization")," Value.                         | ",(0,a.kt)("inlineCode",{parentName:"p"},'"SPIRE"'),"       |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"global.spiffe.trustDomain"),"            | The trust domain that spire will use.\t                                | ",(0,a.kt)("inlineCode",{parentName:"p"},'"example.org"')," |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"global.spire.serverServiceName"),"       | Name of the kubernetes service that will be created for spire-server. |                 |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"global.allowGetAllResources"),"          | If defined overrides ",(0,a.kt)("inlineCode",{parentName:"p"},"allowGetAllResources")," in subcharts. Gives get, list and watch permission to watch on all resources. This is used to resolve service names when pods have owners that are custom resources. When disabled, a limited set of permissions is used that only allows access to built-in Kubernetes resources that deploy Pods and Pods themselves - Deployments, StatefulSets, DaemonSets, ReplicaSets and Services. Resolving may not be able to complete if the owning resource is not one of those.                         |                 |"),(0,a.kt)("h2",{id:"intents-operator-parameters"},"Intents operator parameters"),(0,a.kt)("p",null,"All configurable parameters of intents-operator can be configured under the alias ",(0,a.kt)("inlineCode",{parentName:"p"},"intentsOperator"),".\nFurther information about intents-operator parameters can be found ",(0,a.kt)("a",{parentName:"p",href:"../components/helm-chart"},"in the Intents Operator's helm chart"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"intentsOperator.autoGenerateTLSUsingSpireIntegration"),(0,a.kt)("td",{parentName:"tr",align:null},"Use spire-integration to create TLS cert for intents-operator."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"))))),(0,a.kt)("h2",{id:"spire-parameters"},"SPIRE parameters"),(0,a.kt)("p",null,"All configurable parameters of SPIRE can be configured under the alias ",(0,a.kt)("inlineCode",{parentName:"p"},"spire"),".\nFurther information about ",(0,a.kt)("inlineCode",{parentName:"p"},"SPIRE")," parameters can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/otterize/helm-charts/tree/main/spire"},"in SPIRE's helm chart"),"."),(0,a.kt)("h2",{id:"spire-integration-operator-parameters"},"SPIRE integration operator parameters"),(0,a.kt)("p",null,"All configurable parameters of the SPIRE integration operator can be configured under the alias ",(0,a.kt)("inlineCode",{parentName:"p"},"spireIntegrationOperator"),".\nFurther information about SPIRE integration operator parameters can be found ",(0,a.kt)("a",{parentName:"p",href:"(../components/spire-integration-operator/helm-chart)"},"in the SPIRE integration operator's chart"),"."))}c.isMDXComponent=!0}}]);