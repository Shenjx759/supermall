/*
 * @Author: your name
 * @Date: 2020-03-11 16:07:18
 * @LastEditTime: 2020-03-24 21:14:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$EventBus  = new Vue() // 在Vue原型里面声明一个事件总线 在其他组件中可以通过this.$EventBus进行调用

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
