<!--
 * @Author: your name
 * @Date: 2020-03-31 15:32:44
 * @LastEditTime: 2020-03-31 15:35:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\profile\components\ProfileNav.vue
 -->
<template>
  <nav-bar>
    <div slot="center">个人中心</div>
  </nav-bar>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "ProfileNav",
  components: {
    NavBar
  }
};
</script>
<style scoped>
</style>