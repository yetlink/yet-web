<template>
  <div class="home">
    <h1 class="logo"><a href="javascript:;"><img src="./../assets/img/logo.png" alt=""></a></h1>
    <p class="url-box">
      <input type="text" class="url">
    </p>
    <p class="pwd-box">
      <img src="./../assets/img/lock.png" alt="">
      <input type="password" class="pwd">
    </p>
    <div class="btn-box">
      <a href="javascript:;">
        <i></i>
        <div class="prompt">
          按Enter来确认
        </div>
      </a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
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
    width 800px
    height 500px
    position absolute
    left 50%
    top 50%
    margin-left -400px
    margin-top -250px
    display flex
    align-items center
    flex-direction column
    .logo
      width 287px
      height 113px
    .url-box
      width 80%
      text-align center
      margin-top 40px
      .url
        width 90%
        height 24px
        border none
        background-color #f4f6fa
        border-bottom 3px solid #e9ebed
        color black
        box-sizing border-box
        padding-left 160px
        font-size 14px
    .pwd-box
      position relative
      width 40%
      text-align center
      margin-top 30px
      img
        position absolute
        top 3px
        left 20px
        height 20px
        width 20px
      .pwd
        width 90%
        height 24px
        border none
        background-color #f4f6fa
        border-bottom 3px solid #e9ebed
        color black
        box-sizing border-box
        padding-left 40px
        font-size 14px
    .btn-box
      height 60px
      display flex
      align-items center
      justify-content center
      margin-top 50px
      a
        width 40px
        height 40px
        border-radius 50%
        margin-right 20px
        &:nth-child(1)
          background url("./../assets/img/enter.png") no-repeat center center
          background-size 24px 24px
          background-color #a9d0e5
          position relative
          .prompt
            width 90px
            height 14px
            border-radius 10px
            background-color #d3edff
            position absolute
            top -20px
            left -20px
            font-size 12px
            color black
            text-align center
            line-height 14px
          i
            position absolute
            width 8px
            height 8px
            background-color #d3edff
            left 16px
            top -10px
            transform rotate(45deg)
            -ms-transform rotate(45deg)
            -moz-transform rotate(45deg)
            -webkit-transform rotate(45deg)
            -o-transform rotate(45deg)
        &:nth-child(2)
          background url("./../assets/img/box.png") no-repeat center center
          background-size 24px 24px
          background-color #a9d0e5
        &:nth-child(3)
          background url("./../assets/img/rutrun.png") no-repeat center center
          background-size 34px 34px
          background-color #a9d0e5

</style>
