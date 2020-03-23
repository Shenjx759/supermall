<!--
 * @Author: your name
 * @Date: 2020-03-15 11:10:46
 * @LastEditTime: 2020-03-23 17:08:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\components\content\backTop\BackTop.vue
 -->
<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'BackTop',
    props: {

    }
  }
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 10px;
    bottom: 50px;
  }
  .back-top img{
    width: 40px;
    height: 40px;
  }
</style>
