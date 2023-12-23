<template>
  <div class="outbox">
    <div class="show">
      <div class="title">—————— 热门推荐 ——————</div>
      <div class="shower">
        <showbox class="first" img_src="" text="角子崖"><slot></slot></showbox>
        <showbox img_src="" text="" class="text_po"></showbox>
        <showbox img_src="" text=""></showbox>
        <showbox img_src="" text=""></showbox>
        <showbox img_src="" text=""></showbox>
        <showbox img_src="" text=""></showbox>
        <showbox img_src="" text=""></showbox>
        <showbox img_src="" text=""></showbox>
        <showbox img_src="" text=""></showbox>
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
  top: 50px;
  width: 1050px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  min-height: 400px;
}
.show {
  position: relative;
  top: 100px;
  height: 100%;
  width: 100%;
  min-height: 400px;
  min-width: 550px;
  max-width: 1000%;
  background-color: greenyellow;
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
  top: 7%;
  width: 100%;
  height: 80%;
  /* left: 18%; */
  background-color: indigo;
}

.box {
  flex-basis: 18%;
  flex-grow: 1;
  height: 44%;
}
.first {
  flex-grow: 2;
  flex-basis: 38%;
  line-height: 100%;
  background-color: lightgoldenrodyellow;
}
</style>
