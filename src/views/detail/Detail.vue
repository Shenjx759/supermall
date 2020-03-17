<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" />
    <detail-swiper :good-top-images="topImages" />
  </div>
</template>

<script>
  import { getGoodDetailByIid } from 'api/goodDetail'

  import DetailNavBar from './components/DetailNavBar'
  import DetailSwiper from './components/DetailSwiper'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper
    },
    data() {
      return {
        iid: '',
        topImages: []
      }
    },
    created() {
      // 将传过来的商品id进行保存
      this.iid = this.$route.params.iid
      // 根据商品id请求对应的商品明细数据
      getGoodDetailByIid(this.iid).then(res => {
        // 接收result
        const data = res.result
        // 保存商品的轮播图
        this.topImages = data.itemInfo.topImages
        console.log(res)
      })
    }
  }
</script>

<style scoped>
  .detail-nav{
    box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.1);
  }
</style>