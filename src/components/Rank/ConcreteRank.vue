<template>
    <div class="box">
        <div class="title"><p>{{ category }}</p></div>
        <div class="content">
            <div class="rankItem" v-for="item in beautySpot">
                <div class="image">
                    <img class="image" :src="item.thingImg">
                </div>
                <div class="introduction">
                    <div class="index">{{ item.index }}</div>
                    <div class="name">{{ item.thingName }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import beautySpot from "@/store/Rank/beautySpot.js"
export default {
    data:function(){
        return{
            category:"景区",
            beautySpot: beautySpot
        }
    }
}
</script>

<style scoped>
.title{
    width: 1121px;
    height: 60px;
    background: linear-gradient(to right, red, white);
    margin: 10px;
    display: flex;
    align-items: center;
}
p{
    font-size: 24px;
    margin-left: 30px;
    color: white;
    font-family: 'Times New Roman', Times, serif;
}
.content{
    width: 1063px;
    height: 1104px;
    margin: 0 auto;
}
.rankItem{
    width: 1063px;
    height: 108px;
    display: flex;
    border-color: #c3c2c2;
    border-block-end-style: dashed; 
    writing-mode: horizontal-tb;
    border-block-end-width: 3px;
}
.image{
    width: 136.85px;
    height: 98px;
    margin-top: 3px;
}
.introduction{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.index {
    width: 60px;
    height: 36px;
    margin-left: 20px;
    font-size: 33px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    color: red;
}
.name{
    font-size: 14px;
    font-weight: bold;
    margin: 8px auto 10px 20px;
}
</style>