<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" class="tab-control-item" 
      :class="{active: index === currentIndex}"
      @click="itemClick(index, item)">
      <span>{{item.text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      required: true
    }
  },
  data(){
    return{
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index, item){
      this.currentIndex = index
      this.$emit("tabClick", item.type)
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    font-size: 15px;
    text-align: center;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding-bottom: 2px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>