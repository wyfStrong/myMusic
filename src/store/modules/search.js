// 导入 search的请求
import { getConDetail, getSearchCon } from '@/api/ranklist'
import LocStorage from '@/utils/LocStorage'
export default {

  state: {
    // 关键词项列表
    mySearchList: [],
    // 具体项详情
    listDetail: {},
    // 历史记录
    his: {}
  },
  mutations: {
    // 修改state数据
    setList(state, payload) {
      state.mySearchList = payload
    },
    setListDetail(state, payload) {
      state.listDetail = payload
    },
    // 写localStorage,存历史记录
    setHistory(state, payload) {
      // 先拿一下本地的跟现有数据合并写入localStorage
      // state.his = [...payload, ...state.his]
      state.his = { ...payload, ...state.his }
      // 写入localStorage
      LocStorage.set('myHistory', state.his)
    },
    // 拿localStorage,写历史记录
    getHistory(state) {
      state.his = LocStorage.get('myHistory')
    },
    // 删除历史记录
    delHistory(state) {
      // 都设为空
      state.his = []
      LocStorage.set('myHistory', '')
    },
  },
  // 异步
  actions: {
    // 请求关键词项列表数据
    async getListData({ commit }, payload) {
      let res = await getSearchCon(payload)
      commit('setList', res.data)
      return true;
    },
    // 请求具体项详情数据
    async getConDetail({ commit }, payload) {
      let res = await getConDetail(payload)
      commit('setListDetail', res.data)
      return true;
    },
  }
}