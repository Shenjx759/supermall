<!--
 * @Author: your name
 * @Date: 2020-03-11 20:23:32
 * @LastEditTime: 2020-03-21 16:30:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\home\Home.vue
 -->
<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <tab-control
      class="tab-control"
      ref="tabControl1"
      v-show="isTabControlfixed"
      :titles="titles"
      @tabClick="tabControlChanage"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullUpLoad="loadNextPageData"
    >
      <home-swiper :banners="banners" @homeSwiperImgLoadFinish="swiperImgLoadFinish" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="titles"
        ref="tabControl2"
        v-show="!isTabControlfixed"
        @tabClick="tabControlChanage"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./components/HomeSwiper";
import RecommendView from "./components/RecommendView";
import FeatureView from "./components/FeatureView";

import { getHomeMultiData, getHomeGoods } from "api/home";
// import { debounce } from "common/utils";
import { goodImageLoadFinishMixin } from "common/mixin"

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
  mixins: [goodImageLoadFinishMixin],
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
      isShowBackTop: false,
      isTabControlfixed: false,
      tabControlOffsetTop: 0,
      scrollY: 0
      // goodImageLoadFinishListener: null
    };
  },
  methods: {
    swiperImgLoadFinish() {
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    loadNextPageData() {
      this._getHomeGoods(this.currentType);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isTabControlfixed = -position.y > this.tabControlOffsetTop;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    tabControlChanage(e) {
      this.currentType = e.type;
      // 将两个tabControl组件的值进行一个同步处理
      this.$refs.tabControl1.currentIndex = e.index;
      this.$refs.tabControl2.currentIndex = e.index;
      // 切换tabControl时、将scroll的y值进行一个回顶
      this.$refs.scroll.scrollTo(0, -this.tabControlOffsetTop, 500);
      // 对better-scroll进行一次刷新、避免出现滚动不了的问题
      this.$refs.scroll.refresh();
    },
    _getHomeMultiData() {
      getHomeMultiData()
        .then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    _getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].page = res.data.page;
          this.goods[type].list.push(...res.data.list);
          // better-scroll只支持一次上拉操作、如果需要执行下次的上拉操作，就需要在这里执行一次finishPullUp函数来通知scroll当前上拉操作已经完成！
          this.$refs.scroll.finishPullUp();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    // console.log('---进来Home视图---')
    // 进入视图时、则进行读取一下保存的scrollY值、并且将scroll滚动到对应的值
    this.$refs.scroll.scrollTo(0, this.scrollY, 0);
    // 再对better-scroll进行一次刷新操作，避免出现滚动不了的问题！
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // console.log('---离开Home视图---')
    // 在此处离开Home视图时、记录一下当前better-scroll的y值
    this.scrollY = this.$refs.scroll.getScrollY();

    // 取消全局事件的监听 $off('需要取消监听的事件名', '取消监听的事件执行的函数、必须传、不然全局的该事件都会给取消掉!')
    this.$EventBus.$off('goodImageLoadFinish', this.goodImageLoadFinishListener)
  },
  created() {
    // Vue生命周期函数、当VUE实例创建完成时，就会执行这个函数
    // 请求首页轮播图等数据
    this._getHomeMultiData();
    // 请求流行数据
    this._getHomeGoods("pop");
    // 请求上新数据
    this._getHomeGoods("new");
    // 请求热销数据
    this._getHomeGoods("sell");
  },
  mounted() {
    // 一下代码全由mixin合并、/src/common/mixin.js中
    // // Vue生命周期函数、当Vue实例将app DOM元素挂载完成时会触发此函数
    // // 调用防抖函数、定义一个变量进行接收防抖函数返回出来的一个新函数。
    // const scrollRefresh = debounce(this.$refs.scroll.refresh, 100);
    // // 将需要执行的刷新方法进行保存到变量中，以便取消全局事件时使用！
    // this.goodImageLoadFinishListener = () => {
    //   scrollRefresh();
    // }
    // this.$EventBus.$on("goodImageLoadFinish", this.goodImageLoadFinishListener);
  }
};
</script>

<style scoped>
.home {
  /* padding-top: 44px; */
  height: 100vh; /* vh => 视口单位 */
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.1); 设置光圈 */
  /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
  /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
}

.tab-control {
  position: relative;
  z-index: 9;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>
