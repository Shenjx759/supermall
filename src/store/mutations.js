/*
 * @Author: your name
 * @Date: 2020-03-25 18:38:23
 * @LastEditTime: 2020-03-25 18:55:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\store\mutations.js
 */
import {
  ADD_TO_CART,
  ADD_COUNT
} from './mutations-type';

export default {
  [ADD_TO_CART](state, payload) {
    state.goodsCart.push(payload)
  },
  [ADD_COUNT](state, payload) {
    payload.count++
  }
}
