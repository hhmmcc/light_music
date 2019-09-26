<template>
  <div class="style">

      <div class="rightList">
        <ul >
          <li v-for="(item,index) in styleList" :key="index" @click="changeStyle(index)">
            <div class="list">{{item.style_name}}</div> <div class="list list1">{{item.num}}</div> 
          </li>
        </ul>
      </div>

      <div class="rightContent">
        <h1  class="title">{{title}}</h1>
        <!-- @mouseout="show1" -->
        <div  class="playContentBox"> 
          <div
           v-for="(item,index) in playList" :key="item.id"
           class="playBox" 
            @mouseover="show(index)" 
            v-on:mouseout="show1(index)"><img :src="item.img" alt="播放相应的图片" >
          <div v-show="playIndex == index"  class="playControl">
            <div class="audience"><i class="el-icon-headset"></i><span style="margin:0px 6px" title="播放次数">{{item.audience}}</span></div>
            <div class="playButton"><i @click="play(index)" :class="isPlay==index?'el-icon-video-pause':'el-icon-video-play'"></i></div>
            <div class="playSong">{{item.name}}</div>
          </div>
            <audio class="bgMusic">
            <source :src="item.audio" type="audio/mp3">
            </audio>
          </div> 
        </div>


      </div>

  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: 'StyleList',
  props: {
    msg: String
  },
  data(){
    return{
      isPlay:null,
      isShow:false,
      playIndex:null,
      listIndex:0,
      styleList:[],
      playList:[],
      title:"聆听曲风轻音乐、纯音乐"
    }
  },
  mounted(){
    Vue.axios.get('http://localhost:8081/style').then((response) => {
      this.styleList = response.data[0].songStyle;
      this.playList = this.styleList[this.listIndex].styleList;
      window.console.log(this.playList);
    });
  },
  methods:{
    play(index){
       let audio = document.getElementsByClassName("bgMusic")[this.playIndex];
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
    changeStyle(index){
      this.listIndex = index;
      this.playList = this.styleList[this.listIndex].styleList;
      this.title = this.styleList[this.listIndex].styleList[0].title;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/StyleList.css');

</style>
