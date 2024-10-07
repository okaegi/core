import{C as d}from"./ChargePointInstallation-8dff21bc.js";import{_ as g,u,k as a,l as f,D as e,N as i,y as t,x as l,z as r}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const m={name:"ChargePointMqtt",mixins:[d]},b={class:"charge-point-mqtt"};function k(o,n,B,v,w,W){const p=u("openwb-base-alert"),s=u("openwb-base-copy-to-clipboard");return a(),f("div",b,[e(p,{subtype:"danger"},{default:i(()=>n[0]||(n[0]=[t(" Dieser Ladepunkt-Typ darf nur in Kombination mit dem Simulator zur Fehleranalyse genutzt werden. Eine andere Verwendung ist laut den Nutzungsbedingungen untersagt. ")])),_:1}),e(p,{subtype:"info"},{default:i(()=>[n[72]||(n[72]=t(" Das MQTT Modul stellt keine aktive Verbindung her, sondern erwartet, dass die Daten von speziellen Topics im Broker gelesen bzw. geschrieben werden.")),n[73]||(n[73]=l("br",null,null,-1)),n[74]||(n[74]=t(" Alle Daten werden als gültiges JSON gesendet und auch so erwartet! Zahlen mit Nachkommastellen (Float) verwenden einen Punkt als Dezimaltrenner (internationales Format). ")),l("ol",null,[l("li",null,[n[11]||(n[11]=t(" von openWB gesendete Topics ")),l("ul",null,[l("li",null,[e(s,{class:"text-info",tooltip:"Topic kopieren"},{default:i(()=>[t(" openWB/chargepoint/"+r(o.chargePoint.id)+"/set/current ",1)]),_:1}),n[1]||(n[1]=l("br",null,null,-1)),n[2]||(n[2]=t(" Sollwert des Ladestroms, mit Nachkommastellen (Float), positiv (laden) oder negativ (entladen, falls vom Ladepunkt unterstützt).")),n[3]||(n[3]=l("br",null,null,-1)),n[4]||(n[4]=t(" Beispiel: ")),n[5]||(n[5]=l("span",{class:"text-info"},"12.34",-1))]),l("li",null,[e(s,{class:"text-info",tooltip:"Topic kopieren"},{default:i(()=>[t(" openWB/chargepoint/"+r(o.chargePoint.id)+"/set/phases_to_use ",1)]),_:1}),n[6]||(n[6]=l("br",null,null,-1)),n[7]||(n[7]=t(" Sollwert für die Anzahl Phasen als Ganzzahl (Integer). Mögliche Werte: 1 oder 3")),n[8]||(n[8]=l("br",null,null,-1)),n[9]||(n[9]=t(" Beispiel: ")),n[10]||(n[10]=l("span",{class:"text-info"},"1",-1))])])]),l("li",null,[n[37]||(n[37]=t(" von openWB zwingend erwartete Topics ")),l("ul",null,[l("li",null,[e(s,{class:"text-info",tooltip:"Topic kopieren"},{default:i(()=>[t(" openWB/set/chargepoint/"+r(o.chargePoint.id)+"/get/currents ",1)]),_:1}),n[12]||(n[12]=l("br",null,null,-1)),n[13]||(n[13]=t(" Aktuelle Phasenströme des Ladepunktes, Array mit drei Zahlen (Float), positiv (laden) oder negativ (entladen, falls vom Ladepunkt unterstützt).")),n[14]||(n[14]=l("br",null,null,-1)),n[15]||(n[15]=t(" Beispiel: ")),n[16]||(n[16]=l("span",{class:"text-info"},"[6.78,6.89,6.94]",-1))]),l("li",null,[e(s,{class:"text-info",tooltip:"Topic kopieren"},{default:i(()=>[t(" openWB/set/chargepoint/"+r(o.chargePoint.id)+"/get/power ",1)]),_:1}),n[17]||(n[17]=l("br",null,null,-1)),n[18]||(n[18]=t(" Leistung in Watt, mit Nachkommastellen (Float), positiv (laden) oder negativ (entladen, falls vom Ladepunkt unterstützt).")),n[19]||(n[19]=l("br",null,null,-1)),n[20]||(n[20]=t(" Beispiel: ")),n[21]||(n[21]=l("span",{class:"text-info"},"123.45",-1))]),l("li",null,[e(s,{class:"text-info",tooltip:"Topic kopieren"},{default:i(()=>[t(" openWB/set/chargepoint/"+r(o.chargePoint.id)+"/get/plug_state ",1)]),_:1}),n[22]||(n[22]=l("br",null,null,-1)),n[23]||(n[23]=t(" Zeigt an, ob aktuell ein Fahrzeug angesteckt ist, Wahrheitswert (Bool).")),n[24]||(n[24]=l("br",null,null,-1)),n[25]||(n[25]=t(" Beispiel: ")),n[26]||(n[26]=l("span",{class:"text-info"},"true",-1))]),l("li",null,[e(s,{class:"text-info",tooltip:"Topic kopieren"},{default:i(()=>[t(" openWB/set/chargepoint/"+r(o.chargePoint.id)+"/get/charge_state ",1)]),_:1}),n[27]||(n[27]=l("br",null,null,-1)),n[28]||(n[28]=t(" Zeigt an, ob ein Ladevorgang aktiv ist, Wahrheitswert (Bool).")),n[29]||(n[29]=l("br",null,null,-1)),n[30]||(n[30]=t(" Beispiel: ")),n[31]||(n[31]=l("span",{class:"text-info"},"true",-1))]),l("li",null,[e(s,{class:"text-info",tooltip:"Topic kopieren"},{default:i(()=>[t(" openWB/set/chargepoint/"+r(o.chargePoint.id)+"/get/phases_in_use ",1)]),_:1}),n[32]||(n[32]=l("br",null,null,-1)),n[33]||(n[33]=t(" Anzahl der Phasen, mit denen geladen wird, Ganzzahl (Integer). Mögliche Werte: 0 bis 3")),n[34]||(n[34]=l("br",null,null,-1)),n[35]||(n[35]=t(" Beispiel: ")),n[36]||(n[36]=l("span",{class:"text-info"},"3",-1))])])]),l("li",null,[n[71]||(n[71]=t(" optionale Topics ")),l("ul",null,[l("li",null,[e(s,{class:"text-info",tooltip:"Topic kopieren"},{default:i(()=>[t(" openWB/set/chargepoint/"+r(o.chargePoint.id)+"/get/imported ",1)]),_:1}),n[38]||(n[38]=l("br",null,null,-1)),n[39]||(n[39]=t(" Geladene Energie in Wh, mit Nachkommastellen (Float), nur positiv")),n[40]||(n[40]=l("br",null,null,-1)),n[41]||(n[41]=t(" Wird dieses Topic nicht vom Ladepunkt gesendet, so wird intern ein Zählerstand anhand der Leistung simuliert.")),n[42]||(n[42]=l("br",null,null,-1)),n[43]||(n[43]=t(" Beispiel: ")),n[44]||(n[44]=l("span",{class:"text-info"},"123.45",-1))]),l("li",null,[e(s,{class:"text-info",tooltip:"Topic kopieren"},{default:i(()=>[t(" openWB/set/chargepoint/"+r(o.chargePoint.id)+"/get/exported ",1)]),_:1}),n[45]||(n[45]=l("br",null,null,-1)),n[46]||(n[46]=t(" Entladene Energie in Wh, mit Nachkommastellen (Float), nur positiv")),n[47]||(n[47]=l("br",null,null,-1)),n[48]||(n[48]=t(" Wird dieses Topic nicht vom Ladepunkt gesendet, so wird intern ein Zählerstand anhand der Leistung simuliert.")),n[49]||(n[49]=l("br",null,null,-1)),n[50]||(n[50]=t(" Beispiel: ")),n[51]||(n[51]=l("span",{class:"text-info"},"123.45",-1))]),l("li",null,[e(s,{class:"text-info",tooltip:"Topic kopieren"},{default:i(()=>[t(" openWB/set/chargepoint/"+r(o.chargePoint.id)+"/get/voltages ",1)]),_:1}),n[52]||(n[52]=l("br",null,null,-1)),n[53]||(n[53]=t(" Aktuelle Phasenspannungen des Ladepunktes, Array mit drei Zahlen (Float), nur positiv.")),n[54]||(n[54]=l("br",null,null,-1)),n[55]||(n[55]=t(" Die Spannungen werden nicht verarbeitet, sondern lediglich im Status angezeigt.")),n[56]||(n[56]=l("br",null,null,-1)),n[57]||(n[57]=t(" Beispiel: ")),n[58]||(n[58]=l("span",{class:"text-info"},"[230.12,231.08,232.54]",-1))]),l("li",null,[e(s,{class:"text-info",tooltip:"Topic kopieren"},{default:i(()=>[t(" openWB/set/chargepoint/"+r(o.chargePoint.id)+"/get/power_factors ",1)]),_:1}),n[59]||(n[59]=l("br",null,null,-1)),n[60]||(n[60]=t(" Aktuelle Leistungsfaktoren des Ladepunktes, Array mit drei Zahlen (Float), Wertebereich von -1 bis 1.")),n[61]||(n[61]=l("br",null,null,-1)),n[62]||(n[62]=t(" Die Leistungsfaktoren werden nicht verarbeitet, sondern lediglich im Status angezeigt.")),n[63]||(n[63]=l("br",null,null,-1)),n[64]||(n[64]=t(" Beispiel: ")),n[65]||(n[65]=l("span",{class:"text-info"},"[-0.87,0.96,1.0]",-1))]),l("li",null,[e(s,{class:"text-info",tooltip:"Topic kopieren"},{default:i(()=>[t(" openWB/set/chargepoint/"+r(o.chargePoint.id)+"/get/rfid_tag ",1)]),_:1}),n[66]||(n[66]=l("br",null,null,-1)),n[67]||(n[67]=t(" Eine Zeichenfolge, die einen eingelesenen Tag für openWB repräsentiert.")),n[68]||(n[68]=l("br",null,null,-1)),n[69]||(n[69]=t(" Beispiel: ")),n[70]||(n[70]=l("span",{class:"text-info"},'"123654"',-1))])])])])]),_:1})])}const D=g(m,[["render",k],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/mqtt/chargePoint.vue"]]);export{D as default};
