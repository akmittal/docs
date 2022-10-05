"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,title:"Configuring Kafka brokers"},i=void 0,l={unversionedId:"components/intents-operator/configuration",id:"components/intents-operator/configuration",title:"Configuring Kafka brokers",description:"The intents operator is able to create network policies with zero configuration. But in order to apply Kafka ACLs to a Kafka broker, the operator must know how to connect.",source:"@site/docs/components/intents-operator/configuration.mdx",sourceDirName:"components/intents-operator",slug:"/components/intents-operator/configuration",permalink:"/components/intents-operator/configuration",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/components/intents-operator/configuration.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Configuring Kafka brokers"},sidebar:"docSidebar",previous:{title:"Helm chart",permalink:"/components/intents-operator/helm-chart"},next:{title:"SPIRE integration operator",permalink:"/components/spire-integration-operator/"}},s={},c=[{value:"Full annotated example",id:"full-annotated-example",level:2},{value:"Service name",id:"service-name",level:3},{value:"Address (<code>addr</code>)",id:"address-addr",level:3},{value:"TLS",id:"tls",level:3},{value:"Topic scope",id:"topic-scope",level:3},{value:"Allow unauthenticated access to all topics",id:"allow-unauthenticated-access-to-all-topics",level:4},{value:"Allow authenticated access to <code>mytopic</code> (or deny all unauthenticated access)",id:"allow-authenticated-access-to-mytopic-or-deny-all-unauthenticated-access",level:4},{value:"Allow intended access to <code>mytopic-intended</code> with a <code>topic scope</code> and an <code>intent</code>",id:"allow-intended-access-to-mytopic-intended-with-a-topic-scope-and-an-intent",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The intents operator is able to create network policies with zero configuration. But in order to apply Kafka ACLs to a Kafka broker, the operator must know how to connect."),(0,r.kt)("p",null,"To tell the operator how to do so, you must create a ",(0,r.kt)("inlineCode",{parentName:"p"},"KafkaServerConfig")," resource. It is recommended to create this resource in the same namespace as the Kafka broker,\nand manage its lifespan alongside the broker. If you deploy a chart that deploys a Kafka broker, or another resource that deploys a broker, you should deploy this ",(0,r.kt)("inlineCode",{parentName:"p"},"KafkaServerConfig")," alongside those."),(0,r.kt)("p",null,"Here is an annotated example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"KafkaServerConfig"),", followed by an in-depth explanation for each section."),(0,r.kt)("h2",{id:"full-annotated-example"},"Full annotated example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: k8s.otterize.com/v1alpha1\nkind: KafkaServerConfig\nmetadata:\n  name: kafkabroker  # the name of the KafkaServerConfig resource\nspec:\n  service:\n    name: ecomm-events # the name of the Otterize service, as it would appear in ClientIntents as the destination.\n  addr: ecommevents.namespace:9092 # the address the intents operator will connect to in order to apply ACLs to this broker\n  tls: # this section informs the operator where to find the credentials to authenticate with the broker via mTLS. The values here are the defaults set by the otterize-kubernetes chart.\n    certFile: /etc/otterize-spire/svid.pem\n    keyFile: /etc/otterize-spire/key.pem\n    rootCAFile: /etc/otterize-spire/bundle.pem\n  topics: # configuration for topic scope - how ACLs should be applied to each topic or set of topics.\n    - topic: "*" # A specific topic or a prefix. Can be "*" for all.\n      pattern: prefix # Prefix or literal. Use prefix for "*".\n      clientIdentityRequired: false # Whether client identity is required. If set to true to, access by anonymous users will be denied.\n      intentsRequired: false # Whether intents are required - if set to true, all access will be denied unless intents are declared\n')),(0,r.kt)("h3",{id:"service-name"},"Service name"),(0,r.kt)("p",null,"The name of the service as it appears in ClientIntents.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\n[...]\nspec:\n[...]\n  calls:\n    - name: ecomm-events # here!\n      type: kafka\n")),(0,r.kt)("h3",{id:"address-addr"},"Address (",(0,r.kt)("inlineCode",{parentName:"h3"},"addr"),")"),(0,r.kt)("p",null,"The address the intents operator will connect to in order to apply and remove ACLs resulting from ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientIntents")," and the KafkaServerConfig's ",(0,r.kt)("inlineCode",{parentName:"p"},"topics")," section."),(0,r.kt)("h3",{id:"tls"},"TLS"),(0,r.kt)("p",null,"Where the intents operator will find credentials mounted to its pod to authenticate with the Kafka broker.\nIf using the ",(0,r.kt)("inlineCode",{parentName:"p"},"otterize-kubernetes")," chart, the values in the example above are correct."),(0,r.kt)("h3",{id:"topic-scope"},"Topic scope"),(0,r.kt)("p",null,"Using topic scope, you can gradually roll out Otterize to your Kafka cluster. Select a subset of topics to apply mTLS and/or intents to and start with those, without affecting the rest."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unauthenticated - client identity not required",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clientIdentityRequired: false\nintentsRequired: false\n"))),(0,r.kt)("li",{parentName:"ul"},"Authenticated - client identity required",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clientIdentityRequired: true\nintentsRequired: false\n"))),(0,r.kt)("li",{parentName:"ul"},"Authorized - client identity and an intent are required",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clientIdentityRequired: true\nintentsRequired: true\n")))),(0,r.kt)("p",null,"Here are example configurations for topic scope and the resulting ACLs."),(0,r.kt)("h4",{id:"allow-unauthenticated-access-to-all-topics"},"Allow unauthenticated access to all topics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Topic scope"',title:'"Topic','scope"':!0},'- topic: "*"\n  pattern: prefix\n  clientIdentityRequired: false\n  intentsRequired: false\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Kafka ACL"',title:'"Kafka','ACL"':!0},"(none)\n")),(0,r.kt)("h4",{id:"allow-authenticated-access-to-mytopic-or-deny-all-unauthenticated-access"},"Allow authenticated access to ",(0,r.kt)("inlineCode",{parentName:"h4"},"mytopic")," (or deny all unauthenticated access)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Topic scope"',title:'"Topic','scope"':!0},'- topic: "mytopic"\n  pattern: literal\n  clientIdentityRequired: true\n  intentsRequired: false\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Kafka ACL"',title:'"Kafka','ACL"':!0},"ResourcePattern(resourceType=TOPIC, name=mytopic, patternType=LITERAL), versionedAcls :\nSet(User:ANONYMOUS has DENY permission for operations: ALL from hosts: *,\n    User:* has ALLOW permission for operations: ALL from hosts: *)\n")),(0,r.kt)("h4",{id:"allow-intended-access-to-mytopic-intended-with-a-topic-scope-and-an-intent"},"Allow intended access to ",(0,r.kt)("inlineCode",{parentName:"h4"},"mytopic-intended")," with a ",(0,r.kt)("inlineCode",{parentName:"h4"},"topic scope")," and an ",(0,r.kt)("inlineCode",{parentName:"h4"},"intent")),(0,r.kt)("p",null,"Otterize generates two ACLs for this access pattern"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The topic scope will block all access to the topic at first"),(0,r.kt)("li",{parentName:"ul"},"The intent will set a specific ACL to allow the caller to access the topic")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Topic scope"',title:'"Topic','scope"':!0},'- topic: "mytopic-intended"\n  pattern: literal\n  clientIdentityRequired: true\n  intentsRequired: true\n')),(0,r.kt)("p",null,"Translates into"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Kafka ACL"',title:'"Kafka','ACL"':!0},"ResourcePattern(resourceType=TOPIC, name=mytopic-intended, patternType=LITERAL), versionedAcls :\nSet(User:ANONYMOUS has DENY permission for operations: ALL from hosts: *)\n")),(0,r.kt)("p",null,"And"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Intent"',title:'"Intent"'},"service:\n    name: interactive\n  calls:\n    - name: kafka\n      namespace: kafka\n      type: kafka\n      topics:\n        - name: mytopic-intended\n          operation: all\n")),(0,r.kt)("p",null,"Translates into"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Kafka ACL"',title:'"Kafka','ACL"':!0},"ResourcePattern(resourceType=TOPIC, name=mytopic-intended, patternType=LITERAL), versionedAcls :\nSet(User:ANONYMOUS has DENY permission for operations: ALL from hosts: *,\n    User:CN=interactive.ibac-for-kafka,O=SPIRE,C=US has ALLOW permission for operations: ALL from hosts: *)\n")),(0,r.kt)("p",null,"Both of these ACLs will enforce intended access where as - only clients that have applied intents will be able to access\nthe specific topc."))}d.isMDXComponent=!0}}]);