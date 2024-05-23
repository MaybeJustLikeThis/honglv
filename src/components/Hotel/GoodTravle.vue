<script setup>

import textThree from "@/store/Hotel/scroll.js"
import { onMounted,ref } from "vue"

let inter = ref(null)
const container = ref()
const content = ref()
//实现自动水平滚动部分
function startScroll(){
    inter = setInterval(() => {
        container.value.scrollLeft += 2;
        if(container.value.scrollLeft >= content.value.scrollWidth - container.value.clientWidth) {
          container.value.scrollLeft = 0;
        }
    }, 20);
}

onMounted(()=>{
    startScroll()
})

function stopScroll(){
    clearInterval(inter)
}

function resumeScrolling(){
    startScroll()
}

function pauseScrolling(){
    stopScroll()
}






</script>
<template>
<div class="alled"  ref="container">
        <div class="box" v-for="(item,index) in textThree" :key=index @mouseenter="pauseScrolling" @mouseleave="resumeScrolling" ref="content">
            <img :src=item.src class="photo-show">
            <div class="hh">
                <div class="theme">{{item.theme}}<a>></a></div>
                <div class="text">{{item.text}}</div>
            </div>
        </div>
</div>



</template>
<style scoped>
.alled{
    display: flex;
    width: 1100px;
    height: 108px;
    margin: 0 auto;
    overflow: hidden;
    
}

.box{
    display: flex;
    align-items: center;
    height: 96px;
    min-width: 240px;
    margin: 0 10px;
    border-radius: 100px;
    background-color: #D9D9D9;
}

.photo-show{
    margin-top:8px;
    margin-left:8px;
    height: 80px;
    width: 80px;
}
.hh{
    margin-left:12px;

}
.theme{
    font-size: 16px;
    font-weight: 400;

}

.text{
    font-size: 10px;
    color: #666666;
}


</style>