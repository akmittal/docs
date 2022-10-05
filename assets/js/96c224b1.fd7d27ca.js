"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:8,title:"Service identities"},a=void 0,s={unversionedId:"service-identities/README",id:"service-identities/README",title:"Service identities",description:"All about service names, identities, labels, and credentials",source:"@site/docs/service-identities/README.mdx",sourceDirName:"service-identities",slug:"/service-identities/",permalink:"/service-identities/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/service-identities/README.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Service identities"},sidebar:"docSidebar",previous:{title:"Kubernetes mTLS with Otterize",permalink:"/k8s-mtls/"},next:{title:"CLI command reference",permalink:"/cli/"}},l={},c=[{value:"Pod identity resolution",id:"pod-identity-resolution",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All about service names, identities, labels, and credentials"),(0,i.kt)("h2",{id:"pod-identity-resolution"},"Pod identity resolution"),(0,i.kt)("p",null,"Client intents files use service names to refer to client and server services. How do Otterize operators decide what is\nthe name of the service that runs within the pod? The algorithm is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If the pod has an ",(0,i.kt)("inlineCode",{parentName:"li"},"otterize/service-name")," label, its value is used as the service name. This allows developers and\nautomations to explicitly name services, if needed."),(0,i.kt)("li",{parentName:"ol"},"If there is no ",(0,i.kt)("inlineCode",{parentName:"li"},"otterize/service-name")," label, a recursive look up is performed for the Kubernetes resource owner of\nthe pod, until the root resource is reached, and its name is used as the service name. For example, if you have\na ",(0,i.kt)("inlineCode",{parentName:"li"},"Deployment")," named ",(0,i.kt)("inlineCode",{parentName:"li"},"checkoutservice"),", which then creates and owns a ",(0,i.kt)("inlineCode",{parentName:"li"},"ReplicaSet"),", which then creates and owns\na ",(0,i.kt)("inlineCode",{parentName:"li"},"Pod"),", then the service name for that pod is ",(0,i.kt)("inlineCode",{parentName:"li"},"checkoutservice")," - same as the name of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Deployment"),'. This is\nintended to capture the likely-more-meaningful "human name" of the service.')),(0,i.kt)("p",null,"Pods are then labeled with values derived from service names. For example,\nthe service name is combined with the namespace of the pod and hashed to form the value of the label ",(0,i.kt)("inlineCode",{parentName:"p"},"otterize/server"),".\nThis label is then used as a selector for network policies. Another\nlabel, ",(0,i.kt)("inlineCode",{parentName:"p"},"otterize/access-server-<servicename>-<servicehash>"),", is applied to client pods which have declared their intent\nto access the server. This label is used as the selector to determine which client pods are allowed to access the server\npod."))}p.isMDXComponent=!0}}]);