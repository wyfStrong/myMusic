<template>
  <div id="searchList">
    <div class="tab" v-for="item in mySearchList" :key="item">
      <van-icon name="search" />
      <van-cell :value="item" @click="toConDetail(item)" />
    </div>
  </div>
</template>

<script>
// Vuex
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  props: {
    value: {
      type: String,
    }
  },
  // 拿vuex中input事件请求的数据
  computed: {
    ...mapState('search', ['mySearchList']),
    ...mapState('search', ['listDetail'])
  },
  methods: {
    // 搜索项详情请求
    ...mapActions('search', ['getConDetail']),
    // 
    ...mapMutations('search', ['setHistory']),
    // 点击事件
    async toConDetail(con) {
      // 请求列表消失
      this.$parent.$data.show = false
      // 加载loading显示
      if (this.listDetail) {
        this.$parent.$parent.$data.myload = true
      }
      await this.getConDetail(con)
      // 详情列表显示
      this.$parent.$parent.$data.detailShow = true
      // 列表显示之后,loading隐藏
      this.$parent.$parent.$data.myload = false
      // 写历史记录
      let obj = {}
      obj[this.value] = this.value
      this.setHistory(obj)
    }
  },
}
</script>

<style lang="scss" scoped>
#searchList {
  width: 100%;
  .tab {
    display: flex;
    width: 85%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    font-size: 4.267vw;
    overflow: hidden; /*超出部分隐藏*/
    white-space: nowrap; /*禁止换行*/
    text-overflow: ellipsis; /*省略号*/
  }
}
</style>