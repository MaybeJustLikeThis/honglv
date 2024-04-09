/****   request.js   ****/
// 导入axios
import axios from "axios";

//1. 创建新的axios实例，
const service = axios.create({
  // 公共接口
  baseURL:
    process.env.NODE_ENV == "production" ? "/" : "http://localhost:5173/",
  // 超时时间 单位是ms，这里设置了3s的超时时间
  timeout: 3 * 1000,
  responseType: "json",
});
//2.请求拦截器
service.interceptors.request.use(
  (config) => {
    //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json", //配置请求头
    };

    const token = localStorage.getItem("token"); //这里取token之前，你肯定需要先拿到token,存一下
    if (token) {
      //config.params = {'token':token} //如果要求携带在参数中
      config.headers.token = token; //如果要求携带在请求头中
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

//3.  响应拦截器
service.interceptors.response.use(
  (res) => {
    const status = res.data.code || 200;
    const message = res.data.message || "未知错误";

    if (status == 333) {
      //后续路由跳转
    }
    if (status !== 200) {
      alert("错误" + status + "  " + message);
    }
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default service;
