<template>
  <div id="home">
    <Nav />
    <Carousel />
    <Middle />
    <Bottom />
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import Nav from './Nav/Nav';
  import Carousel from './Carousel/Carousel';
  import Middle from './Middle/Middle'
  import Bottom from './Bottom/Bottom'
  export default {
    components:{
      Nav,
      Carousel,
      Middle,
      Bottom
    }
  }
</script>

<style lang="less" scoped>
  body,html{
    overflow: hidden;
    #home{
      width:100%;
      padding-bottom: 1.30667rem;
      &:after{
        content: '';
        display: block;
        clear: both;
      }
    }
  }

</style>
