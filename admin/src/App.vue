<template>
  <div>
    <x-header v-if="!isLogin"></x-header>
    <el-row :gutter="20">
      <el-col :span="4" v-if="!isLogin">
        <x-menu></x-menu>
      </el-col>
      <el-col :span="isLogin ? 22 : 18">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import xMenu from './components/left-menu.vue'
  import xHeader from './components/header.vue'

  export default {
    name: 'app',
    components: {
      xMenu, xHeader
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
