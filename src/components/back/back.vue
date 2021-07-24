<template>
  <div class="back">
    <!-- icon图标,左箭头, 返回上一层 -->
    <van-icon @click="backOne" class="icon-left" name="arrow-left" />
  </div>
</template>

<script>
export default {
  methods: {
    // 点击顶部箭头返回上一层
    backOne() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.back {
  width: 100vw;
  height: 20vw;
  padding-left: 15vw;
  display: flex;
  align-items: center;
  .icon-left {
    position: absolute;
    font-size: 6vw;
    color: #fff;
    // margin: 2vh 1vw;
  }
}
</style>