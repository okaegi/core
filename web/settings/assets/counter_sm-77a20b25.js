import{_ as p,p as o,k as m,l as _,A as a,L as s,u,q as f,x as b}from"./vendor-94c7fa64.js";import"./vendor-sortablejs-122866cd.js";const g={name:"DeviceFroniusCounterSM",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},v={class:"device-fronius-counter-sm"},h={class:"small"};function w(n,e,i,x,V,r){const l=o("openwb-base-heading"),d=o("openwb-base-number-input"),c=o("openwb-base-select-input");return m(),_("div",v,[a(l,null,{default:s(()=>[u(" Einstellungen für Fronius SmartMeter "),f("span",h,"(Modul: "+b(n.$options.name)+")",1)]),_:1}),a(d,{title:"Meter ID",required:"",min:"0",max:"65535","model-value":i.configuration.meter_id,"onUpdate:modelValue":e[0]||(e[0]=t=>r.updateConfiguration(t,"configuration.meter_id"))},null,8,["model-value"]),a(c,{title:"Kompatibilitätsmodus",notSelected:"Bitte auswählen",options:[{value:0,text:"Aus"},{value:1,text:"Variante 1"},{value:2,text:"Variante 2"}],"model-value":i.configuration.variant,"onUpdate:modelValue":e[1]||(e[1]=t=>r.updateConfiguration(t,"configuration.variant"))},{help:s(()=>[u(" Gegebenenfalls auch für alte Modelle nach einem Softwareupdate erforderlich. Fronius hat derzeit keine Konsistente Schnittstelle. Speziell beim Gen24 kann Variante 1 oder 2 erforderlich sein. Nach speichern sollten nach etwa 10-20 Sekunden Daten angezeigt werden. Ist dies nicht der Fall die andere Variante ausprobieren. ")]),_:1},8,["model-value"])])}const C=p(g,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/fronius/counter_sm.vue"]]);export{C as default};
