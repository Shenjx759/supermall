/*
 * @Author: your name
 * @Date: 2020-03-25 18:49:06
 * @LastEditTime: 2020-03-25 19:31:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\store\actions.js
 */
import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutations-type'

export default {
  addToCart(context, payload) {
    // 判断购物车中是否已有该商品
    let findResult = context.state.goodsCart.find(currentVal => currentVal.iid === payload.iid)
    if (findResult) { // 已有该商品
      context.commit(ADD_COUNT, findResult)
    } else {
      context.commit(ADD_TO_CART, payload)
    }
  }
}
