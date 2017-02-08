<template>
  <div>
    <!--x-header>hehe</x-header-->
    <div style="height: calc(100vh - 55px); overflow: auto;">
      <router-view></router-view>
    </div>
    <tabbar>
      <tabbar-item @click.native="navClick(0)">
        <img src="./assets/logo.png" slot="icon"/>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item @click.native="navClick(1)">
        <img src="./assets/logo.png" slot="icon"/>
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item @click.native="navClick(2)">
        <img src="./assets/logo.png" slot="icon"/>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {ViewBox, XHeader, Tabbar, TabbarItem} from 'vux'
  export default {
    components: {
      XHeader, Tabbar, TabbarItem
    },
    methods: {
      navClick (index) {
        let router = ['product', 'order', 'user']
        this.$router.push({
          name: router[index]
        })
      }
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
