import{l as C,d as q,S as A,F as z}from"./vendor-fortawesome-838df0c9.js";import{C as D}from"./index-f08a7306.js";import{_ as I,p as r,k as m,l as c,z as b,A as n,L as o,q as f,G as T,u as s,x as y,y as S,I as W,Q as E,R as Q}from"./vendor-20bb207d.js";import"./vendor-bootstrap-d275de6c.js";import"./vendor-jquery-89b63fca.js";import"./vendor-axios-13ef03ae.js";import"./vendor-sortablejs-ad1d2cc8.js";C.add(q,A);const N={name:"OpenwbMqttBridgeConfiguration",mixins:[D],emits:["sendCommand"],components:{FontAwesomeIcon:z},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/system/mqtt/bridge/+"],showMqttBridgeModal:!1,modalMqttBridgeIndex:void 0}},computed:{configuredMqttBridges:{get(){let e=this.getWildcardTopics("openWB/system/mqtt/bridge/+");for(const[u,v]of Object.entries(e))v.remote.is_openwb_cloud&&delete e[u];return e}}},methods:{addMqttBridge(e){e.stopPropagation(),this.$emit("sendCommand",{command:"addMqttBridge",data:{}})},getMqttBridgeIndex(e){return parseInt(e.match(/(?:\/)(\d+)$/)[1])},removeMqttBridgeModal(e,u){u.stopPropagation(),this.modalMqttBridgeIndex=this.getMqttBridgeIndex(e),this.showMqttBridgeModal=!0},removeMqttBridge(e,u){this.showMqttBridgeModal=!1,u=="confirm"&&(console.info("request removal of mqtt bridge '"+e+"'"),this.$emit("sendCommand",{command:"removeMqttBridge",data:{bridge:e}}))},getMqttBridgeName(e){return this.$store.state.mqtt["openWB/system/mqtt/bridge/"+e]?this.$store.state.mqtt["openWB/system/mqtt/bridge/"+e].name:e}}},g=e=>(E("data-v-1ec2f2f5"),e=e(),Q(),e),P={class:"mqttBridgeConfiguration"},Z=g(()=>f("br",null,null,-1)),L={key:0},F={key:1},$=["name"],O=g(()=>f("hr",null,null,-1)),R=g(()=>f("hr",null,null,-1));function j(e,u,v,G,h,i){const U=r("openwb-base-modal-dialog"),_=r("openwb-base-alert"),w=r("font-awesome-icon"),V=r("openwb-base-avatar"),p=r("openwb-base-text-input"),d=r("openwb-base-button-group-input"),k=r("openwb-base-heading"),B=r("openwb-base-number-input"),x=r("openwb-base-submit-buttons"),M=r("openwb-base-card");return m(),c(T,null,[b(" modal dialogs "),n(U,{show:h.showMqttBridgeModal,title:"MQTT-Brücke löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:u[0]||(u[0]=l=>i.removeMqttBridge(h.modalMqttBridgeIndex,l))},{default:o(()=>[s(' Wollen Sie die MQTT-Brücke "'+y(i.getMqttBridgeName(h.modalMqttBridgeIndex))+'" wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ',1)]),_:1},8,["show"]),b(" main content "),f("div",P,[n(_,{subtype:"danger"},{default:o(()=>[s(" ACHTUNG: Die Konfiguration einer MQTT-Brücke erlaubt allen Nutzern mit Zugang zum entfernten MQTT-Server alle weitergeleiteten Daten dieser openWB einzusehen!"),Z,s(' Es wird dringend empfohlen, dies nur für nicht-öffentliche MQTT-Server unter Verwendung starker Transport-Verschlüsselung (TLS) mit persönlichem Login und strenger Zugriffskontrolle (zumindest für die MQTT-Thema unterhalb von "Entfernter Präfix") zu aktivieren! ')]),_:1}),n(M,{title:"Konfigurierte MQTT-Brücken"},{actions:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!1?(m(),S(V,{key:0,class:"bg-success clickable",onClick:i.addMqttBridge},{default:o(()=>[n(w,{"fixed-width":"",icon:["fas","plus"]})]),_:1},8,["onClick"])):b("v-if",!0)]),default:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(m(),c("div",L,[n(_,{subtype:"info"},{default:o(()=>[s(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(m(),c("div",F,[Object.keys(i.configuredMqttBridges).length===0?(m(),S(_,{key:0,subtype:"info"},{default:o(()=>[s(" Es wurde noch keine MQTT Brücke konfiguriert. ")]),_:1})):b("v-if",!0),(m(!0),c(T,null,W(i.configuredMqttBridges,(l,a)=>(m(),c("form",{key:a,name:"mqttBridgeConfigurationForm"+i.getMqttBridgeIndex(a)},[n(M,{title:l.name,collapsible:!0,collapsed:!0,subtype:"primary"},{actions:o(()=>[n(V,{class:"bg-danger clickable",onClick:t=>i.removeMqttBridgeModal(a,t)},{default:o(()=>[n(w,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"])]),footer:o(()=>[n(x,{formName:"mqttBridgeConfigurationForm"+i.getMqttBridgeIndex(a),hideDefaults:!0,onSave:t=>e.$emit("save",[a]),onReset:t=>e.$emit("reset",[a])},null,8,["formName","onSave","onReset"])]),default:o(()=>[n(p,{title:"Bezeichnung",subtype:"text",required:"",pattern:"[A-Za-z0-9]+","model-value":l.name,"onUpdate:modelValue":t=>e.updateState(a,t,"name")},{help:o(()=>[s(" Die Bezeichnung darf nur aus Buchstaben ohne Umlaute und Zahlen bestehen. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),n(d,{title:"Brücke aktivieren",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":l.active,"onUpdate:modelValue":t=>e.updateState(a,t,"active")},null,8,["model-value","onUpdate:modelValue"]),O,n(k,null,{default:o(()=>[s(" Einstellungen zur Verbindung ")]),_:1}),n(p,{title:"Entfernter Server",subtype:"host",required:"","model-value":l.remote.host,"onUpdate:modelValue":t=>e.updateState(a,t,"remote.host")},null,8,["model-value","onUpdate:modelValue"]),n(B,{title:"Entfernter Port",required:"",min:1,max:65535,"model-value":l.remote.port,"onUpdate:modelValue":t=>e.updateState(a,t,"remote.port")},null,8,["model-value","onUpdate:modelValue"]),n(p,{title:"Benutzername",subtype:"user",required:"",pattern:"[a-zA-Z0-9_\\-+.]+","model-value":l.remote.username,"onUpdate:modelValue":t=>e.updateState(a,t,"remote.username")},null,8,["model-value","onUpdate:modelValue"]),n(p,{title:"Passwort",subtype:"password",required:"","model-value":l.remote.password,"onUpdate:modelValue":t=>e.updateState(a,t,"remote.password")},null,8,["model-value","onUpdate:modelValue"]),n(p,{title:"Präfix",subtype:"text",pattern:"[A-Za-z0-9_\\-]+(\\/[A-Za-z0-9_\\-]+)?\\/","model-value":l.remote.prefix,"onUpdate:modelValue":t=>e.updateState(a,t,"remote.prefix")},{help:o(()=>[s(' Das Präfix darf nur aus Buchstaben ohne Umlaute, Zahlen, Binde- und Unterstrichen bestehen. Optional kann mit einem Schrägstrich "/" eine Topic-Struktur abgebildet werden. Am Ende des Präfix muss ein Schrägstrich "/" stehen. ')]),_:2},1032,["model-value","onUpdate:modelValue"]),n(p,{title:"Client ID",subtype:"text",required:"",pattern:"[A-Za-z0-9_\\-]+","model-value":l.remote.client_id,"onUpdate:modelValue":t=>e.updateState(a,t,"remote.client_id")},{help:o(()=>[s(" Die Client ID darf nur aus Buchstaben ohne Umlaute, Zahlen, Binde- und Unterstrichen bestehen. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),n(d,{title:"MQTT Protokoll",required:"required",buttons:[{buttonValue:"mqttv31",text:"v3.1"},{buttonValue:"mqttv311",text:"v3.1.1"}],"model-value":l.remote.protocol,"onUpdate:modelValue":t=>e.updateState(a,t,"remote.protocol")},null,8,["model-value","onUpdate:modelValue"]),n(d,{title:"TLS Version",buttons:[{buttonValue:"auto",text:"Automatisch",class:"btn-outline-success"},{buttonValue:"tlsv1.0",text:"v1.0",class:"btn-outline-warning"},{buttonValue:"tlsv1.1",text:"v1.1",class:"btn-outline-warning"},{buttonValue:"tlsv1.2",text:"v1.2"}],"model-value":l.remote.tls_version,"onUpdate:modelValue":t=>e.updateState(a,t,"remote.tls_version")},{help:o(()=>[s(' In der Einstellung "Automatisch" wird die Version zwischen Client und Server ausgehandelt. Wenn erforderlich, kann eine spezielle Version erzwungen werden. Versionen kleiner 1.2 gelten als veraltet und sollten nicht mehr verwendet werden. ')]),_:2},1032,["model-value","onUpdate:modelValue"]),n(d,{title:"Brücke signalisieren",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":l.remote.try_private,"onUpdate:modelValue":t=>e.updateState(a,t,"remote.try_private")},{help:o(()=>[s(" Aktiviert eine proprietäre Protokoll-Erweiterung des Mosquitto Brokers, welche dem entfernten Broker signalisiert dass es sich um eine MQTT Brücke handelt. Ergibt bessere Leistung mit Mosquitto-Brokern, ist jedoch inkompatibel mit vielen anderen MQTT-Brokern. Daher bitte nur aktivieren, wenn der Ziel-Broker sicher ein Mosquitto-Broker ist. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),R,n(k,null,{default:o(()=>[s("Datenübertragung")]),_:1}),n(d,{title:"Alle Statusdaten",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":l.data_transfer.status,"onUpdate:modelValue":t=>e.updateState(a,t,"data_transfer.status")},{help:o(()=>[s("ToDo...")]),_:2},1032,["model-value","onUpdate:modelValue"]),n(d,{title:"Datenserien für Diagramme",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":l.data_transfer.graph,"onUpdate:modelValue":t=>e.updateState(a,t,"data_transfer.graph")},{help:o(()=>[s("ToDo...")]),_:2},1032,["model-value","onUpdate:modelValue"]),n(d,{title:"Fernkonfiguration ermöglichen",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":l.data_transfer.configuration,"onUpdate:modelValue":t=>e.updateState(a,t,"data_transfer.configuration")},{help:o(()=>[s("ToDo...")]),_:2},1032,["model-value","onUpdate:modelValue"])]),_:2},1032,["title"])],8,$))),128))]))]),_:1})])],64)}const ne=I(N,[["render",j],["__scopeId","data-v-1ec2f2f5"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/MqttBridgeConfig.vue"]]);export{ne as default};
