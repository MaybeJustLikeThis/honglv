<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Bottom></Bottom>
  </div>
</template>

<script setup>
import Header from "@/libs/header.vue";
import Bottom from "@/libs/Home_Bottom/Bottom.vue";
</script>

<style scoped></style>
