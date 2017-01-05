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
      async login () {
        let {code, msg} = await this.$ajax({
          api: 'index/admin/login',
          type: 'post',
          data: {
            name: this.user,
            password: this.password
          }
        })

        if (code === 0) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          this.getUserInfo(msg)

        } else {
          this.$message({
            message: msg,
            type: 'warning'
          });
        }
      },

      async getUserInfo (appuid) {
        let {code, msg} = await this.$ajax({
          api: 'index/user/index',
          type: 'post',
          data: {
            appuid
          }
        });
        if (code === 0) {
          localStorage.user = JSON.stringify(msg)
          if (sessionStorage.returnRouterName) {
            setTimeout(() => {
              this.$router.replace({
                name: sessionStorage.returnRouterName
              })
              delete sessionStorage.returnRouterName
            }, 600)
          }
        }
      }

    }

  }
</script>