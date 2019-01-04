import {
  RECEIVE_SEARCH,
  RECEIVE_AUTO_SEARCH,
} from '../mutation-type';

import {
  reqSeach,
  reqAutoSearch
} from '../../api'
const state = {
  searchInfo:{},
  csrf_token:'12c1977f99a1cbb725af3312b9e28aab',
  infos:[]
};
const actions = {
  async getSeach({commit}){
    const {csrf_token} = state.csrf_token
    const result = await reqSeach({csrf_token});
    if(result.code == 200){
      let searchInfo = result.data
      commit(RECEIVE_SEARCH,{searchInfo})
    }
  },

  async getAutoSearch({commit},keywordPrefix){
    console.log(keywordPrefix)
    const result = await reqAutoSearch({keywordPrefix});
    if(result.code == 200){
      let infos = result.data
      commit(RECEIVE_AUTO_SEARCH,{infos})
    }
  }


};
const mutations ={
  [RECEIVE_SEARCH](state,{searchInfo}){
    state.searchInfo = searchInfo
  },
  [RECEIVE_AUTO_SEARCH](state,{infos}){
    state.infos = infos
  },
}
export default {
  state,
  actions,
  mutations
}
