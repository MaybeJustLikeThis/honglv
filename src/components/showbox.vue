<template>
  <div class="box">
    <router-link
      :to="{
        path: `${path}`,
        query: query,
      }"
    >
      <img :src="lazy_src" alt="加载失败" :data-src="img_src" />
      <div class="po">{{ text }}</div>
    </router-link>

  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import lazyLoad from "@/utils/lazyLoad.js";
const props = defineProps(["img_src", "text", "path", "query"]);
let lazy_src = ref();
onMounted(() => {
  lazyLoad();
});
</script>

<style scoped>
.box {
  margin: 10px;
  margin-bottom: 0px;
  margin-top: 10px;

  border-radius: 25px;
  transition: all 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

  min-width: 100px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

img {
  position: relative;
  width: 100%;
  max-height: 100%;
  height: 100%;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}
.po {
  color: white;
  text-align: center;
  font-size: 18px;

  position: relative;
  width: 100%;
  height: 13.8%;

  border-radius: 0px 0px 18px 18px;
  background: linear-gradient(rgba(0, 0, 255, 0), rgba(0, 0, 0, 0.516));
  margin-left: 0px;
  margin-right: 0px;
  bottom: 15%;
}
</style>
