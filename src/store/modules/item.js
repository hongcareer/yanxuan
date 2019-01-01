import {
  RECEIVE_TOTAL_NUMBER,
  RECEIVE_ITEM_DATA
} from '../mutation-type';

import {
  reqTotalNumber,
  reqItemData
} from '../../api'
const state = {
  totalNumber:'',
  itemdatas:{}
};
const actions = {
  async getTotalNumber({commit}){
    const result = await reqTotalNumber();
    if(result.code == 200){
      let totalNumber = result.data
      commit(RECEIVE_TOTAL_NUMBER,{totalNumber})
    }
  },
  async getItemData({commit}){
    const result = await reqItemData();
    if(result.code == 0){
      let itemdatas = result.data
      commit(RECEIVE_ITEM_DATA,{itemdatas})
    }
  }
};
const mutations ={
  [RECEIVE_TOTAL_NUMBER](state,{totalNumber}){
    state.totalNumber = totalNumber
  },
  [RECEIVE_ITEM_DATA](state,{itemdatas}){
    state.itemdatas = itemdatas
  },
}
export default {
  state,
  actions,
  mutations
}
