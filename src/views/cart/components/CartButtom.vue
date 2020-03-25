<!--
 * @Author: your name
 * @Date: 2020-03-25 15:08:39
 * @LastEditTime: 2020-03-25 20:01:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\cart\components\CartButtom.vue
 -->
<template>
  <div class="bottom-menu">
    <span>全选</span>
    <span class="total-price">合计:{{settlementMoney}}</span>
    <span class="buy-product">去付款({{settlementCount}})</span>
  </div>
</template>
<script>
export default {
  name: "CartButtom",
  props: {
    settlementCount: {
      type: Number,
      default: 0
    },
    settlementMoney: {
      type: [String, Number],
      default: 0
    }
  }
};
</script>
<style scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 49px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}

.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}

.bottom-menu .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>