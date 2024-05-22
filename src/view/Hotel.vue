<script setup >
import Head from "@/components/Hotel/Head.vue"
import Hot from '@/components/Hotel/Hot.vue'
import GoodTravle from "@/components/Hotel/GoodTravle.vue"
import textFour from "@/store/Hotel/core.js"

</script>
<template>
<div class="top-background">
    <div class="top-navigator">
        <div class="text">
            下一站，住哪儿？
        </div>
        <div class="middle-navigator">
            <div class="navigator">
                <div class="line-vertical">

                </div>
                <div class="line-verticale">

                </div>
                <div class="line-verticalee">

                </div>
                <div class="line-vertiacleee"></div>
            </div>
            <div class="search">
                搜索酒店
            </div>
        </div>
    
    </div>
</div>

<div class="middle-content">
    <div class="top-content">
       <Head></Head>
    </div>

    <div class="hot">
        <div class="hot-recommend">
            <span class="span-one">热门推荐</span>
            <img src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 157.png">
        </div>
        <div class="hot-hotel">
            <span class="span-one">酒店热销榜</span>
            <div class="example-pagination-block">
            <Hot></Hot>
            </div>
        </div>
    </div>

    <div class="goodtravel">
        <span class="span-one">游玩好去处</span>
        <GoodTravle></GoodTravle>
    </div>

   <div class="core-hotel">
        <span class="span-one">精选主题住宿</span>
        <!-- 不封装组件le，这里不改动 -->
        <div class="core">
            <div class="item" v-for="(item,index) in textFour" :key="index" :class="item.number+'-image'">
                <div class="item-theme">{{item.theme}}</div>
                <div class="item-text">{{item.text}}</div>
            </div>
        </div>
   </div>

   <div class="support-hotel">
        <span class="span-one">品牌推荐</span>
        <div class="ss">
            <img class="item-support" src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 164.png"/>
            <img class="item-support" src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 165.png"/>
            <img class="item-support" src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 166.png"/>
            <img class="item-support" src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 167.png"/>
            <img class="item-support" src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 168.png"/>
            <img class="item-support" src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 170.png"/>
            <img class="item-support" src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 169.png"/>
            <img class="item-support" src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 171.png"/>
            <img class="item-support" src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 171.png"/>
            <img class="item-support" src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 172.png"/>
        </div>
   </div>
     
   
   
</div>


</template>
<style scoped>
.top-background{
    /* 启动bfc */
    display: flex;
    height: 236px;
    background-image: url('https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 153.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.top-navigator{
    width: 1100px;
    margin: 0 auto;
}

.text{
    font-size: 24px;
    font-family:Abel ;
    font-weight: 400;
    margin-top:55px;
}

.navigator{
    width: 900px;
    line-height: 55px;
    background-color: white;
    border-radius: 15px;
}

.middle-navigator{
    height: 55px;
     margin-top: 25px;
    display: flex;
    
}

.search{
    width: 186px;
    line-height: 55px;
    text-align: center;
    background-color:#FF8A00 ;
    border-radius: 15px;
    margin-left: 15px;
    color: white;
}

.line-vertical{
    display: inline-block;
    height: 55px;
    width: 200px;
    border-right: 2px solid #C9C8C8;
}

.line-verticale{
    display: inline-block;
    height: 55px;
    width: 330px;
    border-right: 2px solid #C9C8C8;
}

.line-verticalee{
    display: inline-block;
    height: 55px;
    width: 190px;
    border-right: 2px solid #C9C8C8;
}

.line-verticaleee{

}

.middle-content{
    width: 1100px;
    margin: 0 auto;
}

.top-content{
    display: flex;
    height: 60px;
    border-bottom: 2px solid  #C9C8C8;
    justify-content: space-between;
}
.hot{
    display: flex;
    justify-content: space-between;
}

.hot-recommend{
    width: 636px;
    height: 381px;
}

.hot-hotel{
    height: 381px;
    width: 444px;
}

.span-one{
    display: block;
    height: 23px;
    margin:16px 0;
    font-size:20px;
    color: #333333;
}

.goodtravel{
    margin-top:40px;
}

.core{
    display: flex;
    justify-content: space-between;
}

.item{
    height: 318px;
    width: 260px;
   
}

.one-image{
    background-image: url('https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 163 (3).png');
}

.two-image{
    background-image: url('https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 163 (2).png');
}


.three-image{
    background-image: url("https://xuejiangbin.oss-cn-beijing.aliyuncs.com/Rectangle 163 (1).png");
}


.four-iamge{
    background-image: url("https://xuejiangbin.oss-cn-beijing.aliyuncs.com/2.png");
}

.item-theme{
    margin-top:22px;
    margin-left: 22px;
    color: white;
    font-size:16px;
}

.item-text{
    color: white;
    margin-left: 22px;
    font-size: 12px;
}

.ss{
    display: flex;
    justify-content: space-between;
}
</style>