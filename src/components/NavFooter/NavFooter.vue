<template>
  <footer id="footer">
    <a href="javascript:;" @click="$router.replace('/home')" :class="{current:$route.path === '/home'}">
      <span><i class="iconfont icon-shouye"></i></span>
      <span>首页</span>
    </a>
    <a href="javascript:;" @click="$router.replace('/item')" :class="{current:$route.path === '/item'}">
      <span><i class="iconfont icon-fenlei"></i></span>
      <span>分类</span>
    </a>
    <a href="javascript:;" @click="$router.replace('/topic')" :class="{current:$route.path === '/topic'}">
      <span><i class="iconfont icon-tupian"></i></span>
      <span>识物</span>
    </a>
    <a href="javascript:;" @click="$router.replace('/cart')" :class="{current:$route.path === '/cart'}">
      <span><i class="iconfont icon-gouwuche"></i></span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" @click="$router.replace('/profile')" :class="{current:$route.path === '/profile'}">
      <span><i class="iconfont icon-geren"></i></span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  #footer{
    position: fixed;
    left: 0;
    bottom:0;
    width:100%;
    height: 1.30667rem;
    background-color: #fff;
    display: flex;
    border-top: 1px solid #d9d9d9;
    z-index: 10;
    a{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 0.53rem;
      &.current{
        color: #b4282d;
      }
      span{
        &:first-child{
          i{
            font-size: 0.52rem;
          }
        };
        &:last-child{
          font-size:0.32rem
        };
      }
    }
  }
</style>
