<!--
 * @Author: your name
 * @Date: 2020-03-17 21:26:52
 * @LastEditTime: 2020-03-23 16:12:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\detail\Detail.vue
 -->
<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" ref="detailNavBar" @detailNavClick="navClick" />
    <scroll ref="scroll" class="content" :probeType="3" @scroll="scrollRolling">
      <detail-swiper :good-top-images="topImages" ref="goodTopImage" />
      <detail-base-info :base-info="goodsInfo" />
      <detail-shop-info :shop-info="shopInfo" />
      <detail-info :detail-info="detailInfo" @detailImgLoadFinish="detailImgLoadFinish" />
      <detail-param-info :param-info="paramsInfo" ref="params" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <detail-recomment-info ref="recomment" :recommend-info="recommendInfo" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
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

import { goodImageLoadFinishMixin, BackTopMixin } from "common/mixin"

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
  mixins: [goodImageLoadFinishMixin, BackTopMixin],
  data() {
    return {
      iid: "",
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      paramsInfo: {},
      detailInfo: {},
      commentInfo: {},
      recommendInfo: [],
      navCenterTopY: [],
      navCurrentIndex: 0
    };
  },
  methods: {
    scrollRolling(position) {
      // scroll滚动监听事件
      let y = -position.y
      const length = this.navCenterTopY.length
      // 第一种情况
      // [0, 7301, 8189, 8426]
      // Y值 大于等于 0 并且 小于 7301 index = 0
      // Y值 大于等于 7301 并且小于 8189 index = 1
      // Y值 大于等于8189 并且小于 8426 index = 2
      
      // 第二种情况
      // Y值 大于等于 8326 index = 3
      // 优化以下 if 判断条件太多
      // for(var i = 0; i < length; i++){
      //   if(this.navCurrentIndex !== i && ((i < length - 1 && y >= this.navCenterTopY[i] && y < this.navCenterTopY[i+1]) || (i === length - 1 && y >= this.navCenterTopY[i]))){
      //     this.navCurrentIndex = i
      //     this.$refs.detailNavBar.currentTitleIndex = this.navCurrentIndex
      //   }
      // }
      // 优化后
      for(let i = 0; i < length - 1; i++){
        if(this.navCurrentIndex !== i && (y >= this.navCenterTopY[i] && y < this.navCenterTopY[i + 1])){
          this.navCurrentIndex = i 
          this.$refs.detailNavBar.currentTitleIndex = this.navCurrentIndex
        }
      }

      // this.isShowBackTop = -position.y > 1000;
      this.isShowBackTopChange(position)
    },
    detailImgLoadFinish() {
      // 商品详情图片都加载完之后、统一让better-scroll对象刷新一次、刷新用作于让scroll重新计算一次高度
      this.$refs.scroll.refresh();
      // 每次给navCenterTopY赋值前，都清空一下
      this.navCenterTopY = []
      this.navCenterTopY.push(0);
      this.navCenterTopY.push(this.$refs.params.$el.offsetTop);
      this.navCenterTopY.push(this.$refs.comment.$el.offsetTop);
      this.navCenterTopY.push(this.$refs.recomment.$el.offsetTop);
      // 给数组添加一个 Number类型的最大值
      this.navCenterTopY.push(Number.MAX_VALUE);
      console.log(this.navCenterTopY)
    },
    navClick(e) {
      this.$refs.scroll.scrollTo(0, -this.navCenterTopY[e], 500)
      this.$refs.scroll.refresh();
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
  },
  destroyed() {
    // 取消全局事件的监听
    this.$EventBus.$off('goodImageLoadFinish', this.goodImageLoadFinishListener)
  },
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