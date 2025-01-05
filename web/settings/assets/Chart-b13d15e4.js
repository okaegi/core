import{l as L,K as T,W as H,V as O,U as q,a0 as j,a1 as M,F as V}from"./vendor-fortawesome-05d7e447.js";import{C as z}from"./index-dd504e8c.js";import{C as P,p as E,a as B,L as K,b as N,B as F,f as J,P as $,c as X,T as Z,i as G,d as U,e as Y,g as Q}from"./vendor-chartjs-888a84c2.js";import{_ as ee,u as p,k as o,l as s,x as A,G as c,E as d,z as m,y as f,N as k,M as x,F as C,B as _}from"./vendor-06e11d0e.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./vendor-luxon-8ddd27a0.js";L.add(T,H,O,q,j,M);P.register(E,B,K,N,F,J,$,X,Z,G,U);const te={name:"OpenwbChartView",components:{ChartjsLine:Y,FontAwesomeIcon:V},mixins:[z],props:{initialChartRange:{type:String,required:!1,validator:function(e){return["day","month","year"].indexOf(e)!==-1},default:"day"},initialDate:{type:String,required:!1,validator:function(e){return e.match(/^(([0-9]{4})(-[0-9]{2}(-[0-9]{2})?)?)?$/g)},default:""}},emits:["sendCommand"],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/log/daily/#","openWB/log/monthly/#","openWB/log/yearly/#","openWB/system/device/+/component/+/config","openWB/chargepoint/+/config","openWB/vehicle/+/name"],currentDate:"",chartRange:"day",blockChartInit:!1,chartRequestDate:{day:"",month:"",year:""},datasetTemplates:{"counter-power_average":{label:"Zähler",unit:"kW",jsonKey:null,borderColor:"rgba(255, 0, 0, 0.7)",backgroundColor:"rgba(255, 10, 13, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!1,borderWidth:1,data:null,yAxisID:"y",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"counter-energy_imported":{label:"Zähler",unit:"kWh",jsonKey:null,borderColor:"rgba(255, 0, 0, 0.7)",backgroundColor:"rgba(255, 10, 13, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!1,borderWidth:1,data:null,yAxisID:"y2",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"counter-energy_exported":{label:"Zähler",unit:"kWh",jsonKey:null,borderColor:"rgba(0, 255, 105, 0.7)",backgroundColor:"rgba(0, 255, 255, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!1,borderWidth:1,data:null,yAxisID:"y2",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"pv-power_exported":{label:"PV",unit:"kW",jsonKey:null,borderColor:"rgba(40, 167, 69, 0.7)",backgroundColor:"rgba(10, 255, 13, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:1,data:null,yAxisID:"y",stack:"inverter-power",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"pv-energy_exported":{label:"PV",unit:"kWh",jsonKey:null,borderColor:"rgba(40, 167, 69, 0.7)",backgroundColor:"rgba(10, 255, 13, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:1,data:null,yAxisID:"y2",stack:"inverter-exported",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"bat-power_average":{label:"Speicher",unit:"kW",jsonKey:null,borderColor:"rgba(253, 126, 20, 0.7)",backgroundColor:"rgba(200, 255, 13, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:1,data:null,yAxisID:"y",stack:"battery-power",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"bat-energy_imported":{label:"Speicher",unit:"kWh",jsonKey:null,borderColor:"rgba(253, 126, 20, 0.7)",backgroundColor:"rgba(200, 255, 13, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:1,data:null,yAxisID:"y2",stack:"battery-imported",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"bat-energy_exported":{label:"Speicher",unit:"kWh",jsonKey:null,borderColor:"rgba(253, 126, 20, 0.7)",backgroundColor:"rgba(200, 255, 13, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:1,data:null,yAxisID:"y2",stack:"battery-exported",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"bat-soc":{label:"Speicher SoC",unit:"%",jsonKey:null,borderColor:"rgba(253, 126, 20, 0.7)",backgroundColor:"rgba(200, 255, 13, 0.3)",borderDash:[10,5],hidden:!0,fill:!1,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",borderWidth:2,data:null,yAxisID:"y3",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"cp-power_average":{label:"Ladepunkt",unit:"kW",jsonKey:null,borderColor:"rgba(0, 0, 255, 0.7)",backgroundColor:"rgba(0, 0, 255, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:1,data:null,yAxisID:"y",stack:"charge-point-power",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"cp-energy_imported":{label:"Ladepunkt",unit:"kWh",jsonKey:null,borderColor:"rgba(0, 0, 255, 0.7)",backgroundColor:"rgba(0, 0, 255, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:1,data:null,yAxisID:"y2",stack:"charge-point-imported",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"cp-energy_imported_grid":{label:"Ladepunkt (Netzanteil)",unit:"kWh",type:"bar",jsonKey:null,borderColor:"rgba(255, 0, 0, 0.7)",backgroundColor:"rgba(0, 0, 255, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:3,data:null,yAxisID:"y2",stack:"charge-point-imported-source",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"cp-energy_imported_pv":{label:"Ladepunkt (PV-Anteil)",unit:"kWh",type:"bar",jsonKey:null,borderColor:"rgba(40, 167, 69, 0.7)",backgroundColor:"rgba(0, 0, 255, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:3,data:null,yAxisID:"y2",stack:"charge-point-imported-source",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"cp-energy_imported_bat":{label:"Ladepunkt (PV-Anteil)",unit:"kWh",type:"bar",jsonKey:null,borderColor:"rgba(253, 126, 20, 0.7)",backgroundColor:"rgba(0, 0, 255, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:3,data:null,yAxisID:"y2",stack:"charge-point-imported-source",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"ev-soc":{label:"Fahrzeug SoC",unit:"%",jsonKey:null,borderColor:"rgba(0, 0, 255, 0.7)",backgroundColor:"rgba(0, 0, 255, 0.3)",borderDash:[10,5],hidden:!0,fill:!1,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",borderWidth:2,data:null,yAxisID:"y3",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"sh-power_average":{label:"SmartHome",unit:"kW",jsonKey:null,borderColor:"rgba(232, 62, 140, 0.7)",backgroundColor:"rgba(232, 72, 150, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!1,borderWidth:1,data:null,yAxisID:"y",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"sh-energy_imported":{label:"SmartHome",unit:"kWh",jsonKey:null,borderColor:"rgba(232, 62, 140, 0.7)",backgroundColor:"rgba(232, 72, 150, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!1,borderWidth:1,data:null,yAxisID:"y2",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"sh-energy_exported":{label:"SmartHome",unit:"kWh",jsonKey:null,borderColor:"rgba(232, 62, 140, 0.7)",backgroundColor:"rgba(232, 72, 150, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!1,borderWidth:1,data:null,yAxisID:"y2",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"hc-power_imported":{label:"Hausverbrauch",unit:"kW",jsonKey:null,borderColor:"rgba(120, 122, 124, 0.7)",backgroundColor:"rgba(120, 122, 124, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:1,data:null,yAxisID:"y",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"hc-energy_imported":{label:"Hausverbrauch",unit:"kWh",jsonKey:null,borderColor:"rgba(120, 122, 124, 0.7)",backgroundColor:"rgba(120, 122, 124, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:1,data:null,yAxisID:"y2",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"hc-energy_imported_grid":{label:"Hausverbrauch (Netzanteil)",unit:"kWh",type:"bar",jsonKey:null,borderColor:"rgba(255, 0, 0, 0.7)",backgroundColor:"rgba(120, 122, 124, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:3,data:null,yAxisID:"y2",stack:"hc-energy-imported-source",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"hc-energy_imported_pv":{label:"Hausverbrauch (PV-Anteil)",unit:"kWh",type:"bar",jsonKey:null,borderColor:"rgba(40, 167, 69, 0.7)",backgroundColor:"rgba(120, 122, 124, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:3,data:null,yAxisID:"y2",stack:"hc-energy-imported-source",parsing:{xAxisKey:"timestamp",yAxisKey:null}},"hc-energy_imported_bat":{label:"Hausverbrauch (PV-Anteil)",unit:"kWh",type:"bar",jsonKey:null,borderColor:"rgba(253, 126, 20, 0.7)",backgroundColor:"rgba(120, 122, 124, 0.3)",fill:!0,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!0,borderWidth:3,data:null,yAxisID:"y2",stack:"hc-energy-imported-source",parsing:{xAxisKey:"timestamp",yAxisKey:null}}},chartOptions:{plugins:{title:{display:!1},tooltip:{enabled:!0,callbacks:{label:e=>`${e.dataset.label}: ${e.formattedValue} ${e.dataset.unit}`}},legend:{display:!0},zoom:{pan:{enabled:!0,mode:"x",threshold:5},zoom:{wheel:{enabled:!0},pinch:{enabled:!0},mode:"x"}}},elements:{point:{radius:2}},responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},scales:{x:{type:"time",time:{unit:"",tooltipFormat:""},display:!0,title:{display:!0,text:""},ticks:{source:"timestamp",font:{size:12},maxTicksLimit:0},grid:{}},y:{position:"left",type:"linear",display:"auto",suggestedMin:0,suggestedMax:0,title:{font:{size:12},display:!0,text:"Leistung [kW]"},grid:{},ticks:{font:{size:12},stepSize:.2,maxTicksLimit:11}},y2:{position:"left",type:"linear",display:"auto",suggestedMin:0,suggestedMax:0,title:{font:{size:12},display:!0,text:"Energie [kWh]"},grid:{},ticks:{font:{size:12},stepSize:.2,maxTicksLimit:11}},y3:{position:"right",type:"linear",display:"auto",suggestedMin:0,suggestedMax:100,title:{font:{size:12},display:!0,text:"SoC [%]"},grid:{display:!1},ticks:{font:{size:12},stepSize:10,maxTicksLimit:11}}}},chartDatasets:{datasets:[]}}},computed:{dateInput(){var e={title:"Datum",type:"date",min:"2018-01-01"};switch(this.chartRange){case"month":e={title:"Monat",type:"month",min:"2018-01"};break;case"year":e={title:"Jahr",type:"year",min:"2018"};break}return e},chartDate:{get(){var e=this.chartRequestDate.year;return this.chartRange!="year"&&(e=e+"-"+this.chartRequestDate.month),this.chartRange=="day"&&(e=e+"-"+this.chartRequestDate.day),e},set(e){let t=e.split("-");this.chartRequestDate.year=t[0],t.length>1?this.chartRequestDate.month=t[1]:this.chartRequestDate.month="",t.length>2?this.chartRequestDate.day=t[2]:this.chartRequestDate.day=""}},chartScaleX(){var e={unit:"minute",tooltipFormat:"DD T",text:"Zeit",maxTicksLimit:24};switch(this.chartRange){case"month":e={unit:"day",tooltipFormat:"DD",text:"Tag",maxTicksLimit:31};break;case"year":e={unit:"month",tooltipFormat:"LLLL yyyy",text:"Monat",maxTicksLimit:12};break}return e},commandData(){var e={date:this.chartRequestDate.year+this.chartRequestDate.month+this.chartRequestDate.day,day:this.chartRequestDate.year+this.chartRequestDate.month+this.chartRequestDate.day};switch(this.chartRange){case"month":e={date:this.chartRequestDate.year+this.chartRequestDate.month,month:this.chartRequestDate.year+this.chartRequestDate.month};break;case"year":e={date:this.chartRequestDate.year,year:this.chartRequestDate.year};break}return e},baseTopic(){var e="openWB/log/";switch(this.chartRange){case"day":e=e+"daily/";break;case"month":e=e+"monthly/";break;case"year":e=e+"yearly/";break}return e},chartDataRead(){return this.chartDataObject!=null},chartDataHasEntries(){return this.chartDataObject?this.chartDataObject.length>0:!1},chartTotals(){if(this.$store.state.mqtt[this.baseTopic+this.commandData.date]&&Object.prototype.hasOwnProperty.call(this.$store.state.mqtt[this.baseTopic+this.commandData.date],"totals")){var e=JSON.parse(JSON.stringify(this.$store.state.mqtt[this.baseTopic+this.commandData.date].totals));return delete e.energy_source,Object.keys(e.counter).forEach(t=>{Object.prototype.hasOwnProperty.call(e.counter[t],"grid")&&delete e.counter[t].grid}),Object.keys(e).forEach(t=>{Object.prototype.hasOwnProperty.call(e[t],"all")&&(Object.keys(e[t]).length<=2&&["bat","pv"].includes(t)?delete e[t].all:e[t]={all:e[t].all,...e[t]})}),e}},chartDataObject(){if(this.$store.state.mqtt[this.baseTopic+this.commandData.date]){var e=this.$store.state.mqtt[this.baseTopic+this.commandData.date];Object.prototype.hasOwnProperty.call(e,"entries")&&(e=e.entries);var t=JSON.parse(JSON.stringify(e)).map(r=>(r.timestamp=r.timestamp*1e3,r));return t}},chartData(){if(this.chartDataObject){var e=["pv","counter","bat","cp","sh","ev","hc"];const t=this.chartDataObject[this.chartDataObject.length-1];return t&&e.forEach(r=>{Object.prototype.hasOwnProperty.call(t,r)&&(Object.prototype.hasOwnProperty.call(t[r],"all")&&(["bat","pv"].includes(r)&&Object.keys(t[r]).length<=2?delete t[r].all:t[r]={all:t[r].all,...t[r]}),Object.entries(t[r]).forEach(([n,i])=>{Object.keys(i).forEach(a=>{this.initDataset(r,n,a)})}))}),this.chartDatasets}}},watch:{chartRange(){this.init()}},mounted(){this.init()},methods:{handleChartClick(e){if(this.chartRange=="day")return;const t=this.$refs.myChart.chart;if(!t)return;const r=Q(t,e);if(!r.length)return;const{datasetIndex:n,index:i}=r[0],a=this.chartData.datasets[n].data[i].date;var y="",h="";switch(this.chartRange){case"month":y=a.substring(0,4)+"-"+a.substring(4,6)+"-"+a.substring(6),h="day";break;case"year":y=a.substring(0,4)+"-"+a.substring(4,6),h="month";break}this.blockChartInit=!0,this.chartDate=y,this.chartRange=h},getCardSubtype(e){switch(e){case"bat":return"warning";case"counter":return"danger";case"cp":return"primary";case"pv":return"success";case"sh":return"pink";default:return"secondary"}},getCardIcon(e){switch(e){case"bat":return["fas","car-battery"];case"counter":return["fas","gauge-high"];case"cp":return["fas","charging-station"];case"pv":return["fas","solar-panel"];case"sh":return["fas","house-signal"];case"hc":return["fas","house"];default:return}},hideDataset(e,t,r){return!!(["bat","pv","cp"].includes(e)&&Object.prototype.hasOwnProperty.call(this.chartTotals[e],"all")&&t!="all"||["grid","bat","pv","cp"].includes(r.split("_").pop()))},getTotalsLabel(e,t=void 0,r=void 0){var n="*test*";if(!t&&!r){switch(e){case"bat":return"Speicher";case"counter":return"Zähler";case"pv":return"Wechselrichter";case"cp":return"Ladepunkte";case"sh":return"SmartHome-Geräte";case"hc":return"Hausverbrauch";default:console.warn("unknown group key:",e)}return"*"+e+"*"}if(t&&!r){if(t=="all")return"Summe";if(Object.prototype.hasOwnProperty.call(this.$store.state.mqtt[this.baseTopic+this.commandData.date],"names"))return this.$store.state.mqtt[this.baseTopic+this.commandData.date].names[t]}if(t&&r){switch(e){case"bat":case"cp":switch(r){case"imported":case"energy_imported":return"Ladung";case"exported":case"energy_exported":return"Entladung";case"energy_imported_grid":return"Ladung (Netz-Anteil)";case"energy_imported_pv":return"Ladung (PV-Anteil)";case"energy_imported_bat":return"Ladung (Speicher-Anteil)";case"energy_imported_cp":return"Ladung (Ladepunkt-Anteil)";default:console.warn("unknown measurement key:",e,r)}break;case"counter":switch(r){case"imported":case"energy_imported":return"Bezug/Verbrauch";case"exported":case"energy_exported":return"Einspeisung/Erzeugung";default:console.warn("unknown measurement key:",e,r)}break;case"pv":switch(r){case"exported":case"energy_exported":return"Erzeugung";default:console.warn("unknown measurement key:",e,r)}break;case"sh":switch(r){case"imported":case"energy_imported":return"Verbrauch";case"exported":case"energy_exported":return"Erzeugung";default:console.warn("unknown measurement key:",e,r)}break;case"hc":switch(r){case"imported":case"energy_imported":return"Verbrauch";case"energy_imported_grid":return"Verbrauch (Netz-Anteil)";case"energy_imported_pv":return"Verbrauch (PV-Anteil)";case"energy_imported_bat":return"Verbrauch (Speicher-Anteil)";case"energy_imported_cp":return"Verbrauch (Ladepunkt-Anteil)";default:console.warn("unknown measurement key:",e,r)}break;default:console.warn("unknown group key:",e)}return"*"+e+"+"+t+"+"+r+"*"}return n},getDatasetLabel(e,t,r,n){var i=["*"+n],a=[];if(t=="all")switch(e!=="hc"&&a.push("Summe"),e){case"pv":i=["PV"];break;case"bat":switch(i=["Speicher"],r){case"soc":i.push("SoC");break}break;case"cp":i=["Ladepunkte"];break;case"hc":i=["Hausverbrauch"]}else Object.prototype.hasOwnProperty.call(this.$store.state.mqtt[this.baseTopic+this.commandData.date],"names")&&Object.prototype.hasOwnProperty.call(this.$store.state.mqtt[this.baseTopic+this.commandData.date].names,t)&&(i=[this.$store.state.mqtt[this.baseTopic+this.commandData.date].names[t]]);switch(e){case"bat":case"ev":case"cp":switch(r){case"soc":a.push("SoC");break;case"energy_imported":a.push("Ladung");break;case"energy_exported":a.push("Entladung");break;case"energy_imported_grid":a.push("Netz-Anteil");break;case"energy_imported_pv":a.push("PV-Anteil");break;case"energy_imported_bat":a.push("Speicher-Anteil");break;case"energy_imported_cp":a.push("Ladepunkt-Anteil");break}break;case"counter":switch(r){case"energy_imported":a.push("Bezug/Verbrauch");break;case"energy_exported":a.push("Einspeisung/Erzeugung");break}break;case"sh":switch(r){case"energy_imported":a.push("Verbrauch");break;case"energy_exported":a.push("Erzeugung");break}break;case"hc":switch(r){case"energy_imported_grid":a.push("Netz-Anteil");break;case"energy_imported_pv":a.push("PV-Anteil");break;case"energy_imported_bat":a.push("Speicher-Anteil");break;case"energy_imported_cp":a.push("Ladepunkt-Anteil");break}break}return`${i.join(" ")}${a.length?" ("+a.join(", ")+")":""}`},getDatasetIndex(e){let t=this.chartDatasets.datasets.findIndex(r=>r.jsonKey==e);if(t!=-1)return t},addDataset(e,t,r,n){if(!(Object.prototype.hasOwnProperty.call(this.chartTotals,e)&&!Object.prototype.hasOwnProperty.call(this.chartTotals[e],t))){var i=e+"-"+r;if(this.datasetTemplates[i]){var a=JSON.parse(JSON.stringify(this.datasetTemplates[i]));return a.parsing.yAxisKey=n,a.jsonKey=n,a.data=this.chartDataObject,a.label=this.getDatasetLabel(e,t,r,n),a.labelSuffix!=null&&(a.label=a.label+a.labelSuffix),a.hidden=this.hideDataset(e,t,r),t=="all"&&(["grid","pv","bat","cp"].includes(r.split("_").slice(-1)[0])||delete a.stack),this.chartDatasets.datasets.push(a)-1}else console.warn("no matching template found for: "+n+" with template: "+i)}},initDataset(e,t,r){var n=[];this.chartRange=="day"?n={counter:["power_average"],pv:["power_exported"],bat:["power_average","soc"],cp:["power_average"],sh:["power_average"],ev:["soc"],hc:["power_imported"]}:n={counter:["energy_imported","energy_exported"],pv:["energy_exported"],bat:["energy_imported","energy_exported"],cp:["energy_imported","energy_imported_grid","energy_imported_pv","energy_imported_bat"],sh:["energy_imported","energy_exported"],ev:[],hc:["energy_imported","energy_imported_grid","energy_imported_pv","energy_imported_bat"]};const i=e+"."+t+"."+r;if(n[e].includes(r)){var a=this.getDatasetIndex(i);a==null&&(a=this.addDataset(e,t,r,i))}else console.debug("skipping dataset:",i)},setupScaleX(){this.chartOptions.scales.x.time.unit=this.chartScaleX.unit,this.chartOptions.scales.x.time.tooltipFormat=this.chartScaleX.tooltipFormat,this.chartOptions.scales.x.title.text=this.chartScaleX.text,this.chartOptions.scales.x.ticks.maxTicksLimit=this.chartScaleX.maxTicksLimit},requestChart(){if(document.forms.chartForm.reportValidity()){this.setupScaleX(),this.chartDatasets.datasets=[];var t="";switch(this.chartRange){case"day":t="getDailyLog";break;case"month":t="getMonthlyLog";break;case"year":t="getYearlyLog";break}this.$emit("sendCommand",{command:t,data:this.commandData})}else{console.warn("form invalid");return}},clearChartData(){this.getWildcardIndexList(this.baseTopic+"+").forEach(e=>{this.$store.commit("removeTopic",`${this.baseTopic}${e}`)})},updateChart(){this.clearChartData(),this.requestChart()},init(){const e=new Date;this.currentDate=String(e.getFullYear()),this.chartRange!="year"&&(this.currentDate=this.currentDate+"-"+String(e.getMonth()+1).padStart(2,"0")),this.chartRange=="day"&&(this.currentDate=this.currentDate+"-"+String(e.getDate()).padStart(2,"0")),this.blockChartInit?this.blockChartInit=!1:this.initialDate==null||this.initialDate==""?this.chartDate=this.currentDate:this.chartDate=this.initialDate,this.updateChart()}}},ae={class:"chart"},re={name:"chartForm"},ie={key:1},ne={key:1},oe={class:"openwb-chart"},se={key:1};function le(e,t,r,n,i,a){const y=p("openwb-base-select-input"),h=p("openwb-base-text-input"),b=p("openwb-base-card"),v=p("openwb-base-alert"),R=p("chartjs-line"),w=p("font-awesome-icon"),S=p("openwb-base-heading");return o(),s("div",ae,[A("form",re,[c(b,{title:"Filter",collapsible:!0,collapsed:!1},{default:d(()=>[c(y,{modelValue:i.chartRange,"onUpdate:modelValue":t[0]||(t[0]=u=>i.chartRange=u),title:"Zeitraum",options:[{value:"day",text:"Tag"},{value:"month",text:"Monat"},{value:"year",text:"Jahr"}]},null,8,["modelValue"]),c(h,{modelValue:a.chartDate,"onUpdate:modelValue":[t[1]||(t[1]=u=>a.chartDate=u),t[2]||(t[2]=u=>a.updateChart())],title:a.dateInput.title,subtype:a.dateInput.type,min:a.dateInput.min,max:i.currentDate,"show-quick-buttons":!0},null,8,["modelValue","title","subtype","min","max"])]),_:1}),a.chartDataRead?(o(),s("div",ie,[a.chartDataHasEntries?(o(),s("div",ne,[c(b,{title:"Diagramm",collapsible:!0,collapsed:!1},{default:d(()=>[A("div",oe,[c(R,{ref:"myChart",data:a.chartData,options:i.chartOptions,onClick:a.handleChartClick},null,8,["data","options","onClick"])])]),_:1}),c(b,{title:"Summen",collapsible:!0,collapsed:!0},{default:d(()=>[(o(!0),s(k,null,x(a.chartTotals,(u,l)=>(o(),s("div",{key:l},[Object.keys(u).length>0?(o(),m(b,{key:0,collapsible:!0,collapsed:!0,subtype:a.getCardSubtype(l)},{header:d(()=>[c(w,{"fixed-width":"",icon:a.getCardIcon(l)},null,8,["icon"]),f(" "+C(a.getTotalsLabel(l)),1)]),default:d(()=>[(o(!0),s(k,null,x(u,(I,g)=>(o(),s("div",{key:g},[l!=="hc"?(o(),m(S,{key:0},{default:d(()=>[f(C(a.getTotalsLabel(l,g)),1)]),_:2},1024)):_("",!0),(o(!0),s(k,null,x(I,(W,D)=>(o(),s("div",{key:D},[c(h,{title:a.getTotalsLabel(l,g,D),readonly:"",class:"text-right",unit:"kWh","model-value":e.formatNumber(W/1e3,3)},null,8,["title","model-value"])]))),128)),g=="all"&&l!="hc"?(o(),s("hr",se)):_("",!0)]))),128))]),_:2},1032,["subtype"])):_("",!0)]))),128))]),_:1})])):(o(),m(v,{key:0,subtype:"info"},{default:d(()=>t[4]||(t[4]=[f(" Es konnten keine Daten für diesen Zeitraum gefunden werden. ")])),_:1}))])):(o(),m(v,{key:0,subtype:"info"},{default:d(()=>t[3]||(t[3]=[f(" Es wurden noch keine Daten abgerufen. ")])),_:1}))])])}const fe=ee(te,[["render",le],["__scopeId","data-v-e00a7cd5"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/Chart.vue"]]);export{fe as default};
