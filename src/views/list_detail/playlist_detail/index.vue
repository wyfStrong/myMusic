<template>
  <div>
    <transition name="fade" mode="out-in">
      <div id="all">
        <div class="back">
          <!-- icon图标,左箭头, 返回上一层 -->
          <van-icon @click="backOne" class="icon-left" name="arrow-left" />
        </div>
        <div id="img">
          <div class="left">
            <div class="imgBox">
              <img
                v-lazy="listsource.pic_500 ? listsource.pic_500 : ''"
                alt=""
              />
              <p>
                <van-icon name="play" />
                <span>{{
                  listsource.count_play > 10000
                    ? (listsource.count_play / 10000).toFixed(1) + "w"
                    : listsource.count_play
                }}</span>
              </p>
            </div>
          </div>
          <div class="right">
            <h3>{{ listsource.name }}</h3>
            <div class="nickname">
              <div class="small">
                <img
                  v-lazy="listsource.user_pic ? listsource.user_pic : ''"
                  alt=""
                />
              </div>
              <p>{{ listsource.user_name }}</p>
            </div>
          </div>
        </div>

        <div :class="{ fixedTop: fixed }" class="statistics">
          <b class="num">共{{ listsource.total }}个节目</b>
          <b class="playAll">
            <van-icon size="25" class="icon" name="play-circle-o" />
            <span @click="toPlay(listsource.musicList[0].id)"> 播放全部</span>
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
    this.$eventBus.$on("getPlayListDetail", (arg) => {
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
    color: #000;
    margin: 2vh 1vw;
    z-index: 99;
  }
  #img {
    width: 100%;
    height: 64vw;
    position: relative;
    overflow: hidden;
    z-index: -1;
    display: flex;
    background-color: #f8f8f8;
    .left {
      width: 33vw;
      height: 33vw;
      position: relative;
      .imgBox {
        width: 100%;
        margin: 18.267vw 5.2vw 0 5.333vw;
        img {
          width: 100%;
          border-radius: 4.267vw;
        }
      }
      p {
        position: absolute;
        bottom: -16vw;
        margin-left: 2vw;
        font-size: 3.5vw;
        font-weight: 700;
        color: #fff;
      }
    }
    .right {
      width: 50vw;
      height: 25vw;
      margin-left: 10vw;
      margin: 23.267vw 5.2vw 0 10vw;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h3 {
        width: 90%;
        line-height: 6.5vw;
        font-size: 5vw;
        font-weight: 700;
        // 两行省略号显示
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .nickname {
        display: flex;
        align-items: center;
        .small {
          width: 6.4vw;
          img {
            width: 100%;
            border-radius: 3.2vw;
          }
        }
        p {
          font-size: 3.33vw;
          margin-left: 1.5vw;
        }
      }
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