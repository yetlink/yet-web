<template>
  <div class="statement-view">
    <h1 class="statement-title">
      报表
    </h1>
    <div class="statement-container">
      <div class="statement-nav">
        <span v-for="(item, index) in links" :key="item.id" :class="{'statement-nav-item':true, 'active':item.active}"
              @click="() => {onStatementItemClick(index)}">{{item.link}}</span>
      </div>
      <div class="statement-detail">
        <div class="link-info">
          <span class="history">https://www.kancloud.cn (长地址)</span>
          <span class="time">
            <span class="create-time">
              2019-4-20 创建
            </span>
            <span class="due">
              2019-4-30 到期
            </span>
          </span>
          <span class="lock">
            <img :src="require('../assets/img/lock.png')" alt="">
            <code>333</code>
            <img :src="require('../assets/img/pen.png')" alt="">
          </span>
          <span class="visible">
            <img :src="require('../assets/img/correct.png')" alt="">
            <h1>可用</h1>
          </span>
          <span class="qrcode">
            <qr-code url="123123123123" :size="200"></qr-code>
          </span>
        </div>
        <div class="link-detail">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import PreNav from '../components/PreNav'
import Qrcode from '../components/Qrcode'
export default {
  components: {
    // 'pre-nav': PreNav
    'qr-code': Qrcode
  },
  name: 'statement',
  data: () => ({
    links: new Array(60).fill({
      id: Math.random(),
      active: false,
      link: 'http://yet.link/71ols'
    })
  }),
  methods: {
    onStatementItemClick: function (currentIndex) {
      const newLinks = this.links.map(item => {
        return { ...item, active: false }
      })
      this.links = newLinks.map((item, index) => {
        if (index === currentIndex) {
          return { ...item, active: !item.active }
        }
        return item
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .statement-title
    font-size 80px
    text-align center

  .statement-container
    user-select none
    display flex
    width 70vw
    justify-content space-around
    height 70vh

    img
      width 37px
      height auto

    .statement-detail
      margin 17px
      flex 28
      background linear-gradient(-135deg, #72B2E0, #6080DD, #6065F1)
      border-radius 43px
      padding 43px
      display: flex
      overflow-y scroll

      .link-info
        flex 10
        padding-left 33px
        /*background-color red*/

        .history
          background-image url("../assets/img/history.png")
          font-family "PingFang SC"
          font-size 23px
          color rgba(255, 255, 255, 0.85)
          background-size 37px
          background-repeat no-repeat
          padding-left 47px

        .time
          display inline-flex
          flex-direction column
          margin 33px

          span
            font-family "PingFang SC"
            font-size 23px
            color rgba(255, 255, 255, 0.85)
            background-size 37px
            background-repeat no-repeat
            padding-left 47px
            padding-right 47px
            margin-top 13px

          .create-time
            background-image url("../assets/img/time.png")
            background-size 30px

          .due
            background-image url("../assets/img/pen.png")
            background-position-x right

        .lock
          display inline-flex
          justify-content space-around
          align-items center
          margin-left 33px

          code
            font-family "PingFang SC"
            font-size 23px
            color rgba(255, 255, 255, 0.85)
            margin-left  47px
            margin-right  47px

        .visible
          display inline-flex
          flex-direction column
          justify-content center
          align-items center
          margin-left 33px
          img
            width 200px
          h1
            font-family "PingFang SC"
            font-size 37px
            color rgba(255, 255, 255, 0.85)

        .qrcode
          display flex
          margin 33px

      .link-detail
        flex 15
        background-color blue

    .statement-nav
      margin 17px
      flex 10
      background linear-gradient(-135deg, #72B2E0, #7575DD, #A168E0)
      border-radius 43px
      padding 43px
      display: flex
      flex-direction column
      overflow-y scroll
      overflow-x visible

      .statement-nav-item
        display flex
        justify-content center
        align-items center
        background-color transparent
        padding 17px
        margin-top 17px
        margin-bottom 17px
        border-radius 43px
        color rgba(255, 255, 255, 0.85)
        font-size 19px
        font-family "PingFang SC"
        box-shadow 2px 2px 11px 0 rgba(75, 69, 69, 0.5)
        transition all ease-in .2s

      .active
        background-color #E5E9F7
        box-shadow 3px 3px 14px 0 rgba(75, 69, 69, 0.51)
        color rgba(95, 95, 95, 0.85)
        transform-origin left top
        transform scale(1.3)
</style>
