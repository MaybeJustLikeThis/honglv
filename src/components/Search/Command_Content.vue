<template>
  <div class="content-box">
    <div class="content-title">
      <div class="content-title-left">
        <div class="content-from">{{ from }}</div>
        <div class="content-title-text">{{ title }}</div>
      </div>
      <div class="content-title-right">
        <div class="content-like">
          <el-button round class="content-like-btn"
            >{{ like_num }} 点赞 <img src="" alt=""
          /></el-button>
        </div>
      </div>
    </div>
    <div class="content-text">
      <div class="content-picture">{{ picture }}</div>
      <div class="text-content">
        {{ text }}
      </div>
      <div class="content-user">{{ user_name }}用户111 发布于 2022-01-01</div>
    </div>
  </div>
  <hr />
</template>

<script setup>
import { ref, onMounted } from "vue";

let from = ref("");
let title = ref("");
let text = ref("");
let picture = ref("");
let like_num = ref(0);
let user_name = ref(""); // 发布者用户名

onMounted(() => {
  // 获取数据
  // from = "来自xxx";
});
</script>

<style scoped>
hr {
  /* border: none               高度 */
  margin: 0;
  
}
.content-box {
  position: relative;
  width: 100%;
  height: 300px;
  background-color: gold;
}
.content-title {
  position: relative;
  background-color: gray;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
}
.content-title-left {
  display: flex;
  flex-direction: column;
  background-color: tomato;
  align-items: center;
  padding: 10px;
  width: 80%;
}
.content-title-right {
  position: relative;
  background-color: orange;
  width: 20%;
  height: 100%;
}
.content-from {
  font-size: 14px;
  background-color: white;
  position: relative;
  width: 100px;
  height: 30%;
  align-self: start;
}
.content-title-text {
  font-size: 20px;
  background-color: rgb(148, 49, 49);
  position: relative;
  width: 100%;
  height: 60%;
}
.content-like-btn {
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content-text {
  position: relative;
  width: 100%;
  height: 60%;
  background-color: white;
  display: flex;
  flex-direction: row;
}
.content-picture {
  position: relative;
  width: 30%;
  height: 100%;
  background-color: rgb(116, 8, 8);
}
.text-content {
  position: relative;
  width: 40%;
  height: 100%;
  background-color: rgb(28, 199, 65);
  font-size: 16px;
}
.content-user {
  position: relative;
  width: 30%;
  top: 80%;
  height: 20%;
  color: #999999;
  background-color: rgb(39, 19, 112);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
