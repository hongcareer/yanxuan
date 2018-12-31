<template>
  <div>
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
    <ul class="little" v-if="homedata.policyDescList">
      <li v-for="(policyDesc,index) in homedata.policyDescList " :key=index>
        <img :src="policyDesc.icon" alt="">
        <span>{{policyDesc.desc}}</span>
      </li>
    </ul>
    <ul class="big" v-if="homedata.kingKongModule">
      <li v-for="(kingKong,index) in homedata.kingKongModule.kingKongList" @click="$router.push()" >
        <img :src="kingKong.picUrl" alt="img" />
        <span>{{kingKong.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import {mapState} from 'vuex'
  import 'swiper/dist/css/swiper.css'
  export default {
    computed:{
      ...mapState({
        homedata:state => state.home.homedata
      })
    },
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
  .little{
    width: 100%;
    height: .96rem;
    line-height:.96rem ;
    padding: 0 0.4rem;
    margin-top: -7px;
    box-sizing: border-box;
    display: flex;
    font-size:24px;
    background-color: white;
    color: #B4282D;
    li{
      flex: 1;
      display: flex;
      align-items: center;
      img{
        height: 32px;
        width: 32px;
      }
    }

  }
  .big{
    padding-bottom: .69333rem;
    background: #fff;
    overflow: hidden;
    li{
      width: 1.46667rem;
      height: 2.08rem;
      float: left;
      margin: .13333rem .26667rem 0;
      color: #333;
      font-size: 24px;
      text-align: center;
      img{
        width: 1.46667rem;
        height: 1.46667rem;
        margin-bottom: 10px;
      }
    }
  }
</style>
