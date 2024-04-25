<template>
    <div class="box">
        <admin-body-content v-for="(scenic, index) in newScenics" :key="index">
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
    </div>

    <Pagination :scenicsProp="scenics" @changePage="getCurrentPage"
    v-if="isHas"></Pagination>
</template>

<script setup>
import AdminBodyContent from '../AdminBodyContent.vue';
import Pagination from './Pagination.vue'
import { getAllAttractions } from '../../../utils/api/adminApi';
import { ref } from 'vue'
let scenics = ref([])
let start = ref(0)
let end = ref(5)
let tempData = ref([])
let newScenics = ref([])
let isHas = ref(false)

getAllAttractions().then(res => {
    // console.log(res.data)
    scenics.value = res.data
    tempData.value = scenics.value
    newScenics.value = tempData.value.slice(start.value, end.value)
    // 确保数据请求完毕再去渲染子组件
    isHas.value = true
})

// console.log("data", scenics)
// console.log("data", scenics.value)
// console.log('temp',tempData)
// console.log(newScenics,'new')

const getCurrentPage = payload => {
    start.value = (payload - 1) * 5
    end.value = payload * 5
    newScenics.value = tempData.value.slice(start.value, end.value)
    // console.log(start.value, 'sv')
    // console.log(end.value, 'ev')
}

</script>

<style scoped>
.box{
  max-height: 444px;
  overflow: hidden;
}

</style>