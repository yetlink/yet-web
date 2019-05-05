<template>
  <div class="pre-nav-view">
  <el-menu 
    class="el-menu" mode="horizontal" 
    background-color="#FFF"
    text-color="#1E90FF"
    >
    <el-menu-item index="1">
      <router-link to="/home">首页</router-link> 
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/ment">报表</router-link> 
    </el-menu-item>
  </el-menu>

    <!-- <span class="link-item">
      <router-link to="/home">首页</router-link>
    </span>
    <span class="link-item">
      <router-link to="/ment">报表</router-link>
    </span> -->
    <span class="link-item">
      <a href="#" @click="testGlobalInformation">全局信息测试</a>
    </span>
  </div>
</template>

<script>
/**
 * 仅做测试使用
 * @author hello-acuario
 */
export default {
  components: {},
  name: 'pre-nav',
  data(){
      return{
          activeIndex:"1"
      }
  },
  computed: {

  },
  methods: {
    testGlobalInformation: function () {
      this.$message('hello world')
    }
  }
}
</script>

<style scoped lang="stylus">
  .el-menu 
    position fixed
    top 0
    width 100%
    height auto
    display flex
    justify-content center
    background url("../assets/img/logo.png") no-repeat
    background-size 50px 65px
    box-shadow: 5px 4px 5px #eeeeee;

  .el-menu-item
    padding 0
  
  .el-menu-item a
    display block
    height 60px
    padding 0 20px
    color #1e90ff;

  .router-link-active
    color #1e90ff!important;
    border-bottom 2px solid #409eff

  .el-menu--horizontal > .el-menu-item.is-active 
    border-bottom none
    color none
  
  .pre-nav-view
    display flex
    justify-content center
    margin-top 23px

  .link-item
    background-color white
    font-size 27px
    margin 17px
    box-shadow 2px 2px 6px 0 #B3A2A2
    border-radius 13px
    padding 7px
    transition all ease-in .2s

  .link-item:hover
    background-color aliceblue
</style>
