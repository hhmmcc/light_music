<template>
  <div id="app">
 <Album></Album>
  </div>
</template>

<script>

// import StyleList from './components/StyleList';
import Album from './components/Album';
export default {
  name: 'app',
  components:{
    // 'StyleList':StyleList,
    'Album':Album
  }
}
</script>

<style>
body{
  width: 100%;
  height: 100%;
  background: #F2F4F8;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: auto;
}
</style>
