import{l as _,a3 as k,F as y}from"./vendor-fortawesome-41164876.js";import{C as v}from"./index-7731ba98.js";import{_ as B,u as n,k as i,l as h,x as a,D as o,N as r,A as m,y as d,B as p}from"./vendor-a21b3a62.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";_.add(k);const S={name:"OpenwbDataProtectionView",components:{FontAwesomeIcon:y},mixins:[v],emits:["sendCommand","save"],data(){return{mqttTopicsToSubscribe:["openWB/system/dataprotection_acknowledged"]}},methods:{sendSystemCommand(t,e={}){this.$emit("sendCommand",{command:t,data:e})}}},$={class:"dataProtection"},z={name:"dataProtectionForm"},C={class:"row justify-content-center"},V={class:"col-md-4 d-flex justify-content-center"};function W(t,e,N,x,A,b){const u=n("openwb-base-button-group-input"),c=n("font-awesome-icon"),g=n("openwb-base-click-button"),l=n("openwb-base-alert"),w=n("openwb-base-submit-buttons"),f=n("openwb-base-card");return i(),h("div",$,[a("form",z,[o(f,{title:"Nutzungsbedingungen & Datenschutzerklärung"},{footer:r(()=>[o(w,{"form-name":"dataProtectionForm","hide-reset":!0,"hide-defaults":!0,onSave:e[3]||(e[3]=s=>t.$emit("save"))})]),default:r(()=>[e[7]||(e[7]=a("iframe",{src:"dataProtection-usageTerms.html",width:"100%",height:"400px",class:"bg-light"},null,-1)),e[8]||(e[8]=a("hr",null,null,-1)),o(u,{title:"Nutzungsbedingungen",buttons:[{buttonValue:!1,text:"Ablehnen",class:"btn-outline-danger"},{buttonValue:!0,text:"Akzeptieren",class:"btn-outline-success"}],"model-value":t.$store.state.mqtt["openWB/system/usage_terms_acknowledged"],"onUpdate:modelValue":e[0]||(e[0]=s=>t.updateState("openWB/system/usage_terms_acknowledged",s))},null,8,["model-value"]),t.$store.state.mqtt["openWB/system/usage_terms_acknowledged"]?p("",!0):(i(),m(l,{key:0,subtype:"danger",class:"mb-1"},{default:r(()=>[e[5]||(e[5]=d(" Sie müssen die Nutzungsbedingungen akzeptieren, bevor openWB eingesetzt werden kann. ")),a("div",C,[a("div",V,[o(g,{class:"btn-danger",onButtonClicked:e[1]||(e[1]=s=>b.sendSystemCommand("systemShutdown"))},{default:r(()=>[e[4]||(e[4]=d(" Nicht akzeptieren und ausschalten ")),o(c,{"fixed-width":"",icon:["fas","power-off"]})]),_:1})])])]),_:1})),o(u,{title:"Datenschutzerklärung",buttons:[{buttonValue:!1,text:"Ablehnen",class:"btn-outline-danger"},{buttonValue:!0,text:"Akzeptieren",class:"btn-outline-success"}],"model-value":t.$store.state.mqtt["openWB/system/dataprotection_acknowledged"],"onUpdate:modelValue":e[2]||(e[2]=s=>t.updateState("openWB/system/dataprotection_acknowledged",s))},null,8,["model-value"]),t.$store.state.mqtt["openWB/system/dataprotection_acknowledged"]?p("",!0):(i(),m(l,{key:1,subtype:"warning"},{default:r(()=>e[6]||(e[6]=[d(" Wenn sie nicht einwilligen, wird eine ggf. konfigurierte Cloud Anbindung gelöscht. Die openWB arbeitet autark wie gewohnt weiter. Fernzugriff und Remote Support sind dann nicht mehr möglich! ")])),_:1}))]),_:1})])])}const O=B(S,[["render",W],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/LegalSettings.vue"]]);export{O as default};