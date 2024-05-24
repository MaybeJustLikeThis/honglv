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
        <div class="content-title-text">{{ item.title }}</div>
      </div>
      <div class="content-title-right">
        <div class="content-like">
          <el-button round class="content-like-btn" @click="handleLike(item.id)"
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
      <div class="content-user">
        <span>{{ user_name }}</span> <span>{{ view_num }}浏览</span>
        <span> {{ comments_num }}评论</span>
      </div>
    </div>
  </div>
  <hr />
</template>

<script setup>
import { ref, onMounted, defineProps, defineEmits } from "vue";

let from = ref("美食");
let title = ref("杭州美食,带你从早吃到晚!");
let text = ref(
  "俗话说的好，上有天堂，下有苏杭，杭州不仅因其秀美的风景而久负盛名，这里还有许多特色美食佳着，能够为你打开另一扇了解杭州的门。"
);
let user_name = ref("老李头"); // 发布者用户名
let view_num = ref(666);
let comments_num = ref(50);
let picture = ref("");
let like_num = ref(0);

const props = defineProps({
  item: {
    data: Object,
    required: true,
  },
});
let item = ref(props.item);


const emits = defineEmits(["like"]);
const handleLike = (id) => {
  // 执行点赞相关逻辑
  emits("like", id); // 触发自定义事件，将点赞的id传递给父组件
};
onMounted(() => {});
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
  /* background-color: gold; */
  max-width: 1200px;
}
.content-title {
  position: relative;
  /* background-color: gray; */
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
}
.content-title-left {
  display: flex;
  flex-direction: column;
  /* background-color: tomato; */
  align-items: center;
  padding: 10px;
  width: 80%;
}
.content-title-right {
  position: relative;
  /* background-color: orange; */
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
  /* background-color: rgb(148, 49, 49); */
  position: relative;
  margin-left: 22px;

  width: 100%;
  height: 60%;
}
.content-like-btn {
  background-color: white;
  border-color: #ff8a00;
  position: relative;
  width: 80%;
  max-width: 100px;
  transform: translate(10%, 200%);
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
  /* background-color: rgb(116, 8, 8); */
}
.text-content {
  position: relative;
  width: 46%;
  height: 100%;
  color: #666666;
  /* background-color: rgb(28, 199, 65); */
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
  /* background-color: rgb(39, 19, 112); */
  display: flex;
  justify-content: space-between;
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
