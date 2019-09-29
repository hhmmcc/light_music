<template>
  <div class="box">
    <div class="head">
      <div class="head1">动态</div>
      <div class="head2">
        <div class="head2box">
          <div class="head2child1">所有成员</div>
          <div class="head2child2">2,443</div>
        </div>
      </div>
      <div class="head3">
        <div class="head3child1">RSS</div>
        <div class="head3box">
          <div class="head3child2">显示 ：</div>
          <div class="head3child3">
            <select class="select" @change='fun6'>
              <option value="0">—所有—</option>
              <option value="1">新成员</option>
              <option value="2">个人资料更新</option>
              <option value="3">更新</option>
              <option value="3">评论</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isid==0">
    <div  class="body" v-for="(items,index) in list" :key="index">
      <div class="body1">
        <img
          src="https://imoongo.com/wp-content/uploads/avatars/1/5b7656b32d928-bpthumb.png"
          alt="标志"
          class="img"
        />
        <div class="content1">乐航 撰写了一篇新博客文章:</div>
        <div class="content2">{{items.time}}</div>
      </div>
      <div class="body2">
        <div class="title1">[轻音乐创作背景]</div>
        <div class="title2">[轻音乐感悟随笔]</div>
      </div>
      <div class="body3">
        <div class="content3">{{items.background}}</div>
        <div class="content4">{{items.sentiment}}</div>
        <img :src="items.url" alt="图片" class="img2" />
      </div>
    </div>
    </div>
     <div v-if="isid==3">
    <div  class="body" v-for="(items,index) in list" :key="index">
      <div class="body1">
        <img
          src="https://imoongo.com/wp-content/uploads/avatars/1/5b7656b32d928-bpthumb.png"
          alt="标志"
          class="img"
        />
        <div class="content1">乐航 撰写了一篇新博客文章:</div>
        <div class="content2">{{items.time}}</div>
      </div>
      <div class="body2">
        <div class="title1">[轻音乐创作背景]</div>
        <div class="title2">[轻音乐感悟随笔]</div>
      </div>
      <div class="body3">
        <div class="content3">{{items.background}}</div>
        <div class="content4">{{items.sentiment}}</div>
        <img :src="items.url" alt="图片" class="img2" />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      isid:0
    };
  },
  methods:{
    fun6 (e) {
         console.log(e.target.value)
         this.isid = e.target.value
    }
  },
  mounted(){
    this.axios.get("http://localhost:8081/dynamic").then(response=>{
      console.log(response.data)
      this.list = response.data
    })
  },
};
</script>
<style scoped>
@import url("../assets/dynamic.css");
</style>