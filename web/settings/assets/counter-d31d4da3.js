import{_ as l,q as o,l as f,m,A as r,K as i,v as t,u as a,x as _}from"./vendor-2323dc6c.js";import"./vendor-sortablejs-43c17404.js";const b={name:"DevicePowerfoxCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},g={class:"device-powerfox-counter"},h={class:"small"},v=a("a",{href:"https://backend.powerfox.energy/api/2.0/my/all/devices",target:"_blank",rel:"noopener noreferrer"}," https://backend.powerfox.energy/api/2.0/my/all/devices ",-1);function w(n,e,s,x,D,d){const u=o("openwb-base-heading"),c=o("openwb-base-text-input");return f(),m("div",g,[r(u,null,{default:i(()=>[t(" Einstellungen für Powerfox Zähler "),a("span",h,"(Modul: "+_(n.$options.name)+")",1)]),_:1}),r(c,{title:"ID",required:"","model-value":s.configuration.id,"onUpdate:modelValue":e[0]||(e[0]=p=>d.updateConfiguration(p,"configuration.id"))},{help:i(()=>[t(" Um die ID herauszufinden mit dem Browser die Adresse "),v,t(" aufrufen und dort Benutzername und Passwort eingeben. Die Device ID ist exakt so einzutragen, wie in der Antwort des Servers. Das bedeutet insbesondere auch, die Groß-/KLeinschreibung ist zu beachten! ")]),_:1},8,["model-value"])])}const B=l(b,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/powerfox/counter.vue"]]);export{B as default};
