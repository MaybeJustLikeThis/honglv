<script setup >
import {ref,defineProps, defineEmits} from "vue";
const currentPage = ref(1)
function handleCurrentChange(currentPage){
    emits("send",currentPage)
}
const emits = defineEmits(["send"])

</script>
<template>
    <el-pagination layout="pager" :page-size="3" :page-count="3" @current-change="handleCurrentChange"/>
</template>
<style scoped>
.el-pagination{
  align-self: center;
}
</style>