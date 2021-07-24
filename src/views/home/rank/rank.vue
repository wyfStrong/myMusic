<template>
  <div>
    <!-- 排行榜 -->
    <div class="rank">
      <div class="rankHead Cheader">
        <p>酷我排行榜<span @click="detail('ranklist')">更多></span></p>
      </div>
      <div class="rank_bottom">
        <ul>
          <li
            v-for="item in this.data.rank_list ? this.data.rank_list : {}"
            :key="item.type_id"
            @click="fn('ranklist_detail', item.type_id)"
          >
            <div class="rankLeft">
              <img v-lazy="item.pic_bg ? item.pic_bg : ''" />
              <img v-lazy="item.pic_icon ? item.pic_icon : ''" />

              <span><img v-lazy="item.pic_title ? item.pic_title : ''" /></span>
            </div>
            <div class="rankRight">
              <h1>{{ item.label ? item.label + ">" : "" }}</h1>
              <ul>
                <li v-for="(res, index) in item.list" :key="index">
                  {{ index + 1 + "." + res.album_name }}-{{ res.artist_name }}
                </li>
              </ul>
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
      rankList: [{}],
    };
  }, //data
  computed: {
    ...mapState("home", ["data"]),
  }, //computed
  methods: {
    ...mapActions("home", ["gethomeData"]),
    fn(res, ret) {
      this.$router.push(res + "/" + ret);
    },
    detail(res) {
      this.$router.push(res);
    },
  }, //methods
  mounted() {
    // await this.gethomeData();
    // this.rankList = this.data.rank_list;
  },
};
</script>

<style lang="scss" scoped>
.rank {
  width: 100vw;
  min-height: 20vh;
  box-sizing: border-box;
  background-color: #f9fafb;
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
  box-sizing: border-box;
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
.rank_bottom > ul > li {
  display: flex;
  width: 92vw;
  margin-left: 4.267vw;
  margin-right: 4.133vw;
  height: 28vw;
  background: #fff;
  border-radius: 4.267vw;
  margin-bottom: 4.133vw;
}
.rankLeft {
  width: 28vw;
  height: 28vw;
  border-radius: 4.267vw;
  overflow: hidden;
  position: relative;
}
.rankLeft > img {
  width: 28vw;
  height: 28vw;
  position: absolute;
  left: 0;
  top: 0;
}
.rankRight {
  margin-left: 5.6vw;
  padding-top: 3.6vw;
  padding-bottom: 3.6vw;
}
.rankRight h1 {
  display: flex;
  align-items: baseline;
  margin-bottom: 1.6vw;
}
.rankRight ul {
  display: block;
}
.rankRight ul li {
  font-size: 2.933vw;
  font-weight: 400;
  color: #a1a4b3;
  line-height: 4vw;
  margin-bottom: 0.933vw;
  width: 57.333vw;
  text-overflow: ellipsis;
  width: 53.333vw;
}
</style>