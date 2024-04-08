<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    
    :loop="true"
    :loop-additional-slides="1"
  >
    <swiper-slide
      ><img
        class="img_box"
        src="https://yunding-ljt.oss-cn-beijing.aliyuncs.com/%E5%A4%AA%E5%8E%9F%E8%A7%92%E5%AD%90%E5%B4%96.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="img_box"
        src="https://yunding-ljt.oss-cn-beijing.aliyuncs.com/%E5%8F%A4%E4%BA%A4%E7%94%B5%E5%8E%82%E5%A4%9C%E6%99%AF.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="img_box"
        src="https://yunding-ljt.oss-cn-beijing.aliyuncs.com/%E2%80%9D%E7%BA%A2%E4%BE%A3%E2%80%9C%E9%A1%B9%E7%9B%AE%E5%AE%9E%E8%B7%B5%E5%9F%BA%E5%9C%B0%E6%8C%82%E7%89%8C%E6%88%90%E7%AB%8B%E4%BB%AA%E5%BC%8F.png"
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
    // const onSwiper = (swiper) => {
    //   console.log(swiper);
    // };
    // const onSlideChange = () => {
    //   console.log("slide change");
    // };

    return {
      // onSwiper,
      // onSlideChange,
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
