import {
  RECEIVE_HOME_DATA
} from '../mutation-type';

import {
  reqHomeData
} from '../../api'
const state = {
 homedata:{}
};
const actions = {
  async getHomeData({commit}){
    const result = await reqHomeData()
    if(result.code === 0){
      let homedata = result.data
      commit(RECEIVE_HOME_DATA,{homedata})
    }
  }
};
const mutations ={
  [RECEIVE_HOME_DATA](state,{homedata}){
    state.homedata = homedata
  }
}
export default {
  state,
  actions,
  mutations
}
