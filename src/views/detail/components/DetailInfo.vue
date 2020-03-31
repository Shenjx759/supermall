<!--
 * @Author: your name
 * @Date: 2020-03-18 21:06:20
 * @LastEditTime: 2020-03-31 16:27:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\detail\components\DetailGoodsImgInfo.vue
 -->
<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="'http:' + item"
        @load="imgLoad"
        alt
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailInfo",
  props: {
    detailInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imgLoadCount: 0,
      imgCount: 0
    };
  },
  methods: {
    imgLoad() {
      if (++this.imgLoadCount === this.imgCount) {
        this.$emit("detailImgLoadFinish");
      }
    }
  },
  watch: {
    detailInfo() {
      this.imgCount =
        Object.keys(this.detailInfo).length !== 0
          ? this.detailInfo.detailImage[0].list.length
          : 0;
    }
  }
};
</script>
<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>
