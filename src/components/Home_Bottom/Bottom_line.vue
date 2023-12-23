<template>
  <div class="line">
    <div class="logo">
      <img class="xx_logo" src="../../../public/home/电话.png" />
      <p>联系电话:010-1008639</p>
    </div>
    <a class="text">红侣旅行团</a>
    <a class="text">关于我们</a>
    <a class="text">联系我们</a>
    <a class="text">版权声明</a>
    <a class="text">投诉举报</a>
  </div>
  <div class="line">
    <div class="logo">
      <img class="xxx_logo" src="../../../public/home/邮箱.png" />
      <p>官方邮箱:honglv_clouds@163.com</p>
    </div>
    <a class="text">代码托管平台</a>
    <a class="text">加入我们</a>
    <a class="text">商务合作</a>
    <a class="text">用户协议</a>
    <a class="text">意见反馈</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.line {
  /* background-color: cadetblue; */
  width: 60%;
  height: 50px;
  position: relative;
  top: 22%;
  left: 19%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text {
  position: relative;
  top: 30%;
  width: 10%;
  height: 30%;
  /* background-color: green; */
  color: white;
  font-size: 12px;
  text-align: center;
  line-height: 200%;
}
.logo {
  position: relative;
  top: 30%;
  width: 30%;
  height: 30%;
  /* background-color: green; */
  color: white;
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: start;
  line-height: 200%;
}
p {
  position: relative;
  left: 10px;
  margin: 0;
}

.xx_logo {
  position: relative;
  top: 5px;
  height: 120%;
  width: 7%;
}
.xxx_logo {
  position: relative;
  top: 7px;
  height: 100%;
  width: 8%;
}
</style>
