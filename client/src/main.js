import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
