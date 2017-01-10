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
    computed: {
      isEdit () {
        return this.$route.name === 'user_edit'
      }
    },
    methods: {
      async onSubmit () {
        let data
        if (this.isEdit) {
          data = await this.$ajax({
            api: '/admin/user/update',
            data: {
              id: this.$route.params.id,
              ...this.form
            }
          })
        } else {
          data = await this.$ajax({
            api: '/admin/user/add',
            data: this.form
          });
        }

        let {code, msg} = data
        if (code === 0 ) {
          this.$message({
            message: this.isEdit ? '修改成功' : '添加成功',
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
      },
      async getUserInfo () {
        if (this.isEdit) {
          let {code, msg: {avatar, email, name, nickname}} = await this.$ajax({
            api: '/admin/user/get',
            data: {
              id: this.$route.params.id
            }
          })

          this.form.avatar = avatar
          this.form.name = name
          this.form.nickname = nickname
          this.form.email = email
        }
      }
    },
    mounted () {
      this.getUserInfo();
    }
  }
</script>