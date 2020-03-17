<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" class="back-img">
      </div>
      <div slot="center" class="detail-nav-title">
        <div v-for="(item, index) in titles" 
            :key="index" 
            class="detail-nav-title-item" 
            @click="detailNavItemClick(index)"
            :class="{active: index === currentTitleIndex}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>  
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentTitleIndex: 0
      }
    },
    methods: {
      backClick(){
        this.$router.back()
      },
      detailNavItemClick(index){
        this.currentTitleIndex = index
      }
    }
  }
</script>

<style scoped>
  .back-img{
    margin-top: 11px;
  }
  .detail-nav-title{
    display: flex;
    font-size: 13px;
  }
  .detail-nav-title-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text)
  }
</style>