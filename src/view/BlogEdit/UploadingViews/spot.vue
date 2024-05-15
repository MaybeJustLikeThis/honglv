<template>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>景区名称:</p>
    <div class="input">
      <ComInput placeholder="请输入景区名称"></ComInput>
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
      <ComInput placeholder="请输入景区咨询电话（选填)"></ComInput>
    </div>
  </div>
  <div class="detailContainerItem">
    <p>景区等级:</p>
    <div class="input">
      <ComInput placeholder="请输入景区等级（选填)"></ComInput>
    </div>
  </div>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>景点概述:</p>
    <div class="input">
      <ComInput
        placeholder="请输入景点的概述介绍"
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
