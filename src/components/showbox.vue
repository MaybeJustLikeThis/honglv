<template>
  <div class="box">
    <img :src="img_src" alt="" />
    <div class="po">{{ text }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["img_src", "text"],
};
</script>

<style scoped>
.box {
  width: 20%;
  
  margin: 10px;
  margin-bottom: 0px;
  margin-top: 20px;
  background-color: lightcoral;
  border-radius: 25px;
  transition: 0.75s;
}
.box:hover {
  /* animation: fly 0.75s; */
  animation-fill-mode: forwards;
  transform: translateY(-20px);
}

img {
  position: relative;
  width: 100%;
  max-height: 100%;
  height: 100%;
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
