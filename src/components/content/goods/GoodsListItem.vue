<template>
  <div class="goods-item">
    <img :src="good.show.img" alt="">
    <div>
      <p>{{good.title}}</p>
      <span>{{good.price}}</span>
      <span>{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    good: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .goods-item{
    width: 48%;
  }
</style>
