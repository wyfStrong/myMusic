<template>
  <div>
    <div class="nav">
      <div>
        <div class="first">
          <van-icon name="diamond-o" />
          <span>会员中心</span>
        </div>
        <div class="second">
          <p>开通会员畅想千万曲库</p>
        </div>
      </div>

      <div>
        <div class="first">
          <van-icon name="label-o" />
          <span>活动中心</span>
        </div>
        <div class="second">
          <p>精彩活动大放送</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2vh 0;
  background-color: #fff;
  padding: 2vh 0;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    &:nth-child(1) {
      border-right: 0.5vw solid #ccc;
    }
  }
  .first {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 2.3vh;
      margin-left: 1.8vw;
    }
    i {
      font-size: 2.3vh;
    }
    margin-bottom: 1vw;
  }

  .second {
    font-size: 1vh;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      text-align: center;
    }
  }
}
</style>