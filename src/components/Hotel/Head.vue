<script setup>

import textOne from "@/store/Hotel/hotel.js"

</script>
<template>
<div class="item" v-for="(item,index) in textOne" :key="index">
    <img class="item-img" :src=item.src>
    <div class="hh">
        <div class="top-content">{{item.top}}</div>
        <div class="bottom-content">{{item.bottom}}</div>
    </div>
</div>
</template>
<style scoped>
    .item{
        display:flex;
        align-items: center;
        margin-top:10px;
    }
    img{
        display:inline-block;
    }
    .hh{
        display: inline-block;
        margin-left: 15px;
        font-size:12px
    }
    .bottom-content{
        color:#999999
    }
</style>