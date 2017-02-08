<template>
  <div>
    <flexbox v-for="item in items">
      <flexbox-item :span="3">
        <img :class="$style.thumb" :src="$baseUrl + item.product.thumb" />
      </flexbox-item>
      <flexbox-item :span="6">
        <p>{{item.product.name}}</p>
        <p>{{item.count}}个; {{item.prize}}元</p>
      </flexbox-item>
      <flexbox-item :span="3">
        <x-button v-if="Number(item.status) == 0" @click.native="pay(item.id)" mini>付款</x-button>
        <span v-if="Number(item.status) === 1">已付款</span>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<style module>
  .thumb {width: 48px; height: 48px; margin: auto;}
</style>

<script>
  import {Flexbox, FlexboxItem, XButton} from 'vux'

  export default {
    components: {
      Flexbox, FlexboxItem, XButton
    },
    data () {
      return {
        items: []
      }
    },
    methods: {
      async getData () {
        this.items = await this.$ajax({
          api: 'index/order/list'
        })
      },
      async pay (id) {
        let {code, msg} = await this.$ajax({
          api: 'index/order/pay',
          data: {id}
        })
        this.$vux.toast.show({
          text: msg,
          type: code === 0 ? 'success' : 'warn'
        })
        this.getData()
      }
    },
    mounted () {
      this.getData()
    }
  }
</script>