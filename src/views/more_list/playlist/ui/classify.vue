<template>
  <div id="ranklist">
    <div class="listCon">
      <!-- layout布局 -->
      <van-row class="header">
        <van-col class="mycell" v-for="item in listData" :key="item.id" span="7">{{item.name}}</van-col>
        <van-col class="mycell" span="14">全部分类 ></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    // 拿listData数据
    ...mapState('playlist', ['listData']),
  },
}
</script>

<style lang="scss" scoped>
#ranklist {
  width: 100vw;
  .listCon {
    width: 100vw;
    .header {
      text-align: center;
      margin-top: 4vw;
      .mycell {
        margin: 1vw 0 1vw 3vw;
        background-color: #f7f7f7;
        height: 10.13vw;
        line-height: 10.133vw;
        border-radius: 2vw;
      }
    }
    ul {
      background-color: #f9fafb;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 135vw;
      li {
        display: flex;
        background-color: #fff;
        justify-content: left;
        align-items: center;
        box-sizing: border-box;
        width: 92vw;
        border-radius: 3vw;
        .img {
          width: 28vw;
          height: 28vw;
          padding: 0 4vw;
          border-radius: 3vw;
          margin-left: -3vw;
          margin-right: 1vw;
          img {
            width: 100%;
            height: 100%;
            border-radius: 4.267vw;
          }
        }
        .songCon {
          width: 60vw;
          padding: 4.5vw 0;
          p {
            font-size: 3.733vw;
            margin: 1vw 0;
          }
          ol {
            li {
              font-size: 3vw;
              width: 100%;
              color: #a1a4b3;
              padding: 1.1vw 0;
            }
          }
        }
      }
    }
  }
}
</style>