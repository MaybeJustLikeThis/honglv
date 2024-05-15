<template>
  <div class="root">
    <BreadCrumbs></BreadCrumbs>
    <div class="article">
      <div class="uploading">
        <div class="titleBox">
          <div class="point"></div>
          上传
        </div>
        <div class="horizontalLine"></div>
        <div class="detailBox">
          <div class="title">基本信息</div>
          <div class="detailContainer">
            <div class="detailContainerItem">
              <p><span class="requiredStar">*</span>请选择文章类型:</p>
              <div class="input">
                <div class="spotType">
                  <router-link
                    v-for="item in items"
                    :to="item.to"
                    :class="{
                      spotTypeItem: true,
                      spotTypeItemSelected: selectedItem === item.id,
                    }"
                    @click="selectItem(item.id)"
                    :key="item.id"
                  >
                    {{ item.label }}
                  </router-link>
                </div>
              </div>
            </div>
            <div class="detailContainerItem">
              <p><span class="requiredStar">*</span>地址信息:</p>
              <AddressSelectArea></AddressSelectArea>
            </div>
            <div class="detailContainerItem">
              <p><span class="requiredStar">*</span>详细地址:</p>
              <div class="input">
                <ComInput
                  placeholder="请输入景点的详细地址信息，
如道路、门牌号、楼栋号等信息"
                >
                </ComInput>
              </div>
            </div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import BreadCrumbs from "@/components/Blog/BlogComponents/BreadCrumbs.vue";
import BreadCrumbs from "@/libs/BreadCrumb/BreadCrumb.vue";
import AddressSelectArea from "@/components/Blog/BlogComponents/AddressSelectArea.vue";
import ComInput from "@/components/Blog/BlogComponents/ComInput.vue";
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const items = [
  { id: 1, label: "景点", to: "/honglv/blog/spot" },
  { id: 2, label: "文创", to: "/honglv/blog/CulturalArt" },
  { id: 3, label: "酒店", to: "/honglv/blog/hotel" },
  // { id: 4, label: "美食", to: "/honglv/blog/food" },
  { id: 5, label: "路线", to: "/honglv/blog/path" },
  { id: 6, label: "攻略", to: "/honglv/blog/strategy" },
];
const selectedItem = ref(1);

const selectItem = (itemId) => {
  selectedItem.value = itemId;
};
</script>

<style scoped>
@import "@/style/Blog.css";
</style>
