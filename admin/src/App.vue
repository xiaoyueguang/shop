<template>
  <el-row :gutter="20">
    <el-col :span="4" v-if="!isLogin">
      <x-menu></x-menu>
    </el-col>
    <el-col :span="18">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
  import xMenu from './components/left-menu.vue'
  export default {
    name: 'app',
    components: {
      xMenu
    },
    computed: {
      isLogin () {
        return this.$route.name === 'login'
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
  }
</style>
