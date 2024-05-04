import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from "primevue/config";
import "primeflex/primeflex.css";
import OrderList from "primevue/orderlist";
import Panel from "primevue/panel";
import Button from "primevue/button";
import Card from "primevue/card";
import 'primevue/resources/themes/aura-light-green/theme.css';

const app=createApp(App)
app.use(PrimeVue, {ripple: true})
    .component('pv-button', Button)
    .component('pv-panel', Panel)
    .component('pv-data-view', DataView)
    .component('pv-card', Card)
    .component('pv-order-list', OrderList)
app.mount('#app')
