import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import eslintPlugin from "vite-plugin-eslint"; //导入包
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      "@": path.resolve(__dirname, "src"), //path.resolve(__dirname, 'src')的基础路径是当前模块文件所在的（__dirname所在的目录）绝对路径:
    },
  },
  // 配置ESLint插件
  plugins: [vue(),
    viteMockServe({
      mockPath: 'src/mock/',  // 设置模拟数据的存储文件夹
      localEnabled:true,  //设置是否启用本地mock文件
  })],
});
