<template>
  <el-aside class="aside">
    <div class="title">周边短途游</div>
    <div class="aside-content">
      <div class="area">
        <div class="column">
          <div class="subtitle">热门目的地</div>
          <div class="destination-list">
            <div
              class="destination-item"
              v-for="destination in destinations"
              :key="destination.id"
            >
              · {{ destination.name }}
            </div>
          </div>
        </div>
        <div class="column">
          <div class="subtitle">热门主题</div>
          <div class="theme-list" v-for="(theme, index) in themes" :key="index">
            {{ theme.name }}
          </div>
        </div>
        <div class="column">
          <div class="subtitle">游玩天数</div>
          <div class="destination-list">
            <div class="destination-item">· 1 天</div>
            <div class="destination-item">· 2 天</div>
            <div class="destination-item">· 3 天</div>
          </div>
        </div>
      </div>
    </div>
  </el-aside>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getTopdestinations } from "../../utils/api/index";
let destinations = ref();
onMounted(() => {
  getTopdestinations().then((res) => {
    destinations.value = res.data;
    console.log(destinations.value);
  });
});
</script>

<style scoped>
.aside-content {
  position: relative;
  width: 100%;
  height: 600px;
  background-color: white;
  border-top: 2px solid #ff5353;
}
.aside-content::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../../public/home/踏青住帐篷 1.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: auto;
  opacity: 0.5; /* 设置透明度 */
}
.title {
  font-size: 32px;
  font-weight: semibold;
  margin-bottom: 20px;
}
.column {
  position: relative;
}
.area {
  position: relative;
  margin-bottom: 20px;
}

.destination-list {
  position: relative;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
}

.destination-item {
  flex: 0 50%; /* Two columns layout */
  margin-bottom: 10px; /* Adjust margin for spacing */
}
.subtitle {
  position: relative;
  font-size: 24px;
  margin: 10px 0px 30px 10px;
}
</style>
