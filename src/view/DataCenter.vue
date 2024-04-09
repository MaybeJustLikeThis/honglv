<template>
  <!-- <Header></Header> -->
  <div class="all">
    <div class="navigator">
      <div class="div-14">首页</div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/86eab0ce39dc76fba3c503011244e43d40d32e2e1e1187db4a067f1b7e30a443?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
        class="img-5"
      />
      <div class="div-15">数据中心</div>
    </div>

    <div class="top">
      <div class="left">
        <div class="left-inner">
          <div class="left-top">数据分析</div>
          <div class="left-bottom"></div>
        </div>
      </div>
      <div class="right">
        <div class="right-inner">
          <div class="right-top">游客分析</div>
          <div class="right-bottom"></div>
        </div>
      </div>
    </div>

    <div class="middle">
      <div class="middle-inner">
        <div class="middle-top">核心数据</div>
        <div class="middle-bottom"></div>
      </div>
    </div>

    <div class="bottom_ZZ">
      <div class="left">
        <div class="left-inner">
          <div class="left-top">我的最热</div>
          <img
            src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/角子崖.png"
          />
        </div>
      </div>
      <div class="right">
        <div class="right-inner">
          <div class="right-top">我的游客</div>
          <div
            id="main"
            ref="mychart"
            style="width: 379px; height: 379px"
          ></div>
        </div>
      </div>
    </div>
  </div>

  <!-- <Bottom></Bottom> -->
</template>

<script setup>
import * as echarts from "echarts";
import Header from "@/libs/header.vue";
import Bottom from "@/libs/Home_Bottom/Bottom.vue";

import { onMounted, ref } from "vue";
const mychart = ref();
onMounted(() => {
  initEharts();
});

function initEharts() {
  const option = {
    tooltip: {
      trigger: "item",
    },

    series: [
      {
        type: "pie",
        radius: "50%",
        data: [
          { value: 50, name: "足迹" },
          { value: 60, name: "收藏" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  const hh = mychart.value;
  const myChart = echarts.init(hh);
  myChart.setOption(option);
}
</script>

<style scoped>
.all {
  width: 1180px;
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

.top {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}

.left {
  width: 630px;
  height: 394px;
  background-color: #f8f8f8;
}

.right {
  width: 520px;
  height: 394px;
  background-color: #f8f8f8;
}

.left-inner {
  width: 570px;
  margin: 0 auto;
}

.right-inner {
  width: 460px;
  margin: 0 auto;
}

.left-bottom {
  height: 279px;
  background-color: #d9d9d9;
}

.right-bottom {
  height: 279px;
  background-color: #d9d9d9;
}

.left-top {
  margin: 25px 0px;
}

.right-top {
  margin: 25px 0px;
}

.middle {
  display: flex;
  margin-top: 30px;
  width: 1180px;
  height: 394px;
  background-color: #f8f8f8;
}

.middle-inner {
  width: 1120px;
  margin: 0 auto;
}

.middle-top {
  margin: 25px 0px;
}
.middle-bottom {
  height: 279px;
  background-color: #d9d9d9;
}

.bottom_ZZ {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
}
</style>
