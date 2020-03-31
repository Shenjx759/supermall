<!--
 * @Author: your name
 * @Date: 2020-03-11 20:23:32
 * @LastEditTime: 2020-03-31 22:07:50
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
    <cart-buttom
      :settlement-count="cartCheckedCount"
      :settlement-money="cartSettlementMoney"
      @checkedAll="checkedAll"
      @settle="settleCart"
      :is-checked-all="cartCheckedAll"
    />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import CartNav from "./components/CartNav";
import CartList from "./components/CartList";
import CartButtom from "./components/CartButtom";

import { mapGetters } from "vuex";

import { goodImageLoadFinishMixin } from "common/mixin";

export default {
  name: "Cart",
  mixins: [goodImageLoadFinishMixin],
  components: {
    Scroll,
    CartNav,
    CartList,
    CartButtom
  },
  methods: {
    settleCart() {
      if (!this.cartCount) {
        this.$toast.show("您的购物车是空的呢");
        return;
      }
      if (!this.cartCheckedCount) {
        this.$toast.show("请勾选需要结算的商品");
        return;
      }
      this.$toast.show("正在结算、请稍等");
      setTimeout(() => {
        this.$store.dispatch("clearCart").then(res => {
          this.$toast.show(res);
        });
      }, 2000);
    },
    checkedAll() {
      if (this.cartCheckedAll) {
        // 全选中的情况下，变成全部不选中
        // this.cart.forEach(currentVal => {
        //   currentVal.checked = false;
        // });
        this.cart.forEach(currentVal => (currentVal.checked = false));
      } else {
        // 不是全选的情况，都变成选中
        // this.cart.forEach(currentVal => {
        //   currentVal.checked = true;
        // });
        this.cart.forEach(currentVal => (currentVal.checked = true));
      }
    }
  },
  computed: {
    ...mapGetters([
      "cart",
      "cartCount",
      "cartCheckedCount",
      "cartSettlementMoney",
      "cartCheckedAll"
    ])
  },
  deactivated() {
    this.$refs.scroll.refresh();
    this.$EventBus.$off(
      "goodImageLoadFinish",
      this.goodImageLoadFinishListener
    );
  },
  activated() {
    this.$refs.scroll.refresh();
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
  bottom: calc(49px + 49px);
  right: 0;
  left: 0;
}
</style>
