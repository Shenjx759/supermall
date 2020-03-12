<template>
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import {getHomeMultiData} from "api/home"

  export default {
    name: "Home",
    components: {
      NavBar
    },
    data(){
      return{
        banners: [],
        recommends: []
      }
    },
    created(){
      getHomeMultiData().then(res => {
        console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.1); /* 设置光圈 */
  }
</style>
