<template>
  <div>
    <div class="home-header">
      <div class="home-header-top">
        <a href="javascript:;" class="left"></a>
        <Search />
        <a class="right" @click="$router.replace('/profile')">登录</a>
      </div>
      <div class="home-header-bottom">
        <ul class="partShow" ref="partShowUl" :class="{active:!isShow}">
          <span>推荐<span class="active"></span></span>
          <span>居家<span class=""></span></span>
          <span>鞋包配饰<span class=""></span></span>
          <span>服装<span class=""></span></span>
          <span>电器<span class=""></span></span>
          <span>洗护<span class=""></span></span>
          <span>饮食<span class=""></span></span>
          <span>厨餐<span class=""></span></span>
          <span>婴童<span class=""></span></span>
          <span>文体<span class=""></span></span>
          <span>特色区<span class=""></span></span>
        </ul>

        <ul class="allShow" :class="{active:isShow}">
          <div class="top">
            <div class="left">全部频道</div>
          </div>
          <div class="bottom">
            <div class="active">推荐</div>
            <div>居家</div>
            <div>鞋包配饰</div>
            <div>服装</div>
            <div>电器</div>
            <div>洗护</div>
            <div>饮食</div>
            <div>厨餐</div>
            <div>婴童</div>
            <div>文体</div>
            <div>特色区</div>
          </div>
        </ul>

        <div  class="arrow" @click="toggleNavShow">
          <div class="iconfont" :class="isShow?'icon-jiantouxia':'icon-jiantoushang'"></div>
        </div>
      </div>
    </div>
    <div class="mask" :class="{active: isShow}"></div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    data(){
      return {
        isShow:true,//false 下拉导航不显示 true:显示
      }
    },
    mounted(){
      let ul = this.$refs.partShowUl
      const lis = this.$refs.partShowUl.children;
      const lisArr = Array.prototype.slice.call(lis);
      let lisWidth = lisArr.reduce((prev,next)=>{
        return prev+next.clientWidth
      },0);
      ul.style.width = lisWidth +300+'px'
      this.scroll = new BScroll('.home-header-bottom',{
        click:true,
        scrollX:true
      });
      console.log(this.scroll)
    },
    methods:{
      toggleNavShow(){
        this.isShow = !this.isShow;
      },
    }
  }
</script>

<style lang="less" scoped>
  .home-header{
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    box-sizing: border-box;
    background-color: white;
    z-index: 13;
    .home-header-top{
      display: flex;
      align-items:center;
      padding: .21333rem .4rem;
      .left{
        display: inline-block;
        width: 1.84rem;
        height: .53333rem;
        margin-right: .21333rem;
        background-image: url('../images/logo.png');
      }
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
      .right{
        display: inline-block;
        width: .98667rem;
        height: .53333rem;
        line-height: .53333rem;
        text-align: center;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: .10667rem;
        margin-left: .21333rem;
        font-size: .32rem
      }
    }
    .home-header-bottom{
      .partShow{
        padding-left:.4rem;
        white-space: nowrap;
        display: flex;
        &.active{
          display: none;
        }
        &>span{
          position: relative;
          display: inline-block;
          padding: 0 .21333rem;
          margin-right: .2rem;;
          line-height: .8rem;
          font-size: .37333rem;
          color: #333;
          text-align: center;
          span{
            &.active{
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: .05333rem;
              background-color: #b4282d;
            }
          }
        }

      }
      .allShow{
        &.active{
          display: none;
        }
        &.show-enter-active,&.show-leave-active{
          transition: all 0.5s;
        }
        &.show-enter,&.show-leave-to{
          opacity: 0;
        }
        .top{
          padding-left:.4rem;
          padding-right:.4rem;
          display: flex;
          height: .8rem;
          line-height: .8rem;
          font-size: .37333rem;
        }
        .bottom{
          padding-top: .32rem;
          overflow: hidden;
          div{
            width: 2rem;
            height: .74667rem;
            font-size:.37333rem;
            line-height: .74667rem;
            text-align: center;
            float: left;
            margin-bottom: .53333rem;
            margin-left: .4rem;
            background: #FAFAFA;
            border: 1px solid #CCC;
            border-radius: .05333rem;
            &.active{
              border: 1px solid #b4282d;
              color: #b4282d
            }
          }
        }
      }
      .arrow{
        position: absolute;
        top: 80px;
        right: 0px;
        width: 2rem;
        height: .8rem;
        text-align: center;
        background: #fff;
        .icon-jiantouxia{
          box-sizing: border-box;
          padding-left: 28px;
          margin-top: 25px;
          font-size: .4rem;
          /*transform: rotateY(180deg);*/
          /*transition:transform 1s;*/
        }

        .icon-jiantoushang{
          box-sizing: border-box;
          padding-left: 28px;
          margin-top: 25px;
          font-size: .4rem;
          /*transform: rotateY(0deg);*/
          /*transition:transform 1s;*/
        }
      }
    }
  }
  .mask{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 12;
    background-color: rgba(33,33,33,0.1);
    &.active{
      display: none;
    }
  }
</style>
