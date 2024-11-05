import{D as m}from"./HardwareInstallation-da16436b.js";import{_ as v,u as t,k as b,l as f,G as i,E as r,y as s}from"./vendor-88a3d381.js";import"./vendor-fortawesome-2ab93053.js";import"./index-48681c4b.js";import"./vendor-bootstrap-6598ffd1.js";import"./vendor-jquery-536f4487.js";import"./vendor-axios-29ac7e52.js";import"./vendor-sortablejs-f1eda7cf.js";import"./dynamic-import-helper-be004503.js";const g={name:"DeviceGoodWe",mixins:[m]},w={class:"device-goodwe"};function _(o,e,W,c,D,V){const l=t("openwb-base-heading"),a=t("openwb-base-alert"),p=t("openwb-base-text-input"),d=t("openwb-base-number-input"),u=t("openwb-base-select-input");return b(),f("div",w,[i(l,null,{default:r(()=>e[5]||(e[5]=[s("Einstellungen für GoodWe")])),_:1}),i(a,{subtype:"info"},{default:r(()=>e[6]||(e[6]=[s(" GoodWe-Wechselrichter verfügen über 3 Dongle: Den WiFi-Dongle, das Wifi-Lan-Kit und das Wifi-Lan-Kit 2.0. Die Einbindung über dieses Modul ist nur mit den Wifi-Lan-Kits möglich. Welches Kit benötigt wird ist vom Wechselrichter abhängig und kann bei GoodWe erfragt werden. ")])),_:1}),i(p,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),i(d,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.port"))},null,8,["model-value"]),i(d,{title:"Modbus ID",required:"","model-value":o.device.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.modbus_id"))},null,8,["model-value"]),i(u,{title:"API-Version","not-selected":"Bitte auswählen",options:[{value:"v_1_7",text:"v1.7"},{value:"v_1_1",text:"v1.0/ v1.1"}],"model-value":o.device.configuration.version,required:"","onUpdate:modelValue":e[3]||(e[3]=n=>o.updateConfiguration(n,"configuration.version"))},{help:r(()=>e[7]||(e[7]=[s(" Die Wahl der API-Version beeinflusst die Auslesung der Speicherleistung und der Import/ Export Werte des Zählers. ")])),_:1},8,["model-value"]),i(u,{title:"Firmware","not-selected":"Bitte auswählen",options:[{value:8,text:"ARM < 9.0"},{value:9,text:"ARM ab 9.0"}],"model-value":o.device.configuration.firmware,required:"","onUpdate:modelValue":e[4]||(e[4]=n=>o.updateConfiguration(n,"configuration.firmware"))},{help:r(()=>e[8]||(e[8]=[s(" Die Auswahl der Firmware-Version beeinflusst die Auslesung der Wirkleistung und der Phasenströme des Zählers. ")])),_:1},8,["model-value"])])}const I=v(g,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/good_we/good_we/device.vue"]]);export{I as default};