import { defineStore } from 'pinia';
import { api } from '../utils/api';
import { sortObjectValues } from '../utils/misc';

export const useEnumStore = defineStore('enums', {
    state: () => ({
        countries: {},
        currencies: {}
    }),
    getters: {},
    actions: {
        async init() {
            api.get('/enum/countries').then(r => {
                this.countries = sortObjectValues(r.data);
            }).catch(e => {
                //
            });
            api.get('/enum/currencies').then(r => {
                this.currencies = sortObjectValues(r.data);
            }).catch(e => {
                //
            });
        }
    }
});
