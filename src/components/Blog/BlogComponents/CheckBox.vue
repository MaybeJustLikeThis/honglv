<template>
    <span class="readAgreement" @click="toggleCheck">
        <span :class="{ checkbox: true, checked: isChecked }">
            <span v-if="isChecked">&#10003;</span>
        </span>
    </span>
</template>

<script>
export default {
    data() {
        return {
            isChecked: false,
        };
    },
    methods: {
        toggleCheck() {
            this.isChecked = !this.isChecked;
        },
    },
};
</script>

<style scoped>
.readAgreement {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.checkbox {
    width: 15px;
    height: 15px;
    border: 2px solid #333;
    border-radius: 30%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.checked {
    background-color: #308133;
    /* 设置对勾的颜色 */
    border-color: #4caf50;
    /* 设置对勾的颜色 */
}

.checked span {
    color: #fff;
    /* 设置对勾的颜色 */
}
</style>
