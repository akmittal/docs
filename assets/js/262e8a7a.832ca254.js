"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:u,values:h,groupId:k,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===u?u:null!=(t=null!=u?u:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:T}=(0,s.U)(),[N,z]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=k){const e=w[k];null!=e&&e!==N&&f.some((t=>t.value===e))&&z(e)}const _=e=>{const t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==N&&(P(t),z(a),null!=k&&T(k,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;n=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:C,onFocus:_,onClick:_},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},3186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),i=n(5162);const l={title:"Mapping pod-to-pod calls in Kubernetes"},s=void 0,c={unversionedId:"guides/k8s-mapping-pod-to-pod-calls/k8s-mapping-pod-to-pod-calls",id:"guides/k8s-mapping-pod-to-pod-calls/k8s-mapping-pod-to-pod-calls",title:"Mapping pod-to-pod calls in Kubernetes",description:"The network mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you",source:"@site/docs/3-guides/4-k8s-mapping-pod-to-pod-calls/4-k8s-mapping-pod-to-pod-calls.mdx",sourceDirName:"3-guides/4-k8s-mapping-pod-to-pod-calls",slug:"/guides/k8s-mapping-pod-to-pod-calls/",permalink:"/guides/k8s-mapping-pod-to-pod-calls/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/3-guides/4-k8s-mapping-pod-to-pod-calls/4-k8s-mapping-pod-to-pod-calls.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Mapping pod-to-pod calls in Kubernetes"},sidebar:"docSidebar",previous:{title:"Credentials",permalink:"/guides/ibac-for-k8s-kafka/credentials"},next:{title:"Kubernetes mTLS with Otterize",permalink:"/guides/k8s-mtls/"}},p={},m=[{value:"Make sure you have a Kubernetes cluster",id:"make-sure-you-have-a-kubernetes-cluster",level:2},{value:"Install the network mapper",id:"install-the-network-mapper",level:2},{value:"Install the Otterize CLI",id:"install-the-otterize-cli",level:2},{value:"Retrieving the network map",id:"retrieving-the-network-map",level:2},{value:"Choose a Kubernetes cluster and services",id:"choose-a-kubernetes-cluster-and-services",level:3},{value:"Reference lab example",id:"reference-lab-example",level:3},{value:"Deploying the reference lab",id:"deploying-the-reference-lab",level:3},{value:"Track network map changes over time",id:"track-network-map-changes-over-time",level:2},{value:"Which calls are picked up by the mapper",id:"which-calls-are-picked-up-by-the-mapper",level:2},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Design note",id:"design-note",level:2},{value:"Teardown",id:"teardown",level:3}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The network mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you\nthrough installing Otterize, mapping traffic and tracking changes."),(0,r.kt)("h2",{id:"make-sure-you-have-a-kubernetes-cluster"},"Make sure you have a Kubernetes cluster"),(0,r.kt)("p",null,"Before you start, you need to have a Kubernetes cluster. Having a cluster with a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"CNI")," that supports ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"NetworkPolicies")," isn't required for this guide, but is recommended so that your cluster works with other guides."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"include file not found: ../_common/cluster-setup.md --\x3e /home/runner/work/docs/docs/docs/3-guides/_common/cluster-setup.md")),(0,r.kt)("h2",{id:"install-the-network-mapper"},"Install the network mapper"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install network-mapper otterize/network-mapper -n otterize-system --create-namespace --wait\n")),(0,r.kt)("p",null,"You can remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"--wait")," flag if you don't want Helm to wait for all pods to be ready, and instead manually watch for all pods to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,r.kt)("h2",{id:"install-the-otterize-cli"},"Install the Otterize CLI"),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mac",label:"Mac",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Apple Silicon",label:"Apple Silicon",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LJO https://github.com/otterize/otterize-cli/releases/download/v0.1.4/otterize-cli_0.1.4_macOS_arm64.tar.gz\ntar xf otterize-cli_0.1.4_macOS_arm64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))),(0,r.kt)(i.Z,{value:"Intel 64-bit",label:"Intel 64-bit",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LJO https://github.com/otterize/otterize-cli/releases/download/v0.1.4/otterize-cli_0.1.4_macOS_x86_64.tar.gz\ntar xf otterize-cli_0.1.4_macOS_x86_64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))))),(0,r.kt)(i.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"64-bit",label:"64-bit",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell"},"Invoke-WebRequest -Uri https://github.com/otterize/otterize-cli/releases/download/v0.1.4/otterize-cli_0.1.4_Windows_x86_64.zip -OutFile otterize-cli_0.1.4_Windows_x86_64.zip\nExpand-Archive otterize-cli_0.1.4_Windows_x86_64.zip-DestinationPath .\n# optionally move to PATH\n"))),(0,r.kt)(i.Z,{value:"32-bit",label:"32-bit",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell"},"Invoke-WebRequest -Uri https://github.com/otterize/otterize-cli/releases/download/v0.1.4/otterize-cli_0.1.4_Windows_i386.zip -OutFile otterize-cli_0.1.4_Windows_i386.zip\nExpand-Archive otterize-cli_0.1.4_Windows_i386.zip-DestinationPath .\n# optionally move to PATH\n"))),(0,r.kt)(i.Z,{value:"scoop",label:"scoop",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell"},"scoop bucket add otterize-cli https://github.com/otterize/scoop-otterize-cli\nscoop update\nscoop install otterize-cli\n"))))),(0,r.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"amd64",label:"amd64",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/otterize/otterize-cli/releases/download/v0.1.4/otterize-cli_0.1.4_Linux_x86_64.tar.gz\ntar xf otterize-cli_0.1.4_Linux_x86_64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))),(0,r.kt)(i.Z,{value:"i386",label:"i386",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/otterize/otterize-cli/releases/download/v0.1.4/otterize-cli_0.1.4_Linux_i386.tar.gz\ntar xf otterize-cli_0.1.4_Linux_i386.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n")))))),(0,r.kt)("p",null,"More variants are available at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/otterize/otterize-cli/releases"},"GitHub Releases page"),"."),(0,r.kt)("h2",{id:"retrieving-the-network-map"},"Retrieving the network map"),(0,r.kt)("h3",{id:"choose-a-kubernetes-cluster-and-services"},"Choose a Kubernetes cluster and services"),(0,r.kt)("p",null,"You can use this guide with your own set of services, e.g. first in a Kubernetes cluster running dev or lab services,\nand eventually in a staging or production cluster."),(0,r.kt)("p",null,"Alternatively, you can start with services from our reference lab,\nwhich is based on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/microservices-demo"},"Google microservices demo"),"\nsimulating an e-commerce application. You'll deploy these into any Kubernetes cluster to which you have admin access.\nThe lab includes a load generator that simulates front-end user interactions, so as soon as you deploy it,\nthe various services start to call each other."),(0,r.kt)("p",null,"For the sake of illustration, we'll reference this lab example in this guide. But if you're using\nyour own services, just apply the same steps and adjust the particulars to your case."),(0,r.kt)("h3",{id:"reference-lab-example"},"Reference lab example"),(0,r.kt)("p",null,"The reference e-commerce application architecture is as follows:\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/GoogleCloudPlatform/microservices-demo/raw/main/docs/img/architecture-diagram.png",alt:"Demo e-commerce"})),(0,r.kt)("p",null,'The arrows indicate the calls which each service makes to other services. This is the traffic that will be\ngenerated by the load generator and automatically "sniffed" by the network mapper to build up the map.'),(0,r.kt)("h3",{id:"deploying-the-reference-lab"},"Deploying the reference lab"),(0,r.kt)("p",null,"Create a namespace to hold the services, and deploy them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace otterize-ecom-demo\nkubectl apply -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/microservices-demo/kubernetes-manifests.yml\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Optional: check that the lab was deployed..."),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"To see all the pods in the lab:\n```bash\nkubectl get pods -n otterize-ecom-demo\n```\nThe pods should all be ready and running:\n```bash\nNAME                                     READY   STATUS    RESTARTS   AGE\nadservice-694f4ff98-cz4nn                1/1     Running   0          23m\ncartservice-85f8bc44fd-45cbk             1/1     Running   0          23m\ncheckoutservice-8fc47bbbd-9lhfv          1/1     Running   0          23m\ncurrencyservice-597bdf576b-8hftc         1/1     Running   0          23m\nemailservice-d5c6f74dd-qlwc4             1/1     Running   0          23m\nfrontend-7ffbf49884-j9rhz                1/1     Running   0          23m\nloadgenerator-65779994db-tgdxk           1/1     Running   0          23m\npaymentservice-76b9c8b87d-ktfcd          1/1     Running   0          23m\nproductcatalogservice-6969d4f5fd-xdw99   1/1     Running   0          23m\nrecommendationservice-58798d5c8-2f4rz    1/1     Running   0          23m\nredis-cart-6f65887b5d-xwpz5              1/1     Running   0          23m\nshippingservice-ff5f4d7d-qcjw8           1/1     Running   0          23m\n```\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Once the lab is deployed, its load generator starts automatically and generates traffic that the network mapper\nwill pick up. We suggest you wait a minute or so before continuing to the next step,\nso all services will have had a chance to make their calls and the network map will be complete.")),(0,r.kt)("p",null,"You can view mapped traffic by calling the CLI ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," commands.\nThe latter supports multiple output formats, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"intents")," (client intents files) and ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),".\nThe following shows the CLI output filtered for the namespace (",(0,r.kt)("inlineCode",{parentName:"p"},"otterize-ecom-demo"),")\nof the reference lab we deployed above."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"list",label:"List",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'List the pod-to-pod network map built up ("sniffed") so far:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper list -n otterize-ecom-demo\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should see the rich network map of the reference e-commerce lab we deployed above:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cartservice in namespace otterize-ecom-demo calls:\n  - redis-cart\ncheckoutservice in namespace otterize-ecom-demo calls:\n  - cartservice\n  - currencyservice\n  - emailservice\n  - paymentservice\n  - productcatalogservice\n  - shippingservice\nfrontend in namespace otterize-ecom-demo calls:\n  - adservice\n  - cartservice\n  - checkoutservice\n  - currencyservice\n  - productcatalogservice\n  - recommendationservice\n  - shippingservice\nloadgenerator in namespace otterize-ecom-demo calls:\n  - frontend\nrecommendationservice in namespace otterize-ecom-demo calls:\n  - productcatalogservice\n"))))),(0,r.kt)(i.Z,{value:"intents",label:"Export as intents",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Export as YAML client intents (the default format) the pod-to-pod network map built up so far:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper export -n otterize-ecom-demo\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The result is a long YAML file stream that concatenates individual YAML intents documents,\none for each service that makes calls to other services:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: cartservice\n  namespace: otterize-ecom-demo\nspec:\n  service:\n    name: cartservice\n  calls:\n    - name: redis-cart\n      type: HTTP\n---\napiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: checkoutservice\n  namespace: otterize-ecom-demo\nspec:\n  service:\n    name: checkoutservice\n  calls:\n    - name: cartservice\n      type: HTTP\n    - name: currencyservice\n      type: HTTP\n    - name: emailservice\n      type: HTTP\n    - name: paymentservice\n      type: HTTP\n    - name: productcatalogservice\n      type: HTTP\n    - name: shippingservice\n      type: HTTP\n---\napiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: frontend\n  namespace: otterize-ecom-demo\nspec:\n  service:\n    name: frontend\n  calls:\n    - name: adservice\n      type: HTTP\n    - name: cartservice\n      type: HTTP\n    - name: checkoutservice\n      type: HTTP\n    - name: currencyservice\n      type: HTTP\n    - name: productcatalogservice\n      type: HTTP\n    - name: recommendationservice\n      type: HTTP\n    - name: shippingservice\n      type: HTTP\n---\napiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: loadgenerator\n  namespace: otterize-ecom-demo\nspec:\n  service:\n    name: loadgenerator\n  calls:\n    - name: frontend\n      type: HTTP\n---\napiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: recommendationservice\n  namespace: otterize-ecom-demo\nspec:\n  service:\n    name: recommendationservice\n  calls:\n    - name: productcatalogservice\n      type: HTTP\n")))),(0,r.kt)("p",null,"Note that you can also export a collection of individual YAML files, suitable for moving to the repos where their corresponding\nclient codes live, so they can be evolved along with the code. To do this, use\n",(0,r.kt)("inlineCode",{parentName:"p"},"otterize mapper export -n otterize-ecom-demo --output-type dir"))),(0,r.kt)(i.Z,{value:"json",label:"Export as JSON",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Export as JSON the pod-to-pod network map built up so far:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper export -n otterize-ecom-demo --format json\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The result shows the network map of the reference lab in JSON format:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "cartservice",\n      "namespace": "otterize-ecom-demo",\n      "creationTimestamp": null\n    },\n    "spec": {\n      "service": {\n        "name": "cartservice"\n      },\n      "calls": [\n        {\n          "type": "HTTP",\n          "name": "redis-cart"\n        }\n      ]\n    }\n  },\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "checkoutservice",\n      "namespace": "otterize-ecom-demo",\n      "creationTimestamp": null\n    },\n    "spec": {\n      "service": {\n        "name": "checkoutservice"\n      },\n      "calls": [\n        {\n          "type": "HTTP",\n          "name": "cartservice"\n        },\n        {\n          "type": "HTTP",\n          "name": "currencyservice"\n        },\n        {\n          "type": "HTTP",\n          "name": "emailservice"\n        },\n        {\n          "type": "HTTP",\n          "name": "paymentservice"\n        },\n        {\n          "type": "HTTP",\n          "name": "productcatalogservice"\n        },\n        {\n          "type": "HTTP",\n          "name": "shippingservice"\n        }\n      ]\n    }\n  },\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "frontend",\n      "namespace": "otterize-ecom-demo",\n      "creationTimestamp": null\n    },\n    "spec": {\n      "service": {\n        "name": "frontend"\n      },\n      "calls": [\n        {\n          "type": "HTTP",\n          "name": "adservice"\n        },\n        {\n          "type": "HTTP",\n          "name": "cartservice"\n        },\n        {\n          "type": "HTTP",\n          "name": "checkoutservice"\n        },\n        {\n          "type": "HTTP",\n          "name": "currencyservice"\n        },\n        {\n          "type": "HTTP",\n          "name": "productcatalogservice"\n        },\n        {\n          "type": "HTTP",\n          "name": "recommendationservice"\n        },\n        {\n          "type": "HTTP",\n          "name": "shippingservice"\n        }\n      ]\n    }\n  },\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "loadgenerator",\n      "namespace": "otterize-ecom-demo",\n      "creationTimestamp": null\n    },\n    "spec": {\n      "service": {\n        "name": "loadgenerator"\n      },\n      "calls": [\n        {\n          "type": "HTTP",\n          "name": "frontend"\n        }\n      ]\n    }\n  },\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "recommendationservice",\n      "namespace": "otterize-ecom-demo",\n      "creationTimestamp": null\n    },\n    "spec": {\n      "service": {\n        "name": "recommendationservice"\n      },\n      "calls": [\n        {\n          "type": "HTTP",\n          "name": "productcatalogservice"\n        }\n      ]\n    }\n  }\n]\n')))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For a complete list of Otterize network mapper capabilities,\nrefer to the ",(0,r.kt)("a",{parentName:"p",href:"/cli/#network-mapper"},"CLI command reference"),"."),(0,r.kt)("p",{parentName:"admonition"},"For example, we've already seen how to filter by namespace, using ",(0,r.kt)("inlineCode",{parentName:"p"},"otterize mapper list -n <namespace>"),"."),(0,r.kt)("p",{parentName:"admonition"},"You might also try to reset the network map with ",(0,r.kt)("inlineCode",{parentName:"p"},"otterize mapper reset"),", then quickly run ",(0,r.kt)("inlineCode",{parentName:"p"},"otterize mapper list"),"\nbefore the load generator runs again, and see the smaller map generated from the more limited traffic observed.")),(0,r.kt)("h2",{id:"track-network-map-changes-over-time"},"Track network map changes over time"),(0,r.kt)("p",null,'By continuing to run the network mapper, resetting if desired to clear out traffic that will no longer occur,\nand listing or exporting to files, you can track changes to the network map over time.\nWe call this process "',(0,r.kt)("strong",{parentName:"p"},"Sniff&Diff"),'".'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's save the list of the current network map into a file, that will serve as a baseline:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper list -n otterize-ecom-demo > intents-original.txt\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now let's add a new service, ",(0,r.kt)("inlineCode",{parentName:"p"},"testingservice"),", that calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," over HTTP every couple of seconds:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/network-mapper/testingservice-to-frontend-deployment.yaml\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Check that the new pod was deployed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    kubectl get pods -n otterize-ecom-demo -l app=testingservice\n")),(0,r.kt)("p",null,"You should see"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                               READY   STATUS    RESTARTS   AGE\ntestingservice-7b8cc77c67-9ksk8   1/1     Running   0          3m3s\n"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Will the network mapper pick it up? Let's wait a few seconds and list the network map now:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper list -n otterize-ecom-demo\n")),(0,r.kt)("p",{parentName:"li"},"You should now see that the list is a bit longer. It now includes calls between the testing service and the frontend:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cartservice in namespace otterize-ecom-demo calls:\n  - redis-cart\ncheckoutservice in namespace otterize-ecom-demo calls:\n  - cartservice\n  - currencyservice\n  - emailservice\n  - paymentservice\n  - productcatalogservice\n  - shippingservice\nfrontend in namespace otterize-ecom-demo calls:\n  - adservice\n  - cartservice\n  - checkoutservice\n  - currencyservice\n  - productcatalogservice\n  - recommendationservice\n  - shippingservice\nloadgenerator in namespace otterize-ecom-demo calls:\n  - frontend\nrecommendationservice in namespace otterize-ecom-demo calls:\n  - productcatalogservice\n# highlight-start\ntestingservice in namespace otterize-ecom-demo calls:\n  - frontend\n# highlight-end\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We can also compare both outputs to see the difference. Start by saving the updated list to a file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"otterize mapper list -n otterize-ecom-demo > intents-updated.txt\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now compare the original file with the updated file using:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"diff -y intents-original.txt intents-updated.txt;echo\n")),(0,r.kt)("p",{parentName:"li"},"Note the new network map entry identified on the lower right, showing the testing service calling the frontend:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cartservice in namespace otterize-ecom-demo calls:              cartservice in namespace otterize-ecom-demo calls:\n  - redis-cart                                                    - redis-cart\ncheckoutservice in namespace otterize-ecom-demo calls:          checkoutservice in namespace otterize-ecom-demo calls:\n  - cartservice                                                   - cartservice\n  - currencyservice                                               - currencyservice\n  - emailservice                                                  - emailservice\n  - paymentservice                                                - paymentservice\n  - productcatalogservice                                         - productcatalogservice\n  - shippingservice                                               - shippingservice\nfrontend in namespace otterize-ecom-demo calls:                 frontend in namespace otterize-ecom-demo calls:\n  - adservice                                                     - adservice\n  - cartservice                                                   - cartservice\n  - checkoutservice                                               - checkoutservice\n  - currencyservice                                               - currencyservice\n  - productcatalogservice                                         - productcatalogservice\n  - recommendationservice                                         - recommendationservice\n  - shippingservice                                               - shippingservice\nloadgenerator in namespace otterize-ecom-demo calls:            loadgenerator in namespace otterize-ecom-demo calls:\n  - frontend                                                      - frontend\nrecommendationservice in namespace otterize-ecom-demo calls:    recommendationservice in namespace otterize-ecom-demo calls:\n  - productcatalogservice                                         - productcatalogservice\n                                                              > testingservice in namespace otterize-ecom-demo calls:\n                                                              >   - frontend\n")))),(0,r.kt)("h2",{id:"which-calls-are-picked-up-by-the-mapper"},"Which calls are picked up by the mapper"),(0,r.kt)("p",null,"The Otterize network mapper creates a map of in-cluster traffic by observing DNS traffic as well as\nactive connections (similarly to ",(0,r.kt)("inlineCode",{parentName:"p"},"netstat"),"), tracing the IP addresses observed back to the pods that called or\nwere called, and walking up the ownership tree of each pod until reaching the root object."),(0,r.kt)("p",null,"To learn more, see the ",(0,r.kt)("a",{parentName:"p",href:"/components/network-mapper"},"network mapper detailed documentation"),"."),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"One of the outputs of the network mapper is a set of intents that reflect the observed traffic.\nThe mapper doesn't look at the types and contents of the calls, so the intents won't have granular information\nbeyond what service calls what service. But it's a pretty good way to bootstrap intents files and get\ngoing with intent-based access control."),(0,r.kt)("p",null,"Take a look at the ",(0,r.kt)("strong",{parentName:"p"},"intents")," tab in the section called ",(0,r.kt)("a",{parentName:"p",href:"#show-mapped-traffic"},"Show mapped traffic"),".\nWith these intents we can then automatically control pod-to-pod access using Kubernetes network policies:\nin other words, these intents create network policies that reflect the mapped traffic, and as you\nevolve the intents and apply them, the network policies will always reflect the intents."),(0,r.kt)("p",null,"To see this in action,\nfollow the guide for implementing ",(0,r.kt)("a",{parentName:"p",href:"/guides/k8s-ibac-via-network-policies/"},"IBAC via network policies"),".\nIt concludes with an exercise that uses your mapped traffic as initial intents files and demonstrates\nthe automatic generation of network policies to make sure only intended traffic is allowed."),(0,r.kt)("h2",{id:"design-note"},"Design note"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The network mapper is designed for situations where pods use Kubernetes DNS for service discovery.")),(0,r.kt)("h3",{id:"teardown"},"Teardown"),(0,r.kt)("p",null,"To remove the deployed resources run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace otterize-ecom-demo\n")))}u.isMDXComponent=!0}}]);