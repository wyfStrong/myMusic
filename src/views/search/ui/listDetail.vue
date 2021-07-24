<template>
  <div id="detail">
    <div class="album" v-for="item in this.listDetail.rcm" :key="item.id" @click="toAlbumDetail(item.id)">
      <div class="img">
        <img v-lazy="item.pic?item.pic:''" alt="">
      </div>
      <div class="right">
        <span>{{item.tag}}: </span><span>{{item.name}}</span>
      </div>
    </div>
    <div id="list">
      <van-list>
        <template v-for="(item) in this.listDetail.music">
          <div :key=item.id class="li" @click="toPlay(item.id)">
            <div class="con">
              <div class="songName">{{item.name}}</div>
              <span>{{item.artist_name}}-{{item.album_name}}</span>
            </div>
          </div>
        </template>
      </van-list>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    // 拿请求数据
    ...mapState('search', ['listDetail'])
  },
  methods: {
    toAlbumDetail(id) {
      this.$router.push('/album_detail/' + id)
    },
    toPlay(id) {
      this.$router.push('/play_detail/' + id)
    },
  }
}
</script>

<style lang="scss" scoped>
#detail {
  overflow: auto;
  .album {
    display: flex;
    width: 100vw;
    height: 16vw;
    margin: 3vw 0;
    align-items: center;
    .img {
      width: 16vw;
      height: 16vw;
      img {
        width: 100%;
        border-radius: 8vw;
      }
    }
    .right {
      margin-left: 4vw;
      font-size: 4.5vw;
    }
  }
  #list {
    .li {
      height: 17.33vw;
      display: flex;
      align-items: center;
      .con {
        flex: 1;
        display: flex;
        width: 60vw;
        flex-direction: column;
        .songName {
          font-size: 4.267vw;
          font-weight: 700;
          padding-bottom: 1.2vh;
          width: 70vw;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        span {
          font-size: 2vw;
          color: #a1a4b3;
          width: 90%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>