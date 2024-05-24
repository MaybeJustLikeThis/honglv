import request from "./request";
import cache from "./cache";

//封装缓存函数 有一定缺陷 这个hashmap的键值对可能会重复 导致 当请求参数不完全相同时，请求可能需要完全相同的参数才能返回相同的响应。
//然后就是缓存过期的和缓存大小的问时间题
function createCacheableRequest(config, ttl = 600000) {
  const { url, method, data, query } = config;
  const cacheKey = JSON.stringify({ url, method, data, query });

  const cachedItem = cache[cacheKey];
  if (cachedItem && Date.now() - cachedItem.timestamp < ttl) {
    return Promise.resolve(cachedItem.response);
  }

  return request(config)
    .then((response) => {
      cache[cacheKey] = { response, timestamp: Date.now() };
      return response;
    })
    .catch((err) => {
      console.error("Request failed", err);
    });
}

// e.g
function getLogin() {
  return createCacheableRequest({
    url: "/login",
    method: "get",
  });
}

function postLogin(params) {
  return createCacheableRequest({
    url: "/login",
    method: "post",
    data: params,
  });
}

function getHomeTOPRoute() {
  return createCacheableRequest({
    url: "/rounte/getTopRounte",
    method: "get",
  });
}

function getRouteInfo(args) {
  return createCacheableRequest({
    url: "/rounte/getHomeRounte",
    method: "get",
    query: args,
  });
}

function getTOPInformation() {
  return createCacheableRequest({
    url: "/news/getTopNews",
    method: "get",
  });
}

function getlike(id, like_type) {
  return request({
    url: "/like",
    method: "get",
    query: {
      id: id,
      status: like_type,
    },
  });
}

function getTopdestinations() {
  return createCacheableRequest({
    url: "/attraction/getTopAttraction",
    method: "get",
  });
}

export {
  getLogin,
  postLogin,
  getHomeTOPRoute,
  getRouteInfo,
  getTOPInformation,
  getlike,
  getTopdestinations,
};
