// 歌曲播放路由

export default {
    path: '/play_detail/:id?',
    props: true,
    component: () => import('@/views/play_detail')
}