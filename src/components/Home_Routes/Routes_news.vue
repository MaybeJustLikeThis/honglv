<template>
  <div class="news">
    <div class="header"><p>最新资讯</p></div>
    <div class="content">
      <div class="box">
        <router-link
          :to="{
            path: '/home_routes_news',
            query: {
              store: 'lastNews',
              page: 'card',
            },
          }"
        >
          <span>2023-10-30 20:41:00</span><br />"寻访山西文化新名片"|遇见古交
          成为故交
        </router-link>
      </div>

      <div class="box">
        <router-link
          :to="{
            path: '/home_routes_news',
            query: {
              store: 'lastNews',
              page: 'bridge',
            },
          }"
        >
          <span>2023-10-25 20:39:00</span
          ><br />古交市三座人行天桥提前完工交付使用
        </router-link>
      </div>
      <div class="box">
        <router-link
          :to="{
            path: '/home_routes_news',
            query: {
              store: 'lastNews',
              page: 'fire',
            },
          }"
        >
          <span>2022-01-05 11:01:00</span><br />昔日火焰山 如今披绿装
        </router-link>
      </div>
      <div class="box">
        <router-link
          :to="{
            path: '/home_routes_news',
            query: {
              store: 'lastNews',
              page: 'coal',
            },
          }"
        >
          <span>2021-08-31 07:34:00</span><br />看“煤城”如何“美颜”
          走进古交感受人居环境之变
        </router-link>
      </div>
      <div class="box">
        <router-link
          :to="{
            path: '/home_routes_news',
            query: {
              store: 'lastNews',
              page: 'coalToEle',
            },
          }"
        >
          <span>2019-07-21 16:11:32</span><br />山西省古交市加速农村煤改电进程
        </router-link>
      </div>
      <div class="box more">
        <router-link to="/home_routes_news" class="link_more">更多</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.news {
  position: relative;
  left: 3%;
  width: 27%;
  height: 100%;
  background-color: #f8f8f8;
}
.header {
  position: relative;
  width: 100%;
  height: 15%;
  background-color: #d40000;
}
p {
  position: relative;
  top: 20px;
  left: 30px;
  width: 100%;
  height: 50%;
  color: white;
  line-height: 100%;
  font-size: 20px;
  margin: 0;
}
.content {
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
}
.box {
  flex: 1 1 auto;
  background-color: #f8f8f8;
  font-size: 14px;
  margin: 10px;
}
.box.more {
  margin: 0px;
  margin-top: 10px;
}
span {
  color: #a4a4a4;
  font-size: 12px;
}
.link_more {
  position: relative;
  width: 100%;
  margin: 0px;
  top: 1%;
  font-size: 16px;
  left: 44%;
  color: #666666;
  text-decoration: none;
}
</style>
