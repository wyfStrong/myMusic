<template>
  <div>
    <Class></Class>
    <Mymain></Mymain>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Class from "@/components/radioComponents/Class.vue";
import Mymain from "@/components/radioComponents/Mymain.vue";
export default {
  components: { Class, Mymain },
  computed: {
    ...mapState("radio", ["radioData"]),
  },
  async mounted() {
    await this.getData();
    console.log(this.radioData);
  },
  methods: {
    ...mapActions("radio", ["getData"]),
  },
};
</script>

<style lang="scss" scoped>
</style>