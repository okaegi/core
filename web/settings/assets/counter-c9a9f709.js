import{_ as p,u as o,k as l,l as m,D as t,N as i,y as s,x as _,z as g}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const f={name:"DeviceSigenergyCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},b={class:"device-sigenergy-counter"},v={class:"small"};function h(n,e,a,y,w,r){const u=o("openwb-base-heading"),d=o("openwb-base-number-input");return l(),m("div",b,[t(u,null,{default:i(()=>[s(" Einstellungen für Sigenergy Zähler "),_("span",v,"(Modul: "+g(n.$options.name)+")",1)]),_:1}),t(d,{title:"Modbus ID",required:"","model-value":a.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=c=>r.updateConfiguration(c,"configuration.modbus_id"))},{help:i(()=>[s(" Die Standard-Modbus-ID von Sigenergy ist 247 ")]),_:1},8,["model-value"])])}const C=p(f,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sigenergy/counter.vue"]]);export{C as default};
