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
      <div v-for="(item,index) in imgs" :key="index" class="imgBox">
        <img :src="item" clickMusic='true' @click="playMusic" @mouseover="fun(index)" @mouseout="close"/>
        <div class="music" v-if="show==index">
          <!-- <audio src="../assets/audio/风之颂.mp3" id="music"></audio> -->
        </div>
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
        <div class="person" v-for="(item,index) in artist" :key="index">
          <img :src="item.url" />
          <span class="name">{{item.name}}</span>
        </div>
      </div>
      <!-- 猜你喜欢 -->
      <div class="col">
        <div class="artist">
          <span class="h3">猜你喜欢</span>
          <span>追寻时尚前沿...</span>
        </div>
        <div class="like-imgs">
          <div class="like-img-box" v-for="(item,index) in like_imgs" :key="index">
            <img v-bind:src="item" />
          </div>
        </div>
      </div>
      <!-- 全站TOP -->
      <div class="col station">
        <div class="artist">
          <span class="h3">全站TOP</span>
          <span>热门单曲</span>
        </div>
        <div class="sing" v-for="(item,index) in sings" :key="index">
          <div class="leftBox" @mouseover="fun(index)" @mouseout="close()" >
            <img
              :src="item.url"
            />
            <div class="opacity"  v-show="show==item.sing_id">
              <i :class="[play ? 'el-icon-video-pause' : 'el-icon-video-play']" @click="playMusic"></i>
            </div>
            <div class="audio">
              <audio id="bgm" src="../assets/audio/风之颂.mp3">
              </audio>  
            </div>
            <div class="sing-name">
              <span class="song-name">{{item.sing_name}}</span>
              <span class="singer-name">{{item.singer_name}}</span>
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
        <div class="img-box" v-for="(item,index) in  album_imgs" :key="index">
          <img :src="item.url" />
        </div>
      </div>
      <!-- 最新博客和评论 -->
      <div class="bottom-content">
        <div class="content-box">
          <div class="title">最新博客</div>
          <div class="content" v-for="(item,index) in blogs" :key="index">{{item}}</div>
        </div>
        <div class="content-box">
          <div class="title">近期评论</div>
          <div class="content" v-for="(item,index) in blogs" :key="index">{{item}}</div>
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
  </div>
</template>

<script>
export default {
  name: "Find",
  data: function() {
    return {
      play:false,
      show:null,
      imgs: [
        "https://imoongo.com/wp-content/uploads/edd/2019/09/%E6%98%A5%E3%82%88%E3%80%81%E6%9D%A5%E3%81%84-300x217.jpg",
        "https://imoongo.com/wp-content/uploads/edd/2019/09/%E9%A3%8E%E4%B9%8B%E9%A2%82.jpg",
        "https://imoongo.com/wp-content/uploads/edd/2019/09/%E8%A5%BF%E7%9A%AE%E5%A3%AB-%E6%B9%96%E5%BF%83%E4%BA%AD%E7%9C%8B%E9%9B%AA-300x162.jpg",
        "https://imoongo.com/wp-content/uploads/edd/2019/09/Memories-300x169.jpg",
        "https://imoongo.com/wp-content/uploads/edd/2019/09/%E9%9F%A6%E5%8D%93%E6%88%90-%E6%A2%A6%E5%B9%BB%E4%B9%8B%E5%A2%83-300x235.png",
        "https://imoongo.com/wp-content/uploads/edd/2019/09/%E6%B3%BC%E5%A2%A8%E6%BC%93%E6%B1%9F-300x155.jpg",
        "https://imoongo.com/wp-content/uploads/edd/2019/09/%E6%98%A5%E3%82%88%E3%80%81%E6%9D%A5%E3%81%84-300x217.jpg",
        "https://imoongo.com/wp-content/uploads/edd/2019/09/%E9%A3%8E%E4%B9%8B%E9%A2%82.jpg",
        "https://imoongo.com/wp-content/uploads/edd/2019/09/%E8%A5%BF%E7%9A%AE%E5%A3%AB-%E6%B9%96%E5%BF%83%E4%BA%AD%E7%9C%8B%E9%9B%AA-300x162.jpg",
        "https://imoongo.com/wp-content/uploads/edd/2019/09/Memories-300x169.jpg",
        "https://imoongo.com/wp-content/uploads/edd/2019/09/%E9%9F%A6%E5%8D%93%E6%88%90-%E6%A2%A6%E5%B9%BB%E4%B9%8B%E5%A2%83-300x235.png",
        "https://imoongo.com/wp-content/uploads/edd/2019/09/%E6%B3%BC%E5%A2%A8%E6%BC%93%E6%B1%9F-300x155.jpg"
      ],
      artist: [
        {
          url: "https://imoongo.com/wp-content/uploads/2017/10/1.png",
          name: "群星"
        },
        {
          url: "https://imoongo.com/wp-content/uploads/2017/11/sens.jpg",
          name: "巫娜"
        },
        {
          url:
            "https://imoongo.com/wp-content/uploads/edd/2019/09/%E6%B8%85%E5%B9%B3%E8%B0%83%EF%BC%88%E5%8F%A4%E7%AD%9D%E7%89%88%EF%BC%89-300x240.png",
          name: "荒芜"
        },
        {
          url:
            "https://imoongo.com/wp-content/uploads/2017/10/%E7%8F%AD%E5%BE%97%E7%91%9E.jpeg",
          name: "班得瑞"
        },
        {
          url:
            "https://imoongo.com/wp-content/uploads/edd/2019/09/%E8%9C%98%E8%9B%9B%E3%81%A8%E8%80%81%E5%A9%86%E3%81%A8%E5%B0%91%E5%A5%B3-300x225.jpg",
          name: "存在"
        },
        {
          url: "https://imoongo.com/wp-content/uploads/2017/10/1.png",
          name: "群星"
        },
        {
          url: "https://imoongo.com/wp-content/uploads/2017/10/1.png",
          name: "群星"
        }
      ],
      like_imgs: [
        "https://imoongo.com/wp-content/uploads/edd/2019/09/%E6%98%A5%E3%82%88%E3%80%81%E6%9D%A5%E3%81%84-300x217.jpg",
        "https://imoongo.com/wp-content/uploads/edd/2019/09/%E9%A3%8E%E4%B9%8B%E9%A2%82.jpg",
        "https://imoongo.com/wp-content/uploads/edd/2019/09/%E8%A5%BF%E7%9A%AE%E5%A3%AB-%E6%B9%96%E5%BF%83%E4%BA%AD%E7%9C%8B%E9%9B%AA-300x162.jpg",
        "https://imoongo.com/wp-content/uploads/edd/2019/09/Memories-300x169.jpg"
      ],
      sings:[
        {url:'https://imoongo.com/wp-content/uploads/edd/2019/03/%E8%8B%A5%E9%9B%A8-300x256.jpg',sing_name:'青花瓷',singer_name:'巫娜',sing_id:0},
        {url:'https://imoongo.com/wp-content/uploads/edd/2019/03/%E8%8B%A5%E9%9B%A8-300x256.jpg',sing_name:'青花瓷',singer_name:'巫娜',sing_id:1},
        {url:'https://imoongo.com/wp-content/uploads/edd/2019/03/%E8%8B%A5%E9%9B%A8-300x256.jpg',sing_name:'青花瓷',singer_name:'巫娜',sing_id:2},
        {url:'https://imoongo.com/wp-content/uploads/edd/2019/03/%E8%8B%A5%E9%9B%A8-300x256.jpg',sing_name:'青花瓷',singer_name:'巫娜',sing_id:3},
        {url:'https://imoongo.com/wp-content/uploads/edd/2019/03/%E8%8B%A5%E9%9B%A8-300x256.jpg',sing_name:'青花瓷',singer_name:'巫娜',sing_id:4},
      ],
      album_imgs:[
        {url:'https://imoongo.com/wp-content/uploads/2017/10/%E6%B6%9F%E6%BC%AA-300x267.jpg'},
        {url:'https://imoongo.com/wp-content/uploads/edd/2017/11/%E9%9B%AA%E5%8C%96%E7%B2%A7-300x184.jpeg'},
        {url:'https://imoongo.com/wp-content/uploads/2017/10/%E6%B6%9F%E6%BC%AA-300x267.jpg'},
        {url:'https://imoongo.com/wp-content/uploads/edd/2017/11/%E9%9B%AA%E5%8C%96%E7%B2%A7-300x184.jpeg'}
      ],
      blogs:[
        '年中小结随想',
        '写在2018年终，憧憬2019',
        '就想听听音乐，话话家常',
        '开启梦想',
        '写在一周年纪念日',
        '写在二周年纪念日',
        '开启梦想'
      ]
    };
  },
  methods:{
    // open:function(){
    //   let buttonAudio = document.getElementById('bgm');
    //   buttonAudio.play();
    // },
    // close:function(){
    //   let buttonAudio = document.getElementById('bgm');
    //   buttonAudio.pause();
    // },
    playMusic(){
      let bgm =document.getElementById("bgm")
      window.console.log('我发生了点击事件');
       bgm.play();//播放
      if(this.play){
        this.play = false;
        bgm.pause();//暂停
      }else{
        this.play = true;
        bgm.play();//播放
      }
    },
    fun:function(index){
      this.show = index;
    },
    close:function(){
       this.show = null;
    },
    mounted(){
      this.axios.get('http://localhost:8081/find').then((response) => {
        window.console.log(response)
      })
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../assets/Find.css");
</style>
