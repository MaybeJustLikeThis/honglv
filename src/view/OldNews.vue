<template>
  <div class="box_box">
    <Header></Header>
    <div class="main">
      <BreadCrumbs></BreadCrumbs>
      <div class="typeArea">
        <NewsHeader :title="data.title" :msg="data.msg"></NewsHeader>
        <NewsArticle :text="data.text"></NewsArticle>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Header from "@/libs/header.vue";
import Bottom from "@/libs/Home_Bottom/Bottom.vue";
import BreadCrumbs from "@/components/News/BreadCrumbs.vue";
import NewsHeader from "@/components/News/NewsHeader.vue";
import NewsArticle from "@/components/News/NewsArticle.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const data = ref("");

await import(`@/store/News/${route.query.store}/${route.query.page}.js`).then(
  (module) => {
    data.value = module;
  }
);
</script>

<style scoped>
@import "@/style/News.css";
.box_box {
  justify-content: center;
  align-items: center;
  background-color: #fff;
  display: flex;
  /* padding-top: 43px; */
  flex-direction: column;
}
</style>
