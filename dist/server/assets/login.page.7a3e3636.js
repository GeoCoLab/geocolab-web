"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var router = require("vite-plugin-ssr/client/router");
var auth = require("./auth.ec494a8b.js");
require("pinia/dist/pinia");
require("./api.3858e324.js");
require("axios");
const _sfc_main = {
  name: "login.page",
  __ssrInlineRender: true,
  setup(__props) {
    const auth$1 = auth.useAuthStore();
    let errors = vue.ref([]);
    const formData = vue.ref({});
    const submitHandler = async () => {
      auth$1.login(formData).then((r) => {
        if (r.status >= 400) {
          errors.value = r.data.errors;
        } else {
          if (auth$1.userData.todo.includes("edi") || auth$1.userData.todo.includes("edi_extra")) {
            router.navigate("/researcher/register");
          } else {
            router.navigate("/");
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = vue.resolveComponent("FormKit");
      _push(`<!--[--><h2>Login</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_FormKit, {
        type: "form",
        modelValue: formData.value,
        "onUpdate:modelValue": ($event) => formData.value = $event,
        "form-class": "mx-auto short-form",
        "submit-label": "Login",
        onSubmit: submitHandler,
        errors: vue.unref(errors)
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_FormKit, {
              type: "text",
              name: "email",
              label: "Email",
              validation: "required"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_FormKit, {
              type: "password",
              name: "password",
              label: "Password",
              validation: "required"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_FormKit, {
              type: "checkbox",
              name: "remember",
              label: "Remember me"
            }, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_FormKit, {
                type: "text",
                name: "email",
                label: "Email",
                validation: "required"
              }),
              vue.createVNode(_component_FormKit, {
                type: "password",
                name: "password",
                label: "Password",
                validation: "required"
              }),
              vue.createVNode(_component_FormKit, {
                type: "checkbox",
                name: "remember",
                label: "Remember me"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-center mt-8">Need an account? <a href="/user/register">Register here</a>.</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/login.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
