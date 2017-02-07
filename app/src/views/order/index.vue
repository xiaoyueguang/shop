<template>
  <div>
    1
  </div>
</template>

<script>
  export default {
    methods: {
      async getData () {
        await this.$ajax({
          api: 'index/order/list'
        })
      }
    },
    mounted () {
      this.getData()
    }
  }
</script>