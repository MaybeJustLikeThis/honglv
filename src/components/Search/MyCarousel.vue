<template>

    <div id="my_carousel">
        <div class="main_carousel">
            <img :src="currentImg.url" alt="">
        </div>
        <div class="thumbnail">
            <div class="img" v-for="(item,index) in imgs" :key="index" @click="indicatorClick(index)" 
            :class="{ active : currentIndex == index }">
                <img :src="item.url" alt="">
            </div>
        </div>
        <div class="desc">
            <span>
                {{ currentImg.desc }}
            </span>
        </div>
    </div>


</template>

<script setup>
import { ref, defineProps } from "vue"
const imgs = ref([])
const currentIndex = ref(0)
// const isActive = ref(true)
const currentImg = ref({
    url: " ",
    desc: " "
},)
const props = defineProps({
    propsImgs: {
        typeof: Array,
        default:()=>{}
    }
})
imgs.value = props.propsImgs
// console.log(imgs.value)
setInterval(() => {
    // console.log("currentIndex",currentIndex.value)
    if(currentIndex.value < imgs.value.length - 1) {
        currentIndex.value += 1
    } else {
        currentIndex.value = 0
    }
    currentImg.value = imgs.value[currentIndex.value]
    // clearInterval(timer)
}, 2000)
const indicatorClick =  (index) => {
    currentIndex.value = index
    // clearInterval(timer)
    currentImg.value = imgs.value[index]
    // console.log("index",index)
    // console.log("currentIndex",currentIndex.value)
    // console.log("click")
}
</script>

<style scoped>
#my_carousel{
    position: relative;
}

.thumbnail{
    height: 192px;
    width: 80px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
    top:200px;
    right:200px;
}

.thumbnail div{
    height: 48px;
    width: 80px;
    margin: 0;
}

.thumbnail img{
    height: 48px;
    width: 80px;
    margin: 0;
}

.main_carousel img{
    height: 600px;
    width:100%;
}

.desc{
    font-family: Abel;
    font-size: 24px;
    font-weight: 400;
    line-height: 30.59px;
    text-align: left;
    position: absolute;
    color: rgba(255, 255, 255, 1);
    top:75px;
    left:220px;
}

.active{
    border: 1px solid rgba(255, 138, 0, 1);
}
</style>