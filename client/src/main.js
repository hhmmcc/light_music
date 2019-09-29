import Vue from 'vue';
//引入element框架
import ElementUI from 'element-ui';
//引入element框架中的css样式
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
//导入组件，为定义路由做准备
import Find from './components/Find'
import Artists from './components/Artists'
// 引入音频文件
// import audio from './assets/audio/风之颂.mp3'
Vue.use(VueRouter)
Vue.use(VueAxios, axios);
Vue.use(ElementUI);

// // 添加音频文件点击播放函数（全局方法）
// Vue.prototype.clickButton = () => {
//   let buttonAudio = document.getElementById('music');
//   buttonAudio.setAttribute('src',audio)
//   buttonAudio.play()
// }

// document.body.addEventListener('click',function( e ){
//   let event = e || window.event;
//   let target = event.target || event.srcElement;
//   let clickMusic = target.getAttribute('clickMusic')
//   if(clickMusic==='true') Vue.prototype.clickButton()
//   else return false;
// })

const routes = [
  {path:'/find',component:Find},
  {path:'/artists',component:Artists}
]
const router = new VueRouter({
    routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
