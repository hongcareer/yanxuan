<template>
  <div>
    <div class="tagList">
      <div class="top">
        <span class="left">品牌制造商直供</span>
        <div class="right">
          <span>更多</span>
          <div class="iconfont icon-iconfontjiantou2"></div>
        </div>
      </div>
      <ul class="bottom">
        <li :style="{backgroundImage: `url(${tag.picUrl})`}" v-for="(tag,index) in tagList" :key="index">
          <h4>{{tag.name}}</h4>
          <div>{{tag.floorPrice}}元起
            <span v-if="tag.floorPrice == 9.9">上新</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="hotSell" v-if="categoryHotSellModule">
      <div class="top">
        <span class="left">{{categoryHotSellModule.title}}</span>
        <div class="right">
          <span>更多</span>
          <div class="iconfont icon-iconfontjiantou2"></div>
        </div>
      </div>
      <ul class="bottom" v-if="firstArr[0]">
        <li class="big" v-for="(item,index) in firstArr[0]"
            :key="index" :style="{backgroundImage: `url(${item.picUrl})`}">
          <div>{{item.categoryName}}</div>
          <span class="line"></span>
        </li>
        <li class="small" v-for="(item,index) in firstArr[1]" :key="item.targetUrl" >
          <h4>{{item.categoryName}}</h4>
          <div class="b-center" :style="{backgroundImage: `url(${item.picUrl})`}"></div>
        </li>
      </ul>
    </div>
    <div class="recommend" v-if="categoryModule">
      <div class="top">
        <span class="left">人气推荐</span>
        <div class="right">
          <span>更多</span>
          <div class="iconfont icon-iconfontjiantou2"></div>
        </div>
      </div>
      <div class="center">
        <div class="left">
          <img :src="recommendArrOne.listPicUrl" alt="tooth">
        </div>
        <div class="right">
          <div>{{recommendArrOne.name}}</div>
          <div>{{recommendArrOne.simpleDesc}}</div>
          <div>￥{{recommendArrOne.counterPrice}}</div>
        </div>
      </div>
      <ul class="bottom">
        <li v-for="(item,index) in recommendArrTwo" :key="index">
          <div class="top">
            <img :src="item.listPicUrl" alt="">
          </div>
          <div class="bottom">
            <span class="one">{{item.name}}...</span>
            <span class="two">￥{{item.counterPrice}}</span>
          </div>
          <div class="choose" v-if="item.promTag">{{item.promTag}}</div>
        </li>
      </ul>
    </div>
    <div class="limitedTime">
      <div class="top">
        <span class="left">限时购</span>
        <div class="right">
          <span>更多</span>
          <div class="iconfont icon-iconfontjiantou2"></div>
        </div>
      </div>
      <ul class="bottom">
        <li>
          <div class="pic">
            <img src="../images/limited/1.jpg" alt="" />
          </div>
          <div class="txt">
            <span>￥1839</span>
            <span>￥2200</span>
          </div>
        </li>
        <li>
          <div class="pic">
            <img src="../images/limited/2.png" alt="" />
          </div>
          <div class="txt">
            <span>￥1839</span>
            <span>￥2200</span>
          </div>
        </li>
        <li>
          <div class="pic">
            <img src="../images/limited/3.png" alt="" />
          </div>
          <div class="txt">
            <span>￥1839</span>
            <span>￥2200</span>
          </div>
        </li>
        <li>
          <div class="pic">
            <img src="../images/limited/4.png" alt="" />
          </div>
          <div class="txt">
            <span>￥1839</span>
            <span>￥2200</span>
          </div>
        </li>
        <li>
          <div class="pic">
            <img src="../images/limited/5.png" alt="" />
          </div>
          <div class="txt">
            <span>￥1839</span>
            <span>￥2200</span>
          </div>
        </li>
        <li>
          <div class="pic">
            <img src="../images/limited/6.png" alt="" />
          </div>
          <div class="txt">
            <span>￥1839</span>
            <span>￥2200</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="newItem">
      <div class="top">
        <span class="left">新品首发</span>
        <div class="right">
          <span>更多</span>
          <div class="iconfont icon-iconfontjiantou2"></div>
        </div>
      </div>
      <ul class="bottom" v-if="newItemList">
        <li v-for="(item,index) in newItemListArr" :key="index">
          <div class="top">
            <img :src="item.listPicUrl" alt="">
          </div>
          <div class="bottom">
            <span class="one">{{item.name}}</span>
            <span class="two">￥{{item.counterPrice}}</span>
          </div>
        </li>
      </ul>
    </div>
    <ul class="shopGuide">
      <li v-for="(shopGuide,index) in sceneLightShoppingGuideModule"
          :key="index" v-if="shopGuide.styleItem" :style="{backgroundImage:`url(${shopGuide.styleItem.backgroundUrl})`}">
        <div class="txtOne">{{shopGuide.styleItem.title}}</div>
        <div class="txtTwo">{{shopGuide.styleItem.desc}}</div>
        <div class="picOne">
          <img :src="shopGuide.styleItem.itemPicBeanList[0].picUrl" alt="" />
        </div>
        <div class="picTwo">
          <img :src="shopGuide.styleItem.itemPicBeanList[1].picUrl" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        tagList:state=>state.home.homedata.tagList,
        newItemList:state=>state.home.homedata.newItemList,
        sceneLightShoppingGuideModule:state=>state.home.homedata.sceneLightShoppingGuideModule,
        categoryHotSellModule:state=>state.home.homedata.categoryHotSellModule,
        categoryModule:state=>state.home.homedata.categoryModule,
        firstArr(){
          const {categoryList} = this.categoryHotSellModule;
          let arr = [];
          arr.push(categoryList.slice(0,2));
          arr.push(categoryList.slice(2));
          return arr
        },
        recommendArrTwo(){
          const {categoryModule} = this;
          let arr=[];
          arr.push(categoryModule[4].itemList.find((item,index)=>{
            return item.id == '1077003'
          }));
          arr.push(categoryModule[4].itemList.find((item,index)=>{
            return item.id == '1113001'
          }));
          arr.push(categoryModule[4].itemList.find((item,index)=>{
            return item.id == '1129016'
          }));
          return arr;
        },
        recommendArrOne(){
          const {categoryModule} = this;
          return categoryModule[4].itemList.find((item,index)=>{
            return item.id == '1154003'
          })
        },
        newItemListArr(){
          return this.newItemList.slice(0,6)
        }
      })
    }
  }
</script>

<style lang="less" scoped>
  .tagList{
    padding: 0 .4rem;
    padding-bottom: .10667rem;
    margin-bottom: .26667rem;
    background-color: #fff;
    .top{
      width: 100%;
      height: 1.33333rem;
      line-height: 1.33333rem;
      overflow: hidden;
      .left{
        float: left;
        font-size: .42667rem;
        font-family: PingFangSC-Regula;
      }
      .right{
        font-size: .37333rem;
        float: right;
        color: #333;
        line-height: 1.33333rem;
        .icon-iconfontjiantou2{
          margin-top: 2px;
          font-size: .37333rem;
          float: right;
          color: #333;
          line-height: 1.33333rem;
        }
      }
    }
    .bottom{
      li{
        display: inline-block;
        margin: 0 7px 3px 0;
        width: 4.5rem;
        height: 3.46667rem;
        overflow: hidden;
        background-color: #fff;
        border-radius: .05333rem;
        background-position: 0 -40px;
        h4{
          padding-top: .30667rem;
          text-align: center;
          color: #333;
          font-family: PingFangSC-Medium;
          font-size: .37333rem;
          line-height: .45333rem;
          margin-bottom: .04rem
        }
        div{
          margin-top: 5px;
          text-align: center;
          color: #7F7F7F;
          font-size: .32rem;
          span{
            display: inline-block;
            width: .85333rem;
            height: .42667rem;
            color: #fff;
            line-height: .42667rem;
            text-align: center;
            background: #CBB693;
            border-radius: .05333rem;
            margin-left: .13333rem;
          }
        }
      }
    }
  }
  .hotSell{
    padding: 0 .4rem;
    margin-bottom: .26667rem;
    background-color: #fff;
    .top{
      width: 100%;
      height: 1.33333rem;
      line-height: 1.33333rem;
      overflow: hidden;
      .left{
        float: left;
        font-size: .42667rem;
        font-family: PingFangSC-Regula;
      }
      .right{
        font-size: .37333rem;
        float: right;
        color: #333;
        line-height: 1.33333rem;
        .icon-iconfontjiantou2{
          margin-top: 2px;
          font-size: .37333rem;
          float: right;
          color: #333;
          line-height: 1.33333rem;
        }
      }
    }
    .bottom{
      overflow: hidden;
      .big{
        position: relative;
        width: 4.45rem;
        height: 2.66667rem;
        float: left;
        border-radius: .05333rem;
        margin: 0 5px 5px 0;
        background-size:2.66667rem 2.66667rem;
        background-repeat: no-repeat;
        background-position: 131px 12px;
        background-color: #F9F3E4;
        div{
          padding-left: .4rem;
          color: #333;
          font-family: PingFangSC-Medium;
          font-size: .37333rem;
          margin-top: .88rem
        }
        .line{
          position: absolute;
          top: 106px;
          left: 35px;
          width: .64rem;
          height: .05333rem;
          background: #333
        }
      }
      .small{
        width: 2.14rem;
        height: 2.4rem;
        background: #F5F5F5;
        border-radius: .05333rem;
        float: left;
        margin: 0 .13333rem .13333rem 0;
        h4{
          margin-top: 20px;
          text-align: center;
          font-size: .32rem;
          color: #333;
          font-family: PingFangSC-Medium
        }
        .b-center{
          width: 1.6rem;
          height: 1.6rem;
          margin: .02667rem 0 0 .30667rem;
          background-size: 1.6rem 1.6rem;
        }
      }
    }
  }
  .recommend{
    margin-bottom: .26667rem;
    padding: 0 .4rem .4rem .4rem;
    background-color: #fff;
    overflow: hidden;
    .top{
      width: 100%;
      height: 1.33333rem;
      line-height: 1.33333rem;
      overflow: hidden;
      .left{
        float: left;
        font-size: .42667rem;
        font-family: PingFangSC-Regula;
      }
      .right{
        font-size: .37333rem;
        float: right;
        color: #333;
        line-height: 1.33333rem;
        .icon-iconfontjiantou2{
          margin-top: 2px;
          font-size: .37333rem;
          float: right;
          color: #333;
          line-height: 1.33333rem;
        }
      }
    }
    .center{
      color: #333;
      width: 9.2rem;
      height: 3.73333rem;
      background: #FEF0DF;
      border-radius: .05333rem;
      margin: 0 .4rem .26667rem 0 ;
      .left{
        float: left;
        width: 3.73333rem;
        height: 3.73333rem;
        background: url('../images/toothBg.png');
        background-size: 100% 100%;
        margin-right: .4rem;
        img{
          width: 3.73333rem;
          height: 3.73333rem;
        }
      }
      .right{
        float: left;
        position: relative;
        top: 50%;
        transform:translateY(-50%);
        div{
          margin-top: 13px;
          &:nth-child(1){
            font-family: PingFangSC-Regular;
            font-size: .37333rem;
            width: 4.66667rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap
          }
          &:nth-child(2){
            font-size: .32rem;
            color: #7F7F7F;
            width: 4.66667rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          &:nth-child(3){
            font-size: .37333rem;
            color: #b4282d;
          }
        }
      }
    }
    .bottom{
      li{
        float: left;
        /*padding: 0 0 .17333rem!important;*/
        margin-left: 20px;
        width: 2.88rem;
        &:nth-child(1){
          margin-left: 0px;
        }
        .top{
          width: 216px;
          height: 216px;
          background-color: #f5f5f5;
          img{
            width: 216px;
            height: 216px;
          }
        }
        .bottom{
          line-height:37px ;
          .one{
            font-size: .32rem;
            line-height: 10px;
          }
          .two{
            color:#b4282d;
            font-size: .32rem;
            margin-left: -25px;
          }
        }
      }
    }
    .choose{
      padding: 0 .10667rem;
      height: .4rem;
      width: 63px;
      line-height: .37333rem;
      text-align: center;
      color: #B4282D;
      background: rgba(255,255,255,.9);
      border: 1px solid #B4282D;
      font-size: .26667rem;
      border-radius: .02667rem;
      margin-top: 3px;
    }
  }
  .limitedTime{
    background-color: #fff;
    margin-bottom: .26667rem;
    padding: 0 .4rem;
    .top{
      width: 100%;
      height: 1.33333rem;
      line-height: 1.33333rem;
      overflow: hidden;
      .left{
        float: left;
        font-size: .42667rem;
        font-family: PingFangSC-Regula;
      }
      .right{
        font-size: .37333rem;
        float: right;
        color: #333;
        line-height: 1.33333rem;
        .icon-iconfontjiantou2{
          margin-top: 2px;
          font-size: .37333rem;
          float: right;
          color: #333;
          line-height: 1.33333rem;
        }
      }
    }
    .bottom{
      overflow: hidden;
      li{
        color: #333;
        float: left;
        margin-right: 14px;
        padding-bottom: .4rem;
        .pic{
          width: 2.88rem;
          height: 2.88rem;
          background-color: #F5F5F5;
          img{
            width: 2.88rem;
            height: 2.88rem;
          }
        }
        .txt{
          text-align: center;
          margin-top: -25px;
          span{
            &:nth-child(1){
              font-size: .37333rem;
              color: #b4282d;
            }
            &:nth-child(2){
              margin-left: -7px;
              font-size: .32rem;
              color: #7F7F7F;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
  .newItem{
    background-color: #fff;
    margin-bottom: .26667rem;
    padding: 0 .4rem;
    .top{
      width: 100%;
      height: 1.33333rem;
      line-height: 1.33333rem;
      overflow: hidden;
      .left{
        float: left;
        font-size: .42667rem;
        font-family: PingFangSC-Regula;
      }
      .right{
        font-size: .37333rem;
        float: right;
        color: #333;
        line-height: 1.33333rem;
        .icon-iconfontjiantou2{
          margin-top: 2px;
          font-size: .37333rem;
          float: right;
          color: #333;
          line-height: 1.33333rem;
        }
      }
    }
    .bottom{
      overflow: hidden;
      li{
        float: left;
        padding-bottom:30px;
        margin-right: 14px;
        width: 2.88rem;
        .top{
          width: 216px;
          height: 216px;
          background-color: #f5f5f5;
          img{
            width: 216px;
            height: 216px;
          }
        }
        .bottom{
          line-height:37px ;
          .one{
            display: block;
            font-size: .32rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis
          }
          .two{
            display: block;
            color:#b4282d;
            font-size: .32rem;

          }
        }
      }
    }
  }
  .shopGuide{
    overflow: hidden;
    padding: .13333rem .4rem .4rem .34667rem;
    background: #fff;
    margin-bottom: .26667rem;
    li{
      width: 4.57333rem;
      height: 3.52rem;
      float: left;
      margin: .05333rem 0 0 .05333rem;
      padding: .26667rem 0 0 .26667rem;
      border-radius: .05333rem;
      box-sizing: border-box;
      .txtOne{
        color: #333333;
        padding-left: .13333rem;
        font-size: .42667rem;
        font-family: PingFangSC-Medium
      }
      .txtTwo{
        margin-top: 12px;
        color: #7f7f7f;
        padding-left: .13333rem;
        font-size: .32rem;
      }
      .picOne{
        width: 2rem;
        height: 2rem;
        float: left;
        margin-right: .05333rem;
        img{
          width: 2rem;
          height: 2rem;
        }
      }
      .picTwo{
        width: 2rem;
        height: 2rem;
        float: left;
        margin-right: .05333rem;
        img{
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
</style>
