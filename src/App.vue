<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'app'
}
</script>

<style lang="stylus">
  *
    margin 0
    padding 0
    color #72B2E085

  #app
    width 100vw
    height 100vh
    display flex
    justify-content center
</style>
