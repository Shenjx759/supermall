<!--
 * @Author: your name
 * @Date: 2020-03-25 14:12:36
 * @LastEditTime: 2020-03-25 19:38:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\cart\components\CartNav.vue
 -->
<template>
  <nav-bar>
    <div slot="center">购物车({{cartCount}})</div>
  </nav-bar>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "CartNav",
  props: {
    cartCount: {
      type: Number,
      required: true
    }
  },
  components: {
    NavBar
  }
};
</script>
<style scoped>
</style>