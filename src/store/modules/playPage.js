// 歌曲播放 vuex 模块

// 导入vue
import vue from 'vue'
// 导入 api
import { getPlay_detail, getSong } from "@/api/play_detail";
export default {
    namespaced: true,
    state: {
        // 歌曲结束时间
        endTime: 0,
        // 歌曲开始 和当前时间
        startTime: 0,
        // 歌词列表
        lrc: [],
        // 是否隐藏 cd圆盘和title
        CDbool: true,
        // 下载歌曲的 url
        songUrl: '',
        // 首页 歌曲 详细数据
        indexData: '',
        // 歌曲地址数据
        audioData: '',
        // 首页正在播放对象
        nowPlay: {
            url: '',
            id: ''
        },
        //是否正在播放 
        isPlay: true,
        // 音频标签
        audio: '',
        // 事件总线

    },
    mutations: {
        // 设置结束时间
        setEndTime(state, val) {
            state.endTime = val
        },
        // 设置开始和 当前时间
        setStartTime(state, val) {
            state.startTime = val
        },
        // 设置歌词列表
        setLrc(state, val) {
            state.lrc = val

        },
        // 设置 cd 隐藏显示 bool 值
        setCDBool(state, val) {
            state.CDbool = val
        },
        // 设置 歌曲下载 url地址
        setSongUrl(state, val) {
            state.songUrl = val
        },
        // 设置 歌曲 详细信息数据
        setindexData(state, val) {

            state.nowPlay.url = val.data.info.pic
            state.nowPlay.id = val.data.info.id

            state.indexData = val
        },
        // 设值 歌曲 播放数据
        setaudioData(state, val) {

            state.audioData = val
        },
        // 设置 是否正在播放
        setIsPlay(state, val) {
            state.isPlay = val
        },
        setAudio(state, val) {
            state.audio = val


        },





    },
    // 异步
    actions: {
        // 异步请求 主页歌曲 详细数据
        async getindexData({ commit }, id) {
            let res = await getPlay_detail(id);
            commit("setindexData", res)
        },
        // 异步请求 播放歌曲 详细数据
        async getaudioData({ commit }, id) {
            let res = await getSong(id);
            commit("setaudioData", res)
        }




    }


}

