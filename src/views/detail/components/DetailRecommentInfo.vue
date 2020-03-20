<!--
 * @Author: your name
 * @Date: 2020-03-20 15:59:18
 * @LastEditTime: 2020-03-20 16:23:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\detail\components\DetailRecommentInfo.vue
 -->
<template>
  <goods-list :goods="recommendInfo" />
</template>
<script>
import GoodsList from "components/content/goods/GoodsList";
export default {
  name: "DetailRecommentInfo",
  components: {
    GoodsList
  },
  props: {
    recommendInfo: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
</style>