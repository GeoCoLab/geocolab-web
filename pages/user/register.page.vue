<template>
  <FormKit type="form" id="register" v-model="formData" form-class="mx-auto short-form" @submit="doNothing"
           :errors="errors" :actions="false">
    <FormKit type="text" name="email" label="Email" validation="required" />

    <FormKit type="password" name="password" label="Password" validation="required" />
    <FormKit type="password" name="password_confirm" label="Confirm Password" validation="required|confirm"
             validation-label="Password" />

    <FormKit type="text" name="family_name" label="Family name" validation="required" />
    <FormKit type="text" name="given_name" label="Given name(s)" validation="required" />
    <FormKit type="select" name="given_name_first"
             :options="[{label:'Given name first', value: 1},{label:'Family name first', value: 0}]"
             label="Name display"
             :help="`Display your ${formData.given_name_first ? 'given name' : 'family name'} first, e.g. ${displayName}`" />

    <CountrySelect name="country" label="Country" v-model="formData.country" help="Your current country of residence"/>
    <FormKit type="text" name="pronouns" label="Pronouns" help="e.g. he/him, she/her, they/them"/>
    <div class="form-row-custom">
      <div class="form-row-inputs">
        <FormKit type="submit" @click="registerManager">Register as manager</FormKit>
        <FormKit type="submit" @click="registerResearcher">Register as researcher</FormKit>
        <FormKit type="submit" @click="registerBasic">Choose later</FormKit>
      </div>
      <help>If you're not sure, select "Choose later".</help>
    </div>
  </FormKit>

  <div class="text-center mt-8">Already have an account? <a href="/user/login">Log in here</a>.</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { navigate } from 'vite-plugin-ssr/client/router';
import { useEnumStore } from '../../store/enums';
import { useAuthStore } from '../../store/auth';
import CountrySelect from '../../components/CountrySelect.vue';

const enums = useEnumStore();
const auth = useAuthStore();

let errors = ref([]);
const formData = ref({});

function doNothing() {
  // literally do nothing
}

async function submitHandler() {
  return auth.register(formData)
             .then(r => {
               if (r.status >= 400) {
                 errors.value = r.data.errors;
                 return false;
               } else {
                 return true;
               }
             });
}

async function registerResearcher() {
  formData.value['role'] = 'researcher';
  submitHandler().then(success => {
    if (success) {
      // force reload
      window.location.pathname = '/researcher/register';
    }
  });
}

async function registerManager() {
  formData.value['role'] = 'manager';
  submitHandler().then(success => {
    if (success) {
      // force reload
      window.location.pathname = '/manager/register';
    }
  });
}

async function registerBasic() {
  formData.value['role'] = 'basic';
  submitHandler().then(success => {
    if (success) {
      // force reload
      window.location.pathname = '/user/account';
    }
  });
}

const displayName = computed(() => {
  if (formData.value['given_name_first']) {
    return [formData.value['given_name'] || 'Jane', formData.value['family_name'] || 'Doe'].join(' ');
  } else {
    return [formData.value['family_name'] || 'Yamada', formData.value['given_name'] || 'Hanako'].join(' ');
  }
});

</script>

<style scoped>

</style>
