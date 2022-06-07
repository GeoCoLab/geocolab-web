"use strict";
var axios = require("axios");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios);
let API_HOST;
try {
  API_HOST = "http://10.0.12.12";
} catch (e) {
  API_HOST = "http://10.0.12.12";
}
const BASE_URL = API_HOST + "/api";
const api = axios__default["default"].create({
  baseURL: BASE_URL,
  timeout: 2e4,
  headers: {
    "Content-Type": "application/json"
  },
  xsrfCookieName: "csrf_access_token",
  xsrfHeaderName: "X-CSRF-TOKEN"
});
async function post(endpoint, formData) {
  return api.get("/csrf").then(() => api.post(endpoint, formData));
}
api.interceptors.response.use(function(response) {
  return response;
}, async function(error) {
  let originalRequest = error.config;
  if (error.response.data.msg === "Token has expired") {
    try {
      await api.post("/refresh", {}, { xsrfCookieName: "csrf_refresh_token" });
      return api(originalRequest);
    } catch (e) {
    }
  }
  return Promise.reject(error);
});
exports.api = api;
exports.post = post;
