<template>
    <el-pagination layout="prev,pager,next" v-model:current-page="currentPage" :page-count="totalPage" :page-size="5" background
    @update:current-page="changePage(currentPage)" 
    class="my-pagination">
    </el-pagination>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
const emit = defineEmits(["changePage"]);
const props = defineProps({
    scenicsProp: {
        type: Array,
        default: () => { }
    }
})
const totalPage = ref(2)
const currentPage = ref(1)
totalPage.value = Math.ceil(props.scenicsProp.length / 5) 

const changePage = currentPage => {
    // currentPage.value += 1
    // console.log('update')
    // defineEmits("changePageNow",currentPage)
    totalPage.value = Math.ceil(props.scenicsProp.length / 5)
    emit("changePage", currentPage)
    // console.log(props.scenicsProp.length)
}


</script>

<style scoped>
.el-pagination {
  justify-content: center;
  position: absolute;
  bottom: 54px;
  transform: translateX(-50%);
  left: 50%;
}
:deep.el-pagination > ul > li.is-active{
    background-color: #ffe4e4  !important;
    color: #666666 !important;
    border: 0 solid rgba(201, 200, 200, 1) !important;
    font-family: Abel;
    /* font-size: 8px; */
    font-weight: 400;
    line-height: 10.2px;
    /* text-align: left; */
}
:deep.el-pagination > ul > li{
    background-color: rgba(248, 248, 248, 1) !important;
    color: #666666 !important;
    border: 1px solid rgba(201, 200, 200, 1) !important;
    font-family: Abel;
    /* font-size: 8px; */
    font-weight: 400;
    line-height: 10.2px;
    /* text-align: left; */
}
</style>
