import{C as g}from"./index-e2dbf7bf.js";import p from"./InstallAssistantStepTemplate-c95c4891.js";import{a as h}from"./VehicleConfig-12242a8a.js";import{F as f}from"./vendor-fortawesome-3d19d475.js";import{_ as z,u as r,k as w,z as P,E as a,x as n,y as o,G as d}from"./vendor-06e11d0e.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const F={name:"InstallAssistantStep8",components:{InstallAssistantStepTemplate:p,VehicleConfigView:h,FontAwesomeIcon:f},mixins:[g],emits:["save","reset","defaults","sendCommand","switchPage","endAssistant"],data:()=>({mqttTopicsToSubscribe:[]}),methods:{nextPage(){this.$emit("switchPage",9)},previousPage(){this.$emit("switchPage",7)},endAssistant(){this.$emit("endAssistant")}}},A={class:"font-weight-bold"};function v(t,e,c,S,V,i){const l=r("FontAwesomeIcon"),u=r("VehicleConfigView"),m=r("InstallAssistantStepTemplate");return w(),P(m,{title:"7. Einrichten der Fahrzeuge",onNextPage:i.nextPage,onPreviousPage:i.previousPage,onEndAssistant:i.endAssistant},{help:a(()=>[e[6]||(e[6]=n("p",null,"Vor dem eigentlichen Fahrzeug werden zuerst die Fahrzeug- und Lade-Profile konfiguriert.",-1)),e[7]||(e[7]=n("p",null," Bei nur einem Fahrzeug reicht das Standard-Fahrzeug-Profil aus. Bei mehreren Fahrzeugtypen werden weitere Fahrzeug-Profile hinzugefügt. Im Anschluss werden die Fahrzeug-Profile mit den passenden Einstellungen des Fahrzeugtyps versehen (Mindeststromstärke, Maximalstromstärke bei einer/mehreren Phase/n sowie Angaben zur Batterie und Handhabung der Phasen entsprechend den Daten des Automobilherstellers. Im Zweifelsfall den Hersteller des Autos oder im openWB-Forum nachfragen). ",-1)),n("p",A,[e[4]||(e[4]=o(' Wichtig: Die "Angaben zur Handhabung von Phasen" des Fahrzeugs sind richtig einzutragen! Beachte die Hilfstexte, die Du durch Klick auf ')),d(l,{icon:["far","question-circle"]}),e[5]||(e[5]=o(" anzeigen kannst. "))]),e[8]||(e[8]=n("p",null," Bei nur einem Fahrzeug reicht das Standard-Lade-Profil aus. Bei mehreren Fahrzeugen können weitere Lade-Profile hinzugefügt werden. Dies erlaubt die Nutzung unterschiedlicher Lademodi je Fahrzeug (z.B. EV1 = Sofortladen, EV2 = PV-Laden). Im Anschluss werden die Voreinstellungen zu den verschiedenen Lademodi konfiguriert. ",-1)),e[9]||(e[9]=n("p",null," Nun wird das eigentliche Fahrzeug angelegt und mit dem gewünschten Fahrzeug-Profil / Lade-Profil versehen. Ist nur ein Fahrzeug vorhanden, reicht das Standard-Fahrzeug aus. ",-1)),e[10]||(e[10]=n("p",{class:"font-weight-bold"},"Änderungen werden nur durch Klicken auf Speichern wirksam!",-1))]),content:a(()=>[d(u,{"install-assistant-active":!0,onSendCommand:e[0]||(e[0]=s=>t.$emit("sendCommand",s)),onSave:e[1]||(e[1]=s=>t.$emit("save")),onReset:e[2]||(e[2]=s=>t.$emit("reset")),onDefaults:e[3]||(e[3]=s=>t.$emit("defaults"))})]),_:1},8,["onNextPage","onPreviousPage","onEndAssistant"])}const T=z(F,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/install_assistant/InstallAssistantStep8.vue"]]);export{T as default};
