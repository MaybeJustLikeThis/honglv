<template>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>酒店名称:</p>
    <div class="input">
      <ComInput placeholder="请输入酒店名称"></ComInput>
    </div>
  </div>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>请添加图片:</p>
    <div class="input">
      <Cover></Cover>
    </div>
  </div>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>联系电话:</p>
    <div class="input">
      <ComInput placeholder="请输入酒店联系电话"></ComInput>
    </div>
  </div>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>人均消费:</p>
    <div class="input">
      <ComInput placeholder="请输入人均消费额"></ComInput>
    </div>
  </div>
  <div class="detailContainerItem">
    <p>酒店等级:</p>
    <div class="input">
      <ComInput placeholder="请输入酒店等级（选填)"></ComInput>
    </div>
  </div>
  <div class="detailContainerItem">
    <p><span class="requiredStar">*</span>酒店简介:</p>
    <div class="input">
      <ComInput
        placeholder="请输入酒店的概述介绍"
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
