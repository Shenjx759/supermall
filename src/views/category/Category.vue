<!--
 * @Author: your name
 * @Date: 2020-03-11 20:23:32
 * @LastEditTime: 2020-03-31 15:24:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\category\Category.vue
 -->
<template>
  <div class="category">
    <category-nav class="category-nav" />
    <div class="content">
      <category-menu :menu-data="categoryMenu" ref="menu" @changeMenu="changeMenu" />
      <scroll class="category-scroll" ref="scroll">
        <div>
          <category-content :subcategories="showSubcategorys" />
          <tab-control :titles="titles" @tabClick="tabClick" />
          <goods-list :goods="showCategoryDetail" />
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import {
  getCategoryMenu,
  getSubCategory,
  getSubCategoryDetail
} from "api/category";

import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import CategoryNav from "./components/CategoryNav";
import CategoryMenu from "./components/CategoryMenu";
import CategoryContent from "./components/CategoryContent";

import { goodImageLoadFinishMixin, TabControlMixin } from "common/mixin";

export default {
  name: "Category",
  components: {
    Scroll,
    TabControl,
    GoodsList,
    CategoryNav,
    CategoryMenu,
    CategoryContent
  },
  mixins: [goodImageLoadFinishMixin, TabControlMixin],
  data() {
    return {
      categoryMenu: [],
      subcategory: {},
      categoryData: [],
      currentMenuIndex: -1
    };
  },
  computed: {
    showSubcategorys() {
      if (this.currentMenuIndex === -1) return {};
      return this.categoryData[this.currentMenuIndex].subcategorys;
    },
    showCategoryDetail() {
      if (this.currentMenuIndex === -1) return [];
      return this.categoryData[this.currentMenuIndex].categoryDetail[
        this.currentType
      ];
    }
  },
  deactivated() {
    this.$EventBus.$off(
      "goodImageLoadFinish",
      this.goodImageLoadFinishListener
    );
  },
  methods: {
    tabClick(obj) {
      this.currentType = obj.type;
    },
    changeMenu(i) {
      this.currentMenuIndex = i;
      this._getSubCategory(i);
      this.currentType = "pop";
    },
    _getCategoryMenu() {
      getCategoryMenu()
        .then(res => {
          // 1.获取到所有左侧栏的数据
          this.categoryMenu = res.data.category.list;
          for (let index in this.categoryMenu) {
            // 2.根据左侧菜单栏的数据，初始化对应子节点的数据结构
            this.categoryData[index] = {
              subcategorys: {},
              categoryDetail: {
                pop: [],
                new: [],
                sell: []
              }
            };
          }
          // 默认请求左边菜单栏第一个数据
          this._getSubCategory(0);
        })
        .catch(err => {
          console.log(err);
        });
    },
    _getSubCategory(index) {
      const maitKey = this.categoryMenu[index].maitKey;
      this.currentMenuIndex = index;
      getSubCategory(maitKey)
        .then(res => {
          this.categoryData[index].subcategorys = res.data;
          this.categoryData = { ...this.categoryData };
          this._getSubCategoryDetail("pop");
          this._getSubCategoryDetail("new");
          this._getSubCategoryDetail("sell");
        })
        .catch(err => {
          console.log(err);
        });
    },
    _getSubCategoryDetail(type) {
      // 获取请求的miniWallkey
      const miniWallkey = this.categoryMenu[this.currentMenuIndex].miniWallkey;
      // 请求数据
      getSubCategoryDetail(miniWallkey, type)
        .then(res => {
          // 保存请求出来的数据
          this.categoryData[this.currentMenuIndex].categoryDetail[type] = res;
          this.categoryData = { ...this.categoryData };
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this._getCategoryMenu();
  }
};
</script>

<style scoped>
.category {
  height: 100vh;
}
.category-nav {
  font-weight: 700;
  color: #fff;
  z-index: 99;
  background-color: var(--color-tint);
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
  overflow: hidden;
}
.category-scroll {
  height: 100%;
  flex: 1;
}
</style>
