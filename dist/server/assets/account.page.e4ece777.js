"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var auth = require("./auth.ec494a8b.js");
require("pinia/dist/pinia");
require("./api.3858e324.js");
require("axios");
require("vite-plugin-ssr/client/router");
const _sfc_main = {
  name: "account.page",
  __ssrInlineRender: true,
  setup(__props) {
    const auth$1 = auth.useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="flex items-center"><img${serverRenderer.ssrRenderAttr("src", vue.unref(auth$1).userData.gravatar + "&s=100")} class="mr-8 rounded-full border-2 border-secondary-light"><h2>Hello, ${serverRenderer.ssrInterpolate(vue.unref(auth$1).userData.name)}!</h2></div>`);
      if (vue.unref(auth$1).userData.todo.length > 0) {
        _push(`<div><p>Your account is ${serverRenderer.ssrInterpolate(vue.unref(auth$1).userData.completion)}% complete.</p><p>Tasks still left to complete:</p><ul><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(auth$1).userData.todo, (task) => {
          _push(`<li>${serverRenderer.ssrInterpolate(task)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/account.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
