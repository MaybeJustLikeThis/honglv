<template>
  <div id="carousel_container">
    <el-carousel id="carousel">
      <el-carousel-item v-for="item in carousel" :key="item.id">
        <img :src="item.url" alt="" class="carousel_container_img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
const carousel = ref([
  {
    id: 1,
    url: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/Rectangle%20131.png",
  },
]);
</script>

<style scoped>
#carousel_container {
  position: relative;
  width: 100%;
  height: 100%;
  /* background-color: brown; */
}
#carousel {
  position: relative;
  height: 100%;
  /* width: 100%; */
}
.carousel_container_img {
  width: 100%;
  height: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

:deep(.el-carousel__indicators--horizontal) {
  transform: translateX(80%);
  /* right: 50%; */
}
:deep(.el-carousel__indicator--horizontal .el-carousel__button) {
  width: 10px;
  height: 8px;
  border-radius: 31px;
  background: #ffffff80;
}
:deep(.el-carousel__indicator--horizontal.is-active .el-carousel__button) {
  width: 20px;
  height: 8px;
  border-radius: 31px;
  background: #fff;
}
</style>
