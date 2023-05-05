import{_ as d,q as c,l as _,m,A as n,K as o,v as t,u as e,x as l}from"./vendor-2323dc6c.js";import"./vendor-sortablejs-43c17404.js";const h={name:"DeviceMqttCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(a,u=void 0){this.$emit("update:configuration",{value:a,object:u})}}},f={class:"device-mqtt-counter"},g={class:"small"},b=e("br",null,null,-1),B=e("br",null,null,-1),k=e("span",{class:"text-info"},"-123.45",-1),x=e("br",null,null,-1),v=e("br",null,null,-1),z=e("span",{class:"text-info"},"123.45",-1),I=e("br",null,null,-1),W=e("br",null,null,-1),N=e("span",{class:"text-info"},"123.45",-1),w=e("br",null,null,-1),T=e("br",null,null,-1),y=e("span",{class:"text-info"},"50.12",-1),q=e("br",null,null,-1),F=e("br",null,null,-1),P=e("span",{class:"text-info"},"[1.2,2.3,-2.1]",-1),E=e("br",null,null,-1),j=e("br",null,null,-1),A=e("span",{class:"text-info"},"[222.2,223.3,222.3]",-1),D=e("br",null,null,-1),Z=e("br",null,null,-1),C=e("span",{class:"text-info"},"[12.3,23.4,-12.3]",-1),V=e("br",null,null,-1),M=e("br",null,null,-1),S=e("span",{class:"text-info"},"[0.95,0.96,-0.95]",-1);function L(a,u,s,H,K,O){const r=c("openwb-base-heading"),i=c("openwb-base-copy-to-clipboard"),p=c("openwb-base-alert");return _(),m("div",f,[n(r,null,{default:o(()=>[t(" Einstellungen für MQTT Zähler "),e("span",g,"(Modul: "+l(a.$options.name)+")",1)]),_:1}),n(p,{subtype:"info"},{default:o(()=>[e("ul",null,[e("li",null,[n(i,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[t("openWB/set/counter/"+l(s.componentId)+"/get/power",1)]),_:1}),b,t(" Bezugsleistung in Watt, Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen, positiv Bezug, negativ Einspeisung"),B,t(" Beispiel: "),k]),e("li",null,[n(i,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[t("openWB/set/counter/"+l(s.componentId)+"/get/imported",1)]),_:1}),x,t(" Bezogene Energie in Wh, Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen, nur positiv"),v,t(" Beispiel: "),z]),e("li",null,[n(i,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[t("openWB/set/counter/"+l(s.componentId)+"/get/exported",1)]),_:1}),I,t(" Eingespeiste Energie in Wh, Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen, nur positiv"),W,t(" Beispiel: "),N]),e("li",null,[n(i,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[t("openWB/set/counter/"+l(s.componentId)+"/get/frequency",1)]),_:1}),w,t(" Netzfrequenz in Hz, Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen"),T,t(" Beispiel: "),y]),e("li",null,[n(i,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[t("openWB/set/counter/"+l(s.componentId)+"/get/currents",1)]),_:1}),q,t(" Array mit den Strömen je Phase in Ampere, mit Nachkommastellen (Float), positiv Bezug, negativ Einspeisung"),F,t(" Beispiel: "),P]),e("li",null,[n(i,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[t("openWB/set/counter/"+l(s.componentId)+"/get/voltages",1)]),_:1}),E,t(" Array mit den Spannungen je Phase in Volt, mit Nachkommastellen (Float)"),j,t(" Beispiel: "),A]),e("li",null,[n(i,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[t("openWB/set/counter/"+l(s.componentId)+"/get/powers",1)]),_:1}),D,t(" Array mit den Leistungen je Phase in Watt, mit Nachkommastellen (Float)"),Z,t(" Beispiel: "),C]),e("li",null,[n(i,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[t("openWB/set/counter/"+l(s.componentId)+"/get/power_factors",1)]),_:1}),V,t(" Array mit den Leistungsfaktoren je Phase, mit Nachkommastellen (Float), Wertebereich -1 bis 1"),M,t(" Beispiel: "),S])])]),_:1})])}const J=d(h,[["render",L],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/mqtt/counter.vue"]]);export{J as default};
