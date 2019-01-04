<template>
  <div>
    <div class="right" v-if="categoryL1List && id == '1022001'">
      <div class="banner" :style="{backgroundImage:`url(${categoryL1List[0].wapBannerUrl})`}"></div>
      <div class="cateList">
        <ul>
          <li v-for="(subCate,index) in categoryL1List[0].subCateList" :key="index">
            <div class="pic">
              <img :src="subCate.bannerUrl" alt="" />
            </div>
            <div class="txt">{{subCate.name}}</div>
          </li>
        </ul>
      </div>
    </div>
<!--//2-->
    <div class="right" v-if="categoryL1List && id == '109224000'">
      <div class="banner" :style="{backgroundImage:`url(${categoryL1List[1].wapBannerUrl})`}"></div>
      <div class="cateList">
        <ul>
          <li v-for="(subCate,index) in categoryL1List[1].subCateList" :key="index">
            <div class="pic">
              <img :src="subCate.bannerUrl" alt="" />
            </div>
            <div class="txt">{{subCate.name}}</div>
          </li>
        </ul>
      </div>
    </div>
    <!--3-->
    <div class="right" v-if="categoryL1List && id == '1087004'">
      <div class="banner" :style="{backgroundImage:`url(${categoryL1List[2].wapBannerUrl})`}"></div>
      <div class="cateList">
        <ul>
          <li v-for="(subCate,index) in categoryL1List[2].subCateList" :key="index">
            <div class="pic">
              <img :src="subCate.bannerUrl" alt="" />
            </div>
            <div class="txt">{{subCate.name}}</div>
          </li>
        </ul>
      </div>
    </div>
    <!--4-->
    <div class="right" v-if="categoryL1List && id == '109217021'">
      <div class="banner" :style="{backgroundImage:`url(${categoryL1List[3].wapBannerUrl})`}"></div>
      <div class="cateList">
        <ul>
          <li v-for="(subCate,index) in categoryL1List[3].subCateList" :key="index">
            <div class="pic">
              <img :src="subCate.bannerUrl" alt="" />
            </div>
            <div class="txt">{{subCate.name}}</div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props:{
      categoryL1List:Array,
      id:String
    }
  }
</script>

<style lang="less" scoped>
  .right{
    position: absolute;
    top: 91px;
    left:2.16rem ;
    /*height: 100%;*/
    /*margin-top: ;*/
    /*margin-left: 2.16rem;*/
    padding: .4rem .4rem .28rem;
    background-color: #fff;

    .banner{
      position: relative;
      width: 100%;
      height: 2.56rem;
      margin-bottom: .42667rem;
      background: center no-repeat #f4f4f4;
      background-size: cover;
      border-radius: 4px
    }
    .cateList{
      ul{
        overflow: hidden;
        li{
          margin-right: 32px;
          font-size: 0;
          width: 1.92rem;
          float: left;
          vertical-align: top;
          .pic{
            width: 1.92rem;
            height: 1.92rem;
            img{
              width: 1.92rem;
              height: 1.92rem;
            }
          }
          .txt{
            height: .96rem;
            font-size: .32rem;
            text-align: center;
            line-height: .48rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
</style>
