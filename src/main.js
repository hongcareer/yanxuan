import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './mock/mockServer';
import Search from './components/Search/Search'
import {Button} from 'mint-ui'
Vue.component(Button.name, Button);
Vue.component('Search',Search)
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})

