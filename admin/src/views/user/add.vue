<template lang="pug">
  el-row
    el-col(:span="16")
      h2 {{isEdit ? '修改用户' : '新增用户'}}

      el-form(ref="form", :model="form", label-width="80px")
        el-form-item(label="用户名")
          el-input(v-model="form.name", :disabled="isEdit")
        el-form-item(label="密码")
          el-input(v-model="form.password")
        el-form-item(label="Email")
          el-input(v-model="form.email")
        el-form-item(label="昵称")
          el-input(v-model="form.nickname")
        el-form-item
          el-button(type="primary", @click="onSubmit") {{isEdit ? '修改用户' : '新增用户'}}
          el-button(@click="back") 取消

</template>

<style>
</style>

<script>
  import mixins from '../mixins.js'
  const {add} = mixins
  console.log(add)

  export default {
    mixins: [add],
    data () {
      return {
        form: {
          name: '',
          password: '',
          email: '',
          nickname: ''
        },
        getApi: '/admin/user/get'
      }
    },

    computed: {
      api () {
        return this.isEdit ? '/admin/user/update' : '/admin/user/add'
      }
    },
    mounted () {
      this.getInfo();
    }
  }
</script>