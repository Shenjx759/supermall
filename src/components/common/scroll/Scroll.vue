<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    data(){
      return{
        scroll: null
      }
    },
    mounted(){ // Vue生命周期 Vue实例挂载完之后执行！
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 2, // 该属性默认值为0,表示不监听屏幕滚动位置,
      })
    }
  }
</script>
<style scoped>
</style>>