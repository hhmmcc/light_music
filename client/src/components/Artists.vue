<template>
  <div id="artists">
    <div class="title">艺术家</div>
    <div class="artists-item" v-for="item in artistsList" :key="item.id">
      <img :src="item.artists_head" />
      <div class="name">{{item.artists_name}}</div>
    </div>
   
  </div>
</template>
<script>

export default {
  name:'Artists',
  data:function(){
    return {
      artistsList:null
    }
  },
  mounted(){
      this.axios.get('http://localhost:8081/artists').then((response) => {
        this.artistsList = response.data;
        console.log(this.artistsList);
      })
    },
}
</script>

<style scoped>
@import url(../assets/Artists.css);

</style>
