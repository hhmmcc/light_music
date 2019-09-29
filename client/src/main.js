import Vue from 'vue';
//引入element框架
import ElementUI from 'element-ui';
//引入element框架中的css样式
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css";
//导入组件，为定义路由做准备
import Find from './components/Find'
import Artists from './components/Artists'
import StyleList from "./components/StyleList";
import Album from "./components/Album";
import PlayList from "./components/PlayList";
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(Antd);
Vue.use(VueRouter);
import Dynamic from './components/Dynamic.vue'
import Member  from './components/Member.vue'
Vue.config.productionTip = false;
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
  {path:'/find',component:Find},
  {path:'/artists',component:Artists},
  {path:'/members',component:Member},
  {path:'/dynamic',component:Dynamic}

]
//对路由的实例化
const router = new VueRouter({
    routes
})
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
