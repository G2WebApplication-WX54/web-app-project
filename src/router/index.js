import {createRouter,createWebHistory} from "vue-router";
import SendAlert from "../components/SendAlert.vue";

const routes = [
    {path: '/view-notifications', component: SendAlert},
];
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;
