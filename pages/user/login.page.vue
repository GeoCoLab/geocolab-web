<template>
  <h2>Login</h2>
  <FormKit type="form" v-model="formData" form-class="mx-auto short-form" submit-label="Login" @submit="submitHandler"
           :errors="errors">
    <FormKit type="text" name="email" label="Email" validation="required" />
    <FormKit type="password" name="password" label="Password" validation="required" />
    <FormKit type="checkbox" name="remember" label="Remember me" />
  </FormKit>
  <div class="text-center mt-8">Need an account? <a href="/user/register">Register here</a>.</div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../store/auth';
import { usePageContext } from '../../utils/usePageContext';
import { navigate } from 'vite-plugin-ssr/client/router';

const pageContext = usePageContext();

const auth = useAuthStore();

let errors = ref([]);
const formData = ref({});
const submitHandler = async () => {
  auth.login(formData)
      .then(r => {
        if (r.status >= 400) {
          errors.value = r.data.errors;
        } else {
          if (auth.userData.todo.includes('edi') || auth.userData.todo.includes('edi_extra')) {
            window.location.pathname = '/researcher/register';
          } else if (pageContext.pageProps.next) {
            navigate(pageContext.pageProps.next).then(() => {
              window.location.search = '';
            })
          } else {
            window.location.pathname = '/';
          }
        }
      });
};
</script>

<style scoped>

</style>
