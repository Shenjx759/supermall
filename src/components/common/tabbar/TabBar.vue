<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
}
</script>

<style scoped>
#tab-bar {
  display: flex; /* 使用flex布局 */
  height: 49px; /* 所有的手机tabbar公认设置成49px */
  background-color: #f6f6f6;
  position: fixed; /* 绝对定位 */
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.1); /* 设置光圈 */
}
</style>
