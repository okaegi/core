import{u as B,C as ne,N as ie}from"./index-BfpYTM6t.js";import{D as z}from"./DashBoardCard-ChX0nYSF.js";import{S as oe,C as W}from"./ChargePointPlugBadge-BqLGuSKM.js";import{l as N,b as le,c as ae,F as A,j as re,k as E,m as U,e as D,n as Z,o as R,p as j,q as O,r as J,s as K,t as G,u as H,v as ce,w as de,x as ge,y as he}from"./vendor-fortawesome-1k8kfR6t.js";import{_ as T}from"./vendor-inkline-GZyOLkvD.js";import{l as g,o as d,n as u,p as i,s as n,z as q,e as S,k as r,F as x,x as s,i as m,A as L,I as se,j as ue,q as me}from"./vendor-DcFd2nmT.js";N.add(le,ae);const Ce={name:"ChargePointLockButton",components:{FontAwesomeIcon:A},props:{chargePointId:{required:!0,type:Number},changesLocked:{required:!1,type:Boolean,default:!1}},data(){return{mqttStore:B()}},computed:{locked(){return this.mqttStore.getChargePointManualLock(this.chargePointId)},stateIcon(){return this.locked?["fas","fa-lock"]:["fas","fa-lock-open"]},stateClass(){return this.locked?["_color:danger"]:"_color:success"}},methods:{toggleChargePointManualLock(){this.changesLocked||this.$root.sendTopicToBroker(`openWB/chargepoint/${this.chargePointId}/set/manual_lock`,!this.mqttStore.getValueBool(`openWB/chargepoint/${this.chargePointId}/set/manual_lock`))}}};function fe(o,t,l,_,e,c){const C=g("font-awesome-icon"),f=g("i-button");return d(),u(f,{size:"lg",disabled:l.changesLocked,outline:l.changesLocked},{default:i(()=>[n(C,{"fixed-width":"",icon:c.stateIcon,class:q(c.stateClass),onClick:t[0]||(t[0]=b=>c.toggleChargePointManualLock())},null,8,["icon","class"])]),_:1},8,["disabled","outline"])}const Q=T(Ce,[["render",fe]]);N.add(re);const _e={name:"ChargePointCodeButton",components:{FontAwesomeIcon:A,CodeInputModal:ne},props:{chargePointId:{type:Number,required:!0}},data(){return{mqttStore:B(),modalIdTagEntryVisible:!1,modalIdTagEntryColor:"warning",code:""}},computed:{tagState(){return this.mqttStore.getChargepointTagState(this.chargePointId)},tagButtonColor(){switch(this.tagState){case 2:return"success";case 1:return"warning";default:return""}},tagClass(){switch(this.tagState){case 2:return"_color:success-80";case 1:return"_color:warning-80";default:return""}}},methods:{toggleIdTagModal(){this.modalIdTagEntryVisible=!this.modalIdTagEntryVisible},sendIdTag(o){this.$root.sendTopicToBroker(`openWB/chargepoint/${this.chargePointId}/get/rfid`,o),this.modalIdTagEntryVisible=!1}}};function Pe(o,t,l,_,e,c){const C=g("FontAwesomeIcon"),f=g("i-button"),b=g("CodeInputModal");return d(),S(x,null,[n(f,{class:"_margin-right:1",size:"lg",color:c.tagButtonColor,disabled:c.tagState==2,onClick:t[0]||(t[0]=h=>c.toggleIdTagModal())},{default:i(()=>[n(C,{"fixed-width":"",icon:["fas","fa-calculator"],class:q(c.tagClass)},null,8,["class"])]),_:1},8,["color","disabled"]),n(b,{ref:"lockInput",modelValue:e.modalIdTagEntryVisible,"onUpdate:modelValue":t[1]||(t[1]=h=>e.modalIdTagEntryVisible=h),"min-length":4,"max-length":20,"onUpdate:inputValue":c.sendIdTag},{header:i(()=>[r(" Bitte einen ID-Tag eingeben. ")]),_:1},8,["modelValue","onUpdate:inputValue"])],64)}const X=T(_e,[["render",Pe]]);N.add(E,U,D,Z,R,j,O,J,K,G,H);const Se={name:"ChargePointCard",components:{DashBoardCard:z,SparkLine:oe,ChargePointPlugBadge:W,ChargePointLockButton:Q,ChargePointCodeButton:X,FontAwesomeIcon:A},props:{chargePointId:{type:Number,required:!0},changesLocked:{type:Boolean,required:!0}},emits:["vehicle-click","soc-click","charge-mode-click","toggle-charge-point-settings"],data(){return{mqttStore:B()}},methods:{handleVehicleClick(o){this.$emit("vehicle-click",o)},handleSocClick(o){this.$emit("soc-click",o)},handleChargeModeClick(o){this.$emit("charge-mode-click",o)},toggleChargePointSettings(o){this.$emit("toggle-charge-point-settings",o)}}},Ve={key:0};function be(o,t,l,_,e,c){const C=g("charge-point-plug-badge"),f=g("charge-point-code-button"),b=g("charge-point-lock-button"),h=g("i-column"),V=g("i-row"),k=g("spark-line"),I=g("font-awesome-icon"),P=g("i-badge"),w=g("i-button"),v=g("i-container"),p=g("dash-board-card");return d(),u(p,{color:"primary"},{headerLeft:i(()=>[r(s(e.mqttStore.getChargePointName(l.chargePointId)),1)]),headerRight:i(()=>[n(C,{"charge-point-id":[l.chargePointId]},null,8,["charge-point-id"])]),default:i(()=>[n(v,null,{default:i(()=>[n(V,null,{default:i(()=>[n(h,null,{default:i(()=>[n(V,null,{default:i(()=>[n(h,{class:"_padding-left:0 _padding-right:0"},{default:i(()=>[e.mqttStore.getRfidEnabled?(d(),u(f,{key:0,"charge-point-id":l.chargePointId},null,8,["charge-point-id"])):m("",!0),n(b,{"charge-point-id":l.chargePointId,"changes-locked":l.changesLocked},null,8,["charge-point-id","changes-locked"])]),_:1}),n(h,{class:"_text-align:right _padding-left:0"},{default:i(()=>[r(s(e.mqttStore.getChargePointPower(l.chargePointId))+" "+s(e.mqttStore.getChargePointPhasesInUse(l.chargePointId))+" "+s(e.mqttStore.getChargePointSetCurrent(l.chargePointId)),1)]),_:1})]),_:1}),n(V,{class:"_padding-top:1"},{default:i(()=>[n(h,{class:"_padding-left:0"},{default:i(()=>[n(k,{color:"var(--color--primary)",data:e.mqttStore.getChargePointPowerChartData(l.chargePointId)},null,8,["data"])]),_:1})]),_:1})]),_:1}),n(h,{md:"6"},{default:i(()=>[n(V,{class:"_display:flex"},{default:i(()=>[n(h,{class:"_padding-left:0 _padding-right:0 _flex-grow:1"},{default:i(()=>[n(P,{size:"lg",class:q(["_width:100%",l.changesLocked?"":"clickable"]),onClick:t[0]||(t[0]=y=>c.handleVehicleClick(l.chargePointId))},{default:i(()=>[n(I,{"fixed-width":"",icon:["fas","fa-car"]}),r(" "+s(e.mqttStore.getChargePointConnectedVehicleName(l.chargePointId)),1)]),_:1},8,["class"])]),_:1}),e.mqttStore.getVehicleSocConfigured(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))||e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))!=0?(d(),u(h,{key:0,class:"_flex-grow:0 _padding-right:0 _padding-left:1"},{default:i(()=>[n(w,{size:"sm",disabled:l.changesLocked,class:q(l.changesLocked?"":"clickable"),onClick:t[1]||(t[1]=y=>c.handleSocClick(l.chargePointId))},{default:i(()=>[e.mqttStore.getVehicleSocConfigured(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))?(d(),S("span",Ve,[n(I,{"fixed-width":"",icon:e.mqttStore.getVehicleSocIsManual(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))?["fas","fa-edit"]:["fas","fa-car-battery"]},null,8,["icon"]),r(" "+s(e.mqttStore.getChargePointConnectedVehicleSoc(l.chargePointId).soc)+"% ",1)])):m("",!0),e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))!=0?(d(),u(I,{key:1,"fixed-width":"",icon:e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))>0?e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))>1?["fas","times-circle"]:["fas","exclamation-triangle"]:[],class:q(e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))>0?e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))>1?"_color:danger":"_color:warning":"")},null,8,["icon","class"])):m("",!0)]),_:1},8,["disabled","class"])]),_:1})):m("",!0)]),_:1}),n(V,{class:"_padding-top:1 _display:flex"},{default:i(()=>[n(h,{class:"_padding-left:0 _padding-right:0 _flex-grow:1"},{default:i(()=>[n(P,{size:"lg",class:q(["_width:100%",l.changesLocked?"":"clickable"]),color:e.mqttStore.getChargePointConnectedVehicleChargeMode(l.chargePointId).class,onClick:t[2]||(t[2]=y=>c.handleChargeModeClick(l.chargePointId))},{default:i(()=>[r(s(e.mqttStore.getChargePointConnectedVehicleChargeMode(l.chargePointId).label)+" ",1),n(I,{"fixed-width":"",icon:e.mqttStore.getChargePointConnectedVehiclePriority(l.chargePointId)?["fas","fa-star"]:["far","fa-star"],class:q(e.mqttStore.getChargePointConnectedVehiclePriority(l.chargePointId)?"_color:warning":"")},null,8,["icon","class"])]),_:1},8,["class","color"])]),_:1}),e.mqttStore.getChargePointConnectedVehicleTimeChargingActive(l.chargePointId)?(d(),u(h,{key:0,class:"_flex-grow:0 _padding-right:0 _padding-left:1"},{default:i(()=>[n(P,{size:"lg"},{default:i(()=>[e.mqttStore.getChargePointConnectedVehicleTimeChargingActive(l.chargePointId)?(d(),u(I,{key:0,"fixed-width":"",icon:e.mqttStore.getChargePointConnectedVehicleTimeChargingRunning(l.chargePointId)?["fas","fa-clock"]:["far","fa-clock"],class:q(e.mqttStore.getChargePointConnectedVehicleTimeChargingRunning(l.chargePointId)?"_color:success":"")},null,8,["icon","class"])):m("",!0)]),_:1})]),_:1})):m("",!0)]),_:1}),l.changesLocked?m("",!0):(d(),u(V,{key:0,class:"_padding-top:1"},{default:i(()=>[n(h,{class:"_padding-left:0 _padding-right:0"},{default:i(()=>[n(w,{block:"",onClick:t[3]||(t[3]=y=>c.toggleChargePointSettings(l.chargePointId))},{default:i(()=>[n(I,{"fixed-width":"",icon:["fas","fa-wrench"]})]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})}const Ie=T(Se,[["render",be],["__scopeId","data-v-3c6489c4"]]);N.add(E,U,D,Z,R,j,O,J,K,G,H);const ve={name:"ChargePointCard",components:{DashBoardCard:z,ChargePointPlugBadge:W,ChargePointLockButton:Q,ChargePointCodeButton:X,FontAwesomeIcon:A},props:{chargePointId:{type:Number,required:!0},changesLocked:{type:Boolean,required:!0}},emits:["vehicle-click","soc-click","charge-mode-click","toggle-charge-point-settings","set-charge-point-connected-vehicle-charge-mode"],data(){return{mqttStore:B(),simpleChargeModes:["instant_charging","pv_charging","stop"]}},computed:{filteredChargeModes(){return this.mqttStore.getSimpleChargePointView?this.mqttStore.chargeModeList().filter(o=>this.simpleChargeModes.includes(o.id)):this.mqttStore.chargeModeList()}},methods:{handleVehicleClick(o){this.$emit("vehicle-click",o)},handleSocClick(o){this.$emit("soc-click",o)},handleChargeModeClick(o){this.$emit("charge-mode-click",o)},toggleChargePointSettings(o){this.$emit("toggle-charge-point-settings",o)},setChargePointConnectedVehicleChargeMode(o,t){this.$emit("set-charge-point-connected-vehicle-charge-mode",o,t)}}},ke={key:0};function pe(o,t,l,_,e,c){const C=g("charge-point-plug-badge"),f=g("charge-point-code-button"),b=g("charge-point-lock-button"),h=g("i-column"),V=g("i-row"),k=g("font-awesome-icon"),I=g("i-button"),P=g("i-button-group"),w=g("i-container"),v=g("dash-board-card");return d(),u(v,{color:"primary"},{headerLeft:i(()=>[r(s(e.mqttStore.getChargePointName(l.chargePointId)),1)]),headerRight:i(()=>[n(C,{"charge-point-id":[l.chargePointId]},null,8,["charge-point-id"])]),default:i(()=>[n(w,null,{default:i(()=>[n(V,null,{default:i(()=>[n(h,null,{default:i(()=>[n(V,null,{default:i(()=>[n(h,{class:"_padding-left:0 _padding-right:0"},{default:i(()=>[e.mqttStore.getRfidEnabled?(d(),u(f,{key:0,"charge-point-id":l.chargePointId},null,8,["charge-point-id"])):m("",!0),n(b,{"charge-point-id":l.chargePointId,"changes-locked":l.changesLocked},null,8,["charge-point-id","changes-locked"])]),_:1}),n(h,{class:"_text-align:right _padding-left:0"},{default:i(()=>[r(s(e.mqttStore.getChargePointPower(l.chargePointId))+" "+s(e.mqttStore.getChargePointPhasesInUse(l.chargePointId))+" "+s(e.mqttStore.getChargePointSetCurrent(l.chargePointId)),1)]),_:1})]),_:1}),n(V,{class:"_padding-top:1"},{default:i(()=>[n(h,{class:"_padding-left:0 button-group-wrapper"},{default:i(()=>[n(P,{class:"button-group main-button-group"},{default:i(()=>[n(I,{class:q(["large-button _flex-grow:1",l.changesLocked?"":"clickable"]),disabled:l.changesLocked,onClick:t[0]||(t[0]=p=>c.handleVehicleClick(l.chargePointId))},{default:i(()=>[n(k,{"fixed-width":"",icon:["fas","fa-car"]}),r(" "+s(e.mqttStore.getChargePointConnectedVehicleName(l.chargePointId))+" ",1),n(k,{class:q(["_padding-left:1",e.mqttStore.getChargePointConnectedVehiclePriority(l.chargePointId)?"_color:warning":""]),"fixed-width":"",icon:e.mqttStore.getChargePointConnectedVehiclePriority(l.chargePointId)?["fas","fa-star"]:["far","fa-star"]},null,8,["icon","class"])]),_:1},8,["class","disabled"]),e.mqttStore.getVehicleSocConfigured(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))||e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))!=0?(d(),u(I,{key:0,class:q(["large-button _flex-grow:0",l.changesLocked?"":"clickable"]),disabled:l.changesLocked,onClick:t[1]||(t[1]=p=>c.handleSocClick(l.chargePointId))},{default:i(()=>[e.mqttStore.getVehicleSocConfigured(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))?(d(),S("span",ke,[n(k,{"fixed-width":"",icon:e.mqttStore.getVehicleSocIsManual(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))?["fas","fa-edit"]:["fas","fa-car-battery"]},null,8,["icon"]),r(" "+s(e.mqttStore.getChargePointConnectedVehicleSoc(l.chargePointId).soc)+"% ",1)])):m("",!0),e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))!=0?(d(),u(k,{key:1,"fixed-width":"",icon:e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))>0?e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))>1?["fas","times-circle"]:["fas","exclamation-triangle"]:[],class:q(e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))>0?e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(l.chargePointId))>1?"_color:danger":"_color:warning":"")},null,8,["icon","class"])):m("",!0)]),_:1},8,["disabled","class"])):m("",!0),n(I,{class:q(["large-button _flex-grow:0",l.changesLocked?"":"clickable"]),disabled:l.changesLocked,onClick:t[2]||(t[2]=p=>c.toggleChargePointSettings(l.chargePointId))},{default:i(()=>[n(k,{"fixed-width":"",icon:["fas","fa-wrench"]})]),_:1},8,["class","disabled"])]),_:1}),n(P,{class:"button-group _margin-top:1",disabled:l.changesLocked},{default:i(()=>[(d(!0),S(x,null,L(c.filteredChargeModes,p=>(d(),u(I,{key:p.id,outline:"",class:q(["large-button _flex-grow:1",l.changesLocked?"":"clickable"]),color:p.class!="dark"?p.class:"light",active:e.mqttStore.getChargePointConnectedVehicleChargeMode(l.chargePointId)!=null&&p.id==e.mqttStore.getChargePointConnectedVehicleChargeMode(l.chargePointId).mode,onClick:y=>c.setChargePointConnectedVehicleChargeMode(l.chargePointId,p.id)},{default:i(()=>[r(s(p.label),1)]),_:2},1032,["class","color","active","onClick"]))),128))]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const qe=T(ve,[["render",pe],["__scopeId","data-v-5e676b1f"]]),we={name:"ExtendedNumberInput",inheritAttrs:!1,props:{modelValue:{type:Number,required:!0,default:NaN},unit:{type:String,default:""},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},labels:{type:Array,default:void 0}},emits:["update:modelValue"],data(){return{minimum:this.labels?0:this.min,maximum:this.labels?this.labels.length-1:this.max,stepSize:this.labels?1:this.step}},computed:{label(){var o;return this.labels&&this.inputValue!=null?this.inputValue<this.labels.length?o=this.labels[this.inputValue].label:console.error("index out of bounds: "+this.inputValue):o=this.inputValue,typeof o=="number"&&(o=o.toLocaleString(void 0,{minimumFractionDigits:this.precision,maximumFractionDigits:this.precision})),o},precision(){if(!isFinite(this.stepSize))return 0;for(var o=1,t=0;Math.round(this.stepSize*o)/o!==this.stepSize;)o*=10,t++;return t},inputValue:{get(){if(this.labels){var o=void 0;for(let t=0;t<this.labels.length;t++)if(this.labels[t].value==this.modelValue){o=t;break}return o===void 0&&this.modelValue!==void 0?(console.warn("inputValue: not found in values: ",this.modelValue,"using minimum as default: ",this.minimum),this.minimum):o}return this.modelValue},set(o){if(this.labels){var t=this.labels[o].value;this.$emit("update:modelValue",t)}else this.$emit("update:modelValue",o)}}},methods:{increment(){var o=Math.min(this.inputValue+this.stepSize,this.maximum);this.inputValue=Math.round(o*Math.pow(10,this.precision))/Math.pow(10,this.precision)},decrement(){var o=Math.max(this.inputValue-this.stepSize,this.minimum);this.inputValue=Math.round(o*Math.pow(10,this.precision))/Math.pow(10,this.precision)}}};function ye(o,t,l,_,e,c){const C=g("i-button"),f=g("i-input");return d(),u(f,{modelValue:c.label,"onUpdate:modelValue":t[0]||(t[0]=b=>c.label=b),plaintext:"",class:"_text-align:right",size:"lg"},{prepend:i(()=>[n(C,{onClick:c.decrement},{default:i(()=>[r(" - ")]),_:1},8,["onClick"])]),suffix:i(()=>[r(s(l.unit),1)]),append:i(()=>[n(C,{onClick:c.increment},{default:i(()=>[r(" + ")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])}const Y=T(we,[["render",ye]]),xe={name:"ManualSocInput",components:{ExtendedNumberInput:Y,NumberPad:ie},props:{modelValue:{required:!0,type:Boolean,default:!1},vehicleId:{required:!0,type:Number,default:0}},emits:["update:modelValue"],data(){return{mqttStore:B(),newSoc:0}},methods:{enter(o){let t=this.newSoc*10+parseInt(o);t>=0&&t<=100&&(this.newSoc=t)},removeDigit(){this.newSoc=Math.trunc(this.newSoc/10)},clear(){this.newSoc=0},close(){this.$emit("update:modelValue",!1),this.newSoc=0},updateManualSoc(){this.$root.sendTopicToBroker(`openWB/vehicle/${this.vehicleId}/soc_module/calculated_soc_state/manual_soc`,this.newSoc),this.close()}}};function Me(o,t,l,_,e,c){const C=g("extended-number-input"),f=g("i-column"),b=g("i-row"),h=g("NumberPad"),V=g("i-container"),k=g("i-button"),I=g("i-modal");return d(),u(se,{to:"body"},[n(I,{"model-value":l.modelValue,size:"sm","onUpdate:modelValue":t[6]||(t[6]=P=>o.$emit("update:modelValue",P))},{header:i(()=>[r(' SoC für Fahrzeug "'+s(e.mqttStore.getVehicleName(l.vehicleId))+'" ',1)]),footer:i(()=>[n(V,null,{default:i(()=>[n(b,null,{default:i(()=>[n(f,null,{default:i(()=>[n(k,{color:"danger",onClick:t[4]||(t[4]=P=>c.close())},{default:i(()=>[r(" Zurück ")]),_:1})]),_:1}),n(f,{class:"_text-align:right"},{default:i(()=>[n(k,{color:"success",onClick:t[5]||(t[5]=P=>c.updateManualSoc())},{default:i(()=>[r(" OK ")]),_:1})]),_:1})]),_:1})]),_:1})]),default:i(()=>[n(V,null,{default:i(()=>[n(b,{center:"",class:"_padding-bottom:1"},{default:i(()=>[n(f,null,{default:i(()=>[n(C,{modelValue:e.newSoc,"onUpdate:modelValue":t[0]||(t[0]=P=>e.newSoc=P),unit:"%",min:0,max:100,step:1,size:"lg",class:"_text-align:center"},null,8,["modelValue"])]),_:1})]),_:1}),n(h,{"onKey:digit":t[1]||(t[1]=P=>c.enter(P)),"onKey:clear":t[2]||(t[2]=P=>c.clear()),"onKey:delete":t[3]||(t[3]=P=>c.removeDigit())})]),_:1})]),_:1},8,["model-value"])])}const Te=T(xe,[["render",Me]]);N.add(ce,de,ge,he);const Le={name:"ChargePointsView",components:{ChargePointCard:Ie,SimpleChargePointCard:qe,ExtendedNumberInput:Y,ManualSocInput:Te,FontAwesomeIcon:A},props:{changesLocked:{required:!1,type:Boolean,default:!1}},data(){return{mqttStore:B(),modalChargeModeSettingVisible:!1,modalVehicleSelectVisible:!1,modalChargePointSettingsVisible:!1,modalChargePointId:0,modalVehicleId:0,modalActiveTab:"tab-general",modalManualSocInputVisible:!1,simpleChargeModes:["instant_charging","pv_charging","stop"]}},computed:{vehicleList(){let o=this.mqttStore.getVehicleList;var t=[];return Object.keys(o).forEach(l=>{let _=parseInt(l.match(/(?:\/)([0-9]+)(?=\/)*/g)[0].replace(/[^0-9]+/g,""));t.push({id:_,name:o[l]})}),t},filteredChargeModes(){return this.mqttStore.getSimpleChargePointView?this.mqttStore.chargeModeList().filter(o=>this.simpleChargeModes.includes(o.id)):this.mqttStore.chargeModeList()}},watch:{changesLocked(o,t){t!==!0&&o===!0&&(this.modalChargeModeSettingVisible=!1,this.modalVehicleSelectVisible=!1,this.modalChargePointSettingsVisible=!1,this.modalManualSocInputVisible=!1)}},methods:{toggleChargePointSettings(o){switch(this.mqttStore.getChargePointConnectedVehicleChargeMode(o).mode){case"pv_charging":this.modalActiveTab="tab-pv-charging";break;case"scheduled_charging":this.modalActiveTab="tab-scheduled-charging";break;default:this.modalActiveTab="tab-instant-charging"}this.modalChargePointId=o,this.modalChargePointSettingsVisible=!0},handleChargeModeClick(o){this.changesLocked||(this.modalChargePointId=o,this.modalChargeModeSettingVisible=!0)},handleVehicleClick(o){this.changesLocked||(this.modalChargePointId=o,this.modalVehicleSelectVisible=!0)},handleSocClick(o){let t=this.mqttStore.getChargePointConnectedVehicleId(o);if(this.mqttStore.getVehicleSocIsManual(t)){this.modalVehicleId=t,this.modalManualSocInputVisible=!0;return}this.$root.sendTopicToBroker(`openWB/set/vehicle/${t}/get/force_soc_update`,1)},setChargePointConnectedVehicle(o,t){t.id!=this.mqttStore.getChargePointConnectedVehicleId(o)&&this.$root.sendTopicToBroker(`openWB/chargepoint/${o}/config/ev`,t.id),this.modalVehicleSelectVisible&&(this.modalVehicleSelectVisible=!1)},setChargePointConnectedVehicleChargeMode(o,t){if(t.id!=this.mqttStore.getChargePointConnectedVehicleChargeMode(o)){var l=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(o);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${l}/chargemode/selected`,t)}},setChargePointConnectedVehiclePriority(o,t){if(t!=this.mqttStore.getChargePointConnectedVehiclePriority(o)){var l=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(o);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${l}/prio`,t)}},setChargePointConnectedVehicleTimeChargingActive(o,t){if(t!=this.mqttStore.getChargePointConnectedVehicleTimeChargingActive(o)){var l=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(o);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${l}/time_charging/active`,t)}},setChargePointConnectedVehicleInstantChargingCurrent(o,t){if(t&&t!=this.mqttStore.getChargePointConnectedVehicleInstantChargingCurrent(o)){var l=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(o);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${l}/chargemode/instant_charging/current`,parseFloat(t))}},setChargePointConnectedVehicleInstantChargingLimit(o,t){if(t&&t!=this.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(o).selected){var l=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(o);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${l}/chargemode/instant_charging/limit/selected`,t)}},setChargePointConnectedVehicleInstantChargingLimitSoc(o,t){if(t&&t!=this.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(o).soc){var l=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(o);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${l}/chargemode/instant_charging/limit/soc`,parseInt(t))}},setChargePointConnectedVehicleInstantChargingLimitAmount(o,t){if(t&&t!=this.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(o).amount){var l=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(o);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${l}/chargemode/instant_charging/limit/amount`,t)}},setChargePointConnectedVehiclePvChargingFeedInLimit(o,t){if(t!=this.mqttStore.getChargePointConnectedVehiclePvChargingFeedInLimit(o)){var l=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(o);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${l}/chargemode/pv_charging/feed_in_limit`,t)}},setChargePointConnectedVehiclePvChargingMinCurrent(o,t){let l=this.mqttStore.getChargePointConnectedVehiclePvChargingMinCurrent(o),_=parseInt(t);if(_!=l&&!isNaN(_)){var e=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(o);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${e}/chargemode/pv_charging/min_current`,_)}},setChargePointConnectedVehiclePvChargingMinSoc(o,t){let l=this.mqttStore.getChargePointConnectedVehiclePvChargingMinSoc(o),_=parseInt(t);if(_!=l&&!isNaN(_)){var e=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(o);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${e}/chargemode/pv_charging/min_soc`,_)}},setChargePointConnectedVehiclePvChargingMinSocCurrent(o,t){let l=this.mqttStore.getChargePointConnectedVehiclePvChargingMinSocCurrent(o),_=parseInt(t);if(_!=l&&!isNaN(_)){var e=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(o);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${e}/chargemode/pv_charging/min_soc_current`,_)}},setChargePointConnectedVehiclePvChargingMaxSoc(o,t){let l=this.mqttStore.getChargePointConnectedVehiclePvChargingMaxSoc(o),_=parseInt(t);if(_!=l&&!isNaN(_)){var e=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(o);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${e}/chargemode/pv_charging/max_soc`,_)}},setChargePointConnectedVehicleScheduledChargingPlanActive(o,t){this.$root.sendTopicToBroker(`${o}/active`,t)},setChargePointConnectedVehicleTimeChargingPlanActive(o,t){this.$root.sendTopicToBroker(`${o}/active`,t)}}},Be={class:"charge-points-card-wrapper"},Ne={key:0},Ae={key:1},Fe={key:2},ze={key:3},We={key:4},Ee={key:0},Ue={key:1},De={key:0},Ze={key:1},Re={key:2},je={key:3},Oe={key:4};function Je(o,t,l,_,e,c){const C=g("i-form-label"),f=g("i-button"),b=g("i-button-group"),h=g("i-form-group"),V=g("i-form"),k=g("i-modal"),I=g("i-tab-title"),P=g("extended-number-input"),w=g("i-tab"),v=g("font-awesome-icon"),p=g("i-alert"),y=g("i-row"),F=g("i-container"),$=g("i-tabs"),ee=g("manual-soc-input");return d(),S(x,null,[ue("div",Be,[(d(!0),S(x,null,L(e.mqttStore.getChargePointIds,a=>(d(),u(me(e.mqttStore.getSimpleChargePointView?"SimpleChargePointCard":"ChargePointCard"),{key:a,"charge-point-id":a,"changes-locked":l.changesLocked,onVehicleClick:c.handleVehicleClick,onSocClick:c.handleSocClick,onChargeModeClick:c.handleChargeModeClick,onToggleChargePointSettings:c.toggleChargePointSettings,onSetChargePointConnectedVehicleChargeMode:c.setChargePointConnectedVehicleChargeMode},null,40,["charge-point-id","changes-locked","onVehicleClick","onSocClick","onChargeModeClick","onToggleChargePointSettings","onSetChargePointConnectedVehicleChargeMode"]))),128))]),n(k,{modelValue:e.modalChargeModeSettingVisible,"onUpdate:modelValue":t[2]||(t[2]=a=>e.modalChargeModeSettingVisible=a),size:"lg"},{header:i(()=>[r(' Lademodus für "'+s(e.mqttStore.getChargePointConnectedVehicleName(e.modalChargePointId))+'" auswählen ',1)]),default:i(()=>[n(V,null,{default:i(()=>[n(h,null,{default:i(()=>[n(C,null,{default:i(()=>[r("Lademodus")]),_:1}),n(b,{block:""},{default:i(()=>[(d(!0),S(x,null,L(c.filteredChargeModes,a=>(d(),u(f,{key:a.id,outline:"",color:a.class!="dark"?a.class:"light",active:e.mqttStore.getChargePointConnectedVehicleChargeMode(e.modalChargePointId)!=null&&a.id==e.mqttStore.getChargePointConnectedVehicleChargeMode(e.modalChargePointId).mode,onClick:M=>c.setChargePointConnectedVehicleChargeMode(e.modalChargePointId,a.id)},{default:i(()=>[r(s(a.label),1)]),_:2},1032,["color","active","onClick"]))),128))]),_:1})]),_:1}),n(h,null,{default:i(()=>[n(C,null,{default:i(()=>[r("Priorität")]),_:1}),n(b,{block:""},{default:i(()=>[n(f,{color:e.mqttStore.getChargePointConnectedVehiclePriority(e.modalChargePointId)!==!0?"danger":"",onClick:t[0]||(t[0]=a=>c.setChargePointConnectedVehiclePriority(e.modalChargePointId,!1))},{default:i(()=>[r(" Nein ")]),_:1},8,["color"]),n(f,{color:e.mqttStore.getChargePointConnectedVehiclePriority(e.modalChargePointId)===!0?"success":"",onClick:t[1]||(t[1]=a=>c.setChargePointConnectedVehiclePriority(e.modalChargePointId,!0))},{default:i(()=>[r(" Ja ")]),_:1},8,["color"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),n(k,{modelValue:e.modalVehicleSelectVisible,"onUpdate:modelValue":t[3]||(t[3]=a=>e.modalVehicleSelectVisible=a),class:"modal-vehicle-select",size:"lg"},{header:i(()=>[r(' Fahrzeug an "'+s(e.mqttStore.getChargePointName(e.modalChargePointId))+'" auswählen ',1)]),default:i(()=>[n(V,null,{default:i(()=>[n(h,null,{default:i(()=>[n(b,{vertical:"",block:""},{default:i(()=>[(d(!0),S(x,null,L(c.vehicleList,a=>(d(),u(f,{key:a.id,active:e.mqttStore.getChargePointConnectedVehicleId(e.modalChargePointId)==a.id,color:e.mqttStore.getChargePointConnectedVehicleId(e.modalChargePointId)==a.id?"primary":"",onClick:M=>c.setChargePointConnectedVehicle(e.modalChargePointId,a)},{default:i(()=>[r(s(a.name),1)]),_:2},1032,["active","color","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),n(k,{modelValue:e.modalChargePointSettingsVisible,"onUpdate:modelValue":t[19]||(t[19]=a=>e.modalChargePointSettingsVisible=a),size:"lg"},{header:i(()=>[r(' Einstellungen für Fahrzeug "'+s(e.mqttStore.getChargePointConnectedVehicleName(e.modalChargePointId))+'" ',1)]),default:i(()=>[n($,{modelValue:e.modalActiveTab,"onUpdate:modelValue":t[18]||(t[18]=a=>e.modalActiveTab=a),stretch:""},{header:i(()=>[n(I,{for:"tab-instant-charging"},{default:i(()=>[r(" Sofort ")]),_:1}),n(I,{for:"tab-pv-charging"},{default:i(()=>[r(" PV ")]),_:1}),e.mqttStore.getSimpleChargePointView?m("",!0):(d(),u(I,{key:0,for:"tab-scheduled-charging"},{default:i(()=>[r(" Zielladen ")]),_:1})),e.mqttStore.getSimpleChargePointView?m("",!0):(d(),u(I,{key:1,for:"tab-time-charging"},{default:i(()=>[r(" Zeitladen ")]),_:1}))]),default:i(()=>[n(w,{name:"tab-instant-charging"},{default:i(()=>[n(V,null,{default:i(()=>[n(h,null,{default:i(()=>[n(C,null,{default:i(()=>[r("Stromstärke")]),_:1}),n(P,{unit:"A",min:6,max:32,"model-value":e.mqttStore.getChargePointConnectedVehicleInstantChargingCurrent(e.modalChargePointId),"onUpdate:modelValue":t[4]||(t[4]=a=>c.setChargePointConnectedVehicleInstantChargingCurrent(e.modalChargePointId,a))},null,8,["model-value"])]),_:1}),n(h,null,{default:i(()=>[n(C,null,{default:i(()=>[r("Begrenzung")]),_:1}),n(b,{block:""},{default:i(()=>[n(f,{color:e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointId).selected=="none"?"primary":"",active:e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointId).selected=="none",onClick:t[5]||(t[5]=a=>c.setChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointId,"none"))},{default:i(()=>[r(" Keine ")]),_:1},8,["color","active"]),n(f,{color:e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointId).selected=="soc"?"primary":"",active:e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointId).selected=="soc",onClick:t[6]||(t[6]=a=>c.setChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointId,"soc"))},{default:i(()=>[r(" EV-SoC ")]),_:1},8,["color","active"]),n(f,{color:e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointId).selected=="amount"?"primary":"",active:e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointId).selected=="amount",onClick:t[7]||(t[7]=a=>c.setChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointId,"amount"))},{default:i(()=>[r(" Energie ")]),_:1},8,["color","active"])]),_:1})]),_:1}),e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointId).selected=="soc"?(d(),u(h,{key:0},{default:i(()=>[n(C,null,{default:i(()=>[r("Max. SoC")]),_:1}),n(P,{unit:"%",min:5,max:100,step:5,"model-value":e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointId).soc,"onUpdate:modelValue":t[8]||(t[8]=a=>c.setChargePointConnectedVehicleInstantChargingLimitSoc(e.modalChargePointId,a))},null,8,["model-value"])]),_:1})):m("",!0),e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointId).selected=="amount"?(d(),u(h,{key:1},{default:i(()=>[n(C,null,{default:i(()=>[r("Max. Energie")]),_:1}),n(P,{unit:"kWh",min:1,max:100,"model-value":e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointId).amount/1e3,"onUpdate:modelValue":t[9]||(t[9]=a=>c.setChargePointConnectedVehicleInstantChargingLimitAmount(e.modalChargePointId,a*1e3))},null,8,["model-value"])]),_:1})):m("",!0)]),_:1})]),_:1}),n(w,{name:"tab-pv-charging"},{default:i(()=>[n(V,null,{default:i(()=>[n(h,null,{default:i(()=>[n(C,null,{default:i(()=>[r("Einspeisegrenze beachten")]),_:1}),n(b,{block:""},{default:i(()=>[n(f,{color:e.mqttStore.getChargePointConnectedVehiclePvChargingFeedInLimit(e.modalChargePointId)!==!0?"danger":"",onClick:t[10]||(t[10]=a=>c.setChargePointConnectedVehiclePvChargingFeedInLimit(e.modalChargePointId,!1))},{default:i(()=>[r(" Nein ")]),_:1},8,["color"]),n(f,{color:e.mqttStore.getChargePointConnectedVehiclePvChargingFeedInLimit(e.modalChargePointId)===!0?"success":"",onClick:t[11]||(t[11]=a=>c.setChargePointConnectedVehiclePvChargingFeedInLimit(e.modalChargePointId,!0))},{default:i(()=>[r(" Ja ")]),_:1},8,["color"])]),_:1})]),_:1}),n(h,null,{default:i(()=>[n(C,null,{default:i(()=>[r("Minimaler Dauerstrom")]),_:1}),n(P,{unit:"A",labels:[{label:"Aus",value:0},{label:6,value:6},{label:7,value:7},{label:8,value:8},{label:9,value:9},{label:10,value:10},{label:11,value:11},{label:12,value:12},{label:13,value:13},{label:14,value:14},{label:15,value:15},{label:16,value:16}],"model-value":e.mqttStore.getChargePointConnectedVehiclePvChargingMinCurrent(e.modalChargePointId),"onUpdate:modelValue":t[12]||(t[12]=a=>c.setChargePointConnectedVehiclePvChargingMinCurrent(e.modalChargePointId,a))},null,8,["model-value"])]),_:1}),n(h,null,{default:i(()=>[n(C,null,{default:i(()=>[r("Mindest-SoC")]),_:1}),n(P,{unit:"%",labels:[{label:"Aus",value:0},{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90},{label:95,value:95}],"model-value":e.mqttStore.getChargePointConnectedVehiclePvChargingMinSoc(e.modalChargePointId),"onUpdate:modelValue":t[13]||(t[13]=a=>c.setChargePointConnectedVehiclePvChargingMinSoc(e.modalChargePointId,a))},null,8,["model-value"])]),_:1}),n(h,null,{default:i(()=>[n(C,null,{default:i(()=>[r("Mindest-SoC Strom")]),_:1}),n(P,{min:6,max:32,unit:"A","model-value":e.mqttStore.getChargePointConnectedVehiclePvChargingMinSocCurrent(e.modalChargePointId),"onUpdate:modelValue":t[14]||(t[14]=a=>c.setChargePointConnectedVehiclePvChargingMinSocCurrent(e.modalChargePointId,a))},null,8,["model-value"])]),_:1}),n(h,null,{default:i(()=>[n(C,null,{default:i(()=>[r("SoC-Limit")]),_:1}),n(P,{unit:"%",labels:[{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90},{label:95,value:95},{label:100,value:100},{label:"Aus",value:101}],"model-value":e.mqttStore.getChargePointConnectedVehiclePvChargingMaxSoc(e.modalChargePointId),"onUpdate:modelValue":t[15]||(t[15]=a=>c.setChargePointConnectedVehiclePvChargingMaxSoc(e.modalChargePointId,a))},null,8,["model-value"])]),_:1})]),_:1})]),_:1}),e.mqttStore.getSimpleChargePointView?m("",!0):(d(),u(w,{key:0,name:"tab-scheduled-charging"},{default:i(()=>[Object.keys(e.mqttStore.getChargePointConnectedVehicleScheduledChargingPlans(e.modalChargePointId)).length===0?(d(),u(p,{key:0},{icon:i(()=>[n(v,{"fixed-width":"",icon:["fas","fa-info-circle"]})]),default:i(()=>[r(" Es wurden noch keine Zeitpläne für das Zielladen eingerichtet. ")]),_:1})):(d(),u(V,{key:1},{default:i(()=>[(d(!0),S(x,null,L(e.mqttStore.getChargePointConnectedVehicleScheduledChargingPlans(e.modalChargePointId),(a,M)=>(d(),u(h,{key:M},{default:i(()=>[n(F,null,{default:i(()=>[n(y,null,{default:i(()=>[n(C,null,{default:i(()=>[r(s(a.name),1)]),_:2},1024)]),_:2},1024),n(y,null,{default:i(()=>[n(f,{size:"lg",block:"",color:a.active?"success":"danger",onClick:te=>c.setChargePointConnectedVehicleScheduledChargingPlanActive(M,!a.active)},{default:i(()=>[a.frequency.selected=="once"?(d(),S("span",Ne,[n(v,{"fixed-width":"",icon:["fas","calendar-day"]}),r(" "+s(e.mqttStore.formatDate(a.frequency.once)),1)])):m("",!0),a.frequency.selected=="daily"?(d(),S("span",Ae,[n(v,{"fixed-width":"",icon:["fas","calendar-week"]}),r(" täglich ")])):m("",!0),a.frequency.selected=="weekly"?(d(),S("span",Fe,[n(v,{"fixed-width":"",icon:["fas","calendar-alt"]}),r(" "+s(e.mqttStore.formatWeeklyScheduleDays(a.frequency.weekly)),1)])):m("",!0),n(v,{"fixed-width":"",icon:["fas","clock"]}),r(" "+s(a.time)+" ",1),a.limit.selected=="soc"?(d(),S("span",ze,[n(v,{"fixed-width":"",icon:["fas","car-battery"]}),r(" "+s(a.limit.soc_scheduled)+" % ",1)])):m("",!0),a.limit.selected=="amount"?(d(),S("span",We,[n(v,{"fixed-width":"",icon:["fas","bolt"]}),r(" "+s(a.limit.amount/1e3)+" kWh ",1)])):m("",!0)]),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}))]),_:1})),e.mqttStore.getSimpleChargePointView?m("",!0):(d(),u(w,{key:1,name:"tab-time-charging"},{default:i(()=>[n(V,null,{default:i(()=>[n(h,null,{default:i(()=>[n(C,null,{default:i(()=>[r("Zeitladen aktivieren")]),_:1}),n(b,{block:""},{default:i(()=>[n(f,{color:e.mqttStore.getChargePointConnectedVehicleTimeChargingActive(e.modalChargePointId)!==!0?"danger":"",onClick:t[16]||(t[16]=a=>c.setChargePointConnectedVehicleTimeChargingActive(e.modalChargePointId,!1))},{default:i(()=>[r(" Nein ")]),_:1},8,["color"]),n(f,{color:e.mqttStore.getChargePointConnectedVehicleTimeChargingActive(e.modalChargePointId)===!0?"success":"",onClick:t[17]||(t[17]=a=>c.setChargePointConnectedVehicleTimeChargingActive(e.modalChargePointId,!0))},{default:i(()=>[r(" Ja ")]),_:1},8,["color"])]),_:1})]),_:1}),e.mqttStore.getChargePointConnectedVehicleTimeChargingActive(e.modalChargePointId)===!0?(d(),S("div",Ee,[Object.keys(e.mqttStore.getChargePointConnectedVehicleTimeChargingPlans(e.modalChargePointId)).length===0?(d(),u(p,{key:0,color:"warning",class:"_margin-top:2"},{icon:i(()=>[n(v,{"fixed-width":"",icon:["fas","fa-circle-info"]})]),default:i(()=>[r(" Es wurden noch keine Zeitpläne für das Zeitladen eingerichtet. ")]),_:1})):(d(),S("div",Ue,[(d(!0),S(x,null,L(e.mqttStore.getChargePointConnectedVehicleTimeChargingPlans(e.modalChargePointId),(a,M)=>(d(),u(h,{key:M},{default:i(()=>[n(F,null,{default:i(()=>[n(y,null,{default:i(()=>[n(C,null,{default:i(()=>[r(s(a.name),1)]),_:2},1024)]),_:2},1024),n(y,null,{default:i(()=>[n(f,{size:"lg",block:"",color:a.active?"success":"danger",onClick:te=>c.setChargePointConnectedVehicleTimeChargingPlanActive(M,!a.active)},{default:i(()=>[a.frequency.selected=="once"?(d(),S("span",De,[n(v,{"fixed-width":"",icon:["fas","calendar-day"]}),r(" "+s(e.mqttStore.formatDateRange(a.frequency.once)),1)])):m("",!0),a.frequency.selected=="daily"?(d(),S("span",Ze,[n(v,{"fixed-width":"",icon:["fas","calendar-week"]}),r(" täglich ")])):m("",!0),a.frequency.selected=="weekly"?(d(),S("span",Re,[n(v,{"fixed-width":"",icon:["fas","calendar-alt"]}),r(" "+s(e.mqttStore.formatWeeklyScheduleDays(a.frequency.weekly)),1)])):m("",!0),n(v,{"fixed-width":"",icon:["fas","clock"]}),r(" "+s(a.time.join("-"))+" ",1),a.limit.selected=="soc"?(d(),S("span",je,[n(v,{"fixed-width":"",icon:["fas","car-battery"]}),r(" "+s(a.limit.soc)+" % ",1)])):m("",!0),a.limit.selected=="amount"?(d(),S("span",Oe,[n(v,{"fixed-width":"",icon:["fas","bolt"]}),r(" "+s(a.limit.amount/1e3)+" kWh ",1)])):m("",!0)]),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]))])):m("",!0)]),_:1})]),_:1}))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),n(ee,{modelValue:e.modalManualSocInputVisible,"onUpdate:modelValue":t[20]||(t[20]=a=>e.modalManualSocInputVisible=a),"vehicle-id":e.modalVehicleId},null,8,["modelValue","vehicle-id"])],64)}const $e=T(Le,[["render",Je],["__scopeId","data-v-475ad77c"]]);export{$e as default};
