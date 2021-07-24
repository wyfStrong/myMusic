<template>
  <div>
    <div id="bg">
      <!-- 顶部分类 -->
      <classify></classify>
      <div class="recommend">
        <h3>推荐歌单</h3>
        <div class="cut">
          <div @click="cut1" :class="{active:mnew}" class="new">最新</div>
          <div @click="cut2" :class="{active:hot}" class="hot">最热</div>
        </div>
      </div>
      <!-- vant库过渡效果 -->
      <transition name="van-fade">
        <!-- 动态组件,保持 -->
        <keep-alive>
          <component :is="cmp"></component>
        </keep-alive>
      </transition>
    </div>
  </div>

</template>

<script>
// 引入组件
import classify from './ui/classify.vue'
import znew from './ui/znew.vue'
import hot from './ui/hot.vue'
// Vuex
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      // 切换最新最热样式
      mnew: true,
      hot: false,
      // 动态组件,初始显示最新
      cmp: znew
    }
  },
  methods: {
    cut1() {
      this.mnew = true
      this.hot = false
      this.cmp = znew
    },
    cut2() {
      this.mnew = false
      this.hot = true
      this.cmp = hot
    },
    // 异步请求函数
    ...mapActions('playlist', ['getAllData']),
  },
  components: {
    classify,
    znew,
    hot
  },
  async mounted() {
    // 请求数据
    this.getAllData()
  },
}
</script>

<style lang="scss" scoped>
#bg {
  background-color: #fff;
  width: 100vw;
  margin-top: 15vw;
  .van-tab {
    background-color: blue;
  }
  .recommend {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5vw;
    h3 {
      font-size: 5.33vw;
    }
    .cut {
      display: flex;
      height: 8vw;
      width: 20vw;
      line-height: 8vw;
      border-radius: 5vw;
      background-color: #f7f7f7;
      padding: 0 1vw;
      color: #bbb;

      .new,
      .hot {
        width: 10vw;
        text-align: center;
        font-size: 3vw;
        border-radius: 5vw;
      }
      .active {
        background-color: #fff;
        color: #000;
      }
    }
  }
  .header {
    width: 100vw;
    font-size: 5.33vw;
    padding: 2vw 4vw;
    box-sizing: border-box;
    font-weight: 500;
    padding: 4vw;
  }
}
</style>