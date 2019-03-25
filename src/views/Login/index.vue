<template>
  <div class="ass">
    <div class="box">
      <el-form label-position="top" label-width="80px" :model="LoginForm">
        <el-form-item label="用户名">
          <el-input v-model="LoginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="LoginForm.password"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click.prevent='onSubmit' class="theButton">登录</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
      return {
        labelPosition: 'right',
        LoginForm: {
          name: '',
          password: '',

        }
      };
    },
  methods:{
    onSumit () {}
  }
};
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
