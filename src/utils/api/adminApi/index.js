import request from "../request";

function getAllAttractions() {
  return request({
    url: "/attraction/getAllAttractions",
    method: "get",
  });
}

function getAllCommodities() {
  return request({
    url: "/commodity/getAllCommodities",
    method: "get",
  });
}

function getAllHotel() {
  return request({
    url: "/hotel/getAllHotel",
    method:"get"
  });
}

function getAllFoods() {  
  return request({
    url: "/food/getAllFoods",
    method: "get"
  });
}

function getAllRountes() {
  return request({
    url: "/rounte/getAllRountes",
    method: "get"
  });
}

export { getAllAttractions, getAllCommodities, getAllHotel, getAllFoods,getAllRountes };
