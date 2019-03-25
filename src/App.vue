<template>
<div id="app">

    <!--路由出口-->
    <!-- <Login></Login> -->
    <router-view></router-view>
</div>
</template>
<script>
// import Login from './views/Login'
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {

  }
}
</script>

<style>
  #app{
    height: 100%;
  }
</style>
