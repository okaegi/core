import{_ as u,p as n,k as _,l as m,A as o,L as s,u as a,q as f,x as b}from"./vendor-20bb207d.js";import"./vendor-sortablejs-ad1d2cc8.js";const g={name:"DeviceKostalPlenticore",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},h={class:"device-kostalplenticore"},v={class:"small"};function w(t,e,i,x,K,r){const l=n("openwb-base-heading"),d=n("openwb-base-alert"),c=n("openwb-base-text-input");return _(),m("div",h,[o(l,null,{default:s(()=>[a(" Einstellungen für Kostal Plenticore "),f("span",v,"(Modul: "+b(t.$options.name)+")",1)]),_:1}),o(d,{subtype:"info"},{default:s(()=>[a(" Wenn am Kostal Plenticore-Wechselrichter ein EM300 oder Kostal Energy Smart Meter (KSEM) angeschlossen ist, muss eine Zähler-und eine Wechselrichter-Komponente angelegt werden. ")]),_:1}),o(c,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=p=>r.updateConfiguration(p,"configuration.ip_address"))},null,8,["model-value"])])}const E=u(g,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/kostal_plenticore/device.vue"]]);export{E as default};
