<template>
  <div>
    <div class="p-header">
      <span class="p-h-one" @click="$router.replace('/home')"></span>
      <span class="p-h-two"></span>
      <span class="p-h-three"></span>
      <span class="p-h-forth" @click="$router.replace('/cart')"></span>
    </div>
    <div class="p-way-footer" :class="{active:isShowPhone || isShowReg}">
      <div class="logo">
        <img src="./image/logo.png" alt="">
      </div>
      <div class="loginWay" @click="changeToPhone(1)">
        <span class="iconfont icon-shouji1"></span>
        <span class="phone">手机号码登录</span>
      </div>
      <div class="loginWay diff"  @click="changeToPhone(2)">
        <span class="iconfont icon-youjian"></span>
        <span class="mail">邮箱账号登录</span>
      </div>
      <div class="register" @click="goToReg(3)">
        <span>手机号快捷注册</span>
        <span class="iconfont icon-iconfontjiantou2"></span>
      </div>
      <div class="bottom">
        <div class="connectWay">
          <span class="iconfont icon-weixin"></span>
          <span>微信</span>
        </div>&nbsp;&nbsp;|
        <div class="connectWay">
          <span class="iconfont icon-QQ"></span>
          <span>QQ</span>
        </div>&nbsp;&nbsp;|
        <div class="connectWay">
          <span class="iconfont icon-weibo"></span>
          <span>微博</span>
        </div>
      </div>
    </div>
    <div class="p-way-phone" :class="{active:!isShowPhone || isShowReg}">
      <div class="logo"><img src="./image/logo.png" alt=""></div>
      <div class="loginWay">
        <input type="text" :placeholder="toggleId == '1'?'请输入手机号':'邮箱账号'" class="one">
        <div class="getCode" v-if="toggleId == '1'" @click="getCode">
          {{isGetCode?`${allTime}s后重新获取`:'获取验证码'}}
        </div>
        <div class="line1"></div>
        <input type="text" :placeholder="toggleId == '1'?'请输入短信验证码':'密码'" class="two">
        <div class="line2"></div>
        <div class="prom">
          <span>{{toggleId == '1'?'遇到问题':'注册账号'}}</span>
          <span>{{toggleId == '1'?'使用密码验证登录':'忘记密码'}}</span>
        </div>
        <div class="loginWay1" @click="$router.replace('/ucenter')">
          <span class="phone">登录</span>
        </div>
        <div class="loginWay1 diff"  @click="changeToPhone(1)">
          <span class="mail">其他登录方式</span>
        </div>
        <div class="regNum" v-if="toggleId == '1'" @click="goToReg(3)">注册账号></div>
      </div>
    </div>
    <div class="p-way-reg" :class="{active:isShowReg}">
      <div class="reg-footer">
        <div class="reg-footer-phone">手机号注册</div>
        <div class="loginWayTo">
          <input type="text" :placeholder="regId == '3'?'请输入手机号':'邮箱账号'" class="one">
          <div class="getCode" v-if="regId == '3'">获取验证码</div>
          <div class="line1"></div>
          <input type="text" :placeholder="regId == '3'?'请输入短信验证码':'密码'" class="two">
          <div class="line2"></div>
          <input type="text" :placeholder="regId == '3'?'请输入密码':'密码'" class="two">
          <div class="loginWay1" @click="">
            <span class="phone">注册</span>
          </div>
          <div class="serve">
            <span class="check">
              <input type="checkbox">
            </span>
            <span>我同意</span>
            <a href="">《服务条款》</a>
            <span>和</span>
            <a href="">《网易隐私政策》</a>
          </div>
          <div class="regNum" v-if="regId == '3'">邮箱账号注册></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShowPhone:false,
        isShowReg:false,
        toggleId:'',
        regId:'',
        isGetCode:false,
        allTime:0
      }
    },
    methods:{
      changeToPhone(id){
        this.toggleId = id;
          this.isShowPhone = !this.isShowPhone
      },
      goToReg(id){
        this.regId = id;
        this.isShowReg = !this.isShowReg
      },
      getCode(){
        this.isGetCode = true;
        this.allTime = 30;
        let intervalId = setInterval(()=>{
          this.allTime--;
          if(this.allTime <= 0){
            this.allTime = 0;
            this.isGetCode = false;
            clearInterval(intervalId)
          }
        },1000);
      }
    },
    mounted(){
      let meta = document.createElement("meta");
      meta.setAttribute("name",'viewport')
      meta.setAttribute("content",'width=device-width,initial-scale=1')
      document.head.appendChild(meta)
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
  .p-header{
    height: 1.16rem;
    width: 100%;
    background-color: #fafafa;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
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
      &.p-h-two{
        position: absolute;
        top: 10px;
        right: 0;
        left: 0;
        margin: 0 auto;
        width: 2.29333rem;
        height: .72rem;
        background-position: 0 -1.70667rem;
        background-image: url('./image/bg.png');
        background-repeat: no-repeat;
        background-size: 2.29333rem 5.6rem;
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
  .p-way-footer{
    position: relative;
    height: 100%;
    background: #F2F5F4;
    margin-top: 1.17333rem;
    &.active{
      display: none;
    }
    .logo{
      text-align: center;
      padding-top: 2.13333rem;
      padding-bottom: 2.13333rem;
      img{
        width: 3.57333rem;
        height: 1.2rem
      }
    }
    .loginWay{
      text-align: center;
      font-size: .37333rem;
      color: #fff;
      border: 1px solid #b4282d;
      background-color: #b4282d;
      border-radius: 4px;
      overflow: hidden;
      margin: 0 auto;
      margin-bottom: .42667rem;
      width: 335px;
      height: 1.25333rem;
      line-height: 1.25333rem;
      box-sizing: border-box;
      .iconfont{
        margin-right: 5px;
      }
    }
    .diff{
      border: 1px solid #b4282d;
      background-color:transparent;
      color: #b4282d;
    }
    .register{
      margin: 0 auto;
      color: #333;
      font-size: .37333rem;
      text-align: center;
      width: 335px;
      .icon-iconfontjiantou2{
        position: relative;
        top: 1px;
      }
    }
    .bottom{
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -205px;
      height: .53333rem;
      text-align: center;
      font-size: 17px;
      color: #7F7F7F;
      .connectWay{
        display: inline-block;
        font-size: .37333rem;
        line-height: .53333rem;
        height: .53333rem;
        color: #7F7F7F;
        margin-left: .06667rem;
        padding: 0 .3rem;
      }
    }
  }
  .p-way-phone{
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 70px;
    margin-bottom: 0;
    background-color: #fff;
    &.active{
      display: none;
    }
    img{
      width: 2.56rem;
      height: .85333rem;
    }
    .loginWay{
      position: relative;
      padding: 0 0.5rem;
      padding-top: 2rem;
      margin-left: -30px;
      padding-bottom: 162px;
      input{
        width: 8.27rem;
        height: 0.6rem;
        font-size: 0.4rem;
        line-height: 0.6rem;
        margin: 0.5rem 0;
        padding-left: 0;
        border: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        letter-spacing: normal;
      }
      .getCode{
        position: absolute;
        top: 150px;
        right: 28px;
        width: 2.6rem;
        height: 0.75rem;
        text-align: center;
        color: #333;
        font-size: 14px;
        background: #fff;
        line-height: 0.75rem;
        border: 1px solid #7F7F7F;
        border-radius: 4px;
      }
      .line1{
        position: absolute;
        top: 124px;
        left: 47px;
        height: 0.5px;
        width: 335px;
        z-index: 4;
        background: #d9d9d9;
      }
      .line2{
        position: absolute;
        top: 183px;
        left: 47px;
        height: 0.5px;
        width: 335px;
        z-index: 4;
        background: #d9d9d9;
      }
      .prom{
        margin-top: 10px;
        color: #333;
        font-size: 0.4rem;
        height: 0.6rem;
        padding-bottom: 16px;
        line-height: 0.6rem;
        padding-left: 30px;
        span{
          &:first-child{
            color: #bdbdbd;
            float: left;
          }
          &:last-child{
            float: right;
          }
        }
      }
      .loginWay1{
        text-align: center;
        font-size: .37333rem;
        color: #fff;
        border: 1px solid #b4282d;
        background-color: #b4282d;
        border-radius: 4px;
        overflow: hidden;
        margin: 0 auto;
        margin-bottom: .42667rem;
        margin-top: 10px;
        margin-left: 30px;
        width: 335px;
        height: 1.25333rem;
        line-height: 1.25333rem;
        box-sizing: border-box;
        .iconfont{
          margin-right: 5px;
        }
      }
      .diff{
        border: 1px solid #b4282d;
        background-color:transparent;
        color: #b4282d;
      }
      .regNum{
        margin-top: .42667rem;
        text-align: center;
        font-size: .37333rem;
        line-height: .53333rem;
        color: #333;
      }
    }
  }
  .p-way-reg{
    width: 100%;
    margin-top: 45px;
    background-color: #fff;
    display: none;
    &.active{
      display: block;
    }
    .reg-footer{
      .reg-footer-phone{
        padding: .53333rem 0 0;
        text-align: center;
        font-size: .48rem;
        line-height: .69333rem;
        color: #333;
      }
    }
    .loginWayTo{
      position: relative;
      padding: 0 0.5rem;
      padding-top: 2rem;
      padding-bottom: 162px;
      input{
        width: 8.27rem;
        height: 0.6rem;
        font-size: 0.4rem;
        line-height: 0.6rem;
        margin: 0.5rem 0;
        padding-left: 0;
        border: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        letter-spacing: normal;
      }
      .getCode{
        position: absolute;
        top: 150px;
        right: 28px;
        width: 2.6rem;
        height: 0.75rem;
        text-align: center;
        color: #333;
        font-size: 14px;
        background: #fff;
        line-height: 0.75rem;
        border: 1px solid #7F7F7F;
        border-radius: 4px;
      }
      .line1{
        position: absolute;
        top: 124px;
        left: 17px;
        height: 1.5px;
        width: 335px;
        z-index: 4;
        background: #d9d9d9;
      }
      .line2{
        position: absolute;
        top: 186px;
        left: 17px;
        height: 1.5px;
        width: 335px;
        z-index: 4;
        background: #d9d9d9;
      }
      .prom{
        margin-top: 10px;
        color: #333;
        font-size: 0.4rem;
        height: 0.6rem;
        padding-bottom: 16px;
        line-height: 0.6rem;
        padding-left: 30px;
        span{
          &:first-child{
            color: #bdbdbd;
            float: left;
          }
          &:last-child{
            float: right;
          }
        }
      }
      .loginWay1{
        text-align: center;
        font-size: .37333rem;
        color: #fff;
        border: 1px solid #b4282d;
        background-color: #b4282d;
        border-radius: 4px;
        overflow: hidden;
        margin: 0 auto;
        margin-bottom: .42667rem;
        margin-top: 10px;
        width: 335px;
        height: 1.25333rem;
        line-height: 1.25333rem;
        box-sizing: border-box;
        .iconfont{
          margin-right: 5px;
        }
      }
      .regNum{
        margin-top: .7rem;
        text-align: center;
        font-size: .37333rem;
        line-height: .53333rem;
        color: #333;
      }
      .serve{
        font-size: 12px;
        span{
          color: #999;
          &.check{
            display: block;
            float: left;
            margin-right: 5px;
            width: 14px;
            margin-top: -1px;
            height: 14px;
            cursor: pointer;
            border: solid 1px #aaa;
            color: #999;
            font-size: 12px;
            input{
              width: 14px;
              height: 14px;
              margin: 0;
              opacity: 0;
            }
          }
        }
        a{
          color: #007AFF;
          text-decoration: none
        }
      }
    }
  }
</style>
