<template>
  <!-- 推荐组件 -->
  <div class="recommend">
    <h1>精彩推荐</h1>
    <!-- 轮播swiper -->
    <myswiper></myswiper>
  </div>
</template>

<script>
import myswiper from "@/components/audioComponents/swiper.vue";

export default {
  components: { myswiper },
};
</script>

<style lang="scss" scoped>
.recommend h1 {
  width: 100vw;
  height: 13.333vw;

  font-size: 5.333vw;
  font-weight: 500;
  color: #fff;
  line-height: 13.333vw;
  padding-left: 5.33vw;
  z-index: 3;
  box-sizing: border-box;
}
</style>