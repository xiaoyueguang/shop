<template>
  <div v-if="show">
    
  </div>
</template>

<style>
</style>

<script>
  export default {
    data () {
      return {
        show: false
      }
    },
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
