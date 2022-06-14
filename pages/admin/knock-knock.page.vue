<template>
  <div class="w-full lg:w-1/2 mx-auto">
    <FormKit type="form" v-model="formData" :submit-label="pageContext.user.role === 'admin' ? 'Set new passcode' : 'Who\'s there?'" @submit="submitHandler"
           :errors="errors" form-class="micro-form">
      <FormKit type="text" name="password" :classes="{inner: 'formkit-large'}"></FormKit>
    </FormKit>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { api } from '../../utils/api';
import { usePageContext } from '../../utils/usePageContext';

const pageContext = usePageContext();
let formData = ref({});
let errors = ref([]);

async function submitHandler() {
  api.post('knock-knock', formData.value).then(r => {
    window.location.pathname = '/';
  }).catch(e => {
    errors.value = e.response.data.errors;
  })
}
</script>
