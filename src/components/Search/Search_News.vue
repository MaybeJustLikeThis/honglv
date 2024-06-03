<template>
  <div class="box">
    <div class="box_top">
      <MyCarousel :propsImgs="imgs"></MyCarousel>
      <SearchBox class="search_box" :valueDefault="valDefault" />
    </div>
    <div class="box_bottom">
      <div class="box_left">
        <ShortTrip />
        <TopNews :tops="topRoutes" :valueDefault="valDefault" />
      </div>
      <div class="box_mainbody">
        <SortListsNav @navClick="getNavIndex" />
        <SortOneList
          v-for="(item, index) in allRoutes.value"
          :key="index"
          :currentItem="item"
          :currentIndex="index"
        />
        <el-pagination
          layout="prev,pager,next"
          v-model:current-page="currentPage"
          :page-count="totalPage"
          :page-size="9"
          background
          @update:current-page="changePage"
          class="my-pagination"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import MyCarousel from "./MyCarousel.vue";
import SearchBox from "./SearchBox.vue";
import ShortTrip from "./ShortTrip.vue";
import TopNews from "./TopNews.vue";
import SortListsNav from "./SortLists.vue";
import SortOneList from "./SortOneList_News.vue";
import { ref, reactive, computed } from "vue";
import { getAllNews } from "../../utils/api/SearchApi/index";
const valDefault = ref("咨询");
const totalPage = ref(1);
const currentPage = ref(1);
const dataLength = ref(9);
const topRoutes = ref([]);
const tempData = ref({});
const initialRoutes = ref([]);
const allRoutes = reactive({
  value: [],
});

// const allnames = reactive({
//   value:[]
// })

const imgs = ref([
  {
    url: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/1.jpg",
    desc: "“中国北方第一家文化巨擘”",
  },
  {
    url: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/2.jpg",
    desc: "中国首批重点文物保护单位",
  },
  {
    url: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/3.jpg",
    desc: "世界上最大的黄色瀑布",
  },
  {
    url: "https://yunding-ljt.oss-cn-beijing.aliyuncs.com/4.jpg",
    desc: "感受晋商文化的浓郁味道",
  },
]);

getAllNews(currentPage.value, 4).then((res) => {
  // console.log(res.data)
  topRoutes.value = res.data.records;
  // console.log(topRoutes.value,"top")
});

getAllNews(currentPage.value, 9).then((res) => {
  // console.log("res", res.data)
  dataLength.value = res.data.total;
  allRoutes.value = res.data.records;
  initialRoutes.value = JSON.parse(JSON.stringify(res.data.records));
  // allnames.value = res.data.records.name
  totalPage.value = computed(() => Math.ceil(dataLength.value / 9)).value;
});

const changePage = () => {
  // console.log('update')
  totalPage.value = computed(() => Math.ceil(dataLength.value / 9)).value;
  // console.log(currentPage)
  // console.log(props.scenicsProp.length)
};

const getNavIndex = (payload) => {
  if (payload === 0) {
    allRoutes.value = JSON.parse(JSON.stringify(initialRoutes.value));
    console.log("navindex", payload);
    console.log("allRoutes", allRoutes.value);
    // console.log("initial",initialRoutes.value)
  } else if (payload === 1) {
    for (let i = 0; i < allRoutes.value.length - 1; i++) {
      for (let j = 0; j < allRoutes.value.length - 1 - i; j++) {
        if (allRoutes.value[j].id < allRoutes.value[j + 1].id) {
          tempData.value = allRoutes.value[j];
          allRoutes.value[j] = allRoutes.value[j + 1];
          allRoutes.value[j + 1] = tempData.value;
        }
      }
    }
    console.log("navindex", payload);
    console.log("allRoutes", allRoutes.value);
  } else if (payload === 2) {
    for (let i = 0; i < allRoutes.value.length - 1; i++) {
      for (let j = 0; j < allRoutes.value.length - 1 - i; j++) {
        if (allRoutes.value[j].title > allRoutes.value[j + 1].title) {
          tempData.value = allRoutes.value[j];
          allRoutes.value[j] = allRoutes.value[j + 1];
          allRoutes.value[j + 1] = tempData.value;
        }
      }
    }
    console.log("navindex", payload);
    console.log("allRoutes", allRoutes.value);
  } else if (payload === 3) {
    for (let i = 0; i < allRoutes.value.length - 1; i++) {
      for (let j = 0; j < allRoutes.value.length - 1 - i; j++) {
        if (allRoutes.value[j].createTime < allRoutes.value[j + 1].createTime) {
          tempData.value = allRoutes.value[j];
          allRoutes.value[j] = allRoutes.value[j + 1];
          allRoutes.value[j + 1] = tempData.value;
        }
      }
    }
    console.log("navindex", payload);
  } else {
    for (let i = 0; i < allRoutes.value.length - 1; i++) {
      for (let j = 0; j < allRoutes.value.length - 1 - i; j++) {
        if (allRoutes.value[j].title > allRoutes.value[j + 1].title) {
          tempData.value = allRoutes.value[j];
          allRoutes.value[j] = allRoutes.value[j + 1];
          allRoutes.value[j + 1] = tempData.value;
        }
      }
    }
    console.log("navindex", payload);
  }
  // return allRoutes.value
};
</script>

<style scoped>
.search_box {
  position: absolute;
  top: 556px;
  transform: translateX(-50%);
  left: 50%;
}

.box_bottom {
  /* background-color: pink; */
  /* height: 1600px; */
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.box_left {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.box_mainbody {
  position: relative;
}

.el-pagination {
  position: absolute;
  bottom: -80px;
  right: 0px;
}

:deep.el-pagination > ul > li.is-active {
  background-color: rgba(0, 200, 0, 1) !important;
  color: rgba(255, 255, 255, 1) !important;
  border: 0 solname rgba(201, 200, 200, 1) !important;
  font-family: Abel;
  /* font-size: 8px; */
  font-weight: 400;
  line-height: 10.2px;
  /* text-align: left; */
}

:deep.el-pagination > ul > li {
  background-color: rgba(255, 255, 255, 1) !important;
  color: rgba(51, 51, 51, 1) !important;
  border: 1px solname rgba(201, 200, 200, 1) !important;
  font-family: Abel;
  /* font-size: 8px; */
  font-weight: 400;
  line-height: 10.2px;
  /* text-align: left; */
}
</style>
