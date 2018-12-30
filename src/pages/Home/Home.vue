<template>
  <div id="home">
    <Nav />
    <Carousel />
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import Nav from './Nav/Nav';
  import Carousel from './Carousel/Carousel'
  export default {
    components:{
      Nav,
      Carousel
    }
  }
</script>

<style lang="less" scoped>
#home{
  width:100%;
  &:after{
    content: '';
    display: block;
    clear: both;
  }
}
</style>
