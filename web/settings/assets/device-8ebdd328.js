import{_ as l,u,k as p,l as m,D as n,N as c,y as _,x as f,z as b}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const g={name:"DeviceZCS",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-azzurro_zcs"},x={class:"small"};function z(t,e,a,w,C,i){const s=u("openwb-base-heading"),r=u("openwb-base-text-input"),d=u("openwb-base-number-input");return p(),m("div",v,[n(s,null,{default:c(()=>[_(" Einstellungen für Azzurro ZCS "),f("span",x,"(Modul: "+b(t.$options.name)+")",1)]),_:1}),n(r,{title:"IP oder Hostname",subtype:"host",required:"","model-value":a.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=o=>i.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),n(d,{title:"Port",required:"",min:1,max:65535,"model-value":a.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=o=>i.updateConfiguration(o,"configuration.port"))},null,8,["model-value"]),n(d,{title:"Modbus ID",required:"","model-value":a.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=o=>i.updateConfiguration(o,"configuration.modbus_id"))},null,8,["model-value"])])}const y=l(g,[["render",z],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/azzurro_zcs/device.vue"]]);export{y as default};
