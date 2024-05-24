<template>
  <div class="banner image-container container" :style="backgroundImageStyle">
    <div class="msgShow">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/44c275e8befd1b4aa52bf0584b40a4d7df826a40ea944f466600b53ba0630aa7?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
        class="avatar"
      />
      <div class="articleMsg">
        <div class="articleTitle">
          <h1 class="title">{{ title }}</h1>
        </div>
        <div class="userMsg">
          <div class="baseMsg">
            <div class="userName">{{ msg.from }}</div>
            <div class="viewTimes">浏览数:{{ msg.view }}</div>
            <p class="id">id:16492263</p>
          </div>
          <div class="publishedDate">发表于:{{ msg.date }}</div>
        </div>
      </div>
    </div>

    <div class="btnArea">
      <div class="separator"></div>
      <div class="article-action">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/292edbad4ad7cecf391b1b6f00fce30600d4984eea7cd52ae1b80e4c1aa85c59?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
          class="action-image"
          alt="Like icon"
        />
        <p class="action-text">{{ msg.like }}点赞</p>
      </div>
      <div class="separator"></div>
      <div class="article-action">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f2fff560d3a60fa1b2c4398cd1d25cf886be84339409219dc2f4d70e8fd4f85?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
          class="action-image"
          alt="Favorite icon"
        />
        <p class="action-text">{{ msg.star }}收藏</p>
      </div>
      <div class="separator"></div>
      <div class="article-action">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c1658b3d2d453de25eeca6394fc9944930010744f2236992e4efac9ef103f32?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
          class="action-image"
          alt="Share icon"
        />
        <p class="action-text">{{ msg.share }}分享</p>
      </div>
      <div class="separator"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps(["title", "msg", "headImgURL"]);

const backgroundImageStyle = computed(() => {
  return {
    backgroundImage: `url(${
      props.headImgURL ||
      "https://cdn.builder.io/api/v1/image/assets/TEMP/554b21ca1ae894286703db97a55a353bee5575d15cea33d7eb59712d6a32d820?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
    })`,
  };
});
</script>

<style scoped>
.banner {
  width: 100vw;
  height: 40vh;
  display: flex;
  margin-bottom: 150px;
  flex-direction: row;
  align-items: flex-end;
  background-size: cover;
  justify-content: center;
}
.msgShow {
  display: flex;
  width: 40em;
  height: 8em;
  flex-direction: row;
  transform: translateY(11.5em);
  padding-bottom: 100px;
}
.msgShow .avatar {
  width: 100px;
  height: 100px;
}
.articleMsg {
  display: flex;
  margin-left: 15px;
  flex-direction: column;
  justify-content: center;
}
.userMsg {
  color: #aaa;
}
.userMsg .baseMsg {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.btnArea {
  gap: 20px;
  display: flex;
  color: #999;
  display: flex;
  font-size: 10px;
  padding: 0 20px;
  padding-bottom: 50px;
  flex-direction: row;
  /* background-color: #fff; */
  transform: translateY(100%);
}

.articleMsg .articleTitle {
  display: flex;
  margin-top: -2em;
  flex-direction: row;
}
.articleMsg .articleTitle .title,
.id {
  margin: 0;
}
.separator {
  width: 1px;
  height: 60px;
  background-color: #c9c8c8;
}

@import url(@/style/detail.css);
</style>
