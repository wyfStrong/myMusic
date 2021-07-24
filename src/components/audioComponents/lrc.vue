<template>
  <!-- 歌词组件 -->
  <div class="box">
    <div @click="lrcboxFn" :class="classList">
      <div ref="lrcbox" class="movebox">
        <p ref="lrc">歌词</p>
        <p ref="p" v-for="(item, index) in lrc" :key="index">
          {{ item.lineLyric }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState("playPage", ["startTime", "endTime", "lrc", "CDbool"]),
  },
  lrctimeId: 0,
  lrcmoveid: 0,
  data() {
    return {
      classList: { lrcbox: !this.CDbool, bigLrcbox: this.CDbool },
      now: 0,
      height: "",
      index: 0,
    };
  },
  mounted() {
    this.$eventBus.$on("play", (v) => {
      if (v) {
        this.mylrc();
      } else {
        clearInterval(this.lrctimeId);
      }
    });
  },

  methods: {
    lrcboxFn() {
      // 切换  歌词 类  是显示小盒子 还是显示 大盒子
      this.classList.lrcbox = !this.classList.lrcbox;
      this.classList.bigLrcbox = !this.classList.bigLrcbox;

      try {
        // 点击歌词 设置歌词 的   显示位置
        if (!this.CDbool) {
          this.$refs.lrcbox.style.top = -this.index * 5 + 6 + "vh";
        } else {
          this.$refs.lrcbox.style.top = -this.index * 5 + 30 + "vh";
        }
      } catch (error) {}
      // 将 vuex 中的 cdbool 设置为相反
      this.setCDBool(!this.CDbool);
    },
    ...mapMutations("playPage", ["setCDBool"]),
    move(index) {
      // 移动函数   移动到 下一个坐标去
      try {
        let end = index; // 下一个歌词的位置
        let start = index - 1; //当前歌词的位置
        this.lrcmoveid = setInterval(() => {
          if (start >= end) {
            // 如果 到达  清除定时器
            clearInterval(this.lrcmoveid);
          }
          // 移动步长
          start += 0.1;
          // 根据是  小屏歌词 大屏歌词 来显示
          if (this.CDbool) {
            this.$refs.lrcbox.style.top = -start * 5 + 6 + "vh";
          } else {
            this.$refs.lrcbox.style.top = -start * 5 + 30 + "vh";
          }
        }, 1);
      } catch (error) {}
    },
    // 判断 歌词
    mylrc() {
      let arr = this.$refs.p;
      // 每10毫秒判断一次
      this.lrctimeId = setInterval(() => {
        try {
          if (this.lrc[0]) {
            // 如果 歌词存在
            // 从 歌词列表中 找到第一个比 当前时间大的 那一个歌词的 下标
            let index = this.lrc.findIndex(
              (item) => item.time >= this.startTime
            );
            // 这个下标 -1 为当前歌词  给其高亮
            if (this.index != index) {
              // 每次都清除所有样式
              if (index - this.index == 1) {
                arr.forEach((item) => {
                  item.style.color = "";
                });
                arr[index - 1].style.color = "yellow";
              } else {
                arr.forEach((item) => {
                  item.style.color = "";
                });
                arr[index - 1].style.color = "yellow";
                arr[index].style.color = "yellow";
              }
              // 上方的 if else为了判断  有两句一起出来的 比如 中英文歌词

              this.index = index;
              // 移动到这个坐标去
              this.move(this.index);
            }
          }
        } catch (error) {}
      }, 10);
    },
  },
  beforeDestroy() {
    clearInterval(this.lrcmoveid);

    clearInterval(this.lrctimeId);
  },
};
</script>

<style lang="scss" scoped>
.box {
  height: 15vh;
  overflow: hidden;
}
p {
  padding: 1.5vh 0;
  height: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
}
.lrcbox {
  height: 15vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.bigLrcbox {
  height: 60vh;
  overflow: hidden;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5vh;
  left: 0;
  width: 100%;
}
.movebox {
  top: 0;
  position: absolute;
}
</style>