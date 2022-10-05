"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3,title:"SPIRE integration operator"},o=void 0,l={unversionedId:"components/spire-integration-operator/README",id:"components/spire-integration-operator/README",title:"SPIRE integration operator",description:"The Otterize SPIRE Integration Operator automatically resolves pods to dev-friendly service names, registers them with a SPIRE server, and optionally provisions credentials as a Kubernetes Secrets.",source:"@site/docs/components/spire-integration-operator/README.mdx",sourceDirName:"components/spire-integration-operator",slug:"/components/spire-integration-operator/",permalink:"/components/spire-integration-operator/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/components/spire-integration-operator/README.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"SPIRE integration operator"},sidebar:"docSidebar",previous:{title:"Configuring Kafka brokers",permalink:"/components/intents-operator/configuration"},next:{title:"Helm chart",permalink:"/components/spire-integration-operator/helm-chart"}},s={},p=[{value:"Deploying the SPIRE integration operator",id:"deploying-the-spire-integration-operator",level:2},{value:"Acquiring mTLS credentials using the SPIRE integration operator",id:"acquiring-mtls-credentials-using-the-spire-integration-operator",level:2},{value:"Pod annotations",id:"pod-annotations",level:3},{value:"How does the SPIRE integration operator work?",id:"how-does-the-spire-integration-operator-work",level:2},{value:"SPIRE entry registration",id:"spire-entry-registration",level:3},{value:"Credential generation",id:"credential-generation",level:3},{value:"Service name resolution and automatic pod labeling",id:"service-name-resolution-and-automatic-pod-labeling",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Otterize SPIRE Integration Operator automatically resolves pods to dev-friendly service names, registers them with a SPIRE server, and optionally provisions credentials as a Kubernetes Secrets."),(0,a.kt)("h2",{id:"deploying-the-spire-integration-operator"},"Deploying the SPIRE integration operator"),(0,a.kt)("p",null,"To deploy the operator, ",(0,a.kt)("a",{parentName:"p",href:"helm-chart"},"use the Helm chart"),"."),(0,a.kt)("h2",{id:"acquiring-mtls-credentials-using-the-spire-integration-operator"},"Acquiring mTLS credentials using the SPIRE integration operator"),(0,a.kt)("p",null,"The SPIRE integration operator is controlled using annotations placed on pods. The operator automatically registers pods with SPIRE. To also have it create credentials, you must specify ",(0,a.kt)("inlineCode",{parentName:"p"},"spire-integration.otterize.com/tls-secret-name"),". "),(0,a.kt)("h3",{id:"pod-annotations"},"Pod annotations"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Annotation"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spire-integration.otterize.com/tls-secret-name")),(0,a.kt)("td",{parentName:"tr",align:null},"If set, the operator will create a secret with this name with mTLS credentials for this pod."),(0,a.kt)("td",{parentName:"tr",align:null},"N/A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spire-integration.otterize.com/dns-names")),(0,a.kt)("td",{parentName:"tr",align:null},"If set, overrides the list of subject alternative names in the certificate. Should include the hostname of Kubernetes services that will be used to access this pod."),(0,a.kt)("td",{parentName:"tr",align:null},"N/A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spire-integration.otterize.com/cert-ttl")),(0,a.kt)("td",{parentName:"tr",align:null},"Override for the expiration time for the certificate in seconds."),(0,a.kt)("td",{parentName:"tr",align:null},"If deployed with the bundled SPIRE server, 1 day (86400).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spire-integration.otterize.com/cert-type")),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the credential bundle - ",(0,a.kt)("inlineCode",{parentName:"td"},"pem")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"jks"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pem"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spire-integration.otterize.com/svid-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Certificate (SVID) key name in the secret. When mounted, this is the filename for the certificate. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"pem"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"svid.pem"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spire-integration.otterize.com/bundle-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Bundle (certificate chain bundle) key name in the secret. When mounted, this is the filename for the certificate chain. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"pem"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bundle.pem"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spire-integration.otterize.com/key-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Private key key name in the secret. When mounted, this is the filename for the private key. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"pem"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"key.pem"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spire-integration.otterize.com/keystore-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Keystore key name in the secret. When mounted, this is the filename for the keystore. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"jks"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"keystore.jks"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spire-integration.otterize.com/truststore-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Truststore key name in the secret. When mounted, this is the filename for the truststore. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"jks"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"truststore.jks"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spire-integration.otterize.com/jks-password")),(0,a.kt)("td",{parentName:"tr",align:null},"Password for the JKS truststore and keystore. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"jks"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"password"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"intents.otterize.com/service-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Otterize-wide override for this service's name. Used by the operator when registering the service with SPIRE and generating credentials."),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"/service-identities"},"Service identities"))))),(0,a.kt)("h2",{id:"how-does-the-spire-integration-operator-work"},"How does the SPIRE integration operator work?"),(0,a.kt)("h3",{id:"spire-entry-registration"},"SPIRE entry registration"),(0,a.kt)("p",null,"Once the operator ",(0,a.kt)("a",{parentName:"p",href:"#service-name-resolution-and-automatic-pod-labeling"},"resolves the service name")," for a pod, it labels the pod and registers an entry with the SPIRE server."),(0,a.kt)("h3",{id:"credential-generation"},"Credential generation"),(0,a.kt)("p",null,"After the operator has registered the pod, which happens automatically upon startup, the pod can use the SPIRE Workload API to generate credentials for the SVID ",(0,a.kt)("inlineCode",{parentName:"p"},"<servicename>.<namespace>"),"."),(0,a.kt)("p",null,"Additionally, the operator consults the label ",(0,a.kt)("inlineCode",{parentName:"p"},"spire-integration.otterize.com/tls-secret-name"),". If that label exists, the operator creates a secret named after the value of the label with X.509 credentials within (a SPIRE SVID). This way, the pod can get autogenerated credentials without modifying its code."),(0,a.kt)("p",null,"For more information, see the docs."),(0,a.kt)("h3",{id:"service-name-resolution-and-automatic-pod-labeling"},"Service name resolution and automatic pod labeling"),(0,a.kt)("p",null,"Service name resolution is performed one of two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If an ",(0,a.kt)("inlineCode",{parentName:"li"},"intents.otterize.com/service-name")," annotation is present, that name is used."),(0,a.kt)("li",{parentName:"ol"},"If not, a recursive look up is performed for the Kubernetes resource owner for a Pod until the root is reached. For example, if you have a ",(0,a.kt)("inlineCode",{parentName:"li"},"Deployment")," named ",(0,a.kt)("inlineCode",{parentName:"li"},"client"),", which then creates and owns a ",(0,a.kt)("inlineCode",{parentName:"li"},"ReplicaSet"),", which then creates and owns a ",(0,a.kt)("inlineCode",{parentName:"li"},"Pod"),", then the service name for that pod is ",(0,a.kt)("inlineCode",{parentName:"li"},"client")," - same as the name of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Deployment"),".")),(0,a.kt)("p",null,"The value resulting from this process forms the value of the label ",(0,a.kt)("inlineCode",{parentName:"p"},"spire-integration.otterize.com/service-name"),"."))}m.isMDXComponent=!0}}]);