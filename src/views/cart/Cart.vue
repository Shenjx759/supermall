<!--
 * @Author: your name
 * @Date: 2020-03-11 20:23:32
 * @LastEditTime: 2020-03-24 21:21:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\shopcart\ShopCart.vue
 -->
<template>
<div>
  <h2>购物车</h2>
  {{$store.state.goodsCart}}
</div>
</template>

<script>
  export default {
    name: "ShopCart"
  }
</script>

<style scoped>

</style>
