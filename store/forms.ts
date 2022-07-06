import { defineStore } from 'pinia';
import { api } from '../utils/api';

export const useFormStore = defineStore('forms', {
    actions: {
        async submitForm(formName: string, formData: Object) {
            return api.post(`/forms/${ formName }`, {
                'data': formData
            });
        }
    }
});
