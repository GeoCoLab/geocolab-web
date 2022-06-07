"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var router = require("vite-plugin-ssr/client/router");
var forms = require("./forms.30c9c377.js");
var auth = require("./auth.ec494a8b.js");
require("pinia/dist/pinia");
require("./api.3858e324.js");
require("axios");
const _sfc_main = {
  name: "register.page",
  __ssrInlineRender: true,
  setup(__props) {
    const auth$1 = auth.useAuthStore();
    const forms$1 = forms.useFormStore();
    let errorsEdi = vue.ref([]);
    const formDataEdi = vue.ref({});
    let errorsExtra = vue.ref([]);
    const formDataExtra = vue.ref({});
    const submitEdi = async () => {
      forms$1.submitForm("edi", formDataEdi.value).then((r) => {
        if (r.status >= 400) {
          errorsEdi.value = r.data.errors;
        } else {
          auth$1.loadUser();
        }
      });
    };
    const submitExtra = async () => {
      forms$1.submitForm("edi_extra", formDataExtra.value).then((r) => {
        if (r.status >= 400) {
          errorsExtra.value = r.data.errors;
        } else {
          router.navigate("/");
        }
      });
    };
    const ediTodo = vue.computed(() => {
      return auth$1.userData.todo.includes("edi");
    });
    const ediExtraTodo = vue.computed(() => {
      return auth$1.userData.todo.includes("edi_extra");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = vue.resolveComponent("FormKit");
      const _component_FormKitSchema = vue.resolveComponent("FormKitSchema");
      _push(`<!--[--><h2 class="page-title">Researcher registration</h2><p>GeoCoLab is designed to improve access to analytical facilities for minority and marginalised scientists. The following questions will be used to ensure that you meet one or more required criteria. The data collected here will additionally be used to evaluate and monitor use of the GeoCoLab app. Data used for this purpose will be anonymised and aggregated data may be shared with third parties (e.g. NERC as project funders) and in publications. Further details on how this data is collected, stored, used and shared is provided in the GeoCoLab terms and conditions.</p>`);
      if (!vue.unref(ediTodo) && !vue.unref(ediExtraTodo)) {
        _push(`<p class="text-red-500 font-bold text-xl text-center">`);
        if (vue.unref(auth$1).userData.role === "researcher") {
          _push(`<!--[--> You have already completed this step. <!--]-->`);
        } else {
          _push(`<!--[--> You do not need to complete this step. <!--]-->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(ediTodo)) {
        _push(serverRenderer.ssrRenderComponent(_component_FormKit, {
          type: "form",
          modelValue: formDataEdi.value,
          "onUpdate:modelValue": ($event) => formDataEdi.value = $event,
          "form-class": "mx-auto long-form",
          "submit-label": "Save & Continue",
          onSubmit: submitEdi,
          errors: vue.unref(errorsEdi)
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer.ssrRenderComponent(_component_FormKitSchema, {
                schema: vue.unref(forms$1).forms.edi
              }, null, _parent2, _scopeId));
            } else {
              return [
                vue.createVNode(_component_FormKitSchema, {
                  schema: vue.unref(forms$1).forms.edi
                }, null, 8, ["schema"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(ediExtraTodo) && !vue.unref(ediTodo)) {
        _push(`<!--[--><p>The following questions will help us understand our users and to evaluate and monitor use of GeoCoLab. Data used for this purpose will be anonymised and aggregated data may be shared with third parties (e.g. NERC as project funders) and in publications.</p>`);
        _push(serverRenderer.ssrRenderComponent(_component_FormKit, {
          type: "form",
          modelValue: formDataExtra.value,
          "onUpdate:modelValue": ($event) => formDataExtra.value = $event,
          "form-class": "mx-auto long-form",
          "submit-label": "Submit",
          onSubmit: submitExtra,
          errors: vue.unref(errorsExtra)
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer.ssrRenderComponent(_component_FormKitSchema, {
                schema: vue.unref(forms$1).forms.edi_extra
              }, null, _parent2, _scopeId));
            } else {
              return [
                vue.createVNode(_component_FormKitSchema, {
                  schema: vue.unref(forms$1).forms.edi_extra
                }, null, 8, ["schema"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/researcher/register.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
