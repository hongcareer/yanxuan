<template>
  <div >
    <div class="topic">
      <div id="header">
        <div class="p-header">
          <span class="p-h-one" @click="$router.replace('/home')"></span>
          <span class="p-h-two1">发现</span>
          <span class="p-h-two2">甄选家</span>
          <span class="p-h-three"></span>
          <span class="p-h-forth" @click="$router.replace('/cart')"></span>
        </div>
        <div class="line1"></div>
        <div class="t-middle">
          <span v-for="(tab,index) in totalTabs" :key="index" :class="{active:tab.tabId === 9}">{{tab.tabName}}</span>
        </div>
        <div class="line2"></div>
      </div>
      <div class="scroll">
        <div class="menu">
          <div class="main" v-if="totalManual.length>0" v-for="(manual,index) in totalManual" :key="index">
            <div class="choose" v-for="(topic,index) in manual.topics"
                 :key="topic.topicId" v-if="topic.type == '0'">
              <div class="c-name">
                <img :src="topic.avatar" alt="">
                <span>{{topic.nickname}}</span>
              </div>
              <div class="c-title">{{topic.title}}</div>
              <div class="c-pic">
                <img :src="topic.picUrl" alt="">
              </div>
              <div class="c-count">
                <span class="iconfont icon-yanjing"></span>
                <span class="per">{{topic.readCount}}人看过</span>
              </div>
            </div>
            <div class="other" v-for="(topic,index) in manual.topics"
                 :key="topic.topicId"  v-if="topic.type == '1' || topic.type == '2'">
              <div class="o-info">
                <div class="c-name">
                  <img :src="topic.avatar" alt="">
                  <span>{{topic.nickname}}</span>
                </div>
                <div class="c-title">{{topic.title}}</div>
                <div class="c-subtitle">{{topic.subTitle}}</div>
                <div class="c-count">
                  <span class="iconfont icon-yanjing"></span>
                  <span class="per">{{topic.readCount}}人看过</span>
                </div>
              </div>
              <div class="o-pic">
                <img :src="topic.picUrl" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';

  export default {
    mounted(){
      //rem适配
      let meta = document.createElement("meta");
      meta.setAttribute("name",'viewport')
      meta.setAttribute("content",'width=device-width,initial-scale=1')
      document.head.appendChild(meta);

      this.$store.dispatch('getTabs');
      this.$store.dispatch('getManual');
      // this.$store.dispatch('getAutoOne');
      new BScroll('.scroll',{
        click:true
      })
    },
    computed:{
      ...mapState({
        totalTabs:state => state.topic.totalTabs,
        totalManual:state => state.topic.totalManual
      }),

    },

    beforeDestroy(){
      let meta = document.createElement("meta");
      meta.setAttribute("name",'viewport')
      meta.setAttribute("content",'width=device-width,initial-scale=0.5')
      document.head.appendChild(meta)
    }
  }
</script>

<style lang="less" scoped>
  @b:1.33333333;
  .topic{
    width:100%;
    height: 667px;
    #header{
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      z-index: 5;
      .p-header{
        height: 1rem*@b;
        width: 100%;
        background-color: #fafafa;
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
          &.p-h-two1{
            position: absolute;
            top: 13px;
            left: 134px;
            font-size:0.4rem*@b;
            color: #b4282d;
            font-weight: bold;
          }
          &.p-h-two2{
            position: absolute;
            top: 17px;
            left: 189px;
            font-size:16px;
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
      .t-middle{
        width: 100%;
        height: .72rem*@b;
        line-height: .72rem*@b;
        display: flex;
        background-color: #fafafa;
        span{
          flex:1;
          text-align: center;
          font-size: .28rem*@b;
          width: 36px;
          &.active{
            color: #B4282D;
            border-bottom: .04rem*@b solid #B4282D
          }
        }
      }
      .line1{
        position: absolute;
        top: 50px;
        left: 0px;
        z-index: 10;
        height: 1px;
        width: 100%;
        background-color: #ccc;
      }
      .line2{
        position: absolute;
        top: 86px;
        left: 0px;
        z-index: 10;
        height: 1px;
        width: 100%;
        background-color: #ccc;
      }
    }
    .scroll{
      width:100%;
      height: 100%;
      .menu{
        margin: 100px 0;
        margin-bottom: 50px;
        .main{
          .choose{
            width: 100%;
            background: #fff;
            margin: .2rem*@b 0;
            box-sizing: border-box;
            padding: .36rem*@b .3rem*@b;
            .c-name{
              position: relative;
              font-size: .28rem*@b;
              color: #333;
              line-height: .36rem*@b;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: .24rem*@b;
              img{
                width: .56rem*@b;
                height: .56rem*@b;
                overflow: hidden;
                border-radius: 50%;
                box-sizing: border-box;
                border: .01rem*@b solid #d9d9d9;
                margin-right: .12rem*@b;
              }
              span{
                position: absolute;
                top: 7px;
                left: 34px;
                font-size: .28rem*@b;
                color: #333;
                line-height: .36rem*@b;
              }
            }
            .c-title{
              font-size: .36rem*@b;
              color: #333;
              line-height: .52rem*@b;
              margin: -.08rem*@b 0 .16rem*@b 0;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              font-family: PingFangSC-Regular;
            }
            .c-pic{
              width: 6.9rem*@b;
              height: 3.76rem*@b;
              position: relative;
              margin-bottom: .2rem*@b;
              overflow: hidden;
              border-radius: .08rem*@b;
              img{
                width: 6.9rem*@b;
                height: 3.76rem*@b;
              }
            }
            .c-count{
              position: relative;
              font-size: .22rem*@b;
              color: #999;
              line-height: .32rem*@b;
              margin-top: .18rem*@b;
              .per{
                position: absolute;
                top: 4px;
                left: 22px;
              }
              .icon-yanjing{
                display: inline-block;
                width: .28rem*@b;
                height: .2rem*@b;
                vertical-align: middle;
                margin-right: .08rem*@b;
                color: #999;
              }
            }
          }
          .other{
            position: relative;
            padding: .32rem*@b .3rem*@b;
            background-color: #fff;
            margin: .2rem*@b 0;
            box-sizing: border-box;
            overflow: hidden;
            .o-info{
              width: 5rem;
              float: left;
              .c-name{
                position: relative;
                font-size: .28rem*@b;
                color: #333;
                line-height: 1rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: .24rem*@b;
                img{
                  width: .56rem*@b;
                  height: .56rem*@b;
                  overflow: hidden;
                  border-radius: 50%;
                  box-sizing: border-box;
                  border: .01rem*@b solid #d9d9d9;
                  margin-right: .12rem*@b;
                }
                span{
                  position: absolute;
                  top: 7px;
                  left: 34px;
                  font-size: .28rem*@b;
                  color: #333;
                  line-height: .36rem*@b;
                }
              }
              .c-title{
                font-size: .36rem*@b;
                color: #333;
                line-height: .52rem*@b;
                margin: -.08rem*@b 0 .16rem*@b 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                font-family: PingFangSC-Regular;
              }
              .c-subtitle{
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: .28rem*@b;
                line-height: .4rem*@b;
                padding-top: .08rem*@b;
                color: #7f7f7f;
                margin-top: -10px;
              }
              .c-count{
                position: relative;
                font-size: .22rem*@b;
                color: #999;
                line-height: .32rem*@b;
                margin-top: 0.24rem;
                .per{
                  position: absolute;
                  top: 4px;
                  left: 22px;
                }
                .icon-yanjing{
                  display: inline-block;
                  width: .28rem*@b;
                  height: .2rem*@b;
                  vertical-align: middle;
                  margin-right: .08rem*@b;
                  color: #999;
                }
              }
            }
            .o-pic{
              width: 2.72rem*@b;
              height: 2.72rem*@b;
              position: relative;
              overflow: hidden;
              float: right;
              border-radius: .08rem*@b;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }

</style>
