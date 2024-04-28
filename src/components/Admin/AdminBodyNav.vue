<template>
    <div class="list">
        <span v-for="(item,index) in manageData"
        :key="index"
        @click="spanclick(index)" 
        :class="{'active' : currentIndex === index}"
        >{{ item.name }}</span>
    </div>
</template>

<script setup>
import { ref,reactive,defineEmits } from 'vue'
const currentIndex = ref(0)
const emit = defineEmits(["spanclk"])
const manageData = reactive([
    // name: ["景点管理", "文创管理", "酒店管理", "美食管理", "路线管理"],
    {
        name: "景点管理",
        title: "AllAttractions",
        url: "/attraction/getAllAttractions",
    },
    {
        name: "文创管理",
        title: "AllCommodities",
        url: "/commodity/getAllCommodities",
    },
    {
        name: "酒店管理",
        title: "AllHotel",
        url:"/hotel/getAllHotel"
    },
    {
        name: "美食管理",
        title: "AllFoods",
        url:"/food/getAllFoods"
    },
    {
        name: "路线管理",
        title: "AllRountes",
        url:"/rounte/getAllRountes"
    }
    // route: ['/Attractions', '/AllCommodities', '/AllHotel', '/AllFoods','/AllRountes']
])
const spanclick = (index) => {
    // defineEmits("manageDataClick", index)
    currentIndex.value = index
    emit("spanclk",manageData[index])
    // console.log(index)
}
</script>

<style scoped>
span{
    display: inline-block;
    width: 195px;
    height: 40px;
    font-family: Abel;
    font-weight: 400;
    font-size: 16px;
    line-height: 20.39px;
    /* text-align: center; */
    align-content: center;
    padding-left: 30px;
    /* overflow: auto; */
}

.active{
    border-right:2px solid red;
    background-color: rgba(255, 228, 228, 1);
}
</style>