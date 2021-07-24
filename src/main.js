import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局组件
import '@/components'
// 全局插件
import './plugins'

// vant组件
import './plugins/vant'

// css默认样式重置
import './assets/css/reset.css'



Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
