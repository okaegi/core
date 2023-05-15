import{_ as m,p as l,k as c,l as f,A as o,L as r,u as n,q as u,x as g}from"./vendor-94c7fa64.js";import"./vendor-sortablejs-122866cd.js";const _={name:"DeviceJsonCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(i,e=void 0){this.$emit("update:configuration",{value:i,object:e})}}},w={class:"device-json-counter"},b={class:"small"},h=u("br",null,null,-1);function v(i,e,a,j,x,d){const p=l("openwb-base-heading"),s=l("openwb-base-text-input");return c(),f("div",w,[o(p,null,{default:r(()=>[n(" Einstellungen für JSON Zähler "),u("span",b,"(Modul: "+g(i.$options.name)+")",1)]),_:1}),o(s,{title:"Abfrage für Leistung",subtype:"text",required:"","model-value":a.configuration.jq_power,"onUpdate:modelValue":e[0]||(e[0]=t=>d.updateConfiguration(t,"configuration.jq_power"))},{help:r(()=>[n(' Zur Analyse der Werte aus dem json-Objekt wird jq benutzt. Ist die Json Antwort z.B. {"PowerInstalledPeak":4655, "PowerProduced":132, "PowerOut":897.08172362555717, "PowerSelfSupplied":234.9182763744428} So muss hier .PowerOut eingetragen werden. '),h,n(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche die aktuelle Leistung in Watt darstellt. ")]),_:1},8,["model-value"]),o(s,{title:"Abfrage für Zählerstand Bezug",subtype:"text","model-value":a.configuration.jq_imported,"onUpdate:modelValue":e[1]||(e[1]=t=>d.updateConfiguration(t,"configuration.jq_imported"))},{help:r(()=>[n(" Wird dieses Feld leer gelassen, dann werden Zählerstände intern simuliert. ")]),_:1},8,["model-value"]),o(s,{title:"Abfrage für Zählerstand Einspeisung",subtype:"text","model-value":a.configuration.jq_exported,"onUpdate:modelValue":e[2]||(e[2]=t=>d.updateConfiguration(t,"configuration.jq_exported"))},{help:r(()=>[n(" Wird dieses Feld leer gelassen, dann werden Zählerstände intern simuliert. ")]),_:1},8,["model-value"])])}const P=m(_,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/json/counter.vue"]]);export{P as default};
