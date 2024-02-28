<template>
  <div>
    <input
      v-if="!elementType"
      class="custom-input"
      :value="props.inputValue"
      :placeholder="placeholder"
    />
    <textarea
      v-if="elementType"
      :value="props.inputValue"
      :placeholder="placeholder"
      :cols="cols"
      :rows="rows"
    ></textarea>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
const elementType = computed(() => (props.type === "textarea" ? true : false));

const props = defineProps([
  "inputValue",
  "placeholder",
  "type",
  "cols",
  "rows",
]);
// 根据 type 动态设置元素类型
</script>

<style scoped>
.custom-input {
  /* 可以根据需要添加样式 */
  width: 450px;
  height: 40px;
  flex-shrink: 0;
  border: 2px solid #c9c8c8;
  background: #fff;
}

.custom-input:focus {
  outline: none;
  box-shadow: none;
}
</style>
