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
    {
        path: '/lesson/list',
        props: true,
        component: () => import('../views/lesson/ListView.vue')
    },
    {
        path: '/subject/list',
        component: () => import('../views/subject/ListView.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
