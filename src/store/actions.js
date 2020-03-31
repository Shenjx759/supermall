/*
 * @Author: your name
 * @Date: 2020-03-25 18:49:06
 * @LastEditTime: 2020-03-31 22:02:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\store\actions.js
 */
import {
  ADD_COUNT,
  ADD_TO_CART,
  CLEAR_CART
} from './mutations-type'

export default {
  addToCart(context, payload) {
    return new Promise(resolve => {
      // 判断购物车中是否已有该商品
      let findResult = context.state.goodsCart.find(currentVal => currentVal.iid === payload.iid)
      if (findResult) { // 已有该商品
        context.commit(ADD_COUNT, findResult)
        resolve('该商品已经在购物车，数量+1')
      } else {
        context.commit(ADD_TO_CART, payload)
        resolve('加入购物车成功')
      }
    })
  },
  clearCart(context) {
    return new Promise(resolve => {
      let findResult = context.state.goodsCart.filter(currentVal => !currentVal.checked)
      context.commit(CLEAR_CART, findResult)
      resolve('结算成功，马上发货哈！')
    })
  }
}
