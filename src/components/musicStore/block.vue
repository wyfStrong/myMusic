<template>
  <!-- 曲库 头部组件 -->
  <div class="boxfa">
    <van-grid :clickable="true" :border="false" :column-num="3">
      <van-grid-item
        v-for="(item, index) in data.playlist_list"
        :key="index"
        @click="gourl(item)"
      >
        <div class="fa">
          <img v-lazy="item.pic ? item.pic : ''" alt="" />
          <span> {{ item.name.substr(0, 4) }}</span>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("home", ["data"]),
  },
  async mounted() {
    await this.gethomeData();
  },
  methods: {
    ...mapActions("home", ["gethomeData"]),
    gourl(data) {
      this.$router.push("/playlist_detail/" + data.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.boxfa {
  min-height: 30vh;

  padding: 2vh 3vw;
}
img {
  width: 110%;
  height: 110%;
}
.fa {
  position: relative;
  border-radius: 3vw;
  overflow: hidden;
}
span {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #fff;
  font-weight: 1000;
  text-align: center;
}
</style>