<template>
  <!-- 轮播 -->
  <van-swipe
    class="my-swipe"
    :show-indicators="false"
    :width="'80vw'"
    :height="'40vw'"
  >
    <van-swipe-item>
      <img
        src="http://kwimg3.kuwo.cn/star/upload/ecom/1624073853876.jpg"
        alt=""
      />
    </van-swipe-item>
    <van-swipe-item>
      <img
        src="http://kwimg3.kuwo.cn/star/upload/ecom/1624074049917.jpg"
        alt=""
      />
    </van-swipe-item>
    <van-swipe-item>
      <img
        src="http://kwimg3.kuwo.cn/star/upload/ecom/1624074214812.jpg"
        alt=""
      />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.my-swipe {
  overflow: hidden;
  width: 100vw;
  height: 20vh;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  width: 80vw;
  height: 40vw;
  text-align: center;

  overflow: hidden;
}
.van-swipe-item img {
  width: 80vw;
  height: 40vw;
  border-radius: 3vw;
}
</style>