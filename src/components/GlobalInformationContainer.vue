<template>
  <div class="global-information-view-container">
    <global-info v-for="infoItem in info" :info="infoItem.info" @onDelete="onDelete" :id="infoItem.id"
                 :key="infoItem.id"></global-info>
  </div>
</template>

<script>
import Vue from 'vue'
import GlobalInformation from './GlobalInformation'

// 用于组件通信
const $event = new Vue()

/**
   * 公共信息的容器组件，直接被一下函数控制，并管理信息展示组件
   * @author hello-acuario
   * */
const GlobalInformationContainer = {
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
    }
  },
  created: function () {
    $event.$on('add-info', (info) => { // 监听新信息
      const oldInfo = this.info
      oldInfo.push({ info, id: Math.random() })
      this.info = oldInfo
    })
  }
}
export default GlobalInformationContainer // For using <template></template>. Don't use this.

const init = () => { // 初始化，插入dom，渲染新的用于显示全局信息的Vue实例到对应dom中，以实现不用直接渲染组件只需要调用给定函数，可以参考antd的全局message
  console.log('init-global-information')
  const container = document.createElement('div')
  container.id = 'global-info'
  document.body.appendChild(container)
  new Vue({ render: h => h(GlobalInformationContainer) }).$mount('#global-info')
}

/**
   * 全局显示配置的信息,5秒后消失
   * @param info {String} 要输出的信息
   */
export const show = (info) => {
  if (!document.getElementById('global-info') || !document.getElementById('global-information-view-container')) {
    init()
  }
  $event.$emit('add-info', info) // 触发新信息事件
}
</script>

<style scoped lang="stylus">

</style>
