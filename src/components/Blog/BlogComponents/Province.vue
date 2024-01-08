<template>
  <div>
    <select v-model="selectedProvince" id="province" @change="handleProvinceChange">
      <option value="" disabled selected>请选择省份</option>
      <option v-for="province in provinces" :key="province.id" :value="province.id">{{ province.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProvince: '', // 选择的省份
      provinces: [
        { id: 'beijing', name: '北京' },
        { id: 'tianjin', name: '天津' },
        { id: 'hebei', name: '河北' },
        { id: 'shanxi', name: '山西' },
        { id: 'neimenggu', name: '内蒙古' },
        { id: 'liaoning', name: '辽宁' },
        { id: 'jilin', name: '吉林' },
        { id: 'heilongjiang', name: '黑龙江' },
        { id: 'shanghai', name: '上海' },
        { id: 'jiangsu', name: '江苏' },
        { id: 'zhejiang', name: '浙江' },
        { id: 'anhui', name: '安徽' },
        { id: 'fujian', name: '福建' },
        { id: 'jiangxi', name: '江西' },
        { id: 'shandong', name: '山东' },
        { id: 'henan', name: '河南' },
        { id: 'hubei', name: '湖北' },
        { id: 'hunan', name: '湖南' },
        { id: 'guangdong', name: '广东' },
        { id: 'guangxi', name: '广西' },
        { id: 'hainan', name: '海南' },
        { id: 'chongqing', name: '重庆' },
        { id: 'sichuan', name: '四川' },
        { id: 'guizhou', name: '贵州' },
        { id: 'yunnan', name: '云南' },
        { id: 'xizang', name: '西藏' },
        { id: 'shanxi2', name: '陕西' },
        { id: 'gansu', name: '甘肃' },
        { id: 'qinghai', name: '青海' },
        { id: 'ningxia', name: '宁夏' },
        { id: 'xinjiang', name: '新疆' },
        { id: 'taiwan', name: '台湾' },
        { id: 'hongkong', name: '香港' },
        { id: 'macao', name: '澳门' },
      ],

    };
  },
  methods: {
    handleProvinceChange() {
      // 处理省份变化的逻辑
      console.log('Selected Province:', this.selectedProvince);
    },
  },
};
</script>

<style scoped>
/* 可以添加一些样式以美化组件 */
label {
  margin-right: 10px;
  font-weight: bold;
}

select {
  flex-shrink: 0;
  border: 2px solid #C9C8C8;
  background: #FFF;
  padding: 5px;
  font-size: 16px;
}
</style>
