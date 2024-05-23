<template>
  <div class="root">
    <main class="container">
      <Uploading></Uploading>
      <Push></Push>
    </main>
  </div>
</template>

<script setup>
import Uploading from "@/components/Blog/Uploading.vue";
import Push from "@/components/Blog/Push.vue";
</script>

<style scoped>
@import "@/style/Blog.css";
</style>
