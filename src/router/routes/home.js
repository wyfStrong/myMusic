//主页模块路由
export default [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import('@/views/home/home.vue'),
    },
]
