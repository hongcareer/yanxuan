<template>
  <div>
    <router-view />
    <NavFooter />
  </div>
</template>

<script>
  import NavFooter from './components/NavFooter/NavFooter'
  export default {
    components:{
      NavFooter
    }
  }
</script>

<style lang="less" scoped>

</style>
