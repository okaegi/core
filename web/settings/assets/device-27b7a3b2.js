import{_,u as n,k as b,l as f,D as t,N as a,y as o,x as u,z as g}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const h={name:"DeviceSolarEdge",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(i,e=void 0){this.$emit("update:configuration",{value:i,object:e})}}},v={class:"device-solaredge"},w={class:"small"},B=u("br",null,null,-1);function S(i,e,s,k,x,d){const l=n("openwb-base-heading"),p=n("openwb-base-alert"),c=n("openwb-base-text-input"),m=n("openwb-base-number-input");return b(),f("div",v,[t(l,null,{default:a(()=>[o(" Einstellungen für SolarEdge "),u("span",w,"(Modul: "+g(i.$options.name)+")",1)]),_:1}),t(p,{subtype:"info"},{default:a(()=>[o(" ModbusTCP muss im Wechselrichter aktiviert werden und der Wechselrichter per LAN angebunden sein."),B,o(" SolarEdge lässt nur eine ModbusTCP-Verbindung zu. Wenn Sie mit einem weiteren Smarthome-System, wie z.B. ioBroker oder openHAB, den SolarEdge-Wechselrichter abfragen, kann dies die Abfrage durch die openWB stören oder verhindern. ")]),_:1}),t(c,{title:"IP oder Hostname",subtype:"host",required:"","model-value":s.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=r=>d.updateConfiguration(r,"configuration.ip_address"))},null,8,["model-value"]),t(m,{title:"Port",required:"",min:1,max:65535,"model-value":s.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=r=>d.updateConfiguration(r,"configuration.port"))},{help:a(()=>[o(" Je nach Produktionsdatum und Softwareversion ist 502 oder 1502 ab Werk eingestellt. Bitte im Wechselrichter überprüfen. ")]),_:1},8,["model-value"])])}const y=_(h,[["render",S],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solaredge/device.vue"]]);export{y as default};
