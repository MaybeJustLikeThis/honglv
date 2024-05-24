<template>
  <section class="introduction">
    <p class="title">导读</p>
    <article class="article">
      <p class="description">{{ introduction }}</p>
    </article>
  </section>
</template>

<script setup>
import { defineProps, ref } from "vue";
const props = defineProps(["introduction"]);
console.log(props);
const introduction = ref("");
introduction.value =
  props.introduction ||
  "阳光寒热，山河浪漫；河东大地，次第花开。接下来，您踏青、赏花、拍照、亲近大自然的最好时节快要到了。春有约，花莫误，总有一片花海让你心动！这里，运城文旅为您推荐运城周边赏花打卡攻略，愿您不负胜景不负春！";
</script>

<style scoped>
.introduction {
  top: 1em;
  width: 90%;
  position: relative;
  margin: 1em auto;
  margin-bottom: 3em;
}
.title {
  padding: 0 1em;
  top: -1.7em;
  left: 1.5em;
  position: absolute;
  background-color: #fff;
  color: #666666;
}
.article {
  border-radius: 3vh;
  border: 2px solid #999;
  color: #999;
}
.article .description {
  text-indent: 2em;
  margin: 20px;
}
</style>
