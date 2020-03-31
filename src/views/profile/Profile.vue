<!--
 * @Author: your name
 * @Date: 2020-03-11 20:23:32
 * @LastEditTime: 2020-03-31 21:31:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\views\profile\Profile.vue
 -->
<template>
  <div class="profile" @click="profileClick">
    <profile-nav class="profile-nav" />
    <user-info />
    <account-info />
    <normal-list-view :list-data="orderList" />
    <normal-list-view :list-data="serviceList" />
  </div>
</template>

<script>
import ProfileNav from "./components/ProfileNav";
import UserInfo from "./components/UserInfo";
import AccountInfo from "./components/AccountInfo";
import NormalListView from "./components/NormalListView";
export default {
  name: "Profile",
  components: {
    ProfileNav,
    UserInfo,
    AccountInfo,
    NormalListView
  },
  data() {
    return {
      orderList: [
        { icon: "message.svg", info: "我的消息" },
        { icon: "pointer.svg", info: "积分商城" },
        { icon: "vip.svg", info: "会员卡" }
      ],
      serviceList: [
        { icon: "cart.svg", info: "我的购物车" },
        { icon: "shopping.svg", info: "下载购物APP" }
      ]
    };
  },
  methods: {
    profileClick() {
      this.$toast.show("此功能待完善中");
    }
  }
};
</script>

<style scoped>
.profile {
  background-color: #f2f2f2;
}
.profile-nav {
  font-weight: 700;
  color: #fff;
  z-index: 99;
  background-color: var(--color-tint);
}
</style>
