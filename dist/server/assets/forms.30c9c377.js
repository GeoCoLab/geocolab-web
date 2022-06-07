"use strict";
var pinia = require("pinia/dist/pinia");
var api = require("./api.3858e324.js");
const useFormStore = pinia.defineStore("forms", {
  state: () => ({
    forms: {
      edi: [],
      edi_extra: []
    }
  }),
  getters: {},
  actions: {
    async getForm(formName) {
      return api.api.get(`/forms/${formName}`).then((r) => {
        this.forms[formName] = r.data.fields;
        return r.data.fields;
      }).catch((e) => {
        console.error(e);
      });
    },
    async submitForm(formName, formData) {
      return api.post(`/forms/${formName}`, {
        "data": formData
      });
    },
    async init() {
      return api.api.get(`/forms/all`).then((r) => {
        this.forms = r.data;
      }).catch((e) => {
        console.error(e);
      });
    }
  }
});
exports.useFormStore = useFormStore;
