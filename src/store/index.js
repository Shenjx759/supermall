/*
 * @Author: your name
 * @Date: 2020-03-24 21:11:16
 * @LastEditTime: 2020-03-25 19:24:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
