import{C as p}from"./HardwareInstallation-6cc98da9.js";import{_ as a,u as n,k as m,l as u,D as t,N as d,y as l}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-dc0e711f.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceDeyeCounter",mixins:[p]},_={class:"device-deye-counter"};function b(o,e,f,v,g,C){const i=n("openwb-base-heading"),r=n("openwb-base-number-input");return m(),u("div",_,[t(i,null,{default:d(()=>e[1]||(e[1]=[l(" Einstellungen für Deye Zähler ")])),_:1}),t(r,{title:"Modbus ID",required:"","model-value":o.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=s=>o.updateConfiguration(s,"configuration.modbus_id"))},null,8,["model-value"])])}const h=a(c,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/deye/deye/counter.vue"]]);export{h as default};
