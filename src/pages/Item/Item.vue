<template>
  <div>
    <div class="top">
      <Search />
    </div>
    <div class="left">
        <ul class="leftList">
          <li v-for="(category,index) in categoryL1List" @click="$router.push(`/item/cateList/${category.id}`)"
              :class="{active:$route.path === `/item/cateList/${category.id}`}" :key="index">
            {{category.name}}
            <div class="line" :class="{active:$route.path === `/item/cateList/${category.id}`}"></div>
          </li>
        </ul>
      </div>
    <ItemInfo :categoryL1List="categoryL1List"/>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex';
  import ItemInfo from './ItemInfo/ItemInfo'
  export default {
    components:{
      ItemInfo
    },
    mounted(){
      this.$store.dispatch('getItemData');
    },
    methods:{
      async getCategoryInfo(id){
        console.log(id)
        this.infoId =await reqCategoryInfo(id);
        console.log(this.infoId)
      }
    },
    computed:{
      ...mapState({
        categoryL1List:state => state.item.itemdatas.categoryL1List
      })
    },
    watch:{
      categoryL1List(){
        this.$nextTick(()=>{
          new BScroll('.left',{
            click:true,
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .top{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8;
    display: flex;
    align-items: center;
    width: 100%;
    height: 1.17333rem;
    padding: 0 .4rem;
    box-sizing: border-box;
    background-color: #fff;
  }


  .left{
      position: absolute;
      top: 91px;
      left: 0;
      width: 2.16rem;
      height: 1150px;
      background-color: #fff;
      .leftList{
        padding-bottom: 1.84rem;
        overflow: hidden;
        li{
          position: relative;
          margin-top: .53333rem;
          width: 100%;
          height: .66667rem;
          text-align: center;
          border: none;
          color: #333;
          font-size: .37333rem;
          line-height: .66667rem;
          &.active{
            color: #ab2b2b;
          }
          .line{
            position: absolute;
            top: 0px;
            left: 0px;
            width: .08rem;
            height: .66667rem;
            background-color: #fff;
            &.active{
              background-color: #ab2b2b;
            }
          }
        }

      }
      &:after{
        content: '';
        position: absolute;
        background-color: rgba(0,0,0,.15);
        top: 0;
        bottom: 0;
        width: 1px;
        transform-origin: 100% 50% 0;
        right: 0;
      }
    }


</style>
