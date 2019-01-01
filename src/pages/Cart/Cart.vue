<template>
  <div>
    <div class="header">
       <div class="left">购物车</div>
       <div class="right">领券</div>
    </div>
    <div class="footer">
      <ul class="up">
        <li>
          <span class="iconfont icon-yuanquan"></span>
          <span class="mainTxt">30天无忧退货</span>
        </li>
        <li>
          <span class="iconfont icon-yuanquan"></span>
          <span class="mainTxt">48小时快速退款</span>
        </li>
        <li>
          <span class="iconfont icon-yuanquan"></span>
          <span class="mainTxt">满88元免邮费</span>
        </li>
      </ul>
      <div class="down">
        <div class="d-t"></div>
        <div class="d-m">去添加点什么吧</div>
        <div class="d-b" @click="$router.push('/profile')">登录</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .header{
  height: 1.17333rem;
  padding: 0 .4rem;
  line-height: 1.17333rem;
  text-align: center;
  background-color: #fff;
  position: relative;
  .left{
    font-size: .48rem
  }
  .right{
    position: absolute;
    top: 0;
    right: 57px;
    font-size: .4rem;
    color: #B4282D;
  }
}
  .footer{
    position: fixed;
    top: 1.17333rem;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f4f4f4;
    text-align: center;
    .up{
      height: .93333rem;
      padding: 0 .4rem;
      background: #f4f4f4;
      display: flex;
      align-items: center;
      justify-content: space-between;
      li{
        font-size: .32rem;
        color: #666;
        .icon-yuanquan{
          margin-right: -0.1rem;
          position: relative;
          top: -1px;
        }
      }
    }
    .down{
      .d-t{
        vertical-align: middle;
        width: 3.30667rem;
        height: 3.30667rem;
        margin: 0 auto;
        margin-top: 350px;
        background-image: url("./images/cart.png");
        background-size: 3.30667rem 3.30667rem;
        background-position: center center;
        background-repeat: no-repeat
      }
      .d-m{
        margin-bottom: .66667rem;
        margin-top: -15px;
        line-height: 1;
        font-size: .37333rem;
        color: #999
      }
      .d-b{
        width: 6.4rem;
        height: 1.22667rem;
        font-size: .4rem;
        line-height: 1.22667rem;
        color: #fff;
        background-color: #b4282d;
        border-radius: .04rem;
        margin: 0 auto;
      }
    }
  }
</style>
