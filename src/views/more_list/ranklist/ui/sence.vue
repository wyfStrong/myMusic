<template>
  <div id="feature">
    <ul>
      <li v-for="item in theList" :key="item.id" @click="toRankListDetail(item.sourceid)">
        <p>
          <span>{{item.pub}}</span>
          <span>
            <van-icon name="play-circle-o" />
          </span>
        </p>
        <div class="img">
          <img v-lazy="item.pic" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theList: {}
    }
  },
  mounted() {
    this.$eventBus.$on('sendMsg', arg => {
      // 将请求到的06月26日数据更处理格式为06-29
      arg[2].list.forEach(item => {
        // 判断是以月份开头的
        if ((item.pub.slice(0, 1) == '0') || (item.pub.slice(0, 1) == '1')) {
          item.pub = item.pub.slice(0, 2) + '-' + item.pub.slice(3, 5) + '更新'
        }
      })
      this.theList = { ...arg[2].list }
    })
  },
  methods: {
    // 路由跳转至榜单详情页
    toRankListDetail(id) {
      this.$router.push('ranklist_detail/' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
#feature {
  width: 100vw;
  margin-bottom: 10vw;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 30vw;
      height: 30vw;
      position: relative;
      .img {
        width: 100%;
        height: 100%;
        margin: -1.5vw 3vw 0 4.5vw;
        img {
          width: 90%;
          margin: 2vw;
          border-radius: 4.267vw;
        }
      }
      p {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        bottom: 4vw;
        left: 9vw;
        color: #fff;
        span:first-of-type {
          display: block;
          font-size: 2.667vw;
        }
        span:last-of-type {
          display: flex;
          width: 6vw;
          float: right;
          font-size: 6vw;
          margin-right: -5vw;
        }
      }
    }
  }
}
</style>