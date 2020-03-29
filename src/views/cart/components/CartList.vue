<!--
 * @Author: your name
 * @Date: 2020-03-25 14:31:49
 * @LastEditTime: 2020-03-29 17:34:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\cart\components\CartList.vue
 -->
<template>
  <div class="cart-list">
    <div class="list" v-if="cartList.length !== 0">
      <cart-list-item v-for="(item, index) in cartList" :product="item" :key="index" />
    </div>
    <div class="cart-text" v-else>
      <img src="~assets/img/tabbar/shopcart_active.svg" />
      <div class="cart-text-a">购物车还是空的</div>
      <div class="cart-text-b">去挑几件中意的商品吧</div>
    </div>
    <div class="like">
      <img src="~assets/img/cart/like.png" alt />
    </div>
    <goods-list :goods="recommendData" />
  </div>
</template>
<script>
import { getRecommendData } from "api/goodDetail";

import GoodsList from "components/content/goods/GoodsList";

import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  props: {
    cartList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      recommendData: []
    };
  },
  components: {
    GoodsList,
    CartListItem
  },
  methods: {
    _getRecommendData() {
      getRecommendData()
        .then(res => {
          this.recommendData = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this._getRecommendData();
  }
};
</script>
<style scoped>
.cart-text {
  /* position: relative;
  top: 20%;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -20%); */
  padding-top: 28px;
  text-align: center;
}
.cart-text .cart-text-a {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: var(--color-text);
}
.cart-text .cart-text-b {
  font-size: 14px;
  color: var(--color-text);
}
.like {
  /* position: relative;
  top: 15%;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -15%); */
  padding: 28px 0 18px 0;
  text-align: center;
}
.like img {
  width: 180px;
}
</style>
