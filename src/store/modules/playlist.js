
// 导入 playlist三个请求
import { getPlayListNew, getPlayListHot, getPlayList } from '@/api/ranklist'
export default {

  state: {
    listData: [],
    newData: [],
    hotData: [],
  },
  mutations: {
    // 修改state数据
    setList(state, payload) {
      state.listData = payload[0]
      state.newData = payload[1]
      state.hotData = payload[2]
    },
  },
  // 异步
  actions: {
    // 请求三个数据
    async getAllData({ commit }) {
      let res1 = await getPlayList()
      let res2 = await getPlayListNew()
      let res3 = await getPlayListHot()
      commit('setList', [res1.data, res2.data, res3.data])
      return true;
    },
  }
}