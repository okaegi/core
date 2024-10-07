import{D as m}from"./HardwareInstallation-70f156e6.js";import{_ as b,u as i,k as g,l as v,D as t,N as r,y as u}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceSungrow",mixins:[m]},w={class:"device-sungrow"};function _(n,e,c,S,D,W){const s=i("openwb-base-heading"),a=i("openwb-base-alert"),d=i("openwb-base-text-input"),l=i("openwb-base-number-input"),p=i("openwb-base-select-input");return g(),v("div",w,[t(s,null,{default:r(()=>e[4]||(e[4]=[u(" Einstellungen für Sungrow ")])),_:1}),t(a,{subtype:"info"},{default:r(()=>e[5]||(e[5]=[u(" Bitte zur Fehlervermeidung die Firmware des Sungrow Wechselrichters und WiNet-S Dongles aktuell halten. ")])),_:1}),t(d,{title:"IP oder Hostname",subtype:"host",required:"","model-value":n.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=o=>n.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),t(l,{title:"Port",required:"",min:1,max:65535,"model-value":n.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=o=>n.updateConfiguration(o,"configuration.port"))},null,8,["model-value"]),t(l,{title:"Modbus ID",required:"","model-value":n.device.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=o=>n.updateConfiguration(o,"configuration.modbus_id"))},null,8,["model-value"]),t(p,{title:"Version",options:[{value:0,text:"SH (Hybrid)"},{value:3,text:"SH (Hybrid) über WiNet-S Dongle"},{value:1,text:"SG (kein Hybrid)"},{value:2,text:"SG (kein Hybrid) über WiNet-S Dongle"}],"model-value":n.device.configuration.version,required:"","onUpdate:modelValue":e[3]||(e[3]=o=>n.updateConfiguration(o,"configuration.version"))},{help:r(()=>e[6]||(e[6]=[u(" Die Variante SH sollte möglichst über den internen LAN-Port genutzt werden (befindet sich am Wechselrichter hinter dem WiNet-S Dongle), da nur hier alle Werte vollständig ausgelesen werden können. Den WiNet-S Dongle zusätzlich ins Heimnetz (per Lan oder Wlan) einbinden, um iSolarCloud nutzen zu können. ")])),_:1},8,["model-value"])])}const q=b(f,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sungrow/sungrow/device.vue"]]);export{q as default};
