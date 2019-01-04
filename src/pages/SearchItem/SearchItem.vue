<template>
  <div>
    <div class="header" v-if="searchInfo.defaultKeyword">
      <input type="text" :placeholder="searchInfo.defaultKeyword.keyword" v-model="keywordPrefix">
      <span class="iconfont icon-sousuo"></span>
      <span @click="$router.back()">取消</span>
    </div>
    <div class="his">
      <div class="his-top">
        <span>历史记录</span>
        <span>删除</span>
      </div>
      <ul class="his-list">
        <li>wwwww</li>
      </ul>
    </div>
    <div class="footer" v-if="!keywordPrefix">
      <div class="hot" v-if=" searchInfo.hotKeywordVOList">热门搜索</div>
      <ul class="list">
        <li v-for="(hotKey) in searchInfo.hotKeywordVOList" :class="{active:hotKey.highlight === 1}">{{hotKey.keyword}}</li>
      </ul>
    </div>
    <ul class="searchList" v-if="isShow && infos.length>0">
      <li v-for="(info) in infos">
        {{info}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        keywordPrefix:'',
        isShow:false
      }
    },
    computed:{
      ...mapState({
        searchInfo:state => state.search.searchInfo,
        infos:state => state.search.infos
      })
    },
    mounted(){
      this.$store.dispatch('getSeach')
    },
    watch:{
      keywordPrefix(){
        const {keywordPrefix} = this;
        this.isShow = true;
        if(this.intervalId){
          clearInterval(this.intervalId)
        }
        this.intervalId = setTimeout(()=>{
          this.$store.dispatch('getAutoSearch',keywordPrefix)
        },1000)
        if(!keywordPrefix){
          this.isShow = false
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .header{
    padding: 0 .4rem;
    background-color: #fff;
    height: 88px;
    line-height: 82px;
    font-size: .37333rem;
    input{
      box-sizing: border-box;
      font-size: .37333rem;
      color: rgba(0,0,0,.8);
      width: 623px;
      line-height: .53333rem;
      padding-left: 0.733rem;
      background-color: #f4f4f4;
      height: .74667rem;
      border-radius: 4px;
      outline: none;
    }
    .icon-sousuo{
      font-size: .4rem;
      margin-left: -616px;
    }
    span{
      margin-left: 580px;
    }
  }
  .footer{
    font-size: .37333rem;
    color: #999;
    margin-bottom: .26667rem;
    padding: 0 .4rem .4rem;
    background-color: #fff;
    .hot{
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: .37333rem;
      color: #999
    }
    .list{
      margin-right: -.4rem;
      margin-bottom: -.42667rem;
      overflow: hidden;
      li{
        float: left;
        padding: 0 .2rem;
        margin-right: .42667rem;
        margin-bottom: .42667rem;
        line-height: .61333rem;
        border: 1px solid #999;
        border-radius: 4px;
        color: #333;
        &.active{
          border-color: #b4282d;
          color: #b4282d;
        }
      }
    }
  }
  .his{
    display: none;
    font-size: 0.37333rem;
    color: #999;
    margin-bottom: 0.26667rem;
    padding: 0 0.4rem 0.4rem;
    background-color: #fff;
    .his-top{
      height: 1.2rem;
      font-size: .37333rem;
      color: #999;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .his-list{
      margin-right: -.4rem;
      margin-bottom: -.42667rem;
      overflow: hidden;
      li{
        float: left;
        padding: 0 .2rem;
        margin-right: .42667rem;
        margin-bottom: .42667rem;
        line-height: .61333rem;
        border: 1px solid #999;
        border-radius: 4px;
        color: #333;
      }
    }
  }
  .searchList{
    position: relative;
    min-height: 1.38667rem;
    background-color: #fff;
    padding-left: 32px;
    box-sizing: border-box;
    li{
      height: 1.2rem;
      font-size: .37333rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #d9d9d9;
    }
  }
</style>
