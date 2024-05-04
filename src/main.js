import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

import InputGroup from "primevue/inputgroup";

import { GoogleMap, Marker, HeatmapLayer} from "vue3-google-map";


createApp(App)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-inputtext', InputText)
    .component('pv-inputgroup', InputGroup)
    .component('google-map', GoogleMap)
    .component('marker-map', Marker)
    .component('heatmap', HeatmapLayer)
    .mount('#app')
