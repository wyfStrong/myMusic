<template>
  <!-- 歌曲播放页面 -->
  <div>
    <div :style="bgStr">
      <div class="bg">
        <!-- 返回 -->
        <back></back>
        <!-- 顶部歌曲播放 -->
        <div class="cd">
          <!-- 标题 -->
          <div class="title">
            <div v-show="CDbool">
              <h1>{{ song.info ? song.info.name : "" }}</h1>
              <h4>{{ song.info ? song.info.artist_name : "" }}</h4>
            </div>
          </div>
          <!-- cd -->
          <div class="cdimg">
            <div v-show="CDbool">
              <div ref="cd">
                <img v-lazy="song.info ? song.info.pic : ''" alt="" />
              </div>

              <span ref="span" @click="playFn"
                ><van-icon v-if="song.info" :name="isPlay ? 'pause' : 'play'"
              /></span>
            </div>
          </div>

          <!-- 歌词 -->
          <div>
            <!-- 歌词组件 -->
            <lrc></lrc>
          </div>
          <!-- 进度条 -->
          <Myprogress :isplay="isPlay" :id="id"></Myprogress>
          <!-- 下载按钮 -->
          <mybutton></mybutton>
        </div>

        <!-- 歌手与专辑-->
        <zhuanji :data="song.info ? song.info : ''"></zhuanji>
        <!-- 精彩推荐 -->
        <recommend></recommend>
        <!-- 分享 -->
        <MyShareSheet></MyShareSheet>
      </div>
    </div>
  </div>
</template>

<script>
import lrc from "@/components/audioComponents/lrc.vue";
import Myprogress from "@/components/audioComponents/progress.vue";
import mybutton from "@/components/audioComponents/mybutton.vue";
import zhuanji from "@/components/audioComponents/zhuanji.vue";
import recommend from "@/components/audioComponents/recommend.vue";
import MyShareSheet from "@/components/audioComponents/MyShareSheet.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  props: ["id"],
  timeID: 0,
  components: { lrc, Myprogress, mybutton, zhuanji, recommend, MyShareSheet },
  data() {
    return {
      // 歌曲详情数据
      song: {},
      // 设置播放器背景
      bgStr: "",
      // 存储旋转角度
      deg: 0,
    };
  },
  computed: {
    // 从vuex  中 得到 是否因此持仓 cd的 bool值  和   歌曲详情数据
    ...mapState("playPage", ["CDbool", "indexData", "isPlay", "audio"]),
  },
  async mounted() {
    this.$eventBus.$emit("boolean", false);

    this.setCDBool(true);
    document.documentElement.scrollTop = 0;
    this.setIsPlay(true);
    // 请求歌曲数据
    await this.getindexData(this.id);

    setTimeout(() => {
      this.$eventBus.$emit("play", this.isPlay);
    }, 800);

    // 获取 vuex 中的 歌曲详情数据 并 赋给 song
    this.song = this.indexData.data;
    // console.log(this.song);
    // 设置 当前的背景图片
    this.bgStr = ` background: url('${
      this.song.info.album_pic ? this.song.info.album_pic : "./favicon.ico"
    }');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 500% 300%;`;
    // 设置 vuex 中的 歌词列表
    this.setLrc(this.song.lrc);

    if (this.isPlay) {
      try {
        // 调用 转动函数
        this.rotateCD();
      } catch (error) {}
    } else {
      // 清除 定时器  让cd不转
      clearInterval(this.timeID);
    }
  },
  methods: {
    // 导入 vuex 方法  请求  歌曲详情数据
    ...mapActions("playPage", ["getindexData"]),
    // 导入 vuex 方法  设置  歌曲列表   是否播放  事件总线
    ...mapMutations("playPage", ["setLrc", "setIsPlay", "setCDBool"]),
    // 播放 函数  点击播放 暂停
    playFn() {
      //取反 是否播放

      this.setIsPlay(!this.isPlay);
      console.log(this.isPlay);
      // console.log(this.isplay);
      // 总线广播 当前 是 播放 还是暂停
      this.$eventBus.$emit("play", this.isPlay);

      // 如果播放 让 cd 转
      if (this.isPlay) {
        // 调用 转动函数
        this.rotateCD();
      } else {
        // 清除 定时器  让cd不转
        clearInterval(this.timeID);
      }
    },
    // 转动函数
    rotateCD() {
      // 设置一个 定时器  每 50毫秒 转一个 角度
      // 角度 大于360时 设置角度为0
      this.timeID = setInterval(() => {
        if (this.$refs.cd) {
          this.$refs.cd.style.transform = "rotate(" + this.deg + "deg)";
        }
        this.deg++;
        if (this.deg > 360) {
          this.deg = 0;
        }
      }, 50);
    },
  },
  beforeDestroy() {
    clearInterval(this.timeID);
    this.$eventBus.$off("play");
    this.$eventBus.$emit("boolean", true);
  },
};
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: #000000, $alpha: 0.5);
  // padding-bottom: 5vh;
  margin-top: -5vh;
}
.cd {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  overflow: hidden;
}
.title {
  height: 6vh;

  padding-bottom: 5vh;
  h1 {
    width: 93.333vw;
    margin: 0 auto 0.667vw;
    line-height: 7.467vw;
    font-size: 5.333vw;
    font-weight: 600;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  h4 {
    width: 75%;
    line-height: 4.267vw;
    font-size: 3.2vw;
    width: 93.333vw;
    margin: 0 auto;
    font-weight: 400;
    color: #fff;
    color: hsla(0, 0%, 100%, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.cdimg {
  width: 62.4vw;
  height: 62.4vw;
  border: 2.133vw solid #d8d8d8;
  border: 2.133vw solid hsla(0, 0%, 84.7%, 0.06);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  img {
    height: 100%;
    width: 100%;
  }
  span {
    width: 10vw;
    height: 10vw;
    position: absolute;
    font-size: 8vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.bg {
  overflow: hidden;
  padding-bottom: 9vh;
}
</style>
