import{D as d}from"./HardwareInstallation-6cc98da9.js";import{_ as l,u as o,k as u,l as m,D as i,N as r,y as t,x as c}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-dc0e711f.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceHttp",mixins:[d]},v={class:"device-http"};function _(n,e,b,g,x,w){const s=o("openwb-base-heading"),p=o("openwb-base-text-input");return u(),m("div",v,[i(s,null,{default:r(()=>e[1]||(e[1]=[t(" Einstellungen für Http ")])),_:1}),i(p,{title:"Server-URL",subtype:"url",required:"","model-value":n.device.configuration.url,"onUpdate:modelValue":e[0]||(e[0]=a=>n.updateConfiguration(a,"configuration.url"))},{help:r(()=>e[2]||(e[2]=[t(" Hier sind die Verbindungsangaben für den Http-Server einzutragen. Der Pfad für die einzelnen Daten wird in der Komponente hinterlegt."),c("br",null,null,-1),t(" Beispiel: http://mein.server:8080 ")])),_:1},8,["model-value"])])}const y=l(f,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/generic/http/device.vue"]]);export{y as default};
