<template>
  <div class="home-view">
    <!-- <h1 class="home-title">
      短链接 | HOME
    </h1> -->
    <el-button>缩短地址</el-button>
    <el-button>地址加密</el-button>
    <el-button>地址还原</el-button>
    <qr-code :url="url"></qr-code>
    <!-- <input type="text" v-model="url" placeholder="输入以改变二维码"> -->
    <el-input type="text" v-model="url" placeholder="输入以改变二维码"></el-input>
    <el-button>生成地址</el-button>
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
  .home-view
    padding-top 70px
    width 100%

  .home-title
    font-size 80px;
</style>
