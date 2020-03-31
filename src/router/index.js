/*
 * @Author: your name
 * @Date: 2020-03-11 20:17:39
 * @LastEditTime: 2020-03-31 16:20:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// lazy
const Home = () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Detail = () => import('views/detail/Detail')

const router = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

export default new VueRouter({
  routes: router,
  mode: 'hash' //打包成app时，得用hash模式
})
