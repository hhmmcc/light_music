import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import "ant-design-vue/dist/antd.css"
import Antd from 'ant-design-vue'
Vue.use(VueAxios, axios);
Vue.use(Antd);
Vue.use(VueRouter);
import Dynamic from './components/Dynamic.vue'
import Member  from './components/Member.vue'
Vue.config.productionTip = false;
const routes = [
  {path:'/members',component:Member},
  {path:'/dynamic',component:Dynamic},
  
]
//对路由的实例化
const router = new VueRouter({
    routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
