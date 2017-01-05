<template lang="pug">
  el-menu(default-active="1")
    el-submenu(
      v-for="(list, index) in lists",
      :index="index + ''",
      @click.native="goTo(list.path)"
    )
      template(slot="title") {{list.name}}
      el-menu-item(
        v-for="(submenu, i) in list.submenu",
        :index="index + '-' + i",
        @click.native="goTo(submenu.path)"
      ) {{submenu.name}}
</template>

<script>
  import lists from './menu-list'
  export default {
    data () {
      return {
        lists
      }
    },
    methods: {
      goTo (name) {
        if (name) {
          this.$router.push({name})
        }
      }
    }
  }
</script>