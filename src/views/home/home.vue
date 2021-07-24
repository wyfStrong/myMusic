<template>
  <div>
    <!-- 轮播 -->
    <banner></banner>
    <!-- 排行榜 -->
    <rank></rank>
    <!-- 歌单 -->
    <playList></playList>
    <!-- 电台 -->
    <radio></radio>
  </div>
</template>

<script>
import banner from "@/views/home/banner/banner.vue";
import rank from "@/views/home/rank/rank.vue";
import playList from "@/views/home/playList/playList.vue";
import radio from "@/views/home/radio/radio.vue";
export default {
  components: {
    banner,
    playList,
    rank,
    radio,
  },
  data() {
    return {
      bool: true,
    };
  },
  // methods: {
  //   ...mapMutations("home", ["setpath"]),
  // },
  mounted() {
    this.bool = true;
    this.$eventBus.$emit("bool", this.bool);
  },
  beforeDestroy() {
    this.bool = false;
    this.$eventBus.$emit("bool", this.bool);
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #f9fafb;
}
</style>