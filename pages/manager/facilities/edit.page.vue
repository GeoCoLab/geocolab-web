<template>
  <FormKit type="form" v-model="formData" form-class="mx-auto long-form" submit-label="Save"
           @submit="saveItem" :errors="errors">
    <FormKit type="text" name="name" label="Facility name" validation="required" />
    <FormKit type="textarea" name="notes" label="Notes or description" :classes="{inner: 'tall'}" />

    <help>If the list of analyses doesn't cover something you offer, please email us.</help>
  </FormKit>
</template>

<script setup>
import { ref } from 'vue';
import { api } from '../../../utils/api';
import { navigate } from 'vite-plugin-ssr/client/router';

const props = defineProps(['facility', 'analyses']);

let formData = ref({ ...props.facility });
let errors = ref([]);


async function saveItem() {
  api.post('/facility/save', formData.value).then((r) => {
    navigate(`/facilities`);
    return;
  });
}
</script>
