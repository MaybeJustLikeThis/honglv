<template>
    <div class="menu">
        <div class="menuItem" 
            v-for="(item, index) in menuItems"
            key="item"
            :class="{active:currentIndex===index}"
            @click="clickMenu(index)">
                <div class="choose" >
                    <img class="choose" v-if="currentIndex===index" src="https://s3-alpha-sig.figma.com/img/a686/b69b/0add4d1090fa1261155d2f6bdd0d3b79?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MODH8qUMaIH-X5cEEd6W1wrsevLDx~OpTiND7sMy1mUTErSKkiSajKIVSloNFpjfq-z~DRedVwU~GGqBd4hFzHLuTvgDjlsXfEiUWr7VfHQ~7KlO4zMQepgU3QbhdM~ou8iP0vXglcwiGQNEEowD00mrRe94xXXmyS~Sr1CRrSwKWGsAOX~0LnTJ-VuMPoByl2Gyn1oEDLVMj9VImj9p6BKSkhV2dwZfoPB0TkjOdlItAD7jkLsexVVbZNw1NozTK2gmT0HcARuhzjdqxjfYWKqJPIReV2mSVk8J~FLDvEnbcbzxwyLumWumflPrn3pOTDPosGtsi6TqlL3M0RgQxw__">
                </div>
                {{ item }}
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return{
            menuItems: ['我的博客','账号与安全','注销账号'],
            currentIndex: 0
        }
    },
    emits:["itemClick"],
    methods:{
        clickMenu(index){
            this.currentIndex = index
            // console.log(index);
            this.$emit("itemClick", index)
        },
    }
}
</script>

<style scoped>
    .menu{
        width: 243px;
        height: 140px;
        background-color:#F8F8F8;
        display: flex;
        flex-direction: column;
        border-radius: 5%;
    }
    .menuItem{
        margin-left: 30px;
        margin-top: 18px;
        align-items: center;
        font-size: 16px;
        display: flex;
        cursor: pointer;
    }
    .choose{
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }
    .active{
        color: rgb(149, 58, 58);
    }
</style>