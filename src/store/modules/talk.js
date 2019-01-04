import {
  RECEIVE_TALK
} from '../mutation-type';

import {
  reqTalk,
} from '../../api'
const state = {
  totalTalk:{},
  page:1,
  size:20,
  csrf_token:'12c1977f99a1cbb725af3312b9e28aab',
  type:1
};
const actions = {
  //上拉自动获取数据
  // async getAutoOne({commit}){
  //   let {page,size,exceptIds} = state;
  //   page++;
  //   state.page = page;
  //   const result = await reqAutoOne({page,size,exceptIds});
  //   if(result.code == 200){
  //     let totalManualOne = result.data;
  //     commit(RECEIVE_AUTO_ONE,{totalManualOne})
  //   }
  // },

  // 获取评论
  async getTalks({commit}){
    let {page,size,type,csrf_token} = state;
    const result = await reqTalk({page,size,type,csrf_token});
    if(result.code == 200){
      let totalTalk = result.data;
      commit(RECEIVE_TALK,{totalTalk})
    }
  },
};
const mutations ={
  // [RECEIVE_AUTO_ONE](state,{totalManualOne}){
  //   for (var i = 0; i < totalManualOne.result.length; i++) {
  //     state.totalManual.push(totalManualOne.result[i])
  //   }
  // },
  [RECEIVE_TALK](state,{totalTalk}){
    state.totalTalk = totalTalk
  },
}
export default {
  state,
  actions,
  mutations
}
