<template>
  <div>
    <div class="topbox">
      <div class="userbox">
        <span class="imgbox">
          <img v-lazy="'./favicon.ico'" alt="" />
        </span>
        <span>
          <p @click="Login">点击登录</p>
          <p>登录畅想高品音乐</p>
        </span>
      </div>
      <div>
        <van-button
          round
          type="info"
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          >签到领好礼</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.topbox {
  background: orange;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
}
.userbox {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  box-sizing: border-box;
  .imgbox {
    background-color: #fff;
    width: 8vh;
    height: 8vh;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    margin-right: 2vw;
  }
  span p:nth-child(1) {
    margin-bottom: 1vh;
    font-size: 2.3vh;
  }
  span p:nth-child(2) {
    color: #555;
  }
}
</style>