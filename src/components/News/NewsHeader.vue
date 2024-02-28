<template>
  <div>
    <div class="title">{{ title }}</div>
    <div class="messageArea">
      <div class="messageBox">
        <div class="message">来源：{{ msg.from }}</div>
        <div class="message">{{ msg.date }}</div>
        <div class="message">浏览量：{{ msg.view }}</div>
        <div class="message">收藏量：{{ msg.star }}</div>
      </div>
      <div class="cloudHr">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/140c3fa23f212ab58623c056bd0900455298a441c40119ee5f65d45aa2aa5c0b?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/140c3fa23f212ab58623c056bd0900455298a441c40119ee5f65d45aa2aa5c0b?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/140c3fa23f212ab58623c056bd0900455298a441c40119ee5f65d45aa2aa5c0b?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/140c3fa23f212ab58623c056bd0900455298a441c40119ee5f65d45aa2aa5c0b?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/140c3fa23f212ab58623c056bd0900455298a441c40119ee5f65d45aa2aa5c0b?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/140c3fa23f212ab58623c056bd0900455298a441c40119ee5f65d45aa2aa5c0b?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/140c3fa23f212ab58623c056bd0900455298a441c40119ee5f65d45aa2aa5c0b?apiKey=c94cf1206d5a44cea72bfa67327d7693&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/140c3fa23f212ab58623c056bd0900455298a441c40119ee5f65d45aa2aa5c0b?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
          class="redCloud"
        />
        <hr class="redLine" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { title, msg } from "@/store/News/guide/qianfo.js";
</script>

<style scoped>
.title {
  color: #333;
  text-align: center;
  margin-top: 22px;
  white-space: nowrap;
  font:
    600 25px Abel,
    sans-serif;
}

.messageArea {
  justify-content: space-between;
  margin-top: 35px;
}
.messageBox {
  margin: 0 auto;
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 20px;
}
.cloudHr {
  width: auto;
}
.redCloud {
  width: 510px;
}
.redLine {
  position: relative;
  top: -15px;
  border: none;
  border-bottom: 5px solid #a51f24;
}

.message {
  color: #999;
  font:
    400 14px Abel,
    sans-serif;
}
</style>
