<template>
  <div class="find">
    <div class="title">
      <span>最新发布</span>
      <div class="strips">
        <span class="bar1 public"></span>
        <span class="bar2 public"></span>
        <span class="bar3 public"></span>
        <span class="bar4 public"></span>
        <span class="bar5 public"></span>
      </div>
    </div>
    <!-- 图片 -->
    <div class="picture">
      <div v-for="item in findList.slice(1)" :key="item.id" class="imgBox" @mouseover="fun(item.id)" @mouseout="close">
        <img :src="item.img_url" clickMusic='true' @click="playMusic(item.id)" />
        <div class="opacity"  v-show="show==item.id||play==item.id">
              <i :class="[play==item.id ? 'el-icon-video-pause': 'el-icon-video-play']" @click="playMusic(item.id)"></i>
            </div>
        <!-- <div class="music" v-if="show==index">
          <!-- <audio src="../assets/audio/风之颂.mp3" id="music"></audio> -->
        <!-- </div> --> 
      </div>
    </div>
    <!-- 音乐 -->
    <div class="title music">音乐・润筑灵魂</div>
    <div class="login">
      <div class="left w48">
        <div class="login-top">
          <i class="el-icon-user icon"></i>登录或者创建一个iMoongo账户
        </div>
        <span>在线试听免费的轻音乐，登录iMoongo，留下你的足迹</span>
      </div>
      <div class="right w48">
        <div class="login-top">
          <i class="el-icon-sold-out icon"></i>发布你自己的音乐歌单
        </div>
        <span>响应性H5设计，把你用心制作歌单，分享给更多朋友</span>
      </div>
    </div>
    <!-- 热门艺术家   猜你喜欢   全站TOP -->
    <div class="total">
      <div class="col">
        <div class="artist">
          <span class="h3">热门艺术家</span>
          <span>总有您喜欢的艺术家</span>
        </div>
        <div class="person" v-for="(item,index) in findList" :key="index">
          <img :src="item.artist_img" />
          <span class="name">{{item.artist_name}}</span>
        </div>
      </div>
      <!-- 猜你喜欢 -->
      <div class="col">
        <div class="artist">
          <span class="h3">猜你喜欢</span>
          <span>追寻时尚前沿...</span>
        </div>
        <div class="like-imgs">
          <div class="like-img-box" v-for="(item,index) in findList.slice(0,4)" :key="index">
            <img v-bind:src="item.img_url" />
          </div>
        </div>
      </div>
      <!-- 全站TOP -->
      <div class="col station">
        <div class="artist">
          <span class="h3">全站TOP</span>
          <span>热门单曲</span>
        </div>
        <div class="sing" v-for="(item,index) in findList.slice(1)" :key="index">
          <div class="leftBox" @mouseover="fun(index)" @mouseout="close" >
            <img
              :src="item.artist_img"
            />
            <div class="opacity"  v-show="show==item.id-2">
              <i :class="[play==index ? 'el-icon-video-pause': 'el-icon-video-play']" @click="playMusic(index)"></i>
            </div>
            <div class="sing-name">
              <span class="song-name">青花瓷</span>
              <span class="singer-name">{{item.artist_name}}</span>
            </div>
          </div>
          <div class="sing-icon">
            <i class="el-icon-headset"></i>3
          </div>
        </div>
      </div>
    </div>
      <!-- 最新专辑 -->
      <div class="album">
      <div class="title">最新专辑</div>
          <div class="img-box" v-for="(item,index) in  findList.slice(4)" :key="index">
          <img :src="item.img_url" />
        </div>
      </div>
      <!-- 最新博客和评论 -->
      <div class="bottom-content">
        <div class="content-box">
          <div class="title">最新博客</div>
          <div class="blog-content" v-for="(item,index) in findList" :key="index">{{item.blog}}</div>
        </div>
        <div class="content-box">
          <div class="title">近期评论</div>
          <div class="blog-content" v-for="(item,index) in findList" :key="index">{{item.comments}}</div>
        </div>
      </div>
      <!-- 左亲右邻 -->
      <div class="bottom">
        <div class="title">左亲右邻</div>
        <div class="content-box">
          <div class="text">银色月航</div>
          <div class="text">明月清风</div>
          <div class="text">某柠檬</div>
        </div>
        <div class="address">Copyright © 2017-2019 iMoongo.com</div>
      </div>
      <!-- 音频 -->
      <audio id="music">
        <source src="../assets/audio/风之颂.mp3" type="audio/mp3">
      </audio>


  </div>
</template>

<script>
export default {
  name: "Find",
  data: function() {
    return {
      play:null,
      show:null,
      findList:null
    }
  },
   mounted(){
      this.axios.get('http://localhost:8081/find').then((response) => {
        this.findList = response.data;
      })
    },
  methods:{
    playMusic(index){
      let bgm =document.getElementById("music")
      window.console.log('我发生了点击事件');
      if(this.play==null){
        this.play = index;
        bgm.play();//播放
        
      }else{
        this.play = null;
        bgm.pause();//暂停
      }
    },
    fun:function(index){
      this.show = index;
    },
    close:function(){
       this.show = null;
    },
  }

};
</script>

<style scoped>
@import url("../assets/Find.css");
</style>
