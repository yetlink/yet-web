import Vue from 'vue'
import GlobalInformationContainer from './GlobalInformationContainer'
const GlobalInformationContainerConstructor = Vue.extend(GlobalInformationContainer)

/**
 * 全局消息的Vue插件
 * 使用方法，在组件内部this.$message('sth...')
 * @type {{}}
 */
const Message = {}
Message.install = function (Vue, options) {
  const message = new GlobalInformationContainerConstructor()
  const container = document.createElement('div')
  container.id = 'global-info'
  document.body.appendChild(container)
  message.$mount('#global-info')

  Vue.prototype.$message = message.add
}
export default Message
