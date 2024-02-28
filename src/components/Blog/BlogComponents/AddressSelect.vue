<template>
  <div>
    <select :id="id" @change="handleChange($event)">
      <option value="" disabled selected>请选择{{ addressName[id] }}</option>
      <option v-for="item in address" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps(["address", "id"]);
const emit = defineEmits(["alertSome"]);
const addressName = {
  province: "省份",
  city: "市",
  county: "区/县",
  street: "街道",
};
function handleChange(event) {
  console.log(event.target.value);
  emit("handleChange", event.target.value, props.id);
}
</script>

<style scoped>
/* 可以添加一些样式以美化组件 */
label {
  margin-right: 10px;
  font-weight: bold;
}

select {
  flex-shrink: 0;
  border: 2px solid #c9c8c8;
  background: #fff;
  padding: 5px;
  font-size: 16px;
}
</style>
