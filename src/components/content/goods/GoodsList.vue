<template>
  <div class="goods-list">
    <goods-list-item v-for="(good, index) in goods" :good="good" :key="index"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem"
  export default {
    name: 'GoodsList',
    props: {
      goods: {
        type: Array,
        required: true
      }
    },
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>
