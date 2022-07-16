import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/lesson/list',
        props: true,
        component: () => import('../views/lesson/ListView.vue')
    },
    {
        path: '/lesson/detail/:id',
        component: () => import('../views/lesson/DetailView.vue')
    },
    {
        path: '/help',
        component: () => import('../views/help/pin/ListView.vue')
    },
    {
        path: '/help/pin/list',
        component: () => import('../views/help/pin/ListView.vue')
    },
    {
        path: '/help/module/list',
        component: () => import('../views/help/module/ListView.vue')
    },
    {
        path: '/help/qna/list',
        component: () => import('../views/help/qna/ListView.vue')
    },
    {
        path: '/help/subject/list',
        component: () => import('../views/help/subject/ListView.vue')
    },
    {
        path: '/help/subject/detail',
        props: true,
        component: () => import('../views/help/subject/DetailView.vue')
    },
    {
        path: '/help/subject/write',
        component: () => import('../views/help/subject/WriteView.vue')
    },
    {
        path: '/help/subject-set/list',
        component: () => import('../views/help/subject-set/ListView.vue')
    },
    {
        path: '/help/subject-set/detail',
        props: true,
        component: () => import('../views/help/subject-set/DetailView.vue')
    },
    {
        path: '/help/subject-set/write',
        component: () => import('../views/help/subject-set/WriteView.vue')
    },
    {
        path: '/board/list',
        component: () => import('../views/board/BoardList.vue')
    },
    {
        path: '/board/detail',
        component: () => import('../views/board/BoardDetail.vue')
    },
    {
        path: '/board/create',
        component: () => import('../views/board/CreateArticle.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
