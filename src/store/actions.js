/*
 * @Author: your name
 * @Date: 2020-03-25 18:49:06
 * @LastEditTime: 2020-03-27 22:00:37
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
    return new Promise(resolve => {
      // 判断购物车中是否已有该商品
      let findResult = context.state.goodsCart.find(currentVal => currentVal.iid === payload.iid)
      if (findResult) { // 已有该商品
        context.commit(ADD_COUNT, findResult)
        resolve('商品数量加1')
      } else {
        context.commit(ADD_TO_CART, payload)
        resolve('加入购物车成功')
      }
    })
  }
}
