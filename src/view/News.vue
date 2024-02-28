<template>
  <div class="box">
    <Header></Header>
    <div class="main">
      <BreadCrumbs></BreadCrumbs>
      <div class="typeArea">
        <NewsHeader></NewsHeader>
        <NewsImage></NewsImage>
        <NewsArticle></NewsArticle>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Bottom from "@/components/Home_Bottom/Bottom.vue";
import BreadCrumbs from "@/components/News/BreadCrumbs.vue";
import NewsHeader from "@/components/News/NewsHeader.vue";
import NewsImage from "@/components/News/NewsImage.vue";
import NewsArticle from "@/components/News/NewsArticle.vue";

export default {
  components: {
    Header,
    BreadCrumbs,
    NewsHeader,
    NewsImage,
    NewsArticle,
    Bottom,
  },
};
</script>

<style scoped>
@import "@/style/News.css";
.box {
  justify-content: center;
  align-items: center;
  background-color: #fff;
  display: flex;
  padding-top: 43px;
  flex-direction: column;
}
</style>
