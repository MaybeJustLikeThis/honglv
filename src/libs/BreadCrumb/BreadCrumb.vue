<template>
  <div class="breadCrumbs">
    <p v-for="(item, index) in navigateStack" :key="item.name">
      <router-link class="breadCrumbsItem" :to="item.path">{{
        item.name
      }}</router-link>
      <span v-if="index !== navigateStack.length - 1" class="breadCrumbsItem">
        >
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRoute, RouterLink } from "vue-router";

//获取路由
const route = useRoute();

//解析出路由title,path并添加到导航栈中
let navigateStack = reactive([]);
console.log(route);
route.matched.map((item) => {
  navigateStack.push({ name: item.name, path: item.path });
});
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
