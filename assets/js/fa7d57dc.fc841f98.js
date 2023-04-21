"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:d,values:k,groupId:h,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),w=(0,i.l)(y,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===d?d:null!=(t=null!=d?d:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[x,T]=(0,r.useState)(b),z=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=h){const e=v[h];null!=e&&e!==x&&y.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=z.indexOf(t),a=y[n].value;a!==x&&(S(t),T(a),null!=h&&N(h,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=z.indexOf(e.currentTarget)+1;n=null!=(a=z[t])?a:z[0];break}case"ArrowLeft":{var r;const t=z.indexOf(e.currentTarget)-1;n=null!=(r=z[t])?r:z[z.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>z.push(e),onKeyDown:C,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},8591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={sidebar_position:1,title:"Network policies deep dive"},s=void 0,c={unversionedId:"reference/access-controls/network-policies/README",id:"reference/access-controls/network-policies/README",title:"Network policies deep dive",description:"Network policies are one of the tools we",source:"@site/docs/reference/access-controls/network-policies/README.mdx",sourceDirName:"reference/access-controls/network-policies",slug:"/reference/access-controls/network-policies/",permalink:"/reference/access-controls/network-policies/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/reference/access-controls/network-policies/README.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Network policies deep dive"},sidebar:"docSidebar",previous:{title:"Service identities and resolution",permalink:"/reference/service-identities/"},next:{title:"Terminology",permalink:"/reference/terminology/"}},p={},u=[{value:"Closer look at a network policy",id:"closer-look-at-a-network-policy",level:2},{value:"Setting security scope via default network policies",id:"setting-security-scope-via-default-network-policies",level:2},{value:"Default deny network policy",id:"default-deny-network-policy",level:2},{value:"Global ingress default deny policy with Calico",id:"global-ingress-default-deny-policy-with-calico",level:2},{value:"Tip: Using a global <em>egress</em> default deny policy with Calico",id:"tip-using-a-global-egress-default-deny-policy-with-calico",level:2},{value:"Working with third-party Helm charts and a default deny policy",id:"working-with-third-party-helm-charts-and-a-default-deny-policy",level:2},{value:"Auto-generating network policies for external traffic",id:"auto-generating-network-policies-for-external-traffic",level:2},{value:"How intents translate to network policies",id:"how-intents-translate-to-network-policies",level:2},{value:"Deploy example",id:"deploy-example",level:3},{value:"Track artifacts",id:"track-artifacts",level:3}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"Network policies")," are one of the tools we\ncan use for traffic shaping within K8s clusters. They allow us to shape traffic using selectors, policies, and L3\nand L4 identifiers. To enforce network policies, a Kubernetes cluster requires a CNI supporting network policies to be\ninstalled. Some popular options are Calico and Cilium."),(0,r.kt)("h2",{id:"closer-look-at-a-network-policy"},"Closer look at a network policy"),(0,r.kt)("p",null,"Let's take a look at an example showing a network policy allowing traffic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From pods labeled ",(0,r.kt)("strong",{parentName:"li"},"app:backend")," in namespaces labeled ",(0,r.kt)("strong",{parentName:"li"},"env:production"),"."),(0,r.kt)("li",{parentName:"ul"},"To pods labeled ",(0,r.kt)("strong",{parentName:"li"},"app:db")," in the namespace  ",(0,r.kt)("strong",{parentName:"li"},"production-db"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-production-backend\n  # highlight-next-line\n  namespace: production-db            # [Target filter] applies to pods in this namespace\nspec:\n  podSelector:\n    matchLabels:\n      # highlight-next-line\n      app: db                         # [Target filter] applies to pods with this label\n  policyTypes:\n    # highlight-next-line\n    - Ingress                         # [Direction] implemented as a filter on incoming connections\n  ingress:\n    - from:\n        - namespaceSelector:\n            matchLabels:\n              # highlight-next-line\n              env: production         # [Source filter] applies to namespaces with this label\n        - podSelector:\n            matchLabels:\n              # highlight-next-line\n              app: backend            # [Source filter] applies to pods with this label\n")),(0,r.kt)("h2",{id:"setting-security-scope-via-default-network-policies"},"Setting security scope via default network policies"),(0,r.kt)("p",null,"Two common approaches for working with network policies are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow all traffic between pods, protect some pods by applying ingress network policies to them."),(0,r.kt)("li",{parentName:"ul"},"Block all traffic between pods except allowed traffic by network policies.")),(0,r.kt)("p",null,"You can apply both approaches (allow/block all) within your cluster (e.g. by applying network policies based on\nnamespaces)."),(0,r.kt)("h2",{id:"default-deny-network-policy"},"Default deny network policy"),(0,r.kt)("p",null,"To block all traffic within a namespace, you can apply a default deny network policy to that namespace. After applying this policy, only traffic allowed by network policies, such as those generated automatically from ClientIntents, will be allowed within that namespace."),(0,r.kt)("p",null,"Such a policy only blocks ingress traffic, so it does not prevent pods from connecting to the Internet. Enforcement is performed at the ingress to pods. This is appropriate for achieving in-cluster service-to-service zero trust and network segmentation within a namespace."),(0,r.kt)("p",null,"Here is such a policy that you can apply to any namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-ingress\nspec:\n  podSelector: { }\n  policyTypes:\n    - Ingress\n")),(0,r.kt)("h2",{id:"global-ingress-default-deny-policy-with-calico"},"Global ingress default deny policy with Calico"),(0,r.kt)("p",null,"If using Calico as your CNI for network policies, you can deploy a global (cluster-wide, across multiple namespaces), ingress-type default deny network policy. After applying this policy, only traffic allowed by network policies, such as those generated automatically from ClientIntents, will be allowed throughout the cluster."),(0,r.kt)("p",null,"It's important to exempt Otterize and Calico and the Kubernetes infrastructure itself from this policy, so they can function correctly by receiving calls from the Kubernetes API server."),(0,r.kt)("p",null,"Such a policy only blocks ingress traffic, so it does not prevent pods from connecting to the Internet. Enforcement is performed at the ingress to pods. This is appropriate for achieving in-cluster service-to-service zero trust and network segmentation across an entire cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: projectcalico.org/v3\nkind: GlobalNetworkPolicy\nmetadata:\n  name: global-deny-ingress\nspec:\n  # highlight-next-line\n  # Exclude kube-system, calico-system, calico-apiserver and otterize-system\n  namespaceSelector: has(projectcalico.org/name) && projectcalico.org/name not in {"kube-system", "calico-system", "calico-apiserver", "otterize-system"}\n  types:\n  # highlight-next-line\n  - Ingress # Ingress-only\n')),(0,r.kt)("h2",{id:"tip-using-a-global-egress-default-deny-policy-with-calico"},"Tip: Using a global ",(0,r.kt)("em",{parentName:"h2"},"egress")," default deny policy with Calico"),(0,r.kt)("p",null,"If using Calico for network policies, you might choose to deploy a global(cluster-wide, across multiple namespaces) default ",(0,r.kt)("strong",{parentName:"p"},"egress")," deny network policy, in order to restrict egress traffic going out of the cluster. If so, it is important to exempt Otterize and Calico from this policy so that they are able to function correctly.\nAlso, note that Otterize-managed network policies only apply to traffic within the cluster."),(0,r.kt)("p",null,"To work well with an ingress default deny policy, an egress policy should not prevent traffic within the cluster ","\u2014"," the global default deny ingress policy will already block all in-cluster traffic by default, and ClientIntents will then allow intended traffic."),(0,r.kt)("p",null,"Here is an example of how you can achieve this by explicitly allowlisting certain pod IPs. You will need to substitute the appropriate IPs for your pods. This is usually part of your CNI or cluster configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: projectcalico.org/v3\nkind: GlobalNetworkPolicy\nmetadata:\n  name: default-deny-egress\nspec:\n  namespaceSelector: has(projectcalico.org/name) && projectcalico.org/name not in {"kube-system", "calico-system", "calico-apiserver"}\n  types:\n  - Egress\n  egress:\n   # Allow all namespaces to communicate to DNS pods\n  - action: Allow\n    protocol: UDP\n    destination:\n      selector: \'k8s-app == "kube-dns"\'\n      ports: ["53"]\n    # Allow all namespaces to talk to the internet on port 443\n  - action: Allow\n    protocol: TCP\n    destination:\n      nets: ["0.0.0.0/0"]\n      ports: ["443"]\n    # Allow all namespaces to talk on egress to any port inside the cluster or in the VPC.\n    # Effectively, ingress default deny would still block any intra-cluster traffic\n    # not explicitly allowed by a dedicated network policy.\n  - action: Allow\n    protocol: TCP\n    destination:\n    # highlight-start\n    # update these IP addresses to match your pods\n      nets: ["10.0.0.0/16","172.20.0.0/16"]\n    # highlight-end\n')),(0,r.kt)("h2",{id:"working-with-third-party-helm-charts-and-a-default-deny-policy"},"Working with third-party Helm charts and a default deny policy"),(0,r.kt)("p",null,"After applying a default deny policy, you will need network policies for intended traffic to go through.\nThe Otterize network mapper generates ClientIntents for your cluster, but we recommend you use ClientIntents for services that are functional clients, rather than purely operational infrastructure (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"checkoutservice")," is a client, while Prometheus is purely operational infrastructure). So you will need to enable traffic to/from such infrastructure outside of Otterize."),(0,r.kt)("p",null,"Many third-party Helm charts come with a ready-made network policy to use when deployed into a cluster that uses a default deny policy. Simply enable them using the values found in the chart."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend using these explicit network policies rather than ClientIntents, as this relieves the infrastructure or platform team in your organization from maintaining ClientIntents for infrastructure services: instead, the Helm chart will always have the most accurate infrastructural network policies.")),(0,r.kt)("h2",{id:"auto-generating-network-policies-for-external-traffic"},"Auto-generating network policies for external traffic"),(0,r.kt)("p",null,"The intents operator defaults to automatically generate network policies for Kubernetes ",(0,r.kt)("strong",{parentName:"p"},"Services")," (type ",(0,r.kt)("strong",{parentName:"p"},"LoadBalancer")," and ",(0,r.kt)("strong",{parentName:"p"},"NodePort"),"), and Ingress traffic\nwhen an intent will generate a network policy that can block external traffic. To disable this feature, consult the ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration/intents-operator"},"documentation for the intents operator"),"."),(0,r.kt)("p",null,"Let's look at an example from our demo. We have a ",(0,r.kt)("strong",{parentName:"p"},"frontend")," service being accessed from multiple sources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"loadgenerator")," calls it from within the cluster to generate traffic, by accessing the ",(0,r.kt)("strong",{parentName:"li"},"frontend")," ",(0,r.kt)("strong",{parentName:"li"},"ClusterIP Service"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"frontend-external")," is a ",(0,r.kt)("strong",{parentName:"li"},"Service")," with type ",(0,r.kt)("strong",{parentName:"li"},"LoadBalancer")," directing traffic from outside the cluster to the frontend pods. The ",(0,r.kt)("strong",{parentName:"li"},"LoadBalancer")," type means that a cloud provider load balancer will be created and point traffic from the Internet to these pods.")),(0,r.kt)("p",null,"By applying the following intents file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: loadgenerator\nspec:\n  service:\n    name: loadgenerator\n  calls:\n    - name: frontend\n")),(0,r.kt)("p",null,"Otterize will generate a network policy allowing access from the ",(0,r.kt)("strong",{parentName:"p"},"loadgenerator")," service to the ",(0,r.kt)("strong",{parentName:"p"},"frontend")," service.\nOnce a single network policy matches a pod, other traffic not allowed by existing network policies to the ",(0,r.kt)("strong",{parentName:"p"},"frontend")," will get blocked. In our\ncase that means that the ",(0,r.kt)("strong",{parentName:"p"},"frontend-external")," ",(0,r.kt)("strong",{parentName:"p"},"LoadBalancer")," won't be able to communicate with ",(0,r.kt)("strong",{parentName:"p"},"frontend"),"."),(0,r.kt)("p",null,"To overcome this, Otterize will automatically generate a network policy to allow traffic from ",(0,r.kt)("strong",{parentName:"p"},"frontend-external"),"\nto ",(0,r.kt)("strong",{parentName:"p"},"frontend")," by relying on the existence of the ",(0,r.kt)("strong",{parentName:"p"},"LoadBalancer Service")," as an indicator of intent between the two."),(0,r.kt)("p",null,"Why doesn't Otterize always generate network policies for ingress types?\nBecause if no network policies exist, automatically generating a network policy to allow ",(0,r.kt)("strong",{parentName:"p"},"frontend-external")," -> ",(0,r.kt)("strong",{parentName:"p"},"frontend"),"\nwould block existing traffic like ",(0,r.kt)("strong",{parentName:"p"},"loadgenerator")," -> ",(0,r.kt)("strong",{parentName:"p"},"frontend"),"."),(0,r.kt)("h2",{id:"how-intents-translate-to-network-policies"},"How intents translate to network policies"),(0,r.kt)("p",null,"Let's follow an example scenario and track how Otterize configures network policies when we apply intents."),(0,r.kt)("h3",{id:"deploy-example"},"Deploy example"),(0,r.kt)("p",null,"Our example consists of two pods: an HTTP server and a client that calls it."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the example YAML files"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"namespace.yaml",label:"namespace.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\n> include file not found: ../../../static/code-examples/automate-network-policies/namespace.yaml --\x3e /home/runner/work/docs/docs/docs/static/code-examples/automate-network-policies/namespace.yaml\n\n"))),(0,r.kt)(l.Z,{value:"server.yaml",label:"server.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\n> include file not found: ../../../static/code-examples/automate-network-policies/server-deployment.yaml --\x3e /home/runner/work/docs/docs/docs/static/code-examples/automate-network-policies/server-deployment.yaml\n\n---\n\n> include file not found: ../../../static/code-examples/automate-network-policies/server-service.yaml --\x3e /home/runner/work/docs/docs/docs/static/code-examples/automate-network-policies/server-service.yaml\n\n"))),(0,r.kt)(l.Z,{value:"client.yaml",label:"client.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\n> include file not found: ../../../static/code-examples/automate-network-policies/client-deployment.yaml --\x3e /home/runner/work/docs/docs/docs/static/code-examples/automate-network-policies/client-deployment.yaml\n\n"))))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy the ",(0,r.kt)("strong",{parentName:"p"},"client")," and ",(0,r.kt)("strong",{parentName:"p"},"server")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://docs.otterize.com/code-examples/automate-network-policies/all.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check that the ",(0,r.kt)("strong",{parentName:"p"},"client")," and ",(0,r.kt)("strong",{parentName:"p"},"server")," pods were deployed:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-npol\n")),(0,r.kt)("p",{parentName:"li"},"You should see:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-5689997b5c-grlnt   1/1     Running   0          35s\nserver-6698c58cbc-v9n9b   1/1     Running   0          34s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"client")," intents to call the server are declared with this ",(0,r.kt)("inlineCode",{parentName:"p"},"intents.yaml")," file:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\n> include file not found: ../../../static/code-examples/automate-network-policies/intents.yaml --\x3e /home/runner/work/docs/docs/docs/static/code-examples/automate-network-policies/intents.yaml\n\n")),(0,r.kt)("p",null,"   Let's apply it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://docs.otterize.com/code-examples/automate-network-policies/intents.yaml\n")),(0,r.kt)("h3",{id:"track-artifacts"},"Track artifacts"),(0,r.kt)("p",null,"After applying the intents file Otterize performed multiple actions to allow access from the client to the server using network policies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a network policy allowing traffic from the ","[client, namespace -labeled]"," pods to ","[server-labeled]"," pods"),(0,r.kt)("li",{parentName:"ul"},"Label the client pods"),(0,r.kt)("li",{parentName:"ul"},"Label the client pod namespaces"),(0,r.kt)("li",{parentName:"ul"},"Label the server pods")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's look at the generated network policy:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe networkpolicies -n otterize-tutorial-npol access-to-server-from-otterize-tutorial-npol\n")),(0,r.kt)("p",{parentName:"li"},"You should see (without the comments):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Name:         access-to-server-from-otterize-tutorial-npol\n# [Target filter] namespace\n# highlight-next-line\nNamespace:    otterize-tutorial-npol\nCreated on:   2022-09-08 19:12:24 +0300 IDT\nLabels:       intents.otterize.com/network-policy=true\nAnnotations:  <none>\nSpec:\n  # [Target filter] pods with this label\n  # highlight-next-line\n  PodSelector:     intents.otterize.com/server=server-otterize-tutorial-np-7e16db\n  Allowing ingress traffic:\n    To Port: <any> (traffic allowed to all ports)\n    From:\n      # [Source filter] namespaces with this label\n      # highlight-next-line\n      NamespaceSelector: intents.otterize.com/namespace-name=otterize-tutorial-npol\n      # [Source filter] pods with this label\n      # highlight-next-line\n      PodSelector: intents.otterize.com/access-server-otterize-tutorial-np-7e16db=true\n  Not affecting egress traffic\n  # [Direction]\n  # highlight-next-line\n  Policy Types: Ingress\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"And we can also see that the client and server pods are now labeled:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-npol --show-labels\n")),(0,r.kt)("p",{parentName:"li"},"You should see:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                      READY   STATUS    RESTARTS   AGE     LABELS\nclient-5cb67b748-l25vg    1/1     Running   0          7m57s   intents.otterize.com/access-server-otterize-tutorial-np-7e16db=true,intents.otterize.com/client=true,intents.otterize.com/server=client-otterize-tutorial-np-699302,pod-template-hash=5cb67b748,credentials-operator.otterize.com/service-name=client\nserver-564b56f596-54str   1/1     Running   0          7m56s   intents.otterize.com/server=server-otterize-tutorial-np-7e16db,pod-template-hash=564b56f596,credentials-operator.otterize.com/service-name=server\n")),(0,r.kt)("p",{parentName:"li"},"When we break down the label structure we can see:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the server - ",(0,r.kt)("span",{style:{color:"gray"}},"intents.otterize.com/server"),"=",(0,r.kt)("span",{style:{color:"magenta"}},"server"),"-",(0,r.kt)("span",{style:{color:"red"}},"otterize-tutorial-np"),"-",(0,r.kt)("span",{style:{color:"green"}},"7e16db"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{style:{color:"gray"}},"intents.otterize.com/server")," - Label prefix for servers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{style:{color:"magenta"}},"server")," - Server pod name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{style:{color:"red"}},"otterize-tutorial-np")," - Server pod namespace (might be truncated)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{style:{color:"green"}},"7e16db")," - Hash for server pod name and and namespace"))),(0,r.kt)("li",{parentName:"ul"},"For the client - ",(0,r.kt)("span",{style:{color:"gray"}},"intents.otterize.com/access"),"-",(0,r.kt)("span",{style:{color:"magenta"}},"server"),"-",(0,r.kt)("span",{style:{color:"red"}},"otterize-tutorial-np"),"-",(0,r.kt)("span",{style:{color:"green"}},"7e16db"),"=true",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{style:{color:"gray"}},"intents.otterize.com/access")," - Label prefix for clients"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{style:{color:"magenta"}},"server")," - Server pod name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{style:{color:"red"}},"otterize-tutorial-np")," - Server pod namespace (might be truncated)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{style:{color:"green"}},"7e16db")," - Hash for server pod name and and namespace")))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Finally, let's look at the namespace label with:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get namespace otterize-tutorial-npol --show-labels\n")),"  You should see:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                     STATUS   AGE   LABELS\notterize-tutorial-npol   Active   36s   intents.otterize.com/namespace-name=otterize-tutorial-npol,kubernetes.io/metadata.name=otterize-tutorial-npol\n")),"  With the new label added by Otterize - ",(0,r.kt)("strong",{parentName:"li"},"intents.otterize.com/namespace-name=otterize-tutorial-npol"))))}d.isMDXComponent=!0}}]);