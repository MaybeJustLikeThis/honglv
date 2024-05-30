<!-- 首页-展示图片-游记攻略
  李建霆
  2024/4/17
-->
<template>
  <div class="outbox">
    <div class="show">
      <div class="title">—————— 游记攻略 ——————</div>
      <div class="title xx"><i>背包，相机，目的地， 下一站，我不告诉你</i></div>
      <div class="shower">
        <showbox
          v-for="item in items"
          :key="item.img_src"
          :img_src="item.img_src"
          :text="item.text"
        ></showbox>
      </div>
    </div>
  </div>
</template>

<script setup>
import showbox from "@/components/showbox.vue";
import { ref } from "vue";
const items = ref([
  {
    img_src:
      "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/%E4%BF%9D%E6%8A%A4%E5%8D%95%E4%BD%8D.png",
    text: "县（市）级 文物保护单位",
  },
  {
    img_src:
      "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/%E8%A5%BF%E5%B1%B1%E6%99%93%E6%9C%88.png",
    text: "“西山晓月” 夜景灯光",
  },
  {
    img_src:
      "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/%E9%BE%99%E5%9F%8E%E6%96%B0%E7%94%9F%E6%80%81.png",
    text: "龙城向新生态恢复示范园",
  },
  {
    img_src:
      "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/%E9%9D%92%E5%B1%B1%E7%BB%BF%E6%B0%B4.png",
    text: "两川相夹 背山临水",
  },
]);
</script>

<style scoped>
.outbox {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  width: 1050px;
  height: 200px;
  min-height: 200px;
  top: 100px;
}

.show {
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 200px;
  min-width: 550px;
  max-width: 1000%;
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

.title.xx {
  position: relative;
  font-size: 13px;
  width: 13%;
  left: 44%;
  top: -30px;
}

.shower {
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 100%;
  height: 100%;
}
.box {
  margin-top: 0px;
  border-radius: 50%;
}
:deep(.po) {
  background: #ffffff00;
  border-radius: 0 0 0 0;
  font-size: 10px;
  color: #797979;
  bottom: 32%;
  left: 36%;
  width: 30%;
  font-weight: 540;
}
</style>
