<!--
 * @Author: your name
 * @Date: 2020-03-11 20:23:32
 * @LastEditTime: 2020-03-29 16:38:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\category\Category.vue
 -->
<template>
  <div class="category">
    <category-nav class="category-nav" />
  </div>
</template>

<script>
import CategoryNav from "./components/CategoryNav";
export default {
  name: "Category",
  components: {
    CategoryNav
  }
};
</script>

<style scoped>
.category-nav {
  color: #fff;
  background-color: var(--color-tint);
}
</style>
