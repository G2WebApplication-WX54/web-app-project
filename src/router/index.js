import {createRouter,createWebHistory} from "vue-router";
import EditProfileView from '../views/edit-profile.view.vue';
import ReportFormView from "../views/report-form.view.vue";

const routes = [
    {path: '/edit-profile', component: EditProfileView},
    {path: '/report-form', component: ReportFormView},
];
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;
