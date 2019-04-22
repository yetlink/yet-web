<template>
  <div class="pre-nav-view">
    <span class="link-item">
      <router-link to="/home">首页</router-link>
    </span>
    <span class="link-item">
      <router-link to="/ment">报表</router-link>
    </span>
    <span class="link-item">
      <a href="#" @click="testGlobalInformation">全局信息测试</a>
    </span>
  </div>
</template>

<script>
import { show } from '../components/GlobalInformationContainer'

/**
 * 仅做测试使用
 * @author hello-acuario
 */
export default {
  components: {},
  name: 'pre-nav',
  computed: {

  },
  methods: {
    testGlobalInformation: () => {
      show('hello world(两秒后消除)')
    }
  }
}
</script>

<style scoped lang="stylus">
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
