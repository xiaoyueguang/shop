<template>
  <div class="frame">
    <mt-field
      label="用户名"
      placeholder="请输入用户名"
      v-model="username.text"
    ></mt-field>
    <mt-field
      type="password"
      label="密码"
      placeholder="请输入密码"
      v-model="password.text"
    ></mt-field>
    <mt-button class="login-btn" type="default" size="large" @click.native="login">登录</mt-button>
  </div>
</template>

<style>
  .login-btn {
    background: #3dce3d;
    color: #fff;
  }
</style>

<script>
  export default {
    data () {
      return {
        username: {
          text: '',
          state: ''
        },
        password: {
          text: '',
          state: ''
        }
      }
    },
    mounted () {
      this.$store.commit('setTitle', '登录')
      this.$store.commit('setRight', {
        text: '注册',
        show: true,
        fn: () => {
          this.$router.push({name: 'register'})
        }
      })
    },
    destroyed () {
      this.$store.commit('setRight', {})
    },
    methods: {
      login () {
        this.$ajax({
          api: 'index/user/login',
          type: 'post',
          data: {
            name: this.username.text,
            password: this.password.text
          },
          success: ({code, msg}) => {
            if (code === 0) {
              this.$router.go(-1)
            }
            if (code === 1) {
              alert(msg)
            }
          }
        })
      }
    }
  }
</script>