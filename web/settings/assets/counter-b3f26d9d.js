import{C as s}from"./HardwareInstallation-70f156e6.js";import{_ as u,u as n,k as m,l as p,D as t,N as d,y as l}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceHuaweiSmartLoggerCounter",mixins:[s]},_={class:"device-huawei-smart-logger-counter"};function g(o,e,b,f,w,v){const i=n("openwb-base-heading"),r=n("openwb-base-number-input");return m(),p("div",_,[t(i,null,{default:d(()=>e[1]||(e[1]=[l(" Einstellungen für Huawei SmartLogger Zähler ")])),_:1}),t(r,{title:"Modbus ID",required:"","model-value":o.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=a=>o.updateConfiguration(a,"configuration.modbus_id"))},null,8,["model-value"])])}const E=u(c,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/huawei/huawei_smartlogger/counter.vue"]]);export{E as default};
