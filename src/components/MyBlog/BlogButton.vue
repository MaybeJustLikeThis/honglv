<template>
    <div class="button">
        <button :disabled="number<=1" @click="sub()">&lt;</button>
        <div class="number">{{ number }}</div>
        <button @click="add()">&gt;</button>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            number: 1
        }
    },
    methods:{
        add(){
            this.number++;
        },
        sub(){
            this.number--;
        }
    }
}
</script>

<style scoped>
.button{
    display: flex;
    justify-content: right;
    margin: 20px;
}
.number{
    width: 20px;
    height: 20px;
    background-color: rgb(234, 233, 232);
    text-align: center;
    margin: 0 5px 0 5px;
}
</style>