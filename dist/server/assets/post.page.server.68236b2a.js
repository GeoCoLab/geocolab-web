"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var api = require("./api.3858e324.js");
var moment = require("moment");
require("axios");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var moment__default = /* @__PURE__ */ _interopDefaultLegacy(moment);
async function onBeforeRender(pageContext) {
  const post = await fetchBlogPost(pageContext.routeParams.postSlug);
  return {
    pageContext: {
      pageProps: {
        post
      },
      documentProps: { title: post.title }
    }
  };
}
async function fetchBlogPost(slug) {
  let response = await api.api.get(`/blog/${slug}`);
  let post = response.data;
  let postedDate = moment__default["default"](post.posted);
  let formattedDate = postedDate.format("Do MMM YYYY");
  let timeAgo = postedDate.fromNow();
  post.posted = `${formattedDate} (${timeAgo})`;
  return post;
}
exports.onBeforeRender = onBeforeRender;
