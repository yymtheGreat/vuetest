<template>
  <el-row :gutter="0" class="app-dd">
    <el-col :span="4">
      <img src="./logo.jpg" alt class="logo">
    </el-col>
    <el-col :span="16">Fate Ground Order</el-col>
    <el-col :span="4">
      <a href>退出</a>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'AppHeader'
}
</script>
<style scoped>
.app-dd {
  display: flex;
  align-items: center;
}
.logo {
  width: 200px;
  height: 60px;
}
</style>
