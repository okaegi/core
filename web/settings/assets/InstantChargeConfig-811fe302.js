import{C as l}from"./index-0849393f.js";import{_,q as o,k as a,l as i,u as b,B as s,M as r,x as u}from"./vendor-b3afda6d.js";import"./vendor-fortawesome-b013cb5c.js";import"./vendor-bootstrap-37731caa.js";import"./vendor-jquery-2371184a.js";import"./vendor-axios-dc7988e3.js";import"./vendor-sortablejs-806a0b5c.js";const h={name:"OpenwbInstantChargeConfigView",mixins:[l],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/instant_charging/phases_to_use"]}}},c={class:"instantChargeConfig"},f={name:"instantChargeConfigForm"},v={key:0},w={key:1};function C(t,e,$,B,k,V){const p=o("openwb-base-alert"),m=o("openwb-base-button-group-input"),g=o("openwb-base-card"),d=o("openwb-base-submit-buttons");return a(),i("div",c,[b("form",f,[s(g,{title:"Phasenumschaltung"},{default:r(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(a(),i("div",v,[s(p,{subtype:"info"},{default:r(()=>[u(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(a(),i("div",w,[s(m,{title:"Anzahl Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:3,text:"Maximum"}],"model-value":t.$store.state.mqtt["openWB/general/chargemode_config/instant_charging/phases_to_use"],"onUpdate:modelValue":e[0]||(e[0]=n=>t.updateState("openWB/general/chargemode_config/instant_charging/phases_to_use",n))},{help:r(()=>[u(' Hier kann eingestellt werden, ob Ladevorgänge im Modus "Sofortladen" mit nur einer Phase oder dem möglichen Maximum in Abhängigkeit der "Ladepunkt"- und "Fahrzeug"-Einstellungen durchgeführt werden. Voraussetzung ist die verbaute Umschaltmöglichkeit zwischen 1- und 3-phasig (s.g. 1p3p). ')]),_:1},8,["model-value"])]))]),_:1}),s(d,{formName:"instantChargeConfigForm",onSave:e[1]||(e[1]=n=>t.$emit("save")),onReset:e[2]||(e[2]=n=>t.$emit("reset")),onDefaults:e[3]||(e[3]=n=>t.$emit("defaults"))})])])}const N=_(h,[["render",C],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/InstantChargeConfig.vue"]]);export{N as default};
