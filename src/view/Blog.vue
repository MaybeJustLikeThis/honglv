<template>
  <div class="root">
    <!-- <Header></Header> -->
    <div class="container">
      <Uploading></Uploading>
      <Push></Push>
    </div>
    <!-- <Bottom></Bottom> -->
  </div>
</template>

<script setup>
import Header from "@/libs/header.vue";
import Bottom from "@/libs/Home_Bottom/Bottom.vue";
import Uploading from "@/components/Blog/Uploading.vue";
import Push from "@/components/Blog/Push.vue";
</script>

<style scoped>
@import "@/style/Blog.css";
</style>
