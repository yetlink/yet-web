<template>
  <div class="home-view">
    <div class="logo"></div>
    <div class="urlbox">
       <div class="history">
           <i></i>
           <span>sdsdfsa</span>
       </div>
       <input type="text" class="inpurl">
       <div class="libox">
         <div class="pasbox">
         <i></i>
         <input type="password" class="pas">
       </div>
       <div class="Cautionbox">
         <i></i>
         <span>请输入密码</span>
       </div>
       </div>
       <div class="correctbox">
         <i></i>
         <span>超强强度</span>
       </div>
       <div class="btnbox">
         <div class="enterbox box">
           <span class="tip">按Enter来确认</span>
           <i class="bgpic"></i>
           <span class="txt">短link</span>
         </div>
         <div class="retbox box">
            <i class="bgpic" ></i>
           <span class="txt">报表</span>
         </div>
         <div class="rutnbox box">
            <i class="bgpic"></i>
           <span class="txt">还原</span>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
// import PreNav from '../components/PreNav'
// import HomeIetm from '../components/homeItem'
// import Ajax from '../lib/Ajax'

export default {

}
</script>

<style scoped lang="stylus">
 @import "../common/stylus/minxin.styl";
 .home-view
  display flex

  margin 0 auto
  flex-wrap wrap
  justify-content center
  flex-driection column
  .logo
   width 20vw
   height 13vh
   b-img('logon.png')
   margin 85px auto 0
   background-size 100% 100%
  .urlbox
   width 90vw
   display flex
   flex-wrap wrap
   font-size 0
   justify-content center
   .history
    width 80%
    height 40px
    display flex
    justify-content center
    i
     width 40px
     height 40px
     b-img('history.png')
     background-size 100% 100%
     display inline-block
    span
     display inline-block
     box-sizing border-box
     width 80%
     height 40px
     line-height 20px
     padding 10px
   .inpurl
    box-sizing border-box
    width 90%
    height 40px
    outline none
    background #f4f5fa
    border 0
    padding 0 90px
    line-height 40px
    border-bottom 8px #eaebee solid
   .libox
    width 70vw
    height 40px
    justify-content center
    display flex
    margin-top 10px
    .pasbox
     width 40vw
     height 40px
     display flex
     background #f4f5fa
     box-sizing border-box
     border 5px #eaebee solid
     i
        display inline-block
        width 30px
        height 30px
        b-img('lock.png')
        background-size 100% 100%
     .pas
        flex-grow 1
        border 0
        height 30px
        outline none
    .Cautionbox
     box-sizing border-box
     height 40px
     display flex
     padding 5px
     i
      width  30px
      height 30px
      display inline-block
      b-img('Cautionlogo.png')
      background-size 100% 100%
     span
      display inline-block
      height 30px
      line-height 30px
   .correctbox
    height 40px
    width 40%
    justify-content center
    display flex
    box-sizing border-box
    margin-top 10px
    padding 5px
    i
     display inline-block
     width 30px
     height 30px
     b-img('correct.png')
     background-size 100% 100%
    span
     line-height 30px
     color #86d143
   .btnbox
    width 60vw
    margin-top 10px
    height 100px
    display flex
    justify-content center

    .box
     width 10vw
     height 100px
     margin-right 40px

     box-sizing border-box
     padding 2px
     display flex
     flex-wrap  wrap
     justify-content center
     position relative
    .enterbox
     .tip
      width 90px
      height 20px
      background #c1e7f9
      font-size 12px
      text-align center
      line-height  20px
      border-radius 5px
      color #000
     .tip::after
      content  ''
      display block
      height  5px
      width 20px
      position absolute
      top 20px
      left 50%
      margin-left -10px
      background #c1e7f9
      border-radius 0 0 100% 100%
     .bgpic
        margin-top 5px
        display inline-block
        width 50px
        height 50px
        background #c1e7f9
        b-img('enter.png')
        background-size 100% 100%
        border-radius 50%
     .txt
      display inline-block
      width 90px
      height 20px
      text-align center
      font-size 16px
      color #000
    .retbox
     .bgpic
        margin-top 25px
        display inline-block
        width 50px
        height 50px
        background #c1e7f9
        b-img('ret.png')
        background-size 100% 100%
        border-radius 50%
     .txt
      display inline-block
      width 90px
      height 20px
      text-align center
      font-size 16px
      color #000
    .rutnbox
     .bgpic
        margin-top 25px
        display inline-block
        width 50px
        height 50px
        background #c1e7f9
        b-img('rutn.png')
        background-size 100% 100%
        border-radius 50%
     .txt
      display inline-block
      width 90px
      height 20px
      text-align center
      font-size 16px
      color #000

</style>
