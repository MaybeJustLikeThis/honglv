<template>
    <div>
        <div class="box">

            <div v-for="(item, index) in data.value" :key="index">
                <admin-body-lists @deleteBtnClk="openDelectCpnShow(index)" v-if="start <= index && index <= end">
                    <template #title>
                        {{ item.name }}
                    </template>
                    <template #des>
                        {{ item.decs }}
                    </template>
                    <template #data>
                        {{ item.data }}
                    </template>
                    <template #view>
                        {{ item.views }}
                    </template>
                </admin-body-lists>
            </div>

        </div>

        <Pagination @changePage="getCurrentPage" v-if="isHasData" :key="refreshCpn" ></Pagination>

        <admin-delect class="delect_component" @cancelBTnClick="closeDelectCpnShow" v-if="isShow"></admin-delect>
    </div>
</template>

<script setup>
import request from '@/utils/api/request.js'
import AdminBodyLists from '../AdminBodyLists.vue';
import Pagination from './Pagination.vue'
import AdminDelect from './AdminDelect.vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { ref, reactive, watch } from 'vue'
import { getAllAttractions } from '../../../utils/api/adminApi';
// import { ref, watch } from 'vue'
const router = useRoute()
console.log(router.query.url,"router")
let data = reactive({
    value:[]
})
let start = ref(0)
let end = ref(5)
let isHasData = ref(false)
let isShow = ref(false)
let refreshCpn = ref(0)
let getIndex = ref(0)
let dataLength = ref(0)

console.log("AdminMessage组件渲染")

getAllAttractions().then(res => {
    console.log(res.data, "resData")
    data.value = res.data
    dataLength.value = data.value.length
    localStorage.setItem("dataLength", dataLength.value)
    // 确保数据请求完毕再去渲染子组件
    isHasData.value = true
});

onBeforeRouteUpdate((to, from) => {
    console.log("from:", from.params.title)
    console.log("to:", to.params.title)
    console.log(to.query.url, "query")
    request({
        url: to.query.url,
        method: "get",
    }).then(res => {
        // console.log(res.data, "resData")
        data.value = res.data
        // console.log("data", data.value)
        dataLength.value = data.value.length
        localStorage.setItem("dataLength", dataLength.value)
        // 每次拿到新的数据重新渲染一次子组件
        refreshCpn.value += 1
        // 确保数据请求完毕再去渲染子组件
        isHasData.value = true
    });
})

const getCurrentPage = payload => {
    start.value = (payload - 1) * 5
    end.value = (payload * 5) > data.value.length ?
                data.value.length : (payload * 5)
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
        data.value.splice(getIndex.value, 1)
        // console.log(scenics.value, "scenics")
    } 
    isShow.value = false
    return data
}


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