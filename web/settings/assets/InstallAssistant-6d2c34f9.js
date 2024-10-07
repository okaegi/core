import{C as r,_ as t}from"./index-f9fda857.js";import{_}from"./dynamic-import-helper-be004503.js";import{_ as m,a0 as p,u as d,k as i,l as u,D as A,N as v,A as E,a1 as I,y as c}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";const P={name:"InstallAssistantView",mixins:[r],emits:["sendCommand","save","reset","defaults"],data(){return{currentPage:0,lastPage:10,showEndAssistantModal:!1}},computed:{myStepComponent(){return console.debug(`loading assistant page: ${this.currentPage}`),p({loader:()=>_(Object.assign({"../components/install_assistant/InstallAssistantStep0.vue":()=>t(()=>import("./InstallAssistantStep0-3ae5776e.js"),["assets/InstallAssistantStep0-3ae5776e.js","assets/index-f9fda857.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-3c026c08.js","assets/InstallAssistantStepTemplate-ff479f80.css"]),"../components/install_assistant/InstallAssistantStep1.vue":()=>t(()=>import("./InstallAssistantStep1-f2cb69f1.js"),["assets/InstallAssistantStep1-f2cb69f1.js","assets/index-f9fda857.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-3c026c08.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/DataManagement-b9730b64.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep10.vue":()=>t(()=>import("./InstallAssistantStep10-6a0bfe8b.js"),["assets/InstallAssistantStep10-6a0bfe8b.js","assets/index-f9fda857.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-3c026c08.js","assets/InstallAssistantStepTemplate-ff479f80.css"]),"../components/install_assistant/InstallAssistantStep2.vue":()=>t(()=>import("./InstallAssistantStep2-116b498f.js"),["assets/InstallAssistantStep2-116b498f.js","assets/index-f9fda857.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-3c026c08.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/System-aff61250.js","assets/System-0f1d217b.css"]),"../components/install_assistant/InstallAssistantStep3.vue":()=>t(()=>import("./InstallAssistantStep3-b44c543e.js"),["assets/InstallAssistantStep3-b44c543e.js","assets/index-f9fda857.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-3c026c08.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/GeneralConfig-1c49e709.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep4.vue":()=>t(()=>import("./InstallAssistantStep4-ca57a396.js"),["assets/InstallAssistantStep4-ca57a396.js","assets/index-f9fda857.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-3c026c08.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/ChargePointInstallation-8dff21bc.js","assets/dynamic-import-helper-be004503.js","assets/ChargePointInstallation-ed6a5c7e.css"]),"../components/install_assistant/InstallAssistantStep5.vue":()=>t(()=>import("./InstallAssistantStep5-2a886f5d.js"),["assets/InstallAssistantStep5-2a886f5d.js","assets/index-f9fda857.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-3c026c08.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/HardwareInstallation-70f156e6.js","assets/dynamic-import-helper-be004503.js","assets/HardwareInstallation-1ee9693f.css"]),"../components/install_assistant/InstallAssistantStep6.vue":()=>t(()=>import("./InstallAssistantStep6-25f8b1a2.js"),["assets/InstallAssistantStep6-25f8b1a2.js","assets/index-f9fda857.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-3c026c08.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/ChargePointInstallation-8dff21bc.js","assets/dynamic-import-helper-be004503.js","assets/ChargePointInstallation-ed6a5c7e.css"]),"../components/install_assistant/InstallAssistantStep7.vue":()=>t(()=>import("./InstallAssistantStep7-be0e6887.js"),["assets/InstallAssistantStep7-be0e6887.js","assets/index-f9fda857.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-3c026c08.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/LoadManagementConfig-da717df7.js","assets/OpenwbSortableList-3ce7f991.js","assets/OpenwbSortableList-7ba533e4.css"]),"../components/install_assistant/InstallAssistantStep8.vue":()=>t(()=>import("./InstallAssistantStep8-5bb0860d.js"),["assets/InstallAssistantStep8-5bb0860d.js","assets/index-f9fda857.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-3c026c08.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/VehicleConfig-e8ea05c9.js","assets/dynamic-import-helper-be004503.js","assets/VehicleConfig-4aeda6ca.css"]),"../components/install_assistant/InstallAssistantStep9.vue":()=>t(()=>import("./InstallAssistantStep9-af2ff378.js"),["assets/InstallAssistantStep9-af2ff378.js","assets/index-f9fda857.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-3c026c08.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/DataManagement-b9730b64.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStepTemplate.vue":()=>t(()=>import("./InstallAssistantStepTemplate-3c026c08.js"),["assets/InstallAssistantStepTemplate-3c026c08.js","assets/index-f9fda857.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-ff479f80.css"])}),`../components/install_assistant/InstallAssistantStep${this.currentPage}.vue`)})}},methods:{switchPage(s){s>=0&&s<=this.lastPage?this.currentPage=s:console.error(`invalid assistant page number: ${s}`)},endAssistantModal(){this.currentPage!=this.lastPage?this.showEndAssistantModal=!0:this.endAssistant("confirm")},endAssistant(s){this.showEndAssistantModal=!1,s=="confirm"&&(this.updateState("openWB/system/installAssistantDone",!0),this.$root.doPublish("openWB/set/system/installAssistantDone",!0),this.$router.push("/Status"))}}};function S(s,e,f,g,o,n){const l=d("openwb-base-modal-dialog");return i(),u("div",null,[A(l,{show:o.showEndAssistantModal,title:"Assistent beenden",subtype:"danger",buttons:[{text:"Beenden",event:"confirm",subtype:"danger"}],onModalResult:n.endAssistant},{default:v(()=>e[4]||(e[4]=[c(" Wollen Sie den Assistenten wirklich vorzeitig beenden? ")])),_:1},8,["show","onModalResult"]),(i(),E(I(n.myStepComponent),{onSendCommand:e[0]||(e[0]=a=>s.$emit("sendCommand",a)),onSave:e[1]||(e[1]=a=>s.$emit("save")),onReset:e[2]||(e[2]=a=>s.$emit("reset")),onDefaults:e[3]||(e[3]=a=>s.$emit("defaults")),onSwitchPage:n.switchPage,onEndAssistant:n.endAssistantModal},null,40,["onSwitchPage","onEndAssistant"]))])}const L=m(P,[["render",S],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/InstallAssistant.vue"]]);export{L as default};
