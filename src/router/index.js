import {createRouter, createWebHistory} from 'vue-router'

import Authority from '../pages/authorityProfile.page.vue'
import User from '../pages/userProfile.page.vue'
import Profile from "../pages/profile.vue";
import MapCitizen from "../views/mapcitizen.view.vue"
import EditProfileView from '../views/edit-profile.view.vue';
import ReportFormView from "../views/report-form.view.vue";

const router= createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/profile', component: Profile},
        {path: '/userProfile', component: User},
        {path: '/authorityProfile', component: Authority},
        {path: '/citizen/map', component: MapCitizen, name: 'mapcitizen' },
        {path: '/edit-profile', component: EditProfileView},
        {path: '/report-form', component: ReportFormView},
    ]
});

export default router;
