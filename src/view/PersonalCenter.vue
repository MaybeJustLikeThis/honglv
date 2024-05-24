<template>
    <div id="background">
      <!-- <Header></Header> -->
      <bread-crumb></bread-crumb>
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
      <!-- <Bottom></Bottom> -->
    </div>
  </template>
  
  <script setup>
  import Header from '../libs/Header.vue';
  import Bottom from '../libs/Home_Bottom/Bottom.vue'
  import CenterNav from '../components/PersonalCenter/CenterNav.vue';
  import BreadCrumb from '../components/PersonalCenter/BreadCrumb.vue';
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const change = payload => {
    console.log("payload",payload)
    router.push({
      path: `/honglv/PersonalCenter/${payload.title}`,
      query: {
        url: payload.url,
        name: payload.name,
      }
    })
  }

  
  </script>
  
  <style scoped>
  #background {
    background-color: #F8F8F8;
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
    margin-top: 63px;
    border: 2px soild #F8F8F8;
    display: flex;
    /* overflow: hidden; */
  }
  
  .body_left{
    width: 225px;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* gap: 10px; */
    border-right: 2px #F8F8F8 solid;
  }
  
  .body_title{
      font-family: Abel;
      font-weight: 400;
      font-size: 24px;
      line-height: 30.59px;
      width: 225px;
      height: 105px;
      text-align: center;
      align-content: center;
  }
  
  .body_right{
    width: 773px;
    /* height: 100%; */
    /* margin-top: 85px;
    border-top: 1px solid rgba(201, 200, 200, 1); */
    /* overflow: auto; */
    overflow: hidden;
    position: relative;
  }
  .bread_crumb{
  position: absolute;
  top:142px;
  left:280px;
}
  </style>