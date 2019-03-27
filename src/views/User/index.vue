<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      type="index"
      :index="indexMethod">
    </el-table-column>
    <el-table-column
      prop="username"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</el-card>
</template>
<script>
// import axios from 'axios'
import { getUserList } from '@/api/user'
export default {
  name: 'UserList',
      data() {
      return {
        tableData: []
      }
    },
  async created () {
    // 除了登陆接口，其他需要令牌验证
    this.loadUsers()
  },
  methods: {
    async loadUsers () {
      const { data } = await getUserList({})
      this.tableData = data.users
      console.log(data)
    },
    indexMethod(index) {
      return index * 2;
    }
  }
}
</script>
<style scoped>
  .el-card {
    height: 100%;
  }
</style>
