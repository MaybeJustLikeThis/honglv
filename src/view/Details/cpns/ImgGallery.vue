<template>
  <main class="gallery-container">
    <h2 class="gallery-title">图片概览</h2>
    <section class="image-row">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f494f2f6ad7aeda4f0990b4f73b2af9fbbc7db9e1329868f37ced88d2109962f?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/976ccb2b594b839b653482d59e9e681cbe386ebad5edcfa7ed4ee01e911a607a?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d03954b053120a9ecd69d2f81c69ce23d253d35cc5166785bd50c510014a23e8?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
      />
    </section>
    <section class="image-row">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/84857d710c54c075863369a3440ca1d490fbc30a2f368e348c421ca1db72f45a?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a4febeceec9f7bdd5b99dd3bbf74b9369e43ede6fae0267075132dda258ff17?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/929e57319ab2083a4b37c585b70212a0f175d1fb4f3c3fe3e07a7daea61b9ff0?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
      />
    </section>
    <section class="image-row">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28b594165840fde4238ea40d6e158576f17f53469c4652037fbf5767d72f7109?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/105331e7770c864422475acb0e1a7cb3219d890a1bf9da911fa87bc8aa6daab5?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6db9cd7b4d39a6a3bdc828bf8c7393797e0102c944d96144bab2b7b81c160e7d?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
      />
    </section>
  </main>
</template>

<style scoped>
.gallery-container {
  display: flex;
  flex-direction: column;
  max-width: 230px;
  padding: 10px 20px;
}

.gallery-title {
  color: #666;
  margin: 0;
}

.image-row {
  display: flex;
  margin-top: 5px;
  gap: 5px;
  padding: 0 1px;
}

img {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 70px;
  background: lightgray 50% / cover no-repeat;
  fill: url("path-to-image");
}
</style>
