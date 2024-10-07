import{V as m}from"./VehicleConfig-e8ea05c9.js";import{_ as b,u as s,k as g,l as v,D as i,N as o,y as n,x as u,z as _}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const f={name:"VehicleSocMercedesEq",mixins:[m],computed:{callback_url(){return`${location.origin}/openWB/web/settings/modules/vehicles/mercedeseq/callback_vehicle.php`},login_url(){return`https://ssoalpha.dvb.corpinter.net/v1/auth?response_type=code&state=${this.vehicleId}&client_id=${this.vehicle.configuration.client_id}&redirect_uri=${this.callback_url}&scope=mb:vehicle:mbdata:evstatus%20offline_access%20openid`},input_complete(){return this.vehicle.configuration.client_id&&this.vehicle.configuration.client_secret&&this.vehicle.configuration.vin}},methods:{login_window(){console.debug("callback url",this.callback_url),console.debug("login url",this.login_url);var t=window.open(this.login_url,"MercedesLogin","width=800,height=600,status=yes,scrollbars=yes,resizable=yes");t.focus()}}},h={class:"vehicle-soc-mercedeseq"};function w(t,e,k,C,y,r){const a=s("openwb-base-text-input"),d=s("openwb-base-copy-to-clipboard"),p=s("openwb-base-alert"),c=s("openwb-base-button-input");return g(),v("div",h,[i(a,{title:"Client-ID",required:"",subtype:"user","model-value":t.vehicle.configuration.client_id,"onUpdate:modelValue":e[0]||(e[0]=l=>t.updateConfiguration(l,"configuration.client_id"))},{help:o(()=>e[3]||(e[3]=[n(" Die im Developer Portal angelegte Client-ID. ")])),_:1},8,["model-value"]),i(a,{title:"Client Secret",required:"",subtype:"password","model-value":t.vehicle.configuration.client_secret,"onUpdate:modelValue":e[1]||(e[1]=l=>t.updateConfiguration(l,"configuration.client_secret"))},{help:o(()=>e[4]||(e[4]=[n(" Das im Developer Portal angelegte Client Secret. ")])),_:1},8,["model-value"]),i(a,{title:"VIN",required:"","model-value":t.vehicle.configuration.vin,"onUpdate:modelValue":e[2]||(e[2]=l=>t.updateConfiguration(l,"configuration.vin"))},{help:o(()=>e[5]||(e[5]=[n(" Die Fahrgestellnummer des Fahrzeugs. ")])),_:1},8,["model-value"]),i(p,{subtype:"info"},{default:o(()=>[e[6]||(e[6]=n(" Vor dem Anmelden bitte die Angaben speichern.")),e[7]||(e[7]=u("br",null,null,-1)),e[8]||(e[8]=n(" Die Callback-URL für die Anmeldung lautet:")),e[9]||(e[9]=u("br",null,null,-1)),i(d,{class:"text-info",tooltip:"URL kopieren"},{default:o(()=>[n(_(r.callback_url),1)]),_:1})]),_:1}),i(c,{title:"Anmelden","button-text":"Bei Mercedes Anmelden",subtype:"success",disabled:!r.input_complete,onButtonClicked:r.login_window},{help:o(()=>e[10]||(e[10]=[n(" Es wird ein neues Browserfenster geöffnet, in dem Sie sich bei Mercedes mit Ihren Zugangsdaten anmelden können."),u("br",null,null,-1)])),_:1},8,["disabled","onButtonClicked"])])}const S=b(f,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/mercedeseq/vehicle.vue"]]);export{S as default};
