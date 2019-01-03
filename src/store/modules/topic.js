import {
  RECEIVE_TABS,
  RECEIVE_MANUAL,
  RECEIVE_AUTO_ONE
} from '../mutation-type';

import {
  reqTabs,
  reqManual,
  reqAutoOne,
} from '../../api'
const state = {
  totalTabs:[],
  totalManual:[],
  page:0,
  size:5,
  exceptIds:'6409,6201,6408,6410,6490,6488,5821,5716,5711,5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,4061,3629,3383'
};
const actions = {
  async getTabs({commit}){
    const result = await reqTabs();
    if(result.code == 200){
      let totalTabs = result.data
      commit(RECEIVE_TABS,{totalTabs})
    }
  },
  async getManual({commit}){
    const result = await reqManual();
    if(result.code == 200){
      let totalManual = result.data;
      commit(RECEIVE_MANUAL,{totalManual})
    }
  },
  //上拉自动获取数据
  async getAutoOne({commit}){
    let {page,size,exceptIds} = state;
    page++;
    state.page = page;
    const result = await reqAutoOne({page,size,exceptIds});
    if(result.code == 200){
      let totalManualOne = result.data;
      commit(RECEIVE_AUTO_ONE,{totalManualOne})
    }

  },
};
const mutations ={
  [RECEIVE_TABS](state,{totalTabs}){
    state.totalTabs = totalTabs
  },
  [RECEIVE_MANUAL](state,{totalManual}){
    state.totalManual = totalManual
  },
  [RECEIVE_AUTO_ONE](state,{totalManualOne}){
    for (var i = 0; i < totalManualOne.result.length; i++) {
      state.totalManual.push(totalManualOne.result[i])
    }
  },
}
export default {
  state,
  actions,
  mutations
}
