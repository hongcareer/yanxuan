<template>
  <div>
    <div class="scroll">
      <div class="menu">
        <div class="main" v-if="totalManual.length>0" v-for="(manual,index) in totalManual" :key="index">
          <div class="choose" v-for="(topic,index) in manual.topics"
               :key="topic.topicId" v-if="topic.type == '0'">
            <div class="c-name" v-if="topic.avatar">
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
</template>

<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';
  export default {
    mounted(){
      this.$store.dispatch('getManual');
      this._initScroll();
    },
    computed:{
      ...mapState({
        totalTabs:state => state.topic.totalTabs,
        totalManual:state => state.topic.totalManual
      }),
    },
    methods:{
      _initScroll(){
        if(!this.BScroll){
          this.BScroll = new BScroll('.scroll',{
            click:true,
            pullUpLoad: {
              threshold: -30// 当上拉距离超过100px时触发 pullingUp 事件
            }
          })
        }else{
          this.BScroll.on('pullingUp',()=>{
            // this.BScroll.finishPullUp()
            if(this.intervalId){
              clearInterval(this.intervalId)
            }
            this.intervalId = setTimeout(()=>{
              clearInterval(this.intervalId)
              this.$store.dispatch('getAutoOne');//获取加载数据
              this.BScroll.finishPullUp()
            },1000)
            this.BScroll.finishPullUp()
          });
          this.BScroll.finishPullUp()
          this.BScroll.refresh()
        }
      },
    },
    watch:{
      totalManual(){
        this._initScroll();
      }
    },
  }
</script>

<style lang="less" scoped>
  @b:1.33333333;
  .scroll{
    position: absolute;
    top:90px;
    left: 0;
    width:100%;
    height: 100%;
    .menu{
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

</style>
