<template>
    <div class="blog">
        <h1 class="blogHead">博客</h1>
        <div class="blog-right">
            <div class="blogBox">
                <div class="imgBox">
                    <img src="https://imoongo.com/wp-content/uploads/2018/10/%E7%AD%89%E5%BE%85%E6%B8%A9%E9%A6%A8.jpg" alt="博客图片">
                </div>

                <div class="blogContent">
                    <header>
                      <h2>就想听听音乐，话话家常</h2>  
                        <div><i class="el-icon-timer"></i>发布于2018年12月21日   <i class="el-icon-user"></i>作者：乐航</div>
                    </header>
                    <div style="margin-top:10px">好久没更新啦，博友也催更了，今天抽空，写点文字，也让自己忙碌的心灵，小小的停留一下。  前段时间出差</div>
                    <div style="margin-top:10px"> <i class="el-icon-bicycle"></i>发表于博客  <i class="el-icon-bicycle"></i>新 加班, 梦想 名称  <i class="el-icon-s-comment"></i>2评论</div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    name:'Blog',
    props:{},

})
</script>
<style scoped>
@import url("../assets/Blog.css");
</style>