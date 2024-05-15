<template>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>路线名称:</p>
    <div class="input">
      <ComInput placeholder="请输入路线名称"></ComInput>
    </div>
  </div>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>途经景区:</p>
    <div class="input">
      <ComInput placeholder="请输入路线途经景点名称"></ComInput>
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
      <ComInput placeholder="请输入咨询电话（选填)"></ComInput>
    </div>
  </div>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>路线摘要:</p>
    <div class="input">
      <ComInput
        placeholder="请输入路线介绍"
        type="textarea"
        cols="100"
        rows="10"
      ></ComInput>
      <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
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
