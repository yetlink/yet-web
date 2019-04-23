<template>
  <div id="app">
<<<<<<< HEAD
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
=======
    <router-view></router-view>
  </div>
</template>

<script>
import Service from './service/Service'
export default {
  components: {},
  name: 'app',
  created () {
    Service.login()
  }
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
>>>>>>> 62cc387ab43662bee6664c0a0cac1032957ec3ed
</style>
