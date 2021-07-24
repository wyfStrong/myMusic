<template>
  <!-- 进度  和  audio 播放组件 -->
  <div class="progress">
    <span>{{ first }}</span>
    <span>
      <van-slider v-model="value" bar-height="5px" @change="onChange">
        <template #button>
          <div class="custom-button"></div>
        </template> </van-slider
    ></span>
    <span>{{ end }}</span>
  </div>
  <!--  -->
</template>

<script>
import { Toast } from "vant";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  // 接收 id
  props: ["id"],
  // 定时器 id
  Timeid: null,
  data() {
    return {
      // 进度条数值  0 -100
      value: 0,
      // 歌曲数据
      data: {},
      // 结束时间
      endTime: 0,
      // 开始时间 和 当前时间
      start: 0,
    };
  },
  computed: {
    // 进度条前面的数
    first() {
      return this.getTime(this.start);
    },
    // 进度条后面的数
    end() {
      return this.getTime(this.endTime - this.start);
    },
    // 导入 vuex 中的 音频数据
    ...mapState("playPage", ["audioData", "songUrl", "audio", "nowPlay"]),
  },
  async mounted() {
    // 请求 音频数据
    if (this.nowPlay.id != this.id) {
      await this.getaudioData(this.id);
    }

    // 获取 vuex 中的 数据后  赋值给 data
    this.data = this.audioData;

    // 如果播放 执行 进度条

    if (this.data.code != 200) {
      Toast("歌曲加载失败");
    } else {
      // 歌曲请求成功 执行的
      try {
        // 设置 vuex 中的 下载歌曲路径  如果没有 设置 有了不设置
        if (this.nowPlay.id != this.id) {
          this.setSongUrl(this.data.data.url);
        }
      } catch (error) {}
    }

    // 接收 是否播放 广播
    this.$eventBus.$on("play", (v) => {
      try {
        if (this.data.code == 200) {
          // 歌曲请求成功
          // 播放

          if (v) {
            // 获取 结束时间 并 赋值
            this.endTime = this.data.data.duration;
            // 设置 vuex 中的 结束时间
            this.setEndTime(this.endTime);
            // 让  audio标签 播放

            this.audio.play();
            // 设置进度条
            this.setprogress();
          } else {
            // 歌曲 暂停
            this.audio.pause();
            // 如果进度条函数的 计时器存在 清除该定时器

            clearInterval(this.Timeid);
          }
        }
      } catch (error) {}
    });
  },

  methods: {
    // 导入 vuex 中的  设置结束时间  设置开始和当前时间   设置下载歌曲 url地址函数
    ...mapMutations("playPage", ["setEndTime", "setStartTime", "setSongUrl"]),
    // 导入 vuex 中的 请求歌曲数据 函数
    ...mapActions("playPage", ["getaudioData"]),
    // 获取 时间  分:秒
    getTime(v) {
      // 输入数值
      v = parseInt(v);
      let fen = v / 60 < 0 ? "" : parseInt(v / 60) + ":";
      let miao = v % 60;
      if (fen === 0) {
        fen = "00";
      }
      // 导出 分: 秒
      return fen + miao;
    },
    // 进度条被拖动设置
    onChange(value) {
      try {
        // 得到 设置的时间 并 设置给 audio标签
        this.audio.currentTime = (value / 100) * this.endTime;
        // 将 audio 的 当前时间 设置给 this.start
        this.start = this.audio.currentTime;
      } catch (error) {}
    },
    // 设置进度条
    setprogress() {
      // 如果 计时器存在 清除
      clearInterval(this.Timeid);

      // 结束时间
      let endTime = this.endTime;
      // 设置进度条 定时器
      this.Timeid = setInterval(() => {
        // 如果  当前时间 大于 等于  结束时间
        if (this.audio.currentTime >= endTime) {
          // 定时器存在 清除定时器
          if (this.Timeid) {
            clearInterval(this.Timeid);
          }
        }
        // 获取 当前时间
        this.start = this.audio.currentTime;
        // 设置 vuex 的 当前时间
        this.setStartTime(this.start);
        //设置进度条   0 - 1000
        this.value = (this.audio.currentTime / endTime) * 100;
      }, 400);
    },
  },
  beforeDestroy() {
    clearInterval(this.Timeid);
  },
};
</script>


<style lang="scss" scoped>
div {
  width: 100%;
}
.custom-button {
  width: 4vw;
  height: 4vw;
  color: #fff;
  font-size: 4vw;
  line-height: 4vw;
  text-align: center;
  background-color: #fff;
  border-radius: 100px;
}
.progress {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3vh 0 4vh 0;
  > span:nth-child(2) {
    width: 60vw;
  }
  span:nth-child(1),
  span:nth-child(3) {
    width: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>