<template>
  <div id="app">
<MainView></MainView>
  </div>
</template>

<script>
import MainView from './components/MainView'
export default {
  name: 'app',
  components:{
    'MainView':MainView
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
