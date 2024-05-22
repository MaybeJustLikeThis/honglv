<template>
    <div class="sort_lists">
        <div class="tab">
            <span @click="getIndex(0)" :class="{active: currentIndex === 0 }">综合排序</span>
            <span @click="getIndex(1)" :class="{active: currentIndex === 1 }">价格</span>
            <span @click="getIndex(2)" :class="{ active: currentIndex === 2 }">好评 高—>低</span>
            <span @click="getIndex(3)" :class="{ active: currentIndex === 3 }">点赞数 高—>低</span>
            <span @click="getIndex(4)" :class="{ active: currentIndex === 4 }">距离优先</span>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from "vue"
const currentIndex = ref(0)
const emits = defineEmits(["navClick"])
const getIndex = (index) => {
    currentIndex.value = index
    emits("navClick",index)
}
</script>

<style scoped>
.tab{
    height: 50px;
    width: 890px;
    border-top: 2px solid rgba(255, 83, 83, 1);
    background-color: rgba(255, 235, 235, 1);
    display: flex;
    /* gap:20px; */
}

.tab span{
    padding: 15px;
    font-family: Abel;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.84px;
    text-align: center;
    color: rgba(102, 102, 102, 1);
    width: 123px;

}

.active{
    background-color: rgba(255, 83, 83, 1);
    /* font-family: Abel;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.84px;
    text-align: left; */
    color: white !important;
}
</style>