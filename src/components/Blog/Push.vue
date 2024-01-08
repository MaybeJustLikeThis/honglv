<template>
    <div class="root">
        <div class="article">
            <div class="push">
                <div class="titleBox">
                    <div class="point"></div>
                    推送
                </div>
                <div class="horizontalLine"></div>
                <div class="detailBox">
                    <div class="detailContainer">
                        <div class="detailContainerItem">
                            <p><span class="requiredStar">*</span>推送文章的标题:</p>
                            <div class="input">
                                <ComInput placeholder="请输入内容">
                                </ComInput>
                            </div>
                        </div>
                        <div class="detailContainerItem">
                            <p><span class="requiredStar">*</span>请输入推送文章:</p>
                            <div class="input"> </div>
                        </div>
                        <div class="detailContainerItem">
                            <p><span class="requiredStar">*</span>请设置封面:</p>
                            <div class="input"> </div>
                        </div>
                    </div>
                    <div class="standard">
                        <CheckBox></CheckBox>
                        我已阅读并接受《红侣文章上传协议》和《红侣专栏规范》
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CheckBox from "./BlogComponents/CheckBox.vue";
import ComInput from "@/components/Blog/BlogComponents/ComInput.vue";

</script>

<style scoped>
@import "@/style/Blog.css";
</style>
