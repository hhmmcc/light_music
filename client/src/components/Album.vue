<template>
  <div class="style">
      <div class="rightContent">
        <h1  class="title">专辑</h1>
        <!-- @mouseout="show1" -->
        <div  class="playContentBox"> 
          <div
           v-for="(item,index) in playList" :key="item.id"
           v-show="index>5 && index<20"
           class="playBox" 
            @mouseover="show(index)" 
            v-on:mouseout="show1(index)"><img :src="item.img" alt="播放相应的图片" >
          <div v-show="playIndex == index || isPlay==index"  class="playControl">
            <div class="audience"><i class="el-icon-headset"></i><span style="margin:0px 6px" title="播放次数">{{item.audience}}</span></div>
            <div class="playButton"><i @click="play(index,item.audio)" :class="isPlay==index?'el-icon-video-pause':'el-icon-video-play'"></i></div>
            <div class="playSong">{{item.name}}</div>
          </div>
          </div> 
        </div>

      </div>
    <!-- 音频文件 -->
        <audio id="bgMusic">
            <source :src="audio" type="audio/mp3">
        </audio>
    <!-- 分割线   -->
    <div class="leftContent">
        <h4 class="youLike">猜你喜欢</h4>
        <div v-for="(item,index) in leftList"
            :key = "index" 
            class="leftList">
            <div class="smallImage" 
            @mouseover="isShow(index)"
            @mouseout="isShow1(index)">
            <img :src="item.img" alt="青石桥畔图片">
            <div v-show="show2==index || isChange==index" class="leftPlayBox"><i @click="playLike(index)" :class="isChange==index?'el-icon-video-pause':'el-icon-video-play'"></i></div>
            </div>
            <div class="leftListTitle">
                <div class="leftListTitleLfet"><p style="margin-bottom:10px">青石桥畔</p><p>冯硕</p></div>
                <div class="leftListTitleRight"><i class="el-icon-headset"></i><span style="margin:0px 6px" title="播放次数">39</span></div>
            </div>
        </div>

    </div>

  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: 'Album',
  props: {
    msg: String
  },
  data(){
    return{
      isPlay:null,
      playIndex:null,
      listIndex:0,
      styleList:[],
      playList:[],
      audio:"",
      isChange:null,
      show2:null,
      leftList:[{img:"https://imoongo.com/wp-content/uploads/edd/2019/02/青石桥畔-150x150.jpg"},
      {img:"https://imoongo.com/wp-content/uploads/edd/2019/02/青石桥畔-150x150.jpg"},
      {img:"https://imoongo.com/wp-content/uploads/edd/2019/02/青石桥畔-150x150.jpg"},
      {img:"https://imoongo.com/wp-content/uploads/edd/2019/02/青石桥畔-150x150.jpg"},
      {img:"https://imoongo.com/wp-content/uploads/edd/2019/02/青石桥畔-150x150.jpg"},
      {img:"https://imoongo.com/wp-content/uploads/edd/2019/02/青石桥畔-150x150.jpg"},
      {img:"https://imoongo.com/wp-content/uploads/edd/2019/02/青石桥畔-150x150.jpg"},]
    }
  },
  mounted(){
    Vue.axios.get('http://localhost:8081/stylelist').then((response) => {
      this.styleList = response.data;
      this.playList = this.styleList;
    });
  },
  methods:{
    play(index,src){
       let audio = document.getElementById('bgMusic');
            audio.src = src;
      if(this.isPlay==null){
        this.isPlay = index;
        audio.play();
      }else{
        this.isPlay = null;
        audio.pause();
      }
    },
    show(index){
      this.playIndex = index;
    },
    show1(index){
      if(this.isPlay==index){
        this.playIndex = index;
        
      }
      if(this.isPlay!=index){
         this.playIndex = null;
      }
    },
    playLike(index){
        if(this.isChange==null){
            this.isChange=index;
        }else{
            this.isChange=null;
        }
    },
    isShow(index){
        console.log(index);
        this.show2 = index;
    },
    isShow1(index){
        if(this.isChange==index){
            this.show2 = index;
        }else{
            this.show2 = null;
        }
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/Album.css');

</style>