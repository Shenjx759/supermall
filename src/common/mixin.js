/*
 * @Author: your name
 * @Date: 2020-03-21 16:22:55
 * @LastEditTime: 2020-03-21 16:31:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\common\mixin.js
 */
import { debounce } from "./utils";

export const goodImageLoadFinishMixin = {
  data(){
    return{
      goodImageLoadFinishListener: null
    }
  },
  mounted() {
    // Vue生命周期函数、当Vue实例将app DOM元素挂载完成时会触发此函数
    // 调用防抖函数、定义一个变量进行接收防抖函数返回出来的一个新函数。
    const scrollRefresh = debounce(this.$refs.scroll.refresh, 100);
    // 将需要执行的刷新方法进行保存到变量中，以便取消全局事件时使用！
    this.goodImageLoadFinishListener = () => {
      scrollRefresh();
    }
    this.$EventBus.$on("goodImageLoadFinish", this.goodImageLoadFinishListener);
    console.log('我是混入中的mounted...')
  }
}