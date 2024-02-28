<template>
  <div class="image">
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/17efcc266170584daf2244b0e75d52600f5a2dfd41e618a82919ad00d8f32077?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
    />
  </div>
</template>

<script setup></script>

<style scoped>
.image {
  margin: 0 auto;
  position: relative;
  display: flex;
  min-height: 330px;
  margin-top: 30px;
  width: 480px;
  max-width: 100%;
  justify-content: center;
  padding: 50px 1px;
}

.image img {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
