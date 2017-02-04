<template>
  <div>
    <group>
      <x-input title="用户名" v-model="username"></x-input>
      <x-input title="密码" v-model="password"></x-input>
      <x-button text="登录" @click.native="login"></x-button>
    </group>
  </div>
</template>

<script>
  import {Group, XInput, XButton} from 'vux'

  export default {
    components: {
      Group, XInput, XButton
    },
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async login () {
        let {code, msg} = await this.$ajax({
          api: 'index/user/login',
          type: 'post',
          data: {
            name: this.username,
            password: this.password
          }
        });
        if (code === 0) {
          this.getUserInfo(msg)
        }
        if (code === 1) {
          this.$vux.alert.show({
            content: msg
          })
        }
      },
      async getUserInfo (appuid) {
        let {msg} = await this.$ajax({
          api: 'index/user/index',
          type: 'post',
          data: {
            appuid
          }
        })
        this.$native.login(msg)
        this.$native.restoreURL(this.$router)
      }
    }
  }
</script>