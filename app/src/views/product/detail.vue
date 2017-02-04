<template>
  <div>
    <img v-if="detail.thumb" :src="$baseUrl + detail.thumb" :alt="detail.name" :class="$style.cover">
    <h4>{{detail.name}}</h4>
    <p :class="$style.prize">{{detail.prize}}元</p>
    <p :class="$style.count">{{detail.count}}份</p>
    <span :class="$style.buy" @click="onBuy">点击购买</span>
  </div>
</template>

<style module>
  .cover {
    width: 100%;
  }
  .prize {
    font-size: 32px;
    color: red;
  }
  .count {
    font-size: 24px;
  }
  .buy {
    background: #f23b55;
    width: 128px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    display: inline-block;
    color: #fff;
  }
</style>

<script>
  // import {XButton} from 'vux'
  export default {
    data () {
      return {
        detail: {

        }
      }
    },
    components: {
    },
    methods: {
      async getData () {
        let {code, msg} = await this.$ajax({
          api: 'index/product/detail',
          data: {
            id: this.$route.params.id
          }
        })
        if (code === 1) {
          this.$router.go(-1)
        }
        if (code === 0) {
          this.detail = msg
        }
      },
      async onBuy () {
        if (!this.$native.isLogin()) {
          this.$vux.toast.show({
            text: '没登陆'
          })
          return false
        }

        let {code, msg} = await this.$ajax({
          api: 'index/order/add',
          data: {
            id: this.$route.params.id
          }
        })

      }
    },
    mounted () {
      this.getData()
    }

  }
</script>