<template>
  <section class="cover-container">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa17123021f4b261b7a70e9543f44334e6fefdde526eec56bf2be3e4623c5748?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
      alt="Cover Placeholder"
      class="cover-image"
    />
    <div class="cover-description">
      一张不低于640*188像素的图片（非gif格式）
    </div>
    <button class="upload-button">上传封面</button>
  </section>
</template>

<style scoped>
.cover-container {
  border: 2px solid #c9c8c8;
  background-color: #fff;
  display: flex;
  max-width: 429px;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  white-space: nowrap;
  padding: 45px 80px;
}

.cover-image {
  aspect-ratio: 1.01;
  object-fit: cover;
  object-position: center;
  width: 100px;
  max-width: 100%;
}

.cover-description {
  color: #999;
  align-self: stretch;
  font:
    14px Abel,
    sans-serif;
}

.upload-button {
  border-radius: 10px;
  background-color: #b00;
  margin-top: 39px;
  justify-content: center;
  color: #fff;
  padding: 16px 42px;
  font:
    16px Abel,
    sans-serif;
  cursor: pointer;
}
</style>
