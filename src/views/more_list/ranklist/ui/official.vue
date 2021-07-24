<template>
  <div id="ranklist">
    <div class="listCon">
      <ul>
        <li v-for="item in theList.list" :key="item.id" @click="toRankListDetail(item.sourceid)">
          <div class="img">
            <img v-lazy="item.pic" alt="">
          </div>
          <div class="songCon">
            <p>
              {{item.name}}>
            </p>
            <ol>
              <li v-for="(val,key) in item.music_list" :key="val.id"><span>{{key+1}}.</span>{{val.name}} - {{val.artist_name}}</li>
            </ol>
          </div>
        </li>
      </ul>
    </div>
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
      this.theList = { ...arg[0] }
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
#ranklist {
  width: 100vw;
  .listCon {
    width: 100vw;
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