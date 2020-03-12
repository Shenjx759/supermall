<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control class="tab-control" :titles="titles"/>
    <goods-list :goods="goods['pop'].list"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import TabControl from "components/content/tabControl/TabControl"
  import GoodsList from "components/content/goods/GoodsList"
  
  import HomeSwiper from "./components/HomeSwiper"
  import RecommendView from "./components/RecommendView"
  import FeatureView from "./components/FeatureView"

  import {getHomeMultiData, getHomeGoods} from "api/home"

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      GoodsList,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data() {
      return {
        titles: ["流行", "上新", "热销"],
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          }
        }
      }
    },
    methods: {
      _getHomeMultiData() {
        getHomeMultiData()
          .then(res => {
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
          })
          .catch(err => {
            console.log(err)
          })
      },
      _getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].page = res.data.page
          this.goods[type].list.push(...res.data.list)
        }).catch(err => {
          console.log(err)
        })
      }
    },
    created() {
      // 请求首页轮播图等数据
      this._getHomeMultiData()
      // 请求流行数据
      this._getHomeGoods('pop')
      // 请求上新数据
      this._getHomeGoods('new')
      // 请求热销数据
      this._getHomeGoods('sell')
    }
  }
</script>

<style scoped>
  .home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /* box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.1); 设置光圈 */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
  }
</style>
