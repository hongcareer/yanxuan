import {
  RECEIVE_USER,
  RECEIVE_LOGOUT
} from '../mutation-type';

import {
  // reUser,
} from '../../api'
const state = {
  user:''
};
const actions = {
   saveUser({commit},result){
      let user = result
      commit(RECEIVE_USER,{user})
   },
  reqLogOut({commit}){
      commit(RECEIVE_LOGOUT)
   }
};
const mutations ={
  [RECEIVE_USER](state,{user}){
    state.user = user
  },
  [RECEIVE_LOGOUT](state){
    state.user = ''
  },
}
export default {
  state,
  actions,
  mutations
}
