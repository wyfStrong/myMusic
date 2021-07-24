<template>
  <div class="head" v-if="boolean">
    <ul>
      <li v-if="bool" class="leftLi">
        <van-cell is-link @click="showPopup" class="vanCell">
          <van-icon name="wap-nav" class="vanIcon" />
        </van-cell>
        <van-popup
          v-model="show"
          position="left"
          closeable
          open-icon="wap-nav"
          :style="{ height: '100%', width: '70%' }"
        >
          <div class="top">
            <div class="box">
              <span></span>
              <p @click="gourl('/login')">登录 /</p>
              <p @click="gourl('/register')">注册</p>
            </div>
          </div>
          <div class="content">
            <van-sidebar v-model="activeKey">
              <van-sidebar-item
                v-for="(item, index) in data"
                :key="index"
                class="mysidebar"
              >
                <template #title>
                  <van-icon :name="item.name" size="1.5rem" class="vanIcons" />
                  <span class="sp">{{ item.value }}</span>
                </template>
              </van-sidebar-item>
            </van-sidebar>
          </div>
        </van-popup>
      </li>
      <li v-if="!bool" class="leftLi">
        <!-- <van-nav-bar left-arrow @click-left="onClickLeft">
        </van-nav-bar> -->
        <van-icon name="arrow-left" @click="onClickLeft" class="leftIcon" />
      </li>
      <li class="rightLi">
        <input type="text" placeholder="输入想搜索的内容" @click="changeUrl" />
      </li>
      <li class="lastLi"><van-icon name="add-o" /></li>
    </ul>
  </div>
</template>

<script>
// import { Toast } from "vant";
// import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      show: false,
      bool: false,
      activeKey: 0,
      boolean: true,
      data: [
        { name: "user-o", value: "个性皮肤" },
        { name: "vip-card-o", value: "会员中心" },
        { name: "goods-collect-o", value: "免流量畅听" },
        { name: "shop-o", value: "酷我商城" },
        { name: "service-o", value: "热门彩铃" },
        { name: "scan", value: "扫一扫" },
        { name: "music-o", value: "听歌识曲" },
        { name: "flower-o", value: "青少年模式" },
        { name: "records", value: "帮助和反馈" },
      ],
    };
  },
  mounted() {
    this.$eventBus.$on("bool", (v) => {
      this.bool = v;
    });
    this.$eventBus.$on("boolean", (v) => {
      this.boolean = v;
      // console.log(v);
    });
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    gourl(res) {
      this.$router.push(res);
    },
    changeUrl() {
      this.$router.push("/search");
    },
  },
};
</script>
<style lang="scss" scoped>
.head {
  width: 100vw;
  height: 7vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fafb;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  // background-color: red;
  ul {
    width: 91vw;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: pink;
    li {
      color: gray;
    }
    .leftLi {
      width: 9vw;
      height: 5vh;
      //  background-color: plum;
      .van-cell,
      .leftIcon {
        display: flex;
        width: 7vw;
        height: 5vh;
        font-size: 7vw;
        padding: 0;
        align-items: center;
        justify-content: center;
        background-color: #f9fafb;
      }
      .van-cell__right-icon {
        font-size: 7vw;
      }
    }
    .rightLi {
      flex: 1;
      height: 5vh;
      input {
        display: block;
        width: 100%;
        height: 5vh;
        border-radius: 3vh;
        border: 0;
        text-align: center;
        background: #f2f4f5;
      }
      input::-webkit-input-placeholder {
        color: rgb(204, 199, 199);
      }
    }
    .lastLi {
      width: 9vw;
      height: 5vh;
      line-height: 7vh;
      text-align: right;
      font-size: 5vw;
      //  background-color: red;
      .van-icon {
        font-size: 7vw;
      }
    }
  }
  .top {
    width: 100vw;
    height: 30vw;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    .box {
      width: 100%;
      box-sizing: border-box;
      padding: 0 5vw;
      display: flex;
      align-items: center;
      color: wheat;
      font-size: 5vw;
      span {
        display: block;
        width: 10vw;
        height: 10vw;
        background-color: white;
        border-radius: 5vw;
        margin-right: 3vw;
      }
    }
  }
  .content {
    width: 70vw;
    .van-sidebar {
      width: 70vw;
      .mysidebar {
        width: 70vw;
        .sp {
          font-size: 5vw;
          margin-left: 3vw;
        }
      }
    }
  }
}
</style>