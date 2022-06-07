"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var router = require("vite-plugin-ssr/client/router");
var CountrySelect = require("./CountrySelect.b16687ec.js");
var auth = require("./auth.ec494a8b.js");
require("pinia/dist/pinia");
require("./api.3858e324.js");
require("axios");
require("moment");
const _sfc_main = {
  name: "register.page",
  __ssrInlineRender: true,
  setup(__props) {
    CountrySelect.useEnumStore();
    const auth$1 = auth.useAuthStore();
    let errors = vue.ref([]);
    const formData = vue.ref({});
    function doNothing() {
    }
    async function submitHandler() {
      return auth$1.register(formData).then((r) => {
        if (r.status >= 400) {
          errors.value = r.data.errors;
          return false;
        } else {
          return true;
        }
      });
    }
    async function registerResearcher() {
      formData.value["role"] = "researcher";
      submitHandler().then((success) => {
        if (success) {
          router.navigate("/researcher/register");
        }
      });
    }
    async function registerManager() {
      formData.value["role"] = "manager";
      submitHandler().then((success) => {
        if (success) {
          router.navigate("/manager/register");
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = vue.resolveComponent("FormKit");
      const _component_help = vue.resolveComponent("help");
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_FormKit, {
        type: "form",
        id: "register",
        modelValue: formData.value,
        "onUpdate:modelValue": ($event) => formData.value = $event,
        "form-class": "mx-auto short-form",
        onSubmit: doNothing,
        errors: vue.unref(errors),
        actions: false
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
              type: "password",
              name: "password_confirm",
              label: "Confirm Password",
              validation: "required|confirm",
              "validation-label": "Password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_FormKit, {
              type: "text",
              name: "name",
              label: "Name",
              validation: "required"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(CountrySelect._sfc_main, {
              name: "country",
              label: "Country",
              modelValue: formData.value.country,
              "onUpdate:modelValue": ($event) => formData.value.country = $event
            }, null, _parent2, _scopeId));
            _push2(`<div class="form-row-custom"${_scopeId}><div class="form-row-inputs"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_FormKit, {
              type: "submit",
              onClick: registerManager
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Register as manager`);
                } else {
                  return [
                    vue.createTextVNode("Register as manager")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_FormKit, {
              type: "submit",
              onClick: registerResearcher
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Register as researcher`);
                } else {
                  return [
                    vue.createTextVNode("Register as researcher")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer.ssrRenderComponent(_component_help, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`If you&#39;re not sure, register as a researcher.`);
                } else {
                  return [
                    vue.createTextVNode("If you're not sure, register as a researcher.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
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
                type: "password",
                name: "password_confirm",
                label: "Confirm Password",
                validation: "required|confirm",
                "validation-label": "Password"
              }),
              vue.createVNode(_component_FormKit, {
                type: "text",
                name: "name",
                label: "Name",
                validation: "required"
              }),
              vue.createVNode(CountrySelect._sfc_main, {
                name: "country",
                label: "Country",
                modelValue: formData.value.country,
                "onUpdate:modelValue": ($event) => formData.value.country = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              vue.createVNode("div", { class: "form-row-custom" }, [
                vue.createVNode("div", { class: "form-row-inputs" }, [
                  vue.createVNode(_component_FormKit, {
                    type: "submit",
                    onClick: registerManager
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Register as manager")
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_FormKit, {
                    type: "submit",
                    onClick: registerResearcher
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Register as researcher")
                    ]),
                    _: 1
                  })
                ]),
                vue.createVNode(_component_help, null, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("If you're not sure, register as a researcher.")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-center mt-8">Already have an account? <a href="/user/login">Log in here</a>.</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/register.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
