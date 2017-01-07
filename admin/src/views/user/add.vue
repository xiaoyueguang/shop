<template lang="pug">
  el-row
    el-col(:span="16")
      h2 新增用户

      el-form(ref="form", :model="form", label-width="80px")
        el-form-item(label="用户名")
          el-input(v-model="form.name")
        el-form-item(label="密码")
          el-input(v-model="form.password")
        el-form-item(label="Email")
          el-input(v-model="form.email")
        el-form-item(label="昵称")
          el-input(v-model="form.nickname")
        el-form-item
          el-button(type="primary", @click="onSubmit") 新增用户
          el-button(@click="back") 取消

</template>

<style>
</style>

<script>
  export default {
    data () {
      return {
        form: {
          name: '',
          password: '',
          email: '',
          nickname: ''
        }
      }
    },
    methods: {
      async onSubmit () {
        let {code, msg} = await this.$ajax({
          api: '/admin/user/add',
          data: this.form
        });
        if (code === 0 ) {
          this.$message({
            message: "添加成功!",
            type: 'success'
          })

          this.$router.back();
        } else {
          this.$message({
            message: msg,
            type: 'error'
          })
        }
      },
      back () {
        this.$router.back();
      }
    }
  }
</script>