<template>
  <div >
    <div class="topic">
      <div id="header">
        <div class="p-header">
          <span class="p-h-one" @click="$router.replace('/home')"></span>
          <span class="p-h-two1">发现</span>
          <span class="p-h-two2">甄选家</span>
          <span class="p-h-three" @click="$router.replace('/searchitem')"></span>
          <span class="p-h-forth" @click="$router.replace('/cart')"></span>
        </div>
        <div class="line1"></div>
        <div class="t-middle">
          <span v-for="(tab,index) in totalTabs" :key="index"
                :class="{active:$route.path === `/topic/${tab.tabId}`}"
                @click="$router.push(`/topic/${tab.tabId}`)">{{tab.tabName}}</span>
        </div>
        <div class="line2"></div>
      </div>
      <router-view />
    </div>

  </div>

</template>

<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';

  export default {
    mounted(){
      //rem适配
      this._initRem()
      this.$store.dispatch('getTabs');
    },
    computed:{
      ...mapState({
        totalTabs:state => state.topic.totalTabs
      }),
    },
    methods:{
      _initRem(){
        let meta = document.createElement("meta");
        meta.setAttribute("name",'viewport')
        meta.setAttribute("content",'width=device-width,initial-scale=1')
        document.head.appendChild(meta);
      },
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
    position: relative;
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
      position: absolute;
      top:90px;
      left: 0;
      width:100%;
      height: 100%;

    }
  }

</style>
