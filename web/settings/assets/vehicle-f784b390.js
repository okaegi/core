import{V as p}from"./VehicleConfig-839ca4e2.js";import{_ as m,u as s,k as b,l as g,G as i,E as r,y as n,x as t}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-05d7e447.js";import"./index-dd504e8c.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const f={name:"VehicleSocBmwBimmerConnected",mixins:[p]},v={class:"vehicle-soc-bmwbc"},w={href:"https://bimmer-connected.readthedocs.io/en/latest/captcha/rest_of_world.html",target:"_blank"};function C(l,e,k,B,V,S){const u=s("openwb-base-text-input"),d=s("font-awesome-icon"),a=s("openwb-base-button-group-input");return b(),g("div",v,[i(u,{title:"Benutzername",required:"",subtype:"user","model-value":l.vehicle.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=o=>l.updateConfiguration(o,"configuration.user_id"))},{help:r(()=>e[5]||(e[5]=[n(" Der Benutzername für die Anmeldung an den BMW-Servern. ")])),_:1},8,["model-value"]),i(u,{title:"Kennwort",required:"",subtype:"password","model-value":l.vehicle.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=o=>l.updateConfiguration(o,"configuration.password"))},{help:r(()=>e[6]||(e[6]=[n(" Das Passwort für die Anmeldung an den BMW-Servern. ")])),_:1},8,["model-value"]),i(u,{title:"VIN",required:"","model-value":l.vehicle.configuration.vin,"onUpdate:modelValue":e[2]||(e[2]=o=>l.updateConfiguration(o,"configuration.vin"))},{help:r(()=>e[7]||(e[7]=[n(" Die Fahrgestellnummer des Fahrzeugs. ")])),_:1},8,["model-value"]),i(u,{title:"Captcha-Token",required:"","model-value":l.vehicle.configuration.captcha_token,"onUpdate:modelValue":e[3]||(e[3]=o=>l.updateConfiguration(o,"configuration.captcha_token"))},{help:r(()=>[e[9]||(e[9]=n(" Zum erstmaligen Login z.B. nach einem Neustart ist ein ")),e[10]||(e[10]=t("b",null,"aktuelles Captcha-Token",-1)),e[11]||(e[11]=n(" notwendig.")),e[12]||(e[12]=t("br",null,null,-1)),e[13]||(e[13]=n(" Dazu bitte folgende Schritte durchführen:")),e[14]||(e[14]=t("br",null,null,-1)),e[15]||(e[15]=n(" 1. in einem neuen Browser-Tab auf diese Seite gehen:")),e[16]||(e[16]=t("br",null,null,-1)),t("a",w,[e[8]||(e[8]=n(" Captcha Lösen ")),i(d,{"fixed-width":"",icon:["fas","external-link-alt"]})]),e[17]||(e[17]=n(" (https://bimmer-connected.readthedocs.io/en/latest/captcha/rest_of_world.html)")),e[18]||(e[18]=t("br",null,null,-1)),e[19]||(e[19]=n(' 2. Dort falls angefragt das Captcha lösen und/oder "Ich bin ein Mensch" und dann Submit anclicken.')),e[20]||(e[20]=t("br",null,null,-1)),e[21]||(e[21]=n(" Als Ergebnis wird ein sehr langer String angezeigt. ")),e[22]||(e[22]=t("br",null,null,-1)),e[23]||(e[23]=n(" 3. Diesen String komplett mit ")),e[24]||(e[24]=t("b",null,"Copy&Paste",-1)),e[25]||(e[25]=n(" in das Feld Captcha-Token eingeben.")),e[26]||(e[26]=t("br",null,null,-1)),e[27]||(e[27]=n(" 4. Die Konfiguration speichern.")),e[28]||(e[28]=t("br",null,null,-1)),e[29]||(e[29]=n(" 5. ")),e[30]||(e[30]=t("b",null,"Sofort einmal im Desktop manuell (Kreispfeil) den SoC für das Fahrzeug abrufen.",-1)),e[31]||(e[31]=t("br",null,null,-1)),e[32]||(e[32]=n(" 6. ")),e[33]||(e[33]=t("b",null,"Fertig.",-1)),e[34]||(e[34]=n(" Ab jetzt wird bis zum nächsten Neustart das sog. Refresh-Token verwendet.")),e[35]||(e[35]=t("br",null,null,-1)),e[36]||(e[36]=t("b",null,"Achtung: Das Captcha-Token kann nur einmal verwendet werden und gilt nur kurze Zeit!",-1))]),_:1},8,["model-value"]),i(a,{title:"SoC während der Ladung berechnen",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":l.vehicle.configuration.calculate_soc,"onUpdate:modelValue":e[4]||(e[4]=o=>l.updateConfiguration(o,"configuration.calculate_soc"))},{help:r(()=>e[37]||(e[37]=[n(" Berechnet den Ladestand (SoC) während der Ladung. "),t("br",null,null,-1),n(" Die Berechnung erfolgt über die Ladeleistung und die Ladedauer. "),t("br",null,null,-1)])),_:1},8,["model-value"])])}const x=m(f,[["render",C],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/bmwbc/vehicle.vue"]]);export{x as default};