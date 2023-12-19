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
      ><img
        class="img_box"
        src="../../public/0df0be855e8344bee640adff563eebb.jpg"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="img_box"
        src="../../public/473ce0dcfd58c43891514ee61bd26ce.jpg"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="img_box"
        src="../../public/67f69a9ef72a4db0eef58633988fe8d.jpg"
        alt=""
    /></swiper-slide>
    <div class="mask">
      <div class="mask_word">{{ message }}</div>
    </div>
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
  width: 70.5%;
  height: 500px;
}

.img_box {
  width: 100%;
  height: 500px;
}
.mask {
  width: 100%;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0px;
  z-index: 1000;
  color: white;
  font-size: 24px;
  line-height: 75px;
}
.mask_word {
  position: relative;
  left: 20px;
}
</style>
