<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 搜索框 -->
    <el-row :gutter="30">
      <el-col :span="6">
        <el-input placeholder="请输入内容" v-model="searchText">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" round @click.prevent='addFormVisible=true'>添加</el-button>
      </el-col>
    </el-row>
    <!-- 表格数据 -->
    <el-table :data="tableData" stripe style="width: 100%" v-loading="tableLoading">
      <el-table-column type="index" :index="indexMethod"></el-table-column>
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
    </el-table>
    <!-- 用户添加的弹出框 -->
    <el-dialog title="添加用户" :visible.sync="addFormVisible" width="500px" >
      <el-form :model="addFormData" label-position='left' ref="addFormEl" :rules='addRules'>
        <el-form-item label="用户名" label-width="80px" prop='username'>
          <el-input v-model="addFormData.username" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px" prop='password'>
          <el-input v-model="addFormData.password" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="80px" prop='email'>
          <el-input v-model="addFormData.email" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="80px" prop="mobile">
          <el-input v-model="addFormData.mobile" autocomplete="off" ></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click.prevent="handleAdd">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script>
// import axios from 'axios'
import { getUserList, addUser } from '@/api/user'
export default {
  name: 'UserList',
  data () {
    return {
      tableData: [],
      searchText: '',
      addFormVisible: false,
      addFormData: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      tableLoading: true,
      addRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入电话', trigger: 'blur' }
        ]
      }
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
      this.tableLoading = false
    },
    handleAdd () {
      this.$refs.addFormEl.validate(async valid => {
        if (valid) {
          this.sumAdd()
        } else {
          alert('错误')
        }
      })
    },
    async sumAdd () {
      const { meta } = await addUser(this.addFormData)
      console.log(meta)
      if (meta.status === 201) {
        this.$refs.addFormEl.resetFields()
        this.addFormVisible = false
        this.loadUsers()
      }
    },
    indexMethod (index) {
      return index * 2
    }
  }
}
</script>
<style scoped>
.el-card {
  height: 100%;
}
.el-table {
  margin-top: 20px;
}
</style>
