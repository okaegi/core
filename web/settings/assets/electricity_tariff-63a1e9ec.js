import{E as o}from"./GeneralChargeConfig-f6ca097b.js";import{_ as a,u as n,k as s,l as c,D as l,N as p,y as f}from"./vendor-a21b3a62.js";import"./index-f9fda857.js";import"./vendor-fortawesome-41164876.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const d={name:"ElectricityTariffAwattar",mixins:[o]},u={class:"electricity-tariff-awattar"};function m(t,e,_,w,y,b){const i=n("openwb-base-select-input");return s(),c("div",u,[l(i,{title:"Land","not-selected":"Bitte auswählen",options:[{value:"de",text:"Deutschland"},{value:"at",text:"Österreich"}],"model-value":t.electricityTariff.configuration.country,"onUpdate:modelValue":e[0]||(e[0]=r=>t.updateConfiguration(r,"configuration.country"))},{help:p(()=>e[1]||(e[1]=[f(" Es werden die abgefragten Börsenpreise verwendet, die aWATTar bereitstellt. aWATTar-Gebühren oder Steuern werden nicht berücksichtigt. ")])),_:1},8,["model-value"])])}const $=a(d,[["render",m],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/awattar/electricity_tariff.vue"]]);export{$ as default};
