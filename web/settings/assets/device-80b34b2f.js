import{D as s}from"./HardwareInstallation-c87db356.js";import{_ as d,u as i,k as u,l as m,G as t,E as l,y as f}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-05d7e447.js";import"./index-dd504e8c.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const b={name:"DeviceAmpere",mixins:[s]},v={class:"device-ampere"};function _(o,e,c,g,w,C){const a=i("openwb-base-heading"),p=i("openwb-base-text-input"),r=i("openwb-base-number-input");return u(),m("div",v,[t(a,null,{default:l(()=>e[3]||(e[3]=[f(" Einstellungen für Ampere Pro")])),_:1}),t(p,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),t(r,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.port"))},null,8,["model-value"]),t(r,{title:"Modbus ID",required:"","model-value":o.device.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.modbus_id"))},null,8,["model-value"])])}const U=d(b,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/ampere/ampere/device.vue"]]);export{U as default};
