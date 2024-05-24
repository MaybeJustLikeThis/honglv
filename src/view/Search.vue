<template>
  <div id="box">
    <div id="search_header">
      <div id="search_header_left">
        <div class="secondaryMenu">
          <SecondaryMenu message="目的地城市选择" />
          <SecondaryMenu message="咨询种类选择" />
        </div>
        <div class="carousel"><Carousel /></div>
      </div>
      <div id="search_header_right">
        <Carouselsp />
      </div>
    </div>
    <div class="content-container">
      <ShortTrip />
      <Command />
    </div>
  </div>
</template>

<script setup>
import SecondaryMenu from "@/components/Search/SecondaryMenu.vue";
import ShortTrip from "@/components/Search/ShortTrip.vue";
import Carousel from "@/components/Search/Carousel.vue";
import Carouselsp from "@/components/Search/Carousel_sp.vue";
import Command from "@/components/Search/Command.vue";
</script>

<style scoped>
#box {
  margin: 0 auto;
  min-width: 1200px;
  max-width: 100%;
  height: auto;
}
#search_header {
  position: relative;
  width: 65%;
  height: 400px;
  margin: 0 auto;
  /* background-color: aquamarine; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
}
#search_header_left {
  position: relative;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.secondaryMenu {
  position: relative;
  width: 100%;
  height: 50%;
  margin: 20px 0px 10px 0px;
  box-sizing: border-box;
  padding-right: 50px;
  align-self: flex-start;
  /* background-color: antiquewhite; */
}
.carousel {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  margin: 20px 0px 10px 0px;
  padding-right: 50px;
  /* background-color: rgb(148, 95, 46); */
}

#search_header_right {
  position: relative;
  width: 60%;
  height: 100%;
}
.content-container {
  position: relative;
  width: 65%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
  max-width: 1600px;
}
</style>
