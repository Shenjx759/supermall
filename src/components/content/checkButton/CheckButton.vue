<!--
 * @Author: your name
 * @Date: 2020-03-25 15:42:04
 * @LastEditTime: 2020-03-25 21:12:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\components\content\checkButton\CheckButton.vue
 -->
<template>
  <div class="icon-selector" :class="{'selector-active': checked}">
    <img src="~/assets/img/cart/tick.svg" alt />
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
.icon-selector {
  position: relative;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}

.selector-active {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>
