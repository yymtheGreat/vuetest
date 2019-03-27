<template>
  <div>
    <p>usertuzjian</p>
  </div>
</template>
<script>
// import axios from 'axios'
import { getUserList } from '@/api/user'
export default {
  name: 'UserList',
  data () {
    return {}
  },
  async created () {
    // 除了登陆接口，其他需要令牌验证
    const res = await getUserList({})
    console.log(res)
  }
}
</script>
<style scoped>

</style>
