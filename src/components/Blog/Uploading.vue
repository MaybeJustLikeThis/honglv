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
                            <p><span class="requiredStar">*</span>地址信息:</p>
                            <div class="input">
                                <Province></Province>
                                <Province></Province>
                                <Province></Province>
                                <Province></Province>

                            </div>
                        </div>
                        <div class="detailContainerItem">
                            <p><span class="requiredStar">*</span>详细地址:</p>
                            <div class="input">
                                <ComInput placeholder="请输入景点的详细地址信息，
如道路、门牌号、楼栋号等信息">
                                </ComInput>

                            </div>
                        </div>
                        <div class="detailContainerItem">
                            <p><span class="requiredStar">*</span>景区名称:</p>
                            <div class="input">
                                <ComInput placeholder="请输入景区名称"></ComInput>
                            </div>
                        </div>
                        <div class="detailContainerItem">
                            <p>咨询电话:</p>
                            <div class="input">
                                <ComInput placeholder="请输入景区咨询电话（选填)"></ComInput>
                            </div>
                        </div>
                        <div class="detailContainerItem">
                            <p>景区等级:</p>
                            <div class="input">
                                <ComInput placeholder="请输入景区等级（选填)"></ComInput>
                            </div>
                        </div>
                        <div class="detailContainerItem">
                            <p><span class="requiredStar">*</span>景点概述:</p>
                            <div class="input">
                                <ComInput placeholder="请输入景点的概述介绍" type="textarea" cols="100" rows="10"></ComInput>
                                <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
                            </div>
                        </div>
                        <div class="detailContainerItem">
                            <p><span class="requiredStar">*</span>请选择景点类型:</p>
                            <div class="input">
                                <div class="spotType">
                                    <div v-for="item in items" :key="item.id"
                                        :class="{ spotTypeItem: true, spotTypeItemSelected: selectedItem === item.id }"
                                        @click="selectItem(item.id)">
                                        {{ item.label }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BreadCrumbs from "@/components/Blog/BlogComponents/BreadCrumbs.vue";
import Province from "@/components/Blog/BlogComponents/Province.vue";
import ComInput from "@/components/Blog/BlogComponents/ComInput.vue";

import { ref } from 'vue';

const items = ref([
    { id: 1, label: '古老古交类' },
    { id: 2, label: '神秘古交类' },
    { id: 3, label: '英雄古交类' },
    { id: 4, label: '夜游古交类' },
]);

const selectedItem = ref(null);

const selectItem = (itemId) => {
    selectedItem.value = itemId;
};
</script>

<style scoped>
@import "@/style/Blog.css";
</style>
