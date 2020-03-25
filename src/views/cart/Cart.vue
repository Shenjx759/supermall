<!--
 * @Author: your name
 * @Date: 2020-03-11 20:23:32
 * @LastEditTime: 2020-03-25 19:58:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\shopcart\ShopCart.vue
 -->
<template>
  <div class="cart">
    <!-- 购物车导航 -->
    <cart-nav class="cart-nav" :cart-count="cartCount" />
    <scroll class="content" ref="scroll">
      <!-- 购物车列表 -->
      <cart-list :cart-list="cart" />
    </scroll>
    <cart-buttom :settlement-count="cartCheckedCount" :settlement-money="cartSettlementMoney" />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import CartNav from "./components/CartNav";
import CartList from "./components/CartList";
import CartButtom from "./components/CartButtom";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    Scroll,
    CartNav,
    CartList,
    CartButtom
  },
  computed: {
    ...mapGetters([
      "cart",
      "cartCount",
      "cartCheckedCount",
      "cartSettlementMoney"
    ])
  }
};
</script>

<style scoped>
.cart {
  position: relative;
  /* z-index: 9; */
  height: 100vh; /* 可视化单位  */
}
.cart-nav {
  /* position: relative; */
  /* z-index: 9; */
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: calc(49px + 44px);
  right: 0;
  left: 0;
}
</style>
