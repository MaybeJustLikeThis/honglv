<template>
  <div id="SecondaryMenu_container">
    <div class="secondary-menu-text">{{ message }}</div>
    <div style="color: #c9c8c8">></div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  message: String,
});

let message = ref(props.message ? props.message : "默认");
</script>

<style scoped>
#SecondaryMenu_container {
  position: relative;
  height: 50%;
  width: 100%;
  background-color: #ffffff;
  border: 0.4px solid #c9c8c8;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  color: #666666;
}
</style>
