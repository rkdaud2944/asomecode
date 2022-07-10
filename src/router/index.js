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
        path: '/help/subject/list',
        component: () => import('../views/subject/ListView.vue')
    },
    {
        path: '/help/subject/detail',
        props: true,
        component: () => import('../views/subject/DetailView.vue')
    },
    {
        path: '/help/subject/write',
        component: () => import('../views/subject/WriteView.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
