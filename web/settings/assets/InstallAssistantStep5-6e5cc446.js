import{C as l}from"./index-b3b3d3af.js";import m from"./InstallAssistantStepTemplate-91cf66c6.js";import{H as u}from"./HardwareInstallation-2b28bae8.js";import{_ as p,u as r,k as g,z as f,E as a,x as n,G as w}from"./vendor-809787c9.js";import"./vendor-fortawesome-e760f6db.js";import"./vendor-bootstrap-5ce91dd7.js";import"./vendor-jquery-49acc558.js";import"./vendor-axios-57a82265.js";import"./vendor-sortablejs-d99a4022.js";import"./dynamic-import-helper-be004503.js";const h={name:"InstallAssistantStep5",components:{InstallAssistantStepTemplate:m,HardwareInstallationView:u},mixins:[l],emits:["save","reset","defaults","sendCommand","switchPage","endAssistant"],data:()=>({mqttTopicsToSubscribe:[]}),methods:{nextPage(){this.$emit("switchPage",6)},previousPage(){this.$emit("switchPage",3)},endAssistant(){this.$emit("endAssistant")}}};function c(t,e,v,S,b,i){const o=r("HardwareInstallationView"),d=r("InstallAssistantStepTemplate");return g(),f(d,{title:"4. Energiesystem - Geräte und Komponenten einrichten",onNextPage:i.nextPage,onPreviousPage:i.previousPage,onEndAssistant:i.endAssistant},{help:a(()=>e[4]||(e[4]=[n("p",null,' Diese openWB wurde als "primary" konfiguriert und übernimmt die Steuerung anderer openWBs, falls vorhanden, sowie die alleinige Regelung des Systems. Dazu müssen im Folgenden die Geräte und Komponenten eingerichtet werden. ',-1),n("p",null," Sofern das System nicht zurückgesetzt wurde, ist im Auslieferungszustand für erste Ladetests nach der WB-Montage ein virtueller Zähler vorkonfiguriert. Dieser muss zuerst gelöscht werden, wenn das im Gebäude installierte Energiesystem bestehend aus EVU-Zähler, PV-Anlage und ggf. Speicher in openWB konfiguriert wird. ",-1),n("p",null," Jedes verfügbare Gerät wird durch eine eigene IP-Adresse definiert. Dieses Gerät ist über den Herstellernamen des Energiesystems im Auswahlmenü der verfügbaren Geräte auszuwählen. Unterhalb des Gerätes werden die zugehörigen Komponenten EVU-Zähler, WR und Speicher konfiguriert. Es können je nach Bedarf beliebig viele Geräte und Komponenten miteinander kombiniert werden. ",-1),n("p",null," Bitte lesen Sie auch die Hinweistexte, welche durch Klicken auf das Fragezeichensymbol erscheinen. Hier sind weiterführende Informationen zu den Eingabefeldern zu finden. ",-1),n("p",{class:"font-weight-bold"},"Änderungen werden nur durch Klicken auf Speichern wirksam!",-1)])),content:a(()=>[w(o,{"install-assistant-active":!0,onSendCommand:e[0]||(e[0]=s=>t.$emit("sendCommand",s)),onSave:e[1]||(e[1]=s=>t.$emit("save")),onReset:e[2]||(e[2]=s=>t.$emit("reset")),onDefaults:e[3]||(e[3]=s=>t.$emit("defaults"))})]),_:1},8,["onNextPage","onPreviousPage","onEndAssistant"])}const x=p(h,[["render",c],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/install_assistant/InstallAssistantStep5.vue"]]);export{x as default};