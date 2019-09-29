<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: 'app',
    mounted () {
    this.$router.push('/find')  //不要加"."
  }
}
</script>

<style scoped>

</style>
