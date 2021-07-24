<template>
  <div class="content">
    <div>
      <h1>404 - Page Not Found 未找到 {{ i }}秒后返回首页</h1>
      <dl>
        <dt>错误说明：请求的页面不存在</dt>
        <dt>原因1：访问的文档权限不够</dt>
        <dd>解决办法：</dd>
        <dd>修改文件权限为755，windos系统修改目录权限为可写可读。</dd>
        <dt>原因2：防火墙的原因</dt>
        <dd>解决办法：</dd>
        <dd>先关闭让防火墙通过WWW服务。</dd>
        <dt>原因3：站点根目录无默认访问文件</dt>
        <dd>解决办法：</dd>
        <dd>在根目录中创建index.html或者创建index.php。</dd>
        <dt>原因4：站点配置目录不正确</dt>
        <dd>解决办法：</dd>
        <dd>
          将网站应用程序复制到站点目录中，或者修改站点配置目录指定到应用程序目录中。
        </dd>
        <dt>原因5：站点使用了伪静态</dt>
        <dd>解决办法：</dd>
        <dd>
          将伪静态规则删除，或者重新编写正确的伪静态规则，或关闭伪静态配置。
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  timeid: null,
  data() {
    return {
      i: 3,
    };
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    this.timeid = setInterval(() => {
      if (this.i <= 0) {
        clearInterval(this.timeid);
        this.$router.replace("/");
      }
      this.i--;
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timeid);
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
  color: #3a87ad;
  font-size: 3vw;
}
.content {
  width: 80vw;
  margin: 0 auto;
  padding-bottom: 10vh;
}
.content > div {
  margin-top: 5vh;
  padding: 3vw;
  background: #d9edf7;
  border-radius: 3vw;
}
.content dl {
  color: #2d6a88;
  line-height: 5vh;
}
.content div div {
  padding-bottom: 20px;
  text-align: center;
}
</style>