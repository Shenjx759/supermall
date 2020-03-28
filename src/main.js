/*
 * @Author: your name
 * @Date: 2020-03-11 16:07:18
 * @LastEditTime: 2020-03-27 22:43:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import LazyLoad from 'vue-lazyload'
import FastClick from 'fastclick';

Vue.config.productionTip = false
// 在Vue原型里面声明一个事件总线 在其他组件中可以通过this.$EventBus进行调用
Vue.prototype.$EventBus = new Vue()

// 注册toast
Vue.use(toast)
// 注册lazyload
Vue.use(LazyLoad, {
  loading: require('./assets/img/common/placeholder.jpg')
})
// 解决移动端 点击 300ms延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
