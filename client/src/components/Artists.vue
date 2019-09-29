<template>
  <div id="artists">
    <div class="title">艺术家</div>
    <div class="artists-item" v-for="(item,index) in artists" :key="index">
      <img :src="item.url" />
      <div class="name">{{item.name}}</div>
    </div>
   
  </div>
</template>
<script>

export default {
  name:'Artists',
  data:function(){
    return {
      artists:[
        {url:'https://imoongo.com/wp-content/uploads/2018/06/Elizaveta.jpg',name:'geshou'},
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
        },
         {url:'https://imoongo.com/wp-content/uploads/2018/06/Elizaveta.jpg',name:'geshou'},
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
      ]
    }
  }
}
</script>

<style scoped>
@import url(../assets/Artists.css);

</style>
