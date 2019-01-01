<template>
  <a class="middle">
    <i class="iconfont icon-sousuo"></i>
    <span> 搜索商品，共{{totalNumber}}个好物</span>
  </a>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    mounted(){
      this.$store.dispatch('getTotalNumber')
    },
    computed:{
      ...mapState({
        totalNumber:state=>state.item.totalNumber
      })
    }
  }
</script>

<style lang="less" scoped>
  .middle{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items:center;
    height: .74667rem;
    font-size: .37333rem;
    background-color: #ededed;
    border-radius: .10667rem;
    color: #666;
    i{
      margin-top: 0.07rem;
      font-size: .45rem;
      margin-right: .13333rem
    }
  }
</style>
