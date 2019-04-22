<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/home">
      <span class="d"></span>
      短link</router-link>|
      <router-link to="/ment">
      <span class="b"></span>
      报表</router-link>
    </div>

  </div>
</template>
<style lang="stylus">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
      span{
        display block;
        width 30px;
        height:30px;
      }
      .d{
        background-image:url('./assets/enter.png')
      }
    }
  }
}
</style>
