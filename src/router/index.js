import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/zongce',
        name: 'zongce',
        component: () => import('../views/ZongceView.vue')
    },
    {
        path: '/huping',
        name: 'huping',
        component: () => import('../views/HupingView.vue')
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
