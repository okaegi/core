import{C as a}from"./HardwareInstallation-70f156e6.js";import{_ as r,u as o,k as l,l as u,D as n,N as m,y as c}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const d={name:"DeviceOpenwbEvukitBat",mixins:[a]},_={class:"device-openwb-evukit-bat"};function v(t,e,b,f,w,g){const i=o("openwb-base-heading"),s=o("openwb-base-select-input");return l(),u("div",_,[n(i,null,{default:m(()=>e[1]||(e[1]=[c(" Einstellungen für openWB EVU-Kit Batteriespeicher ")])),_:1}),n(s,{title:"Zählermodell","not-selected":"Bitte auswählen",options:[{value:0,text:"MPM3PM"},{value:1,text:"SDM120"},{value:2,text:"SDM630/SDM72D-M"}],"model-value":t.component.configuration.version,required:"","onUpdate:modelValue":e[0]||(e[0]=p=>t.updateConfiguration(p,"configuration.version"))},null,8,["model-value"])])}const $=r(d,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/openwb/openwb_evu_kit/bat.vue"]]);export{$ as default};
