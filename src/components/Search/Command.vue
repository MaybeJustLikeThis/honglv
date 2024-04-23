<template>
  <el-main class="command-main">
    <div class="command-title">推荐攻略</div>
    <div class="command-content">
      <Command_Content
        v-for="(item, index) in 5"
        :key="index"
        :item="item"
      ></Command_Content>
    </div>
  </el-main>
</template>

<script setup>
import Command_Content from "@/components/Search/Command_Content.vue";
import { ref, onMounted } from "vue";

onMounted(() => {
  // console.log("mounted");
});
</script>

<style scoped>
.command-main {
  position: relative;
  height: 100%;
  padding: 0;
  padding-left: 20px;
}

.command-title {
  font-size: 32px;
  color: #161414;
  margin-bottom: 20px;
}
.command-content {
  position: relative;
  width: 70%;
  height: 1510px;
  background-color: antiquewhite;
}
</style>
