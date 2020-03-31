<!--
 * @Author: your name
 * @Date: 2020-03-17 22:23:17
 * @LastEditTime: 2020-03-31 16:25:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\detail\components\DetailSwiper.vue
 -->
<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in goodTopImages" :key="index">
      <img :src="'http:' + item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    goodTopImages: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>