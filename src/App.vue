<!--
 * @Author: your name
 * @Date: 2020-03-11 16:07:18
 * @LastEditTime: 2020-03-18 14:18:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\App.vue
 -->
<template>
  <div id="app">
    <keep-alive exclude="Detail"><!-- 该标签可以让router-view中的组件不会进行销毁操作！ -->
      <router-view />
    </keep-alive>
    <main-tabbar class="main-tabbar" />
  </div>
</template>

<script>
import MainTabbar from "components/content/mainTabbar/MainTabbar";

export default {
  name: "App",
  components: {
    MainTabbar
  }
};
</script>

<style scoped>
/* 引入指定css文件 */
@import "assets/css/base.css"
</style>
