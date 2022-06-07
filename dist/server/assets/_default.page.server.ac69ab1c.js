"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var serverRenderer$1 = require("@vue/server-renderer");
var vitePluginSsr = require("vite-plugin-ssr");
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var core = require("@vueuse/core");
var pluginVue_exportHelper = require("./plugin-vue_export-helper.db096aab.js");
var auth = require("./auth.ec494a8b.js");
var pinia$1 = require("pinia/dist/pinia");
var CountrySelect = require("./CountrySelect.b16687ec.js");
var forms = require("./forms.30c9c377.js");
var vue$1 = require("@formkit/vue");
var themes = require("@formkit/themes");
var VueFeather = require("vue-feather");
require("./api.3858e324.js");
require("axios");
require("vite-plugin-ssr/client/router");
require("moment");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var VueFeather__default = /* @__PURE__ */ _interopDefaultLegacy(VueFeather);
var logo = "/assets/logo.e0ada9ff.png";
const key = Symbol();
function usePageContext() {
  return vue.inject(key);
}
function setPageContext(app, pageContext) {
  app.provide(key, pageContext);
}
const _sfc_main$6 = {
  name: "Dropdown",
  __ssrInlineRender: true,
  props: ["show", "direction"],
  emits: ["toggle-dropdown"],
  setup(__props, { emit }) {
    const props = __props;
    const target = vue.ref(null);
    core.onClickOutside(target, (e) => {
      emit("toggle-dropdown", false);
    });
    const pageContext = usePageContext();
    vue.watch(pageContext, () => {
      emit("toggle-dropdown", false);
    });
    const directionsClasses = vue.computed(() => {
      switch (props.direction) {
        case "up":
          return ["bottom-full", "left-0"];
        case "left":
          return ["top-0", "right-full"];
        case "right":
          return ["top-0", "left-full"];
        default:
          return ["top-full", "left-0"];
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (props.show) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: ["absolute z-60 bg-gray-100 p-2 shadow shadow-gray-900 dropdown", vue.unref(directionsClasses)]
        }, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav/Dropdown.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var NavItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = {
  name: "NavItem",
  __ssrInlineRender: true,
  props: { path: String, label: String, dropdown: Array, direction: String },
  setup(__props) {
    const props = __props;
    const pageContext = usePageContext();
    const isActive = vue.computed(() => {
      return pageContext.urlPathname === props.path;
    });
    const dropdownId = props.path.toLowerCase().replace(/[^a-z\d]/g, "");
    const showDropdown = vue.ref(false);
    const target = vue.ref(null);
    core.onClickOutside(target, (e) => {
      showDropdown.value = false;
    });
    const toggleDropdown = core.useDebounceFn((state) => {
      if (!props.dropdown) {
        return;
      }
      showDropdown.value = state;
    }, 100);
    const arrow = vue.computed(() => {
      let suffix;
      switch (props.direction) {
        case "up":
          suffix = showDropdown.value ? "down" : "up";
          break;
        case "left":
          suffix = showDropdown.value ? "right" : "left";
          break;
        case "right":
          suffix = showDropdown.value ? "left" : "right";
          break;
        default:
          suffix = showDropdown.value ? "up" : "down";
          break;
      }
      return "chevron-" + suffix;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_vue_feather = vue.resolveComponent("vue-feather");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "target",
        ref: target,
        class: "relative w-full"
      }, _attrs))} data-v-db7ddbb4><a class="${serverRenderer.ssrRenderClass([[vue.unref(isActive) ? "nav-item--active" : "nav-item", props.dropdown ? "has-dropdown" : ""], "px-4 py-1 mx-1 grid justify-center items-center w-full"])}"${serverRenderer.ssrRenderAttr("href", props.path)}${serverRenderer.ssrRenderAttr("aria-expanded", showDropdown.value)}${serverRenderer.ssrRenderAttr("aria-controls", vue.unref(dropdownId))} data-v-db7ddbb4><span class="flex items-center" data-v-db7ddbb4>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(props.label)}`);
      }, _push, _parent);
      _push(`</span>`);
      if (props.dropdown) {
        _push(serverRenderer.ssrRenderComponent(_component_vue_feather, {
          type: vue.unref(arrow),
          size: "1em",
          onClick: ($event) => vue.unref(toggleDropdown)(!showDropdown.value)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
      if (props.dropdown) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$6, {
          id: vue.unref(dropdownId),
          show: showDropdown.value,
          onToggleDropdown: vue.unref(toggleDropdown),
          direction: props.direction
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer.ssrRenderComponent(_sfc_main$4, {
                links: props.dropdown,
                direction: "col"
              }, null, _parent2, _scopeId));
            } else {
              return [
                vue.createVNode(_sfc_main$4, {
                  links: props.dropdown,
                  direction: "col"
                }, null, 8, ["links"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav/NavItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var NavItem = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$5, [["__scopeId", "data-v-db7ddbb4"]]);
const _sfc_main$4 = {
  name: "NavBlock",
  __ssrInlineRender: true,
  props: ["links", "direction"],
  setup(__props) {
    const props = __props;
    const col = vue.computed(() => props.direction === "col");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["h-full w-full grid gap-2 items-center relative", vue.unref(col) ? "grid-flow-row" : "grid-flow-col"]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`<!--[-->`);
        serverRenderer.ssrRenderList(props.links, (l) => {
          _push(serverRenderer.ssrRenderComponent(NavItem, vue.mergeProps(l, {
            direction: vue.unref(col) ? "right" : "down"
          }), null, _parent));
        });
        _push(`<!--]-->`);
      }, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav/NavBlock.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  name: "Nav",
  __ssrInlineRender: true,
  setup(__props) {
    const auth$1 = auth.useAuthStore();
    const breakpoints = core.useBreakpoints(core.breakpointsTailwind);
    const isLarge = vue.ref(breakpoints.greater("lg"));
    const expandMenu = vue.ref(false);
    const defaultRoutes = [
      {
        path: "/",
        label: "Home"
      },
      {
        path: "/about",
        label: "About",
        dropdown: [
          {
            path: "/about/coc",
            label: "Code of Conduct"
          },
          {
            path: "/about/terms",
            label: "Terms & Conditions"
          }
        ]
      },
      {
        path: "/blog",
        label: "Blog"
      }
    ];
    const hiddenRoutes = [
      {
        path: "/admin",
        label: "Admin",
        access: ["admin"]
      },
      {
        path: "/researcher",
        label: "Researcher",
        access: ["researcher"],
        dropdown: [
          {
            path: "/applications",
            label: "Applications",
            dropdown: [
              {
                path: "/applications/new",
                label: "New"
              }
            ]
          }
        ]
      },
      {
        path: "/manager",
        label: "Manager",
        access: ["manager"],
        dropdown: [
          {
            path: "/orgs",
            label: "Organisations/Institutions",
            dropdown: [
              {
                path: "/orgs/new",
                label: "New"
              }
            ]
          },
          {
            path: "/facilities",
            label: "Facilities",
            dropdown: [
              {
                path: "/facilities/new",
                label: "New"
              }
            ]
          },
          {
            path: "/review",
            label: "Applications"
          }
        ]
      }
    ];
    function canAccess(roles) {
      if (auth$1.userData.role === "admin") {
        return true;
      } else {
        return roles.includes(auth$1.userData.role);
      }
    }
    const links = vue.computed(() => {
      let allowedLinks = hiddenRoutes.filter((r) => canAccess(r.access));
      return [...defaultRoutes, ...allowedLinks];
    });
    function toggleMenu(state) {
      expandMenu.value = state;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_vue_feather = vue.resolveComponent("vue-feather");
      _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "p-4 w-full col-span-3 grid items-center relative",
        id: "page-nav"
      }, _attrs))}><a href="/" id="nav-icon"><img${serverRenderer.ssrRenderAttr("src", vue.unref(logo))} class="w-10" alt="GeoCoLab"></a>`);
      if (!isLarge.value) {
        _push(serverRenderer.ssrRenderComponent(_component_vue_feather, {
          type: "menu",
          onClick: ($event) => expandMenu.value = !expandMenu.value,
          "aria-expanded": expandMenu.value,
          "aria-controls": "main-menu"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div id="nav-links">`);
      if (!isLarge.value) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$6, {
          show: expandMenu.value,
          id: "main-menu",
          onToggleDropdown: toggleMenu
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer.ssrRenderComponent(_sfc_main$4, {
                links: vue.unref(links),
                direction: "col"
              }, null, _parent2, _scopeId));
            } else {
              return [
                vue.createVNode(_sfc_main$4, {
                  links: vue.unref(links),
                  direction: "col"
                }, null, 8, ["links"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$4, {
          links: vue.unref(links),
          direction: "row"
        }, null, _parent));
      }
      _push(`</div><div id="nav-auth">`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$4, { direction: "row" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vue.unref(auth$1).loggedIn) {
              _push2(`<!--[-->`);
              _push2(serverRenderer.ssrRenderComponent(NavItem, { path: "/user/account" }, {
                default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="&lt;md:hidden"${_scopeId2}>Hi, ${serverRenderer.ssrInterpolate(vue.unref(auth$1).userData.given_name)}</span><img${serverRenderer.ssrRenderAttr("src", vue.unref(auth$1).userData.gravatar + "&s=30")} class="inline md:ml-4 rounded-full border-2 border-secondary-light"${_scopeId2}>`);
                  } else {
                    return [
                      vue.createVNode("span", { class: "<md:hidden" }, "Hi, " + vue.toDisplayString(vue.unref(auth$1).userData.given_name), 1),
                      vue.createVNode("img", {
                        src: vue.unref(auth$1).userData.gravatar + "&s=30",
                        class: "inline md:ml-4 rounded-full border-2 border-secondary-light"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(NavItem, {
                path: "#",
                label: "Logout",
                onClick: vue.unref(auth$1).logout
              }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!--[-->`);
              _push2(serverRenderer.ssrRenderComponent(NavItem, {
                path: "/user/login",
                label: "Login"
              }, null, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(NavItem, {
                path: "/user/register",
                label: "Register"
              }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            }
          } else {
            return [
              vue.unref(auth$1).loggedIn ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                vue.createVNode(NavItem, { path: "/user/account" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode("span", { class: "<md:hidden" }, "Hi, " + vue.toDisplayString(vue.unref(auth$1).userData.given_name), 1),
                    vue.createVNode("img", {
                      src: vue.unref(auth$1).userData.gravatar + "&s=30",
                      class: "inline md:ml-4 rounded-full border-2 border-secondary-light"
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                }),
                vue.createVNode(NavItem, {
                  path: "#",
                  label: "Logout",
                  onClick: vue.unref(auth$1).logout
                }, null, 8, ["onClick"])
              ], 64)) : (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 1 }, [
                vue.createVNode(NavItem, {
                  path: "/user/login",
                  label: "Login"
                }),
                vue.createVNode(NavItem, {
                  path: "/user/register",
                  label: "Register"
                })
              ], 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  name: "PageShell",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "min-h-screen grid page-grid grid-cols-3" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<div class="w-full px-10 py-1 grid items-center col-span-3" id="header" title="Photo by Max van den Oetelaar on Unsplash"><div class="flex flex-col container"><h1 class="site-title font-display font-bold text-primary-lightest">GeoCoLab</h1><span class="site-subtitle text-primary-light">Matching access to analytical facilities with underserved researchers</span></div></div><div class="h-full mx-auto p-10 main-content col-start-2">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("renderer/PageShell.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Help_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {
  name: "Help",
  __ssrInlineRender: true,
  setup(__props) {
    let showText = vue.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_vue_feather = vue.resolveComponent("vue-feather");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "help" }, _attrs))} data-v-1e6ff2cc>`);
      _push(serverRenderer.ssrRenderComponent(_component_vue_feather, {
        type: "help-circle",
        onMouseover: ($event) => vue.isRef(showText) ? showText.value = true : showText = true,
        onMouseout: ($event) => vue.isRef(showText) ? showText.value = false : showText = false
      }, null, _parent));
      if (vue.unref(showText)) {
        _push(`<span class="help-text ml-2" data-v-1e6ff2cc>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Help.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Help = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$1, [["__scopeId", "data-v-1e6ff2cc"]]);
const _sfc_main = {
  name: "CurrencySelect",
  __ssrInlineRender: true,
  props: ["modelValue", "name", "label"],
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const enums = CountrySelect.useEnumStore();
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
        options: vue.unref(enums).currencies,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CurrencySelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia = pinia$1.createPinia();
pinia$1.setActivePinia(pinia);
const enumStore = CountrySelect.useEnumStore();
enumStore.init();
const formStore = forms.useFormStore();
formStore.init();
const authStore = auth.useAuthStore();
authStore.loadUser();
function createApp(pageContext) {
  const { Page } = pageContext;
  let rootComponent;
  const PageWithWrapper = vue.defineComponent({
    data: () => ({
      Page: vue.markRaw(Page),
      pageProps: vue.markRaw(pageContext.pageProps || {})
    }),
    created() {
      rootComponent = this;
    },
    render() {
      return vue.h(_sfc_main$2, {}, {
        default: () => {
          return vue.h(this.Page, this.pageProps);
        }
      });
    }
  });
  const app = vue.createSSRApp(PageWithWrapper);
  app.use(pinia);
  app.component("vue-feather", VueFeather__default["default"]);
  app.component("help", Help);
  app.component("country-select", CountrySelect._sfc_main);
  app.component("currency-select", _sfc_main);
  objectAssign(app, {
    changePage: (pageContext2) => {
      Object.assign(pageContextReactive, pageContext2);
      rootComponent.Page = vue.markRaw(pageContext2.Page);
      rootComponent.pageProps = vue.markRaw(pageContext2.pageProps || {});
    }
  });
  const pageContextReactive = vue.reactive(pageContext);
  app.use(vue$1.plugin, vue$1.defaultConfig({
    config: {
      classes: themes.generateClasses({
        checkbox: {
          wrapper: "input-first"
        },
        submit: {
          input: "$reset formkit-button"
        }
      })
    }
  }));
  setPageContext(app, pageContextReactive);
  return app;
}
function objectAssign(obj, objAddendum) {
  Object.assign(obj, objAddendum);
}
var iconUrl = "/assets/apple-touch-icon.4cefd865.png";
const passToClient = ["pageProps", "documentProps"];
async function render(pageContext) {
  const app = createApp(pageContext);
  const stream = serverRenderer$1.renderToNodeStream(app);
  const title = "GeoCoLab";
  const desc = "Matching access to analytical facilities with underserved researchers";
  return vitePluginSsr.escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="${iconUrl}">
        <link rel="shortcut icon" type="image/x-icon" href="${iconUrl}" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${stream}</div>
      </body>
    </html>`;
}
exports.passToClient = passToClient;
exports.render = render;
