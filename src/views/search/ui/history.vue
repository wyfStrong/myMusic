<template>
  <div class="all">
    <div class="history">
      <span>历史记录</span>
      <span @click="delhis">
        <van-icon color="#D0D2D9" size="6vw" name="delete-o" />
      </span>
    </div>
    <div class="con">
      <div
        @click="toConDetail(item)"
        class="hisCon"
        v-for="item in this.his"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    // 历史记录localStr
    ...mapState("search", ["his"]),
  },
  methods: {
    // 删除历史记录事件
    ...mapMutations("search", ["delHistory"]),
    // 搜索项详情请求
    ...mapActions("search", ["getConDetail"]),
    // 点击触发删除历史记录
    delhis() {
      this.delHistory();
    },
    // 点击事件
    async toConDetail(con) {
      // 历史记录隐藏
      this.$parent.$data.historyShow = false;
      // 历史隐藏,loading显示
      this.$parent.$data.myload = true;
      // 发送请求
      await this.getConDetail(con);
      // 详情列表显示
      this.$parent.$data.detailShow = true;
      // 列表显示,loading隐藏
      this.$parent.$data.myload = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.all {
  width: 100%;
  .history {
    width: 100%;
    margin-top: 2vw;
    font-size: 5.33vw;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .con {
    width: 100%;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    .hisCon {
      background-color: #f1f3f4;
      padding: 2vw 2.5vw;
      margin: 3vw 0 1vw 0;
      border-radius: 4vw;
      font-size: 3.73vw;
      margin-right: 3vw;
    }
  }
}
</style>