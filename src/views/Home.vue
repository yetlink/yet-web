<template>
  <div class="home-view">
    <h1 class="home-title">
      短链接 | HOME
    </h1>
    <qr-code :url="url"></qr-code>
    <input type="text" v-model="url" placeholder="输入以改变二维码">
    <pre-nav></pre-nav>
  </div>
</template>

<script>
import PreNav from '../components/PreNav'
import Qrcode from '../components/Qrcode'
export default {
  components: {
    'pre-nav': PreNav,
    'qr-code': Qrcode
  },
  name: 'home',
  data: () => ({
    url: ''
  })
}
</script>

<style scoped lang="stylus">
    .home-title
      font-size 80px;
</style>
