<template>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :router='true'
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
              <el-menu-item index="/users"><i class="el-icon-setting"></i>用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
              <el-menu-item index="/roles"><i class="el-icon-setting"></i>角色列表</el-menu-item>
              <el-menu-item index="/rights"><i class="el-icon-setting"></i>权限列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
              <el-menu-item index="3-1"><i class="el-icon-setting"></i>商品列表</el-menu-item>
              <el-menu-item index="3-2"><i class="el-icon-setting"></i>分类参数</el-menu-item>
              <el-menu-item index="3-3"><i class="el-icon-setting"></i>商品分类</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
              <el-menu-item index="4-1"><i class="el-icon-setting"></i>订单列表</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
              <el-menu-item index="5-1"><i class="el-icon-setting"></i>数据报表</el-menu-item>
          </el-submenu>
        </el-menu>
</template>
<script>
export default {
  name: 'Navmenu',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>

</style>
