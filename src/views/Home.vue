<template>
  <div class="home-view">
    <div class="logo"></div>
    <div class="history" v-show="key" >
      <span class="his-pic"></span>
      <span class="his-txt">{{this.hosurl}}</span>
    </div>
    <div class="box">
      <input type="text" class="ipt" v-model="urls.url" @focus="gethosurl" @keydown="enterdown">
      <div class="pswbox">
        <span class="lock"></span>
        <input type="Password" class="psw" v-model="urls.password">
      </div>
      <div class="Caution" v-show="key">
        <span class="Cautionlogo"></span>
        <span class="Cautiontxt">dad</span>
      </div>
     </div>
    <p class="pswk">asdfas</p>
    <div class="btnbox">
      <div class="etnbox">
      <i>按Enter确认</i>
      <span class="btn" @click="posturl"></span>
      <p>短link</p>
     </div>
     <div class="retbox">

      <span class="btn"></span>
      <p>报表</p>
     </div>
     <div class="rtubox">

      <span class="btn"></span>
      <p>还原</p>
     </div>
    </div>
  </div>
</template>

<script>
// import PreNav from '../components/PreNav'
// import HomeIetm from '../components/homeItem'
import Ajax from '../lib/Ajax'

export default {
  data () {
    return {
      key: false,
      urls: {
        url: '',
        password: ''

      },
      hosurl: ''
    }
  },
  created () {

  },
  methods: {

    enterdown (event) {
      if (event.keyCode === 13) {
        this.posturl()
      }
    },
    gethosurl () {
      let hosurl = window.localStorage.getItem('hosurl')

      if (hosurl) {
        this.hosurl = hosurl
        this.key = true
      } else {
        return false
      }
    },
    posturl () {
      let posturl = new Ajax()
      window.localStorage.setItem('hosurl', this.urls.url)
      posturl.post('/api/v1/create', this.urls)
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          alert(err.msg)
        })
    }

  },
  components: {

  },
  name: 'home',
  computed: {

  }
}
</script>

<style scoped lang="stylus">
  .home-view
    width 790px
    margin 100px auto
    font-size 80px;
  .logo
   width 230px
   height 85px
   margin 0 auto
   background url('../assets/img/logon.png')
   background-size 100%
  .home-view .history
   position relative
   padding 0 95px
   width 100%
   height 30px
   font-size 0
  .home-view .history .his-pic
   display inline-block
   width 30px
   height 30px
   background url('../assets/img/history.png')
   background-size 100%
  .home-view .history .his-txt
   position absolute
   top 0
   left 125px
   display inline-block
   height 30px
   font-size 16px
   color #aaaaaa
   line-height 30px
  .home-view .box
   position relative
   width 100%
   height 90px
   margin-top 3px
  .home-view .box .ipt
   box-sizing border-box
   position absolute
   width 100%
   height 30px
   background #f4f5fa
   top 0
   left 0
   border 0
   outline none
   padding 0 10px
   color #000000
  .home-view .box .pswbox

   position absolute
   top 45px
   height 30px
   width 370px
   left 170px
   border 2px solid #e9eaed
   background #f4f5fa
  .home-view .box .pswbox .lock
   display inline-block
   position absolute
   top 0
   left 0
   width 30px
   height 30px
   background url('../assets/img/lock.png')
   background-size 100%
  .home-view .box .pswbox .psw
    width 340px
    height 30px
    position absolute
    top 0
    left 30px
    border 0
    outline none
    background #f4f5fa
  .home-view .box .Caution
    position absolute
    top 45px
    left 544px
    width 100px
    height 30px
    border 2px solid #ffffff
  .home-view .box .Caution span
    position absolute
    top 0
    display inline-block
    height 30px
    line-height 30px
  .home-view .box .Caution span.Cautionlogo
   width 30px
   background url('../assets/img/Cautionlogo.png')
   background-size 100%
  .home-view .box .Caution span.Cautiontxt
   font-size 16px
   color #aaaaaa
   left 30px
  .home-view .pswk
   width 100px
   height 30px
   margin 0 auto
   font-size 18px
   color #91d553
   background url('../assets/img/correct.png')
   background-size 30px
   background-repeat no-repeat
   padding-left 35px
  .home-view .btnbox
   width 300px
   position relative
   height 100px
   margin 30px auto

  .home-view .btnbox div
   position absolute
   width 70px

   height 100px
  .home-view .btnbox div span
   position absolute
   top 30px
   display inline-block
   width 50px
   height 50px
   background #c1e7f9
   border-radius 50%;
   left 10px
   cursor pointer
   background-image url("../assets/img/enter.png")
   background-size 100%
  .home-view .btnbox div p
   position absolute
   display inline-block
   width 70px
   bottom 0
   font-size 16px
   color #000
   text-align center
  .home-view .btnbox div i
   display inline-block
   width 70px
   height 20px
   line-height 20px
   position absolute
   top 0
   background #d5eeff
   border-radius 4px
   font-size 12px
   color #000
  .home-view .btnbox div i::after
    content  ''
    display  block
    height  5px
    width  20px
    background  #d5eeff
    position  absolute
    top 20px
    left 50%
    margin-left -10px
    border-radius 0 0 100% 100%
  .home-view .btnbox div.retbox
   left 80px
  .home-view .btnbox div.retbox span.btn
   background-image  url('../assets/img/ret.png')
   background-size 100%
  .home-view .btnbox div.rtubox
   left 160px
  .home-view .btnbox div.rtubox span.btn
   background-image url("../assets/img/rutn.png")

</style>
