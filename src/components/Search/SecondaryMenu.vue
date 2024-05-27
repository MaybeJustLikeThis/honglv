<template>
  <div id="SecondaryMenu_container">
    <div class="secondary-menu-text" @click="check">{{ message }}</div>
    <div :class="[ischeck ? 'show_des' : 'unshow_des']">
      <el-cascader
        v-model="value"
        :options="options"
        :props_cas="props_cas"
        @change="handleChange"
        clearable
        filterable
      />
    </div>

    <div style="color: #c9c8c8" :class="[!ischeck ? 'show_des' : 'unshow_des']">
      >
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import data from "@/store/Blog/store.js";

// let data_f = Array.from(data);

const props = defineProps({
  message: String,
});

let message = ref(props.message ? props.message : "默认");
let ischeck = ref(true);

const value = ref([]);

const props_cas = {
  expandTrigger: "hover",
};

const handleChange = (value) => {
  console.log(value);
};
function check() {
  ischeck.value = !ischeck.value;
}
const options = [
  {
    value: "guide",
    label: "山西省",
    children: [
      {
        value: "disciplines",
        label: "太原市",
        children: [
          {
            value: "consistency",
            label: "古交县",
          },
          {
            value: "feedback",
            label: "清徐县",
          },
          {
            value: "efficiency",
            label: "阳曲县",
          },
          {
            value: "controllability",
            label: "娄烦县",
          },
        ],
      },
      {
        value: "navigation",
        label: "晋中市",
        children: [
          {
            value: "side nav",
            label: "榆次区",
          },
          {
            value: "top nav",
            label: "太谷区",
          },
        ],
      },
    ],
  },
  // {
  //   value: "component",
  //   label: "Component",
  //   children: [
  //     {
  //       value: "basic",
  //       label: "Basic",
  //       children: [
  //         {
  //           value: "layout",
  //           label: "Layout",
  //         },
  //         {
  //           value: "color",
  //           label: "Color",
  //         },
  //         {
  //           value: "typography",
  //           label: "Typography",
  //         },
  //         {
  //           value: "icon",
  //           label: "Icon",
  //         },
  //         {
  //           value: "button",
  //           label: "Button",
  //         },
  //       ],
  //     },
  //     {
  //       value: "form",
  //       label: "Form",
  //       children: [
  //         {
  //           value: "radio",
  //           label: "Radio",
  //         },
  //         {
  //           value: "checkbox",
  //           label: "Checkbox",
  //         },
  //         {
  //           value: "input",
  //           label: "Input",
  //         },
  //         {
  //           value: "input-number",
  //           label: "InputNumber",
  //         },
  //         {
  //           value: "select",
  //           label: "Select",
  //         },
  //         {
  //           value: "cascader",
  //           label: "Cascader",
  //         },
  //         {
  //           value: "switch",
  //           label: "Switch",
  //         },
  //         {
  //           value: "slider",
  //           label: "Slider",
  //         },
  //         {
  //           value: "time-picker",
  //           label: "TimePicker",
  //         },
  //         {
  //           value: "date-picker",
  //           label: "DatePicker",
  //         },
  //         {
  //           value: "datetime-picker",
  //           label: "DateTimePicker",
  //         },
  //         {
  //           value: "upload",
  //           label: "Upload",
  //         },
  //         {
  //           value: "rate",
  //           label: "Rate",
  //         },
  //         {
  //           value: "form",
  //           label: "Form",
  //         },
  //       ],
  //     },
  //     {
  //       value: "data",
  //       label: "Data",
  //       children: [
  //         {
  //           value: "table",
  //           label: "Table",
  //         },
  //         {
  //           value: "tag",
  //           label: "Tag",
  //         },
  //         {
  //           value: "progress",
  //           label: "Progress",
  //         },
  //         {
  //           value: "tree",
  //           label: "Tree",
  //         },
  //         {
  //           value: "pagination",
  //           label: "Pagination",
  //         },
  //         {
  //           value: "badge",
  //           label: "Badge",
  //         },
  //       ],
  //     },
  //     {
  //       value: "notice",
  //       label: "Notice",
  //       children: [
  //         {
  //           value: "alert",
  //           label: "Alert",
  //         },
  //         {
  //           value: "loading",
  //           label: "Loading",
  //         },
  //         {
  //           value: "message",
  //           label: "Message",
  //         },
  //         {
  //           value: "message-box",
  //           label: "MessageBox",
  //         },
  //         {
  //           value: "notification",
  //           label: "Notification",
  //         },
  //       ],
  //     },
  //     {
  //       value: "navigation",
  //       label: "Navigation",
  //       children: [
  //         {
  //           value: "menu",
  //           label: "Menu",
  //         },
  //         {
  //           value: "tabs",
  //           label: "Tabs",
  //         },
  //         {
  //           value: "breadcrumb",
  //           label: "Breadcrumb",
  //         },
  //         {
  //           value: "dropdown",
  //           label: "Dropdown",
  //         },
  //         {
  //           value: "steps",
  //           label: "Steps",
  //         },
  //       ],
  //     },
  //     {
  //       value: "others",
  //       label: "Others",
  //       children: [
  //         {
  //           value: "dialog",
  //           label: "Dialog",
  //         },
  //         {
  //           value: "tooltip",
  //           label: "Tooltip",
  //         },
  //         {
  //           value: "popover",
  //           label: "Popover",
  //         },
  //         {
  //           value: "card",
  //           label: "Card",
  //         },
  //         {
  //           value: "carousel",
  //           label: "Carousel",
  //         },
  //         {
  //           value: "collapse",
  //           label: "Collapse",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   value: "resource",
  //   label: "Resource",
  //   children: [
  //     {
  //       value: "axure",
  //       label: "Axure Components",
  //     },
  //     {
  //       value: "sketch",
  //       label: "Sketch Templates",
  //     },
  //     {
  //       value: "docs",
  //       label: "Design Documentation",
  //     },
  //   ],
  // },
];
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
.show_des {
  display: none;
  position: absolute;
  left: 300px;
  z-index: 1000;
}
.unshow_des {
  /* display: none; */
}
</style>
