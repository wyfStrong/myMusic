<template>
  <!-- 专辑组件 -->
  <div class="songer">
    <h1>歌手与专辑</h1>
    <ul>
      <li @click="singers">
        <span><img :src="data.artist_pic" alt="" /></span>
        <span>歌手:{{ data.artist_name }}</span>
      </li>
      <li @click="album_detail">
        <span><img :src="data.album_pic" alt="" /></span>
        <span>专辑:{{ data.album_name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["data"],

  methods: {
    singers() {
      this.$router.push("/album_detail/" + this.data.album_id);
    },
    album_detail() {
      this.$router.push("/album_detail/" + this.data.album_id);
    },
  },
};
</script>
<style lang="scss" scoped>
.songer {
  width: 100%;
  color: #fff;
  h1 {
    width: 100vw;
    height: 13.333vw;
    padding: 0 5.333vw;
    font-size: 5.333vw;
    font-weight: 500;
    color: #fff;
    line-height: 13.333vw;
    box-sizing: border-box;
  }
  ul li {
    width: 100vw;
    height: 20vw;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYBAMAAACDuy0HAAAALVBMVEUAAADj4+Pj4+Pj4+Pf39/f39/f39/h4eHf39/f39/g4ODf39/f39/g4ODf398Qz/lhAAAADnRSTlMAJS0uMEhgh7jR7fL6/TsowaoAAABxSURBVEjHY2AYBaNgFJAD1IuIV8t67k0C0Yo53727RrRi7nfv3hJtNMc7EoxmXEeK0V6kGM0yavSo0aNGA40+RIrRz2mimBRnkORBUoJu1OBRg4eDwSRVmiRVxyRV9CQ1IUhqnDCYk9DsGQWjYBRgAQDR0LrPAemMCAAAAABJRU5ErkJggg==);
    background-size: 5.867vw;
    background-position: 87.733vw;
    background-repeat: no-repeat;
    box-sizing: border-box;
    overflow: hidden;
    > span:nth-child(1) {
      width: 16vw;
      height: 16vw;
      margin-left: 5.333vw;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    > span:nth-child(2) {
      margin-left: 4.267vw;
      width: 60.8vw;
      height: 4.667vw;
      line-height: 4.667vw;
      font-size: 4.267vw;
      font-weight: 500;
      color: #fff;
    }
  }
}
</style>