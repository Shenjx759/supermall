<!--
 * @Author: your name
 * @Date: 2020-03-25 15:38:56
 * @LastEditTime: 2020-03-31 16:30:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\cart\components\CartListItem.vue
 -->
<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton :checked="product.checked" @click.native="checkedProduct" />
    </div>
    <div class="item-img">
      <img :src="'http:' + product.image" />
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{product.price}}</div>
        <!-- <div class="item-count right">x {{product.count}}</div> -->
        <div class="item-count right">
          <span class="reduce" @click="decrement">-</span>
          <!-- <input class="num" :value="product.count" /> -->
          <input class="num" :value="product.count" />
          <span class="add" @click="increment">+</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkedProduct() {
      this.product.checked = !this.product.checked;
    },
    decrement() {
      if (this.product.count > 1) this.product.count--;
    },
    increment() {
      this.product.count++;
    }
  }
};
</script>
<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  line-height: 30px;
}

.info-bottom .item-price {
  color: orangered;
}
.info-bottom .item-count {
  border: 1px solid #dcdfe6;
  border-radius: 8px;
  font-size: 15px;
}
.reduce,
.add {
  margin: 0 8px;
}

.num {
  width: 40px;
  background-color: #fff;
  border-radius: 5px;
  border: 0;
  color: #606266;
  display: inline-block;
  height: 30px;
  line-height: 1;
  text-align: center;
  padding: 0 5px;
}
</style>