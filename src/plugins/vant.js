import Vue from 'vue'
import {

  Slider,
  button,
  Icon,
  swipe,
  SwipeItem,
  ShareSheet,
  cell,
  Lazyload,
  Toast,
  List,
  Grid,
  GridItem,
  Loading,
  row,
  col,
  Popup,
  NavBar,
  Form,
  Field,
  Col,
  Row,
  Tab,
  Tabs,
  Search,
  Sidebar,
  SidebarItem,

} from 'vant'

[
  Slider,
  button,
  Icon,
  swipe,
  SwipeItem,
  ShareSheet,
  cell,
  Toast,
  List,
  Grid,
  GridItem,
  Loading,
  row,
  col,
  Popup,
  NavBar,
  Form,
  Field,
  Col,
  Row,
  Tab,
  Tabs,
  Search,
  Sidebar,
  SidebarItem,


].forEach(cmp => Vue.use(cmp))

// 图片懒加载
Vue.use(Lazyload, {
  preload: '1.3',
  attempt: 5,
  loading: process.env.VUE_APP_LAZY
})


// Vue.use(Button)
// Vue.use(Toast)
// Vue.use(Loading)