import { createRouter, createWebHistory } from 'vue-router'

import MapCitizen from "../views/mapcitizen.view.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/citizen/map', component: MapCitizen, name: 'mapcitizen' },
    ]
});

export default router;