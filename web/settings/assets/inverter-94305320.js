import{C as a}from"./HardwareInstallation-2b28bae8.js";import{_ as m,u as n,k as p,l,G as t,E as u,y as d}from"./vendor-809787c9.js";import"./vendor-fortawesome-e760f6db.js";import"./index-b3b3d3af.js";import"./vendor-bootstrap-5ce91dd7.js";import"./vendor-jquery-49acc558.js";import"./vendor-axios-57a82265.js";import"./vendor-sortablejs-d99a4022.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceSolarmaxInverter",mixins:[a]},_={class:"device-solarmax-inverter"};function b(o,e,f,v,x,g){const r=n("openwb-base-heading"),i=n("openwb-base-number-input");return p(),l("div",_,[t(r,null,{default:u(()=>e[1]||(e[1]=[d(" Einstellungen für Solarmax Wechselrichter ")])),_:1}),t(i,{title:"Modbus ID",required:"","model-value":o.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=s=>o.updateConfiguration(s,"configuration.modbus_id"))},null,8,["model-value"])])}const I=m(c,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solarmax/solarmax/inverter.vue"]]);export{I as default};