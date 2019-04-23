<template>
<<<<<<< HEAD
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
=======
  <div class="home-view">
    <h1 class="home-title">
      短链接 | HOME
    </h1>
    <pre-nav></pre-nav>
>>>>>>> 62cc387ab43662bee6664c0a0cac1032957ec3ed
  </div>
</template>

<script>
<<<<<<< HEAD
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
=======
import PreNav from '../components/PreNav'
export default {
  components: {
    'pre-nav': PreNav
  },
  name: 'home',
  computed: {

  }
}
</script>

<style scoped lang="stylus">
  .home-title
    font-size 80px;
</style>
>>>>>>> 62cc387ab43662bee6664c0a0cac1032957ec3ed
