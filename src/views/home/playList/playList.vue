<template>
  <div>
    <!-- 歌单 -->
    <div class="playList">
      <div class="playList_head Cheader">
        <p>推荐歌单<span @click="detail('playlist')">更多></span></p>
      </div>
      <div class="playList_body recommidList">
        <ul>
          <li
            v-for="(item, index) in this.data.playlist_list
              ? this.data.playlist_list
              : {}"
            :key="index"
            @click="fn('playlist_detail', item.id)"
          >
            <div class="top">
              <img v-lazy="item.pic ? item.pic : ''" />
              <div class="pic">
                <span>
                  <van-icon name="play" color="whitesmoke" size="1.3rem"
                /></span>
                <p>
                  {{
                    item.count_play > 10000
                      ? (item.count_play / 10000).toFixed(1) + "w"
                      : item.count_play
                  }}
                </p>
              </div>
            </div>
            <div class="bottom">
              <p class="p1">{{ item.name }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      playList: [{}],
    };
  }, //data
  computed: {
    ...mapState("home", ["data"]),
  },

  mounted() {
    // await this.gethomeData();
    // this.playList = this.data.playlist_list;
  },
  methods: {
    ...mapActions("home", ["gethomeData"]),
    fn(res, ret) {
      this.$router.push(res + "/" + ret);
    },
    detail(res) {
      this.$router.push(res);
    },
  },
};
</script>

<style lang="scss" scoped>
/* 推荐歌单 */
.playList {
  width: 100vw;
  min-height: 20vh;
  background-color: #f9fafb;
}
.recommidList ul {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 4.5vw;
}
.recommidList ul li {
  margin-bottom: 4.8vw;
}
.recommidList ul li .top {
  width: 28vw;
  height: 28vw;
  border-radius: 4.267vw;
  margin-right: 3.3vw;
  overflow: hidden;
  position: relative;
}
.recommidList ul li:nth-child(3n) .top {
  margin-right: 0;
}
.recommidList ul li .top > img {
  width: 100%;
  height: 100%;
}
.recommidList ul li .top .pic {
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  border-radius: 0 4.267vw 0 4.267vw;
  width: 18vw;
  height: 7.6vw;
  background-color: rgba(0, 0, 0, 0.3);
}
.recommidList ul li .top .pic > span {
  position: absolute;
  top: 1vw;
  left: 1vw;
}
.recommidList ul li .top .pic > p {
  padding-left: 7vw;
  color: white;
  margin-top: 2vw;
  font-size: 3vw;
}
.recommidList ul li .bottom {
  width: 26.533vw;
  margin-top: 2.667vw;
  font-size: 3.733vw;
  font-weight: 400;
  color: #262338;
  line-height: 5.333vw;
}
.recommidList ul li .bottom .p1 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}
.p2 {
  font-size: 3vw;
  color: #a1a4b3;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 15vw;
}
.Cheader {
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  padding-left: 4.267vw;
  padding-right: 4.133vw;
  justify-content: space-between;
  margin-bottom: 3.467vw;
  align-items: center;
}
.Cheader p {
  width: 95vw;
  font-size: 5.333vw;
  font-weight: 700;
  color: #262338;
  line-height: 7.467vw;
}
.Cheader > p > span {
  margin-left: 0.667vw;
  width: 20vw;
  text-align: center;
  display: block;
  float: right;
  color: #a1a4b3;
  font-weight: 0;
  font-size: 4vw;
}
</style>