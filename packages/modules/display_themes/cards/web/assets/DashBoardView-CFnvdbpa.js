import{u as p}from"./index-BfpYTM6t.js";import{D as S}from"./DashBoardCard-ChX0nYSF.js";import{S as q,C as k}from"./ChargePointPlugBadge-BqLGuSKM.js";import{l as P,d as v,F as w,e as x,g as B,h as D,i as I}from"./vendor-fortawesome-1k8kfR6t.js";import{_ as g}from"./vendor-inkline-GZyOLkvD.js";import{l as e,o as c,n as d,p as o,s,k as i,x as m,i as _,e as H}from"./vendor-DcFd2nmT.js";P.add(v);const L={name:"GridCard",components:{DashBoardCard:S,SparkLine:q,FontAwesomeIcon:w},props:{},data(){return{mqttStore:p()}}};function E(h,l,f,u,t,C){const r=e("font-awesome-icon"),a=e("spark-line"),n=e("dash-board-card");return c(),d(n,{color:"danger"},{headerLeft:o(()=>[s(r,{"fixed-width":"",icon:["fas","fa-gauge-high"]}),i(" EVU ")]),headerRight:o(()=>[i(m(t.mqttStore.getGridPower()),1)]),default:o(()=>[s(a,{color:"var(--color--danger)","color-negative":"var(--color--success)",data:t.mqttStore.getGridPowerChartData},null,8,["data"])]),_:1})}const V=g(L,[["render",E]]);P.add(x);const G={name:"BatteryCard",components:{DashBoardCard:S,SparkLine:q,FontAwesomeIcon:w},props:{},data(){return{mqttStore:p()}}};function R(h,l,f,u,t,C){const r=e("font-awesome-icon"),a=e("spark-line"),n=e("dash-board-card");return t.mqttStore.getBatteryConfigured?(c(),d(n,{key:0,color:"warning"},{headerLeft:o(()=>[s(r,{"fixed-width":"",icon:["fas","fa-car-battery"]}),i(" Speicher ")]),headerRight:o(()=>[i(m(t.mqttStore.getBatterySoc())+" / "+m(t.mqttStore.getBatteryPower()),1)]),default:o(()=>[s(a,{color:"var(--color--warning)",data:t.mqttStore.getBatteryPowerChartData,"soc-data":t.mqttStore.getBatterySocChartData},null,8,["data","soc-data"])]),_:1})):_("",!0)}const $=g(G,[["render",R]]);P.add(B);const N={name:"InverterCard",components:{DashBoardCard:S,SparkLine:q,FontAwesomeIcon:w},props:{},data(){return{mqttStore:p()}}};function F(h,l,f,u,t,C){const r=e("font-awesome-icon"),a=e("spark-line"),n=e("dash-board-card");return t.mqttStore.getPvConfigured?(c(),d(n,{key:0,color:"success"},{headerLeft:o(()=>[s(r,{"fixed-width":"",icon:["fas","fa-solar-panel"]}),i(" PV ")]),headerRight:o(()=>[i(m(t.mqttStore.getPvPower()),1)]),default:o(()=>[s(a,{color:"var(--color--success)",data:t.mqttStore.getPvPowerChartData,inverted:!0},null,8,["data"])]),_:1})):_("",!0)}const A=g(N,[["render",F]]);P.add(D);const M={name:"HomeCard",components:{DashBoardCard:S,SparkLine:q,FontAwesomeIcon:w},props:{},data(){return{mqttStore:p()}}};function T(h,l,f,u,t,C){const r=e("font-awesome-icon"),a=e("spark-line"),n=e("dash-board-card");return c(),d(n,{color:"light"},{headerLeft:o(()=>[s(r,{"fixed-width":"",icon:["fas","fa-home"]}),i(" Hausverbrauch ")]),headerRight:o(()=>[i(m(t.mqttStore.getHomePower()),1)]),default:o(()=>[s(a,{color:"var(--color--light)",data:t.mqttStore.getHomePowerChartData},null,8,["data"])]),_:1})}const U=g(M,[["render",T]]);P.add(I);const j={name:"ChargePointsCard",components:{DashBoardCard:S,SparkLine:q,FontAwesomeIcon:w,ChargePointPlugBadge:k},props:{},data(){return{mqttStore:p()}}};function z(h,l,f,u,t,C){const r=e("font-awesome-icon"),a=e("charge-point-plug-badge"),n=e("spark-line"),y=e("dash-board-card");return t.mqttStore.getChargePointIds.length>0?(c(),d(y,{key:0,color:"primary"},{headerLeft:o(()=>[s(r,{"fixed-width":"",icon:["fas","fa-charging-station"]}),i(" "+m(t.mqttStore.getChargePointIds.length==1?t.mqttStore.getChargePointName(t.mqttStore.getChargePointIds[0]):"Ladepunkte"),1)]),headerRight:o(()=>[i(m(t.mqttStore.getChargePointIds.length==1?t.mqttStore.getChargePointPower(t.mqttStore.getChargePointIds[0]):t.mqttStore.getChargePointSumPower())+" ",1),s(a,{"charge-point-id":t.mqttStore.getChargePointIds,"show-energy-charged":!1},null,8,["charge-point-id"])]),default:o(()=>[s(n,{color:"var(--color--primary)",data:t.mqttStore.getChargePointIds.length==1?t.mqttStore.getChargePointPowerChartData(t.mqttStore.getChargePointIds[0]):t.mqttStore.getChargePointSumPowerChartData},null,8,["data"])]),_:1})):_("",!0)}const J=g(j,[["render",z]]),K={name:"DashboardView",components:{GridCard:V,HomeCard:U,BatteryCard:$,InverterCard:A,ChargePointsCard:J},props:{changesLocked:{required:!1,type:Boolean,default:!1}},data(){return{mqttStore:p()}}},O={class:"dash-board-card-wrapper"};function Q(h,l,f,u,t,C){const r=e("grid-card"),a=e("home-card"),n=e("battery-card"),y=e("inverter-card"),b=e("charge-points-card");return c(),H("div",O,[t.mqttStore.getGridCardEnabled?(c(),d(r,{key:0})):_("",!0),t.mqttStore.getHomeCardEnabled?(c(),d(a,{key:1})):_("",!0),t.mqttStore.getBatteryCardEnabled?(c(),d(n,{key:2})):_("",!0),t.mqttStore.getPvCardEnabled?(c(),d(y,{key:3})):_("",!0),t.mqttStore.getChargePointsCardEnabled?(c(),d(b,{key:4})):_("",!0)])}const ot=g(K,[["render",Q],["__scopeId","data-v-2085947b"]]);export{ot as default};
