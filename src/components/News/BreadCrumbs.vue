<template>
  <div class="breadCrumbs">
    <div class="breadCrumbsItem" @click="navigateToHome">首页</div>
    <div class="breadCrumbsItem">></div>
    <div class="breadCrumbsItem" @click="navigateToUploadBlog">最新资讯</div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      // 处理导航到首页的逻辑
      console.log("Navigating to home...");
    },
    navigateToUploadBlog() {
      // 处理导航到上传博客的逻辑
      console.log("Navigating to upload blog...");
    },
  },
};
</script>

<style scoped>
.breadCrumbs {
  display: flex;
  margin-right: auto;
  margin-left: 20px;
  margin: 20px auto 20px 20px;
  gap: 3px;
}

.breadCrumbs .breadCrumbsItem {
  color: #7f0505;
  align-self: start;
  flex-grow: 1;
  white-space: nowrap;
  font:
    400 16px Abel,
    sans-serif;
  cursor: pointer;
  /* 添加一个手型光标，表示可点击 */
}
</style>
