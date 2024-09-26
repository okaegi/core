import{D as g}from"./OptionalComponents-963feb73.js";import{_ as m,u as i,k as d,l as c,D as a,N as l,y as u,A as r,B as b}from"./vendor-f2b8aa6f.js";import"./index-b0e5e618.js";import"./vendor-fortawesome-71546160.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const f={name:"DisplayThemeCards",mixins:[g]},_={class:"display-theme-cards"};function h(e,n,v,V,y,A){const s=i("openwb-base-heading"),o=i("openwb-base-button-group-input"),p=i("openwb-base-text-input");return d(),c("div",_,[a(s,null,{default:l(()=>[u("Bediensperre")]),_:1}),a(o,{title:"Bedienung sperren","model-value":e.displayTheme.configuration.lock_changes,"onUpdate:modelValue":n[0]||(n[0]=t=>e.updateConfiguration(t,"configuration.lock_changes")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},{help:l(()=>[u(' Die Bedienung wird automatisch nach der eingestellten Ausschaltzeit (siehe "Display Standby") wieder gesperrt. ')]),_:1},8,["model-value"]),e.displayTheme.configuration.lock_changes?(d(),r(p,{key:0,title:"PIN zur Freigabe",subtype:"password",required:"",pattern:"[0-9]{4,10}","model-value":e.displayTheme.configuration.lock_changes_code,"onUpdate:modelValue":n[1]||(n[1]=t=>e.updateConfiguration(t,"configuration.lock_changes_code"))},{help:l(()=>[u(" Der PIN muss aus 4 bis 10 Zahlen bestehen. ")]),_:1},8,["model-value"])):b("",!0),a(s,null,{default:l(()=>[u("Ansichten")]),_:1}),a(o,{title:"Übersicht anzeigen","model-value":e.displayTheme.configuration.enable_dashboard_view,"onUpdate:modelValue":n[2]||(n[2]=t=>e.updateConfiguration(t,"configuration.enable_dashboard_view")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"]),a(o,{title:"Energiefluss anzeigen","model-value":e.displayTheme.configuration.enable_energy_flow_view,"onUpdate:modelValue":n[3]||(n[3]=t=>e.updateConfiguration(t,"configuration.enable_energy_flow_view")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"]),a(o,{title:"Ladepunkte anzeigen","model-value":e.displayTheme.configuration.enable_charge_points_view,"onUpdate:modelValue":n[4]||(n[4]=t=>e.updateConfiguration(t,"configuration.enable_charge_points_view")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"]),e.displayTheme.configuration.enable_charge_points_view==!0?(d(),r(o,{key:1,title:"Einfache Ansicht der Ladepunkte","model-value":e.displayTheme.configuration.simple_charge_point_view,"onUpdate:modelValue":n[5]||(n[5]=t=>e.updateConfiguration(t,"configuration.simple_charge_point_view")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"])):b("",!0),a(o,{title:"Status anzeigen","model-value":e.displayTheme.configuration.enable_status_view,"onUpdate:modelValue":n[6]||(n[6]=t=>e.updateConfiguration(t,"configuration.enable_status_view")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"]),a(s,null,{help:l(()=>[u(' Hier kann festgelegt werden, welche Daten in den Ansichten "Übersicht" und "Energiefluss" angezeigt werden. ')]),default:l(()=>[u(" Datenauswahl ")]),_:1}),a(o,{title:"EVU anzeigen","model-value":e.displayTheme.configuration.enable_dashboard_card_grid,"onUpdate:modelValue":n[7]||(n[7]=t=>e.updateConfiguration(t,"configuration.enable_dashboard_card_grid")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"]),a(o,{title:"Hausverbrauch anzeigen","model-value":e.displayTheme.configuration.enable_dashboard_card_home_consumption,"onUpdate:modelValue":n[8]||(n[8]=t=>e.updateConfiguration(t,"configuration.enable_dashboard_card_home_consumption")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"]),a(o,{title:"PV anzeigen","model-value":e.displayTheme.configuration.enable_dashboard_card_inverter_sum,"onUpdate:modelValue":n[9]||(n[9]=t=>e.updateConfiguration(t,"configuration.enable_dashboard_card_inverter_sum")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"]),a(o,{title:"Batteriespeicher anzeigen","model-value":e.displayTheme.configuration.enable_dashboard_card_battery_sum,"onUpdate:modelValue":n[10]||(n[10]=t=>e.updateConfiguration(t,"configuration.enable_dashboard_card_battery_sum")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"]),a(o,{title:"Ladepunkte anzeigen","model-value":e.displayTheme.configuration.enable_dashboard_card_charge_point_sum,"onUpdate:modelValue":n[11]||(n[11]=t=>e.updateConfiguration(t,"configuration.enable_dashboard_card_charge_point_sum")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"]),a(o,{title:"Fahrzeuge anzeigen","model-value":e.displayTheme.configuration.enable_dashboard_card_vehicles,"onUpdate:modelValue":n[12]||(n[12]=t=>e.updateConfiguration(t,"configuration.enable_dashboard_card_vehicles")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"])])}const x=m(f,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/display_themes/cards/displayTheme.vue"]]);export{x as default};