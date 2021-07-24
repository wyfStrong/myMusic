<template>
  <!-- 分享组件 -->
  <div>
    <van-button
      round
      type="info"
      size="large"
      color="rgba(68,68,68,0.5)"
      @click="showShare = true"
    >
      <van-icon name="share">
        <span>分享</span>
      </van-icon>
    </van-button>

    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
    };
  },
  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
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