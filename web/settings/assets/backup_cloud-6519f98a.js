import{_ as b,p as d,k as g,l as f,A as t,L as o,u as e,q as u,x as _}from"./vendor-20bb207d.js";import"./vendor-sortablejs-ad1d2cc8.js";const h={name:"BackupCloudOneDrive",emits:["update:configuration","sendCommand"],props:{configuration:{type:Object,required:!0}},data(){return{}},methods:{updateConfiguration(i,n=void 0){this.$emit("update:configuration",{value:i,object:n})},sendSystemCommand(i,n={}){this.$emit("sendCommand",{command:i,data:n})}}},v={class:"backup-cloud-onedrive"},k={class:"small"},w=u("br",null,null,-1),B=u("br",null,null,-1),C=u("br",null,null,-1),y=u("br",null,null,-1);function A(i,n,a,x,z,s){const c=d("openwb-base-heading"),m=d("openwb-base-alert"),r=d("openwb-base-text-input"),p=d("openwb-base-button-input");return g(),f("div",v,[t(c,null,{default:o(()=>[e(" Einstellungen für Onedrive Backup "),u("span",k,"(Modul: "+_(i.$options.name)+")",1)]),_:1}),t(m,{subtype:"info"},{default:o(()=>[e(" Zum Abruf der Zugangsberechtigung bitte die Konfiguration speichern, dann die Schritte 1-4 durchführen und danach die Konfiguration erneut speichern. "),w,e(" Auth Code und URL werden nur einmal benötigt werden nach erfolgreicher Autorisierung wieder gelöscht. ")]),_:1}),t(r,{title:"Backupverzeichnis in Onedrive",subtype:"text",required:"",pattern:"^/(.*/)*","model-value":a.configuration.backuppath,"onUpdate:modelValue":n[0]||(n[0]=l=>s.updateConfiguration(l,"configuration.backuppath"))},{help:o(()=>[e(" In diesem Verzeichnis werden die Backupdateien erstellt. Bitte den Pfad mit / beenden. "),B,e("Beispiel: /openWB/Backup/ ")]),_:1},8,["model-value"]),t(r,{title:"Anmeldedaten auf openWB gespeichert",readonly:"","model-value":a.configuration.persistent_tokencache?"Ja":"Nein"},null,8,["model-value"]),t(c,null,{default:o(()=>[e("Zugang zu Onedrive für diese openWB autorisieren")]),_:1}),t(p,{title:"1. Anmeldeanforderung erstellen",buttonText:"Autorisierungs-Code anfordern",subtype:"success",onButtonClicked:n[1]||(n[1]=l=>s.sendSystemCommand("requestMSALAuthCode",{}))},{help:o(()=>[e(" Es werden Zugangstokens für Onedrive angefordert. Diese werden nur lokal auf dieser openWB gespeichert. Genutzt wird Device Flow mit public application. "),C,e(" https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-device-code "),y,e(" https://learn.microsoft.com/en-us/azure/active-directory/develop/msal-client-applications ")]),_:1}),t(r,{title:"2. Diesen Code kopieren",subtype:"text",readonly:"","model-value":a.configuration.authcode},null,8,["model-value"]),t(r,{title:"3. Anmelde-URL aufrufen",subtype:"url",readonly:"","model-value":a.configuration.authurl},{help:o(()=>[e(" Diese URL im Browser öffnen und den Code eingeben. Dies erzeugt die notwendigen Zugangsberechtigung für diese openWB. ")]),_:1},8,["model-value"]),t(p,{title:"4. Token abrufen und speichern",buttonText:"Autorisierungs-Token abrufen",subtype:"success",onButtonClicked:n[2]||(n[2]=l=>s.sendSystemCommand("retrieveMSALTokens",{}))},{help:o(()=>[e(" Zugangstoken wird abgerufen und gespeichert, damit das Backup durchgeführt werden kann. Zugangstoken werden nur lokal auf dieser openWB gespeichert. ")]),_:1})])}const W=b(h,[["render",A],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/onedrive/backup_cloud.vue"]]);export{W as default};
