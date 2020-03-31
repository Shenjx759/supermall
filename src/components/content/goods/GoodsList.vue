<!--
 * @Author: your name
 * @Date: 2020-03-12 21:54:10
 * @LastEditTime: 2020-03-31 21:18:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\components\content\goods\GoodsList.vue
 -->
<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goods" :good="item" :key="index" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      required: true
    }
  },
  components: {
    GoodsListItem
  }
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
