<template>
  <div class="nav">
    <ul>
      <router-link to="/home" active-class="active" tag="li">
        <van-icon name="wap-home-o" />
        <p>首页</p>
      </router-link>
      <router-link to="/musicStore" active-class="active" tag="li">
        <van-icon name="paid" />
        <p>曲库</p>
      </router-link>
      <router-link :to="'/play_detail/' + id" active-class="active" tag="li">
        <p class="playP">
          <img
            v-lazy="nowPlay.url ? nowPlay.url : './logo.webp'"
            class="playImg"
          />
          <van-icon :name="isPlay ? 'pause' : 'play'" class="play" />
        </p>
      </router-link>
      <router-link to="/radio" active-class="active" tag="li">
        <van-icon name="video-o" />
        <p>电台</p>
      </router-link>
      <router-link to="/center" active-class="active" tag="li">
        <van-icon name="smile-o" />
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: ["id", "isPlay"],
  data() {
    return {
      data: "https://img2.kuwo.cn/star/albumcover/500/64/22/1839376303.jpg",
    };
  }, //data
  computed: {
    ...mapState("playPage", ["nowPlay"]),
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  height: 7vh;
  width: 100vw;
  z-index: 900;
  bottom: 0vh;
  left: 0;
  border-top: 0.3vw solid #ccc;
  text-align: center;
  background: #fff;
  color: #7a7e83;
  ul {
    display: flex;
    align-items: center;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: 7vh;
      // background-color: pink;
      position: relative;
      &.active {
        color: #fe5100;
      }
      i {
        font-size: 5.5vw;
      }
    }
  }
  .playP {
    position: relative;
  }
  .playImg {
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    border: 0.5vw #ccc;
  }
  .play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 8vw;
  }
}
</style>