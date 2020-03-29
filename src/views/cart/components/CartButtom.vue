<!--
 * @Author: your name
 * @Date: 2020-03-25 15:08:39
 * @LastEditTime: 2020-03-29 17:43:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\cart\components\CartButtom.vue
 -->
<template>
  <div class="bottom-menu">
    <div class="checked-all">
      <check-button class="checked-btn" @click.native="checkedAll" :checked="isCheckedAll" />
      <span @click="checkedAll">全选</span>
    </div>

    <div class="total-price">
      合计:
      <span style="color:red;">{{ settlementMoney }}</span>
    </div>
    <div class="buy-product" @click="settle">结算({{ settlementCount }})</div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartButtom",
  components: {
    CheckButton
  },
  props: {
    settlementCount: {
      type: Number,
      default: 0
    },
    settlementMoney: {
      type: [String, Number],
      default: 0
    },
    isCheckedAll: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkedAll() {
      this.$emit("checkedAll");
    },
    settle() {}
  }
};
</script>
<style scoped>
.bottom-menu {
  width: 100%;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 49px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.12);
  font-size: 14px;
  color: #888;
  /* padding-left: 35px; */
  box-sizing: border-box;
  display: flex;
  line-height: 49px;
}

.bottom-menu .checked-all {
  /* position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px; */
  flex: 1;
  text-align: center;
  line-height: 49px;
}

.bottom-menu .checked-btn {
  display: inline;
}

.bottom-menu .total-price {
  /* margin-left: 15px; */
  font-size: 14px;
  color: #666;
  flex: 1;
  text-align: right;
  padding: 0 8px 0 0;
}

.bottom-menu .buy-product {
  background-color: orangered;
  color: #fff;
  width: 80px;
  height: 43px;
  text-align: center;
  line-height: 43px;
  border-radius: 28px;
  flex: 1;
  margin: 3px 5px 3px 0;
}
</style>
