<template>
  <div class="command-main">
    <div class="command-title">推荐攻略</div>
    <div class="command-content">
      <Command_Content
        v-for="(item, index) in data"
        :key="index"
        :item="item"
        @like="handleLike"
      ></Command_Content>
    </div>
  </div>
</template>

<script setup>
import Command_Content from "@/components/Search/Command_Content.vue";
import { ref, onMounted } from "vue";
import { getHomeTOPRoute } from "../../utils/api/index.js";
let data = ref();

function handleLike(id, like_type) {
  // 在这里处理从子组件传递过来的点赞id
  console.log(id);
  
}
onMounted(() => {
  getHomeTOPRoute()
    .then((res) => {
      // console.log(res.data);
      data.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style scoped>
.command-main {
  position: relative;
  width: 75%;
  height: 100%;
  padding: 0;
  padding-left: 20px;
}

.command-title {
  font-size: 24px;
  color: rgba(102, 102, 102, 1);
  margin-bottom: 20px;
}
.command-content {
  border-top: 2px solid #ff5353;
  position: relative;
  width: 100%;
  height: 1210px;
  background-color: white;
  /* max-width: 1200px; */
}
</style>
