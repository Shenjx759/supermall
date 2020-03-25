<!--
 * @Author: your name
 * @Date: 2020-03-25 14:31:49
 * @LastEditTime: 2020-03-25 19:33:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\cart\components\CartList.vue
 -->
<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in cartList" :product="item" :key="index" />
  </div>
</template>
<script>
import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  props: {
    cartList: {
      type: Array,
      required: true
    }
  },
  components: {
    CartListItem
  }
};
</script>
<style scoped>
</style>