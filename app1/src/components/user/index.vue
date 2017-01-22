<template>
  <div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
</style>

<script>
  export default {
    // beforeRouteEnter (to, from, next) {
    //   console.log(111)
    //   next(vm => {
    //     vm.$ajax({
    //       api: 'index/user/index',
    //       success: ({code, msg}) => {
    //         if (code === 1) {
    //           vm.$router.push({name: 'login'})
    //         }
    //       }
    //     })
    //   })
    // }
  }
</script>
