<template>
  <div>
    <el-button type="primary"  @click="layout()" size='mim'>退出</el-button>
  </div>
</template>

<script>
import {removeItem} from '@/util/sessionStorage'
export default {
  name: 'CHead',
  methods: {
    layout () {
      this.$http.post('/public/loginout').then(resp => {
        console.log('退出登录', resp.data)
        removeItem('token')
        this.$router.push({name: 'login'})
      })
    }
  }
}
</script>
