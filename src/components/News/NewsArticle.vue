<template>
  <div class="article">
    <p v-for="(paragraph, index) in paragraphs" :key="index">
      &emsp;&emsp;<span v-html="resolveImage(paragraph)"></span>
    </p>
  </div>
</template>

<script setup>
import text from "@/store/News/guide/qianfo.js";
//获取段落
const paragraphs = text.split("\n").filter((p) => p.trim().length > 0);
console.log(paragraphs);

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
.article {
  position: relative;
  color: #333;
  background-color: #ffe4e4;
  align-self: center;
  width: 1036px;
  max-width: 100%;
  justify-content: center;
  margin: 0;
  padding: 50px 48px 69px;
}
</style>
