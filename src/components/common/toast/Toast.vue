<!--
 * @Author: your name
 * @Date: 2020-03-27 15:41:33
 * @LastEditTime: 2020-03-27 21:56:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\components\common\toast\Toast.vue
 -->
<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "默认文字",
      isShow: false
    };
  },
  methods: {
    show(message = "默认消息", duration = 2000) {
      this.message = message;
      this.isShow = true;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>
<style scoped>
.toast {
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  padding: 8px 10px;
  border-radius: 5px;
  font-family: "微软雅黑";
}
</style>