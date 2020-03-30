<!--
 * @Author: your name
 * @Date: 2020-03-30 10:57:38
 * @LastEditTime: 2020-03-30 17:34:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\category\components\CategoryMenu.vue
 -->
<template>
  <scroll class="scroll">
    <div class="menu">
      <div
        class="menu-item"
        v-for="(item, index) in menuData"
        @click="changeMenu(index)"
        :key="index"
        :class="{active: currentIndex === index}"
      >{{item.title}}</div>
    </div>
  </scroll>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "CategoryMenu",
  props: {
    menuData: {
      type: Array,
      required: true
    }
  },
  components: {
    Scroll
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    changeMenu(i) {
      this.currentIndex = i;
      this.$emit("changeMenu", i);
    }
  }
};
</script>
<style scoped>
.scroll {
  background-color: #f6f6f6;
  width: 100px;
  height: 100%;
}
.menu-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}
.menu-item.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>