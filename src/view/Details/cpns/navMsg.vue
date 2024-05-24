<template>
  <section class="info-section">
    <h2 class="section-title">资讯信息</h2>
    <ul class="info-list">
      <li class="info-item" tabindex="0">
        <span class="dot"></span>
        <span class="info-text">杏花</span>
      </li>
      <li class="info-item" tabindex="0">
        <span class="dot"></span>
        <span class="info-text">梨花</span>
      </li>
      <li class="info-item" tabindex="0">
        <span class="dot"></span>
        <span class="info-text">桃花</span>
      </li>
      <li class="info-item" tabindex="0">
        <span class="dot"></span>
        <span class="info-text">碧桃花</span>
      </li>
      <li class="info-item" tabindex="0">
        <span class="dot"></span>
        <span class="info-text">白鹃梅花</span>
      </li>
      <li class="info-item" tabindex="0">
        <span class="dot"></span>
        <span class="info-text">苹果花</span>
      </li>
      <li class="info-item" tabindex="0">
        <span class="dot"></span>
        <span class="info-text">连翘花</span>
      </li>
      <li class="info-item" tabindex="0">
        <span class="dot"></span>
        <span class="info-text">山楂花</span>
      </li>
      <li class="info-item" tabindex="0">
        <span class="dot"></span>
        <span class="info-text">玫瑰花</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.info-section {
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  max-width: 229px;
  flex-direction: column;
  align-items: start;
  font-size: 14px;
  color: #666;
  font-weight: 400;
  white-space: nowrap;
  padding: 10px 0 10px 20px;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.info-item {
  display: flex;
  align-items: center;
}

.dot {
  background-color: #c9c8c8;
  border-radius: 50%;
  width: 8px;
  height: 8px;
}
</style>
