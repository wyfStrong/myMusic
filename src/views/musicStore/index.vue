<template>
  <!-- 曲库 -->
  <div>
    <!--顶部的块 -->
    <topBlock></topBlock>
    <!--下方列表 -->
    <List></List>
  </div>
</template>

<script>
import topBlock from "@/components/musicStore/block.vue";
import List from "@/components/musicStore/List.vue";
export default {
  components: {
    topBlock,
    List,
  },
};
</script>
<style lang="scss" scoped>
</style>