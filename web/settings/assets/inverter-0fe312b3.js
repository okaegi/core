import{C as m}from"./HardwareInstallation-6cc98da9.js";import{_ as d,u as o,k as u,l,D as t,N as i,y as r}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-dc0e711f.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const g={name:"DeviceSigenergyInverter",mixins:[m]},_={class:"device-sigenergy-inverter"};function c(n,e,b,f,v,y){const s=o("openwb-base-heading"),p=o("openwb-base-number-input");return u(),l("div",_,[t(s,null,{default:i(()=>e[1]||(e[1]=[r(" Einstellungen für Sigenergy Wechselrichter ")])),_:1}),t(p,{title:"Modbus ID",required:"","model-value":n.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=a=>n.updateConfiguration(a,"configuration.modbus_id"))},{help:i(()=>e[2]||(e[2]=[r(" Die Standard-Modbus-ID von Sigenergy ist 247 ")])),_:1},8,["model-value"])])}const M=d(g,[["render",c],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sigenergy/sigenergy/inverter.vue"]]);export{M as default};
