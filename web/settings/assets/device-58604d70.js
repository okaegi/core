import{_ as p,q as n,l as r,m as d,A as o,K as s,v as a,u,x as _}from"./vendor-2323dc6c.js";import"./vendor-sortablejs-43c17404.js";const l={name:"DeviceOpenwbBatKit",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-openwb-batkit"},b={class:"small"};function m(e,t,v,g,h,w){const i=n("openwb-base-heading"),c=n("openwb-base-alert");return r(),d("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für openWB Speicher-Kit "),u("span",b,"(Modul: "+_(e.$options.name)+")",1)]),_:1}),o(c,{subtype:"info"},{default:s(()=>[a(" Dieses Gerät erfordert keine Einstellungen. ")]),_:1})])}const k=p(l,[["render",m],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/openwb_bat_kit/device.vue"]]);export{k as default};
