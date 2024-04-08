<template>
  <div class="bottom">
    <Bottom_line></Bottom_line>
    <div class="copyright">
      <div class="copyright_first">
        Copyright © 2023红旅旅行网 All Right Reserved·
        <p>晋ICP备10086253号·3</p>
        <img
          class="copyright_logo"
          src="../../../public/home/盾牌保险认证_o.png"
          alt=""
        />
      </div>
      <div class="copyright_second">营业执照·网络文化经营许可证</div>
    </div>
  </div>
</template>

<script>
import Bottom_line from "./Bottom_line.vue";

export default {
  components: {
    Bottom_line,
  },
};
</script>

<style scoped>
.bottom {
  position: relative;
  display: block;
  top: 150px;
  background-color: #d40000;
  width: 100%;
  height: 300px;
  min-width: 1200px;
}
.copyright {
  /* background-color: tomato; */
  position: relative;
  top: 44%;
  left: 19%;
  width: 62.5%;
  height: 20%;
  border-top-width: 3px;
  border-top-color: white;
  border-top-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: white;
  border-bottom-style: solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.copyright_first {
  position: relative;
  top: 35%;
  width: 60%;
  height: 65%;
  color: white;
  font-size: 12px;
  line-height: 200%;
  display: flex;
}
.copyright_first p {
  margin: 0;
  position: relative;
}
.copyright_logo {
  position: relative;
  top: 2px;
  height: 65%;
  width: 5%;
}
.copyright_second {
  position: relative;
  top: 35%;
  width: 19%;
  height: 65%;
  color: white;
  font-size: 12px;
  line-height: 200%;
}
</style>
