import{_ as p,u,k as m,l as h,D as a,N as o,y as t,x as n,z as g}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const _={name:"DeviceHttpInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(i,e=void 0){this.$emit("update:configuration",{value:i,object:e})}}},f={class:"device-http-inverter"},b={class:"small"},v=n("br",null,null,-1),w=n("br",null,null,-1),z=n("br",null,null,-1);function x(i,e,s,k,y,l){const c=u("openwb-base-heading"),d=u("openwb-base-text-input");return m(),h("div",f,[a(c,null,{default:o(()=>[t(" Einstellungen für Http Wechselrichter "),n("span",b,"(Modul: "+g(i.$options.name)+")",1)]),_:1}),a(d,{title:"Pfad für Leistung",subtype:"text",required:"",pattern:"^/[-a-zA-Z0-9@:%_\\+.~#?&/=]*","model-value":s.configuration.power_path,"onUpdate:modelValue":e[0]||(e[0]=r=>l.updateConfiguration(r,"configuration.power_path"))},{help:o(()=>[t(' Diese Angabe wird an die Server-URL angehängt und muss mit einem Schrägstrich "/" beginnen.'),v,t(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche die aktuelle Leistung in Watt darstellt. Produzierte Leistung muss ein negatives Vorzeichen haben. (In bestimmten Konstellationen, z.B. wenn ein Hybridsystem über einen zweiten Wechselrichter geladen wird, hat die Leistung ein positives Vorzeichen.) ")]),_:1},8,["model-value"]),a(d,{title:"Pfad für Zählerstand Erzeugung",subtype:"text",pattern:"^(/[-a-zA-Z0-9@:%_\\+.~#?&/=]*)","model-value":s.configuration.exported_path,"onUpdate:modelValue":e[1]||(e[1]=r=>l.updateConfiguration(r,"configuration.exported_path"))},{help:o(()=>[t(' Diese Angabe wird an die Server-URL angehängt und muss mit einem Schrägstrich "/" beginnen.'),w,t(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche den aktuellen absoluten Zählerstand in Wh darstellt."),z,t(" Wird dieses Feld leer gelassen, wird der Zählerstand intern simuliert. ")]),_:1},8,["model-value"])])}const V=p(_,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/http/inverter.vue"]]);export{V as default};