"use strict";
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var pinia = require("pinia/dist/pinia");
var api = require("./api.3858e324.js");
var moment = require("moment");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var moment__default = /* @__PURE__ */ _interopDefaultLegacy(moment);
const expiredMinutes = 5;
function expired() {
  return moment__default["default"](moment__default["default"].now()).subtract(expiredMinutes + 1, "minutes");
}
function canUpdate(prev) {
  return moment__default["default"].duration(moment__default["default"]().diff(prev)).asMinutes() >= expiredMinutes;
}
function sortObjectValues(obj) {
  return Object.entries(obj).sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    } else if (a[1] > b[1]) {
      return 1;
    }
    return 0;
  }).reduce((result, x) => {
    result[x[0]] = x[1];
    return result;
  }, {});
}
const useEnumStore = pinia.defineStore("enums", {
  state: () => ({
    countries: {},
    currencies: {},
    lastCheck: {
      countries: expired(),
      currencies: expired()
    }
  }),
  getters: {},
  actions: {
    async init() {
      if (Object.keys(this.countries).length === 0 && canUpdate(this.lastCheck.countries)) {
        api.api.get("/enum/countries").then((r) => {
          this.countries = sortObjectValues(r.data);
          this.lastCheck.countries = moment__default["default"]();
        }).catch((e) => {
        });
      }
      if (Object.keys(this.currencies).length === 0 && canUpdate(this.lastCheck.currencies)) {
        api.api.get("/enum/currencies").then((r) => {
          this.currencies = sortObjectValues(r.data);
          this.lastCheck.currencies = moment__default["default"]();
        }).catch((e) => {
        });
      }
    }
  }
});
const _sfc_main = {
  name: "CountrySelect",
  __ssrInlineRender: true,
  props: ["modelValue", "name", "label"],
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const enums = useEnumStore();
    const value = vue.ref(null);
    function changeValue() {
      emit("update:modelValue", value.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = vue.resolveComponent("FormKit");
      _push(serverRenderer.ssrRenderComponent(_component_FormKit, vue.mergeProps({
        type: "select",
        name: __props.name,
        label: __props.label,
        "validation-label": "This information",
        options: vue.unref(enums).countries,
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        onChange: changeValue
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CountrySelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports._sfc_main = _sfc_main;
exports.useEnumStore = useEnumStore;
