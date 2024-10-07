import{D as f}from"./HardwareInstallation-70f156e6.js";import{_ as g,u as d,k as t,l as b,D as l,N as a,y as i,A as s,B as u,x as p}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const w={name:"DeviceEnphase",mixins:[f]},y={class:"device-enphase"};function k(n,e,V,c,E,h){const m=d("openwb-base-heading"),r=d("openwb-base-text-input"),v=d("openwb-base-select-input");return t(),b("div",y,[l(m,null,{default:a(()=>e[6]||(e[6]=[i(" Einstellungen für Enphase Envoy / IQ Gateway ")])),_:1}),l(r,{title:"IP oder Hostname",subtype:"host",required:"","model-value":n.device.configuration.hostname,"onUpdate:modelValue":e[0]||(e[0]=o=>n.updateConfiguration(o,"configuration.hostname"))},{help:a(()=>e[7]||(e[7]=[i(' Bitte geben Sie die IP-Adresse oder den Hostnamen des Enphase Envoy oder IQ Gateway an. Die Info finden Sie in Ihrem Router. Ab Werk ist der Hostname "envoy" oder "envoy.local". ')])),_:1},8,["model-value"]),l(v,{title:"Version",required:"",options:[{value:1,text:"Firmware < 7.0"},{value:2,text:"Firmware ab 7.0"}],"model-value":n.device.configuration.version,"onUpdate:modelValue":e[1]||(e[1]=o=>n.updateConfiguration(o,"configuration.version"))},{help:a(()=>e[8]||(e[8]=[i(" Bitte wählen Sie die Version des Enphase Envoy oder IQ Gateway aus. Die Version 1 ist für Geräte mit einer Firmware-Version unter 7.0, die Version 2 für Geräte mit einer Firmware-Version ab 7.0. Ein angebundener Speicher wird nur bei Version 2 unterstützt. ")])),_:1},8,["model-value"]),n.device.configuration.version>1?(t(),s(r,{key:0,title:"Benutzer",subtype:"user","model-value":n.device.configuration.user,required:"","onUpdate:modelValue":e[2]||(e[2]=o=>n.updateConfiguration(o,"configuration.user"))},null,8,["model-value"])):u("",!0),n.device.configuration.version>1?(t(),s(r,{key:1,title:"Kennwort",subtype:"password","model-value":n.device.configuration.password,required:"","onUpdate:modelValue":e[3]||(e[3]=o=>n.updateConfiguration(o,"configuration.password"))},null,8,["model-value"])):u("",!0),n.device.configuration.version>1?(t(),s(r,{key:2,title:"Envoy Seriennummer","model-value":n.device.configuration.serial,required:"","onUpdate:modelValue":e[4]||(e[4]=o=>n.updateConfiguration(o,"configuration.serial"))},null,8,["model-value"])):u("",!0),n.device.configuration.version>1?(t(),s(r,{key:3,title:"Token",subtype:"password","model-value":n.device.configuration.token,required:"","onUpdate:modelValue":e[5]||(e[5]=o=>n.updateConfiguration(o,"configuration.token"))},{help:a(()=>e[9]||(e[9]=[i(" Wenn Benutzer, Kennwort und Seriennummer des Envoys angegeben werden, wird das Token automatisch beim Speichern abgerufen. Ebenfalls wird ein abgelaufenes Token (derzeit nach einem Jahr) automatisch erneuert."),p("br",null,null,-1),i(" Wenn Sie ein Token manuell erstellen möchten, können Sie dies auf der "),p("a",{href:"https://developer.enphase.com/docs/quickstart.html",target:"_blank",rel:"noopener"}," Enphase-Webseite ",-1),i(" erledigen. ")])),_:1},8,["model-value"])):u("",!0)])}const T=g(w,[["render",k],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/enphase/enphase/device.vue"]]);export{T as default};
