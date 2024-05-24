<!-- 首页-展示图片-旅游向导
  李建霆
  2024/4/17
-->

<template>
  <div class="outbox">
    <div class="show">
      <div class="title">—————— 旅游向导 ——————</div>
      <div class="shower">
        <showbox
          class="box first"
          img_src="https://yunding-ljt.oss-cn-beijing.aliyuncs.com/Rectangle%2032.png"
          text="景区"
          path="/home_show"
          :query="{
            xxxx: 2222,
          }"
        ></showbox>
        <showbox
          class="box"
          img_src="https://yunding-ljt.oss-cn-beijing.aliyuncs.com/Rectangle%2034.png"
          text="美食"
        ></showbox>
        <showbox
          class="box"
          img_src="https://yunding-ljt.oss-cn-beijing.aliyuncs.com/Rectangle%2035.png"
          text="酒店"
          path="/home_show_hotel"
          :query="{
            xxxx: 2222,
          }"
        ></showbox>
        <showbox
          class="box"
          img_src="../../../../public/home/文创.png"
          text="文创"
        ></showbox>
      </div>
    </div>
  </div>
</template>

<script setup>
import showbox from "@/components/showbox.vue";
</script>

<style scoped>
.outbox {
  position: relative;
  top: 100px;
  width: 1050px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
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
  /* background-color: greenyellow; */
  margin-left: 0;
  margin-right: 0;
}
.title {
  position: relative;
  /* background-color: grey; */
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
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  top: 0%;
  width: 100%;
  height: 70%;
}

.box.first {
  flex-grow: 1;
  background-color: lightgoldenrodyellow;
}
.box {
  width: 300px;
}
.box:hover {
  animation-fill-mode: forwards;
  transform: translateY(-20px);
  flex: 40%;
}
</style>
