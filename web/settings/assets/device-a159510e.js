import{D as a}from"./HardwareInstallation-70f156e6.js";import{_ as d,u as t,k as u,l,D as i,N as m,y as c}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const _={name:"DeviceVictron",mixins:[a]},v={class:"device-victron"};function f(o,e,b,g,w,x){const r=t("openwb-base-heading"),s=t("openwb-base-text-input"),p=t("openwb-base-number-input");return u(),l("div",v,[i(r,null,{default:m(()=>e[2]||(e[2]=[c(" Einstellungen für Victron ")])),_:1}),i(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),i(p,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.port"))},null,8,["model-value"])])}const E=d(_,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/victron/victron/device.vue"]]);export{E as default};
