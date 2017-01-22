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
    <mt-field
      type="password"
      label="确认密码"
      placeholder="请输入确认密码"
      v-model="confirm.text"
    ></mt-field>
    <mt-button class="login-btn" type="default" size="large" @click.native="register">注册</mt-button>
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
        },
        confirm: {
          text: '',
          state: ''
        }
      }
    },
    watch: {
      password () {
        this.confirm.state = this.password.text === this.confirm.text ? 'success' : 'warn'
      }
    },
    mounted () {
      this.$store.commit('setTitle', '注册')
    },
    methods: {
      register () {
        this.$ajax({
          api: 'index/user/register',
          type: 'post',
          data: {
            name: this.username.text,
            password: this.password.text,
            confirm: this.confirm.text
          },
          success: ({code, msg}) => {
            if (code === 1) {
              this.$toast({
                message: msg
              })
            } else {
              this.$toast({
                message: '注册成功'
              })
              setTimeout(() => {
                this.$router.push({name: 'user'})
              }, 1000)
            }
          }
        })
      }
    }
  }
</script>