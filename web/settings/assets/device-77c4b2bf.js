import{D as d}from"./HardwareInstallation-c87db356.js";import{_ as u,u as t,k as l,l as p,G as i,E as m,y as v}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-05d7e447.js";import"./index-dd504e8c.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceCarloGavazzi",mixins:[d]},f={class:"device-carlogavazzi"};function _(o,e,b,g,z,w){const r=t("openwb-base-heading"),s=t("openwb-base-text-input"),a=t("openwb-base-number-input");return l(),p("div",f,[i(r,null,{default:m(()=>e[3]||(e[3]=[v(" Einstellungen für Carlo Gavazzi ")])),_:1}),i(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),i(a,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.port"))},null,8,["model-value"]),i(a,{title:"Modbus ID",required:"","model-value":o.device.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.modbus_id"))},null,8,["model-value"])])}const G=u(c,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/carlo_gavazzi/carlo_gavazzi/device.vue"]]);export{G as default};