<template>
  <div class="goods-item" @click="goodItemClick">
    <img v-lazy="showImg" alt @load="goodImageLoadFinish" />
    <div class="goods-info">
      <p>{{ good.title }}</p>
      <span class="price">{{ good.price }}</span>
      <span class="collect">{{ good.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    good: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      goodIid: ""
    };
  },
  computed: {
    showImg() {
      return this.good.img || this.good.image || this.good.show.img;
    }
  },
  created() {
    this.goodIid = this.good.iid || this.good.item_id;
  },
  methods: {
    goodImageLoadFinish() {
      // 通过此方法监听到图片加载完成、img标签加载完成就会触发此函数
      this.$EventBus.$emit("goodImageLoadFinish"); // 通过进行调 用Vue事件总线的$emit进行发射出去一个函数
    },
    goodItemClick() {
      // 动态路由方式
      this.$router.push("/detail/" + this.goodIid);
      // 地址Query传参方式
      // this.$router.push({
      //   path: '/detail',
      //   query: {
      //     iid: this.iid
      //   }
      // })
    }
  }
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
