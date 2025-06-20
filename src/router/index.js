import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/index.html',
        component: () => import('../views/HomeView.vue')
    },

    {
        path: '/editor',
        component: () => import('../views/EditorView.vue')
    },

    // lesson
    {
        path: '/lesson/list',
        props: true,
        component: () => import('../views/lesson/LessonList.vue')
    },
    {
        path: '/lesson/detail',
        props: true,
        component: () => import('../views/lesson/LessonDetail.vue')
    },

    // help 기타
    {
        path: '/help',
        component: () => import('../views/help/pin/PinList.vue')
    },
    {
        path: '/help/pin/list',
        component: () => import('../views/help/pin/PinList.vue')
    },
    {
        path: '/help/module/list',
        component: () => import('../views/help/module/ModuleList.vue')
    },
    {
        path: '/help/qna/list',
        component: () => import('../views/help/qna/QnaList.vue')
    },

    // /help/subject
    {
        path: '/help/subject/list',
        component: () => import('../views/help/subject/SubjectList.vue')
    },
    {
        path: '/help/subject/detail',
        props: true,
        component: () => import('../views/help/subject/SubjectDetail.vue')
    },
    {
        path: '/help/subject/write',
        component: () => import('../views/help/subject/SubjectWrite.vue')
    },
    {
        path: '/help/subject/edit',
        props: true,
        component: () => import('../views/help/subject/SubjectEdit.vue')
    },

    // /help/subject-set
    {
        path: '/help/subject-set/list',
        component: () => import('../views/help/subject-set/SubjectSetList.vue')
    },
    {
        path: '/help/subject-set/detail',
        props: true,
        component: () => import('../views/help/subject-set/SubjectSetDetail.vue')
    },
    {
        path: '/help/subject-set/write',
        component: () => import('../views/help/subject-set/SubjectSetWrite.vue')
    },
    {
        path: '/help/subject-set/edit',
        props: true,
        component: () => import('../views/help/subject-set/SubjectSetEdit.vue')
    },

    // board
    {
        path: '/notice/list',
        component: () => import('../views/notice/NoticeBoard.vue')
    },

    // BO
    {
        path: '/backOffice',
        component: () => import('../views/backOffice/HomeView.vue'),
        children: [
            {
                path: '/backOffice/lessons',
                component: () => import('../views/backOffice/LessonList.vue')
            },
            {
                path: '/backOffice/create/lesson',
                component: () => import('../views/backOffice/CreateLesson.vue')
            },
            {
                path: '/backOffice/edit/lesson',
                props: true,
                component: () => import('../views/backOffice/EditLesson.vue')
            },
            {
                path: '/backOffice/lesson/detail',
                props: true,
                component: () => import('../views/backOffice/backLessonDetail.vue')
            },
        ]
    },

    
    // Block
    {
        path: '/blockCoding',
        name: 'blockCoding',
        component: () => import('../views/blockCoding/AsomeBlock.vue')
    },
    // Block
    {
        path: '/GoqcPage',
        name: 'GoqcPage',
        component: () => import('../views/GoqcPage/GoqcPage.vue')
    },
    {
        path: '/AutomaticProgram',
        name: 'AutomaticProgram',
        component: () => import('../views/AutomaticProgram/AutomaticProgram.vue')
    },
    // Curriculum
    {
        path: '/curriculum',
        props: true,
        component: () => import('../views/lesson/SelectCurriculum.vue')

    },
    
    // Simulation
    {
        path: '/simulation/:page',
        props: true,
        component: () => import('../views/SimulationView.vue')

    },
    
    {
        path: '/your-route',
        name: 'YourRoute',
        component: () => import('../views/blockCoding/AsomeBlock.vue')
    }

]

// 일렉트론은 내부에서 모든걸 처리하기 때문에 hash모드가 적절
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router
