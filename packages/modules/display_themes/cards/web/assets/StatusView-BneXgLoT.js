import{u as y}from"./index-BCcTh2Tv.js";import{l as b,C as M,F as k,D as A}from"./vendor-fortawesome-DhL64LM6.js";import{_ as p}from"./vendor-inkline-CqnuQ_Go.js";import{o as c,l as f,n as t,k as n,s as o,q as l,I as x,j as I,i as C}from"./vendor-CFVb6_YQ.js";import{D as z}from"./DashBoardCard-BqIRnhnk.js";b.add(M);const D=p({name:"ReloadButton",components:{FontAwesomeIcon:k},props:{},data:()=>({}),methods:{reloadDisplay(){location.reload()}}},[["render",function(w,e,h,S,u,m){const i=l("FontAwesomeIcon"),a=l("i-button");return c(),f(a,{color:"success",size:"lg",onClick:e[0]||(e[0]=s=>m.reloadDisplay())},{default:t(()=>[e[1]||(e[1]=n(" Display neu laden ")),o(i,{"fixed-width":"",icon:["fas","fa-undo"]})]),_:1})}]]);b.add(M);const F=p({name:"RebootButton",components:{FontAwesomeIcon:k},props:{},data:()=>({mqttStore:y(),showModal:!1}),methods:{toggleModal(){this.showModal=!this.showModal},cancel(){this.toggleModal()},confirm(){this.toggleModal(),this.mqttStore.settings.parentChargePoint1!==void 0?this.$root.sendSystemCommand("chargepointReboot",{chargePoint:this.mqttStore.settings.parentChargePoint1}):this.$root.sendSystemCommand("systemReboot")}}},[["render",function(w,e,h,S,u,m){const i=l("FontAwesomeIcon"),a=l("i-container"),s=l("i-button"),d=l("i-column"),_=l("i-row"),g=l("i-modal");return c(),f(s,{color:"warning",size:"lg",onClick:e[3]||(e[3]=r=>m.toggleModal())},{default:t(()=>[e[8]||(e[8]=n(" openWB neu starten ")),o(i,{"fixed-width":"",icon:["fas","fa-undo"]}),(c(),f(x,{to:"body"},[o(g,{modelValue:u.showModal,"onUpdate:modelValue":e[2]||(e[2]=r=>u.showModal=r),size:"sm"},{header:t(()=>e[4]||(e[4]=[n(" openWB neu starten... ")])),footer:t(()=>[o(a,null,{default:t(()=>[o(_,null,{default:t(()=>[o(d,{class:"_text-align:right"},{default:t(()=>[o(s,{color:"success",onClick:e[0]||(e[0]=r=>m.cancel())},{default:t(()=>e[6]||(e[6]=[n(" Zurück ")])),_:1})]),_:1}),o(d,null,{default:t(()=>[o(s,{color:"danger",onClick:e[1]||(e[1]=r=>m.confirm())},{default:t(()=>e[7]||(e[7]=[n(" Neustart ")])),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[o(a,null,{default:t(()=>e[5]||(e[5]=[n(" Möchten Sie diese openWB wirklich neu starten? ")])),_:1})]),_:1},8,["modelValue"])]))]),_:1})}]]);b.add(A);const Z=p({name:"StatusView",components:{ReloadButton:D,RebootButton:F,ShutdownButton:p({name:"ShutdownButton",components:{FontAwesomeIcon:k},props:{},data:()=>({mqttStore:y(),showModal:!1}),methods:{toggleModal(){this.showModal=!this.showModal},cancel(){this.toggleModal()},confirm(){this.toggleModal(),this.mqttStore.settings.parentChargePoint1!==void 0?this.$root.sendSystemCommand("chargepointShutdown",{chargePoint:this.mqttStore.settings.parentChargePoint1}):this.$root.sendSystemCommand("systemShutdown")}}},[["render",function(w,e,h,S,u,m){const i=l("FontAwesomeIcon"),a=l("i-container"),s=l("i-button"),d=l("i-column"),_=l("i-row"),g=l("i-modal");return c(),f(s,{color:"danger",size:"lg",onClick:e[3]||(e[3]=r=>m.toggleModal())},{default:t(()=>[e[8]||(e[8]=n(" openWB ausschalten ")),o(i,{"fixed-width":"",icon:["fas","fa-power-off"]}),(c(),f(x,{to:"body"},[o(g,{modelValue:u.showModal,"onUpdate:modelValue":e[2]||(e[2]=r=>u.showModal=r),size:"sm"},{header:t(()=>e[4]||(e[4]=[n(" openWB ausschalten... ")])),footer:t(()=>[o(a,null,{default:t(()=>[o(_,null,{default:t(()=>[o(d,{class:"_text-align:right"},{default:t(()=>[o(s,{color:"success",onClick:e[0]||(e[0]=r=>m.cancel())},{default:t(()=>e[6]||(e[6]=[n(" Zurück ")])),_:1})]),_:1}),o(d,null,{default:t(()=>[o(s,{color:"danger",onClick:e[1]||(e[1]=r=>m.confirm())},{default:t(()=>e[7]||(e[7]=[n(" Ausschalten ")])),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[o(a,null,{default:t(()=>e[5]||(e[5]=[n(" Möchten Sie diese openWB wirklich ausschalten?"),I("br",null,null,-1),n(" Nach dem Ausschalten muss die Ladestation komplett spannungsfrei geschaltet werden. Erst beim erneuten Zuschalten der Spannung fährt das System wieder hoch. ")])),_:1})]),_:1},8,["modelValue"])]))]),_:1})}]]),DashBoardCard:z},props:{changesLocked:{required:!1,type:Boolean,default:!1}},data:()=>({mqttStore:y()})},[["render",function(w,e,h,S,u,m){const i=l("i-form-label"),a=l("i-column"),s=l("i-input"),d=l("i-row"),_=l("i-form-group"),g=l("reload-button"),r=l("reboot-button"),B=l("shutdown-button"),q=l("i-form"),v=l("i-container"),V=l("dash-board-card");return c(),f(V,{color:"primary"},{headerLeft:t(()=>e[0]||(e[0]=[n(" Status ")])),default:t(()=>[o(v,null,{default:t(()=>[o(q,null,{default:t(()=>[o(d,null,{default:t(()=>[o(a,null,{default:t(()=>[o(_,null,{default:t(()=>[o(d,{class:"_margin-top:2"},{default:t(()=>[o(a,{xl:"2",lg:"3",md:"4"},{default:t(()=>[o(i,null,{default:t(()=>e[1]||(e[1]=[n(" IP-Adresse ")])),_:1})]),_:1}),o(a,null,{default:t(()=>[o(s,{id:"input_system_ip",plaintext:"","model-value":u.mqttStore.getSystemIp},null,8,["model-value"])]),_:1})]),_:1}),o(d,{class:"_margin-top:1"},{default:t(()=>[o(a,{xl:"2",lg:"3",md:"4"},{default:t(()=>[o(i,null,{default:t(()=>e[2]||(e[2]=[n(" Systemzeit ")])),_:1})]),_:1}),o(a,null,{default:t(()=>[o(s,{id:"input_system_time",plaintext:"","model-value":u.mqttStore.getSystemTime},null,8,["model-value"])]),_:1})]),_:1}),o(d,{class:"_margin-top:1"},{default:t(()=>[o(a,{xl:"2",lg:"3",md:"4"},{default:t(()=>[o(i,null,{default:t(()=>e[3]||(e[3]=[n(" Version ")])),_:1})]),_:1}),o(a,null,{default:t(()=>[o(s,{id:"input_system_version",plaintext:"","model-value":u.mqttStore.getSystemVersion},null,8,["model-value"])]),_:1})]),_:1}),o(d,{class:"_margin-top:1"},{default:t(()=>[o(a,{xl:"2",lg:"3",md:"4"},{default:t(()=>[o(i,null,{default:t(()=>e[4]||(e[4]=[n(" Version (Details) ")])),_:1})]),_:1}),o(a,null,{default:t(()=>[o(s,{id:"input_system_commit",plaintext:"","model-value":u.mqttStore.getSystemCurrentCommit},null,8,["model-value"])]),_:1})]),_:1}),o(d,{class:"_margin-top:1"},{default:t(()=>[o(a,{xl:"2",lg:"3",md:"4"},{default:t(()=>[o(i,null,{default:t(()=>e[5]||(e[5]=[n(" Entwicklungszweig ")])),_:1})]),_:1}),o(a,null,{default:t(()=>[o(s,{id:"input_system_branch",plaintext:"","model-value":u.mqttStore.getSystemBranch},null,8,["model-value"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),h.changesLocked?C("",!0):(c(),f(d,{key:0,class:"_margin-top:5",between:""},{default:t(()=>[o(a,null,{default:t(()=>[o(g,{block:""})]),_:1})]),_:1})),h.changesLocked?C("",!0):(c(),f(d,{key:1,between:""},{default:t(()=>[o(a,null,{default:t(()=>[o(r,{block:"",class:"_margin-top:2"})]),_:1}),o(a,null,{default:t(()=>[o(B,{block:"",class:"_margin-top:2"})]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})}]]);export{Z as default};
