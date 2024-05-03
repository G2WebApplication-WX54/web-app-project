import {createRouter,createWebHistory} from "vue-router";
import EditProfileView from '../views/edit-profile.view.vue';

const routes = [
    {path: '/edit-profile', component: EditProfileView},
];
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;
