<template>
  <div>
    <el-col :span="2" v-if="!isLogin">
      <x-menu></x-menu>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
  </div>
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
