<!-- 
  首页 
  李建霆
  2024/4/16
 -->

<template>
  <div id="backgroud">
    <Header></Header>
    <router-view></router-view>
    <Bottom></Bottom>
  </div>
</template>

<script setup>
import Header from "@/libs/header.vue";
import Bottom from "@/libs/Home_Bottom/Bottom.vue";
</script>

<style scoped>
#backgroud {
  background-image: url("../../public/home/背景图片.png");
  background-repeat: no-repeat; /* 设置为不重复 */
  background-size: cover; /* 自动调整背景图片大小以覆盖整个元素 */
  background-position: center center; /* 居中对齐背景图片 */
  /* 其他样式规则 */
}
</style>
