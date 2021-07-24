<template>
  <div id="app">
    <myheader></myheader>
    <router-view class="view"></router-view>

    <!-- 底部导航 -->
    <pageFooter :id="nowPlay.id" :isPlay="isPlay"></pageFooter>
    <!-- <pageFooter></pageFooter> -->
    <audio
      ref="audio"
      :src="this.songUrl ? this.songUrl : ''"
      controls
      style="display: none"
    ></audio>
  </div>
</template>


<script>
import pageFooter from "@/components/pageFooter/index.vue";
import myheader from "@/components/pageHeader/pageHeader.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    pageFooter,
    myheader,
  },
  computed: {
    ...mapState("playPage", ["nowPlay", "songUrl", "isPlay"]),
  },
  mounted() {
    this.setAudio(this.$refs.audio);
  },
  methods: {
    ...mapMutations("playPage", ["setAudio"]),
  },
  computed: {
    ...mapState("playPage", ["nowPlay", "songUrl", "isPlay"]),
  },
  mounted() {
    this.setAudio(this.$refs.audio);
  },
  methods: {
    ...mapMutations("playPage", ["setAudio"]),
  },
};
</script>
<style lang="scss" scoped>
.view {
  margin-top: 5vh;
}
</style>
