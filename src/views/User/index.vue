<template>
  <div>
    <p>usertuzjian</p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'UserList',
  data () {
    return {}
  },
  async created () {
    // 除了登陆接口，其他需要令牌验证
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:8888/api/private/v1/users?pagenum=1&pagesize=5',
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    })
    if (res.data.meta.status === 401) {
      this.$router.push('/login')
    } else {
      console.log(res.data.data)
    }
  }
}
</script>
<style scoped>

</style>
