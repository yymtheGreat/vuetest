<template>
  <el-row :gutter="0" class="app-dd">
    <el-col :span="4">
      <img src="./logo.jpg" alt class="logo">
    </el-col>
    <el-col :span="16">Fate Ground Order</el-col>
    <el-col :span="4">
      <el-button type='primary' @click="handleLogout">退出</el-button>
    </el-col>
  </el-row>
</template>
<script>
import { removeToken } from '@/utils/auth'
export default {
  name: 'AppHeader',
  methods: {
    handleLogout () {
      this.$confirm('你真的要离开吗 QAQ', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        removeToken()
        this.$router.replace('/login')
        this.$message({
          type: 'success',
          message: '再您马的见!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '哦 豁'
        })
      })
    }
  }
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
