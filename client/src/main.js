import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import Antd from 'ant-design-vue'
import 'element-ui/lib/theme-chalk/index.css';
import "ant-design-vue/dist/antd.css";
import StyleList from "./components/StyleList";
import Album from "./components/Album";
import PlayList from "./components/PlayList";
import Blog from "./components/Blog";
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(Antd);
// 定义状态管理器

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});

//定义路由，参数暂定为路由路径和组件名称
const routes = [
  {path:'/style',component:StyleList},
  {path:'/album',component:Album},
  {path:'/playlist',component:PlayList},
  {path:'/blog',component:Blog}
]

//对路由的实例化
const router = new VueRouter({
  routes
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
