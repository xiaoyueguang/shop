<template>
  <div>
    <!--x-header>hehe</x-header-->
    <router-view></router-view>
    <tabbar>
      <tabbar-item>
        <img src="./assets/logo.png" slot="icon"/>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img src="./assets/logo.png" slot="icon"/>
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item>
        <img src="./assets/logo.png" slot="icon"/>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {XHeader, Tabbar, TabbarItem} from 'vux'
  export default {
    components: {
      XHeader, Tabbar, TabbarItem
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
