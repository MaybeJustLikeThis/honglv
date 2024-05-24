<template>
    <div class="box0">
        <div class="foodsView">
            <div class="title">美食概览</div>
            <div class="choose">
                <div class="column">
                <div class="subtitle">热门目的地</div>
                <div class="lists">
                    <div class="list" 
                        v-for="destination in destinations"
                        :key="destination.id">
                        · {{ destination.name }}
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="subtitle">热门主题</div>
                <div class="lists">
                    <div class="list" v-for="(theme, index) in themes" :key="index">
                        · {{ theme }}
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="subtitle">价格区间</div>
                <div class="lists">
                    <div class="list" v-for="(price, index) in price" :key="index">
                    · {{ price }}
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="poster">
            <img src="https://s3-alpha-sig.figma.com/img/0cdf/56a2/04e64a1cb83d7932764e503ead7abc62?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=alV0DxFuNXj-~UVWQ8QeUT1CO-525XO9Wit5lmcqJx2XsVRJNx8nsZYJfBWqEhH0XV0SqZE~fNM4s29r-iQFokI9ewsceueTYzB-FQ5asBSwk3FqIFlB5BeMlDQEfpkU6D-8skqYBKH0xztzCN3uWfAzpE5Gli-QQ9hCspvcZxyzbnG0bQxiTEO-pDEfSRR-xZLNQ43mvGGaULYitpYTnjX2s2E0tzgcn~gmS48ljASjP0zWxvDKS2LJ6hMPRW4ijc1H~H6Du6oryGgQWZNivT49ShRMPPQakJwB2sSg0aMmxt~vtXt6Jk3GIJeoFZVzKoyAobv6r4pEKNANP5rqwQ__" alt="">
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, reactive } from "vue";
    import { getTopdestinations } from "@/utils/api/index";
    let destinations = ref();
    const themes = reactive(['街头小巷','格调餐厅']);
    const price = reactive(['0-100','100-300','300-500','500及以上']);
    onMounted(() => {
        getTopdestinations().then((res) => {
            destinations.value = res.data;
            console.log(destinations.value);
        });
    });
</script>

<style scoped>
    .box0{
        width: 1200px;
        height: auto;
    }
    .title{
        font-size: 18px;
        width: 300px;
        height: 50px;
        border-bottom:2px solid #FF5353;
        display: flex;
        align-items: center;
    }
    .choose{
        width: 300px;
        height: 354px;
        background-color: white;
        margin: 0;
    }
    .column{
        width: 280px;
        height: auto;
    }
    .lists{
        width: 280px;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        flex: 0 50%;
    }
    .subtitle{
        padding: 20px 10px;
        font-size: 14px;
        display: flex;
        align-items: center;
    }
    .list{
        width: 100px;
        font-size: 10px;
        position: relative;
        margin-left: 20px;
        margin-bottom: 10px; 
    }
    .poster,img{
        margin-top: 10px;
        width: 300px;
        height: 645.95px;
    }
</style>