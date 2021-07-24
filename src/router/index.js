import Vue from 'vue'
import VueRouter from 'vue-router'

// webpack中提供一个自动读取文件目录和文件
let moduleFn = require.context('./routes', false, /\.js$/)
// key方法返回此目录中文件列表，数组
let routes = moduleFn.keys().reduce((p, c) => {
  let m = moduleFn(c).default
  if (m) {
    if (Array.isArray(m)) {
      p = p.concat(m)
    } else {
      p.push(m)
    }
  }
  return p
}, [])


Vue.use(VueRouter)

const router = new VueRouter({
  // 开发环境中用history，生产环境用 hash
  // npm run serve  开发环境
  // npm run build  生产打包
  // 环境判断
  mode: process.env.NODE_ENV === 'development' ? 'history' : 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
