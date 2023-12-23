<template>
  <div class="box">
    <Header></Header>
    <Carousel></Carousel>
    <Routes></Routes>
    <Show></Show>
    <Show_hot></Show_hot>
    <Show_str></Show_str>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Carousel from "@/components/Carousel.vue";
import Routes from "../components/Home_Routes/Routes.vue";
import Bottom from "../components/Home_Bottom/Bottom.vue";
import Show from "../components/Home_Show/Show.vue";
import Show_hot from "../components/Home_Show/Show_hot.vue";
import Show_str from "../components/Home_Show/Show_strategy.vue"
export default {
  components: {
    Header,
    Carousel,
    Routes,
    Bottom,
    Show,
    Show_hot,
    Show_str,
  },
};
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
