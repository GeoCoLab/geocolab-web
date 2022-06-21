<template>
  <FormKit type="form" v-model="formData" form-class="mx-auto short-form" submit-label="Save" @submit="submitHandler"
           :errors="errors">
    <FormKit type="text" name="twitter" label="Twitter" />
    <FormKit type="text" name="github" label="Github" />
    <FormKit type="text" name="email" label="Contact email" />
    <FormKit type="textarea" name="bio" label="Bio" inner-class="tall" />
  </FormKit>
</template>

<script setup>
import { ref } from 'vue';
import { usePageContext } from '../../utils/usePageContext';
import { api } from '../../utils/api';

const pageContext = usePageContext();

const formData = ref(pageContext.user.author || {});
const errors = ref([]);

async function submitHandler() {
  formData.value.user_id = pageContext.user.id;
  return api.post('/blog/author/save', formData.value)
            .then(r => {
              window.location.reload();
            })
            .catch(e => {
              console.log(e.response);
            });
}

</script>

<style scoped>

</style>
