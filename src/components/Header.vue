<template>
  <div class="header">
    <div class="nav">
      <div class="nav_logo">
        <div class="logo"></div>
        <button class="nav_box">首页</button>
        <button class="nav_box">文化古交</button>
        <button class="nav_box">畅游古交</button>
        <button class="nav_box">服务</button>
      </div>

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
  background-color: royalblue;
  position: relative;
  bottom: 40px;
  height: 120px;
  width: 80px;
  flex: 1 1 auto;
}
@keyframes button {
  0% {
  }
  100% {
    color: black;
    box-shadow: 0px 20px 20px #712020;
    border-radius: 25%;
  }
}
@keyframes out {
  100% {
    color: black;
    color: #f5f5f5;
    background-color: rgb(238, 96, 96);
    transform: translateY(1px);
  }
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
}
.nav_box:hover {
  animation: button 0.75s;
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
}
@keyframes login {
  from {
  }
  to {
    color: black;
  }
}
.login:hover {
  animation: login 0.5s;
  animation-fill-mode: forwards;
}
</style>
