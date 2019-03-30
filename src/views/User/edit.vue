<template>
  <el-dialog title="编辑用户" :visible.sync="formVisible" width="500px" >
    <el-form :model="editForm" label-position='left' ref="addFormEl" :rules='addRules'>
      <el-form-item label="用户名" label-width="80px" prop='username'>
        <el-input v-model="editForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" label-width="80px" prop='email'>
        <el-input v-model="editForm.email" autocomplete="off" ></el-input>
      </el-form-item>
      <el-form-item label="电话" label-width="80px" prop="mobile">
        <el-input v-model="editForm.mobile" autocomplete="off" ></el-input>
      </el-form-item>
    </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="formVisible = false">取 消</el-button>
        <el-button type="primary" @click.prevent="handlEdit">确 定</el-button>
      </div>
    </el-dialog>
</template>

<script>
export default {
  name: 'UserEdit',
  data () {
    return {
      formVisible: false,
      editForm: {
        username: '',
        email: '',
        mobile: '',
      },
      addRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
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
  methods: {
    handleEdit () {

    },
    showEditDiglog (id) {
      this.formVisible = true,
      console.log(id)
    }
  }
}
</script>

<style scoped>

</style>
