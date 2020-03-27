/*
 * @Author: your name
 * @Date: 2020-03-27 21:32:40
 * @LastEditTime: 2020-03-27 22:06:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\components\common\toast\index.js
 */
import Toast from './Toast.vue'

const obj = {}
/**
 * 自定义插件
 */
obj.install = Vue => {
  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  // 2.通过new 组件构造器 创建一个组件对象
  const toast = new toastContrustor()
  // 3.将组件对象手动挂载到某个元素中
  toast.$mount(document.createElement('div'))
  // 4.将toast.$el对应的DIV中
  document.body.appendChild(toast.$el)
  // 5.将toast 挂载到vue原型中
  Vue.prototype.$toast = toast
}

export default obj
