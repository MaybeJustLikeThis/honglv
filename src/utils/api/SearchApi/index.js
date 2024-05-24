import request from "../request";

function getTopRounte() {
  return request({
    url: "/rounte/getTopRounte",
    method: "get",
  });
}

function getAllRountes(currentPage,currentPageSize) {
  return request({
    url: "/rounte/getAllRountes",
    method: "get",
    params: {
      page: currentPage,
      pageSize: currentPageSize
    }
  });
}

function getTopAttraction() {
    return request({
        url: "/attraction/getTopAttraction",
        method: "get"
    });
}

function getAllAttractions(currentPage, currentPageSize) {
  return request({
    url: "/attraction/getAllAttractions",
    method: "get",
    params: {
      page: currentPage,
      pageSize: currentPageSize,
    },
  });
}

function getTopNews() {
  return request({
    url: "/news/getTopNews",
    method: "get",
  });
}

function getAllNews(currentPage, currentPageSize) {
  return request({
    url: "/news/getAllNews",
    method: "get",
    params: {
      page: currentPage,
      pageSize: currentPageSize,
    },
  });
}

function getTopStrategy() {
  return request({
    url: "/strategy/getTopStrategy",
    method: "get",
  });
}

function getAllStrategies(currentPage, currentPageSize) {
  return request({
    url: "/strategy/getAllStrategies",
    method: "get",
    params: {
      page: currentPage,
      pageSize: currentPageSize,
    },
  });
}

function getAllCommodities(currentPage, currentPageSize) {
  return request({
    url: "/commodity/getAllCommodities",
    method: "get",
    params: {
      page: currentPage,
      pageSize: currentPageSize,
    },
  });
}

function getAllFoods(currentPage, currentPageSize) {
  return request({
    url: "/food/getAllFoods",
    method: "get",
    params: {
      page: currentPage,
      pageSize: currentPageSize,
    },
  });
}

export {
  getTopRounte,
  getAllRountes,
  getTopAttraction,
  getAllAttractions,
  getTopNews,
  getAllNews,
  getTopStrategy,
  getAllStrategies,
  getAllCommodities,
  getAllFoods,
};
