<template>
  <div id="list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="(item,key) in list" :key=item.id>
        <div class="li" @click="toPlay(item.id,$event)">
          <div class="id">{{key+1}}</div>
          <div class="con">
            <div class="songName">{{item.name}}</div>
            <span>{{item.artist_name}}-{{item.album_name}}</span>
          </div>
          <div class="download">
            <van-icon name="down" />
          </div>
        </div>

      </div>
    </van-list>
  </div>
</template>

<script>
// 网络请求
import { getPlaylistDetail, download_simulate } from '@/api/ranklist'
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      i: 1,
      listdata: {},
      reqbool: true
    };
  },
  mounted() {
  },
  methods: {
    async onLoad() {
      let a = {}
      // 异步更新数据
      let id = this.$route.params.id
      a = await getPlaylistDetail(id, this.i)
      // 翻页
      this.i++
      // 将请求数据写入数据源,深拷贝
      this.list = [...this.list, ...a.data.musicList]
      // 将请求的图片信息等数据存储另一个数据源, 传给父组件
      this.listdata = a.data
      this.$eventBus.$emit('getPlayListDetail', this.listdata)
      // 数据源的length小于请求到的总数,数据没有全部加载完成,可以继续发送请求
      if (this.list.length < a.data.total) {
        // 加载状态结束
        this.loading = false;

      } else {
        // 数据全部加载完成
        this.finished = true;
      }


    },
    toPlay(id, e) {
      if (e.target.className == 'download') {
        // 下载
        // this.$axios.get('../../../public/download.php')
        // download_simulate()
        // window.location.href = '../../../public/download.mp3'
        console.log('download');
      } else {
        // 点击播放,跳转播放页面
        this.$router.push('/play_detail/' + id)
      }
    }
  },
};
</script>

<style lang="scss" scoped>
#list {
  overflow: hidden;
  .li {
    height: 17.33vw;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    .id {
      width: 16vw;
      text-align: center;
      font-weight: 700;
      font-size: 4.5vw;
      color: #a1a4b3;
    }
    .con {
      flex: 1;
      display: flex;
      width: 60vw;
      flex-direction: column;
      // justify-content: space-between;
      .songName {
        font-size: 4.267vw;
        font-weight: 700;
        padding-bottom: 1.2vh;
        width: 60vw;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      span {
        font-size: 2vw;
        color: #a1a4b3;
        width: 80%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .download {
      width: 12vw;
      color: #a1a4b3;
      font-weight: 700;
      font-size: 5vw;
    }
  }
}
</style>