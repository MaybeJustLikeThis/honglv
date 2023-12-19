<template>
  <div class="box">
    <Header></Header>
    <Carousel></Carousel>
    <Routes></Routes>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Carousel from "../components/Carousel.vue";
import Routes from "../components/Home_Routes/Routes.vue";
import Bottom from "../components/Bottom.vue";
export default {
  components: {
    Header,
    Carousel,
    Routes,
    Bottom,
  },
};
</script>

<style scoped>
.box{
  /* position: absolute;
   top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); */
  position: relative;
  /* white-space: nowrap; */

}
</style>
