"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const pageFiles = {
  ".page": { "/renderer/_error.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/_error.page.8ec581c4.js");
  }), "/pages/about/coc.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/coc.page.8435cc25.js");
  }), "/pages/about/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.91144a2d.js");
  }), "/pages/about/terms.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/terms.page.c127a434.js");
  }), "/pages/admin/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.baf194bb.js");
  }), "/pages/blog/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.370b19f4.js");
  }), "/pages/index/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.803ffc7f.js");
  }), "/pages/manager/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.9f2d62d8.js");
  }), "/pages/manager/register.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/register.page.05971a6a.js");
  }), "/pages/researcher/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.11c880b3.js");
  }), "/pages/researcher/register.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/register.page.745c7d68.js");
  }), "/pages/user/account.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/account.page.e4ece777.js");
  }), "/pages/user/login.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/login.page.7a3e3636.js");
  }), "/pages/user/register.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/register.page.a22f01e0.js");
  }), "/pages/blog/post/post.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/post.page.4752332c.js");
  }), "/pages/manager/facilities/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.868452a2.js");
  }), "/pages/manager/facilities/manage.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/manage.page.753099a5.js");
  }), "/pages/manager/facilities/new.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/new.page.71cda2ee.js");
  }), "/pages/manager/orgs/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.9b3b005a.js");
  }), "/pages/manager/orgs/manage.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/manage.page.1881f7b2.js");
  }), "/pages/manager/orgs/new.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/new.page.e4daa42f.js");
  }), "/pages/manager/review/application.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/application.page.0b34988a.js");
  }), "/pages/manager/review/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.437cdb86.js");
  }), "/pages/researcher/applications/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.75db345d.js");
  }), "/pages/researcher/applications/new.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/new.page.3fd75419.js");
  }), "/pages/researcher/applications/view.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/view.page.141fbe8d.js");
  }) },
  ".page.client": { "/renderer/_default.page.client.ts": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.client.762617f8.js");
  }) },
  ".page.server": { "/renderer/_default.page.server.ts": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.server.ac69ab1c.js");
  }), "/pages/blog/index.page.server.ts": () => Promise.resolve().then(function() {
    return require("./assets/index.page.server.220cf5db.js");
  }), "/pages/blog/post/post.page.server.ts": () => Promise.resolve().then(function() {
    return require("./assets/post.page.server.68236b2a.js");
  }) },
  ".page.route": { "/pages/blog/post/post.page.route.ts": () => Promise.resolve().then(function() {
    return require("./assets/post.page.route.d6c8d715.js");
  }), "/pages/manager/facilities/index.page.route.ts": () => Promise.resolve().then(function() {
    return require("./assets/index.page.route.b521ae03.js");
  }), "/pages/manager/facilities/manage.page.route.ts": () => Promise.resolve().then(function() {
    return require("./assets/manage.page.route.c2d1f4a8.js");
  }), "/pages/manager/facilities/new.page.route.ts": () => Promise.resolve().then(function() {
    return require("./assets/new.page.route.d246e487.js");
  }), "/pages/manager/orgs/index.page.route.ts": () => Promise.resolve().then(function() {
    return require("./assets/index.page.route.8cc70faf.js");
  }), "/pages/manager/orgs/manage.page.route.ts": () => Promise.resolve().then(function() {
    return require("./assets/manage.page.route.9caaaceb.js");
  }), "/pages/manager/orgs/new.page.route.ts": () => Promise.resolve().then(function() {
    return require("./assets/new.page.route.f1e59ee0.js");
  }), "/pages/manager/review/application.page.route.ts": () => Promise.resolve().then(function() {
    return require("./assets/application.page.route.ceb64fb7.js");
  }), "/pages/manager/review/index.page.route.ts": () => Promise.resolve().then(function() {
    return require("./assets/index.page.route.c64bcd11.js");
  }), "/pages/researcher/applications/index.page.route.ts": () => Promise.resolve().then(function() {
    return require("./assets/index.page.route.cfefa8c3.js");
  }), "/pages/researcher/applications/new.page.route.ts": () => Promise.resolve().then(function() {
    return require("./assets/new.page.route.34e84d44.js");
  }), "/pages/researcher/applications/view.page.route.ts": () => Promise.resolve().then(function() {
    return require("./assets/view.page.route.7013e587.js");
  }) }
};
exports.pageFiles = pageFiles;
