<template>
  <div>
    <card :header="{title: 'heheh'}">
      hehe
    </card>
  </div>
</template>

<script>
  import {Card} from 'vux'
  export default {
    data () {
      return {

      }
    },
    components: {
      Card
    },
    methods: {
      async getData () {
        let data = await this.$ajax('/index/product/index')
        console.log(data)
      },
    },
    mounted () {
      this.getData()
    }
  }
</script>