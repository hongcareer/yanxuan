import Home from '../pages/Home/Home'
import Item from '../pages/Item/Item'
import Topic from '../pages/Topic/Topic'
import Recom from '../pages/Topic/Recom/Recom'
import Cart from '../pages/Cart/Cart'
import Profile from '../pages/Profile/Profile'
import ItemInfo from '../pages/Item/ItemInfo/ItemInfo';
import UCenter from '../pages/UCenter/UCenter';
import SearchItem from '../pages/SearchItem/SearchItem'
export default [
  {
    path:'/home',
    component:Home,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/item/cateList',
    component:Item,
    children:[
      {
        path:'/item/cateList/:id',
        component:ItemInfo,
        meta: {
          showFooter: true
        },
      }
    ],
    meta: {
      showFooter: true
    }
  },
  {
    path:'/topic',
    component:Topic,
    children:[
      {
        path:'/topic/9',
        component:Recom,
        meta: {
          showFooter: true
        },
      },
      {
        path:'/topic/4',
        component:Recom,
        meta: {
          showFooter: true
        },
      },
      {
        path:'/topic/5',
        component:Recom,
        meta: {
          showFooter: true
        },
      },
      {
        path:'/topic/7',
        component:Recom,
        meta: {
          showFooter: true
        },
      },
      {
        path:'/topic/6',
        component:Recom,
        meta: {
          showFooter: true
        },
      },

    ],
    meta: {
      showFooter: true
    },
    redirect: '/topic/9'
  },
  {
    path:'/cart',
    component:Cart,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/ucenter',
    component:UCenter,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/searchitem',
    component:SearchItem
  },
  {
    path:'/',
    redirect:'/home'
  }
]
