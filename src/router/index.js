import { createRouter, createWebHistory } from 'vue-router'

import MapCitizen from "../views/mapcitizen.view.vue"
import MapGovernment from "../views/mapgovernment.view.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/citizen/map', component: MapCitizen, name: 'mapcitizen' },
        { path: '/government/map', component: MapGovernment, name: 'mapgovernment' },
    ]
});

export default router;