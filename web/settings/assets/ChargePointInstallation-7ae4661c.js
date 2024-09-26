import{l as G,d as Q,a0 as X,A as Y,a9 as K,aa as ee,K as te,ab as ne,F as ae,I as oe}from"./vendor-fortawesome-71546160.js";import{_ as L,C as ie}from"./index-f1ebfb88.js";import{_ as E}from"./dynamic-import-helper-be004503.js";import{_ as U,u as g,k as i,l as m,A as f,N as o,y as s,z as v,D as n,x as p,a2 as D,a3 as M,J as S,K as I,B as h,q as F,a4 as O,P as le,S as se,U as re}from"./vendor-f2b8aa6f.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";const ue={name:"ChargePointConfigFallback",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},chargePointId:{default:void 0},chargePointType:String},methods:{updateConfiguration(e,a=void 0){this.$emit("update:configuration",{value:e,object:a})}}},de={class:"device-fallback"},pe={key:1};function me(e,a,r,P,c,d){const C=g("openwb-base-alert"),b=g("openwb-base-textarea");return i(),m("div",de,[Object.keys(r.configuration).length==0?(i(),f(C,{key:0,subtype:"info"},{default:o(()=>[s(' Der Ladepunkt-Typ "'+v(r.chargePointType)+'" bietet keine Einstellungen. ',1)]),_:1})):(i(),m("div",pe,[n(C,{subtype:"warning"},{default:o(()=>[s(' Es wurde keine Konfigurationsseite für den Ladepunkt-Typ "'+v(r.chargePointType)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(b,{title:"Konfiguration",subtype:"json","model-value":r.configuration,"onUpdate:modelValue":a[0]||(a[0]=B=>d.updateConfiguration(B,"configuration"))},{help:o(()=>[s(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),n(C,{subtype:"info"},{default:o(()=>[p("pre",null,v(JSON.stringify(r.configuration,void 0,2)),1)]),_:1})]))])}const ce=U(ue,[["render",me],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointConfigFallback.vue"]]),ge={name:"ChargePointCommandsFallback",props:{configuration:{type:Object,required:!0},chargePointId:{default:void 0},chargePointType:String}},he={class:"charge-point-commands-fallback"};function _e(e,a,r,P,c,d){const C=g("openwb-base-alert");return i(),m("div",he,[n(C,{subtype:"secondary"},{default:o(()=>[s(' Der Ladepunkt-Typ "'+v(r.chargePointType)+'" bietet keine Befehle an. ',1)]),_:1})])}const be=U(ge,[["render",_e],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointCommandsFallback.vue"]]),fe={name:"OpenwbChargePointProxy",emits:["update:configuration"],props:{chargePointId:{required:!0},chargePointType:{type:String,required:!0},configuration:{type:Object,required:!0},moduleName:{type:String,required:!1,default:void 0}},computed:{myChargePointSettingsComponent(){return console.debug(`loading charge point settings: ${this.chargePointType}`),D({loader:()=>E(Object.assign({"./external_openwb/chargePoint.vue":()=>L(()=>import("./chargePoint-dd6fab0a.js"),["assets/chargePoint-dd6fab0a.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css"]),"./internal_openwb/chargePoint.vue":()=>L(()=>import("./chargePoint-8dec0709.js"),["assets/chargePoint-8dec0709.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css"]),"./mqtt/chargePoint.vue":()=>L(()=>import("./chargePoint-0eec3eeb.js"),["assets/chargePoint-0eec3eeb.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css"]),"./openwb_dc_adapter/chargePoint.vue":()=>L(()=>import("./chargePoint-20a5e448.js"),["assets/chargePoint-20a5e448.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css"]),"./openwb_pro/chargePoint.vue":()=>L(()=>import("./chargePoint-5a865626.js"),["assets/chargePoint-5a865626.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css"]),"./openwb_series2_satellit/chargePoint.vue":()=>L(()=>import("./chargePoint-c6c27c6b.js"),["assets/chargePoint-c6c27c6b.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css"]),"./smartwb/chargePoint.vue":()=>L(()=>import("./chargePoint-f3aa01e8.js"),["assets/chargePoint-f3aa01e8.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css"])}),`./${this.chargePointType}/chargePoint.vue`),errorComponent:ce})},myChargePointCommandsComponent(){return console.debug(`loading charge point commands: ${this.chargePointType}`),D({loader:()=>E(Object.assign({"./openwb_pro/commands.vue":()=>L(()=>import("./commands-61e8eed9.js"),["assets/commands-61e8eed9.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css"])}),`./${this.chargePointType}/commands.vue`),errorComponent:be})}},methods:{updateConfiguration(e){this.$emit("update:configuration",e)}}},we=p("hr",null,null,-1);function ke(e,a,r,P,c,d){const C=g("openwb-base-heading");return i(),m(S,null,[n(C,null,{default:o(()=>[s(" Einstellungen für Ladepunkt "+v(r.moduleName),1)]),_:1}),(i(),f(M(d.myChargePointSettingsComponent),{configuration:r.configuration,chargePointId:r.chargePointId,chargePointType:r.chargePointType,"onUpdate:configuration":a[0]||(a[0]=b=>d.updateConfiguration(b))},null,40,["configuration","chargePointId","chargePointType"])),we,n(C,null,{default:o(()=>[s(" Befehle für Ladepunkt "+v(r.moduleName),1)]),_:1}),(i(),f(M(d.myChargePointCommandsComponent),{configuration:r.configuration,chargePointId:r.chargePointId,chargePointType:r.chargePointType},null,8,["configuration","chargePointId","chargePointType"]))],64)}const ve=U(fe,[["render",ke],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointProxy.vue"]]);G.add(Q,X,Y,K,ee,te,ne);const Ce={name:"OpenwbChargePointInstallationView",mixins:[ie],emits:["sendCommand"],components:{FontAwesomeIcon:ae,FontAwesomeLayers:oe,OpenwbChargePointProxy:ve},props:{installAssistantActive:{type:Boolean,required:!1,default:!1}},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/optional/dc_charging","openWB/optional/rfid/active","openWB/chargepoint/+/config","openWB/chargepoint/template/+","openWB/chargepoint/template/+/autolock/+","openWB/system/configurable/chargepoints","openWB/system/configurable/chargepoints_internal"],chargePointToAdd:void 0,showChargePointModal:!1,modalChargePointIndex:void 0,showChargePointTemplateModal:!1,modalChargePointTemplateIndex:void 0,showChargePointTemplateAutolockPlanModal:!1,modalChargePointTemplateAutolockPlanIndex:void 0}},computed:{dcChargingEnabled:{get(){return this.$store.state.mqtt["openWB/optional/dc_charging"]}},installedChargePoints:{get(){let e=this.getWildcardTopics("openWB/chargepoint/+/config"),a={};for(const[r,P]of Object.entries(e))(P.type==="internal_openwb"||this.$store.state.mqtt["openWB/general/extern"]===!1)&&(a[r]=P);return a}},chargePointTemplates:{get(){return this.getWildcardTopics("openWB/chargepoint/template/+")}},chargePointTemplateList:{get(){let e=[];return Object.keys(this.chargePointTemplates).forEach(a=>{let r=parseInt(a.match(/([0-9]+)/g)[0]),P=this.$store.state.mqtt["openWB/chargepoint/template/"+r].name;e.push({value:r,text:P})}),e}}},methods:{addChargePoint(e){e.stopPropagation(),this.$emit("sendCommand",{command:"addChargepoint",data:{type:this.chargePointToAdd}})},removeChargePointModal(e,a){a.stopPropagation(),this.modalChargePointIndex=parseInt(e.match(/(?:\/)(\d+)(?=\/)/)[1]),this.showChargePointModal=!0},removeChargePoint(e,a){this.showChargePointModal=!1,a=="confirm"&&(console.debug("request removal of charge point '"+e+"'"),this.$emit("sendCommand",{command:"removeChargepoint",data:{id:e}}))},getChargePointList(){return this.$store.state.mqtt["openWB/general/extern"]===!1?this.$store.state.mqtt["openWB/system/configurable/chargepoints"]:this.$store.state.mqtt["openWB/system/configurable/chargepoints_internal"]},getChargePointName(e){return this.$store.state.mqtt["openWB/chargepoint/"+e+"/config"]?this.$store.state.mqtt["openWB/chargepoint/"+e+"/config"].name:"Ladepunkt "+e},getChargePointTemplateName(e){return this.$store.state.mqtt["openWB/chargepoint/template/"+e]?this.$store.state.mqtt["openWB/chargepoint/template/"+e].name:"Profil "+e},addChargePointTemplate(e){e.stopPropagation(),this.$emit("sendCommand",{command:"addChargepointTemplate",data:{}})},getChargePointTemplateIndex(e){return parseInt(e.match(/([^/]+)$/)[0])},removeChargePointTemplateModal(e,a){a.stopPropagation(),this.modalChargePointTemplateIndex=this.getChargePointTemplateIndex(e),this.showChargePointTemplateModal=!0},removeChargePointTemplate(e,a){this.showChargePointTemplateModal=!1,a=="confirm"&&(console.debug("request removal of chargePoint template '"+e+"'"),this.$emit("sendCommand",{command:"removeChargepointTemplate",data:{id:e}}))},addChargePointTemplateAutolockPlan(e,a){a.stopPropagation(),console.info("requesting new charge point template autolock plan...");let r=this.getChargePointTemplateIndex(e);this.$emit("sendCommand",{command:"addAutolockPlan",data:{template:r}})},removeChargePointTemplateAutolockPlanModal(e,a,r){r.stopPropagation(),this.modalChargePointTemplateIndex=this.getChargePointTemplateIndex(e),this.modalChargePointTemplateAutolockPlanIndex=parseInt(a.match(/([^/]+)$/)[0]),this.showChargePointTemplateAutolockPlanModal=!0},removeChargePointTemplateAutolockPlan(e,a,r){this.showChargePointTemplateAutolockPlanModal=!1,r=="confirm"&&(console.debug("request removal of chargePoint template '"+e+"' autolock plan '"+a+"'"),this.$emit("sendCommand",{command:"removeAutolockPlan",data:{template:e,plan:a}}))},getChargePointTemplateAutolockPlanName(e,a){return this.$store.state.mqtt["openWB/chargepoint/template/"+e+"/autolock/"+a]?this.$store.state.mqtt["openWB/chargepoint/template/"+e+"/autolock/"+a].name:"Autolock Zeitplan "+e+"/"+a},getChargePointTemplateAutolockPlans(e){let a=this.getChargePointTemplateIndex(e);return this.getWildcardTopics("openWB/chargepoint/template/"+a+"/autolock/+")},updateConfiguration(e,a){console.debug("updateConfiguration",e,a),this.updateState(e,a.value,a.object)}}},w=e=>(se("data-v-75fe5743"),e=e(),re(),e),ye={class:"chargePointInstallation"},Pe={name:"chargePointInstallationForm"},Ve={key:0},Le=w(()=>p("hr",null,null,-1)),Be={key:1},Ae=w(()=>p("hr",null,null,-1)),We=w(()=>p("br",null,null,-1)),Se=w(()=>p("br",null,null,-1)),Te=w(()=>p("br",null,null,-1)),Ie=w(()=>p("br",null,null,-1)),Ue={key:0},xe={class:"col-1"},qe=w(()=>p("br",null,null,-1)),ze=w(()=>p("ul",null,[p("li",null," Interne openWB - wenn diese openWB über einen verbauten Ladepunkt mit Regelcontroller verfügt (z.B. Standard(+), Custom, Duo, Buchse, NICHT Standalone); ansonsten immer anlegen, egal ob diese openWB steuert = primary oder ferngesteuert wird = secondary "),p("li",null," Externe openWB - wenn diese openWB (primary) die Fernsteuerung von externen openWB (secondary) übernimmt "),p("li",null," MQTT-Ladepunkt - nur zur Nutzung des openWB-Simulators zugelassen "),p("li",null," openWB Pro - wenn diese openWB (primary) die Fernsteuerung einer openWB Pro (secondary) übernimmt "),p("li",null," openWB series2 Satellit/Satellit Duo - wenn diese openWB (primary) die Fernsteuerung einer openWB series2 Satellit/Satellit Duo (secondary) übernimmt "),p("li",null," smartWB/EVSE-Wifi - wenn diese openWB (primary) die Fernsteuerung einer smartWB/EVSE-Wifi übernimmt ")],-1)),Ee=w(()=>p("hr",{class:"border-secondary"},null,-1)),De={key:0},Me={key:1},Fe=w(()=>p("hr",null,null,-1)),Oe={key:1},Ne=w(()=>p("hr",null,null,-1)),Re=w(()=>p("br",null,null,-1)),je={key:0},Ze=w(()=>p("br",null,null,-1)),Je=w(()=>p("a",{href:"https://github.com/openWB/core/wiki/Lastmanagement-und-kaskadierte-Z%C3%A4hler",target:"_blank",rel:"noopener noreferrer"},"Wiki zum Lastmanagement",-1)),$e={key:2},He=w(()=>p("hr",null,null,-1)),Ge={key:4},Qe=w(()=>p("hr",null,null,-1)),Xe=["onClick"],Ye={key:0},Ke={key:1},et={key:2},tt={key:2};function nt(e,a,r,P,c,d){const C=g("openwb-base-modal-dialog"),b=g("font-awesome-icon"),B=g("openwb-base-avatar"),V=g("openwb-base-text-input"),x=g("openwb-base-select-input"),N=g("openwb-charge-point-proxy"),A=g("openwb-base-heading"),y=g("openwb-base-button-group-input"),T=g("openwb-base-card"),R=g("openwb-base-click-button"),j=g("font-awesome-layers"),q=g("openwb-base-alert"),Z=g("openwb-base-array-input"),z=g("openwb-base-range-input"),J=g("openwb-base-number-input"),$=g("openwb-base-submit-buttons");return i(),m(S,null,[n(C,{show:c.showChargePointModal,title:"Ladepunkt löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:a[0]||(a[0]=l=>d.removeChargePoint(c.modalChargePointIndex,l))},{default:o(()=>[s(' Wollen Sie den Ladepunkt "'+v(d.getChargePointName(c.modalChargePointIndex))+'" (ID: '+v(c.modalChargePointIndex)+") wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ",1)]),_:1},8,["show"]),n(C,{show:c.showChargePointTemplateModal,title:"Ladepunkt-Profil löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:a[1]||(a[1]=l=>d.removeChargePointTemplate(c.modalChargePointTemplateIndex,l))},{default:o(()=>[s(' Wollen Sie das Ladepunkt-Profil "'+v(d.getChargePointTemplateName(c.modalChargePointTemplateIndex))+'" (ID: '+v(c.modalChargePointTemplateIndex)+") wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ",1)]),_:1},8,["show"]),n(C,{show:c.showChargePointTemplateAutolockPlanModal,title:"Autolock Zeitplan löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:a[2]||(a[2]=l=>d.removeChargePointTemplateAutolockPlan(c.modalChargePointTemplateIndex,c.modalChargePointTemplateAutolockPlanIndex,l))},{default:o(()=>[s(' Wollen Sie den Autolock Zeitplan "'+v(d.getChargePointTemplateAutolockPlanName(c.modalChargePointTemplateIndex,c.modalChargePointTemplateAutolockPlanIndex))+'" wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ',1)]),_:1},8,["show"]),p("div",ye,[p("form",Pe,[n(T,{title:"Ladepunkte",subtype:"primary",collapsible:!0,collapsed:!r.installAssistantActive},{header:o(()=>[n(b,{"fixed-width":"",icon:["fas","charging-station"]}),s(" Ladepunkte ")]),default:o(()=>[(i(!0),m(S,null,I(d.installedChargePoints,(l,u)=>(i(),f(T,{key:u,title:l.name+" (ID: "+l.id+")",collapsible:!0,collapsed:!0,subtype:"primary"},{actions:o(t=>[t.collapsed?h("",!0):(i(),f(B,{key:0,class:"bg-danger clickable",onClick:k=>d.removeChargePointModal(u,k)},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"]))]),default:o(()=>[n(V,{title:"Bezeichnung",subtype:"text","model-value":l.name,"onUpdate:modelValue":t=>e.updateState(u,t,"name")},null,8,["model-value","onUpdate:modelValue"]),n(V,{title:"Modul",subtype:"text",disabled:"",readonly:"","model-value":e.$store.state.mqtt[u].type},null,8,["model-value"]),l.type!=="internal_openwb"||e.$store.state.mqtt["openWB/general/extern"]===!1?(i(),m("span",Ve,[n(x,{title:"Ladepunkt-Profil",options:d.chargePointTemplateList,"model-value":e.$store.state.mqtt[u].template,"onUpdate:modelValue":t=>e.updateState(u,t,"template")},null,8,["options","model-value","onUpdate:modelValue"])])):h("",!0),Le,n(N,{chargePointId:l.id,chargePointType:e.$store.state.mqtt[u].type,moduleName:e.$store.state.mqtt[u].name,configuration:l.configuration,"onUpdate:configuration":t=>d.updateConfiguration(u,t)},null,8,["chargePointId","chargePointType","moduleName","configuration","onUpdate:configuration"]),(l.type!=="internal_openwb"||e.$store.state.mqtt["openWB/general/extern"]===!1)&&l.charging_type!=="DC"?(i(),m("div",Be,[Ae,n(A,null,{default:o(()=>[s("Hardware-Optionen")]),_:1}),n(y,{title:"automatische Phasenumschaltung vorhanden",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":l.auto_phase_switch_hw,"onUpdate:modelValue":t=>e.updateState(u,t,"auto_phase_switch_hw")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Control-Pilot-Unterbrechung vorhanden",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":l.control_pilot_interruption_hw,"onUpdate:modelValue":t=>e.updateState(u,t,"control_pilot_interruption_hw")},{help:o(()=>[s(' Die Control-Pilot-Leitung ist im Ladekabel integriert und dient der Steuerung der Fahrzeugladung (An/Aus/Stromvorgaben). Bei einigen Fahrzeugen können durch die Regelung erzwungene, längere Ladestopps (z.B. beim PV-Laden) zu unerwünschten "Einschlaf"-Effekten des Fahrzeuges führen. Mit diesem feature, welches hardwareseitig verbaut sein muss, kann ein Abstecken des Ladesteckers simuliert werden, um ein Aufwecken des Fahrzeuges zu ermöglichen. Die Funktion hängt immer auch vom Fahrzeugtyp ab. ')]),_:2},1032,["model-value","onUpdate:modelValue"]),n(A,null,{default:o(()=>[s(" Elektrischer Anschluss ")]),_:1}),n(y,{title:"Anzahl angeschlossener Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:2,text:"2"},{buttonValue:3,text:"3"}],"model-value":l.connected_phases,"onUpdate:modelValue":t=>e.updateState(u,t,"connected_phases")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Phase 1 des Ladekabels",buttons:[{buttonValue:1,text:"EVU L1"},{buttonValue:2,text:"EVU L2"},{buttonValue:3,text:"EVU L3"}],"model-value":l.phase_1,"onUpdate:modelValue":t=>e.updateState(u,t,"phase_1")},{help:o(()=>[s(" Hier ist anzugeben, an welcher Phase des Hausanschlusses (EVU-Punkt) die Phase 1 dieses Ladepunktes angeschlossen ist. Diese Information wird für das Lastmanagement benötigt, um bei einer Schieflast gezielt einzelne Ladepunkte zu drosseln."),We,s(' Bei mehreren Ladepunkten macht es Sinn, die Phasen der LP rotierend anzuschließen, damit mehrere "nicht-dreiphasig" ladende Fahrzeuge mit optimaler Leistung laden können, bevor das Lastmanagement eingreift.'),Se,s(" Es wird vorausgesetzt, dass das Drehfeld innerhalb der Installation gleich bleibt. Wenn z.B. L1 des Ladepunktes auf EVU-L2 liegt, muss L2 des Ladepunktes auf EVU-L3 aufgelegt sein (und L3 des Ladepunktes auf EVU-L1)."),Te,s(" Eine Möglichkeit, die zur Ladepunktphase L1 zugehörige EVU-Phase zu ermitteln, ist eine einphasige Ladung zu starten und die Phasenströme am EVU-Zähler zu beobachten. Mit einem zweiphasig ladenden Fahrzeug kann danach auch der Anschluss von L2 ermittelt und so das Drehfeld kontrolliert werden."),Ie,s(" Im Zweifel bitte das Drehfeld von einer Fachkraft prüfen und korrigieren lassen. ")]),_:2},1032,["model-value","onUpdate:modelValue"])])):h("",!0)]),_:2},1032,["title"]))),128)),Object.keys(d.installedChargePoints).length>0?(i(),m("hr",Ue)):h("",!0),n(x,{class:"mb-2",title:"Verfügbare Ladepunkte",notSelected:"Bitte auswählen",options:d.getChargePointList(),"model-value":c.chargePointToAdd,"onUpdate:modelValue":a[3]||(a[3]=l=>c.chargePointToAdd=l)},{append:o(()=>[p("span",xe,[n(R,{class:F(c.chargePointToAdd===void 0?"btn-outline-success":"btn-success"),disabled:c.chargePointToAdd===void 0,onButtonClicked:d.addChargePoint},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","plus"]})]),_:1},8,["class","disabled","onButtonClicked"])])]),help:o(()=>[s(" Bitte einen Ladepunkt auswählen, der der openWB-Regelung hinzugefügt werden soll."),qe,ze]),_:1},8,["options","model-value"])]),_:1},8,["collapsed"]),Ee,n(T,{title:"Ladepunkt-Profile",collapsible:!0,collapsed:!0},{header:o(()=>[n(j,{"fixed-width":"",class:"fa-lg"},{default:o(()=>[n(b,{"fixed-width":"",icon:["far","file"]}),n(b,{"fixed-width":"",icon:["fas","charging-station"],transform:"shrink-8"})]),_:1}),s(" Ladepunkt-Profile ")]),actions:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!1?(i(),f(B,{key:0,class:"bg-success clickable",onClick:d.addChargePointTemplate},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","plus"]})]),_:1},8,["onClick"])):h("",!0)]),default:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(i(),m("div",De,[n(q,{subtype:"info"},{default:o(()=>[s(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(i(),m("div",Me,[(i(!0),m(S,null,I(d.chargePointTemplates,(l,u)=>(i(),f(T,{key:u,title:l.name+" (ID: "+d.getChargePointTemplateIndex(u)+")",collapsible:!0,collapsed:!0},O({default:o(()=>[n(V,{title:"Bezeichnung",subtype:"text","model-value":l.name,"onUpdate:modelValue":t=>e.updateState(u,t,"name"),disabled:u.endsWith("/0")},O({_:2},[u.endsWith("/0")?{name:"help",fn:o(()=>[s(" Das Standard-Profil kann nicht umbenannt werden. ")]),key:"0"}:void 0]),1032,["model-value","onUpdate:modelValue","disabled"]),d.dcChargingEnabled===!0?(i(),f(y,{key:0,title:"Typ des Ladeprofils",buttons:[{buttonValue:"AC",text:"AC"},{buttonValue:"DC",text:"DC"}],"model-value":l.charging_type,"onUpdate:modelValue":t=>e.updateState(u,t,"charging_type")},null,8,["model-value","onUpdate:modelValue"])):h("",!0),Fe,n(A,null,{default:o(()=>[s(" Zugangskontrolle ")]),_:1}),n(y,{title:"Sperre nach Abstecken",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":l.disable_after_unplug,"onUpdate:modelValue":t=>e.updateState(u,t,"disable_after_unplug")},{help:o(()=>[s(" Sperrt den Ladepunkt nach Abstecken eines Fahrzeuges ")]),_:2},1032,["model-value","onUpdate:modelValue"]),e.$store.state.mqtt["openWB/optional/rfid/active"]===!0&&!r.installAssistantActive?(i(),m("div",Oe,[l.disable_after_unplug?(i(),f(Z,{key:0,title:"Zugeordnete ID-Tags",noElementsMessage:"Keine ID-Tags zugeordnet.","model-value":l.valid_tags,"onUpdate:modelValue":t=>e.updateState(u,t,"valid_tags")},{help:o(()=>[s(" Die hier eingetragenen ID-Tags dienen ausschließlich zum Entsperren des Ladepunktes. ")]),_:2},1032,["model-value","onUpdate:modelValue"])):h("",!0)])):h("",!0),Ne,n(A,null,{default:o(()=>[s(" Angaben zum konfigurierten Ladestrom der openWB ")]),_:1}),n(q,{subtype:"info"},{default:o(()=>[s(" Hier werden die maximalen Ladeströme entsprechend der in dem zugeordneten Ladepunkt genutzten Phasen eingestellt."),Re,s(" Generell gilt, dass diese Werte in Übereinstimmung mit der Ausführung des Ladepunktes und des elektrischen Anschlusses bzw. der Absicherung zu wählen sind. "),l.charging_type==="AC"?(i(),m("span",je," Bei einer openWB mit 22kW Maximalleistung sind hier jeweils 32A einzustellen. Ist die openWB beispielsweise auf 11kW begrenzt (KfW-Förderung oder die Zuleitung ist mit 16A abgesichert), dann sind hier jeweils 16A einzustellen. ")):h("",!0),Ze,s(" Komplexere Installationen mit mehreren Ladepunkten werden im "),Je,s(" beschrieben. ")]),_:2},1024),l.charging_type==="AC"||d.dcChargingEnabled!==!0?(i(),m("div",$e,[n(z,{title:"Maximalstrom bei einer Phase",min:6,max:32,step:1,unit:"A","model-value":l.max_current_single_phase,"onUpdate:modelValue":t=>e.updateState(u,t,"max_current_single_phase")},null,8,["model-value","onUpdate:modelValue"]),n(z,{title:"Maximalstrom mehrere Phasen",min:6,max:32,step:1,unit:"A","model-value":l.max_current_multi_phases,"onUpdate:modelValue":t=>e.updateState(u,t,"max_current_multi_phases")},null,8,["model-value","onUpdate:modelValue"])])):(i(),f(J,{key:3,title:"Maximalleistung",min:75,max:300,step:75,unit:"kW",precision:5,"model-value":e.ac_current2dc_power(l.dc_max_current),"onUpdate:modelValue":t=>e.updateState(u,e.dc_power2ac_current(t),"dc_max_current")},null,8,["model-value","onUpdate:modelValue"])),He,r.installAssistantActive?h("",!0):(i(),m("div",Ge,[Qe,n(A,null,{default:o(()=>[s("Automatische Sperre")]),_:1}),n(y,{title:"Automatische Sperre aktiv",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":l.autolock.active,"onUpdate:modelValue":t=>e.updateState(u,t,"autolock.active")},{help:o(()=>[s(" Wird die automatische Sperre aktiviert, können Fahrzeugladungen mittels Zeitplan auf gewünschte Zeitbereiche eingeschränkt werden. Dies kann z.B. bei Zugänglichkeiten zu Ladepunkten in öffentlichen oder halb-öffentlichen Bereichen sinnvoll sein. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),n(y,{title:"Erst nach Ladeende sperren",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":l.autolock.wait_for_charging_end,"onUpdate:modelValue":t=>e.updateState(u,t,"autolock.wait_for_charging_end")},{help:o(()=>[s(' Wenn ein Zeitplan die automatische Sperre aktiviert, werden alle Ladepunkte direkt gesperrt und laufende Ladevorgänge beendet. Wird hier "Ja" ausgewählt, dann werden laufende Ladevorgänge NICHT beendet und diese Ladepunkte erst nach abgeschlossener Ladung gesperrt. ')]),_:2},1032,["model-value","onUpdate:modelValue"]),n(A,null,{actions:o(()=>[n(B,{class:"bg-success clickable",onClick:t=>d.addChargePointTemplateAutolockPlan(u,t)},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","plus"]})]),_:2},1032,["onClick"])]),default:o(()=>[s(" Zeitpläne für die automatische Sperre ")]),_:2},1024)])),(i(!0),m(S,null,I(d.getChargePointTemplateAutolockPlans(u),(t,k)=>(i(),f(T,{key:k,title:t.name,collapsible:!0,collapsed:!0},{actions:o(_=>[_.collapsed==!0?(i(),m("span",{key:0,onClick:le(W=>e.updateState(k,!t.active,"active"),["stop"]),class:F(["subheader pill clickable",t.active?"bg-success":"bg-danger"])},[n(b,{"fixed-width":"",icon:["fas","clock"]}),s(" "+v(t.time[0])+" - "+v(t.time[1])+" ",1),t.frequency.selected=="once"?(i(),m("span",Ye,[n(b,{"fixed-width":"",icon:["fas","calendar-day"]}),s(" "+v(e.formatDate(t.frequency.once[0])==e.formatDate(t.frequency.once[1])?e.formatDate(t.frequency.once[0]):e.formatDate(t.frequency.once[0])+" - "+e.formatDate(t.frequency.once[1])),1)])):h("",!0),t.frequency.selected=="daily"?(i(),m("span",Ke,[n(b,{"fixed-width":"",icon:["fas","calendar-week"]})])):h("",!0),t.frequency.selected=="weekly"?(i(),m("span",et,[n(b,{"fixed-width":"",icon:["fas","calendar-alt"]})])):h("",!0)],10,Xe)):h("",!0),_.collapsed==!1?(i(),f(B,{key:1,class:"bg-danger clickable",onClick:W=>d.removeChargePointTemplateAutolockPlanModal(u,k,W)},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"])):h("",!0)]),default:o(()=>[n(V,{title:"Bezeichnung","model-value":t.name,"onUpdate:modelValue":_=>e.updateState(k,_,"name")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Zeitplan aktiv",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":t.active,"onUpdate:modelValue":_=>e.updateState(k,_,"active")},null,8,["model-value","onUpdate:modelValue"]),n(V,{title:"Sperren um",subtype:"time","model-value":t.time[0],"onUpdate:modelValue":_=>e.updateState(k,_,"time.0")},null,8,["model-value","onUpdate:modelValue"]),n(V,{title:"Freigeben um",subtype:"time","model-value":t.time[1],"onUpdate:modelValue":_=>e.updateState(k,_,"time.1")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Wiederholungen",buttons:[{buttonValue:"once",text:"Einmalig",class:"btn-outline-info"},{buttonValue:"daily",text:"Täglich",class:"btn-outline-info"},{buttonValue:"weekly",text:"Wöchentlich",class:"btn-outline-info"}],"model-value":t.frequency.selected,"onUpdate:modelValue":_=>e.updateState(k,_,"frequency.selected")},null,8,["model-value","onUpdate:modelValue"]),t.frequency.selected=="once"?(i(),f(V,{key:0,title:"Sperren ab ...",subtype:"date","model-value":t.frequency.once[0],"onUpdate:modelValue":_=>e.updateState(k,_,"frequency.once.0")},null,8,["model-value","onUpdate:modelValue"])):h("",!0),t.frequency.selected=="once"?(i(),f(V,{key:1,title:"... bis",subtype:"date",min:t.frequency.once[0],"model-value":t.frequency.once[1],"onUpdate:modelValue":_=>e.updateState(k,_,"frequency.once.1")},null,8,["min","model-value","onUpdate:modelValue"])):h("",!0),t.frequency.selected=="weekly"?(i(),m("div",tt,[(i(!0),m(S,null,I(e.weekdays,(_,W)=>(i(),f(y,{key:W,title:_,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":t.frequency.weekly[W],"onUpdate:modelValue":H=>e.updateState(k,H,"frequency.weekly."+W)},null,8,["title","model-value","onUpdate:modelValue"]))),128))])):h("",!0)]),_:2},1032,["title"]))),128))]),_:2},[u.endsWith("/0")?void 0:{name:"actions",fn:o(t=>[t.collapsed?h("",!0):(i(),f(B,{key:0,class:"bg-danger clickable",onClick:k=>d.removeChargePointTemplateModal(u,k)},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"]))]),key:"0"}]),1032,["title"]))),128))]))]),_:1}),n($,{formName:"chargePointInstallationForm",onSave:a[4]||(a[4]=l=>e.$emit("save")),onReset:a[5]||(a[5]=l=>e.$emit("reset")),onDefaults:a[6]||(a[6]=l=>e.$emit("defaults"))})])])],64)}const pt=U(Ce,[["render",nt],["__scopeId","data-v-75fe5743"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/ChargePointInstallation.vue"]]);export{pt as default};
