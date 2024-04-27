<template>
    <div class="box">

        <div v-for="(scenic, index) in scenics.value" :key="index">
            <admin-body-content @deleteBtnClk="openDelectCpnShow(index)" 
            v-if="start <= index && index <= end">
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
    </div>

    <Pagination :scenicsProp="scenics.value" @changePage="getCurrentPage" v-if="isHasData"></Pagination>

    <admin-delect class="delect_component" @cancelBTnClick="closeDelectCpnShow" v-if="isShow"></admin-delect>
</template>

<script setup>
import AdminBodyContent from '../AdminBodyContent.vue';
import Pagination from './Pagination.vue'
import AdminDelect from './AdminDelect.vue';
import { getAllAttractions } from '../../../utils/api/adminApi';
import { ref, reactive } from 'vue'
// import { ref, watch } from 'vue'
let scenics = reactive({
    value:[]
})
let start = ref(0)
let end = ref(5)
let isHasData = ref(false)
let isShow = ref(false)
let getIndex = ref(0)

getAllAttractions().then(res => {
    scenics.value = res.data
    // 确保数据请求完毕再去渲染子组件
    isHasData.value = true
})

const getCurrentPage = payload => {
    start.value = (payload - 1) * 5
    end.value = (payload * 5) > scenics.value.length ?
                scenics.value.length : (payload * 5)
    // console.log(start.value, 'sv')
    // console.log(end.value, 'ev')
}

const openDelectCpnShow = indexVal => {
    isShow.value = true
    getIndex.value = indexVal
}

function closeDelectCpnShow(payload){
    if (payload) {
        // console.log(getIndex.value, 'getIndex.value')
        scenics.value.splice(getIndex.value, 1)
        // console.log(scenics.value, "scenics")
    } 
    isShow.value = false
    return scenics
}

// watch(scenics, (newScenics) => {
//     // 强制更新DOM进行同步渲染
//     scenics.value = newScenics;
// }, { deep: true });

</script>

<style scoped>
.box{
  max-height: 444px;
  overflow: hidden;
}

.delect_component{
    position: fixed;
    top: 0;
    right: 0;
}
</style>