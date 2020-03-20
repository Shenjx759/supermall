<!--
 * @Author: your name
 * @Date: 2020-03-17 21:26:52
 * @LastEditTime: 2020-03-20 16:12:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\detail\Detail.vue
 -->
<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @detailNavClick="navClick" />
    <scroll ref="scroll" class="content" :probeType="3" @scroll="scrollRolling">
      <detail-swiper :good-top-images="topImages" ref="goodTopImage" />
      <detail-base-info :base-info="goodsInfo" />
      <detail-shop-info :shop-info="shopInfo" />
      <detail-info :detail-info="detailInfo" @detailImgLoadFinish="detailImgLoadFinish" />
      <detail-param-info :param-info="paramsInfo" ref="goodParamsInfo" />
      <detail-comment-info :comment-info="commentInfo" />
      <detail-recomment-info :recommend-info="recommendInfo" />
    </scroll>
  </div>
</template>

<script>
import {
  getGoodDetailByIid,
  GoodsInfo,
  ShopInfo,
  ParamInfo,
  getRecommendData
} from "api/goodDetail";

import DetailNavBar from "./components/DetailNavBar";
import DetailSwiper from "./components/DetailSwiper";
import DetailBaseInfo from "./components/DetailBaseInfo";
import DetailShopInfo from "./components/DetailShopInfo";
import DetailParamInfo from "./components/DetailParamInfo";
import DetailInfo from "./components/DetailInfo";
import DetailCommentInfo from "./components/DetailCommentInfo";
import DetailRecommentInfo from "./components/DetailRecommentInfo";

import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommentInfo,
    Scroll
  },
  data() {
    return {
      iid: "",
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      paramsInfo: {},
      detailInfo: {},
      commentInfo: {},
      recommendInfo: []
    };
  },
  methods: {
    scrollRolling() {
      // scroll滚动监听事件
      // console.log("1231");
    },
    detailImgLoadFinish() {
      // 商品详情图片都加载完之后、统一让better-scroll对象刷新一次、刷新用作于让scroll重新计算一次高度
      this.$refs.scroll.refresh();
    },
    navClick(e) {
      switch (e) {
        case 0:
          this.$refs.scroll.scrollTo(
            0,
            this.$refs.goodTopImage.$el.offsetTop,
            500
          );
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
      }
    },
    _getGoodDetailByIid() {
      // 将传过来的商品id进行保存
      this.iid = this.$route.params.iid;
      // 根据商品id请求对应的商品明细数据
      getGoodDetailByIid(this.iid).then(res => {
        // 接收result
        const data = res.result;
        // 打印data
        console.log(data);
        // 保存商品的轮播图
        this.topImages = data.itemInfo.topImages;
        // 获取商品信息
        this.goodsInfo = new GoodsInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 获取商家信息
        this.shopInfo = new ShopInfo(data.shopInfo);
        // 获取商品详情信息
        this.detailInfo = data.detailInfo;
        // 获取参数信息
        this.paramsInfo = new ParamInfo(
          data.itemParams.info,
          data.itemParams.rule
        );
        // 获取商品评论信息
        this.commentInfo = data.rate.cRate === 0 ? {} : data.rate.list[0];
      });
    },
    _getRecommendData() {
      getRecommendData().then(res => {
        this.recommendInfo = res.data.list;
      });
    }
  },
  created() {
    this._getGoodDetailByIid();
    this._getRecommendData();
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  height: 100vh; /* 可视化单位  */
  background-color: #fff;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>