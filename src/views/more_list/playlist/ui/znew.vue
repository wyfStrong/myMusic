<template>
  <div>
    <div id="znew">
      <ul>
        <li v-for="item in newData.prettyList" :key="item.id" @click="toPlayListDetail(item.id)">
          <p>
            <van-icon name="play" />
            <span>{{item.count_play > 10000 ? (item.count_play/10000).toFixed(1) +'w' : item.count_play }}</span>
          </p>
          <div class="img">
            <img v-lazy="item.pic">
          </div>
          <div class="con">{{item.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    // 拿newData数据
    ...mapState('playlist', ['newData']),
  },
  methods: {
    toPlayListDetail(id) {
      this.$router.push('/playlist_detail/' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
#znew {
  width: 100vw;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      width: 45vw;
      height: 52vw;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: center;
      margin-top: 3vw;
      overflow: hidden;
      border-radius: 4.267vw;
      .con {
        width: 98%;
        margin-bottom: 5vw;
        border-radius: 4.267vw;
      }
      .img {
        width: 100%;
        height: 100%;
        margin: -1.5vw 3vw 0 4.5vw;
        img {
          width: 90%;
          margin: 2vw;
          border-radius: 4.267vw;
        }
      }
      p {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: left;
        position: absolute;
        bottom: 11vw;
        left: 0vw;
        margin-left: 2.7vw;
        color: #000;
        border-radius: 0 4vw 0 4vw;
        background-color: rgba(0, 0, 0, 0.3);
        padding-left: 1vw;
        font-weight: 700;
        color: #fff;
        padding-right: 1vw;

        span:first-of-type {
          display: block;
          font-size: 3.467vw;
          height: 8vw;
          line-height: 8vw;
        }
      }
    }
  }
}
</style>