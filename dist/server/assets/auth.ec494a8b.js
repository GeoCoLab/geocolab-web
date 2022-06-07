"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var pinia = require("pinia/dist/pinia");
var api = require("./api.3858e324.js");
var router = require("vite-plugin-ssr/client/router");
const emptyUser = {
  country: null,
  created: null,
  email: null,
  id: null,
  name: null,
  role: null,
  todo: [],
  gravatar: null,
  completion: 0,
  given_name: null,
  family_name: null,
  given_name_first: true
};
const useAuthStore = pinia.defineStore("auth", {
  state: () => ({
    userData: __spreadValues({}, emptyUser)
  }),
  getters: {
    loggedIn() {
      return this.userData.id !== null;
    }
  },
  actions: {
    async login(loginForm) {
      return api.post("/login", loginForm.value).then((r) => {
        this.userData = r.data;
        return r;
      }).catch((e) => {
        return e.response;
      });
    },
    async logout() {
      return api.api.post("/logout").then((r) => {
        this.userData = __spreadValues({}, emptyUser);
        router.navigate("/");
      });
    },
    async loadUser() {
      return api.api.get("/user").then((r) => {
        this.userData = r.data;
      }).catch((e) => {
      });
    },
    async register(registerForm) {
      return api.post("/register", registerForm.value).then((r) => {
        this.userData = r.data;
        return r;
      }).catch((e) => {
        return e.response;
      });
    }
  }
});
exports.useAuthStore = useAuthStore;
