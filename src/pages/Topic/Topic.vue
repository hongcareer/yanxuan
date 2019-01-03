<template>
  <div >
    <div class="p-header">
      <span class="p-h-one" @click="$router.replace('/home')"></span>
      <span class="p-h-two"></span>
      <span class="p-h-three"></span>
      <span class="p-h-forth" @click="$router.replace('/cart')"></span>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .p-header{
    height: 1.16rem;
    width: 100%;
    background-color: #fafafa;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    span{
      display: inline-block;
      vertical-align: middle;
      &.p-h-one{
        background-image: url('./image/bg.png');
        width: .64rem;
        height: .58667rem;
        background-repeat: no-repeat;
        background-position: 0 -37px;
        background-size: 2.29333rem 5.6rem;
        margin-left: 8px;
      }
      &.p-h-two{
        position: absolute;
        top: 10px;
        right: 0;
        left: 0;
        margin: 0 auto;
        width: 2.29333rem;
        height: .72rem;
        background-position: 0 -1.70667rem;
        background-image: url('./image/bg.png');
        background-repeat: no-repeat;
        background-size: 2.29333rem 5.6rem;
      }
      &.p-h-three{
        margin-left:246px;
        width: .85333rem;
        height: .85333rem;
        background-position: 0 -4.74667rem;
        background-image: url('./image/bg.png');background-repeat: no-repeat;
        background-size: 2.29333rem 5.6rem
      }
      &.p-h-forth{
        margin-top: -77px;
        margin-left:330px;
        width: .85333rem;
        height: .85333rem;
        background-position: 0 0;
        background-image: url('./image/bg.png');background-repeat: no-repeat;
        background-size: 2.29333rem 5.6rem;
      }
    };

  }
</style>
