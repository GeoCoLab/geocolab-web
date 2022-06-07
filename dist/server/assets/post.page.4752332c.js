"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
const _sfc_main = {
  name: "post.page",
  __ssrInlineRender: true,
  props: ["post"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2 class="page-title">${serverRenderer.ssrInterpolate(__props.post.title)}</h2><div><a${serverRenderer.ssrRenderAttr("href", `/blog?author=${__props.post.author.id}`)}>${serverRenderer.ssrInterpolate(__props.post.author.name)}</a></div><small>${serverRenderer.ssrInterpolate(__props.post.posted)}</small><div>${serverRenderer.ssrInterpolate(__props.post.body)}</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/post/post.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
