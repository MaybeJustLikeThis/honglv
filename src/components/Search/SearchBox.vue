<template>
    <div class="search_box">
        <div class="search_mainbody">
            <input type="text" name="" id="" :value="valueDefault">
            <button>搜索</button>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from "vue"
const props = defineProps({
    valueDefault: {
        type: String,
        default:"请输入"
    },
})
</script>

<style scoped>
.search_box{
    height: 68px;
    width: 679px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.search_mainbody{
    display: flex;
    gap:0;
    width: 639px;
    height: 42px;
    background-color: pink;
}

.search_mainbody button{
    font-family: Abel;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.39px;
    text-align: left;
    color:white;
    height: 42px;
    width: 120px;
    background-color: rgba(255, 138, 0, 1);
    border: 0px;
    border-radius: 5px;
    text-align: center;
}

.search_mainbody input{
    width: 519px;
    /* height: 42px; */
}

</style>