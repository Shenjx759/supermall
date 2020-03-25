<!--
 * @Author: your name
 * @Date: 2020-03-25 15:42:04
 * @LastEditTime: 2020-03-25 15:43:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\components\content\checkButton\CheckButton.vue
 -->
<template>
  <div>
    <div class="icon-selector">
      <img src="~/assets/img/cart/tick.svg" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  data() {
    return {};
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
