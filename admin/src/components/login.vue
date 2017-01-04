<template>
  <el-row>
    <el-col :span="6" :offset="9">
      <div class="grid-content login-wrap">
        <h3>后台登录管理系统</h3>
        <el-input placeholder="请输入内容" v-model="user">
          <template slot="prepend">用户</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="password">
          <template slot="prepend">密码</template>
        </el-input>
        <el-button type="success" size="large" @click="login">登录</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<style>
  .login-wrap {
    background: #fff;
    
  }
  .login-wrap .el-input {
    margin: 12px 0;
  }
</style>

<script>
  export default {
    data () {
      return {
        user: '',
        password: ''
      }
    },
    methods: {
      login () {
        this.$ajax({
          api: 'index/admin/login',
          type: 'post',
          data: {
            name: this.user,
            password: this.password
          },
          success: ({code, msg}) => {
            console.log(msg)
          }
        })
      }
    }

  }
</script>