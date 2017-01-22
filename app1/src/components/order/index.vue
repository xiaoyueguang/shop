<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style>
</style>

<script>
  export default {
    mounted () {
      this.$ajax({
        api: 'index/user/index',
        success: ({code, msg}) => {
          if (code === 1) {
            this.$router.push({name: 'login'})
          }
        }
      })
    }
  }
</script>
