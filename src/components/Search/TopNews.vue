<template>
    <div class="top">
        <div class="top_title">
            热门{{ valueDefault }}
        </div>

        <div class="top_mainbody">
            <div class="list" v-for="item in tops" :key="item.id">
                <img :src="item.pictures[0]" alt="">
                <div class="text">
                    <div class="title">
                        {{ item.title }}
                    </div>
                    <div class="summary">
                        {{ item.createTime }}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { defineProps } from "vue"
const props = defineProps({
    tops: {
        typeof: Array,
        default:()=>{}
    },
    valueDefault: {
        type: String,
        default: " "
    },
})
</script>

<style scoped>
.top_mainbody{
    /* height: 297px; */
    width: 300px;
    border-top: 2px solid rgba(255, 83, 83, 1) ;
}

.top_title{
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    /* line-height: 21.78px; */
    text-align: left;
    color: rgba(102, 102, 102, 1);
    margin-top: 20px;
    margin-bottom: 20px;
}

.list{
    display: flex;
    gap:10px;
    margin: 10px;
    align-items: center;
}

.list img{
    height: 66px;
    width: 66px;
    border-radius: 5px;
}

.list .text .title{
    font-family: Abel;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.84px;
    text-align: left;
    color: rgba(51, 51, 51, 1);
    margin-bottom: 5px;
}

.list .text .summary{
    font-family: Abel;
    font-size: 8px;
    font-weight: 400;
    text-align: left;
    color: rgba(153, 153, 153, 1);
}
</style>