import{_ as p,p as o,k as r,l as c,A as a,L as _,u as m,q as f,x as g}from"./vendor-20bb207d.js";import"./vendor-sortablejs-ad1d2cc8.js";const v={name:"DeviceShelly",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},b={class:"device-shelly"},h={class:"small"};function w(t,e,i,x,y,s){const l=o("openwb-base-heading"),u=o("openwb-base-text-input"),d=o("openwb-base-select-input");return r(),c("div",b,[a(l,null,{default:_(()=>[m(" Einstellungen für Shelly "),f("span",h,"(Modul: "+g(t.$options.name)+")",1)]),_:1}),a(u,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>s.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),a(d,{title:"Generation",notSelected:"Bitte auswählen",options:[{value:1,text:"Shelly 1pm"},{value:2,text:"Shelly 1pm plus"}],"model-value":i.configuration.generation,"onUpdate:modelValue":e[1]||(e[1]=n=>s.updateConfiguration(n,"configuration.generation"))},null,8,["model-value"])])}const C=p(v,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/shelly/device.vue"]]);export{C as default};
