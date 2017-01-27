<template lang="pug">
  div
    h2 商品列表
    el-table(:data="tableData")
      el-table-column(label = '商品ID')
        template(scope="scope")
          span {{scope.row.id}}
      el-table-column(label = '商品名称')
        template(scope="scope")
          span {{scope.row.name}}
      el-table-column(label = '商品描述')
        template(scope="scope")
          span {{scope.row.desc}}
      el-table-column(label = '价格')
        template(scope="scope")
          span {{scope.row.prize}}
      el-table-column(label = '库存')
        template(scope="scope")
          span {{scope.row.count}}
      el-table-column(label = '商品图片')
        template(scope="scope")
          img(:src="$baseUrl + scope.row.thumb", style = "max-width: 100px; max-height: 100px;")
      el-table-column(label = '操作')
        template(scope="scope")
          router-link(:to="{ name: 'product_edit', params: {id: scope.row.id}}")
            el-button(type="text", size="small") 修改
          el-button(type="text", size="small", @click="del(scope.row.id, scope.row.name)", style="color: red;") 删除

    el-button-group(style="margin-top: 24px;")
      router-link(:to="{ name: 'product_add'}")
        el-button 新增
</template>

<style>

</style>

<script>
  export default {
    data () {
      return {
        tableData: [],
        page: 1
      }
    },
    methods: {
      async getData() {
        let {code, msg} = await this.$ajax({
          api: '/admin/product/list',
          data: {
            page: this.page
          }
        })
        this.tableData = msg.data
      },
      async del (id, name) {
        let {code, msg} = await this.$ajax({
          api: '/admin/product/del',
          data: {
            id
          }
        })

        if (code === 0) {
          this.$message({
            message: `已成功删除商品: ${name}`,
            type: 'success'
          })
          this.getData()
        } else {
          this.$message({
            message: '删除失败',
            type: 'error'
          })
        }

      }
    },
    mounted () {
      this.getData()
    }
  }
</script>