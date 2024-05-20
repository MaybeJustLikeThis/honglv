<script setup >
import textTwo from "@/store/Hotel/hot.js"
import Pag from "@/components/Hotel/Pagination.vue"
import {onMounted,reactive,ref,getCurrentInstance} from "vue"

const currentText = reactive([])
const page = ref(1)
onMounted(()=>{
    getSend
})
function getPage(){
    currentText.value = []
    let start = page.value*3 - 2 
    let end = page.value*3
    currentText.value = textTwo.slice(start-1,end)
}

function getSend(params){
    page.value = params
    getPage()
}

getPage()
</script>
<template>
<div class="content" v-for="(item,index) in currentText.value" :key="index">
    <div class="left">{{index+1}}</div>
    <div class="middle">
        <div class="middle-top">{{item.name}}</div>
        <div class="middle-middle"> {{item.subName}}</div>
        <div class="middle-bottom"> 
            <span class="s">{{item.score}}</span>
            {{item.recommend}}
            <span class="h">￥{{item.price}}起</span>
        </div>
    </div>
    <div class="right">
        <img :src="item.src"/>
    </div>
    
</div>
<Pag @send="getSend"></Pag>

</template>
<style scoped>
    .content{
        display: flex;
        padding-top:10px;
        width: 444px;
        height: 96px;
        background-color: #EEEEEE;
        margin-bottom: 10px;
        border-radius:15px;
    }
    .left{
        margin-left:10px;
        font-size: 36px;
        color: #999999;
    }
    .middle{
        display: flex;
        flex-direction: column;
        margin-left:15px;
        justify-content: space-around;
        width: 260px;
    }
    .middle-top{
        font-size:16px;
        color: #333333;
    }
    .middle-middle{
        font-size:12px;
        color:#666666;
    }
    .middle-bottom{
        color: red;
    }
    .s{
        font-size:16px;
        color: white;
        background-color: red;
    }
    .h{
        float: right;
        color:black;

    }
    .right{
        margin-top:5px;
        margin-left:5px;
    }
</style>