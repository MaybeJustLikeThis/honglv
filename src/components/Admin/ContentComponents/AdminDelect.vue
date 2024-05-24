<template>
    <div class="body">
        <div class="delect_body">
            <div class="cancel_icon" @click="btnClick(false)">
                X
            </div>
            <div class="content">
                确定删除
            </div>
            <div class="button">
                <div class="confrim_button" @mouseenter="addClass(1)" @mouseleave="removeClass"
                    :class="{active : currentIndex === 1}" @click="btnClick(true)">
                    确定
                </div>
                <div class="cancel_button" @mouseenter="addClass(2)" @mouseleave="removeClass"
                    :class="{active : currentIndex === 2}" @click="btnClick(false)">
                    取消
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, defineEmits } from 'vue'
const emit = defineEmits(["cancelBTnClick"])
const currentIndex = ref(0)
onMounted(() => {
    document.body.style.overflow = "hidden"
    document.body.style.position = "fixed"
});
onBeforeUnmount(() => {
    document.body.style.overflow = ""
    document.body.style.position = "relative"
});
const addClass = value => {
    currentIndex.value = value
}
const removeClass = () => {
    currentIndex.value = 0
}
const btnClick = isdelete => {
    emit("cancelBTnClick",isdelete)
}
</script>

<style scoped>
.body{
    background-color:rgba(0, 0, 0, 0.2);
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
}
.delect_body{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 330px;
    height: 215px;
    border: 1px solid #666666;
    border-radius: 10px;
    background-color: #FFFFFF;
    position: relative;
}
.content{
    width: 80px;
    height: 15px;
    font-family: Abel;
    font-size: 20px;
    font-weight: 400;
    line-height: 25.49px;
    text-align: left;
}
.button{
    width: 210px;
    height: 30px;
    display: flex;
    justify-content: space-between;
}
.button div{
    height: 30px;
    width: 80px;
    border: 1px solid #666666;
    border-radius: 5px;
    font-family: Abel;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    color: #333333;
}
.cancel_icon{
    height: 20px;
    width: 20px;
    color: red;
    line-height: 20px;
    font-size: 24px;
    font-weight: 400;
    position: absolute;
    top:20px;
    right:20px;
}
.active{
    background-color: rgba(255, 228, 228, 1);
    border-width: 0 !important;
}
</style>