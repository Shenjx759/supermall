import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$EventBus  = new Vue() // 在Vue原型里面声明一个事件总线 在其他组件中可以通过this.$EventBus进行调用

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
