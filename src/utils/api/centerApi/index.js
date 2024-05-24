import request from "../request";

function getInfo() {
  return request({
    url: "/user&admin/getUser&AdminInfo/{id}",
    method: "get",
  });
}

function changeInfo() {
  return request({
    url: "/user&admin/updateUser&AdminInfo",
    method: "get",
  });
}

function updatePassword() {
  return request({
    url: "/user&admin/updatePassword",
    method:"get"
  });
}

export { getInfo, changeInfo, updatePassword,};