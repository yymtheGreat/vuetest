<template>
  <el-container>
    <el-header>
      <el-row :gutter="0" class="app-dd">
        <el-col :span="4">
          <img src="./logo.jpg" alt class="logo">
        </el-col>
        <el-col :span="16">Fate Ground Order</el-col>
        <el-col :span="4">
          <a href>退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
              <el-menu-item index="1-1"><i class="el-icon-setting"></i>用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
              <el-menu-item index="2-1"><i class="el-icon-setting"></i>角色列表</el-menu-item>
              <el-menu-item index="2-2"><i class="el-icon-setting"></i>权限列表</el-menu-item>
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
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'layout',
  data () {
    return {}
  },
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
.logo {
  width: 200px;
  height: 60px;
}
.el-header {
  background-color: #ccc;
  padding: 0;
}
.app-dd {
  display: flex;
  align-items: center;
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
