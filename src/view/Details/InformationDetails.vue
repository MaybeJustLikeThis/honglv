<template>
  <banner></banner>
  <div class="root">
    <section class="content-section container">
      <cpns></cpns>
      <slider></slider>
    </section>
  </div>
</template>

<script setup>
import cpns from "./container.vue";
import banner from "./cpns/banner.vue";
import slider from "./slider.vue";
</script>

<style>
.root {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2em;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: start;
}
.container .content-column {
  background-color: #fff;
}
.container aside {
  background-color: #fff;
  margin-left: 50px;
}

@import url(../../style/detail.css);
</style>
