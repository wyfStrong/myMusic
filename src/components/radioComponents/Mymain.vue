<template>
  <van-tabs v-model="active" animated>
    <van-tab v-for="(item, index) in list" :title="item" :key="index">
      <div v-if="radioData" class="box">
        <div
          @click="fn(item.id)"
          v-show="active === 0"
          class="item"
          v-for="item in radioData.new"
          :key="item.id"
        >
          <div class="imgBox">
            <img :src="item.pic" alt="" />
          </div>
          <div class="text">
            <h1>{{ item.name }}</h1>
            <p>{{ item.desc }}</p>
            <p>
              <span> <van-icon name="bars" />共{{ item.count_music }}集</span>
              <span>
                <van-icon name="play" />{{
                  Math.ceil(item.count_play / 10000)
                }}万人收听</span
              >
            </p>
          </div>
        </div>

        <div
          @click="fn(item.id)"
          v-show="active === 1"
          class="item"
          v-for="item in radioData.hot"
          :key="item.id"
        >
          <div class="imgBox">
            <img :src="item.pic" alt="" />
          </div>
          <div class="text">
            <h1>{{ item.name }}</h1>
            <p>{{ item.desc }}</p>
            <p>
              <span> <van-icon name="bars" />共{{ item.count_music }}集</span>
              <span>
                <van-icon name="play" />{{
                  Math.ceil(item.count_play / 10000)
                }}万人收听</span
              >
            </p>
          </div>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("radio", ["radioData"]),
  },
  data() {
    return {
      active: 0,
      list: ["最新", "最热"],
    };
  },
  methods: {
    fn(id) {
      this.$router.push("radio_detail/" + id);
    },
  },
};
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3vw 5vw;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 0.3vw;
    width: 90vw;
    background-color: #ccc;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .imgBox {
    margin-right: 6vw;
    width: 20vw;
    height: 20vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    h1 {
      font-size: 4.267vw;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #262338;
      line-height: 6.4vw;
      width: 57.333vw;
    }
    p {
      margin-top: 1vw;
      margin-bottom: 4vw;
      font-size: 3.2vw;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #a1a4b3;
      line-height: 4.4vw;
      width: 53.333vw;
    }
  }
  .text p:nth-child(3) {
    margin-bottom: 0;
  }
}

.box {
  padding-bottom: 10vh;
}
</style>