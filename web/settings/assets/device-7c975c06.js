import{D as r}from"./HardwareInstallation-6cc98da9.js";import{_ as p,u as i,k as d,l as u,D as t,N as l,y as m}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-dc0e711f.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceSunways",mixins:[r]},f={class:"device-sunways"};function v(o,e,w,_,b,g){const a=i("openwb-base-heading"),s=i("openwb-base-text-input");return d(),u("div",f,[t(a,null,{default:l(()=>e[2]||(e[2]=[m(" Einstellungen für Sunways ")])),_:1}),t(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),t(s,{title:"Passwort",subtype:"password",required:"","model-value":o.device.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.password"))},null,8,["model-value"])])}const q=p(c,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sunways/sunways/device.vue"]]);export{q as default};
