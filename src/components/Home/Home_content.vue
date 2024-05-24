<!-- 首页内容
    李建霆
    2024/4/17
 -->
<template>
  <div class="box">
    <Carousel></Carousel>
    <Routes></Routes>
    <Show></Show>
    <Show_hot></Show_hot>
    <Show_str></Show_str>
  </div>
</template>

<script setup>
import Carousel from "@/components/Home/Carousel.vue";
import Routes from "@/components/Home/Home_Routes/Routes.vue";
import Show from "@/components/Home/Home_Show/Show.vue";
import Show_hot from "@/components/Home/Home_Show/Show_hot.vue";
import Show_str from "@/components/Home/Home_Show/Show_strategy.vue";
</script>

<style scoped>
.box {
  /* position: absolute;
   top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); */
  position: relative;
  /* white-space: nowrap; */
}
</style>
