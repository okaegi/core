import{l as L,J as E,K as M,L as w,M as P,F as A}from"./vendor-fortawesome-221885f6.js";import{C as T}from"./index-7b686d60.js";import{C as $,p as I,a as V,L as z,b as F,P as N,c as H,T as J,i as Z,d as G,e as U}from"./vendor-chartjs-e4b5eddf.js";import{_ as Y,p as y,l as u,q as S,A as p,L as m,y as C,k as h,u as v,G as D,I as b,x as W}from"./vendor-93bd3532.js";import"./vendor-bootstrap-ca63a7a7.js";import"./vendor-jquery-15a435dc.js";import"./vendor-axios-566cac60.js";import"./vendor-sortablejs-b80cade1.js";import"./vendor-luxon-1af9332f.js";L.add(E,M,w,P);$.register(I,V,z,F,N,H,J,Z,G);const O={name:"OpenwbMonthlyChart",components:{ChartjsLine:U,FontAwesomeIcon:A},mixins:[T],emits:["sendCommand"],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/log/monthly/#","openWB/system/device/+/component/+/config","openWB/chargepoint/+/config","openWB/vehicle/+/name"],currentMonth:"",monthlyChartRequestData:{month:"",year:""},datasetTemplates:{"counter-energy":{label:"Zähler",jsonKey:null,borderColor:"rgba(255, 0, 0, 0.7)",backgroundColor:"rgba(255, 10, 13, 0.3)",fill:!0,lineTension:.2,hidden:!1,borderWidth:1,data:null,yAxisID:"y",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"pv-energy":{label:"PV",jsonKey:null,borderColor:"rgba(0, 255, 0, 0.7)",backgroundColor:"rgba(10, 255, 13, 0.3)",fill:!0,lineTension:.2,hidden:!0,borderWidth:1,data:null,yAxisID:"y",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"bat-energy":{label:"Speicher",jsonKey:null,borderColor:"rgba(255, 153, 13, 0.7)",backgroundColor:"rgba(200, 255, 13, 0.3)",fill:!0,lineTension:.2,hidden:!0,borderWidth:1,data:null,yAxisID:"y",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"cp-energy":{label:"Ladepunkt",jsonKey:null,borderColor:"rgba(0, 0, 255, 0.7)",backgroundColor:"rgba(0, 0, 255, 0.3)",fill:!0,lineTension:.2,hidden:!0,borderWidth:1,data:null,yAxisID:"y",parsing:{xAxisKey:"timestamp",yAxisKey:null}}},chartOptions:{plugins:{title:{display:!1},tooltip:{enabled:!0},legend:{display:!0},zoom:{pan:{enabled:!0,mode:"x",threshold:5},zoom:{wheel:{enabled:!0},pinch:{enabled:!0},mode:"x"}}},elements:{point:{radius:3}},responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day",tooltipFormat:"D"},display:!0,title:{display:!0,text:"Tag"},ticks:{source:"timestamp",font:{size:12},maxTicksLimit:31},grid:{}},y:{position:"left",type:"linear",display:"auto",suggestedMin:0,suggestedMax:0,title:{font:{size:12},display:!0,text:"Energie [kWh]"},grid:{},ticks:{font:{size:12},stepSize:.2,maxTicksLimit:11}}}},chartDatasets:{datasets:[]}}},computed:{monthlyChartDate:{get(){return this.monthlyChartRequestData.year+"-"+this.monthlyChartRequestData.month},set(e){let a=e.split("-");this.monthlyChartRequestData.year=a[0],this.monthlyChartRequestData.month=a[1]}},commandData(){return{month:this.monthlyChartRequestData.year+this.monthlyChartRequestData.month}},chartDataRead(){return this.chartDataObject!=null},chartDataHasEntries(){return this.chartDataObject?this.chartDataObject.length>0:!1},chartTotals(){if(this.$store.state.mqtt["openWB/log/monthly/"+this.commandData.month]){if(Object.prototype.hasOwnProperty.call(this.$store.state.mqtt["openWB/log/monthly/"+this.commandData.month],"totals"))return this.$store.state.mqtt["openWB/log/monthly/"+this.commandData.month].totals;{var e={bat:{},counter:{},pv:{},cp:{}};const o=["imported","exported"],n=(i,c,f)=>{const l=f.split(".");o.includes(l[l.length-1])&&(Object.prototype.hasOwnProperty.call(e[l[0]],[l[1]])||(e[l[0]][l[1]]={}),e[l[0]][l[1]][l[2]]=Math.floor(c-i))},s=(i,c,f,l="")=>{for(var d in c)c[d]!==null&&typeof c[d]=="object"?s(i[d],c[d],f,l?l+"."+d:d):f.apply(this,[i[d],c[d],l?l+"."+d:d])};var a=this.$store.state.mqtt["openWB/log/monthly/"+this.commandData.month];const t=a[0],r=a[a.length-1];return s(t,r,n),e}}},chartDataObject(){if(this.$store.state.mqtt["openWB/log/monthly/"+this.commandData.month]){var e=this.$store.state.mqtt["openWB/log/monthly/"+this.commandData.month];Object.prototype.hasOwnProperty.call(e,"entries")&&(console.debug("upgraded chart data received"),e=e.entries);var a=void 0,o=JSON.parse(JSON.stringify(e)).map(n=>{if(n.timestamp=n.timestamp*1e3,a!==void 0){var s=["pv","counter","bat","cp"];return s.forEach(t=>{Object.entries(n[t]).forEach(([r,i])=>{a[t][r]&&Object.keys(i).forEach(()=>{switch(t){case"pv":Object.prototype.hasOwnProperty.call(n[t][r],"exported")&&Object.prototype.hasOwnProperty.call(a[t][r],"exported")&&(n[t][r].energy=(n[t][r].exported-a[t][r].exported)/1e3);break;case"counter":Object.prototype.hasOwnProperty.call(n[t][r],"imported")&&Object.prototype.hasOwnProperty.call(a[t][r],"imported")&&Object.prototype.hasOwnProperty.call(n[t][r],"exported")&&Object.prototype.hasOwnProperty.call(a[t][r],"exported")&&(n[t][r].energy=(n[t][r].imported-a[t][r].imported-(n[t][r].exported-a[t][r].exported))/1e3,n[t][r].energyImport=Math.max(0,n[t][r].energy),n[t][r].energyExport=Math.min(0,n[t][r].energy));break;case"bat":Object.prototype.hasOwnProperty.call(n[t][r],"imported")&&Object.prototype.hasOwnProperty.call(a[t][r],"imported")&&Object.prototype.hasOwnProperty.call(n[t][r],"exported")&&Object.prototype.hasOwnProperty.call(a[t][r],"exported")&&(n[t][r].energy=(n[t][r].imported-a[t][r].imported-(n[t][r].exported-a[t][r].exported))/1e3,n[t][r].energyImport=Math.max(0,n[t][r].energy),n[t][r].energyExport=Math.min(0,n[t][r].energy));break;case"cp":Object.prototype.hasOwnProperty.call(n[t][r],"imported")&&Object.prototype.hasOwnProperty.call(a[t][r],"imported")&&(n[t][r].energy=(n[t][r].imported-a[t][r].imported)/1e3);break}})})}),a=n,n}else{a=n;return}});return o.shift(),o}},chartData(){if(this.chartDataObject){var e=["pv","counter","bat","cp","ev"];const a=this.chartDataObject[this.chartDataObject.length-1];return a&&e.forEach(o=>{Object.entries(a[o]).forEach(([n,s])=>{Object.keys(s).forEach(t=>{this.initDataset(o,n,t)})})}),this.chartDatasets}}},methods:{getCardSubtype(e){switch(e){case"bat":return"warning";case"counter":return"danger";case"cp":return"primary";case"pv":return"success";default:return"secondary"}},getCardIcon(e){switch(e){case"bat":return["fas","car-battery"];case"counter":return["fas","gauge-high"];case"cp":return["fas","charging-station"];case"pv":return["fas","solar-panel"];default:return}},getDatasetHidden(e,a){return console.debug("getDatasetHidden",e,a),!1},getTotalsLabel(e,a=void 0,o=void 0){var n="*test*";if(!a&&!o){switch(e){case"bat":return"Speicher";case"counter":return"Zähler";case"pv":return"Wechselrichter";case"cp":return"Ladepunkte";default:console.warn("unknown group key:",e)}return"*"+e+"*"}if(a&&!o){if(a=="all")return"Summe";var s=a.match(/\d+$/),t="";switch(e){case"cp":t="openWB/chargepoint/"+s+"/config";break;case"ev":t="openWB/vehicle/"+s+"/name";break;default:t="openWB/system/device/+/component/"+s+"/config"}var r=Object.keys(this.getWildcardTopics(t))[0];if(r)switch(e){case"pv":return this.$store.state.mqtt[r].name;case"counter":return this.$store.state.mqtt[r].name;case"bat":return this.$store.state.mqtt[r].name;case"cp":return this.$store.state.mqtt[r].name;case"ev":return this.$store.state.mqtt[r];default:console.warn("unknown group key:",e)}else console.warn("topic not found for:",e,a);return"+"+e+"+"+a+"+"}if(a&&o){switch(e){case"bat":case"cp":switch(o){case"imported":return"Ladung";case"exported":return"Entladung";default:console.warn("unknown measurement key:",e,o)}break;case"counter":switch(o){case"imported":return"Bezug/Verbrauch";case"exported":return"Einspeisung/Erzeugung";default:console.warn("unknown measurement key:",e,o)}break;case"pv":switch(o){case"exported":return"Erzeugung";default:console.warn("unknown measurement key:",e,o)}break;default:console.warn("unknown group key:",e)}return"*"+e+"+"+a+"+"+o+"*"}return n},getDatasetLabel(e,a,o,n){var s="*"+n;if(a=="all")switch(e){case"pv":s="PV (Summe)";break;case"bat":switch(s="Speicher",o){case"imported":s+=" (Ladung, Summe)";break;case"exported":s+=" (Entladung, Summe)";break;case"soc":s+=" SoC (Summe)";break;default:s+=" (Summe)"}break;case"cp":switch(s="Ladepunkte",o){case"imported":s+=" (Ladung, Summe)";break;case"exported":s+=" (Entladung, Summe)";break;case"soc":s+=" SoC (Summe)";break;default:s+=" (Summe)"}break}else{var t=a.match(/\d+$/),r="";switch(e){case"cp":r="openWB/chargepoint/"+t+"/config";break;case"ev":r="openWB/vehicle/"+t+"/name";break;default:r="openWB/system/device/+/component/"+t+"/config"}var i=Object.keys(this.getWildcardTopics(r))[0];if(i in this.$store.state.mqtt)switch(e){case"pv":s=this.$store.state.mqtt[i].name;break;case"counter":switch(s=this.$store.state.mqtt[i].name,o){case"imported":s+=" (Bezug)";break;case"exported":s+=" (Einspeisung)";break}break;case"bat":switch(s=this.$store.state.mqtt[i].name,o){case"imported":s+=" (Ladung)";break;case"exported":s+=" (Entladung)";break;case"soc":s+=" SoC";break}break;case"cp":switch(s=this.$store.state.mqtt[i].name,o){case"imported":s+=" (Ladung)";break;case"exported":s+=" (Entladung)";break;case"soc":s+=" SoC";break}break;case"ev":s=this.$store.state.mqtt[i];break}else console.warn("could not get name for dataset",n)}return s},getDatasetIndex(e){let a=this.chartDatasets.datasets.findIndex(o=>o.jsonKey==e);if(a!=-1)return a},addDataset(e,a,o,n){console.debug("adding new dataset",e,a,o,n);var s=e+"-"+o;if(this.datasetTemplates[s]){var t=JSON.parse(JSON.stringify(this.datasetTemplates[s]));return t.parsing.yAxisKey=n,t.jsonKey=n,t.data=this.chartDataObject,t.label=this.getDatasetLabel(e,a,o,n),t.labelSuffix!=null&&(t.label=t.label+t.labelSuffix),a=="all"&&(t.hidden=!1),this.chartDatasets.datasets.push(t)-1}else console.warn("no matching template found for: "+n+" with template: "+s)},initDataset(e,a,o){const n=["energy"],s=e+"."+a+"."+o;if(n.includes(o)){var t=this.getDatasetIndex(s);const r=this.getDatasetHidden(e,a);t==null&&!r&&(t=this.addDataset(e,a,o,s)),t!=null&&r&&(console.info("component hidden:",e,a,o,t),this.chartDatasets.datasets.splice(t,1))}},requestMonthlyChart(){if(document.forms.monthlyChartForm.reportValidity())this.chartDatasets.datasets=[],this.$emit("sendCommand",{command:"getMonthlyLog",data:this.commandData});else{console.log("form invalid");return}},clearChartData(){this.getWildcardIndexList("openWB/log/monthly/+").forEach(e=>{this.$store.commit("removeTopic",`openWB/log/monthly/${e}`)})},updateChart(){this.clearChartData(),this.requestMonthlyChart()}},mounted(){const e=new Date;this.currentMonth=this.monthlyChartDate=e.getFullYear()+"-"+String(e.getMonth()+1).padStart(2,"0"),this.requestMonthlyChart()}},Q={class:"monthlyChart"},X={name:"monthlyChartForm"},R={key:1},j={key:1},K={class:"openwb-chart"};function tt(e,a,o,n,s,t){const r=y("openwb-base-text-input"),i=y("openwb-base-card"),c=y("openwb-base-alert"),f=y("chartjs-line"),l=y("font-awesome-icon"),d=y("openwb-base-heading");return h(),u("div",Q,[S("form",X,[p(i,{title:"Filter",collapsible:!0,collapsed:!1},{default:m(()=>[p(r,{title:"Monat",subtype:"month",min:"2018-01",max:s.currentMonth,modelValue:t.monthlyChartDate,"onUpdate:modelValue":[a[0]||(a[0]=x=>t.monthlyChartDate=x),a[1]||(a[1]=x=>t.updateChart())]},null,8,["max","modelValue"])]),_:1}),t.chartDataRead?(h(),u("div",R,[t.chartDataHasEntries?(h(),u("div",j,[p(i,{title:"Diagramm",collapsible:!0,collapsed:!1},{default:m(()=>[S("div",K,[p(f,{data:t.chartData,options:s.chartOptions},null,8,["data","options"])])]),_:1}),p(i,{title:"Summen",collapsible:!0,collapsed:!0},{default:m(()=>[(h(!0),u(D,null,b(t.chartTotals,(x,g)=>(h(),C(i,{key:g,collapsible:!0,collapsed:!0,subtype:t.getCardSubtype(g)},{header:m(()=>[p(l,{"fixed-width":"",icon:t.getCardIcon(g)},null,8,["icon"]),v(" "+W(t.getTotalsLabel(g)),1)]),default:m(()=>[(h(!0),u(D,null,b(x,(q,_)=>(h(),u("div",{key:_},[p(d,null,{default:m(()=>[v(W(t.getTotalsLabel(g,_)),1)]),_:2},1024),(h(!0),u(D,null,b(q,(B,k)=>(h(),u("div",{key:k},[p(r,{title:t.getTotalsLabel(g,_,k),readonly:"",class:"text-right",unit:"kWh","model-value":e.formatNumber(B/1e3,3)},null,8,["title","model-value"])]))),128))]))),128))]),_:2},1032,["subtype"]))),128))]),_:1})])):(h(),C(c,{key:0,subtype:"info"},{default:m(()=>[v(" Es konnten keine Daten für diesen Zeitraum gefunden werden. ")]),_:1}))])):(h(),C(c,{key:0,subtype:"info"},{default:m(()=>[v(" Es wurden noch keine Daten abgerufen. ")]),_:1}))])])}const ht=Y(O,[["render",tt],["__scopeId","data-v-f311d5b6"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/MonthlyChart.vue"]]);export{ht as default};
