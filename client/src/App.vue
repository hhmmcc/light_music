<template>
  <div id="app">
   
<MainView></MainView>
 <!-- <router-view></router-view> -->
  </div>
</template>
<script>

import MainView from './components/MainView'
export default {
  name: 'app',
  components:{
    'MainView':MainView

  },
   mounted () {
    this.$router.push('/find')  //不要加"."
   }
}
</script>


<style scoped>
body{
  width: 100%;
  height: 100%;
  background: #F2F4F8;
}

 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  height: auto;
}

</style>
