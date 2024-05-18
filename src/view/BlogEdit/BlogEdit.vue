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
import Uploading from "@/components/Blog/Uploading.vue";
import Push from "@/components/Blog/Push.vue";
</script>

<style scoped>
@import "@/style/Blog.css";
</style>
