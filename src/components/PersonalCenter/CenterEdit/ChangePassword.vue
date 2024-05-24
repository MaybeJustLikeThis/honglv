<template>
  <div class="title">修改密码</div>
  <div class="content">
    <div class="form">
      <div class="phone">
        <div class="word">手机号</div>
        <input class="input" type="text" value="" />
      </div>
      <div class="oldpassword">
        <div class="word">原密码</div>
        <input class="input" type="password" value="" />
      </div>
      <div class="newpassword">
        <div class="word">现密码</div>
        <input class="input" type="password" />
      </div>
      <div class="captcha">
        <div class="word">验证码</div>
        <input class="input" type="text" placeholder="请输入验证码" />
        <div class="fetch">
          <button :disabled="disabled" @click="handleClick()">
            {{ buttonText }}
          </button>
        </div>
      </div>
      <div class="buttons">
        <div class="button1">修 改</div>
        <div class="button1">保 存</div>
      </div>
    </div>
    <div class="avatarpart">
      <div class="avater">
        <img
          class="avatar"
          src="https://s3-alpha-sig.figma.com/img/814f/2552/b1e57eedf4da97f1df9da8a6d98518dd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9YhphsOcCC6u~4n4PP-E1wFG3pfe9jazQfVRk8HBeooDFTaIMMuSu4RWFpbXqHmpGa~cmbgAgfmS2FnkDfGMFx33uRhPxd2hhN3-G6Yj9MWOqZnZmYnOTF4rSu1pv4G180RchvYt29sLkNd5kcpbF5NJFepzmcyqhx5~E6vOM7vSlBW4yPt1K2Yvf3bBKTgUqkrB7TqYdpwkNV0mPSE76-0YDuiSJ2hMBLKr4pjAXZ8LINHDy51WA7yRvlyETIAXHIH14QVGIunCmBrxujofjn1fKwtwXQnFwYUHzSPFQ0j2WCgSAvuQe56R0dCI4DHo-otZb0mbCfhAgg6ue5xWg__"
        />
      </div>
      <div class="button2">更换头像</div>
      <div class="word2">
        用户身份：
        <div id="span">管理员</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
// 按钮状态和倒计时
const disabled = ref(false);
const buttonText = ref("获取验证码");
const time = ref(60); // 假设倒计时为60秒
// 定时器引用
let timer = null;
// 点击按钮时触发的函数
const handleClick = () => {
  if (disabled.value) return; // 如果按钮已禁用，则不执行任何操作
  // 禁用按钮
  disabled.value = true;
  buttonText.value = `${time.value}秒后重新获取`;
  // 开启定时器
  timer = setInterval(() => {
    if (time.value > 0) {
      time.value--; // 倒计时递减
      console.log(time.value);
    } else {
      // 清除定时器和复原按钮
      clearInterval(timer);
      disabled.value = false;
      buttonText.value = "获取验证码";
    }
  }, 1000);
};
</script>

<style scoped>
.title {
  height: 50px;
  width: 680px;
  /* position: absolute; */
  border-bottom: 2px solid #c9c8c8;
  margin-left: 50px;
  font-size: 24px;
  padding-top: 20px;
}
.content {
  height: 456px;
  width: 597px;
  margin-left: 50px;
  display: flex;
}
.word {
  width: 64px;
  height: 20px;
  font-size: 16px;
  text-align: justify;
  margin: 20px 40px 5px 0;
}
.input {
  width: 320px;
  height: 31px;
  border: 2px solid #c9c8c8;
  margin-bottom: 15px;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 16px;
}
.captcha {
  position: relative;
}
.fetch {
  position: absolute;
  right: 15px;
  top: 35px;
  font-size: 12px;
  color: #00c800;
}
.buttons {
  display: flex;
  margin-top: 40px;
}
.button1 {
  width: 87px;
  height: 30px;
  background-color: #ffe4e4;
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-left: 40px;
}
.avatarpart {
  width: 200px;
  margin: 20px auto auto 130px;
}
.avatar {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background-color: #ffe4e4;
  margin: 0 auto;
  margin-bottom: 20px;
}
.button2 {
  width: 101px;
  height: 30px;
  border: 2px solid #c9c8c8;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-left: 11px;
  margin-bottom: 20px;
}
.word2 {
  font-size: 16px;
  display: flex;
  width: 160px;
  margin-left: -8px;
}
#span {
  width: 67px;
  height: 23px;
  background-color: #d8ecff;
  border: 2px solid #1e90ff;
  border-radius: 5px;
  font-size: 14px;
  color: #1e90ff;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  border: none;
  background-color: transparent;
  font-size: 12px;
  color: #00c800;
}
</style>
