<template>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>文创名称:</p>
    <div class="input">
      <ComInput placeholder="请输入文创名称"></ComInput>
    </div>
  </div>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>请添加图片:</p>
    <div class="input">
      <Cover></Cover>
    </div>
  </div>
  <div class="detailContainerItem">
    <p>咨询电话:</p>
    <div class="input">
      <ComInput placeholder="请输入文创咨询电话（选填)"></ComInput>
    </div>
  </div>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>文创价格:</p>
    <div class="input">
      <ComInput placeholder="请输入文创价格"></ComInput>
    </div>
  </div>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>文创摘要:</p>
    <div class="input">
      <ComInput
        placeholder="请输入文创的概述介绍"
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
