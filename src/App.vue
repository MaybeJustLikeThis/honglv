<template>
  <!-- <login></login> -->
  <Home></Home>
  <!-- <Temp></Temp> -->
  <news></news>
  <!-- <Blog></Blog> -->
  <!-- <Push></Push> -->
</template>

<script>
import Home from "./view/Home.vue";
import News from "./view/News.vue";
import Blog from "./view/Blog.vue";
import Login from './view/login.vue';
import Temp from '../src/components/Home_routes(xjb)/routes.vue'

export default {
  components: {
    Home,
    News,
    Blog,
    Login,
    Temp
  },
};
</script>

<style scoped></style>
