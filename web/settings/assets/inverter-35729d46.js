import{C as r}from"./HardwareInstallation-c87db356.js";import{_ as p,u as o,k as l,l as u,G as n,E as c,y as m}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-05d7e447.js";import"./index-dd504e8c.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const d={name:"DeviceKostalStecaInverter",mixins:[r]},_={class:"device-kostal-steca-inverter"};function f(t,e,v,b,g,k){const a=o("openwb-base-heading"),i=o("openwb-base-button-group-input");return l(),u("div",_,[n(a,null,{default:c(()=>e[1]||(e[1]=[m(" Einstellungen für Kostal Piko MP oder Steca Grid Coolcept Wechselrichter ")])),_:1}),n(i,{title:"Variante",buttons:[{buttonValue:!1,text:"Kostal Piko MP (non-plus)"},{buttonValue:!0,text:"Kostal Piko MP oder Steca Grid Coolcept"}],"model-value":t.component.configuration.variant_steca,"onUpdate:modelValue":e[0]||(e[0]=s=>t.updateConfiguration(s,"configuration.variant_steca"))},null,8,["model-value"])])}const B=p(d,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/kostal/kostal_steca/inverter.vue"]]);export{B as default};