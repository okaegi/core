import{C as v}from"./index-32dbd1fd.js";import{_ as W,p as c,l as i,z as m,A as t,L as e,q as g,y as b,a2 as _,G as V,k as l,u as o,n as h}from"./vendor-94c7fa64.js";import"./vendor-fortawesome-a232ebab.js";import"./vendor-bootstrap-d1b85b1f.js";import"./vendor-jquery-0791eda0.js";import"./vendor-axios-e7fe81e0.js";import"./vendor-sortablejs-122866cd.js";const D={name:"OpenwbCloudConfig",mixins:[v],emits:["sendCommand"],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/system/dataprotection_acknowledged","openWB/system/mqtt/bridge/+"],enableNewCloudButton:!0,newCloudData:{email:"",username:""},enableCloudConnectButton:!0,connectCloudData:{username:"",password:""},enableRemoveCloudButton:!0,showCloudRemoveModal:!1}},computed:{cloudBridge:{get(){let d=this.getWildcardTopics("openWB/system/mqtt/bridge/+");for(const[n,w]of Object.entries(d))w.remote.is_openwb_cloud||delete d[n];return d}},cloudBridgeKey:{get(){for(const[d,n]of Object.entries(this.cloudBridge))if(n.remote.is_openwb_cloud)return d}}},methods:{getCloudCredentials(){return{username:this.cloudBridge[this.cloudBridgeKey].remote.username,password:this.cloudBridge[this.cloudBridgeKey].remote.password}},getMqttBridgeIndex(d){return parseInt(d.match(/(?:\/)(\d+)$/)[1])},createCloud(){document.forms.cloudConfigCreateForm.reportValidity()&&(this.$emit("sendCommand",{command:"initCloud",data:this.newCloudData}),this.enableNewCloudButton=!1)},connectCloud(){document.forms.cloudConfigConnectForm.reportValidity()&&(this.$emit("sendCommand",{command:"connectCloud",data:this.connectCloudData}),this.enableCloudConnectButton=!1)},removeCloudModal(d){d.stopPropagation(),this.showCloudRemoveModal=!0},removeCloud(d){this.showCloudRemoveModal=!1,d=="confirm"&&(console.info("request removal of cloud"),this.$emit("sendCommand",{command:"removeMqttBridge",data:{bridge:this.getMqttBridgeIndex(this.cloudBridgeKey)}}))}}},q={class:"cloud-config"},z={key:1},M={key:1,name:"cloudConfigCreateForm"},S=g("a",{href:"mailto:support@openwb.de",subject:"Cloud Zugangsdaten"}," support@openwb.de ",-1),Z={key:0},N={key:1},x={class:"row justify-content-center"},R={key:2,name:"cloudConfigConnectForm"},T={key:0},F={key:1},K={class:"row justify-content-center"},j={key:3,name:"cloudConfigured"},U=g("span",null,[o(" Mit diesen Zugangsdaten können Sie sich in der "),g("a",{href:"https://web.openwb.de/"},"openWB Cloud "),o(" anmelden. ")],-1),P={class:"row justify-content-center"};function E(d,n,w,L,u,a){const k=c("openwb-base-modal-dialog"),r=c("openwb-base-alert"),B=c("router-link"),p=c("openwb-base-text-input"),C=c("openwb-base-click-button"),f=c("openwb-base-card"),y=c("openwb-base-heading");return l(),i(V,null,[m(" modal dialogs "),t(k,{show:u.showCloudRemoveModal,title:"Cloud Zugang löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:n[0]||(n[0]=s=>a.removeCloud(s))},{default:e(()=>[o(" Wollen Sie den vorhandenen Cloud Zugang wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ")]),_:1},8,["show"]),m(" main content "),g("div",q,[t(r,{subtype:"danger"},{default:e(()=>[o(" Für diese Version gibt es noch keine Weboberfläche in der Cloud! Wenn der Zugang eingerichtet wurde, können z. B. Daten mit einem MQTT-Client von dem MQTT-Broker web.openwb.de abgerufen werden. Ebenfalls kann ein Support-Tunnel aufgebaut werden. Weitere Funktionen sind in der Entwicklung. ")]),_:1}),d.$store.state.mqtt["openWB/system/dataprotection_acknowledged"]!==!0?(l(),b(r,{key:0,subtype:"danger"},{default:e(()=>[o(" Sie müssen der "),t(B,{to:"/System/DataProtection"},{default:e(()=>[o(" Datenschutzerklärung ")]),_:1}),o(" zustimmen, um die openWB Cloud nutzen zu können. ")]),_:1})):(l(),i("div",z,[t(r,{subtype:"success"},{default:e(()=>[o(" Sie haben der "),t(B,{to:"/System/DataProtection"},{default:e(()=>[o(" Datenschutzerklärung ")]),_:1}),o(" zugestimmt und können die openWB Cloud nutzen. ")]),_:1}),u.enableRemoveCloudButton?m("v-if",!0):(l(),b(r,{key:0,subtype:"warning"},{default:e(()=>[o(" Der Zugang wurde entfernt. Bitte starten Sie die openWB neu, um die Änderungen anzuwenden! ")]),_:1})),a.cloudBridgeKey?m("v-if",!0):(l(),i("form",M,[t(f,{title:"Neuen Zugang erstellen"},_({default:e(()=>[t(r,{subtype:"warning"},{default:e(()=>[o(" Derzeit können keine neuen Zugänge für die openWB Cloud angelegt werden. Bitte nutzen Sie die in/an der openWB notierten Zugangsdaten im unteren Bereich dieser Seite. Wenn bei einer gekauften openWB keine Zugangsdaten vorhanden sind, schreiben Sie bitte eine Mail unter Angabe der Bestell- und/oder Seriennummer an "),S,o(" . ")]),_:1}),d.$store.state.mqtt["openWB/general/extern"]===!0?(l(),i("div",Z,[t(r,{subtype:"info"},{default:e(()=>[o(' Diese openWB befindet sich im Modus "Nur Ladepunkt". Bitte richten Sie die openWB Cloud auf der regelnden openWB ein. ')]),_:1})])):(l(),i("div",N,[t(p,{title:"Benutzername",required:"",subtype:"user",pattern:"[a-zA-Z]+",modelValue:u.newCloudData.username,"onUpdate:modelValue":n[1]||(n[1]=s=>u.newCloudData.username=s),disabled:""},null,8,["modelValue"]),t(p,{title:"E-Mail",required:"",subtype:"email",modelValue:u.newCloudData.email,"onUpdate:modelValue":n[2]||(n[2]=s=>u.newCloudData.email=s),disabled:""},null,8,["modelValue"])]))]),_:2},[d.$store.state.mqtt["openWB/general/extern"]===!1&&d.$store.state.mqtt["openWB/system/dataprotection_acknowledged"]===!0?{name:"footer",fn:e(()=>[g("div",x,[m(` <openwb-base-click-button
								class="col-4"
								:class="
									enableNewCloudButton
										? 'btn-success'
										: 'btn-outline-success'
								"
								:disabled="!enableNewCloudButton"
								@buttonClicked="createCloud"
							>
								Zugang erstellen
							</openwb-base-click-button> `),t(C,{class:"col-4 btn-outline-success",disabled:""},{default:e(()=>[o(" Zugang erstellen ")]),_:1})])]),key:"0"}:void 0]),1024),u.enableNewCloudButton?m("v-if",!0):(l(),b(r,{key:0,subtype:"info",class:"mb-2"},{default:e(()=>[o(" Der neue Zugang wird eingerichtet. Dieser Vorgang kann bis zu einer Minute dauern. Bitte warten. ")]),_:1}))])),a.cloudBridgeKey?m("v-if",!0):(l(),i("form",R,[t(f,{title:"Vorhandenen Zugang einrichten"},_({default:e(()=>[d.$store.state.mqtt["openWB/general/extern"]===!0?(l(),i("div",T,[t(r,{subtype:"info"},{default:e(()=>[o(' Diese openWB befindet sich im Modus "Nur Ladepunkt". Bitte richten Sie die openWB Cloud auf der regelnden openWB ein. ')]),_:1})])):(l(),i("div",F,[t(p,{title:"Benutzername",required:"",subtype:"user",modelValue:u.connectCloudData.username,"onUpdate:modelValue":n[3]||(n[3]=s=>u.connectCloudData.username=s)},null,8,["modelValue"]),t(p,{title:"Passwort",required:"",subtype:"password",modelValue:u.connectCloudData.password,"onUpdate:modelValue":n[4]||(n[4]=s=>u.connectCloudData.password=s)},null,8,["modelValue"])]))]),_:2},[d.$store.state.mqtt["openWB/general/extern"]===!1&&d.$store.state.mqtt["openWB/system/dataprotection_acknowledged"]===!0?{name:"footer",fn:e(()=>[g("div",K,[t(C,{class:h(["col-4",u.enableCloudConnectButton?"btn-success":"btn-outline-success"]),disabled:!u.enableCloudConnectButton,onButtonClicked:a.connectCloud},{default:e(()=>[o(" Mit Cloud verbinden ")]),_:1},8,["class","disabled","onButtonClicked"])])]),key:"0"}:void 0]),1024)])),a.cloudBridgeKey?(l(),i("form",j,[!u.enableCloudConnectButton||!u.enableNewCloudButton?(l(),b(r,{key:0,subtype:"warning"},{default:e(()=>[o(" Der Zugang wurde eingerichtet. Bitte starten Sie die openWB neu, um die Änderungen anzuwenden! ")]),_:1})):m("v-if",!0),t(f,{title:"Vorhandener Cloud Zugang"},{footer:e(()=>[g("div",P,[t(C,{class:h(["col-4",u.enableRemoveCloudButton?"btn-danger":"btn-outline-danger"]),disabled:!u.enableRemoveCloudButton,onButtonClicked:n[7]||(n[7]=s=>a.removeCloudModal(s))},{default:e(()=>[o(" Zugang löschen ")]),_:1},8,["class","disabled"])])]),default:e(()=>[t(y,null,{default:e(()=>[U]),_:1}),t(p,{title:"Benutzername",required:"",subtype:"user",modelValue:a.getCloudCredentials().username,"onUpdate:modelValue":n[5]||(n[5]=s=>a.getCloudCredentials().username=s),disabled:""},null,8,["modelValue"]),t(p,{title:"Passwort",required:"",subtype:"password",modelValue:a.getCloudCredentials().password,"onUpdate:modelValue":n[6]||(n[6]=s=>a.getCloudCredentials().password=s),disabled:""},null,8,["modelValue"])]),_:1})])):m("v-if",!0)]))])],64)}const X=W(D,[["render",E],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/CloudConfig.vue"]]);export{X as default};
