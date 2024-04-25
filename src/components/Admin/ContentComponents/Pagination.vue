<template>
  <el-pagination
    layout="prev,pager,next"
    v-model:current-page="currentPage"
    :page-count="totalPage"
    :page-size="5"
    background
    @update:current-page="changePage(currentPage)"
    class="my-pagination"
  >
  </el-pagination>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
const emit = defineEmits(["changePage"]);
const props = defineProps({
  scenicsProp: {
    type: Array,
    default: () => {},
  },
});

const currentPage = ref(1);
const totalPage = Math.ceil(props.scenicsProp.length / 5);
console.log("tp", props.scenicsProp);
const changePage = (currentPage) => {
  // currentPage.value += 1
  console.log("update");
  console.log("currentPage", currentPage);
  // defineEmits("changePageNow",currentPage)
  emit("changePage", currentPage);
};
// console.log(props.scenicsProp.length)
</script>

<style scoped>
.el-pagination {
  justify-content: center;
  position: absolute;
  bottom: 54px;
  transform: translateX(-50%);
  left: 50%;
}
/* :deep(.el-pagination.is-background .el-pager li.is-active) {
  background-color: #ffe4e4;
  color: #666666;
} */

:deep.el-pagination > ul > li {
  background-color: #ffe4e4 !important;
  color: #666666 !important;
}
</style>
