<template>
  <div class="mask"></div>
  <div class="closeBox">
    <div class="close" @click="cancelClick()">
      <img
        class="close"
        src="https://s3-alpha-sig.figma.com/img/f154/f7fc/0921afd59f639be76b0824902885bf18?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RiFTQ0Pif-I~UJXP8LKpv027AtcXcrCB~38P8erHRp0SHk8-IlhZmeFM5r2EeS4S1F9kTEgCpNMDIbkLROZa0AWznO1goQaBpBNSp0JB05xQjNjnE-TqyPI8zALAQGX2vS6aGvAlktTzTXmrUzhgGzzCBYyx37n7herFUFrsCUMgOOFBarYOO3OIEevSE01i6SAJ2WxJxWBMIJt4tEpjMy50b40VD45ftHKxOOpnjE7Afrpu9cTeqSmn6dbjAmiUxlAptsFq4tCHYoNmBDY5ZACoV~LHe5KJdV8WdSp57snpPdb6p~gYF~-OmW7A~xC5ANok1sy1oAeRw4HmhRcKXA__"
        alt=""
      />
    </div>
    <p class="tip">确定注销该账号？</p>
    <div class="sure" @click="sureClick()">确定</div>
    <div class="cancel" @click="cancelClick()">取消</div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const sureClick = () => {
  router.push("/honglv/home");
};
const cancelClick = () => {
  router.back();
};
</script>

<style scoped>
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 200;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
}
.closeBox {
  width: 330px;
  height: 215px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 8px;
  z-index: 300;
  position: relative;
  top: 100px;
  left: 15%;
  /* margin: 0 auto; */
}
.close {
  width: 20px;
  height: 21.75px;
  margin: 5px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
}
.tip {
  font-size: 20px;
  position: absolute;
  top: 25px;
  left: 90px;
}
.sure,
.cancel {
  width: 80px;
  height: 30px;
  font-size: 16px;
  text-align: center;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  bottom: 50px;
}
.sure {
  background-color: #ffe4e4;
  color: black;
  position: absolute;
  left: 60px;
  border-color: #ffe4e4;
  border-style: solid;
}
.cancel {
  background-color: #f8f8f8;
  color: #666666;
  position: absolute;
  right: 60px;
  border-color: #666666;
  border-style: solid;
}
</style>
