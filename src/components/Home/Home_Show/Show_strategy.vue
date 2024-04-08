<template>
  <div class="outbox">
    <div class="show">
      <div class="title">—————— 游记攻略 ——————</div>
      <div class="title xx"><i>背包，相机，目的地， 下一站，我不告诉你</i></div>
      <div class="shower">
        <showbox
          img_src="https://yunding-ljt.oss-cn-beijing.aliyuncs.com/001.png"
          text="县（市）级 文物保护单位"
        ></showbox>

        <showbox
          img_src="https://yunding-ljt.oss-cn-beijing.aliyuncs.com/002.png"
          text="“西山晓月” 夜景灯光"
        ></showbox>
        <showbox
          img_src="https://yunding-ljt.oss-cn-beijing.aliyuncs.com/004.png"
          text="龙城向新生态恢复示范园"
        ></showbox>
        <showbox
          img_src="https://yunding-ljt.oss-cn-beijing.aliyuncs.com/003.png"
          text="&nbsp&nbsp&nbsp两川相夹 &nbsp&nbsp&nbsp背山临水"
        ></showbox>
      </div>
    </div>
  </div>
</template>

<script>
import showbox from "@/components/showbox.vue";
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
  min-height: 200px;
}
.show {
  position: relative;
  top: 0px;
  height: 100%;
  width: 100%;
  min-height: 200px;
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
  /* top: 7%; */
  width: 100%;
  height: 100%;
  /* left: 18%; */
  /* background-color: indigo; */
}

.box {
  margin-top: 0px;
  border-radius: 50%;
  background-color: aquamarine;
}
:deep(.po) {
  background: #ffffff00;
  border-radius: 0 0 0 0;
  font-size: 10px;
  color: #141212;
  bottom: 32%;
  left: 36%;
  width: 30%;
  font-weight: 540;
}

.title.xx {
  position: relative;
  font-size: 13px;
  width: 13%;
  left: 44%;
  top: -30px;
}
</style>
