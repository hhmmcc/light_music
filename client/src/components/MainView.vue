<template>
  <div id="box">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed" id="sider">
        <div class="logo1">
          <div class="logo1content">
            <div class="logo1contentchild">
              <a-icon type="customer-service" class="logo1icon" />
              <span v-if="!collapsed">银色乐航</span>
            </div>
          </div>
        </div>
        <div class="logo2" v-if="!collapsed">
          <span style="font-size:12px;color:#9FA6AA">发现音乐</span>
        </div>
        <a-menu id="sider2" mode="inline" :defaultSelectedKeys="['1']">
          <a-menu-item key="1" class="menuitem" @click="toFind">
            <a-icon type="bell" id="find" />
            <span>发现</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="bars" id="bars" />
              <span>风格</span>
            </span>
            <a-menu id="sider3" >
              <a-menu-item key="8" @click="toQuStyle(0)">
                <a-icon type="right" id="allinicon" />
                <span>曲风</span>
              </a-menu-item>
              <a-menu-item key="9" @click="toQuStyle(1)">
                <a-icon type="right" id="allinicon" />
                <span>心情</span>
              </a-menu-item>
              <a-menu-item key="10" @click="toQuStyle(2)">
                <a-icon type="right" id="allinicon" />
                <span>乐器</span>
              </a-menu-item>
              <a-menu-item key="11" @click="toQuStyle(3)">
                <a-icon type="right" id="allinicon" />
                <span>联想</span>
              </a-menu-item>
              <a-menu-item key="12" @click="toQuStyle(4)">
                <a-icon type="right" id="allinicon" />
                <span>场景</span>
              </a-menu-item>
            </a-menu>
          </a-sub-menu>

          <a-menu-item key="2" @click="toAlbum">
            <a-icon type="robot" id="robot" />
            <span>专辑</span>
          </a-menu-item>
          <a-menu-item key="3" @click="toArtists">
            <a-icon type="user" id="user" />
            <span>艺人</span>
          </a-menu-item>
          <a-menu-item key="4" class="menuitem" @click="toPlayList">
            <a-icon type="profile" id="profile" />
            <span>歌单</span>
          </a-menu-item>

          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="usergroup-add" id="usergroup-add" />
              <span>社区</span>
            </span>
            <a-menu id="sider3">
              <a-menu-item key="6">
                <a-icon type="right" id="allinicon" />
                <span @click="fun1">动态</span>
              </a-menu-item>
              <a-menu-item key="7">
                <a-icon type="right" id="allinicon" />
                <span @click="fun2">成员</span>
              </a-menu-item>
            </a-menu>
          </a-sub-menu>

          <a-sub-menu key="sub3">
            <span slot="title">
              <a-icon type="folder-open" id="folder-open" />
              <span>博客</span>
            </span>
            <a-menu id="sider3">
              <a-menu-item key="13">
                <a-icon type="project" id="project" />
                <span>记忆</span>
              </a-menu-item>
              <a-menu-item key="14">
                <a-icon type="euro" id="euro" />
                <span>留声</span>
              </a-menu-item>
            </a-menu>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <span slot="title">
              <a-icon type="file-add" id="file-add" />
              <span>关于</span>
            </span>
            <a-menu id="sider3">
              <a-menu-item key="15">
                <a-icon type="right" id="allinicon" />
                <span>大事</span>
              </a-menu-item>
              <a-menu-item key="16">
                <a-icon type="right" id="allinicon" />
                <span>我们</span>
              </a-menu-item>
              <a-menu-item key="16">
                <a-icon type="right" id="allinicon" />
                <span>产权</span>
              </a-menu-item>
              <a-menu-item key="16">
                <a-icon type="right" id="allinicon" />
                <span>地图</span>
              </a-menu-item>
            </a-menu>
          </a-sub-menu>
          <a-menu-item key="5" class="menuitem">
            <a-icon type="team" id="team" />
            <span>邻友</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #F2F4F8; padding:0" class="header">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="()=> collapsed = !collapsed"
          />
          <div class="item">
            <button class="button">
              <a-icon type="search" />
            </button>
            <input type="text" class="tt" placeholder="有首想听的歌..." />
          </div>
        </a-layout-header>
        <a-layout-content
          :style="{background: '#fff', minHeight: '280px' }"
          class="content"
        >
        <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
    <div class="footer">
      <div class="footer1">
        <a-icon type="user" class="footer1user" />
        <span class="footer1span">登录</span>
      </div>
      <div class="footer2">
        <a-icon type="backward" class="footer2icon1" />
        <a-icon
          :type="isshow? 'pause-circle' : 'play-circle'"
          class="footer2icon"
          @click="()=> {isshow = !isshow}"
        />
        <a-icon type="forward" class="footer2icon1" />
        <a-icon type="bars" class="footer2icon1" />
      </div>
      <div class="footer3">半城烟沙</div>
      <div class="footer4">
        <audio controls>
          <source
            src="http://182.140.219.17/amobile.music.tc.qq.com/C40000290u4q4A1gip.m4a?guid=7094485993&vkey=0415FE595CB831B013123D9E6BC5BEBF8878F0CFB87CD7DDD5E3A54D4AE6C538ADF11CB829813B6D17F36CAD8414717394D84C3F1EC7712D&uin=0&fromtag=66"
            type="audio/mpeg"
          />
        </audio>
      </div>
    </div>
  </div>
</template>
<script>
import { Layout, Icon } from "ant-design-vue";
import Vue from "vue";
Vue.component("a-layout", Layout);
export default {
  data() {
    return {
      collapsed: false,
      isshow: false
    };
  },
  props:{},
  components:{
  },
  methods:{
    toQuStyle(num){
      this.$store.state.count = num;
      this.$router.push(`/style`);
    },
    toAlbum(){
      this.$router.push(`/album`);
    },
    toPlayList(){
       this.$router.push(`/playlist`);
    },
    toFind(){
      this.$router.push(`/find`);
    },
    toArtists(){
      this.$router.push(`/artists`);
    },
    fun1(){
      this.$router.push('/dynamic')
    },
    fun2(){
      this.$router.push('/members')
    }
  }
};
</script>
<style scoped>
@import url("../assets/main.css");
</style>