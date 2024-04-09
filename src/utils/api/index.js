import request from "./request";

// e.g
function getLogin() {
  return request({
    url: "/login",
    method: "get",
  });
}
function postLogin(params) {
  return request({
    url: "/login",
    method: "post",
    data: params,
  });
}
export { getLogin, postLogin };
