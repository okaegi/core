import{D as u}from"./HardwareInstallation-70f156e6.js";import{_ as d,u as i,k as p,l,D as t,N as m,y as _}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceZCS",mixins:[u]},f={class:"device-azzurro_zcs"};function b(o,e,v,g,z,w){const a=i("openwb-base-heading"),s=i("openwb-base-text-input"),r=i("openwb-base-number-input");return p(),l("div",f,[t(a,null,{default:m(()=>e[3]||(e[3]=[_(" Einstellungen für Azzurro ZCS ")])),_:1}),t(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),t(r,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.port"))},null,8,["model-value"]),t(r,{title:"Modbus ID",required:"","model-value":o.device.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.modbus_id"))},null,8,["model-value"])])}const U=d(c,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/azzurro_zcs/azzurro_zcs/device.vue"]]);export{U as default};
