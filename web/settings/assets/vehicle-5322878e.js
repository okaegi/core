import{_ as p,p as d,k as c,l as m,A as t,L as o,u as a,q as f,x as _}from"./vendor-94c7fa64.js";import"./vendor-sortablejs-122866cd.js";const g={name:"VehicleSocVwid",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},vehicleId:{required:!0}},data(){return{}},methods:{updateConfiguration(i,e=void 0){this.$emit("update:configuration",{value:i,object:e})}}},v={class:"vehicle-soc-vwid"},w={class:"small"};function b(i,e,r,h,V,u){const l=d("openwb-base-heading"),s=d("openwb-base-text-input");return c(),m("div",v,[t(l,null,{default:o(()=>[a(" Einstellungen für VW ID SoC "),f("span",w,"(Modul: "+_(i.$options.name)+")",1)]),_:1}),t(s,{title:"Benutzername",required:"",subtype:"user","model-value":r.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=n=>u.updateConfiguration(n,"configuration.user_id"))},{help:o(()=>[a(" Der Benutzername für die Anmeldung an den VW-Servern. ")]),_:1},8,["model-value"]),t(s,{title:"Kennwort",required:"",subtype:"password","model-value":r.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=n=>u.updateConfiguration(n,"configuration.password"))},{help:o(()=>[a(" Das Passwort für die Anmeldung an den VW-Servern. ")]),_:1},8,["model-value"]),t(s,{title:"VIN",required:"","model-value":r.configuration.vin,"onUpdate:modelValue":e[2]||(e[2]=n=>u.updateConfiguration(n,"configuration.vin"))},{help:o(()=>[a(" Die Fahrgestellnummer des Fahrzeugs. ")]),_:1},8,["model-value"])])}const q=p(g,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/vwid/vehicle.vue"]]);export{q as default};
