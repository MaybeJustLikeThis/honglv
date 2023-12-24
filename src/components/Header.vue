<template>
  <div class="header">
    <div class="nav">
      <div class="nav_logo">
        <div class="logo">
          <img src="../../public/home/红侣旅行网.png" alt="" />
        </div>
        <button class="nav_box">首页</button>
        <button class="nav_box">文化古交</button>
        <button class="nav_box">畅游古交</button>
        <button class="nav_box">数据中心</button>
      </div>
      ·
      <div class="login">登录/注册</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: #7f0505;
  width: 100%;
  height: 120px;
}
.nav {
  background-color: #d40000;
  position: relative;
  top: 40px;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.nav_logo {
  background-color: #d40000;
  position: relative;
  left: 2%;
  width: 40%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.logo {
  background-color: #d40000;
  position: relative;
  bottom: 40px;
  height: 120px;
  /* width:58px; */
  flex: 0 1 auto;
}
img {
  height: 100%;
  width: 100%;
}

.nav_box {
  background-color: #d40000;
  flex: 1 1;
  font-size: 16px;
  text-align: center;
  line-height: 80px;
  color: white;
  /* border-radius: 25%; */
  border: none;
  transition: 0.75s;
}
.nav_box:hover {
  color: black;
  box-shadow: 0px 20px 20px #712020;
  border-radius: 25%;
  animation-fill-mode: forwards;
}

.nav_box:active {
  background-color: blanchedalmond;
  transition: 0.5s;
}
.login {
  /* background-color: beige; */
  position: relative;
  right: 50px;
  width: 9%;
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: white;
  transition: 0.5s;
}

.login:hover {
  color: black;
  animation-fill-mode: forwards;
}
</style>
