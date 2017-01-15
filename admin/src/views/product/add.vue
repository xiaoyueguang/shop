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
          el-upload(
            action="index.php/index/admin/product/saveThumb",
            type="drag",
            :thumbnail-mode="true",
            :on-success="onSuccess"
          )
        el-form-item
          el-button(type="primary", @click="onSubmit") {{isEdit ? '修改商品' : '添加商品'}}
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
          desc: '',
          thumb: ''
        },
        getApi: '/admin/product/read'
      }
    },

    computed: {
      api () {
        return this.isEdit ? '/admin/product/update' : '/admin/product/add'
      }
    },
    methods: {
      onSuccess (response, file, fileList) {

      }
    },
    mounted () {
      this.getInfo();
    }
  }
</script>