<template>
  <div class="box">
    <van-grid :clickable="true">
      <van-grid-item
        class="my"
        v-for="(item, index) in data"
        :text="item.title"
        :key="index"
        @click="fn(item.urlid)"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { id: "8", title: "有声小说", urlid: "10208722" },
        { id: "36", title: "相声曲艺", urlid: "10208723" },
        { id: "34", title: "两性情感", urlid: "10208724" },
        { id: "37", title: "音乐调频", urlid: "10208725" },
      ],
    };
  },
  methods: {
    fn(id) {
      this.$router.push(/radio_detail/ + id);
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  padding-top: 2vh;
}
</style>