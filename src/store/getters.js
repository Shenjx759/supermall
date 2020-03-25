/*
 * @Author: your name
 * @Date: 2020-03-25 19:24:11
 * @LastEditTime: 2020-03-25 20:03:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\store\getters.js
 */
export default {
  cart(state) {
    return state.goodsCart
  },
  cartCount(state, getters) {
    return getters.cart.length
  },
  cartChecked(state) {
    return state.goodsCart.filter(currentVal => currentVal.checked)
  },
  cartCheckedCount(state, getters) {
    return getters.cartChecked.length
  },
  cartSettlementMoney(state, getters) {
    return '¥' + getters.cartChecked.reduce((prev, current) => {
      return prev + current.price * current.count
    }, 0)
  }
}
