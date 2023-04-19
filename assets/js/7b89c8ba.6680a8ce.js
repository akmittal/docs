"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),l=a(7294),o=a(6010),i=a(2389),r=a(7392),s=a(7094),c=a(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a;const{lazy:i,block:d,defaultValue:m,values:k,groupId:h,className:f}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,r.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[C,T]=(0,l.useState)(w),z=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=h){const e=y[h];null!=e&&e!==C&&b.some((t=>t.value===e))&&T(e)}const K=e=>{const t=e.currentTarget,a=z.indexOf(t),n=b[a].value;n!==C&&(S(t),T(n),null!=h&&N(h,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=z.indexOf(e.currentTarget)+1;a=null!=(n=z[t])?n:z[0];break}case"ArrowLeft":{var l;const t=z.indexOf(e.currentTarget)-1;a=null!=(l=z[t])?l:z[z.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},b.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>z.push(e),onKeyDown:I,onFocus:K,onClick:K},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),i?(0,l.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,i.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},2502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),o=(a(814),a(5488)),i=a(5162);const r={sidebar_position:3,title:"Visual tutorial: IBAC for Kafka in Kubernetes",sidebar_label:"IBAC for Kafka in Kubernetes"},s=void 0,c={unversionedId:"quick-visual-tutorials/visual-ibac-kafka-k8s",id:"quick-visual-tutorials/visual-ibac-kafka-k8s",title:"Visual tutorial: IBAC for Kafka in Kubernetes",description:"This tutorial focuses on intent-based access control (IBAC) for Kafka, specifically for a Kafka broker and its clients running within a Kubernetes cluster.",source:"@site/docs/quick-visual-tutorials/visual-ibac-kafka-k8s.mdx",sourceDirName:"quick-visual-tutorials",slug:"/quick-visual-tutorials/visual-ibac-kafka-k8s",permalink:"/quick-visual-tutorials/visual-ibac-kafka-k8s",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/quick-visual-tutorials/visual-ibac-kafka-k8s.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Visual tutorial: IBAC for Kafka in Kubernetes",sidebar_label:"IBAC for Kafka in Kubernetes"},sidebar:"docSidebar",previous:{title:"IBAC with network policies",permalink:"/quick-visual-tutorials/visual-ibac-network-policies"},next:{title:"IBAC with Istio authorization policies",permalink:"/quick-visual-tutorials/visual-ibac-istio-authorization-policies"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup the demo",id:"setup-the-demo",level:2},{value:"Deploy the demo set of services",id:"deploy-the-demo-set-of-services",level:3},{value:"Apply pod-to-pod-level intents",id:"apply-pod-to-pod-level-intents",level:3},{value:"Seeing the deployed demo",id:"seeing-the-deployed-demo",level:3},{value:"Manage Kafka access with Otterize",id:"manage-kafka-access-with-otterize",level:2},{value:"Declare Kafka intents",id:"declare-kafka-intents",level:2},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This tutorial focuses on intent-based access control (IBAC) for Kafka, specifically for a Kafka broker and its clients running within a Kubernetes cluster."),(0,l.kt)("p",null,"Otterize OSS configures access controls automatically, based on declared ",(0,l.kt)("em",{parentName:"p"},"client")," intents, as we'll now see."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("a",{parentName:"li",href:"/quick-visual-tutorials/visual-ibac-network-policies"},"previous tutorial"),", we rolled out IBAC by declaring intents for pods to call each other. Otterize OSS automatically configured Kubernetes network policies to enable access based on those intents and block any undeclared access."),(0,l.kt)("li",{parentName:"ul"},"In this tutorial, we add fine-grained, topic- and operation-level intents to the existing pod-to-pod intents. Otterize OSS automatically configures Kafka ACLs, and issues and distributes certificates to Kafka clients, so they can authenticate via mTLS and perform those operations on those topics, while everything undeclared is blocked."),(0,l.kt)("li",{parentName:"ul"},"Otterize Cloud again enriches these capabilities with a visual access graph, displaying a unified view of topic- and operation-level access and protection, and client identity certificate information."),(0,l.kt)("li",{parentName:"ul"},"Otterize Cloud also provides a pre-configured certificate credentials service you may use instead of running one (e.g. SPIRE) in your cluster.")),(0,l.kt)("p",null,"In this tutorial, we will:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start where the previous tutorial left off: with a demo based on the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/GoogleCloudPlatform/microservices-demo"},"Google microservices demo"),"\n(a simple e-commerce application) deployed to a Kubernetes cluster, with Otterize OSS installed and integrated with Otterize Cloud."),(0,l.kt)("li",{parentName:"ul"},"Add fine-grained, topic-level intents and see how access to operations on Kafka topics is automatically managed.")),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"You'll need a Kubernetes cluster, an Otterize Cloud account, and of course to install Otterize OSS in your cluster."),(0,l.kt)("p",null,"If you've gone through other tutorials, you may already have an Otterize Cloud account, and have Otterize OSS installed in your cluster. But if it's installed without enforcement active (\"shadow mode\"), you'll want to follow the instructions below to reinstall it with active enforcement."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Prepare a cluster"),(0,l.kt)("p",null,"Before you start, you'll need a Kubernetes cluster."),(0,l.kt)("p",null,"You won't actually need ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"network policies")," in this tutorial,\nso you can follow the steps below while skipping the network policies (CNI) enablement bits, or keep them as is."),(0,l.kt)("p",null,"Below are instructions for setting up a Kubernetes cluster with network policies.\nIf you don't have a cluster already, we recommend starting out with a Minikube cluster."),(0,l.kt)(o.Z,{groupId:"cni",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},(0,l.kt)("p",null,"If you don't have the Minikube CLI, first ",(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"install it"),". "),(0,l.kt)("p",null,"Then start your Minikube cluster with Calico, in order to enforce network policies."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --network-plugin=cni --cni=calico\n"))),(0,l.kt)(i.Z,{value:"gke",label:"Google GKE",mdxType:"TabItem"},(0,l.kt)("a",{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#gcloud"},"Visit the official documentation"),", or follow the instructions below:",(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"cli",label:"gcloud CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"To use the gcloud CLI for this tutorial, first ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"install")," and then\n",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/initializing"},"initialize")," it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,l.kt)("p",null,"Run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters create CLUSTER_NAME --enable-network-policy --zone=ZONE\n")),(0,l.kt)("p",null,"(Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the new cluster and ",(0,l.kt)("inlineCode",{parentName:"p"},"ZONE")," with your zone.)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster, perform the following tasks:"))),(0,l.kt)("p",null,"Run the following command to enable the add-on:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters update CLUSTER_NAME --update-addons=NetworkPolicy=ENABLED\n")),(0,l.kt)("p",null,"(Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the cluster.)"),(0,l.kt)("p",null,"Then enable network policy enforcement on your cluster, re-creating your cluster's node pools with network policy enforcement enabled:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters update CLUSTER_NAME --enable-network-policy\n")),(0,l.kt)("p",null,"(Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the cluster.)")),(0,l.kt)(i.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console.\nThe remaining steps will appear automatically in the Google Cloud console.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the Google Kubernetes Engine page, click Create.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure your cluster as desired.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the navigation pane, under Cluster, click Networking.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Create."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console. The remaining steps will appear automatically in the Google Cloud console.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the cluster list, click the name of the cluster you want to modify.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Under Networking, in the Network policy field, click Edit network policy.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for master and click Save Changes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Wait for your changes to apply, and then click Edit network policy again.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for nodes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Save Changes.")))))),(0,l.kt)(i.Z,{value:"eks",label:"AWS EKS",mdxType:"TabItem"},(0,l.kt)("a",{href:"https://docs.aws.amazon.com/eks/latest/userguide/calico.html"},"Visit the official documentation"),", or follow the instructions below:",(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Spin up an ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"EKS cluster")," using the console, AWS CLI or ",(0,l.kt)("inlineCode",{parentName:"li"},"eksctl"),"."),(0,l.kt)("li",{parentName:"ol"},"Install Calico for network policy enforcement, without replacing the CNI:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.12.6/config/master/calico-operator.yaml\nkubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.12.6/config/master/calico-crs.yaml\n"))),(0,l.kt)(i.Z,{value:"aks",label:"Azure AKS",mdxType:"TabItem"},(0,l.kt)("p",null,"You can set up an AKS cluster using this ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli"},"guide"),"."),(0,l.kt)("p",null,"For network policy support, no setup is required: Azure AKS comes with a built-in network policy implementation called Azure Network Policy Manager. You can choose whether you'd like to use this option or Calico when you create a cluster."),(0,l.kt)("a",{href:"https://learn.microsoft.com/en-us/azure/aks/use-network-policies"}," Read more at the official documentation site"),"."))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Create an Otterize Cloud account"),(0,l.kt)("p",null,"If you don't already have an account, browse to ",(0,l.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"https://app.otterize.com")," to set one up."),(0,l.kt)("p",null,"If someone in your team has already created an org in Otterize Cloud, and invited you (using your email address), you may see an invitation to accept."),(0,l.kt)("p",null,"Otherwise, you'll create a new org, which you can later rename, and invite your teammates to join you there.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Install Otterize OSS ",(0,l.kt)("b",null,"with enforcement active")),(0,l.kt)("p",null,'If no Kubernetes clusters are connected to your account, click the "connect your cluster" button to:'),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a Cloud cluster object, specifying its name and the name of an environment to which all namespaces in that cluster will belong, by default."),(0,l.kt)("li",{parentName:"ol"},'Connect it with your actual Kubernetes cluster, by clicking on the "Connection guide ',"\u2192",'" link and running the Helm commands shown there.',(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Follow the instructions to install Otterize ",(0,l.kt)("b",null,"with enforcement on")," (not in shadow mode) for this tutorial. In other words, ",(0,l.kt)("b",null,"omit")," the following flag in the Helm command: ",(0,l.kt)("inlineCode",{parentName:"li"},"--set intentsOperator.operator.enableEnforcement=false"))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"More details, if you're curious"),(0,l.kt)("p",null,"Connecting your cluster simply entails installing Otterize OSS via Helm, using credentials from your account so Otterize OSS can report information needed to visualize the cluster."),(0,l.kt)("p",null,"The credentials will already be inlined into the Helm command shown in the Cloud UI, so you just need to copy that line and run it from your shell.\nIf you don't give it the Cloud credentials, Otterize OSS will run fully standalone in your cluster ","\u2014"," you just won't have the visualization in Otterize Cloud."),(0,l.kt)("p",null,'The Helm command shown in the Cloud UI also includes flags to turn off enforcement: Otterize OSS will be running in "shadow mode," meaning that it will show you what ',(0,l.kt)("strong",{parentName:"p"},"would")," happen if it were to create/update your access controls (Kubernetes network policies, Kafka ACLs, Istio authorization policies, etc.). While that's useful for gradually rolling out IBAC, for this tutorial we go straight to active enforcement."))),(0,l.kt)("h2",{id:"setup-the-demo"},"Setup the demo"),(0,l.kt)("h3",{id:"deploy-the-demo-set-of-services"},"Deploy the demo set of services"),(0,l.kt)("p",null,"We'll deploy the same demo set of services, based on the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/microservices-demo"},"Google microservices demo")," e-commerce application, into a Kubernetes cluster."),(0,l.kt)("p",null,"But in this tutorial, we'll deploy them a bit differently, as we'll want to add certificates to each, for use in mTLS authentication to Kafka."),(0,l.kt)("p",null,"For the Kafka service, we'll use Bitnami's ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/kafka"},"Helm chart")," configured to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Recognize the Otterize intents operator as a super user so it can configure ACLs;"),(0,l.kt)("li",{parentName:"ul"},"Use TLS (Kafka calls it SSL) for its listeners;"),(0,l.kt)("li",{parentName:"ul"},"Tell the Otterize credentials operator, via pod annotations, how credentials should be created; and"),(0,l.kt)("li",{parentName:"ul"},"Authenticate clients using mTLS credentials provided as a Kubernetes secret")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expand to see the Helm values.yaml used with the Bitnami chart"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# Configure Otterize as a super user to grant it access to configure ACLs\nsuperUsers: "User:CN=kafka.kafka,O=SPIRE,C=US;User:CN=intents-operator-controller-manager.otterize,O=SPIRE,C=US"\n# Use TLS for the Kafka listeners (Kafka calls them SSL)\nlisteners:\n  - "CLIENT://:9092"\n  - "INTERNAL://:9093"\nadvertisedListeners:\n  - "CLIENT://:9092"\n  - "INTERNAL://:9093"\nlistenerSecurityProtocolMap: "INTERNAL:SSL,CLIENT:SSL"\n# For a gradual rollout scenario we will want to keep the default permission for topics as allowed, unless an ACL was set\nallowEveryoneIfNoAclFound: true\n# Annotations for Otterize to generate credentials\npodAnnotations:\n  credentials-operator.otterize.com/cert-type: jks\n  credentials-operator.otterize.com/tls-secret-name: kafka-tls-secret\n  credentials-operator.otterize.com/truststore-file-name: kafka.truststore.jks\n  credentials-operator.otterize.com/keystore-file-name: kafka.keystore.jks\n  credentials-operator.otterize.com/dns-names: "kafka-0.kafka-headless.kafka.svc.cluster.local,kafka.kafka.svc.cluster.local"\n# Authenticate clients using mTLS\nauth:\n  clientProtocol: mtls\n  interBrokerProtocol: mtls\n  tls:\n    type: jks\n    existingSecrets:\n      - kafka-tls-secret\n    password: password\nauthorizerClassName: kafka.security.authorizer.AclAuthorizer\n# Allocate resources\nresources:\n  requests:\n    cpu: 50m\n    memory: 256Mi\n'))),(0,l.kt)("p",null,"Clients will authenticate to Kafka using mTLS. Otterize makes this easy, requiring just 3 simple changes to the client pod spec:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Generate credentials"),": add the ",(0,l.kt)("inlineCode",{parentName:"li"},"credentials-operator.otterize.com/tls-secret-name")," annotation, which tells Otterize to generate mTLS credentials and store them in a Kubernetes secret whose name is the value of this annotation."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Expose credentials in a volume"),": add a volume containing this secret to the pod."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Mount the volume"),": mount the volume in every container in the pod.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expand to see this structure"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  template:\n    metadata:\n      annotations:\n        # highlight-next-line\n        # 1. Generate credentials as a secret called "client-credentials-secret":\n        credentials-operator.otterize.com/tls-secret-name: client-credentials-secret\n        ...\n    spec:\n      volumes:\n        # highlight-start\n        # 2. Create a volume containing this secret:\n        - name: otterize-credentials\n          secret:\n            secretName: client-credentials-secret\n        # highlight-end\n        ...\n      containers:\n        - name: client\n          ...\n          volumeMounts:\n            # highlight-start\n            # 3. Mount volume into container\n            - name: otterize-credentials\n              mountPath: /var/otterize/credentials\n              readOnly: true\n            # highlight-end\n'))),(0,l.kt)("p",null,"To deploy the demo services into your cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace otterize-ecom-kafka-demo\nkubectl apply -n otterize-ecom-kafka-demo -f https://docs.otterize.com/code-examples/shadow-mode/ecom-demo-mtls.yaml\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Optional: check that the demo was deployed"),(0,l.kt)("p",null,"To see all the pods in the demo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-ecom-kafka-demo\n")),(0,l.kt)("p",null,"The pods should all be ready and running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                     READY   STATUS    RESTARTS      AGE\nadservice-65494cbb9d-5lrv6               1/1     Running   0             115s\ncartservice-6d84fc45bb-hdtwn             1/1     Running   0             115s\ncheckoutservice-5599486df-dvj9n          1/1     Running   3 (79s ago)   115s\ncurrencyservice-6d64686d74-lxb7x         1/1     Running   0             115s\nemailservice-7c6cbfbbd7-xjxlt            1/1     Running   0             115s\nfrontend-f9448d7d4-6dmnr                 1/1     Running   0             115s\nkafka-0                                  1/1     Running   2 (83s ago)   115s\nloadgenerator-7f6987f59-bchgm            1/1     Running   0             114s\norderservice-7ffdbf6df-wzzfd             1/1     Running   0             115s\notterize-ecom-kafka-demo-zookeeper-0           1/1     Running   0             115s\npaymentservice-86855d78db-zjjfn          1/1     Running   0             115s\nproductcatalogservice-5944c7f666-2rjc6   1/1     Running   0             115s\nrecommendationservice-6c8d848498-zm2rm   1/1     Running   0             114s\nredis-cart-6b79c5b497-xpms2              1/1     Running   0             115s\nshippingservice-85694cb9bd-v54xp         1/1     Running   0             114s\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Optional: browse the demo"),(0,l.kt)(o.Z,{groupId:"frontend-addr",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"k8s",label:"K8s",mdxType:"TabItem"},(0,l.kt)("p",null,"To get the externally-accessible URL where your demo front end is available, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get service -n otterize-ecom-kafka-demo frontend-external | awk '{print $4}'\n")),(0,l.kt)("p",null,"The result should be similar to (if running on AWS EKS):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"a11843075fd254f8099a986467098647-1889474685.us-east-1.elb.amazonaws.com\n")),(0,l.kt)("p",null,'Go ahead and browse to the URL above to "shop" and get a feel for the demo\'s behavior.\n(The URL might take some time to populate across DNS servers. Note that we are accessing an HTTP and not an HTTPS website.)')),(0,l.kt)(i.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},(0,l.kt)("p",null,"To get the externally-accessible URL where your demo front end is available, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl port-forward -n otterize-ecom-kafka-demo service/frontend-external 8080:80 &\n")),(0,l.kt)("p",null,"The demo is now accessible at:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://localhost:8080\n")),(0,l.kt)("p",null,'Go ahead and browse to the URL above to "shop" and get a feel for the demo\'s behavior.')))),(0,l.kt)("h3",{id:"apply-pod-to-pod-level-intents"},"Apply pod-to-pod-level intents"),(0,l.kt)("p",null,"This tutorial picks up where the network policies tutorial left off. We'll want to make sure all the pods have access to the pods they'll need to call,\nso we'll put in place the same intents that we had in that tutorial, just in case you're using network policies. In that tutorial, we showed how you can bootstrap all those intents, by observing the calls the pods are making using the network mapper, and then exporting the network map as a set of intents files."),(0,l.kt)("p",null,"So let's get back to that state by applying that same set of initial intents:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n otterize-ecom-kafka-demo -f https://docs.otterize.com/code-examples/shadow-mode/all.yaml\n")),(0,l.kt)("h3",{id:"seeing-the-deployed-demo"},"Seeing the deployed demo"),(0,l.kt)("p",null,"In the Otterize Cloud UI, the ",(0,l.kt)("a",{parentName:"p",href:"https://app.otterize.com/access-graph"},"access graph")," should now show the following map for the demo running in your cluster:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Access graph",src:a(7547).Z,width:"1469",height:"730"})),(0,l.kt)("p",null,"Notice that the Kafka service (called ",(0,l.kt)("inlineCode",{parentName:"p"},"kafka")," in this demo) is shown just like any other service that's called by other services (four, in our case) acting as its clients. We'll let Otterize know this is specifically a Kafka-type service in the next step."),(0,l.kt)("h2",{id:"manage-kafka-access-with-otterize"},"Manage Kafka access with Otterize"),(0,l.kt)("p",null,"Let's configure Otterize to recognize Kafka and communicate with it by applying a ",(0,l.kt)("inlineCode",{parentName:"p"},"KafkaServerConfig")," (KSC):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n otterize-ecom-kafka-demo -f https://docs.otterize.com/code-examples/shadow-mode/kafkaserverconfig.yaml\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expand to see the KafkaServerConfig"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"kafkaserverconfig.yaml",label:"kafkaserverconfig.yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: k8s.otterize.com/v1alpha2\nkind: KafkaServerConfig\nmetadata:\n  name: kafkaserverconfig\n  namespace: otterize-ecom-kafka-demo\nspec:\n  service:\n    name: kafka\n  addr: kafka-headless.otterize-ecom-kafka-demo:9092\n  tls:\n    certFile: /etc/otterize-spire/cert.pem\n    keyFile: /etc/otterize-spire/key.pem\n    rootCAFile: /etc/otterize-spire/ca.pem\n  topics:\n    - topic: "*"\n      pattern: literal\n      clientIdentityRequired: false\n      intentsRequired: false\n'))))),(0,l.kt)("p",null,"Upon applying the KSC, an ACL will configure Kafka to allow anonymous access to all topics.\nThis will be the base state, from which we will gradually roll out secure access to specific topics."),(0,l.kt)("p",null,'We can see in the access graph that the service is now marked with the "Kafka" logo and a "KSC" icon, since Otterize now recognizes it as a Kafka broker.'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Kafka Server Config",src:a(5096).Z,width:"447",height:"338"})),(0,l.kt)("p",null,"By clicking the Kafka service twice, we can focus on this service to inspect its configuration and credentials."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Kafka Server Config",src:a(5237).Z,width:"1650",height:"777"})),(0,l.kt)("p",null,"We can see:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"kafka"),' service is protected by network policies ("NetPols") and Kafka ACLs, because Otterize is in enforcement mode and managing network policies as well as ACLs.'),(0,l.kt)("li",{parentName:"ul"},"The KSC shows us that the default level of protection for all topics (",(0,l.kt)("inlineCode",{parentName:"li"},"*"),") is not to require client identity and not to require intents. In this demo, we're going to be rolling out protection gradually, so we don't pre-protect topics. But it would be easy to modify the KSC to pre-protect certain topics or all topics by requiring client authentication as well as explicit intents."),(0,l.kt)("li",{parentName:"ul"},"The certificate information shows information about the certificate this ",(0,l.kt)("inlineCode",{parentName:"li"},"kafka")," service will present to its clients as part of the mutual authentication (mTLS).")),(0,l.kt)("h2",{id:"declare-kafka-intents"},"Declare Kafka intents"),(0,l.kt)("p",null,"In a gradual rollout scenario, where the default protection level is to allow any operation by any client, Kafka ACLs act a bit like network policies: once ",(0,l.kt)("em",{parentName:"p"},"any")," ACL is defined on a topic, then ",(0,l.kt)("em",{parentName:"p"},"only")," authenticated clients that have an ACL on that topic get access to it."),(0,l.kt)("p",null,"To see how this works, let's declare what the ",(0,l.kt)("inlineCode",{parentName:"p"},"checkoutservice"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"orderservice"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"paymentservice")," intend to access:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"checkoutservice",label:"checkoutservice",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: checkoutservice\nspec:\n  service:\n    name: checkoutservice\n  calls:\n    - name: kafka\n      type: kafka\n      topics:\n        - name: orders\n          operations: [ produce ]\n    - name: cartservice\n    - name: currencyservice\n    - name: emailservice\n    - name: paymentservice\n    - name: productcatalogservice\n    - name: shippingservice\n"))),(0,l.kt)(i.Z,{value:"orderservice",label:"orderservice",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: orderservice\nspec:\n  service:\n    name: orderservice\n  calls:\n    - name: kafka\n      type: kafka\n      topics:\n        - name: orders\n          operations: [ consume ]\n    - name: emailservice\n\n"))),(0,l.kt)(i.Z,{value:"paymentservice",label:"paymentservice",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: paymentservice\nspec:\n  service:\n    name: paymentservice\n  calls:\n    - name: kafka\n      type: kafka\n      topics:\n        - name: payments\n          operations: [ produce ]\n\n")))),(0,l.kt)("p",null,"Let's apply these intents:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n otterize-ecom-kafka-demo -f https://docs.otterize.com/code-examples/shadow-mode/kafka-intents.yaml\n")),(0,l.kt)("p",null,"Looking back at the access graph, we can see the results:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Kafka Server Config",src:a(5948).Z,width:"1469",height:"712"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Each of the lines from the declared Kafka clients is now marked with the Kafka icon, indicating it has specific Kafka access configured."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"kafka")," service shows the access granted:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"payments")," topic allows the ",(0,l.kt)("inlineCode",{parentName:"li"},"paymentservice")," service to perform ",(0,l.kt)("inlineCode",{parentName:"li"},"all")," operations;"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"orders")," topic allows the ",(0,l.kt)("inlineCode",{parentName:"li"},"checkoutservice")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"produce")," events and the ",(0,l.kt)("inlineCode",{parentName:"li"},"orderservice")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"consume")," events.")))),(0,l.kt)("p",null,"No other services can now perform any operations on these two topics."),(0,l.kt)("p",null,"That's the Kafka server perspective ","\u2014"," and remember, no server admin had to create or maintain these access controls, they are always kept in sync with the client intents."),(0,l.kt)("p",null,"To get the Kafka client perspective, click on any of the lines from the clients to Kafka:"),(0,l.kt)("img",{src:"/img/quick-tutorials/shadow-mode/kafka-edge-modal.png",alt:"Kafka client perspective",width:"600"}),(0,l.kt)("p",null,"You can see the exact access the client is configured to have, and trace it back to the specific intent that generated it. (You can also see that the client is actually calling Kafka, via the discovered intents, so you know the access is indeed needed.)"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Optional: browse the demo to verify it still works"),(0,l.kt)("p",null,"You can play with the demo in your browser to see it still works as intended, while everything in it is protected against unintended and potentially malicious access."),(0,l.kt)(o.Z,{groupId:"frontend-addr",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"k8s",label:"K8s",mdxType:"TabItem"},(0,l.kt)("p",null,"To get the externally-accessible URL where your demo front end is available, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get service -n otterize-ecom-kafka-demo frontend-external | awk '{print $4}'\n")),(0,l.kt)("p",null,"The result should be similar to (if running on AWS EKS):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"a11843075fd254f8099a986467098647-1889474685.us-east-1.elb.amazonaws.com\n")),(0,l.kt)("p",null,'Go ahead and browse to the URL above to "shop" and get a feel for the demo\'s behavior.\n(The URL might take some time to populate across DNS servers. Note that we are accessing an HTTP and not an HTTPS website.)')),(0,l.kt)(i.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},(0,l.kt)("p",null,"To get the externally-accessible URL where your demo front end is available, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl port-forward -n otterize-ecom-kafka-demo service/frontend-external 8080:80 &\n")),(0,l.kt)("p",null,"The demo is now accessible at:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://localhost:8080\n")),(0,l.kt)("p",null,'Go ahead and browse to the URL above to "shop" and get a feel for the demo\'s behavior.')))),(0,l.kt)("p",null,"We've protected access to two topics: ",(0,l.kt)("inlineCode",{parentName:"p"},"payments")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"orders"),".\nAnd we've granted to their clients access to these topics by configuring ACLs, issuing certificates, and distributing them to the clients.\nAll this happened automatically just by declaring and applying the clients' intents to access those topics."),(0,l.kt)("p",null,"To continue gradually rolling out IBAC, protecting more topics while granting access to their intended clients, simply continue to declare and apply more client intents. And to see which clients are accessing Kafka, and should declare their intents, just look to the access graph, which shows the data accumulated by the Otterize OSS network mapper."),(0,l.kt)("h2",{id:"whats-next"},"What's next"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Learn how to ",(0,l.kt)("a",{parentName:"li",href:"/quick-tutorials/k8s-mtls"},"roll out mTLS")," between your workloads."),(0,l.kt)("li",{parentName:"ul"},"Check out ",(0,l.kt)("a",{parentName:"li",href:"/quick-tutorials/k8s-kafka-mtls"},"a simpler, hands-on example of IBAC for Kafka"),".")),(0,l.kt)("h2",{id:"teardown"},"Teardown"),(0,l.kt)("p",null,"To remove the deployed demo, first delete the client intents:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -n otterize-ecom-kafka-demo -f https://docs.otterize.com/code-examples/shadow-mode/all.yaml\n")),(0,l.kt)("p",null,"Next, remove the Kafka server config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -n otterize-ecom-kafka-demo -f https://docs.otterize.com/code-examples/shadow-mode/kafkaserverconfig.yaml\n")),(0,l.kt)("p",null,"Finally, remove the demo services and the namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -n otterize-ecom-kafka-demo -f https://docs.otterize.com/code-examples/shadow-mode/ecom-demo-mtls.yaml\nkubectl delete namespace otterize-ecom-kafka-demo\n")))}m.isMDXComponent=!0},5948:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kafka-edges-8691201e27f425c14bde088a5bb377ae.png"},5237:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kafka-focus-6db1afa010e84966416f89d78dbc53f4.png"},5096:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kafka-node-f6b4d95a1c142354c01c59ede3304581.png"},7547:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/phase-5-cea07946b7b46848876f99123c04d6dd.png"}}]);