<template>
  <div id="bg">
    <div class="header">
      <h3>{{list[0].name}}</h3>
    </div>
    <official></official>
    <div class="header">
      <h3>{{list[1].name}}</h3>
    </div>
    <feature></feature>
    <div class="header">
      <h3>{{list[2].name}}</h3>
    </div>
    <sence></sence>
    <div class="footer">这里到底啦</div>
  </div>
</template>

<script>
// 引入组件
import feature from './ui/feature.vue'
import official from './ui/official.vue'
import sence from './ui/sence.vue'
// 请求
import { getRankList } from '@/api/ranklist'
export default {
  data() {
    return {
      list: [{ name: '' }, { name: '' }, { name: '' }]
    }
  },
  components: {
    feature,
    official,
    sence
  },
  async mounted() {
    // 请求数据
    let a = await getRankList()
    this.list = a.data
    this.$eventBus.$emit('sendMsg', a.data)

    this.$eventBus.$emit('sendPid', this.list)
  }
}
</script>

<style lang="scss" scoped>
#bg {
  background-color: #f9fafb;
  .header {
    width: 100vw;
    font-size: 5.33vw;
    padding: 2vw 4vw;
    box-sizing: border-box;
    font-weight: 500;
    padding: 4vw;
  }
  .footer {
    text-align: center;
    font-size: 4.5vw;
    font-weight: 700;
    color: #ccc;
  }
}
</style>