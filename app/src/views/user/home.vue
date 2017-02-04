<template>
  <div>
    <group>
      <cell title="修改密码" is-link></cell>
    </group>
    <box gap="10px 10px">
      <x-button type="warn">退出登录</x-button>
    </box>
  </div>
</template>

<script>
  import {Box, Group, Cell, XButton} from 'vux'

  export default {
    components: {
      Box, Group, Cell, XButton
    }
  }
</script>