<template>
  <div>
    <mt-header v-if="isHeaderShow" :title="title">
      <mt-button icon="back" @click="back" slot="left">返回</mt-button>
      <mt-button v-if="right.show" @click="rightFn" slot="right">{{right.text}}</mt-button>
    </mt-header>

    <router-view></router-view>

    <mt-tabbar v-model="tab">
      <mt-tab-item id="商品" @click.native="goTo('product')">
        <img slot="icon" src="./assets/logo.png">
        商品
      </mt-tab-item>
      <mt-tab-item id="订单" @click.native="goTo('order')">
        <img slot="icon" src="./assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="goTo('user')">
        <img slot="icon" src="./assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        tab: '我的'
      }
    },
    computed: {
      isHeaderShow () {
        return this.$route.path.split('/').length > 2
      },
      title () {
        return this.$store.state.header.title
      },
      right () {
        return this.$store.state.header.right
      }
    },
    name: 'app',
    methods: {
      goTo (name) {
        this.$router.push({name})
      },
      back () {
        this.$router.go(-1)
      },
      rightFn () {
        this.right.fn()
      }
    }
  }
</script>

<style>
  @import './style/style.css';

</style>
