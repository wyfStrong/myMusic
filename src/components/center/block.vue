<template>
  <div>
    <div class="nav">
      <van-grid :column-num="3" :clickable="true">
        <van-grid-item
          v-for="value in data"
          :key="value.id"
          :icon="value.icon"
          :text="value.title"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { id: "1", icon: "music", title: "本地" },
        { id: "2", icon: "down", title: "下载" },
        { id: "3", icon: "clock-o", title: "最近播放" },
        { id: "4", icon: "like-o", title: "收藏" },
        { id: "5", icon: "award-o", title: "订阅" },
        { id: "6", icon: "after-sale", title: "已购" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  margin: 1vh 0;
  background-color: red;
}
</style>