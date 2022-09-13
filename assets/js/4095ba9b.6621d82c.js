"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",m="tabItem_LNqP";function u(e){var t,n;const{lazy:o,block:u,defaultValue:d,values:k,groupId:f,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,l.l)(y,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===d?d:null!=(t=null!=d?d:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:T}=(0,s.U)(),[w,S]=(0,r.useState)(b),z=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=f){const e=v[f];null!=e&&e!==w&&y.some((t=>t.value===e))&&S(e)}const L=e=>{const t=e.currentTarget,n=z.indexOf(t),a=y[n].value;a!==w&&(C(t),S(a),null!=f&&T(f,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=z.indexOf(e.currentTarget)+1;n=null!=(a=z[t])?a:z[0];break}case"ArrowLeft":{var r;const t=z.indexOf(e.currentTarget)-1;n=null!=(r=z[t])?r:z[z.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},g)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>z.push(e),onKeyDown:A,onFocus:L,onClick:L},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},1778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),o=n(5162);const l={sidebar_position:4,title:"Deploy mTLS between pods and Kafka + intents"},s="Kafka + mTLS",c={unversionedId:"documentation/quick-tutorials/kafka-mtls-intents",id:"documentation/quick-tutorials/kafka-mtls-intents",title:"Deploy mTLS between pods and Kafka + intents",description:"This tutorial will walk you through applying intents and deploying mTLS certificates between a client and a Kafka cluster",source:"@site/docs/documentation/3-quick-tutorials/4-kafka-mtls-intents.md",sourceDirName:"documentation/3-quick-tutorials",slug:"/documentation/quick-tutorials/kafka-mtls-intents",permalink:"/documentation/quick-tutorials/kafka-mtls-intents",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/3-quick-tutorials/4-kafka-mtls-intents.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Deploy mTLS between pods and Kafka + intents"},sidebar:"docSidebar",previous:{title:"Deploy mTLS between pods and Kafka",permalink:"/documentation/quick-tutorials/k8s-kafka-mtls"},next:{title:"Deploy mTLS between pods",permalink:"/documentation/quick-tutorials/k8s-mtls"}},p={},m=[{value:"Install Otterize",id:"install-otterize",level:2},{value:"Install Kafka",id:"install-kafka",level:2},{value:"Pod annotation  (explainer)",id:"pod-annotation--explainer",level:2},{value:"Deploy the server, client, and default network policy",id:"deploy-the-server-client-and-default-network-policy",level:2},{value:"Apply intents",id:"apply-intents",level:2},{value:"What happened behind the scenes",id:"what-happened-behind-the-scenes",level:2},{value:"Teardown",id:"teardown",level:2}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kafka--mtls"},"Kafka + mTLS"),(0,r.kt)("p",null,"This tutorial will walk you through applying intents and deploying mTLS certificates between a client and a Kafka cluster\nand configuring intents for one of its clients.\nWe will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install Otterize"),(0,r.kt)("li",{parentName:"ul"},"Learn how to configure bitnami's kafka chart to use Otterize-provided mTLS credentials"),(0,r.kt)("li",{parentName:"ul"},"Deploy a Kafka cluster"),(0,r.kt)("li",{parentName:"ul"},"Learn how to annotate pods for automatic credentials generation"),(0,r.kt)("li",{parentName:"ul"},"Deploy a client connecting to Kafka with mTLS"),(0,r.kt)("li",{parentName:"ul"},"Apply intents to configure Kafka ACLs"),(0,r.kt)("li",{parentName:"ul"},"Inspect the credentials")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can skip this section if Otterize is already installed in your cluster.")),(0,r.kt)("h2",{id:"install-otterize"},"Install Otterize"),(0,r.kt)("p",null,"Use Helm to install the latest version of Otterize:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://otterize.github.io/helm-charts\nhelm repo update\nhelm upgrade --install otterize otterize/otterize-kubernetes -n otterize --create-namespace\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Optional: check deployment status"),(0,r.kt)("div",null,(0,r.kt)("p",null," It can take several minutes for the pods to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Running")," and all containers to be ready.\nYou can monitor progress with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get pods -n otterize -w\n")),(0,r.kt)("p",null,"   Once you see the following (there may be even more pods), you can stop monitoring with ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl-C"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                             READY   STATUS    RESTARTS      AGE\nintents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s\notterize-spire-agent-9s8w7                                       1/1     Running   0             54s\notterize-spire-agent-np2wf                                       1/1     Running   1             54s\notterize-spire-server-0                                          1/1     Running   0             53s\notterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s\nspire-integration-operator-controller-manager-65b8bf57b5-mpltl   2/2     Running   0             53s\n")))),(0,r.kt)("h2",{id:"install-kafka"},"Install Kafka"),(0,r.kt)("p",null,"The following command will deploy a Kafka cluster using bitnami's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/kafka"},"chart"),"\nconfigured to use Otterize-provided mTLS credentials."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm upgrade --install --create-namespace -n kafka kafka \\\n--version 14.x.x bitnami/kafka \\\n-f https://docs.otterize.com/code-examples/kafka-mtls-intents/helm/values.yaml\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the configuration details..."),"To configure the chart to use the Otterize-provided credentials we need to configure it to",(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use SSL for it's listeners"),(0,r.kt)("li",{parentName:"ol"},"Tell Otterize using pod annotations how it requires it's credentials"),(0,r.kt)("li",{parentName:"ol"},"Authenticate using mTLS credentials provided as a K8s secret")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'listeners: # 1. Use SSL for it\'s listeners\n  - "CLIENT://:9092"\n  - "INTERNAL://:9093"\nadvertisedListeners:\n  - "CLIENT://:9092"\n  - "INTERNAL://:9093"\nlistenerSecurityProtocolMap: "INTERNAL:SSL,CLIENT:SSL"\npodAnnotations: # 2. Annotations for Otterize to generate credentials\n  spire-integration.otterize.com/cert-type: jks\n  spire-integration.otterize.com/tls-secret-name: kafka-tls-secret\n  spire-integration.otterize.com/truststore-file-name: kafka.truststore.jks\n  spire-integration.otterize.com/keystore-file-name: kafka-keystore.jks\n  spire-integration.otterize.com/dns-names: "kafka-0.kafka-headless.kafka.svc.cluster.local,kafka.kafka.svc.cluster.local"\nauth: # 3. Authenticate clients using mTLS\n  clientProtocol: mtls\n  interBrokerProtocol: mtls\n  tls:\n    type: jks\n    existingSecrets:\n      - kafka-tls-secret\n    password: password\nauthorizerClassName: kafka.security.authorizer.AclAuthorizer\nallowEveryoneIfNoAclFound: true\n'))),(0,r.kt)("p",null,"It can take several minutes for the pods to ",(0,r.kt)("strong",{parentName:"p"},"stabilize")," into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Running")," states. You can monitor with\nthe following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n kafka\n")),(0,r.kt)("p",null,"After ",(0,r.kt)("strong",{parentName:"p"},"stabilization")," you should see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                READY   STATUS    RESTARTS      AGE\nkafka-0             1/1     Running   1 (25s ago)   45s\nkafka-zookeeper-0   1/1     Running   0             56s\n")),(0,r.kt)("h2",{id:"pod-annotation--explainer"},"Pod annotation  (explainer)"),(0,r.kt)("p",null,"To generate credentials for a pod we simply need to update the deployment by annotating it.\nThe required steps are to"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Annotate the pod - Otterize automatically identifies the ",(0,r.kt)("inlineCode",{parentName:"li"},"otterize/credentials-secret-name")," annotation, generates\nmTLS credentials, and stores them as K8s secret named as the annotation value."),(0,r.kt)("li",{parentName:"ol"},"Mount the credentials stored as a K8s secret as a volume"),(0,r.kt)("li",{parentName:"ol"},"Mount the volume into the container")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  template:\n    metadata:\n      ...\n      annotations:\n        # highlight-next-line\n        otterize/credentials-secret-name: client-credentials-secret       # 1 Generate credentials\n    spec:\n      volumes:\n        # highlight-start\n        - name: otterize-credentials\n          secret:\n            secretName: client-credentials-secret                      # 2 Mount credentials as a volume\n            # highlight-end\n      containers:\n        - name: client\n        ...\n        volumeMounts:\n          # highlight-start\n          - name: otterize-credentials\n            mountPath: /var/otterize/credentials                      # 3 Mount volume into container \n            readOnly: true\n            # highlight-end\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"/documentation/credential-operator/behavior"},"Behavior")," section to view all parameters available as pod\nannotation for generating mTLS credentials.")),(0,r.kt)("h2",{id:"deploy-the-server-client-and-default-network-policy"},"Deploy the server, client, and default network policy"),(0,r.kt)("p",null,"Our simple example consists of single Kafka client pod."),(0,r.kt)("p",null,"We also deploy a Kafka server config to block access to a specific topic unless intents are set\nto allow access. At first, we expect the client to be blocked from accessing the specific topic.\nWe will follow by applying an intent to allow access."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the details of this example..."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"namespace.yaml",label:"namespace.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\nname: otterize-tutorial-kafka-mtls-intents\n"))),(0,r.kt)(o.Z,{value:"client-deployment.yaml",label:"client-deployment.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: client\nnamespace: otterize-tutorial-kafka-mtls-intents\nspec:\nselector:\n matchLabels:\n   app: client\ntemplate:\n metadata:\n   labels:\n     app: client\n   annotations:\n     spire-integration.otterize.com/tls-secret-name: client-credentials-secret\n     spire-integration.otterize.com/cert-ttl: "2592000"\n spec:\n   containers:\n     - name: client\n       image: golang\n       command: [ "/bin/sh", "-c", "--" ]\n       args: [ "while true; do cd /app; cp src/* .; go get main; go run .; sleep infinity; done" ]\n       volumeMounts:\n         - name: ephemeral\n           mountPath: /app\n         - mountPath: /app/src\n           name: client-go\n         - name: otterize-credentials\n           mountPath: /var/otterize/credentials\n           readOnly: true\n   volumes:\n     - name: client-go\n       configMap:\n         name: client-go\n     - name: otterize-credentials\n       secret:\n         secretName: client-credentials-secret\n     - name: ephemeral\n       emptyDir: { }\n'))),(0,r.kt)(o.Z,{value:"client-configmap.yaml",label:"client-configmap.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\nname: client-go\nnamespace: otterize-tutorial-kafka-mtls-intents\ndata:\nclient.go: |\n package main\n \n import (\n "crypto/tls"\n "crypto/x509"\n "fmt"\n "github.com/Shopify/sarama"\n "github.com/sirupsen/logrus"\n "io/ioutil"\n "time"\n )\n \n const (\n kafkaAddr     = "kafka.kafka:9092"\n testTopicName = "mytopic"\n certFile      = "/var/otterize/credentials/svid.pem"\n keyFile       = "/var/otterize/credentials/key.pem"\n rootCAFile    = "/var/otterize/credentials/bundle.pem"\n )\n \n func getTLSConfig() (*tls.Config, error) {\n cert, err := tls.LoadX509KeyPair(certFile, keyFile)\n if err != nil {\n return nil, fmt.Errorf("failed loading x509 key pair: %w", err)\n }\n \n pool := x509.NewCertPool()\n rootCAPEM, err := ioutil.ReadFile(rootCAFile)\n if err != nil {\n return nil, fmt.Errorf("failed loading root CA PEM file: %w ", err)\n }\n pool.AppendCertsFromPEM(rootCAPEM)\n \n return &tls.Config{\n Certificates: []tls.Certificate{cert},\n RootCAs:      pool,\n }, nil\n }\n \n func loop_kafka() error {\n addrs := []string{kafkaAddr}\n \n config := sarama.NewConfig()\n fmt.Println("Loading mTLS certificates")\n config.Net.TLS.Enable = true\n tlsConfig, err := getTLSConfig()\n if err != nil {\n return err\n }\n config.Net.TLS.Config = tlsConfig\n fmt.Println("Connecting to Kafka")\n config.Net.DialTimeout = 5 * time.Second\n config.Net.ReadTimeout = 5 * time.Second\n config.Net.WriteTimeout = 5 * time.Second\n client, err := sarama.NewClient(addrs, config)\n if err != nil {\n return err\n }\n fmt.Println("Creating a producer and a consumer")\n config.Producer.Return.Successes = true\n config.Producer.Timeout = 5 * time.Second\n config.Consumer.MaxWaitTime = 5 * time.Second\n config.Producer.Return.Errors = true\n config.Consumer.Return.Errors = true\n producer, err := sarama.NewSyncProducerFromClient(client)\n if err != nil {\n return err\n }\n \n consumer, err := sarama.NewConsumerFromClient(client)\n if err != nil {\n return err\n }\n fmt.Println("Sending messages")\n for i := 1; i <= 5; i++ {\n msg := fmt.Sprintf("Message %d", i)\n _, _, err = producer.SendMessage(&sarama.ProducerMessage{\n Topic:     testTopicName,\n Partition: -1,\n Value:     sarama.StringEncoder(msg),\n })\n if err != nil {\n return err\n }\n fmt.Printf("Sent message - %s\\n", msg)\n time.Sleep(1 * time.Second)\n }\n \n partConsumer, err := consumer.ConsumePartition(testTopicName, 0, 0)\n if err != nil {\n return err\n }\n \n for msg := range partConsumer.Messages() {\n fmt.Printf("Read message - %s\\n", msg.Value)\n }\n return nil\n }\n \n func main() {\n for {\n err := loop_kafka()\n fmt.Println("Loop exited")\n logrus.WithError(err).Println()\n time.Sleep(2 * time.Second)\n }\n }\n   \n\ngo.mod: |\n module main\n \n go 1.18\n \n require (\n github.com/Shopify/sarama v1.36.0\n github.com/sirupsen/logrus v1.9.0\n )\n \n require (\n github.com/davecgh/go-spew v1.1.1 // indirect\n github.com/eapache/go-resiliency v1.3.0 // indirect\n github.com/eapache/go-xerial-snappy v0.0.0-20180814174437-776d5712da21 // indirect\n github.com/eapache/queue v1.1.0 // indirect\n github.com/golang/snappy v0.0.4 // indirect\n github.com/hashicorp/errwrap v1.0.0 // indirect\n github.com/hashicorp/go-multierror v1.1.1 // indirect\n github.com/hashicorp/go-uuid v1.0.3 // indirect\n github.com/jcmturner/aescts/v2 v2.0.0 // indirect\n github.com/jcmturner/dnsutils/v2 v2.0.0 // indirect\n github.com/jcmturner/gofork v1.7.6 // indirect\n github.com/jcmturner/gokrb5/v8 v8.4.3 // indirect\n github.com/jcmturner/rpc/v2 v2.0.3 // indirect\n github.com/klauspost/compress v1.15.9 // indirect\n github.com/pierrec/lz4/v4 v4.1.15 // indirect\n github.com/rcrowley/go-metrics v0.0.0-20201227073835-cf1acfcdf475 // indirect\n golang.org/x/crypto v0.0.0-20220722155217-630584e8d5aa // indirect\n golang.org/x/net v0.0.0-20220809184613-07c6da5e1ced // indirect\n golang.org/x/sys v0.0.0-20220728004956-3c1f35247d10 // indirect\n )\n\n'))),(0,r.kt)(o.Z,{value:"kafkaserverconfig.yaml",label:"kafkaserverconfig.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: k8s.otterize.com/v1alpha1\nkind: KafkaServerConfig\nmetadata:\nname: kafkaserverconfig\nnamespace: kafka\nspec:\nserverName: kafka\naddr: kafka.kafka:9092\ntls:\n certFile: /etc/spifferize/svid.pem\n keyFile: /etc/spifferize/key.pem\n rootCAFile: /etc/spifferize/bundle.pem\ntopics:\n - topic: "mytopic"\n   pattern: literal\n   clientIdentityRequired: true\n   intentsRequired: true\n'))))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy the client and the Kafka config using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,r.kt)("admonition",{parentName:"li",title:"fixme",type:"danger"}),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://docs.otterize.com/code-examples/kafka-mtls-intents/all.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check that the ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," ",(0,r.kt)("inlineCode",{parentName:"p"},"pod")," was deployed"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-kafka-mtls-intents\n")),(0,r.kt)("p",{parentName:"li"},"You should see"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\n client-5d9d5c8d7b-7dlzb   1/1     Running   0          24s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you check, you should see that an ACL was configured on Kafka to deny anonymous access to the topic"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl logs -n kafka statefulset/kafka | grep "Processing Acl change" | grep mytopic | tail -n 1\n')),(0,r.kt)("p",{parentName:"li"},"You should see"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"[2022-09-13 10:58:32,052] INFO Processing Acl change notification for ResourcePattern\n(resourceType=TOPIC, name=mytopic, patternType=LITERAL), versionedAcls : \nSet(User:ANONYMOUS has DENY permission for operations: ALL from hosts: *), zkVersion : 9 \n(kafka.security.authorizer.AclAuthorizer)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's monitor the client's attempts to access the Kafka topic with a second terminal window,\nso we can see the effects of our changes in real time."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"Open a second terminal window")," and tail the client log:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f --tail 1 -n otterize-tutorial-kafka-mtls-intents deploy/client\n")),(0,r.kt)("p",{parentName:"li"},"   At this point the client should log an error saying it is not authorized to access the topic:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'Loading mTLS certificates\nConnecting to Kafka\nCreating a producer and a consumer\nSending messages\nLoop exited\ntime="2022-09-13T10:41:07Z" level=info error="kafka server: The client is not authorized to access this topic"\n')),(0,r.kt)("p",{parentName:"li"},"   This is the expected outcome since we configured Kafka to require intents fo access to this topic.\nOnce the client declares its intents, Otterize will add an ACL to Kafka to allow the intended calls.\nLet's see that now..."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Client logs require improvement. Client is compiling on startup so it can take some time before it's ready.\nNeed to solve this.")))),(0,r.kt)("h2",{id:"apply-intents"},"Apply intents"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The client declares its intent to call the server with this ",(0,r.kt)("inlineCode",{parentName:"p"},"intents.yaml")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\nname: client\nnamespace:  otterize-tutorial-kafka-mtls-intents\nspec:\nservice:\n name: client\ncalls:\n - name: kafka\n   namespace: kafka\n   type: Kafka\n   topics:\n     - name: mytopic\n       operation: all\n\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Client intents are the cornerstone of ",(0,r.kt)("a",{parentName:"p",href:"otterize.com/ibac"},"intent-based access control"),".")),(0,r.kt)("p",{parentName:"li"},"   Keep an eye on the logs being tailed in the ",(0,r.kt)("strong",{parentName:"p"},"second terminal window"),"\nwhile you apply this ",(0,r.kt)("inlineCode",{parentName:"p"},"intents.yaml")," file in your ",(0,r.kt)("strong",{parentName:"p"},"main terminal window")," using:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://docs.otterize.com/code-examples/kafka-mtls-intents/client-intents.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check that the client succesfully connected to Kafka using mTLS"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs --tail=5 -n otterize-tutorial-kafka-mtls deploy/client\n")),(0,r.kt)("p",{parentName:"li"},"You should get"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Loading mTLS certificates\nConnecting to Kafka\nCreating a producer and a consumer\nSending messages\nSent message - Message 1\nSent message - Message 2\nSent message - Message 3\nSent message - Message 4\nSent message - Message 5\nRead message - Message 1\nRead message - Message 2\nRead message - Message 3\nRead message - Message 4\nRead message - Message 5\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you check, you should see that an ACL was configured on Kafka"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl logs -n kafka statefulset/kafka | grep "Processing Acl change" | grep mytopic | tail -n 1\n')),(0,r.kt)("p",{parentName:"li"},"You should see"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"[2022-09-13 10:44:52,803] INFO Processing Acl change notification for\nResourcePattern(resourceType=TOPIC, name=mytopic, patternType=LITERAL), \nversionedAcls : Set(User:ANONYMOUS has DENY permission for operations: \nALL from hosts: *, User:CN=client.otterize-tutorial-kafka-mtls-intents,O=SPIRE,C=US has ALLOW permission \nfor operations: ALL from hosts: *), zkVersion : 6 (kafka.security.authorizer.AclAuthorizer)\n")))),(0,r.kt)("h2",{id:"what-happened-behind-the-scenes"},"What happened behind the scenes"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"We configured the Kafka helm chart to",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Use the SSL protocol for its listeners"),(0,r.kt)("li",{parentName:"ol"},"Annotated its pod to let Otterize know it should generate mTLS credentials in the Java Key Store and Java Trust\nStore format and store them as a K8s secret."),(0,r.kt)("li",{parentName:"ol"},"Use the K8s secret for mTLS by configuring Kafka's auth mechanism."))),(0,r.kt)("li",{parentName:"ol"},"We annotated the client pod to let Otterize know it should generate mTLS credentials in a PEM format."),(0,r.kt)("li",{parentName:"ol"},"The Otterize SPIRE integration operator",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Created an entry for the annotated client pod with the SPIRE server."),(0,r.kt)("li",{parentName:"ol"},"Generated matching mTLS credentials using the SPIRE server."),(0,r.kt)("li",{parentName:"ol"},"Stored the mTLS credentials into a K8s secrets."))),(0,r.kt)("li",{parentName:"ol"},"The secret was mounted into the client pod's container."),(0,r.kt)("li",{parentName:"ol"},"We configured Kafka to only allow intended access to the specific topic."),(0,r.kt)("li",{parentName:"ol"},"The client pod connected and authenticated to Kafka using mTLS but couldn't access the topic."),(0,r.kt)("li",{parentName:"ol"},"We applied intents to allow the client to access the topic."),(0,r.kt)("li",{parentName:"ol"},"The client pod connected and authenticated to Kafka using mTLS but and accessed the topic successfully.")),(0,r.kt)("h2",{id:"teardown"},"Teardown"),(0,r.kt)("p",null,"To remove the deployed resources run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f https://docs.otterize.com/code-examples/kafka-mtls-intents/all.yaml\nhelm uninstall -n kafka kafka\nhelm repo remove bitnami\n")))}d.isMDXComponent=!0}}]);