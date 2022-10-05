"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),k=n,m=d["".concat(o,".").concat(k)]||d[k]||u[k]||l;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(7462),n=a(7294),l=a(6010),s=a(2389),i=a(7392),o=a(7094),c=a(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,a;const{lazy:s,block:d,defaultValue:k,values:m,groupId:f,className:b}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:h.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),v=(0,i.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===k?k:null!=(t=null!=k?k:null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)?t:h[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:S}=(0,o.U)(),[w,x]=(0,n.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=f){const e=y[f];null!=e&&e!==w&&g.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,a=O.indexOf(t),r=g[a].value;r!==w&&(j(t),x(r),null!=f&&S(f,String(r)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=O.indexOf(e.currentTarget)+1;a=null!=(r=O[t])?r:O[0];break}case"ArrowLeft":{var n;const t=O.indexOf(e.currentTarget)-1;a=null!=(n=O[t])?n:O[O.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},g.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:I,onFocus:E,onClick:E},s,{className:(0,l.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function k(e){const t=(0,s.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},1888:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));a(5488),a(5162);const l={sidebar_position:4,title:"Credentials"},s=void 0,i={unversionedId:"guides/ibac-for-k8s-kafka/credentials",id:"guides/ibac-for-k8s-kafka/credentials",title:"Credentials",description:"The following examples reference the Kafka and client deployed in the tutorial.",source:"@site/docs/guides/ibac-for-k8s-kafka/credentials.mdx",sourceDirName:"guides/ibac-for-k8s-kafka",slug:"/guides/ibac-for-k8s-kafka/credentials",permalink:"/guides/ibac-for-k8s-kafka/credentials",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/guides/ibac-for-k8s-kafka/credentials.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Credentials"},sidebar:"docSidebar",previous:{title:"Intent-based access control for Kafka in Kubernetes",permalink:"/guides/ibac-for-k8s-kafka/"},next:{title:"Mapping pod-to-pod calls in Kubernetes",permalink:"/guides/k8s-mapping-pod-to-pod-calls/"}},o={},c=[{value:"Kafka credentials",id:"kafka-credentials",level:2},{value:"Inspecting Keystore",id:"inspecting-keystore",level:3},{value:"Inspecting Truststore",id:"inspecting-truststore",level:3},{value:"Client credentials",id:"client-credentials",level:2},{value:"Inspecting",id:"inspecting",level:3},{value:"Validating",id:"validating",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The following examples reference the Kafka and client deployed in the ",(0,n.kt)("a",{parentName:"p",href:"/quick-tutorials/kafka-mtls"},"tutorial"),"."),(0,n.kt)("h2",{id:"kafka-credentials"},"Kafka credentials"),(0,n.kt)("h3",{id:"inspecting-keystore"},"Inspecting Keystore"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Retrieve the Keystore with",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret -n kafka kafka-tls-secret -o jsonpath='{.data.kafka-keystore\\.jks}' | base64 -d > kafka-keystore.jks\n"))),(0,n.kt)("li",{parentName:"ol"},"Extract the certificate from the store",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"keytool -storepass password -keystore kafka-keystore.jks -alias pkey -exportcert -rfc > server.pem\n"))),(0,n.kt)("li",{parentName:"ol"},"Inspect it with",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 -in server.pem -text\n")),"You should see",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Certificate:\nData:\n    Version: 3 (0x2)\n    Serial Number:\n        98:e3:4b:76:8d:de:4c:c6:7d:73:41:6a:33:ee:c3:44\n    Signature Algorithm: sha256WithRSAEncryption\n    Issuer: C = US, O = SPIRE\n    Validity\n        Not Before: Sep 10 14:43:16 2022 GMT\n        Not After : Sep 10 14:43:26 2023 GMT\n    Subject: C = US, O = SPIRE, CN = kafka.kafka\n    ... truncated\n        X509v3 Subject Alternative Name:\n            DNS:kafka.kafka, DNS:kafka-0.kafka-headless.kafka.svc.cluster.local, DNS:kafka.kafka.svc.cluster.local, URI:spiffe://example.org/otterize/namespace/kafka/service/kafka \n... truncated\n")))),(0,n.kt)("h3",{id:"inspecting-truststore"},"Inspecting Truststore"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Retrieve the Truststore with",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret -n kafka kafka-tls-secret -o jsonpath='{.data.kafka\\.truststore\\.jks}' | base64 -d > kafka.truststore.jks\n"))),(0,n.kt)("li",{parentName:"ol"},"Extract the certificate from the store",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"keytool -storepass password -keystore kafka.truststore.jks -alias ca-0 -exportcert -rfc > bundle.pem\n"))),(0,n.kt)("li",{parentName:"ol"},"Inspect it with",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 -in bundle.pem -text\n")),"You should see",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Certificate:\nData:\n    Version: 3 (0x2)\n    Serial Number: 0 (0x0)\n    Signature Algorithm: sha256WithRSAEncryption\n    Issuer: C = US, O = SPIRE\n    Validity\n        Not Before: Sep  6 09:59:21 2022 GMT\n        Not After : Sep  5 09:59:31 2025 GMT\n    Subject: C = US, O = SPIRE\n... truncated\n")))),(0,n.kt)("h2",{id:"client-credentials"},"Client credentials"),(0,n.kt)("h3",{id:"inspecting"},"Inspecting"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Retrieve the client credentials with",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret -n otterize-tutorial-kafka-mtls client-credentials-secret -o jsonpath='{.data.svid\\.pem}' | base64 -d > svid.pem\n"))),(0,n.kt)("li",{parentName:"ol"},"Inspect with",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 -in svid.pem -text\n")),"You should see",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Certificate:\nData:\n    Version: 3 (0x2)\n    Serial Number:\n        e3:81:42:74:5e:c4:d8:d9:cd:97:16:72:23:2e:90:62\n    Signature Algorithm: sha256WithRSAEncryption\n    Issuer: C = US, O = SPIRE\n    Validity\n        Not Before: Sep  9 21:06:52 2022 GMT\n        Not After : Sep 10 21:07:02 2022 GMT\n    Subject: C = US, O = SPIRE, CN = client.otterize-tutorial-kafka-mtls\n    ... truncated\n        X509v3 Subject Alternative Name:\n            DNS:client.otterize-tutorial-kafka-mtls, URI:spiffe://example.org/otterize/namespace/otterize-tutorial-kafka-mtls/service/client \n... truncated\n")))),(0,n.kt)("h3",{id:"validating"},"Validating"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Retrieve the client credentials with",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret -n otterize-tutorial-kafka-mtls client-credentials-secret -o jsonpath='{.data.svid\\.pem}' | base64 -d > svid.pem\nkubectl get secret -n otterize-tutorial-kafka-mtls client-credentials-secret -o jsonpath='{.data.key\\.pem}' | base64 -d > key.pem\nkubectl get secret -n otterize-tutorial-kafka-mtls client-credentials-secret -o jsonpath='{.data.bundle\\.pem}' | base64 -d > bundle.pem\n"))),(0,n.kt)("li",{parentName:"ol"},"Validate that the key belongs to the certificate be comparing their public keys",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"openssl pkey -pubout -in key.pem  | openssl md5\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 -noout -pubkey -in svid.pem | openssl md5\n")),"If their public keys match you should see the same results for both executions, in the following format",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"(stdin)= e01e28be4e3e11a70cdebe327e1aabc9\n"))),(0,n.kt)("li",{parentName:"ol"},"Verify that the certificates belong to the bundle with",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"openssl verify -CAfile bundle.pem svid.pem\n")),"You should see",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"svid.pem: OK\n")))))}u.isMDXComponent=!0}}]);