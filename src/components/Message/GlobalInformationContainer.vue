<template>
  <div class="global-information-view-container">
    <transition name="fade">
      <global-info v-for="infoItem in info" :info="infoItem.info" @onDelete="onDelete" :id="infoItem.id"
                   :key="infoItem.id"></global-info>
    </transition>
  </div>
</template>

<script>
import GlobalInformation from './GlobalInformation'

/**
   * 全局消息的容器
   * @author hello-acuario
   * */
export default {
  components: {
    'global-info': GlobalInformation
  },
  name: 'global-information-view-container',
  data: () => ({
    info: [] // 保存所有正在显示的全局信息
  }),
  methods: {
    onDelete: function (idFromItem) {
      this.info = this.info.filter(({ id }) => !(id === idFromItem)) // 当子组件出发删除自己事件的时候，该父组件通过对应id移除
    },
    add: function (info) {
      const oldInfo = this.info
      oldInfo.push({ info, id: Math.random() })
      this.info = oldInfo
    }
  }
}
</script>

<style scoped lang="stylus">
  .fade-enter-active, .fade-leave-active
    transition: opacity .2s

  .fade-enter, .fade-leave-to
    opacity 0

</style>
