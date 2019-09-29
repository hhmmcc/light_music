<template>
  <div class="box">
    <div class="head">
      <div class="head1">成员</div>
      <div class="head2">
        <div class="head2box">
          <div class="head2child1">所有成员</div>
          <div class="head2child2">{{number}}</div>
        </div>
      </div>
      <div class="mhead3">
        <div class="head3box">
          <div class="head3child2">排列方式：</div>
          <div class="head3child3">
            <select class="select">
              <option value="0">近期活动</option>
              <option value="1">最新注册</option>
              <option value="2">字母排序</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="head4">显示2,592位活跃成员中的1 - 10位</div>
    <div class="head5" v-for="(items,index) in list" :key="index">
      <img :src='items.URL' alt="头像" class="head5img" />
      <div class="head5div1">
        <div class="h5child1">{{items.title}}</div>
        <div class="h5child2">{{items.time}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      number:'null'
    }
  },
  mounted () {
    this.axios.get("http://localhost:8082/member").then(response => {
      console.log(response);
      this.list = response.data.member;
      this.number = response.data.number[0].number
    });
    }
};
</script>
<style scoped>
@import url("../assets/members.css");
</style>