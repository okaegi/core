import{l as w,g as y,F as V}from"./vendor-fortawesome-a232ebab.js";import{C as B}from"./index-32dbd1fd.js";import{_ as v,p as a,l as m,q as r,y as h,L as s,A as e,a2 as z,z as g,k as l,u as n,n as F}from"./vendor-94c7fa64.js";import"./vendor-bootstrap-d1b85b1f.js";import"./vendor-jquery-0791eda0.js";import"./vendor-axios-e7fe81e0.js";import"./vendor-sortablejs-122866cd.js";w.add(y);const x={name:"OpenwbSupport",mixins:[B],emits:["sendCommand"],components:{FontAwesomeIcon:V},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/system/dataprotection_acknowledged"],sendDebugData:{email:"",serialNumber:"",installedComponents:"",vehicles:"",message:""},enableSendDebugButton:!0}},methods:{sendDebugMessage(){if(document.forms.supportForm.reportValidity())this.$emit("sendCommand",{command:"sendDebug",data:this.sendDebugData}),this.enableSendDebugButton=!1;else{console.log("form invalid");return}}}},C={class:"support"},W={name:"supportForm"},q={key:1},A={key:0},N={key:1},M={key:0},L=r("li",null,' Vergewissern Sie sich, dass mindestens die aktuelle "Stable" Version installiert ist. ',-1),U=r("li",null," Stellen Sie beim Absenden des Berichtes die Fehlerkonditionen her. Lädt ein Fahrzeug nicht, sollte es angeschlossen und nicht voll geladen sein. Ist PV laden betroffen, sollte die Sonne auch scheinen. Der Systembericht muss dann versendet werden, wenn der Fehler aktuell vorliegt. ",-1),E=r("li",null," Stellen Sie sicher, dass der Lademodus korrekt gewählt ist und im Falle von nicht ladenden Fahrzeugen, dass der Ladepunkt auch entsperrt wurde. ",-1),G=r("li",null," Das Auslesen der Systemkonfiguration erfolgt direkt nach den Klick auf Absenden und kann einige Zeit in Anspruch nehmen. Sie erhalten ca. 15 bis 30 Minuten nach Versand des Systemberichtes von uns automatisch eine E-Mail mit der Ticketnummer unter der die Anfrage bei uns registriert wurde. Wir melden uns bei ihnen. Bitte kontrollieren Sie daher immer auch den Spam Ordner auf eingehende Nachrichten. Erhalten Sie trotzdem keine Ticketnummer, ist das Versenden des Systemberichtes fehlgeschlagen. ",-1),P={class:"row justify-content-center"};function T(d,o,H,I,t,_){const p=a("router-link"),u=a("openwb-base-alert"),f=a("FontAwesomeIcon"),b=a("openwb-base-text-input"),c=a("openwb-base-textarea"),k=a("openwb-base-click-button"),S=a("openwb-base-card"),D=a("font-awesome-icon");return l(),m("div",C,[r("form",W,[d.$store.state.mqtt["openWB/system/dataprotection_acknowledged"]!==!0?(l(),h(u,{key:0,subtype:"danger"},{default:s(()=>[n(" Sie müssen der "),e(p,{to:"/System/DataProtection"},{default:s(()=>[n(" Datenschutzerklärung ")]),_:1}),n(" zustimmen, um einen Systembericht senden zu können. ")]),_:1})):(l(),m("div",q,[e(u,{subtype:"success"},{default:s(()=>[n(" Sie haben der "),e(p,{to:"/System/DataProtection"},{default:s(()=>[n(" Datenschutzerklärung ")]),_:1}),n(" zugestimmt und können Systemberichte senden. ")]),_:1}),e(S,{title:"Systembericht"},z({default:s(()=>[d.$store.state.mqtt["openWB/general/extern"]===!0?(l(),m("div",A,[e(u,{subtype:"info"},{default:s(()=>[n(' Diese openWB befindet sich im Modus "Nur Ladepunkt". Bitte senden Sie den Systembericht von der regelnden openWB. ')]),_:1})])):(l(),m("div",N,[d.$store.state.mqtt["openWB/system/dataprotection_acknowledged"]===!0?(l(),m("div",M,[e(u,{subtype:"info"},{default:s(()=>[r("ul",null,[r("li",null,[n(" Lesen Sie den Hilfetext, der durch Klick auf das "),e(f,{icon:["far","question-circle"]}),n(" angezeigt wird. Nehmen Sie das Wiki zur Hilfe. ")]),L,U,E,G])]),_:1}),e(b,{title:"E-Mail",required:"",subtype:"email",modelValue:t.sendDebugData.email,"onUpdate:modelValue":o[0]||(o[0]=i=>t.sendDebugData.email=i)},null,8,["modelValue"]),e(b,{title:"openWB Seriennummer",required:"",modelValue:t.sendDebugData.serialNumber,"onUpdate:modelValue":o[1]||(o[1]=i=>t.sendDebugData.serialNumber=i)},{help:s(()=>[n(" Die Seriennummer der openWB finden Sie außen am Gehäuse - bei Älteren innen im Gehäuse. Sie können uns aber auch eine Bestellnummer oder Rechnungsnummer übermitteln. Das Gehäuse muss nicht extra geöffnet werden! ")]),_:1},8,["modelValue"]),e(c,{title:"Verwendete Komponenten",required:"",minlength:"3",maxlength:"500",modelValue:t.sendDebugData.installedComponents,"onUpdate:modelValue":o[2]||(o[2]=i=>t.sendDebugData.installedComponents=i)},{help:s(()=>[n(" Geben Sie hier möglichst detailliert an, welche Anlagenkomponenten (EVU, PV, Speicher) angebunden sind. ")]),_:1},8,["modelValue"]),e(c,{title:"Fahrzeuge",required:"",minlength:"3",maxlength:"500",modelValue:t.sendDebugData.vehicles,"onUpdate:modelValue":o[3]||(o[3]=i=>t.sendDebugData.vehicles=i)},{help:s(()=>[n(" Geben Sie hier an, welche Fahrzeuge geladen werden (Hersteller, Modell, Baujahr). ")]),_:1},8,["modelValue"]),e(c,{title:"Problembeschreibung",required:"",minlength:"20",maxlength:"500",modelValue:t.sendDebugData.message,"onUpdate:modelValue":o[4]||(o[4]=i=>t.sendDebugData.message=i)},null,8,["modelValue"])])):g("v-if",!0)]))]),_:2},[d.$store.state.mqtt["openWB/general/extern"]===!1&&d.$store.state.mqtt["openWB/system/dataprotection_acknowledged"]===!0?{name:"footer",fn:s(()=>[r("div",P,[e(k,{class:F(["col-4",t.enableSendDebugButton?"btn-success":"btn-outline-success"]),disabled:!t.enableSendDebugButton,onButtonClicked:_.sendDebugMessage},{default:s(()=>[n(" Absenden ")]),_:1},8,["class","disabled","onButtonClicked"])])]),key:"0"}:void 0]),1024),t.enableSendDebugButton?g("v-if",!0):(l(),h(u,{key:0,subtype:"success"},{default:s(()=>[n(" Die Daten für den Fehlerbericht werden im Hintergrund zusammengestellt. Sie können diese Seite jetzt verlassen. "),e(D,{"fixed-width":"",icon:["fas","check"]})]),_:1}))]))])])}const X=v(x,[["render",T],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/Support.vue"]]);export{X as default};
