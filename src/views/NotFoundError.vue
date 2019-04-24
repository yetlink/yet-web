<template>
  <div class="not-found-error-view">
    <img :src="require('../assets/img/logo-with-words.png')" alt="" class="logo">
    <h1 class="not-found-error-words">404 | 找不到页面</h1>
    <router-link to="/home" class="back-home">回到首页</router-link>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'not-found-error',
  computed: {

  }
}
</script>

<style scoped lang="stylus">
  .not-found-error-view
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
    flex-direction column

    .logo
      width 17vw

    .not-found-error-words
      font-size 4.5vw

    .back-home
      padding-bottom 13vh
      font-size 1.5vw
</style>
