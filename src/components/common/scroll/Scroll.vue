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
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return{
        scroll: null
      }
    },
    methods: {
      scrollTo(x, y, time = 500){
        // 关系&&、如果 && 前面的为null、undefined或者false 则就不会执行 && 后面的表达式
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      finishPullDown(){
        this.scroll && this.scroll.finishPullDown()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      }
    },
    mounted(){ // Vue生命周期 Vue实例挂载完之后执行！
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true, // 需要监听滚动区域中的div这类元素的click事件
        probeType: this.probeType, // 该属性默认值为0,表示不监听屏幕滚动位置
        pullUpLoad: this.pullUpLoad
      })

      // 实时监听滚动位置
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })

      // 监听下拉动作
      this.scroll.on('pullingUp', () => {
        this.$emit('pullUpLoad')
      })
    }
  }
</script>
<style scoped>
</style>>