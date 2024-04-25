import request from "../request";

function getAllAttractions() {
  return request({
    url: "/attraction/getAllAttractions",
    method: "get",
  });
}

export { getAllAttractions };
