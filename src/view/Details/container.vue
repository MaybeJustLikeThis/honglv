<template>
  <div class="content">
    <guide></guide>
    <article class="articleContainer">
      <h3 class="flower-title">杏花</h3>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/713a0cc9e0516d7a9b50495990b0a269d0c9d24d015b4f331c854e757850b05b?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
        class="flower-image"
        alt="杏花"
      />
      <p class="flower-description">
        “沾衣欲湿杏花雨，吹面不寒杨柳风。”
        又是一年“杏花微雨时”，我市多地杏花迎来盛花期，为河东大地增长浓浓春意。<br />
        ◆盐湖区东郭镇上月村<br />
        花期：3月上旬<br />
        赏花路线：沿安邑旅游路，通过东郭镇主十字路口后向东拐，沿解杨路东段两公里后便可看到。<br />
        ◆万荣县皇甫乡袁家村<br />
        袁家村的5万余棵古杏树，点缀山间，花开时节，蔚为壮阔，使得山间古村也无穷浪漫。<br />
        花期：3月上旬<br />
        赏花路线：运稷一级路运城方位、皇甫乡政府以西5公里。<br />
      </p>

      <h3 class="flower-title">梨花</h3>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d93d3df0a3a9e112e06e674fe2e8ac7bc159a689892f8dfc2c92755dce89fce?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
        class="flower-image"
        alt="梨花"
      />
      <p class="flower-description">
        “玉作精神雪作肤，雨中娇韵越清瘦。”<br />
        梨花开时，漫天遍野，如一地白雪，圣洁而低雅。即使阅过人间万家春色，也不及漫山梨花一瞥。<br />
        ◆盐湖区泓芝驿镇王过村、郭半村、孙余村<br />
        花期：3月下旬至4月初<br />
        赏花路线：沿运稷路向北经北相镇至北古村口，左转直行至北店村西口，右转进入盐湖区现代农业示范园，直行至梨文明主题公园，登咏梨台、王过亭，一览万亩梨花海。<br />
        ◆万荣孤峰山景区周边<br />
        花期：4月上旬<br />
        赏花路线：万荣县城南8公里。
      </p>

      <h3 class="flower-title">桃花</h3>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8276eed7a5c193b62e99e87081480d3a87e51133ccd221bac3130d94ef09c6d?apiKey=c94cf1206d5a44cea72bfa67327d7693&"
        class="flower-image"
        alt="桃花"
      />
      <p class="flower-description">
        “烟雨半藏杨柳，风光初到桃花。”<br />
        春风轻轻吹起，苏醒了十里桃花的心事，千树燃情，桃蕊芬芳。<br />
        灼灼桃花，粉白一树，站在桃花之间，按下快门，便是春日感满满、温顺且浪漫的美照。<br />
        3月中旬至4月中旬是桃花最佳观赏期，我市多地桃花先后迎来盛花期。<br />
        ◆盐湖区东郭镇上月村、下月村、界滩村<br />
        花期：3月中旬至3月底<br />
        赏花路线：沿安邑旅游路，通过东郭镇大十字路口后向东拐，沿解杨路东段两公里后便可看到。<br />
      </p>
    </article>
  </div>
</template>

<script setup>
import guide from "./cpns/guide.vue";
</script>

<style scoped>
.content {
  margin: 0 auto;
  background-color: #fff;
}
.articleContainer {
  text-align: center;
}
img {
  width: 500px;
}
.articleContainer p {
  width: 80%;
  margin: 1em 10%;
  text-align: left;
}
@import url(../../style/detail.css);
</style>
