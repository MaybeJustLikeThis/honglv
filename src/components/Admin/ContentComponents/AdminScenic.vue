<template>
    <admin-body-content 
    v-for="(scenic,index) in scenics"
    :key="index">
        <template #title>
            {{ scenic.name }}
        </template> 
        <template #des>
            {{ scenic.decs }}
        </template>
        <template #data>
            {{ scenic.data }}
        </template>
        <template #view>
            {{ scenic.views }}
        </template>
    </admin-body-content>
</template>

<script setup>
import AdminBodyContent from '../AdminBodyContent.vue';

import { ref } from 'vue'
const scenics = ref([
    {
        id: 1,
        name: "角子崖",
        decs: "绝美大片打卡地",
        data: "2022-06-15 18:18:05",
        views: 15
    },
    {
        id: 2,
        name: "吕梁山",
        decs: "四万万人齐蹈厉，同心同德一戎衣",
        data: "2021-02-24 08:20:00",
        views: 18
    },
    {
        id: 3,
        name: "红豆山庄",
        decs: "大型高端生态恢复示范园",
        data: "2017-02-20 17:38:00",
        views: 16
    },
    {
        id: 4,
        name: "千佛寺",
        decs: "最富盛名的千年古刹",
        data: "2023-07-14 16:17:00",
        views: 13
    },
    {
        id: 5,
        name: "古交晋绥八分区(专署)旧址",
        decs: "红色沃土寻初心 革命精神照古今",
        data: "2021-01-22 12:40:00",
        views: 11
    }
])
</script>

<style scoped>

</style>