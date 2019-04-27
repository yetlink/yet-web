<template>
  <div class="home">
    <div class="home-content">
      <h1 class="logo"><a href="javascript:;"><img src="./../assets/img/logo.png" alt=""></a></h1>
      <p class="url-box">
        <input type="text" class="url">
      </p>
      <p class="pwd-box">
        <span class="lock"></span>
        <input type="password" class="pwd">
      </p>
      <div class="btn-box">
        <span class="submit">
          <i></i>
          <span class="prompt">
            按Enter来确认
          </span>
        </span>
        <span class="report"></span>
        <span class="reduction"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    url: ''
  })
}
</script>

<style scoped lang="stylus">
  .home
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
    .home-content
      position relative
      top -80px
      width 60%
      display flex
      justify-content center
      align-items center
      flex-direction column
      p
        background-color #f4f6fa
        input
          width 100%
          padding 4px
          border none
          background none
          color black
          outline none
      .url-box
        width 80%
        margin-top 30px
        border-bottom 3px solid #e9ebed
      .pwd-box
        margin-top 10px
        position relative
        width 30%
        border 3px solid #e9ebed
        .pwd
          padding-left 24px
        .lock
          width 20px
          height 20px
          background url("../assets/img/lock.png") no-repeat
          background-size 20px 20px
          position absolute
          left 2px
          top 2px
      .btn-box
        width 30%
        height 40px
        margin-top 60px
        display flex
        justify-content space-around
        align-items center
        span
          width 40px
          height 40px
          border-radius 50%
          background-color #a9d0e5
          background-size 30px 30px
          background-repeat no-repeat
          background-position center center
        .submit
          background-image url("../assets/img/enter.png")
          position relative
          i
            position absolute
            top -6px
            left 14px
            width 0
            height 0
            border-width 6px 6px 0
            border-style solid
            border-color #a9d0e5 transparent transparent
          .prompt
            position absolute
            left -90%
            top -70%
            width 300%
            height 24px
            color #000
            text-align center
            line-height 24px
            font-size 12px
            border-radius 10px
        .report
          background-image url("../assets/img/box.png")
        .reduction
          background-image url("../assets/img/retrun.png")
</style>
