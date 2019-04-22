<template>
  <div class="home-view">
    <h1 class="home-title">
      短链接 | HOME
    </h1>
    <pre-nav></pre-nav>
  </div>
</template>

<script>
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
