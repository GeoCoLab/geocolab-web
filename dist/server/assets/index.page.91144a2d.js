"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var vue = require("vue");
var pluginVue_exportHelper = require("./plugin-vue_export-helper.db096aab.js");
var index_page_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 class="page-title">About</h2><p>GeoCoLab is responding to the NERC Digital Technologies Digital Sprint.</p><div> Advisory group: <ul><li>Dr Rebecca Williams, University of Hull</li><li>Dr Munira Raji</li><li>Dr Clare Bond, University of Aberdeen</li><li>Ginger Butcher, Natural History Museum</li><li>Dr Elliot Carter, Trinity College Dublin,</li><li>Edd Lewis, British Geological Survey</li><li>Dr Sian Davies-Vollum, University of Derby</li><li>Dr Annie Ocklefield, University of Brighton</li><li>Dr Brian Thomas, Newcastle University</li></ul></div><p>To contact us, please email: <a href="mailto:geocolab.app@gmail.com">geocolab.app@gmail.com</a></p><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var index_page = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports["default"] = index_page;
