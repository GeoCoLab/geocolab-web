import { defineStore } from 'pinia';
import { api } from '../utils/api';

export const useFormStore = defineStore('forms', {
    state: () => ({
        forms: {
            edi: [],
            edi_extra: []
        }
    }),
    getters: {},
    actions: {
        async getForm(formName: string) {
            return api.get(`/forms/${ formName }`).then(r => {
                // @ts-ignore
                this.forms[formName] = r.data.fields;
                return r.data.fields;
            }).catch(e => {
                console.error(e);
            });
        },
        async submitForm(formName: string, formData: Object) {
            return api.post(`/forms/${ formName }`, {
                'data': formData
            });
        },
        async init() {
            return api.get(`/forms/all`).then(r => {
                this.forms = r.data;
            }).catch(e => {
                console.error(e);
            });
        }
    }
});
