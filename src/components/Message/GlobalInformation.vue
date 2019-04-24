<template>
  <div class="global-information-view">
    <span class="information-words">
      {{info}}
    </span>
  </div>
</template>

<script>
/**
   * 【实验】公共的信息展示组件，信息类别比如用户请求过于频繁的提醒，token过期的提醒，以及报错等
   *  该组件不被直接渲染，而是使用一些函数让其显示,就像console.log这样调用
   * @author hello-acuario
   */
const GlobalInformation = {
  components: {},
  name: 'global-information',
  props: {
    info: {
      type: String,
      required: true
    },
    id: {
      required: true
    }
  },
  computed: {},
  created: function () {
    setTimeout(() => {
      this.$emit('delete', this.id)
    }, 2000) // 两秒钟后消失 TODO 可配置的消失时间
  }
}
export default GlobalInformation
</script>

<style scoped lang="stylus">
  // 全局提示的样式在这里写
  .global-information-view
    width 100vw
    background  linear-gradient(to right, #A168E0, #7575DD, #72B2E0);
    position fixed
    top 0px
    padding 3px
    text-align center
    transition all ease-in .2s

    .information-words
      color: white
</style>
