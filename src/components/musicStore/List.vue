<template>
  <div>
    <van-cell
      v-for="(item, index) in data"
      :icon="item.icon"
      :title="item.title"
      :value="item.val"
      :key="index"
      :clickable="true"
    >
    </van-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { icon: "gem", title: "会员专区", val: "畅想千万付费曲库" },
        {
          icon: "audio",
          title: "听书·电台",
          val: "郭德纲超清相声，我快笑死了",
        },
        { icon: "manager", title: "歌手", val: "最近谁又火了？赶快听听看！" },
        { icon: "bar-chart-o", title: "排行榜", val: "霸榜热歌，你都听过吗？" },
        { icon: "music", title: "歌单", val: "百因必有果，你要的歌单就是我" },
        { icon: "gift", title: "专区", val: "2021年最火歌曲全收录" },
        { icon: "live", title: "音乐电台", val: "2021爆火热歌500首一键听" },
        { icon: "play", title: "MV", val: "碧梨全新“小丧歌”MV" },
        { icon: "column", title: "畅销书", val: "网罗天下奇书畅听奇闻异事" },
        { icon: "play-circle", title: "唱片店", val: "S.K.Y天空少年新专上线" },
        {
          icon: "comment-circle",
          title: "唱·聊",
          val: "唱歌、语音直播都在这里！",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.van-cell__value {
  flex: 1.8;
}
</style>