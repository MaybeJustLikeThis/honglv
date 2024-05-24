<template>
  <div class="box">
    <Header></Header>
    <div class="main">
      <BreadCrumbs></BreadCrumbs>
      <div>
        <banner :title="data.title" :msg="data.msg"></banner>
        <div class="root">
          <section class="content-section container">
            <!-- <NewsArticle :text="data.text"></NewsArticle> -->
            <container :text="data.text"></container>
            <!-- <slider :data="data"></slider> -->
          </section>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script setup>
import { ref } from "vue";
import container from "./Details/container.vue";
import banner from "./Details/cpns/banner.vue";
// import slider from "./Details/slider.vue";
import Header from "@/libs/header.vue";
import NewsArticle from "@/components/News/NewsArticle.vue";
import Bottom from "@/libs/Home_Bottom/Bottom.vue";
import BreadCrumbs from "@/components/News/BreadCrumbs.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const data = ref("");

import(`@/store/News/${route.query.store}/${route.query.page}.js`).then(
  (module) => {
    data.value = module;
  }
);
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
  /* background-color: #fff; */
}
.container aside {
  /* background-color: #fff; */
  margin-left: 50px;
}

@import url(../../style/detail.css);
@import "@/style/News.css";
.box {
  justify-content: center;
  align-items: center;
  /* background-color: #fff; */
  display: flex;
  /* padding-top: 43px; */
  flex-direction: column;
}
</style>
