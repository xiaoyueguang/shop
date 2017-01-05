<template lang="pug">
  div
    el-table(:data="tableData")
      el-table-column(
        label="用户名",
        width="180"
      )
        template(scope="scope")
          span {{scope.row.name}}
      el-table-column(
        label="昵称",
        width="180"
      )
        template(scope="scope")
          span {{scope.row.nickname}}
      el-table-column(
        label="邮箱",
        width="180"
      )
        template(scope="scope")
          span {{scope.row.email}}
      el-table-column(
        label="创建时间",
        width="180"
      )
        template(scope="scope")
          span {{scope.row.create_time}}
      el-table-column(
        label="是否禁用",
        width="180"
      )
        template(scope="scope")
          span {{scope.row.is_disable === 0 ? '启用' : '禁用'}}
      el-table-column(
        label="操作",
        width="100"
      )
        template(scope="scope")
          el-button(type="text", size="small", @click="view(scope.row.id)") 查看
          el-button(type="text", size="small", @click="disable(scope.row.id)") 禁用
      </template>
    </el-table-column>
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
      async getData () {
        let {code, msg} = await this.$ajax({
          api: '/index/admin/user_list',
          data: {
            page: 1
          }
        })

        this.tableData = msg
      },

      view (id) {
        window.alert(id)
      },

      async disable (id) {
        let {code, msg} = await this.$ajax({
          api: '/index/admin/user_disable',
          data: {
            id
          }
        })
        if (code === 0) {

          this.$message({
            message: `用户${msg.name}已${msg.result === 0 ? '启用' : '禁用'}`,
            type: 'success'
          })
          this.getData()
        } else {
          this.$message({
            message: '不能禁用管理帐号',
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