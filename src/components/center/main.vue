<template>
  <div>
    <div class="mian">
      <van-cell title="电台" is-link @click="fn1" />

      <van-cell title="小说" is-link @click="fn2" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fn1() {
      this.$router.push("/radio");
    },
    fn2() {
      this.$router.push("/radio");
    },
  },
};
</script>
<style lang="scss" scoped>
</style>