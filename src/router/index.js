import {createRouter, createWebHistory} from 'vue-router'

import Authority from '../pages/authorityProfile.page.vue'
import User from '../pages/userProfile.page.vue'
import Profile from "../pages/profile.vue";


const router= createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/profile', component: Profile},
        {path: '/userProfile', component: User},
        {path: '/authorityProfile', component: Authority},
    ]
});

export default router;
