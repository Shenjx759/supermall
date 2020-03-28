<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon" />
    </div>
    <div v-else>
      <slot name="item-icon-active" />
    </div>
    <div :style="itemFontColor">
      <slot name="item-text" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
    path: String,
    fontColor: {
      type: String,
      default: "#FF5C7B"
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(error => error);
    }
  },
  computed: {
    isActive() {
      return this.path.indexOf(this.$route.path) !== -1;
    },
    itemFontColor() {
      return this.isActive ? { color: this.fontColor } : {};
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1; /* 此样式会把所有class为tab-bar-item的元素均等分 */
  text-align: center;
  font-size: 12px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin: 3px 0px 2px 0px;
  vertical-align: middle; /*去除img标签下面多余的空间*/
}
</style>
