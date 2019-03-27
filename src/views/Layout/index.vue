<template>
  <el-container>
    <el-header>
      <AppHeader></AppHeader>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Navmenu></Navmenu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AppHeader from './header.vue'
import Navmenu from './aside.vue'
export default {
  name: 'layout',
  data () {
    return {}
  },
  components: {
    AppHeader,
    Navmenu
  }
}
</script>
<style scoped>

.el-header {
  background-color: #ccc;
  padding: 0;
}

.el-container {
  height: 100%;
  padding: 0;
}
.el-aside {
  height: 100%;
  background-color: #ccc;
}
.el-menu {
  height: 100%;
}
</style>
