<template>
  <div>
    index
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    beforeRouteEnter (to, from, next) {
      next(vm => {
        if (!vm.$native.isLogin()) {
          vm.$native.saveURL(to)
          vm.$router.replace({
            name: 'login'
          })
        }
      })
    }
  }
</script>