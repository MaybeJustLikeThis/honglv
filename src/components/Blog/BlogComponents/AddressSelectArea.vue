<template>
  <div class="input">
    <AddressSelect
      :address="province"
      id="province"
      @handleChange="handleChange"
    ></AddressSelect>
    <AddressSelect
      :address="city"
      id="city"
      @handleChange="handleChange"
    ></AddressSelect>
    <AddressSelect
      :address="county"
      id="county"
      @handleChange="handleChange"
    ></AddressSelect>
    <AddressSelect
      :address="street"
      id="street"
      @handleChange="handleChange"
    ></AddressSelect>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddressSelect from "./AddressSelect.vue";
import addressData from "@/store/Blog/store.js";

const province = Object.keys(addressData);

let provinceSelected = "";
let citySelected = "";
let countySelected = "";

let city = ref("");
let county = ref("");
let street = ref("");

function handleChange(selected, id) {
  console.log("selected", selected);
  console.log("id", id);
  if (id == "province") {
    provinceSelected = addressData[selected];
    city.value = Object.keys(provinceSelected);
  } else if (id == "city") {
    citySelected = provinceSelected[selected];
    county.value = Object.keys(citySelected);
  } else if (id == "county") {
    countySelected = citySelected[selected];
    street.value = Object.values(countySelected);
  }
}
</script>

<style scoped></style>
