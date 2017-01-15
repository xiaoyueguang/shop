let add = {
  computed: {
    isEdit () {
      return this.$route.name.indexOf('edit') > -1
    }
  },
  methods: {
    async onSubmit () {
      let data
      if (this.isEdit) {
        data = await this.$ajax({
          api: this.api,
          data: {
            id: this.$route.params.id,
            ...this.form
          }
        })
      } else {
        data = await this.$ajax({
          api: this.api,
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
    async getInfo () {
      if (this.isEdit) {
        let {code, msg: data} = await this.$ajax({
          api: this.getApi,
          data: {
            id: this.$route.params.id
          }
        })

        this.form = data
      }
    },
    back () {
      this.$router.back();
    }
  }
}

export default {
  add
}