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
                古交遗址位于古交市大川河、原平河和屯兰河与汾河的交汇地带，以后梁北坡为中心，北邻屯村、凤凰崖遗址，南连李家社遗址，东至王家沟遗址，形成了一条东西宽4千米、南北长7千米的遗址带，是太原市唯一的一处大型旧石器遗址。<br />
                根据记载：古交遗址规划对象包括遗址本体、可移动文物等。遗址本体包括：王家沟遗址、古钢遗址、后梁遗址、长峪沟遗址、凤凰岩遗址；可移动文物包括：由古钢遗址发现至上世纪90年代，在古交共发现的5处旧石器地点共采到的石制品702件，其中，王家沟遗址获得石制品共18件、古钢遗址获得石制品共12件、后梁遗址获得石制品共459件、长峪沟遗址采集石制品共8件、凤凰崖遗址石制品计205件。<br />
                古交遗址的考古调查开始于1959年12月，首先在古交钢铁厂发现两处旧石器遗址，由此拉开了古交旧石器考古调查的序幕。此后山西省考古研究所等文物管理部门多次进行古交旧石器文化调查，发现了规模较大、内容丰富的旧石器时代遗址。这些古遗址主要位于屯兰川、原平川、大川与汾河的交汇地带，汾河沿岸主要分布有长峪沟遗址、古交遗址、明扶岭遗址、李家社遗址；屯兰川沿岸分布有武家庄崖窑遗址、五里铺遗址、烽火台遗址、大腰山遗址；原平川沿岸分布有梁上峁遗址；大川沿岸分布有王家沟遗址、泉家洼遗址、许家山崖窑遗址。这些古遗址跨越了旧石器时代、新石器时代、东周至汉代，其中以王家沟遗址为代表的中更新世早期文化，已有60万-80万年历史，属于旧石器时代早期。<br />
                其中，王家沟遗址是古交遗址的重要组成部分。其地质年代为中更新世早期，在古交旧石器遗址中是最为久远的一处。调查中发现石制品18件，器型甚大，均以角砾石作原料。其中有石核14件，砍砸器4件。这是目前太原地区发现最早的古文化遗址，表明古交是山西，特别是太原地区人类活动最早的区域，对研究太原地区古人类的历史变迁具有重要的研究价值，2011年12月被太原市人民政府公布为重点文物保护单位。<br />
                古交遗址有什么历史价值呢？古交遗址是汾河上游太原地区目前发现的唯一一处大型古人类遗址群，其文化脉络贯穿整个旧石器时代的早、中、晚期，时间跨度大，展现出远古人类由原料选择、石器加工、生产使用的完整流程，是研究早期人类生存行为、技术特点、文化交流的宝贵史料。古交遗址中的凤凰岩遗址是山西省目前发现最早的古人类石器制造场，不仅丰富了汾河流域的旧石器文化内涵，而且填补了代表旧石器时代中期的丁村文化和代表新石器时代早期的鹅毛口文化之间大型打制石器的空白。<br />
                1959年12月，考古工作者在古交钢铁厂附近发现旧石器文化遗存，发现石制品12件，分布在高出汾河水面约50米的阶地上。<br />
                1983年7月，考古工作者在古交市境内调查时，先后发现了凤凰岩、后梁、长峪沟三处旧石器地点。8月，古交遗址被太原市人民政府公布为市级文物保护单位。<br />
                1983年10月至11月，考古工作者对后梁遗址进行考古发掘，共获得石制品石器、石核、石片和石料残件等共459件。<br />
                1986年8月，古交遗址被山西省人民政府公布为省级文物保护单位。<br />
                1989年9月，山西省考古研究所和古交市文物管理所在凤凰岩、后梁、长峪沟等地作了短期的地质调查，在王家沟地表上发现旧石器时代遗存的线索。<br />
                1990年3月，考古工作者在王家沟属于汾河第四级阶地底砾层发现旧石器石制品，这是目前在古交发现时代最早的旧石器，约处于中更新世初期，均以角页岩为原料，共18件。其中有石核14件，砍砸器4件。<br />
                2002年，相关学者在汾河沿岸进行考古研究工作。<br />
                2013年3月，国务院公布古交遗址为第七批全国重点文物保护单位。<br />
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
import Header from "@/components/header.vue";
import Carousel from "@/components/Carousel.vue";
import Routes from "../Home_Routes/Routes.vue";
import Bottom from "../Home_Bottom/Bottom.vue";
import Show from "../Home_Show/Show.vue";
import Show_hot from "../Home_Show/Show_hot.vue";
import Show_str from "../Home_Show/Show_strategy.vue";

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
