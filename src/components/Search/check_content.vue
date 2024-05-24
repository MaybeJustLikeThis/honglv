<template>
  <div id="SecondaryMenu_container">
    <div class="secondary-menu-text" @click="show">{{ message }}</div>
    <div v-show="ischeck" class="show_check">
      <div>
        <ul v-for="item in all_species" :key="item.id" class="hot">
          <li>
            <router-link :to="item.to" style="cursor: pointer; color: red">
              <span>{{ item.id }}</span
              >&nbsp; {{ item.name }}
              <span class="intro"> {{ item.intro }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div style="color: #c9c8c8">></div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import data from "@/store/Blog/store.js";

const props = defineProps({
  message: String,
});

const all_species = ref([
  {
    id: 1,
    name: "美食",
    intro: "味蕾的狂欢，尽在山西美食",
    to: "Search/Foods",
  },
  {
    id: 2,
    name: "酒店",
    intro: "品质精心打造，只为万家需要",
    to: "search/hotel",
  },
  {
    id: 3,
    name: "景点",
    intro: "古今交汇，魅力山西",
    to: "search/attractions",
  },
  {
    id: 4,
    name: "文创",
    intro: "古风古韵，匠心之作",
    to: "Search/Commodities",
  },
  {
    id: 5,
    name: "路线",
    intro: "走遍山西，听风赏雨看历史",
    to: "search/routes",
  },
  {
    id: 6,
    name: "攻略",
    intro: "探索历史脉络，感受千年闻名的震撼！",
    to: "search/strategies",
  },
]);
let message = ref(props.message ? props.message : "默认");
let ischeck = ref(false);

const show = () => {
  ischeck.value = !ischeck.value;
};
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
.secondary-menu-text {
  cursor: pointer;
}
.show_check {
  position: absolute;
  background-color: #ffffff;
  width: 80%;
  height: 300px;
  left: 100%;
  top: 0px;
  z-index: 1000;
  border: 2px solid #c9c8c8;
}
.hot > li:nth-child(-n + 3) {
  color: red;
}
.hot {
  position: relative;
  top: -10px;
  left: -20px;
  list-style-type: none;
}
.hot > li span:first-child {
  color: #d40000;
  font-size: 26px;
  font-style: italic;
}
.intro {
  color: #666666;
  font-size: 12px;
}
</style>
