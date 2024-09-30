import{B as c}from"./DataManagement-ad71d105.js";import{_ as m,u as a,k as b,l as f,D as t,N as r,y as n,x as i}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-dc0e711f.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const g={name:"BackupCloudOneDrive",mixins:[c]},v={class:"backup-cloud-one-drive"};function k(o,e,h,w,B,C){const d=a("openwb-base-alert"),u=a("openwb-base-text-input"),p=a("openwb-base-heading"),l=a("openwb-base-button-input");return b(),f("div",v,[t(d,{subtype:"info"},{default:r(()=>e[3]||(e[3]=[n(" Zum Abruf der Zugangsberechtigung bitte die Konfiguration speichern, dann die Schritte 1-4 durchführen und danach die Konfiguration erneut speichern. "),i("br",null,null,-1),n(" Auth Code und URL werden nur einmal benötigt werden nach erfolgreicher Autorisierung wieder gelöscht. ")])),_:1}),t(u,{title:"Backupverzeichnis in OneDrive",subtype:"text",required:"",pattern:"^/(.*/)*","model-value":o.backupCloud.configuration.backuppath,"onUpdate:modelValue":e[0]||(e[0]=s=>o.updateConfiguration(s,"configuration.backuppath"))},{help:r(()=>e[4]||(e[4]=[n(" In diesem Verzeichnis werden die Backupdateien erstellt. Bitte den Pfad mit / beenden. "),i("br",null,null,-1),n(" Beispiel: /openWB/Backup/ ")])),_:1},8,["model-value"]),t(u,{title:"Anmeldedaten auf openWB gespeichert",readonly:"","model-value":o.backupCloud.configuration.persistent_tokencache?"Ja":"Nein"},null,8,["model-value"]),t(p,null,{default:r(()=>e[5]||(e[5]=[n(" Zugang zu OneDrive für diese openWB autorisieren ")])),_:1}),t(l,{title:"1. Anmeldeanforderung erstellen","button-text":"Autorisierungs-Code anfordern",subtype:"success",onButtonClicked:e[1]||(e[1]=s=>o.sendSystemCommand("requestMSALAuthCode",{}))},{help:r(()=>e[6]||(e[6]=[n(" Es werden Zugangstokens für OneDrive angefordert. Diese werden nur lokal auf dieser openWB gespeichert. Genutzt wird Device Flow mit public application."),i("br",null,null,-1),n(" Weitere Infos:"),i("br",null,null,-1),i("a",{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-device-code",target:"_blank",rel:"noopener noreferrer"},"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-device-code",-1),i("a",{href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/msal-client-applications",target:"_blank",rel:"noopener noreferrer"},"https://learn.microsoft.com/en-us/azure/active-directory/develop/msal-client-applications",-1)])),_:1}),t(u,{title:"2. Diesen Code kopieren",subtype:"text",readonly:"","model-value":o.backupCloud.configuration.authcode},null,8,["model-value"]),t(u,{title:"3. Anmelde-URL aufrufen",subtype:"url",readonly:"","model-value":o.backupCloud.configuration.authurl},{help:r(()=>e[7]||(e[7]=[n(" Diese URL im Browser öffnen und den Code eingeben. Dies erzeugt die notwendigen Zugangsberechtigung für diese openWB. ")])),_:1},8,["model-value"]),t(l,{title:"4. Token abrufen und speichern","button-text":"Autorisierungs-Token abrufen",subtype:"success",onButtonClicked:e[2]||(e[2]=s=>o.sendCommand("retrieveMSALTokens",{}))},{help:r(()=>e[8]||(e[8]=[n(" Zugangstoken wird abgerufen und gespeichert, damit das Backup durchgeführt werden kann. Zugangstoken werden nur lokal auf dieser openWB gespeichert. ")])),_:1})])}const L=m(g,[["render",k],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/onedrive/backup_cloud.vue"]]);export{L as default};
