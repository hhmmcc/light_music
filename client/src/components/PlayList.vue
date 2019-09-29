<template>
  <div class="style">
     <div class="rightContent">
        <h1  class="title" style="margin-left:10px" >Playlist</h1>
        <!-- @mouseout="show1" -->
        <div  class="playContentBox"> 
         

          <div class="playBox1"
          v-for="(item,index) in playList" :key="item.id"
          >
          <div           
           class="playBox_1" 
            @mouseover="show(index)" 
            v-on:mouseout="show1(index)"><img :src="item.img" alt="播放相应的图片" >
          <div v-show="playIndex == index || isPlay==index"  class="playControl">
            <div class="audience"><i class="el-icon-headset"></i><span style="margin:0px 6px" title="播放次数">{{item.audience}}</span></div>
            <div class="playButton"><i @click="play(index,item.audio)" :class="isPlay==index?'el-icon-video-pause':'el-icon-video-play'"></i></div>
            <div class="playSong">{{item.name}}</div>
          </div>   
          </div> 

            <div class="playBoxBottom"> 
              <div class="headImg"><img :src="item.img" alt="作者头像"> </div>
              <div class="authorName">{{item.author}}</div>
              </div> 
            
          </div>

        </div>

      </div>
 
      <!-- 音频文件 -->
         <audio id="bgMusic">
            <source :src="audio1" type="audio/mp3">
         </audio>
        <!--  -->

  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: 'PlayList',
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
      title:"聆听曲风轻音乐、纯音乐",
      audio1:"",
      playIndex1:null
    }
  },
  mounted(){
    Vue.axios.get('http://localhost:8081/stylelist').then((response) => {
      this.styleList = response.data;
      this.playList = this.styleList;
      window.console.log(this.playList);
    });
  },
  methods:{
    play(index, src){
       let audio = document.getElementById('bgMusic');
       audio.src = src;
      if(this.isPlay==null){
        this.isPlay = index;
        this.playIndex = index;
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
@import url('../assets/PlayList.css');

</style>
