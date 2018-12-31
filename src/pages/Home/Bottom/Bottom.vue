<template>
  <div>
    <div class="categoryItem" v-for="(item,index) in categoryModule" :key="index" v-if="categoryModule.length>0">
      <div class="top">
        <img :src="item.titlePicUrl" alt="">
      </div>
      <div class="bottom">
        <ul class="item" ref="itemUl">
          <li v-for="(item,index) in item.itemList" :key="item.id" class="list">
            <div class="pic">
              <img :src="item.scenePicUrl" alt="">
            </div>
            <div class="txt">{{item.name}}</div>
            <div class="bot">
              <span class="new">￥{{item.retailPrice}}</span>
              <span class="old" v-if="item.retailPrice !== item.counterPrice">￥{{item.counterPrice}}</span>
            </div>
          </li>
          <div class="last">
            <span>产看更多</span>
            <span class="iconfont icon-iconfontjiantou2"></span>
          </div>
        </ul>
      </div>
    </div>
    <div class="last-b">
      <div class="b-top">
        <span class="left">下载App</span>
        <span class="right">电脑版</span>
      </div>
      <div class="b-bot">
        <span>网易公司版权所有 © 1997-2019</span><br>
        <span>食品经营许可证：JY13301080111719</span>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {mapState} from 'vuex';
  export default {
    computed:{
      ...mapState({
        categoryModule:state=>state.home.homedata.categoryModule,
      }),
    },
    watch:{
      categoryModule(){
        this.$nextTick(()=>{
          const ulList = this.$refs.itemUl;
          ulList.forEach((item,index)=>{
            const lis = item.children;
            console.log(lis);
            let lisArr = Array.prototype.slice.call(lis);
            let lisWidth = lisArr.reduce((prev,next)=>{
              return prev+next.clientWidth;
            },0);
            item.style.width = lisWidth +16*index+'px';
          });
          new BScroll('.bottom',{
            click:true,
            scrollX:true
          })
        })
      }
    }

  }
</script>

<style lang="less" scoped>
  .categoryItem{
    background-color: #fff;
    margin-bottom: .26667rem;
    .top{
      width: 100%;
      height: 4.93333rem;
      margin-bottom: .26667rem;
      img{
        width: 100%;
        height: 4.93333rem;
      }
    }
    .bottom{
      padding-left:.4rem ;
      overflow: hidden;
      .item{
        overflow: hidden;
        .list{
          float: left;
          width: 200px;
          margin-right: .26667rem;
          .pic{
            background-color: #f4f4f4;
            border-radius: 4px;
            margin-bottom: .16rem;
            width: 200px;
            height: 200px;
            img{
              width: 200px;
              height: 200px;
            }
          }
          .txt{
            padding-left: 0;
            font-size: .32rem;
            margin-top: 0;
            line-height: .48rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            white-space: normal
          }
          .bot{
            font-size: .32rem;
            line-height: .48rem;
            .new{
              display: inline-block;
              margin-bottom: .05333rem;
              padding-left: 0;
              color: #b4282d;
            }
            .old{
              display: inline-block;
              margin-left: 10px;
              color: #999;
              text-decoration: line-through;
              font-family: PingFangSC-Light;
            }
          }

        }
        .last{
          width: 2.66667rem;
          height: 2.66667rem;
          margin-right: 0;
          font-size: .37333rem;
          color: #333;
          line-height: 2.66667rem;
          text-align: center;
          background: #F5F5F5;
          border-radius: .05333rem;
          .icon-iconfontjiantou2{
            font-size: .37333rem;
            color: #333;
          }
        }
      }
    }
  }
  .last-b{
    text-align: center;
    padding: .72rem .26667rem .37333rem;
    border-top: 1px solid rgba(0,0,0,.15);
    background-color: #414141;
    .b-top{
      .left{
        display: inline-block;
        width: 2.29333rem;
        font-size: .32rem;
        color: #fff;
        height: .82667rem;
        line-height: .82667rem;
        margin-right: .66667rem;
        border-radius: 4px;
        border: 1px solid #999
      }
      .right{
        display: inline-block;
        width: 2.29333rem;
        font-size: .32rem;
        color: #fff;
        height: .82667rem;
        line-height: .82667rem;
        border-radius: 4px;
        border: 1px solid #999
      }
    }
    .b-bot{
      margin-top: .48rem;
      font-size: .32rem;
      line-height: .42667rem;
      color: #999;
    }
  }
</style>
