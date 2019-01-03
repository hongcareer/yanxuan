import Home from '../pages/Home/Home'
import Item from '../pages/Item/Item'
import Topic from '../pages/Topic/Topic'
import Cart from '../pages/Cart/Cart'
import Profile from '../pages/Profile/Profile'
import ItemInfo from '../pages/Item/ItemInfo/ItemInfo';
import UCenter from '../pages/UCenter/UCenter'
export default [
  {
    path:'/home',
    component:Home,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/item',
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
    meta: {
      showFooter: true
    }
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
]
