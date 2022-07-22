<template>
  <FormKit type="form" v-model="formData" form-class="mx-auto long-form" submit-label="Save"
           @submit="saveItem" :errors="errors">
    <div class="grid grid-cols-[1fr,auto] items-start">
      <FormKit ref="rorInput" type="text" name="ror_id" label="ROR ID" validation="matches:/0[0-9a-hjkmnp-z]{6}\d{2}/"
               :validation-messages="{matches: 'Not a valid ROR ID'}" />
      <FormKit type="button" @click="lookupRor" label="Retrieve"
               :disabled="(!formData.ror_id) || (!rorInput.node.context.state.valid)" style="margin-top: 2em;" />
    </div>
    <FormKit type="text" name="name" label="Name of Organisation or Institution" validation="required" />
    <CountrySelect name="country" label="Primary location of Organisation" />
  </FormKit>
</template>

<script setup>
import { ref } from 'vue';
import CountrySelect from '../../../components/CountrySelect.vue';
import axios from 'axios';
import { api } from '../../../utils/api';
import { navigate } from 'vite-plugin-ssr/client/router';

const props = defineProps(['org']);

let formData = ref({ ...props.org });
let errors = ref([]);
let rorInput = ref(null);

async function saveItem() {
  api.post('/org/save', formData.value).then((r) => {
    navigate(`/orgs`);
    return;
  })
}

async function lookupRor() {
  if (!rorInput.value.node.context.state.valid) {
    return;
  }
  axios.get('https://api.ror.org/organizations/' + formData.value.ror_id)
       .then(r => {
         formData.value.country = r.data.country.country_code;
         formData.value.name = r.data.name;
       })
       .catch(() => {
         formData.value.country = null;
         formData.value.name = null;
       });
}
</script>
