import {createRouter, createWebHistory} from 'vue-router'

import Authority from '../pages/authorityProfile.page.vue'
import User from '../pages/userProfile.page.vue'
import Profile from "../pages/profile.page.vue";
import MapCitizen from "../views/mapcitizen.view.vue"
import MapGovernment from "../views/mapgovernment.view.vue"
import EditProfileView from '../views/edit-profile.view.vue';
import ReportFormView from "../views/report-form.view.vue";
import SendAlert from "../components/SendAlert.vue";
import Notification from '../pages/notifications.page.vue'

const router= createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/profile', component: Profile},
        {path: '/userProfile', component: User},
        {path: '/authorityProfile', component: Authority},
        {path: '/citizen/map', component: MapCitizen, name: 'mapcitizen' },
        {path: '/edit-profile', component: EditProfileView},
        {path: '/government/map', component: MapGovernment, name: 'mapgovernment' },
        {path: '/report-form', component: ReportFormView},
        {path: '/view-notifications', component: SendAlert},
        {path: '/notifications', component: Notification}
    ]
});

export default router;
