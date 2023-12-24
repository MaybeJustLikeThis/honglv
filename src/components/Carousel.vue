<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :loop="true"
    :loop-additional-slides="1"
  >
    <swiper-slide
      ><img class="img_box" src="../../public/home/太原角子崖.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img class="img_box" src="../../public/home/古交电厂夜景.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="img_box"
        src="../../public/home/”红侣“项目实践基地挂牌成立仪式.png"
        alt=""
    /></swiper-slide>
  </swiper>
</template>
<script>
// 引用swiper 模块组件
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js 组件
import { Swiper, SwiperSlide } from "swiper/vue";

/**
 * bundle：所有 Swiper 样式，包括所有模块样式（如导航、分页等）
 */
import "swiper/swiper-bundle.min.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      message: "这里是描述文案",
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style scoped>
.swiper-slide {
  width: 70.5%;
  height: 500px;
  line-height: 300px;
  font-size: 30px;
  text-align: center;
}
.swiper {
  width: 64%;
  height: 500px;
  --swiper-theme-color: #999999;
}

.img_box {
  width: 100%;
  height: 500px;
}
</style>
