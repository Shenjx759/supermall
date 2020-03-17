import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// lazy
const Home = () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')
const ShopCart = () => import('views/shopcart/ShopCart')
const Category = () => import('views/category/Category')
const Detail = () => import('views/detail/Detail')

const router = [
  {
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
    path: '/shopcart',
    component: ShopCart
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
  mode: 'history'
})