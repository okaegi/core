import{_ as l,p as t,k as u,l as p,A as n,L as c,u as _,q as f,x as m}from"./vendor-8521f8a3.js";import"./vendor-sortablejs-5d1612dc.js";const v={name:"DeviceSolarWorld",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},b={class:"device-solar_world"},g={class:"small"};function w(o,e,a,h,x,s){const i=t("openwb-base-heading"),d=t("openwb-base-text-input");return u(),p("div",b,[n(i,null,{default:c(()=>[_(" Einstellungen für SolarWorld "),f("span",g,"(Modul: "+m(o.$options.name)+")",1)]),_:1}),n(d,{title:"IP oder Hostname",subtype:"host",required:"","model-value":a.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=r=>s.updateConfiguration(r,"configuration.ip_address"))},null,8,["model-value"])])}const V=l(v,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_world/device.vue"]]);export{V as default};
