"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./plugin-vue_export-helper.db096aab.js");
var index_page_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "index.page",
  __ssrInlineRender: true,
  props: ["summaries"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2 class="page-title" data-v-e34f38e8>Blog</h2><!--[-->`);
      serverRenderer.ssrRenderList(__props.summaries, (p) => {
        _push(`<div class="blog-summary" data-v-e34f38e8><h3 data-v-e34f38e8><a${serverRenderer.ssrRenderAttr("href", `/blog/${p.slug}`)} data-v-e34f38e8>${serverRenderer.ssrInterpolate(p.title)}</a></h3><small data-v-e34f38e8>${serverRenderer.ssrInterpolate(p.posted)}</small><p data-v-e34f38e8>${serverRenderer.ssrInterpolate(p.summary)}</p></div>`);
      });
      _push(`<!--]--><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var index_page = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["__scopeId", "data-v-e34f38e8"]]);
exports["default"] = index_page;
