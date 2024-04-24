<!-- 首页-路线模块
  李建霆
  2024/4/17
-->

<template>
  <div class="box">
    <div class="routes">
      <!-- 头部 -->
      <div class="routes_header">
        <p>精品路线</p>
        <div class="route_flex">
          <template v-for="route in routes_headerList">
            <router-link
              :to="route.to"
              :class="['route_flexbox', route.className]"
            >
              {{ route.label }}
            </router-link>
          </template>
        </div>
        <div class="ontherway">其他路线>></div>
      </div>
      <!-- 内容部分 -->
      <div class="route_show">
        <!-- 使用 v-for 遍历 routes 数组 -->
        <div
          class="route_showbox"
          v-for="(route, index) in TopRoutes"
          :key="route.id"
          :class="{ first: index === 0 }"
        >
          <!-- 添加 first 类来特殊处理第一个 route_showbox 元素 -->
          <div class="img" :class="{ first: index === 0 }">
            <img :src="route.image" alt="" />
          </div>
          <router-link
            :to="route.to"
            class="route_link"
            style="text-decoration: none"
          >
            <span>
              <i>{{ route.number }}</i> <strong>{{ route.title }}</strong
              ><br />
              {{ route.summary }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
    <Routes_news> </Routes_news>
  </div>
</template>

<script setup>
import Routes_news from "./Routes_news.vue";
import { ref, onMounted } from "vue";
import { getHomeTOPRoute, getRouteInfo } from "@/utils/api/index.js";
import axios from "axios";
const routes = ref();
const TopRoutes = ref([
  {
    id: 1,
    image: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/Subtract.png",
    to: "/home_routes",
    number: "01",
    title: "古老古交",
    summary: "太原市唯一一处大型旧石器遗址",
  },
  {
    id: 2,
    image: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/Rectangle%2025.png",
    to: "/home_routes",
    number: "02",
    title: "神秘古交",
    summary: "“龙城秘境”地处与角子崖，地理位置独特，地形地貌奇绝",
  },
  {
    id: 3,
    image: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/26.png",
    to: "/home_routes",
    number: "03",
    title: "英雄古交",
    summary: "晋绥八分区（专署旧址），被党中央誉为“钢铁走廊”",
  },
  {
    id: 4,
    image: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/27.png",
    to: "/home_routes",
    number: "04",
    title: "夜游古交",
    summary: "古交电厂夜景，静谧而绚烂",
  },
]);
let routes_headerList = ref([
  {
    to: "/home_routes",
    className: "x",
    label: "古老古交",
  },
  {
    to: "/home_routes",
    className: "xx",
    label: "神秘古交",
  },
  {
    to: "/home_routes",
    className: "xxx",
    label: "英雄古交",
  },
  {
    to: "/home_routes",
    className: "xxxx",
    label: "夜游古交",
  },
]);

onMounted(() => {
  getHomeTOPRoute().then((res) => {
    routes.value = res.data;
    console.log(res.data); // 打印出接口返回的routes数据
   
  });
});
</script>

<style scoped>
.box {
  position: relative;
  top: 50px;
  width: 1050px;
  height: 400px;
  min-height: 400px;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
}
.routes {
  position: relative;

  width: 70%;
  height: 400px;
}
.routes_header {
  position: relative;
  background-color: #d40000;
  width: 100%;
  height: 15%;
  display: flex;
}
p {
  position: relative;
  left: 4%;
  width: 24%;
  color: white;
  line-height: 100%;
  font-size: 20px;
}
.route_flex {
  position: relative;
  width: 56%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.route_flexbox {
  width: 20%;
  height: 60%;
  position: relative;
  top: 20%;
  font-size: 16px;
  line-height: 200%;
  text-align: center;
  border-radius: 14px;
  transition: 0.75s;
  border: none;
  text-decoration: none;
}
.route_flexbox.x {
  background-color: #ffd700;
  color: #af9404;
}

.route_flexbox.xx {
  background-color: #00bfff;
  color: #0482ac;
}

.route_flexbox.xxx {
  background-color: #9acd32;
  color: #638322;
}

.route_flexbox.xxxx {
  background-color: #48d1cc;
  color: #338582;
}
.route_flexbox:hover {
  color: black;
  box-shadow: 3px 3px 3px 3px #681717;
  animation-fill-mode: forwards;
}
.route_flexbox:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.route_flexbox:hover:before {
  opacity: 0.2;
}
.ontherway {
  position: relative;
  width: 20%;
  color: white;
  text-align: center;
  font-size: 14px;
  line-height: 400%;
  font-style: italic;
  cursor: pointer;
}
.route_show {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  height: 90%;
}

.route_showbox {
  position: relative;
  width: 64%;
  height: 31.9%;
  background-color: #f8f8f8;
  border-bottom-width: 5px;
  border-bottom-style: dashed;
  border-bottom-color: #c9c8c8;
  display: flex;
}

.route_showbox.first {
  flex: none;
  height: 100%;
  width: 36%;
  background-color: #ffe4e4;
  border: none;
  display: flex;
  flex-direction: column;
}

.img {
  position: relative;
  width: 30%;
  height: 80%;
  background-color: teal;
  margin: 10px;
}

.img.first {
  position: relative;
  width: 100%;
  height: 70%;
  margin: 0px; /* 修改 */
  margin-top: 18.8%;
  background-color: #ffe4e4;
  order: 2;
}

.img.second {
  position: relative;
  width: 100%;
  margin: 0;
  background-color: #ffe4e4;
}

img {
  max-width: 100%;
  height: 100%;
}

span {
  position: relative;
  max-width: 60%;
  max-height: 80%;
  top: 20px;
  left: 10px;
  font-size: 13px;
  color: #666666;
}

i {
  color: #d40000;
  font-size: 27px;
  font-style: serif;
}

strong {
  font-size: 18px;
  color: black;
}
</style>
