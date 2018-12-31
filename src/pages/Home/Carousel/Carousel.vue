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
    <div class="newPeople">
      <div class="top">
        -新人专享礼-
      </div>
      <div class="bottom">
        <div class="b-right">
          <div class="b-r-top">新人专享礼包</div>
          <div class="b-r-bottom">
            <img src="../images/newPer.png" alt="">
          </div>
          <div class="animate"></div>
        </div>
        <div class="b-left">
          <div class="b-l-top">
            <div class="txt">
              <div class="one">福利社</div>
              <div class="two">今日特价</div>
            </div>
            <div class="pic">
              <div class="picOne">
                <span class="new">￥72</span>
                <span class="old">￥98</span>
              </div>
              <div class="picTwo"><img src="../images/chock.png" alt="" /></div>
            </div>
          </div>
          <div class="b-l-top">
            <div class="txt">
              <div class="one">新人拼团</div>
              <div class="two">一元起包邮</div>
            </div>
            <div class="pic">
              <div class="picOne">
                <span class="new">￥1</span>
                <span class="old">￥19</span>
              </div>
              <div class="picTwo"><img src="../images/yao.png" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  .newPeople{
    padding: 0 .4rem;
    background-color: white;
    margin: .26667rem 0;
    padding-bottom: .4rem;
    overflow: hidden;
    .top{
      height: 1.2rem;
      width: 100%;
      line-height: 1.2rem;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: .42667rem
    }
    .bottom{
      .b-right{
        position: relative;
        width: 4.57333rem;
        height: 5.78667rem;
        background: #F9E9CF;
        border-radius: .05333rem;
        margin-right: .05333rem;
        float: left;
        color: #333;
        .b-r-top{
          font-family: PingFangSC-Medium;
          font-size: .42667rem;
          padding: .4rem 0 0 .4rem;
        }
        .b-r-bottom{
          margin: .49333rem auto;
          width: 3.44rem;
          height: 3.42667rem;
        }
        .animate{
          background-image: url('../images/threeArrow.png');
          position: absolute;
          width: .4rem;
          height: .26667rem;
          bottom: 95px;
          right: 103px;
        }
      }
      .b-left{
        float: left;
        .b-l-top{
          position: relative;
          background: #FBE2D3;
          border-radius: 4px;
          width: 4.57333rem;
          height: 2.86667rem;
          margin-bottom: .05333rem;
          box-sizing: border-box;
          padding: .26667rem 0 0 .4rem;
          .txt{
            .one{
              font-family: PingFangSC-Medium;
              font-size: .42667rem;
            }
            .two{
              color:#7F7F7F;
              font-size: .32rem;
              margin-top: 8px;
            }
          }
          .pic{
            position: absolute;
            top: 20px;
            right: 0px;
            width: 2.66667rem;
            height: 2.66667rem;
            .picOne{
              position: absolute;
              top: 0px;
              right: 28px;
              width: 1.06667rem;
              height: 1.06667rem;
              opacity: .8;
              background: #F59524;
              border-radius: 50%;
              color: #fff;
              text-align: center;
              z-index: 1;
              .new{
                position: absolute;
                top: 14px;
                left: 9px;
                font-size: .32rem;
                color: #fff;
              }
              .old{
                position: absolute;
                top: 42px;
                left: 17px;
                font-size: .26667rem;
                text-decoration: line-through
              }
            }
            .picTwo{
              position: absolute;
              top: 0px;
              right: 0px;
            }
          }
        }
        .b-l-bottom{
          background: #FFECC2;
          border-radius: 4px;
          width: 4.57333rem;
          height: 2.86667rem
        }
      }
    }
  }
</style>
