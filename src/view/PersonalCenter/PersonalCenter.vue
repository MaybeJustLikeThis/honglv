<template>
  <Header></Header>
  <div id="background">
    <bread-crumb class="position"></bread-crumb>
    <div class="box_center">
      <div class="mainbody">
        <div class="body_left">
          <div class="body_nav">
            <center-nav @spanclk="change"></center-nav>
          </div>
        </div>

        <div class="body_right">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
  <Bottom></Bottom>
</template>

<script setup>
import Header from "@/libs/Header.vue";
import Bottom from "@/libs/Home_Bottom/Bottom.vue";
import CenterNav from "@/components/PersonalCenter/CenterNav.vue";
import BreadCrumb from "@/components/PersonalCenter/BreadCrumb.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const change = (payload) => {
  console.log("payload", payload);
  router.push({
    path: `/PersonalCenter/${payload.title}`,
    query: {
      url: payload.url,
      name: payload.name,
    },
  });
};
</script>

<style scoped>
#background {
  background-color: #f8f8f8;
  background-image: none;
}

.box_center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainbody {
  height: 658px;
  width: 1000px;
  background-color: #fff;
  margin-top: 43px;
  border: 2px soild #f8f8f8;
  display: flex;
  /* overflow: hidden; */
}

.body_left {
  width: 225px;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  border-right: 2px #f8f8f8 solid;
}

.body_title {
  font-family: Abel;
  font-weight: 400;
  font-size: 24px;
  line-height: 30.59px;
  width: 225px;
  height: 105px;
  text-align: center;
  align-content: center;
}
.position {
  position: relative;
  padding-top: 20px;
  left: 20%;
}
/* .body_right {
  width: 773px;

  overflow: hidden;
  position: relative;
}
.bread_crumb {
  position: absolute;
  top: 142px;
  left: 280px;
} */
</style>
