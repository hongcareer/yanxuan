import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './mock/mockServer';
import Search from './components/Search/Search'
Vue.component('Search',Search)
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})

