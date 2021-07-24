
<template>
  <div>
    <div class="center">
      <mytop></mytop>
      <mynav></mynav>
      <block></block>
      <mymain></mymain>
    </div>
  </div>
</template>

<script>
import mytop from "@/components/center/top.vue";
import block from "@/components/center/block.vue";
import mynav from "@/components/center/mynav.vue";
import mymain from "@/components/center/main.vue";
export default {
  components: { mytop, block, mynav, mymain },
};
</script>

<style lang="scss" scoped>
.center {
  padding-top: 2vh;
  background-color: rgb(249, 249, 249);
  min-height: 90vh;
}
</style>