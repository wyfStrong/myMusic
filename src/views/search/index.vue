<template>
  <div>
    <div id="all">
      <div class="searchCon">
        <!-- 搜索框 -->
        <search></search>
        <!-- 历史记录 -->
        <history v-if="historyShow" v-show="historyShow"></history>
        <div v-else-if="myload" class="loading">
          <van-loading size="10vh" color="#1989fa" />
        </div>
        <list-detail v-else-if="detailShow"></list-detail>
      </div>
    </div>
  </div>
</template>

<script>
// search组件
import search from "./ui/search.vue";
import history from "./ui/history.vue";
import listDetail from "./ui/listDetail.vue";
export default {
  data() {
    return {
      historyShow: true,
      detailShow: false,
      // 清头部
      boolean: false,
      // 加载显示
      myload: false
    };
  },
  components: {
    search,
    history,
    listDetail,
  },
  mounted() {
    //判断头
    this.boolean = false;
    this.$eventBus.$emit("boolean", this.boolean);
  },
  // 离开组件赋值为true, 头部搜索栏显示
  beforeDestroy() {
    this.boolean = true;
    this.$eventBus.$emit("boolean", this.boolean);
  },
};
</script>

<style lang="scss" scoped>
#all {
  width: 100vw;
  margin-top: -9vw;
  .searchCon {
    width: 90vw;
    margin: 0 auto;
    .loading {
      display: flex;
      justify-content: center;
    }
  }
}
</style>