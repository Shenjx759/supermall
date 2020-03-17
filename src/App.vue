<template>
  <div id="app">
    <keep-alive><!-- 该标签可以让router-view中的组件不会进行销毁操作！ -->
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
