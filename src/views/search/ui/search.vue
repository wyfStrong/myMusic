<template>
  <div id="search">
    <van-search shape="round" v-model="value" @input="showList" show-action placeholder="搜索你想听的歌曲" @cancel="onCancel" />
    <search-list :value="value" v-show="show"></search-list>
  </div>
</template>

<script>
// 子组件显示列表组件
import searchList from './searchList'
// 辅助函数拿vuex异步请求函数
import { mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      // 关键词
      value: '',
      show: false
    };
  },
  // 组件,搜索列表组件
  components: {
    searchList
  },
  mounted() {
    this.getHistory()
  },
  methods: {
    // 异步请求方法
    ...mapActions('search', ['getListData']),
    // 同步方法
    // ...mapMutations('search', ['setHistory']),
    ...mapMutations('search', ['getHistory']),
    // 点击取消按钮,显示历史记录
    onCancel() {
      // 清空输入框时,显示历史记录
      this.$parent.$data.historyShow = true
      // 取消显示列表
      this.show = false
      // 取消显示详情列表
      this.$parent.$data.detailShow = false
    },
    // value值改变触发,发送请求,隐藏历史记录,显示搜索内容列表,取消显示歌曲列表
    async showList() {
      // 改变父组件内show值控制历史记录组件显示或隐藏
      // value值判断组件显示
      if (this.value == '') {
        // 显示历史记录
        this.$parent.$data.historyShow = true
        // 详情列表
        this.$parent.$data.detailShow = false
        // 取消显示列表
        this.show = false
      } else {
        // value是输入框关键词
        await this.getListData(this.value)
        // 隐藏历史记录
        this.$parent.$data.historyShow = false
        // 详情列表
        this.$parent.$data.detailShow = false
        // value有值就显示列表
        this.show = true
      }
    },
  }
}
</script>

<style lang="scss" scoped>
#search {
  width: 90vw;
  margin: 0 auto;
  margin-top: 4vw;
}
</style>