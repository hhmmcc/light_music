import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import "ant-design-vue/dist/antd.css"
import Antd from 'ant-design-vue'
Vue.use(VueAxios, axios);
Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
