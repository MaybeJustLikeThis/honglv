<template>
  <div class="box">
    <div class="routes">
      <div class="routes_header">
        <p>精品路线</p>
        <div class="route_flex">
          <router-link to="/home_routes" class="route_flexbox x"
            >古老古交</router-link
          >
          <router-link to="/home_routes" class="route_flexbox xx"
            >神秘古交</router-link
          >
          <router-link to="/home_routes" class="route_flexbox xxx"
            >英雄古交</router-link
          >
          <router-link to="/home_routes" class="route_flexbox xxxx"
            >夜游古交</router-link
          >
        </div>
        <div class="ontherway">其他路线></div>
      </div>
      <div class="route_show">
        <div class="route_showbox first">
          <div class="img first">
            <router-link to="/home_routes" style="text-decoration: none">
              <span
                ><i>01</i> <strong>古老古交</strong
                ><br />太原市唯一一处大型旧石器遗址</span
              >
            </router-link>
          </div>
          <div class="img second">
            <img
              src="https://yunding-ljt.oss-cn-beijing.aliyuncs.com/Subtract.png"
              alt=""
            />
          </div>
        </div>
        <div class="route_showbox">
          <div class="img">
            <img
              src="https://yunding-ljt.oss-cn-beijing.aliyuncs.com/Rectangle%2025.png"
              alt=""
            />
          </div>
          <router-link to="/home_routes" style="text-decoration: none">
            <span
              ><i>02</i> <strong>神秘古交</strong
              ><br />“龙城秘境”地处与角子崖，地理位置独特，地形地貌奇绝</span
            ></router-link
          >
        </div>
        <div class="route_showbox">
          <div class="img">
            <img
              src="https://yunding-ljt.oss-cn-beijing.aliyuncs.com/26.png"
              alt=""
            />
          </div>
          <router-link to="/home_routes" style="text-decoration: none">
            <span
              ><i>03</i> <strong>英雄古交</strong
              ><br />晋绥八分区（专署旧址），被党中央誉为“钢铁走廊”</span
            ></router-link
          >
        </div>
        <div class="route_showbox">
          <div class="img">
            <img
              src="https://yunding-ljt.oss-cn-beijing.aliyuncs.com/27.png"
              alt=""
            />
          </div>
          <router-link to="/home_routes" style="text-decoration: none">
            <span
              ><i>04</i> <strong>夜游古交</strong
              ><br />古交电厂夜景，静谧而绚烂</span
            ></router-link
          >
        </div>
      </div>
    </div>
    <Routes_news> </Routes_news>
  </div>
</template>

<script>
import Routes_news from "./Routes_news.vue";
export default {
  data() {
    return {};
  },
  components: {
    Routes_news,
  },
};
</script>

<style scoped>
.box {
  position: relative;
  top: 50px;
  /* left: 18%; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); */
  width: 1050px;
  height: 400px;
  min-height: 400px;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
}
.routes {
  position: relative;
  /* background-color: greenyellow; */
  width: 70%;
  height: 400px;
}
.routes_header {
  position: relative;
  background-color: #d40000;
  width: 100%;
  height: 15%;
  display: flex;
}
p {
  position: relative;
  left: 4%;
  width: 24%;
  color: white;
  line-height: 100%;
  font-size: 20px;
}
.route_flex {
  /* background-color: blanchedalmond; */
  position: relative;
  width: 56%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.route_flexbox {
  width: 20%;
  height: 60%;
  position: relative;
  top: 20%;
  /* background-color: blueviolet; */
  font-size: 16px;
  line-height: 200%;
  text-align: center;
  border-radius: 14px;
  transition: 0.75s;
  border: none;
  text-decoration: none;
}

.route_flexbox.x {
  background-color: #ffd700;
  color: #af9404;
}
.route_flexbox.x:hover {
  color: black;
  box-shadow: 3px 3px 3px 3px #681717;
  animation-fill-mode: forwards;
}
.route_flexbox.xx:hover {
  color: black;
  box-shadow: 3px 3px 3px 3px #681717;
  animation-fill-mode: forwards;
}
.route_flexbox.xxx:hover {
  color: black;
  box-shadow: 3px 3px 3px 3px #681717;
  animation-fill-mode: forwards;
}
.route_flexbox.xxxx:hover {
  color: black;
  box-shadow: 3px 3px 3px 3px #681717;
  animation-fill-mode: forwards;
}
.route_flexbox.xx {
  background-color: #00bfff;
  color: #0482ac;
}

.route_flexbox.xxx {
  background-color: #9acd32;
  color: #638322;
}
.route_flexbox.xxxx {
  background-color: #48d1cc;
  color: #338582;
}
.ontherway {
  position: relative;
  width: 20%;
  color: white;
  text-align: center;
  font-size: 14px;
  line-height: 400%;
  font-style: italic;
}
.route_show {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  height: 90%;
  /* background-color: turquoise; */
}
.route_showbox {
  position: relative;
  width: 64%;
  height: 31.9%;
  background-color: #f8f8f8;
  border-bottom-width: 5px;
  border-bottom-style: dashed;
  border-bottom-color: #c9c8c8;
  display: flex;
}
.route_showbox.first {
  flex: none;
  height: 100%;
  width: 36%;
  background-color: yellowgreen;
  border: none;
  display: flex;
  flex-direction: column;
}
.img {
  position: relative;
  width: 30%;
  height: 80%;
  background-color: teal;
  margin: 10px;
}
.img.first {
  position: relative;
  width: 100%;
  height: 33%;
  margin: 0px;
  background-color: #ffe4e4;
}
.img.second {
  position: relative;
  width: 100%;
  margin: 0;
  background-color: #ffe4e4;
}
img {
  max-width: 100%;
  height: 100%;
}
span {
  position: relative;
  max-width: 60%;
  max-height: 80%;
  top: 20px;
  left: 10px;
  font-size: 13px;
  color: #666666;
}
i {
  color: #d40000;
  font-size: 27px;
  font-style: serif;
}
strong {
  font-size: 18px;
  color: black;
}
</style>
