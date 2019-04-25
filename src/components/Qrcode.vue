<template>
  <div class="qrcode-view">
    <qr-code :value="url" :options="{size:size, foreground:'#00A7FF', level: 'H'}" ref="qrcodeImg"></qr-code>
  </div>
</template>

<script>
import Qrcode from '@xkeshi/vue-qrcode'
import Logo from '../assets/img/logo.png'

export default {
  components: {
    'qr-code': Qrcode
  },
  name: 'qrcode',
  props: {
    url: {
      required: true,
      type: String
    },
    size: {
      type: Number,
      default: 200
    }
  },
  computed: {},
  methods: {
    drawLogo: function () {
      // 在二维码中央绘制logo
      const logoSize = 27

      const canvas = this.$refs.qrcodeImg.$el
      const ctx = canvas.getContext('2d')

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const getCenterX = (width) => centerX - width / 2
      const getCenterY = (height) => centerY - height / 2

      ctx.fillStyle = 'white'
      ctx.shadowColor = '#353535'
      ctx.shadowBlur = 6
      ctx.beginPath()
      ctx.arc(100, 100, logoSize - 7, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.fill()

      ctx.shadowColor = ''
      ctx.shadowBlur = 0
      const img = document.createElement('img')
      img.src = Logo
      img.onload = function () {
        ctx.drawImage(img, getCenterX(logoSize), getCenterY(logoSize), logoSize, logoSize)
      }
    }
  },
  mounted: function () {
    this.drawLogo()
  },
  updated () {
    this.drawLogo()
  }
}
</script>

<style scoped lang="stylus">
  .qrcode-view
    display flex
    justify-content center
</style>
