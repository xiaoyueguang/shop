<template lang="pug">
  el-menu(default-active="1", theme="dark", mode="horizontal")
    el-menu-item(index="1") 后台管理中心
    el-menu-item(index="2", @click.native="logout", style="float: right;") 退出
    // el-submenu()
    //   template(slot="title") aaaa
    //   el-menu-item() hehe
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      logout () {
        delete localStorage.user
        location.reload()
      }
    }
  }
</script>