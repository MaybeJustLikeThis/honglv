<template>
  <div class="content">
    <guide :introduction="introduction"></guide>
    <div class="article">
      <p v-for="(paragraph, index) in paragraphs" :key="index">
        &emsp;&emsp;<span v-html="resolveImage(paragraph)"></span>
      </p>
    </div>
  </div>
</template>

<script setup>
import guide from "./cpns/guide.vue";
import { defineProps } from "vue";

const props = defineProps(["text", "introduction"]);
const text = props.text;
//获取段落
const paragraphs = text.split("\n").filter((p) => p.trim().length > 0);

function resolveImage(paragraph) {
  // 检查段落中是否包含图片占位符
  if (paragraph.includes("[img:")) {
    // 使用正则表达式匹配图片占位符
    let imgUrl = paragraph.trim().substring(5, paragraph.length - 1);
    return `<img src="${imgUrl}" alt="Image ${imgUrl}" style="margin: 0 auto; position: relative; display: flex; width: 480px; justify-content: center;">`;
  } else {
    // 如果图片资源不存在，则返回空字符串或者其他提示信息
    return paragraph;
  }
}
</script>

<style scoped>
.content {
  margin: 0 auto;
  background-color: #fff;
}
.articleContainer {
  text-align: center;
}
img {
  width: 500px;
}
.articleContainer p {
  width: 80%;
  margin: 1em 10%;
  text-align: left;
}
@import url(../../style/detail.css);
</style>
