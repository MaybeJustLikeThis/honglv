<template>
  <span class="readAgreement" @click="toggleCheck()">
    <span :class="{ checkbox: true, checked: isChecked }">
      <span v-if="isChecked">&#10003;</span>
    </span>
  </span>
</template>

<script setup>
import { ref } from "vue";
let isChecked = ref(false);
function toggleCheck() {
  this.isChecked = !this.isChecked;
}
</script>

<style scoped>
.readAgreement {
  margin-left: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox {
  width: 15px;
  height: 15px;
  border: 2px solid #333;
  border-radius: 5%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checked {
  background-color: #0d7d10;
  /* 设置对勾的颜色 */
  border-color: #0d7d10;
  /* 设置对勾的颜色 */
}

.checked span {
  color: #fff;
  /* 设置对勾的颜色 */
}
</style>
