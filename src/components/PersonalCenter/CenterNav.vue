<template>
    <div class="list">
        <span v-for="(item,index) in navs"
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
// const navs = reactive(['个人信息','修改密码','注销账号'])
const navs = reactive([
    {
        name: "个人信息",
        title: "info",
        url: "",
    },
    {
        name: "修改密码",
        title: "changePassword",
        url: "",
    },
    {
        name: "注销账号",
        title: "logout",
        url:""
    },
])
const spanclick = (index) => {
    currentIndex.value = index
    emit("spanclk",navs[index])
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