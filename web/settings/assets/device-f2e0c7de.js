import{D as p}from"./HardwareInstallation-6cc98da9.js";import{_ as r,u as t,k as d,l as m,D as n,N as l,y as u}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-dc0e711f.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceSmaWebbox",mixins:[p]},_={class:"device-sma-webbox"};function b(o,e,f,v,x,g){const i=t("openwb-base-heading"),s=t("openwb-base-text-input");return d(),m("div",_,[n(i,null,{default:l(()=>e[1]||(e[1]=[u(" Einstellungen für SMA Webbox ")])),_:1}),n(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=a=>o.updateConfiguration(a,"configuration.ip_address"))},null,8,["model-value"])])}const h=r(c,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma/sma_webbox/device.vue"]]);export{h as default};
