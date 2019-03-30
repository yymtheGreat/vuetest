<template>
  <div class="ass">
    <div class="box">
      <el-form label-position="top" label-width="80px" :model="LoginForm" :rules="loginFormRules" ref='loginFormEl'>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="LoginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="LoginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.prevent="onSubmit" class="theButton">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api'
import { setToken } from '@/utils/auth.js'
export default {
  name: 'Login',
  data () {
    return {
      labelPosition: 'right',
      LoginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async onSubmit () {
      this.$refs.loginFormEl.validate((valid) => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    },
    async login () {
      const { meta, data } = await login(this.LoginForm)
      if (meta.status === 200) {
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        setToken(data.token)
        this.$router.replace('/')
      } else {
        this.$message({
          message: `${meta.msg}`,
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style scoped>
.ass {
  height: 100%;
  background-color: rgb(110, 110, 110) !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  border-radius: 20px;
  width: 500px;
  background-color: white;
  padding: 50px;
}
.theButton {
  width: 100%;
}
</style>
