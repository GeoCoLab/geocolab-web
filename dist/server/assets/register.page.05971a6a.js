"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var forms = require("./forms.30c9c377.js");
var auth = require("./auth.ec494a8b.js");
require("pinia/dist/pinia");
require("./api.3858e324.js");
require("axios");
require("vite-plugin-ssr/client/router");
const _sfc_main = {
  name: "register.page",
  __ssrInlineRender: true,
  setup(__props) {
    const auth$1 = auth.useAuthStore();
    const forms$1 = forms.useFormStore();
    let errors = vue.ref([]);
    const formData = vue.ref({});
    const submitInvite = async () => {
      forms$1.submitForm("edi", formData.value).then((r) => {
        if (r.status >= 400) {
          errors.value = r.data.errors;
        } else {
          auth$1.loadUser();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = vue.resolveComponent("FormKit");
      const _component_vue_feather = vue.resolveComponent("vue-feather");
      _push(`<!--[--><h2 class="page-title">Registration</h2><h3>I have an invite code</h3>`);
      _push(serverRenderer.ssrRenderComponent(_component_FormKit, {
        type: "form",
        modelValue: formData.value,
        "onUpdate:modelValue": ($event) => formData.value = $event,
        "form-class": "mx-auto short-form",
        onSubmit: submitInvite,
        errors: vue.unref(errors)
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_FormKit, {
              type: "text",
              name: "invite-code",
              label: "Invite code",
              help: "To join an existing organisation or facility, you'll need an invite code from another manager."
            }, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_FormKit, {
                type: "text",
                name: "invite-code",
                label: "Invite code",
                help: "To join an existing organisation or facility, you'll need an invite code from another manager."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3>I need to register a new organisation</h3><a href="/orgs/new" class="button my-4 left-0 right-0 mx-auto">New Org `);
      _push(serverRenderer.ssrRenderComponent(_component_vue_feather, {
        type: "arrow-right",
        class: "pl-2"
      }, null, _parent));
      _push(`</a><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manager/register.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
