<template>
  <Header></Header>
  <div class="all">
    <div class="navigator">
      <div class="div-14">首页</div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
        class="img-5"
      />
      <div class="div-15">精品路线/路线</div>
    </div>
    <div class="content">
      <div class="left-content">
        <div class="left-inner">
          <div
            class="old"
            :class="{ active: 1 == currentIndex }"
            @click="change(1)"
          >
            古老古交
          </div>
          <div
            class="mis"
            :class="{ active: 2 == currentIndex }"
            @click="change(2)"
          >
            神秘古交
          </div>
          <div
            class="hero"
            :class="{ active: 3 == currentIndex }"
            @click="change(3)"
          >
            英雄古交
          </div>
          <div
            class="night"
            :class="{ active: 4 == currentIndex }"
            @click="change(4)"
          >
            夜游古交
          </div>
        </div>
      </div>
      <div v-if="currentIndex == 1" class="right-content">
        <div class="alled">
          <div class="top">
            <div class="top-left">
              <img
                src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/图片.png"
              />
            </div>
            <div class="top-right">
              <div class="title">古老古交</div>
              <img
                src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/旗帜 (1) 1.png"
                class="img-1"
              />
              <div class="core">
                <div class="core-top">路线概要</div>
                <div class="core-bottom">
                  <div class="item-one">
                    <div class="item-left">游玩日程</div>
                    <span>1日游</span>
                  </div>
                  <div class="item-one">
                    <div class="item-left">地点</div>
                    <span>古交市大川河、原平河和屯兰河与汾河的交汇地带</span>
                  </div>
                  <div class="item-one">
                    <div class="item-left">线路类型</div>
                    <span>精品路线</span>
                  </div>
                  <div class="item-one">
                    <div class="item-left">推荐指数</div>
                    <span>
                      <img
                        src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/五角星 1.png"
                      />
                      <img
                        src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/五角星 1.png"
                      />
                      <img
                        src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/五角星 1.png"
                      />
                      <img
                        src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/五角星 1.png"
                      />
                    </span>
                  </div>
                  <div class="item-one">
                    <div class="item-left">线路特色</div>
                    <span>古老古交</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bottom_XX">
            <div class="bottom-text">
              <div class="titled">景点介绍</div>
              <div class="bottom-content">
                <p v-for="(paragraph, index) in paragraphs" :key="index">
                  &emsp;&emsp;<span v-html="resolveImage(paragraph)"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentIndex == 2" class="right-content"></div>
      <div v-if="currentIndex == 3" class="right-content"></div>
      <div v-if="currentIndex == 4" class="right-content"></div>
    </div>
  </div>

  <Bottom></Bottom>
</template>

<script setup>
import Header from "@/libs/header.vue";

import Bottom from "@/libs/Home_Bottom/Bottom.vue";

import text from "@/store/News/road/old.js";

const paragraphs = text.split("\n").filter((p) => p.trim().length > 0);

function resolveImage(paragraph) {
  // 检查段落中是否包含图片占位符
  if (paragraph.includes("[img:")) {
    // 使用正则表达式匹配图片占位符
    let imgUrl = paragraph.trim().substring(5, paragraph.length - 1);
    return `<img src="${imgUrl}" alt="Image ${imgUrl}" style="margin: 0 auto; position: relative; display: flex; width: 480px; justify-content: center;">`;
  } else {
    // 如果图片资源不存在，则返回空字符串或者其他提示信息
    return paragraph;
  }
}

import { onMounted, ref } from "vue";

const currentIndex = ref(1);
const change = (target) => {
  console.log(target);
  currentIndex.value = target;
};
</script>

<style scoped>
.all {
  width: 1200px;
  margin: 0 auto;
}
.navigator {
  display: flex;
  margin-top: 20px;
  align-items: center;
  color: #7f0505;
}

.img-5 {
  margin-right: 5px;
  width: 16px;
}

.content {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  height: 1300px;
}

.left-content {
  width: 243px;
  height: 160px;
  background-color: #f8f8f8;
}

.right-content {
  width: 917px;
  background-color: #f8f8f8;
}

.left-inner {
  cursor: pointer;
  display: flex;
  height: 160px;
  margin-left: 20px;
  flex-direction: column;
  justify-content: space-around;
}

.active {
  color: red;
}

.alled {
  width: 797px;
  margin: 0 auto;
  margin-top: 30px;
}

.top {
  display: flex;
  justify-content: space-between;
}

.top-right {
  display: flex;
  width: 330px;
  flex-direction: column;
  justify-content: space-around;
}
.title {
  font-size: 20px;
  margin-top: 20px;
}

.img-1 {
  width: 40px;
}

.core {
  width: 330px;
  height: 195px;
  background-color: #ffe4e4;
}

.core-top {
  height: 40px;
  width: 330px;
  background-color: #eb5858cc;
  opacity: 0.8;
  color: white;
  line-height: 40px;
  text-align: center;
}

.core-bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 295px;
  height: 150px;
  margin: 0 auto;
  font-size: 10px;
}

.item-left {
  display: inline-block;
  width: 60px;
  height: 18px;
  font-size: 10px;
  border-radius: 50px;
  background-color: white;
  text-align: center;
  line-height: 18px;
  margin-right: 10px;
}

.bottom_XX {
  margin-top: 50px;
  background-color: #ffe4e4;
}

.bottom-text {
  width: 717px;
  background-color: #ffe4e4;
  margin: 0 auto;
  padding-bottom: 60px;
}

.titled {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.bottom-content {
  font-size: 14px;
}
</style>
