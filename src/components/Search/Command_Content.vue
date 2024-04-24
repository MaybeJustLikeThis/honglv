<template>
  <div class="content-box">
    <div class="content-title">
      <div class="content-title-left">
        <div class="content-from">
          <div class="content-like-icon" style="width: 30px">
            <img
              src="../../../public/home/美食.svg"
              alt="来自"
              style="width: 20px"
            />
          </div>
          来自
          <span class="content-from-text">{{ from }}</span>
        </div>
        <div class="content-title-text">{{ title }}</div>
      </div>
      <div class="content-title-right">
        <div class="content-like">
          <el-button round class="content-like-btn"
            >{{ like_num }} 点赞
            <div class="content-like-icon">
              <img src="../../../public/home/点赞_块.svg" alt="点赞" />
            </div>
          </el-button>
        </div>
      </div>
    </div>
    <div class="content-text">
      <div class="content-picture"><img :src="picture" alt="推荐攻略" /></div>
      <div class="text-content">
        <p>{{ text }}</p>
      </div>
      <div class="content-user">{{ user_name }}发布于 2022-01-01</div>
    </div>
  </div>
  <hr />
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";

let from = ref("美食");
let title = ref("杭州美食,带你从早吃到晚!");
let text = ref(
  "俗话说的好，上有天堂，下有苏杭，杭州不仅因其秀美的风景而久负盛名，这里还有许多特色美食佳着，能够为你打开另一扇了解杭州的门。"
);
let picture = ref("");
let like_num = ref(0);
let user_name = ref(""); // 发布者用户名

const props = defineProps({
  data: {
    from: String,
    title: String,
    text: String,
    picture: String,
    like_num: Number,
    user_name: String,
    required: true,
  },
});

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
  max-width: 1200px;
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
  width: 120px;
  height: 30%;
  align-self: start;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.content-title-text {
  position: relative;
  top: 10px;
  font-size: 22px;
  background-color: rgb(148, 49, 49);
  position: relative;
  width: 100%;
  height: 60%;
}
.content-like-btn {
  background-color: white;
  position: relative;
  width: 80%;
  max-width: 100px;
  transform: translate(10%, 120%);
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
  width: 46%;
  height: 100%;
  color: #666666;
  background-color: rgb(28, 199, 65);
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
p {
  position: relative;
}
.content-user {
  position: relative;
  width: 24%;
  top: 80%;
  height: 20%;
  color: #999999;
  font-size: 12px;
  background-color: rgb(39, 19, 112);
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  position: relative;
  height: 100%;
  width: 100%;
}
.content-like-icon {
  position: relative;
  width: 40px;
  left: 10px;
  height: 20px;
}
.content-from-text {
  font-size: 16px;
  color: #ff8a00;
  font-weight: bold;
}
</style>
