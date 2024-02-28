<template>
    <div class="root">
        <Header></Header>
        <div class="container">
            <div class="rank">
                <!-- <ConcreteRank></ConcreteRank> -->
                <ConcreteRank2></ConcreteRank2>
            </div>
            <div class="yeshu">
                共<div class="number">{{ number }}</div>页
            </div>
        </div>
        <Bottom></Bottom>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Bottom from "../components/Home_Bottom/Bottom.vue";
import ConcreteRank from "../components/RankComponents/ConcreteRank.vue";
import ConcreteRank2 from "../components/RankComponents/ConcreteRank2.vue";

export default {
    components: {
    Header,
    Bottom,
    ConcreteRank,
    ConcreteRank2,
},
    data:function(){
        return{
            number:1
        }
    },
}
</script>

<style scoped>
.root{
    justify-content: center;
    align-items: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
}
.container {
    width: 1121px;
    height: auto;
    margin: 0 auto;
    /* background-color: beige; */
}
.yeshu{
    display: flex;
    justify-content: center;
}
</style>