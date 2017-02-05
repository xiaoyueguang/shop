<template lang="pug">
  div
    h2 用户列表
    el-table(:data="tableData")
      el-table-column(
        label="用户名",
      )
        template(scope="scope")
          span {{scope.row.name}}
      el-table-column(
        label="昵称",
      )
        template(scope="scope")
          span {{scope.row.nickname}}
      el-table-column(
        label="邮箱",
      )
        template(scope="scope")
          span {{scope.row.email}}
      el-table-column(
        label="创建时间",
      )
        template(scope="scope")
          span {{scope.row.create_time}}
      el-table-column(
        label="是否禁用",
      )
        template(scope="scope")
          span {{scope.row.is_disable === 0 ? '启用' : '禁用'}}
      el-table-column(
        label="操作",
      )
        template(scope="scope")
          el-button(type="text", size="small", @click="edit(scope.row.id)") 修改
          el-button(type="text", size="small", @click="disable(scope.row.id)") 禁用
          el-button(type="text", size="small", @click="openGold(scope.row.id)") 充值
    el-button-group(style="margin-top: 24px;")
      el-button(@click="add") 新增
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
          api: '/admin/user/list',
          data: {
            page: 1
          }
        })

        this.tableData = msg.data
      },

      add () {
        this.$router.push({name: 'user_add'})
      },
      edit (id) {
        this.$router.push({name: 'user_edit', params: {id}})
      },

      async disable (id) {
        let {code, msg} = await this.$ajax({
          api: '/admin/user/disable',
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
      },
      async openGold (id) {
        let {code, msg} = await this.$ajax({
          api: '/admin/user/getGold',
          data: {id}
        })
        if (code === 0) {
          this.$prompt(`请调整金额, 原金额为${msg}`, '提示', {}).then(async ({value}) => {
            if (!isNaN(Number(value))) {
              let {code, msg} = await this.$ajax({
                api: '/admin/user/setGold',
                data: {id, gold: Number(value)}
              })
              if (code === 0) {
                this.$message({
                  message: '设置成功',
                  type: 'success'
                })
              }
            }
          }).catch(() => {
            this.$message({
              message: '取消设置金额',
              type: 'error'
            })
          })
        }
      },
      async recharge (id) {

      }
    },
    mounted () {
      this.getData()
    }
  }
</script>