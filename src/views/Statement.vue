<template>
  <div class="statement-view">
    <h1 class="statement-title">
      短链接 | STATEMENT
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
  name: 'statement',
  computed: {

  }
}
</script>

<style scoped lang="stylus">
  .statement-title
    padding-top 70px
    font-size 80px;
</style>
