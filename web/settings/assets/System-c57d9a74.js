import{l as W,_ as S,p as q,$ as C,O as A,a0 as x,F as $}from"./vendor-fortawesome-838df0c9.js";import{C as E}from"./index-f08a7306.js";import{_ as U,p as c,k as g,l as y,A as s,L as o,q as a,z as k,u as d,n as v,y as z,G as F,I as T,x as j,Q as D,R as I}from"./vendor-20bb207d.js";import"./vendor-bootstrap-d275de6c.js";import"./vendor-jquery-89b63fca.js";import"./vendor-axios-13ef03ae.js";import"./vendor-sortablejs-ad1d2cc8.js";W.add(S,q,C,A,x);const L={name:"OpenwbSystem",mixins:[E],emits:["sendCommand"],components:{FontAwesomeIcon:$},data(){return{mqttTopicsToSubscribe:["openWB/system/current_commit","openWB/system/current_branch_commit","openWB/system/current_missing_commits","openWB/system/available_branches","openWB/system/current_branch"],warningAcknowledged:!1,selectedTag:"*HEAD*"}},computed:{updateAvailable(){return this.$store.state.mqtt["openWB/system/current_branch_commit"]&&this.$store.state.mqtt["openWB/system/current_branch_commit"]!=this.$store.state.mqtt["openWB/system/current_commit"]},releaseChangeValid(){return this.$store.state.mqtt["openWB/system/current_branch"]in this.$store.state.mqtt["openWB/system/available_branches"]&&"tags"in this.$store.state.mqtt["openWB/system/available_branches"][this.$store.state.mqtt["openWB/system/current_branch"]]&&(this.selectedTag in this.$store.state.mqtt["openWB/system/available_branches"][this.$store.state.mqtt["openWB/system/current_branch"]].tags||this.selectedTag=="*HEAD*")}},methods:{sendSystemCommand(t,e={}){this.$emit("sendCommand",{command:t,data:e})},getBranchGroups(){const t="Release",e="Beta",m="master",w=[t,e,m],p=(l,i)=>l.value==i.value?0:l.value==t?-1:i.value==t?1:l.value==e?-1:i.value==e?1:l.value==m?-1:i.value==m||l.value>i.value?1:l.value<i.value?-1:0;var r=this.$store.state.mqtt["openWB/system/available_branches"],h=[{label:"Allgemein",options:[]},{label:"Experimentell",options:[]}];if(r!==void 0){var u=0;for(const[l,i]of Object.entries(r))w.includes(l)?u=0:u=1,h[u].options.push({value:l,text:l+" ("+i.commit+")"});h[0].options.sort(p),h[1].options.sort(p)}return h},getBranchTagOptions(){if(!(this.$store.state.mqtt["openWB/system/current_branch"]in this.$store.state.mqtt["openWB/system/available_branches"]))return[];var t=this.$store.state.mqtt["openWB/system/available_branches"][this.$store.state.mqtt["openWB/system/current_branch"]].tags,e=[];if(t!==void 0)for(const[m,w]of Object.entries(t))e.unshift({value:m,text:w});return e.unshift({value:"*HEAD*",text:"Aktuellster Stand"}),e},updateConfiguration(t,e){console.debug("updateConfiguration",t,e),this.updateState(t,e.value,e.object)},systemUpdate(){this.sendSystemCommand("systemUpdate",{}),this.$store.commit("storeLocal",{name:"reloadRequired",value:!0})},switchBranch(){this.sendSystemCommand("systemUpdate",{branch:this.$store.state.mqtt["openWB/system/current_branch"],tag:this.selectedTag}),this.$store.commit("storeLocal",{name:"reloadRequired",value:!0})}}},f=t=>(D("data-v-059847f6"),t=t(),I(),t),N={class:"system"},O=f(()=>a("h2",null,"Achtung!",-1)),R=f(()=>a("p",null," Vor allen Aktionen auf dieser Seite ist sicherzustellen, dass kein Ladevorgang aktiv ist! Zur Sicherheit bitte zusätzlich alle Fahrzeuge von der Ladestation / den Ladestationen abstecken! ",-1)),Z={key:0},G={name:"versionInfoForm"},H={class:"missing-commits"},P={class:"row justify-content-center"},J={class:"col-md-4 d-flex py-1 justify-content-center"},Q={class:"col-md-4 d-flex py-1 justify-content-center"},K={name:"powerForm"},M={class:"row justify-content-center"},X={class:"col-md-4 d-flex py-1 justify-content-center"},Y={class:"col-md-4 d-flex py-1 justify-content-center"},ee={name:"releaseChangeForm"},te=f(()=>a("br",null,null,-1)),se=f(()=>a("br",null,null,-1)),ne=f(()=>a("br",null,null,-1)),ae=f(()=>a("br",null,null,-1)),oe={class:"row justify-content-center"},re={class:"col-md-4 d-flex py-1 justify-content-center"};function le(t,e,m,w,p,r){const h=c("openwb-base-button-group-input"),u=c("openwb-base-alert"),l=c("openwb-base-text-input"),i=c("openwb-base-card"),b=c("font-awesome-icon"),_=c("openwb-base-click-button"),B=c("openwb-base-select-input");return g(),y("div",N,[s(u,{subtype:"danger"},{default:o(()=>[O,R,s(h,{title:"Ich habe die Warnung verstanden",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],modelValue:this.warningAcknowledged,"onUpdate:modelValue":e[0]||(e[0]=n=>this.warningAcknowledged=n)},null,8,["modelValue"])]),_:1}),p.warningAcknowledged?(g(),y("div",Z,[a("form",G,[s(i,{title:"Versions-Informationen / Aktualisierung",subtype:"success",collapsible:!0,collapsed:!0},{footer:o(()=>[a("div",P,[a("div",J,[s(_,{class:"btn-info",onButtonClicked:e[4]||(e[4]=n=>r.sendSystemCommand("systemFetchVersions"))},{default:o(()=>[d(" Informationen aktualisieren "),s(b,{"fixed-width":"",icon:["fas","download"]})]),_:1})]),a("div",Q,[s(_,{class:v(r.updateAvailable?"btn-success clickable":"btn-outline-success"),disabled:!r.updateAvailable,onButtonClicked:e[5]||(e[5]=n=>r.systemUpdate())},{default:o(()=>[d(" Update "),s(b,{"fixed-width":"",icon:["fas","arrow-alt-circle-up"]})]),_:1},8,["class","disabled"])])])]),default:o(()=>[s(l,{title:"Entwicklungszweig",readonly:"",modelValue:t.$store.state.mqtt["openWB/system/current_branch"],"onUpdate:modelValue":e[1]||(e[1]=n=>t.$store.state.mqtt["openWB/system/current_branch"]=n)},null,8,["modelValue"]),s(l,{title:"installierte Version",readonly:"",class:v(r.updateAvailable?"text-danger":"text-success"),modelValue:t.$store.state.mqtt["openWB/system/current_commit"],"onUpdate:modelValue":e[2]||(e[2]=n=>t.$store.state.mqtt["openWB/system/current_commit"]=n)},null,8,["class","modelValue"]),s(l,{title:"aktuellste Version",readonly:"",modelValue:t.$store.state.mqtt["openWB/system/current_branch_commit"],"onUpdate:modelValue":e[3]||(e[3]=n=>t.$store.state.mqtt["openWB/system/current_branch_commit"]=n)},null,8,["modelValue"]),r.updateAvailable?(g(),z(i,{key:0,title:"Änderungen",subtype:"info",collapsible:!0,collapsed:!0},{default:o(()=>[a("ul",H,[(g(!0),y(F,null,T(t.$store.state.mqtt["openWB/system/current_missing_commits"],(n,V)=>(g(),y("li",{key:V},j(n),1))),128))])]),_:1})):k("v-if",!0),s(u,{subtype:"danger"},{default:o(()=>[d(" Nach einem Update wird die Ladestation direkt neu gestartet! Es werden alle eventuell vorhandenen lokalen Änderungen am Programmcode mit dem Update verworfen! ")]),_:1})]),_:1})]),a("form",K,[s(i,{title:"Betrieb",collapsible:!0,collapsed:!0},{footer:o(()=>[a("div",M,[a("div",X,[s(_,{class:"btn-warning",onButtonClicked:e[6]||(e[6]=n=>r.sendSystemCommand("systemReboot"))},{default:o(()=>[d(" Neustart "),s(b,{"fixed-width":"",icon:["fas","undo"]})]),_:1})]),a("div",Y,[s(_,{class:"btn-danger",onButtonClicked:e[7]||(e[7]=n=>r.sendSystemCommand("systemShutdown"))},{default:o(()=>[d(" Ausschalten "),s(b,{"fixed-width":"",icon:["fas","power-off"]})]),_:1})])])]),default:o(()=>[s(u,{subtype:"danger"},{default:o(()=>[d(" Wenn die Ladestation ausgeschaltet wird, muss sie komplett spannungsfrei geschaltet werden. Erst beim erneuten Zuschalten der Spannung fährt das System wieder hoch. ")]),_:1})]),_:1})]),a("form",ee,[s(i,{title:"Entwicklungszweig",subtype:"danger",collapsible:!0,collapsed:!0},{footer:o(()=>[a("div",oe,[a("div",re,[s(_,{class:v(r.releaseChangeValid?"btn-danger clickable":"btn-outline-danger"),disabled:!r.releaseChangeValid,onButtonClicked:e[10]||(e[10]=n=>r.switchBranch())},{default:o(()=>[s(b,{"fixed-width":"",icon:["fas","skull-crossbones"]}),d(" Branch und Tag wechseln "),s(b,{"fixed-width":"",icon:["fas","skull-crossbones"]})]),_:1},8,["class","disabled"])])])]),default:o(()=>[s(u,{subtype:"danger"},{default:o(()=>[d(" Nach einem Wechsel wird die Ladestation direkt neu gestartet! Es werden alle lokalen Änderungen mit dem Wechsel verworfen! ")]),_:1}),s(u,{subtype:"warning"},{default:o(()=>[d(" Bevor auf einen neuen Entwicklungszweig gewechselt wird sollte immer eine Sicherung erstellt werden! Es kann zwar wieder auf eine ältere Version gewechselt werden, jedoch ist nicht sichergestellt, dass es dabei keine Probleme gibt. Gerade wenn das Datenformat in der neuen Version angepasst wurde, wird eine ältere damit Fehler produzieren."),te,d(' Für den normalen Betrieb wird der Zweig "Release" empfohlen. Der Softwarestand wurde ausgiebig getestet, sodass ein Fehlverhalten relativ unwahrscheinlich ist.'),se,d(' Der "Beta" Zweig beinhaltet Vorabversionen, bei denen die Entwicklung soweit abgeschlossen ist. Die enthaltenen Anpassungen wurden rudimentär getestet, können aber durchaus noch Fehler enthalten.'),ne,d(' Die aktuelle Softwareentwicklung findet im Zweig "master" statt. Die enthaltenen Anpassungen sind teilweise noch nicht getestet und enthalten potentiell Fehler.'),ae,d(' Einträge, die mit "feature" beginnen, sind experimentelle Entwicklungszweige, die nicht für den allgemeinen Gebrauch gedacht sind. ')]),_:1}),s(B,{title:"Entwicklungszweig",groups:r.getBranchGroups(),"model-value":t.$store.state.mqtt["openWB/system/current_branch"],"onUpdate:modelValue":e[8]||(e[8]=n=>t.updateState("openWB/system/current_branch",n))},null,8,["groups","model-value"]),s(B,{title:"Tag",options:r.getBranchTagOptions(),modelValue:p.selectedTag,"onUpdate:modelValue":e[9]||(e[9]=n=>p.selectedTag=n)},null,8,["options","modelValue"])]),_:1})])])):k("v-if",!0)])}const be=U(L,[["render",le],["__scopeId","data-v-059847f6"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/System.vue"]]);export{be as default};
