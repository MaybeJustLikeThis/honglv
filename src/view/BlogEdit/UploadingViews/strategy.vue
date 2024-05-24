<template>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>攻略名称:</p>
    <div class="input">
      <ComInput placeholder="请输入攻略名称"></ComInput>
    </div>
  </div>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>请添加图片:</p>
    <div class="input">
      <Cover></Cover>
    </div>
  </div>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>攻略内容:</p>
    <div class="input">
      <ComInput
        placeholder="请输入攻略内容"
        type="textarea"
        cols="100"
        rows="10"
      ></ComInput>
    </div>
  </div>
</template>

<script setup>
import ComInput from "@/components/Blog/BlogComponents/ComInput.vue";
import Cover from "@/components/Blog/BlogComponents/Cover.vue";
</script>

<style scoped>
@import "@/style/Blog.css";
</style>
