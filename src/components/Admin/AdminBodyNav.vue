<template>
    <div class="list">
        <span v-for="(item,index) in manageData"
        :key="index"
        @click="spanclick(index)" 
        :class="{'active' : currentIndex === index}"
        >{{ item }}</span>
    </div>
</template>

<script setup>
import { ref,reactive,defineEmits } from 'vue'
const currentIndex = ref(0)
const manageData = reactive(["景点管理", "文创管理", "酒店管理", "美食管理", "路线管理"])
const spanclick = index => {
    // defineEmits("manageDataClick", index)
    currentIndex.value = index
    console.log(index)
}
</script>

<style scoped>
span{
    display: inline-block;
    width: 195px;
    height: 40px;
    font-family: Abel;
    font-weight: 400;
    font-size: 16px;
    line-height: 20.39px;
    /* text-align: center; */
    align-content: center;
    padding-left: 30px;
    /* overflow: auto; */
}

.active{
    border-right:2px solid red;
    background-color: rgba(255, 228, 228, 1);
}
</style>