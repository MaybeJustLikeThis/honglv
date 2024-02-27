<template>
  <div class="root">
    <div class="article">
      <div class="push">
        <div class="titleBox">
          <div class="point"></div>
          推送
        </div>
        <div class="horizontalLine"></div>
        <div class="detailBox">
          <div class="detailContainer">
            <div class="detailContainerItem">
              <p><span class="requiredStar">*</span>推送文章的标题:</p>
              <div class="input">
                <ComInput placeholder="请输入内容"> </ComInput>
              </div>
            </div>
            <div class="detailContainerItem" id="articleEditor">
              <p><span class="requiredStar">*</span>请输入推送文章:</p>
              <div class="input">
                <vue3-tinymce
                  v-model="state.content"
                  :setting="state.setting"
                />
              </div>
            </div>
            <div class="detailContainerItem" id="coverEditor">
              <p><span class="requiredStar">*</span>请设置封面:</p>
              <div class="input">
                <Cover></Cover>
              </div>
            </div>
          </div>
          <div class="standard">
            <CheckBox></CheckBox>
            我已阅读并接受《红侣文章上传协议》和《红侣专栏规范》
          </div>
          <main class="action-container">
            <button class="submit-article" tabindex="0">提交文章</button>
            <button class="save-draft" tabindex="0">保存草稿</button>
          </main>
          <div class="horizontalLine"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CheckBox from "./BlogComponents/CheckBox.vue";
import ComInput from "@/components/Blog/BlogComponents/ComInput.vue";
import Cover from "@/components/Blog/BlogComponents/Cover.vue";
import Vue3Tinymce from "@jsdawn/vue3-tinymce";
import { reactive } from "vue";
// 引入组件
const state = reactive({
  content: "",
  // editor 配置项
  setting: {
    height: 400, // editor 高度
  },
});
</script>

<style scoped>
@import "@/style/Blog.css";
</style>
