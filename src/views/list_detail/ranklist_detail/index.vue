<template>
  <div>
    <transition name="fade" mode="out-in">
      <div id="all">
        <div class="back">
          <!-- icon图标,左箭头, 返回上一层 -->
          <van-icon @click="backOne" class="icon-left" name="arrow-left" />
        </div>
        <div id="img">
          <!-- 顶部图片 -->
          <img v-lazy="listsource.pic_bg ? listsource.pic_bg : ''" alt="" />
          <img v-lazy="listsource.pic ? listsource.pic : ''" alt="" />
          <p>{{ listsource.publish }} 更新</p>
        </div>
        <div :class="{ fixedTop: fixed }" class="statistics">
          <b class="num">共{{ listsource.total }}首歌曲</b>
          <b class="playAll">
            <van-icon size="25" class="icon" name="play-circle-o" />
            <span @click="toPlay(listsource.list[0].id)"> 播放全部</span>
          </b>
        </div>
        <!-- 列表 -->
        <list></list>
      </div>
    </transition>
  </div>
</template>

<script>
// 引入动画库
import "animate.css";

// 引入歌曲列表组件
import list from "./ui/list.vue";
// 导入lodash
import _ from "lodash";
export default {
  data() {
    return {
      // list组件传来的网络请求数据, 图片日期等信息
      listsource: [],
      fixed: false,
      boolean: false,
    };
  },
  mounted() {
    // list组件将请求值全部传过来,拿图片和时间等内容
    this.$eventBus.$on("getrankList", (arg) => {
      this.listsource = arg;
    });

    // 节流
    window.addEventListener("scroll", _.throttle(this.updateScrollFn, 300));

    //判断头
    this.boolean = false;
    this.$eventBus.$emit("boolean", this.boolean);
  },
  // 离开组件赋值为true, 头部搜索栏显示
  beforeDestroy() {
    this.boolean = true;
    this.$eventBus.$emit("boolean", this.boolean);
  },
  methods: {
    // 点击顶部箭头返回上一层
    backOne() {
      this.$router.go(-1);
    },
    updateScrollFn() {
      // 滚动条的距离顶部的距离
      let top = document.documentElement.scrollTop;
      if (top > 200) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
    toPlay(id) {
      // 点击播放,跳转播放页面
      this.$router.push("/play_detail/" + id);
    },
  },
  components: {
    list,
  },
};
</script>

<style lang="scss" scoped>
#all {
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: -5vh;
  .icon-left {
    position: absolute;
    font-size: 4.733vw;
    color: #fff;
    margin: 2vh 1vw;
    z-index: 99;
  }
  #img {
    width: 100%;
    height: 64vw;
    position: relative;
    overflow: hidden;
    background-color: rgba(66, 67, 105, 0.5);
    z-index: -1;

    img:nth-of-type(1) {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -99;
    }
    img:nth-of-type(2) {
      display: flex;
      margin: auto;
      margin-top: 6vh;
      width: 60%;
    }
    p {
      position: absolute;
      bottom: 7.5vw;
      left: 50%;
      color: #fff;
      transform: translateX(-50%);
      font-size: 3.733vw;
    }
  }
  .fixedTop {
    position: fixed;
    top: 0vh;
    background: #fff;
    z-index: 99;
  }
  .statistics {
    width: 100%;
    height: 12vh;
    background-color: #fff;
    border-radius: 4vw 4vw 0 0;
    margin-top: -1.2vh;
    line-height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    .num {
      font-size: 5.33vw;
      font-weight: 700;
      padding-left: 6vw;
    }
    .playAll {
      background-color: #f7f7f7;
      padding: 0 3vw;
      margin-right: 4vw;
      height: 5vh;
      border-radius: 5vw;
      font-size: 3vw;
      line-height: 5vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        font-size: 6vw;
        margin-right: 1vw;
        color: #615e6d;
      }
      span {
        font-weight: 700;
        color: #615e6d;
      }
    }
  }
}
</style>