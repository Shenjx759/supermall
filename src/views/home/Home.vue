<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <scroll class="content" 
      ref="scroll" 
      :probe-type="3" 
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullUpLoad="loadNextPageData">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control class="tab-control" :titles="titles" @tabClick="tabControlChanage" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"

import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import BackTop from "components/content/backTop/BackTop"

import HomeSwiper from "./components/HomeSwiper"
import RecommendView from "./components/RecommendView"
import FeatureView from "./components/FeatureView"

import { getHomeMultiData, getHomeGoods } from "api/home"

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      titles: [
        {
          text: "流行",
          type: "pop"
        },
        {
          text: "上新",
          type: "new"
        },
        {
          text: "热销",
          type: "sell"
        }
      ],
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        }
      },
      currentType: "pop",
      isShowBackTop: false
    }
  },
  methods: {
    loadNextPageData(){
      this._getHomeGoods(this.currentType)
      console.log(this.goods['pop'].list.length)
    },
    contentScroll(position){
      this.isShowBackTop = (-position.y) > 1000
    },
    backTop(){
      this.$refs.scroll.scrollTo(0, 0)
    },
    tabControlChanage(e) {
      this.currentType = e
    },
    _getHomeMultiData() {
      getHomeMultiData()
        .then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
        .catch(err => {
          console.log(err)
        });
    },
    _getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].page = res.data.page
          this.goods[type].list.push(...res.data.list)
          this.$refs.scroll.finishPullUp()
          this.$refs.scroll.refresh()
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    // 请求首页轮播图等数据
    this._getHomeMultiData();
    // 请求流行数据
    this._getHomeGoods("pop")
    // 请求上新数据
    this._getHomeGoods("new")
    // 请求热销数据
    this._getHomeGoods("sell")
  }
};
</script>

<style scoped>
.home {
  padding-top: 44px;
  height: 100vh; /* vh => 视口单位 */
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.1); 设置光圈 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  z-index: 9;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
/* .content {
  height: calc(100% - 93px);
  margin-top: 44px;
} */
</style>
