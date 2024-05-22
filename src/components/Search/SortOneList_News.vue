<template>
    <div class="one_list">
        <div class="img">
            <img :src="currentItem.pictures[0]" alt="">
        </div>
        <div class="text">
            <div class="title">
                <div class="number">
                    {{ currentIndex + 1 }}
                </div>
                <div class="name">{{ currentItem.title }}</div>
                <div class="id_number">
                    id:{{ currentItem.id }}
                </div>
            </div>
            <div class="summary">
                createTime：{{ currentItem.createTime }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from "vue"
const props = defineProps({
    currentItem: {
        type: Object,
        default: () => { }
    },
    currentIndex: {
        type: Number,
        default: 0,
    }
})
console.log(props.currentItem)
</script>

<style scoped>
.one_list{
    height: 150px;
    background-color: white;
    border-bottom: 2px solid rgba(201, 200, 200, 1);
    display: flex;

}

.one_list .img{
    width: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.one_list .img img{
    height: 120px;
    width: 180px;
    border-radius: 5px;
    
}

.text{
    display: flex;
    flex-direction: column;
    width: 670px;
    justify-content: space-evenly;
}

.text .summary{
    font-family: Abel;
    font-size: 14px;
    font-weight: 400;
    /* line-height: 14.74px; */
    text-align: left;
    color: rgba(201, 200, 200, 1);
}

.title .number{
    height: 36px;
    width: 24px;
    font-family: Andada Pro;
    font-size: 32px;
    font-weight: 600;
    line-height: 37.66px;
    text-align: left;
    color: rgba(255, 138, 0, 1);
    /* margin-right: 10px; */
    font-style: oblique;
}

.title{
    display: flex;
    gap: 10px;
}

.title .name{
    font-family: Abel;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: rgba(51, 51, 51, 1);
    padding-top: 8px;
    /* margin-right: 20px; */
    /* height:20px; */
}

.title .id_number{
    font-family: Abel;
    font-size: 10px;
    font-weight: 400;
    line-height: 12.74px;
    text-align: left;
    color: rgba(153, 153, 153, 1);
    padding-top: 16px;
}
</style>