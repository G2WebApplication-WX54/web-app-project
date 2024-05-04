import {createRouter, createWebHistory} from 'vue-router'

import Authority from '../pages/authorityProfile.page.vue'
import User from '../pages/userProfile.page.vue'
import HelloWorld from "../pages/HelloWorld.vue";


const router= createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HelloWorld},
        {path: '/userProfile', component: User},
        {path: '/authorityProfile', component: Authority},
    ]
});

export default router;