<!--
 * @Author: your name
 * @Date: 2020-03-17 21:26:52
 * @LastEditTime: 2020-03-18 15:56:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\detail\Detail.vue
 -->
<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll ref="scroll" class="content">
      <detail-swiper :good-top-images="topImages" />
      <detail-base-info :base-info="goodsInfo" />
      <detail-shop-info :shop-info="shopInfo"/>
    </scroll>
  </div>
</template>

<script>
  import { getGoodDetailByIid, GoodsInfo, ShopInfo } from 'api/goodDetail'

  import DetailNavBar from './components/DetailNavBar'
  import DetailSwiper from './components/DetailSwiper'
  import DetailBaseInfo from './components/DetailBaseInfo'
  import DetailShopInfo from './components/DetailShopInfo'

  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll
    },
    data() {
      return {
        iid: '',
        topImages: [],
        goodsInfo: {},
        shopInfo: {}
      }
    },
    created() {
      // 将传过来的商品id进行保存
      this.iid = this.$route.params.iid
      // 根据商品id请求对应的商品明细数据
      getGoodDetailByIid(this.iid).then(res => {
        // 接收result
        const data = res.result
        // 打印data
        console.log(data)
        // 保存商品的轮播图
        this.topImages = data.itemInfo.topImages

        // 获取商品信息
        this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
        console.log(this.goodsInfo)
        // 获取商家信息
        this.shopInfo = new ShopInfo(data.shopInfo)
      })
    }
  }
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 9;
    height: 100vh;
    background-color: #fff;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 44px);
  }
</style>