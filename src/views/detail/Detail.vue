<!--
 * @Author: your name
 * @Date: 2020-03-17 21:26:52
 * @LastEditTime: 2020-03-18 21:10:15
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
      <detail-info :detail-info="detailInfo" />
      <detail-param-info :param-info="paramsInfo" />
    </scroll>
  </div>
</template>

<script>
  import { getGoodDetailByIid, GoodsInfo, ShopInfo, ParamInfo } from 'api/goodDetail'

  import DetailNavBar from './components/DetailNavBar'
  import DetailSwiper from './components/DetailSwiper'
  import DetailBaseInfo from './components/DetailBaseInfo'
  import DetailShopInfo from './components/DetailShopInfo'
  import DetailParamInfo from './components/DetailParamInfo'
  import DetailInfo from './components/DetailInfo'

  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailInfo,
      DetailParamInfo,
      Scroll
    },
    data() {
      return {
        iid: '',
        topImages: [],
        goodsInfo: {},
        shopInfo: {},
        paramsInfo: {},
        detailInfo: {}
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
        // 获取商家信息
        this.shopInfo = new ShopInfo(data.shopInfo)
        // 获取商品详情信息
        this.detailInfo = data.detailInfo
        // 获取参数信息
        this.paramsInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule)
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