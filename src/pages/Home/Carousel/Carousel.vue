<template>
  <div class="carousel">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../images/lunbo/1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../images/lunbo/2.jpg" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination">
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css'
  export default {
    mounted(){
      const mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        pagination: {
          el: '.swiper-pagination',
          type : 'custom',
          paginationType: 'custom',
          // 自定义分页样式
          renderCustom: function (swiper, current, total) {
            const activeColor = 'red'
            const normalColor = 'white'
            let color = ''
            let paginationStyle = ''
            let html = ''
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                color = activeColor
              } else {
                color = normalColor
              }
              paginationStyle =
                `background:${color};opacity:1;margin-right:0.2rem;width:40px;height:4px;border-radius:0;`
              html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
            }
            return html
          }
        },
      })
    }
  }
</script>

<style lang="less" scoped>
  .carousel{
    /*position: relative;*/
    margin-top: 2rem;
  }
</style>
