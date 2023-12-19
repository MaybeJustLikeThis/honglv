<template>
  <div class="news">
    <div class="header"><p>最新资讯</p></div>
    <div class="content">
      <div class="box">
        <span>2023-10-30 20:41:00</span><br />"寻访山西文化新名片"|遇见古交
        成为故交
      </div>
      <div class="box">
        <span>2023-10-25 20:39:00</span><br />古交市三座人行天桥提前完工交付使用
      </div>
      <div class="box">
        <span>2022-01-05 11:01:00</span><br />昔日火焰山 如今披绿装
      </div>
      <div class="box">
        <span>2021-08-31 07:34:00</span><br />看“煤城”如何“美颜”
        走进古交感受人居环境之变
      </div>
      <div class="box">
        <span>2019-07-21 16:11:32</span><br />山西省古交市加速农村煤改电进程
      </div>
      <div class="box"><a>更多</a></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.news {
  position: relative;
  left: 3%;
  width: 27%;
  height: 100%;
  background-color: #f8f8f8;
}
.header {
  position: relative;
  width: 100%;
  height: 15%;
  background-color: #d40000;
}
p {
  position: relative;
  top: 20px;
  left: 30px;
  width: 100%;
  height: 50%;
  color: white;
  line-height: 100%;
  font-size: 20px;
  margin: 0;
}
.content {
  position: relative;
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
}
.box {
  flex: 1 1 auto;
  background-color: #f8f8f8;
  font-size: 14px;
  margin: 10px;
}
span {
  color: #a4a4a4;
  font-size: 12px;
}
a {
  position: relative;
  top: 1%;
  font-size: 16px;
  left: 44%;
  color: #666666;
}
</style>
