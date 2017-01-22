<template lang="pug">
  el-row
    el-col(:span="16")
      h2 {{isEdit ? '修改商品' : '添加商品'}}

      el-form(ref="form", :model="form", label-width="80px")
        el-form-item(label="商品名称")
          el-input(v-model="form.name")
        el-form-item(label="描述")
          el-input(v-model="form.desc")
        el-form-item(label="缩略图")
          img(
            v-if = 'form.thumb.length > 0',
            :src = "$baseUrl + form.thumb",
            style = "max-width: 300px; max-height: 300px;"
            )
          el-input(v-model="form.thumb", disabled)
          el-upload(
            action="http://www.shop.com/index.php/index/common/savethumb",
            type="select",
            name = "thumb",
            accept = "image/*",
            :show-upload-list = "false",
            :on-success="onSuccess"
          )
            el-button 上传
        el-form-item
          el-button(type="primary", @click="onSubmit") {{isEdit ? '修改商品' : '添加商品'}}
          el-button(@click="back") 取消

</template>

<style scoped>
  .el-upload__inner {
    width: 100%;
    height: 100%;
  }
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
          desc: '',
          thumb: ''
        },
        getApi: '/admin/product/get'
      }
    },

    computed: {
      api () {
        return this.isEdit ? '/admin/product/update' : '/admin/product/add'
      }
    },
    methods: {
      onSuccess ({code, msg}, file, fileList) {
        if (code === 0) {
          this.form.thumb = msg
        }
      }
    },
    mounted () {
      this.getInfo();
    }
  }
</script>