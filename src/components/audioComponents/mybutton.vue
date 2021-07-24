<template>
  <!-- 按钮组件 -->
  <van-button
    @click="fn"
    round
    type="info"
    size="large"
    color="rgba(68,68,68,0.5)"
  >
    <van-icon name="music"><span>下载歌曲</span></van-icon>
  </van-button>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("playPage", ["songUrl"]),
  },
  methods: {
    fn() {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.style.height = 0;
      // url自己进行指定
      iframe.src = this.songUrl;
      document.body.appendChild(iframe);
      // 不能马上将iframe进行删除，否者也会出现马上取消的情况
      setTimeout(() => {
        iframe.remove();
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 60vw;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      height: 5vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4vw;
      &::before {
        font-size: 5vw;
        line-height: 6vh;
      }
    }
  }
}
</style>