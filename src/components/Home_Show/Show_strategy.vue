<template>
  <div class="outbox">
    <div class="show">
      <div class="title">—————— 游记攻略 ——————</div>
      <div class="shower">
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
  top: 100px;
  width: 1050px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
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
  top: 7%;
  width: 100%;
  height: 80%;
  /* left: 18%; */
  /* background-color: indigo; */
}

.first {
  flex-grow: 2;
  background-color: lightgoldenrodyellow;
}
</style>
