<template>
  <div class="box">
    <img :src="img_src" alt="" />
    <div class="po">{{ text }}</div>
    <!-- <div class="strategy"><img src="" alt="" />{{ text2 }}</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["img_src", "text", "img_src2","text2"],
};
</script>

<style scoped>
.box {
  
  margin: 10px;
  margin-bottom: 0px;
  margin-top: 10px;
  /* background-color: lightcoral; */
  border-radius: 25px;
  transition: all 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  
  min-width: 100px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

img {
  position: relative;
  width: 100%;
  max-height: 100%;
  height: 100%;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}
.po {
  color: white;
  text-align: center;
  font-size: 18px;

  position: relative;
  width: 100%;
  height: 13.8%;

  border-radius: 0px 0px 18px 18px;
  background: linear-gradient(rgba(0, 0, 255, 0), rgba(0, 0, 0, 0.516));
  margin-left: 0px;
  margin-right: 0px;
  bottom: 15%;
}
</style>
