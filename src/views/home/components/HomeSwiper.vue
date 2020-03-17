<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="homeSwiperImgLoadFinish" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper"
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      imgIsLoading: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    homeSwiperImgLoadFinish(){
      if(!this.imgIsLoading){
        this.$emit('homeSwiperImgLoadFinish')
        this.imgIsLoading = true
      }
    }
  }
}
</script>

<style scoped>
</style>