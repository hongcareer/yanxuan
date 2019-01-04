import Vue from 'vue';
import Vuex from 'vuex'
import home from './modules/home';
import item from './modules/item'
import topic from './modules/topic';
import user from './modules/user';
import search from './modules/search'

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    home,
    item,
    topic,
    user,
    search
  }
})
