<template>
  <div>
    <div class="banner">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        :loop="true"
      >
        <van-swipe-item v-for="item in bannerList" :key="item.id" :loop="true">
          <img v-lazy="item.pic ? item.pic : ''" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      bannerList: [{}],
    };
  },
  computed: {
    ...mapState("home", ["data"]),
  },
  async mounted() {
    await this.gethomeData();
    this.bannerList = this.data.banner_list;
  },
  methods: {
    ...mapActions("home", ["gethomeData"]),
  },
};
</script>
<style lang="scss" scoped>
/* 轮播 */
.banner {
  width: 100vw;
  height: 23.5vh;

  padding: 4vw;
  box-sizing: border-box;
  // margin-bottom: 4vh;
  background-color: #f9fafb;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  width: 50vw;
  height: 20vh;
  border-radius: 5px;
  overflow: hidden;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>
