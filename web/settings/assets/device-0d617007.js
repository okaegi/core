import{_ as l,q as n,l as _,m,A as o,K as a,v as s,u as f,x as b}from"./vendor-2323dc6c.js";import"./vendor-sortablejs-43c17404.js";const h={name:"DeviceEnphase",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-enphase"},g={class:"small"};function w(t,e,i,x,y,r){const p=n("openwb-base-heading"),u=n("openwb-base-alert"),d=n("openwb-base-text-input");return _(),m("div",v,[o(p,null,{default:a(()=>[s(" Einstellungen für Enphase Envoy / IQ Gateway "),f("span",g,"(Modul: "+b(t.$options.name)+")",1)]),_:1}),o(u,{subtype:"info"},{default:a(()=>[s(" Geräte mit Firmware-Versionen 7.0 oder neuer werden derzeit nicht unterstützt. ")]),_:1}),o(d,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.hostname,"onUpdate:modelValue":e[0]||(e[0]=c=>r.updateConfiguration(c,"configuration.hostname"))},null,8,["model-value"])])}const q=l(h,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/enphase/device.vue"]]);export{q as default};
