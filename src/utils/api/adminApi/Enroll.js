import request from "../request";

function postEnroll(params) {
  return request({
    url: "/register",
    method: "post",
    data:params
  });
}

function postVerification(params) {
  return request({
    url: "/sendIdentifyCode/sentCode",
    method: "post",
    data:params
  });
}


function postLogin(params) {
  return request({
    url: "/user/loginByPassword",
    method: "post",
    data:params
  });
}

function postV(params) {
  return request({
    url: "/user/loginByCode",
    method: "post",
    data:params
  });
}





export  { postEnroll, postVerification,postLogin,postV }
