<!-- 首页-展示图片-热门推荐
  李建霆
  2024/4/17
-->
<template>
  <div class="outbox">
    <div class="show">
      <div class="title">—————— 热门推荐 ——————</div>
      <div class="shower">
        <showbox
          v-for="(item, index) in hotRecommendations"
          :key="index"
          :class="{ first: index === 0 }"
          :img_src="item.imgSrc"
          :text="item.text"
          path="/home_routes_news"
          :query="item.query"
        ></showbox>
      </div>
    </div>
  </div>
</template>
<script setup>
import showbox from "@/components/showbox.vue";
import { ref } from "vue";
const hotRecommendations = ref([
  {
    imgSrc: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/hot_1.png",
    text: "角子崖",
    query: { store: "recommend", page: "jiaoziya" },
  },
  {
    imgSrc: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/hot_2.png",
    text: "吕梁山",
    query: { store: "recommend", page: "lvliangshan" },
  },
  {
    imgSrc: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/hot_3.png",
    text: "古交红豆山庄",
    query: { store: "recommend", page: "hongdou" },
  },
  {
    imgSrc: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/hot_4.png",
    text: "古交千佛寺",
    query: { store: "recommend", page: "qianfosi" },
  },
  {
    imgSrc: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/hot_5.png",
    text: "晋绥八分区旧址",
    query: { store: "recommend", page: "bafenqu" },
  },
  {
    imgSrc: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/hot_6.png",
    text: "古交水泉寨",
    query: { store: "recommend", page: "shuiquanzhai" },
  },
  {
    imgSrc: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/hot_7.png",
    text: "歇马武氏宅院",
    query: { store: "recommend", page: "xiema" },
  },
  {
    imgSrc: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/hot_8.png",
    text: "石千峰文化遗址",
    query: { store: "recommend", page: "shiqianfeng" },
  },
  {
    imgSrc: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/hot_9.png",
    text: "真能和尚灵塔",
    query: { store: "recommend", page: "zhenneng" },
  },
]);
</script>

<style scoped>
.outbox {
  position: relative;
  top: 50px;
  width: 1050px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  min-height: 400px;
}
.show {
  position: relative;
  top: 50px;
  height: 100%;
  width: 100%;
  min-height: 400px;
  min-width: 550px;
  max-width: 1000%;
  margin-left: 0;
  margin-right: 0;
}
.title {
  position: relative;
  height: 50px;
  top: -10%;
  width: 40%;
  left: 30%;
  color: black;
  font-size: 22px;
  text-align: center;
  line-height: 200%;
}
.shower {
  display: flex;
  justify-content: space-between;
  align-items: normal;
  flex-wrap: wrap;
  position: relative;
  top: 0;
  width: 100%;
  height: 80%;
}
.box {
  flex-basis: 18%;
  flex-grow: 1;
  height: 44%;
}
.box:hover {
  animation-fill-mode: forwards;
  transform: translateY(-20px);
}
.first {
  flex-grow: 2;
  flex-basis: 38%;
  line-height: 100%;
  background-color: lightgoldenrodyellow;
}
:deep(.po) {
  text-align: left;
  font-size: 15px;
  background: rgba(0, 0, 0, 0);
  bottom: 17%;
  left: 3%;
  width: 95%;
}
</style>
