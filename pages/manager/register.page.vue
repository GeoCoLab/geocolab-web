<template>
  <h2 class="page-title">Registration</h2>
  <h3>I have an invite code</h3>
  <FormKit type="form" v-model="formData" form-class="mx-auto short-form"
           @submit="submitInvite" :errors="errors">
    <FormKit type="text" name="invite-code" label="Invite code" help="To join an existing organisation or facility, you'll need an invite code from another manager."></FormKit>
  </FormKit>
  <h3>I need to register a new organisation</h3>
  <a href="/orgs/new" class="button my-4 left-0 right-0 mx-auto">New Org <vue-feather type="arrow-right" class="pl-2"></vue-feather></a>
</template>

<script setup>
import { ref } from 'vue';
import { useFormStore } from '../../store/forms';
import { useAuthStore } from '../../store/auth';

const auth = useAuthStore();
const forms = useFormStore();
let errors = ref([]);
const formData = ref({});

const submitInvite = async () => {

};
</script>
