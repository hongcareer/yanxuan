<template>
  <div>
    <router-view />
    <NavFooter />
  </div>
</template>

<script>
  import NavFooter from './components/NavFooter/NavFooter'
  export default {
    mounted(){
      this.$store.dispatch('getHomeData')
    },
    components:{
      NavFooter
    }
  }
</script>

<style lang="less" scoped>

</style>
