<template>
  <div class="banner image-container container">
    <div class="msgShow">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/44c275e8befd1b4aa52bf0584b40a4d7df826a40ea944f466600b53ba0630aa7?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
        class="avatar"
      />
      <div class="articleMsg">
        <div class="articleTitle">
          <h1 class="title">走！“寻找河东最美春天”</h1>
          <p class="id">id:16492263</p>
        </div>
        <div class="userMsg">
          <div class="userName">热心小黑</div>
          <div class="publishedDate">发表于:2024-03-20 16:39:02</div>
          <div class="viewTimes">浏览数:2135</div>
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
        <p class="action-text">25点赞</p>
      </div>
      <div class="separator"></div>
      <div class="article-action">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f2fff560d3a60fa1b2c4398cd1d25cf886be84339409219dc2f4d70e8fd4f85?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
          class="action-image"
          alt="Favorite icon"
        />
        <p class="action-text">15收藏</p>
      </div>
      <div class="separator"></div>
      <div class="article-action">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c1658b3d2d453de25eeca6394fc9944930010744f2236992e4efac9ef103f32?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
          class="action-image"
          alt="Share icon"
        />
        <p class="action-text">314分享</p>
      </div>
      <div class="separator"></div>
    </div>
  </div>
</template>

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
  background-image: url("https://cdn.builder.io/api/v1/image/assets/TEMP/521db5796b87a7a4dafe211a057eed2f163c29190a2808593fb420400afc09ce?apiKey=c94cf1206d5a44cea72bfa67327d7693&");
}
.msgShow {
  display: flex;
  width: 40vw;
  flex-direction: row;
  transform: translateY(50%);
  padding-bottom: 50px;
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
  flex-direction: row;
}
.articleMsg .articleTitle .id {
  line-height: 4em;
}
.separator {
  width: 1px;
  height: 60px;
  background-color: #c9c8c8;
}

@import url(@/style/detail.css);
</style>
