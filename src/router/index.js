import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/help',
        component: () => import('../views/HelpView.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
