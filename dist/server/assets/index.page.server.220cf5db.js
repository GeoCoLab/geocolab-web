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
  const summaries = await fetchBlogSummaries(pageContext);
  return {
    pageContext: {
      pageProps: {
        summaries
      },
      documentProps: { title: "Blog" }
    }
  };
}
async function fetchBlogSummaries(context) {
  let response = await api.api.get("/blog/summaries", { params: context.urlParsed.search });
  return response.data.map((s) => {
    let postedDate = moment__default["default"](s.posted);
    let formattedDate = postedDate.format("Do MMM YYYY");
    let timeAgo = postedDate.fromNow();
    s.posted = `${formattedDate} (${timeAgo})`;
    return s;
  });
}
exports.onBeforeRender = onBeforeRender;
