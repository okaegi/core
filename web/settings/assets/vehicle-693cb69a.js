import{V as m}from"./VehicleConfig-e8ea05c9.js";import{_ as d,u as r,k as u,l as f,D as n,N as l,y as o,x as t,z as p}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const b={name:"VehicleSocMqtt",mixins:[m]},v={class:"vehicle-soc-mqtt"};function g(i,e,w,k,x,B){const s=r("openwb-base-copy-to-clipboard"),a=r("openwb-base-alert");return u(),f("div",v,[n(a,{subtype:"info"},{default:l(()=>[e[12]||(e[12]=o(" Die Daten werden immer dann aktualisiert, wenn das Topic veröffentlicht wird. Die Abfrageintervalle werden nicht berücksichtigt, da das Intervall vom sendenden Client festgelegt wird. ")),t("ul",null,[t("li",null,[n(s,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[o(" openWB/set/vehicle/"+p(i.vehicleId)+"/get/soc ",1)]),_:1}),e[0]||(e[0]=t("br",null,null,-1)),e[1]||(e[1]=o(" Fahrzeug-SoC mit Nachkommastellen (Float) oder Ganzzahl")),e[2]||(e[2]=t("br",null,null,-1)),e[3]||(e[3]=o(" Beispiel: ")),e[4]||(e[4]=t("span",{class:"text-info"},"89.5",-1))]),t("li",null,[n(s,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[o(" openWB/set/vehicle/"+p(i.vehicleId)+"/get/range ",1)]),_:1}),e[5]||(e[5]=t("br",null,null,-1)),e[6]||(e[6]=o(" Reichweite des Fahrzeugs in km mit Nachkommastellen (Float) oder Ganzzahl")),e[7]||(e[7]=t("br",null,null,-1)),e[8]||(e[8]=o(" Diese Info ist optional.")),e[9]||(e[9]=t("br",null,null,-1)),e[10]||(e[10]=o(" Beispiel: ")),e[11]||(e[11]=t("span",{class:"text-info"},"356.5",-1))])])]),_:1})])}const $=d(b,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/mqtt/vehicle.vue"]]);export{$ as default};
