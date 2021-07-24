// 歌曲播放 vuex 模块

// 导入 api
import { getHotRadio, getNewRadio } from "@/api/radio";
export default {
    namespaced: true,
    state: {
        // 歌曲结束时间
        radioData: {
            new: {},
            hot: {}
        }
    },
    mutations: {
        // 设置new radio数据
        setNew(state, val) {
            state.radioData.new = val
        },
        // 设置hot radio数据
        setHot(state, val) {
            state.radioData.hot = val
        },




    },
    // 异步
    actions: {
        // 异步请求 主页歌曲 详细数据
        async getData({ commit }, val) {
            let res1 = await getNewRadio()
            let res2 = await getHotRadio();

            commit("setNew", res2.data.list)
            commit("setHot", res1.data.list)
        },





    }


}

