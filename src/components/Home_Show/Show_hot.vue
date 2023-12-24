<template>
  <div class="outbox">
    <div class="show">
      <div class="title">—————— 热门推荐 ——————</div>
      <div class="shower">
        <showbox
          class="first"
          img_src="../../../public/home/hot_1.png"
          text="角子崖"
          ><slot></slot
        ></showbox>
        <showbox
          img_src="../../../public/home/hot_2.png"
          text="吕梁山"
        ></showbox>
        <showbox
          img_src="../../../public/home/hot_3.png"
          text="古交红豆山庄"
        ></showbox>
        <showbox
          img_src="../../../public/home/hot_4.png"
          text="古交千佛寺"
        ></showbox>
        <showbox
          img_src="../../../public/home/hot_5.png"
          text="晋绥八分区旧址"
        ></showbox>
        <showbox
          img_src="../../../public/home/hot_6.png"
          text="古交水泉寨"
        ></showbox>
        <showbox
          img_src="../../../public/home/hot_7.png"
          text="歇马武氏宅院"
        ></showbox>
        <showbox
          img_src="../../../public/home/hot_8.png"
          text="石千峰文化遗址"
        ></showbox>
        <showbox
          img_src="../../../public/home/hot_9.png"
          text="真能和尚灵塔s"
        ></showbox>
      </div>
    </div>
  </div>
</template>

<script>
import showbox from "../showbox.vue";
export default {
  components: {
    showbox,
  },
};
</script>

<style scoped>
.outbox {
  position: relative;
  top:50px;
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
  /* justify-content: space-around; */
  justify-content: space-between;
  align-items: normal;
  flex-wrap: wrap;
  position: relative;
  top: 0%;
  width: 100%;
  height: 80%;
  /* left: 18%; */
  /* background-color: indigo; */
}

.box {
  flex-basis: 18%;
  flex-grow: 1;
  height: 44%;
}
.box:hover {
  /* animation: fly 0.75s; */
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
