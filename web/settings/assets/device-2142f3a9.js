import{_ as c,p as o,k as l,l as p,A as n,L as u,u as _,q as f,x as m}from"./vendor-93bd3532.js";import"./vendor-sortablejs-b80cade1.js";const v={name:"DeviceKostalPlenticore",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},b={class:"device-kostalplenticore"},g={class:"small"};function h(t,e,s,x,w,a){const i=o("openwb-base-heading"),d=o("openwb-base-text-input");return l(),p("div",b,[n(i,null,{default:u(()=>[_(" Einstellungen für Kostal Plenticore "),f("span",g,"(Modul: "+m(t.$options.name)+")",1)]),_:1}),n(d,{title:"IP oder Hostname",subtype:"host",required:"","model-value":s.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=r=>a.updateConfiguration(r,"configuration.ip_address"))},null,8,["model-value"])])}const C=c(v,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/kostal_plenticore/device.vue"]]);export{C as default};
