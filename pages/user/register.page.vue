<template>
  <FormKit type="form" id="register" form-class="mx-auto" v-model="formData" @submit="submitHandler"
           :errors="errors" :actions="false" ref="registerForm">
    <section class="short-form" v-show="step === 0">
      <FormKit type="group" name="userInfo">
        <FormKit type="text" name="email" label="Email" validation="required" />
        <FormKit type="password" name="password" label="Password" validation="required" />
        <FormKit type="password" name="password_confirm" label="Confirm Password" validation="required|confirm"
                 validation-label="Password" />
        <FormKit type="text" name="family_name" label="Family name" validation="required" />
        <FormKit type="text" name="given_name" label="Given name(s)" validation="required" />
        <FormKit type="select" name="given_name_first"
                 :options="[{label:'Given name first', value: 1},{label:'Family name first', value: 0}]"
                 label="Name display"
                 :help="`Display your ${formData.userInfo.given_name_first ? 'given name' : 'family name'} first, e.g. ${displayName}`" />
        <div class="formkit-outer" data-type="text">
          <FormKit type="text" name="pronouns" label="Pronouns" :sections-schema="{outer: {$el: null}}" />
          <div class="formkit-help">e.g. <span @click="formData.userInfo.pronouns='he/him'"
                                               class="clickable">he/him</span>,
            <span
                @click="formData.userInfo.pronouns='she/her'" class="clickable">she/her</span>, or <span
                @click="formData.userInfo.pronouns='they/them'" class="clickable">they/them</span></div>
        </div>
        <FormKit type="hidden" name="role" validation="required" />
      </FormKit>
    </section>
    <section v-show="step === 1" class="long-form">
      <MoU />
      <FormKit type="checkbox" label="I agree to the Memorandum of Understanding outlined above"
               name="mouAgree" wrapper-class="input-first" validation="accepted"
               :validation-messages="{accepted: 'You must agree to the MoU to continue.'}" />
    </section>
    <section v-show="step === 2">
      <div class="my-8 pb-8 border-bottom border-secondary-lightest">
        <h3>Researcher</h3>
        <p>A researcher account allows you to submit applications to organisations and institutions.</p>
        <FormKit type="button" :classes="{input: 'button my-4'}" @click="register('researcher')">Register as researcher
        </FormKit>
      </div>
      <div class="my-8 pb-8 border-bottom border-secondary-lightest">
        <h3>Manager</h3>
        <p>Manager accounts are for organisations and institutions offering their services through GeoCoLab.</p>
        <FormKit type="button" :classes="{input: 'button my-4'}" @click="register('manager')">Register as manager
        </FormKit>
      </div>
      <small class="clickable" @click="register('basic')">Choose later</small>
    </section>
    <div class="grid grid-cols-[auto,1fr,auto]">
      <FormKit type="button" v-if="step > 0" @click="step--" label="Previous" :classes="{outer: 'col-start-1'}" />
      <FormKit type="button" v-if="step < (steps.length - 1)" @click="step++" label="Next"
               :classes="{outer: 'col-start-3'}" />
    </div>
  </FormKit>
  <div class="text-center mt-8">Already have an account? <a href="/user/login">Log in here</a>.</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useEnumStore } from '../../store/enums';
import { useAuthStore } from '../../store/auth';
import MoU from './tabs/MoU.vue';

const enums = useEnumStore();
const auth = useAuthStore();

const registerForm = ref(null);
let errors = ref([]);
const formData = ref({ userInfo: {}, mouAgree: false });
const step = ref(0);
const steps = ['userInfo', 'mou', 'chooseRole'];

async function submitHandler() {
  if (!formData.value.mouAgree) {
    errors.value = ['You must agree to the Memorandum of Understanding.'];
    step.value = 1;
    return;
  }
  return auth.register(formData.value.userInfo)
             .then(r => {
               if (r.status >= 400) {
                 errors.value = r.data.errors;
                 return false;
               } else {
                 switch (formData.value.userInfo.role) {
                   case 'researcher':
                     window.location.pathname = '/researcher/register';
                     break;
                   case 'manager':
                     window.location.pathname = '/manager/register';
                     break;
                   default:
                     window.location.pathname = '/';
                     break;
                 }
               }
             });
}

async function register(roleName) {
  formData.value.userInfo['role'] = roleName;
  // give it a chance to catch up (apparently this is necessary)
  setTimeout(() => {
    registerForm.value.node.submit('register');
  }, 500)

}

const displayName = computed(() => {
  if (formData.value.userInfo['given_name_first']) {
    return [formData.value.userInfo['given_name'] || 'Jane', formData.value.userInfo['family_name'] || 'Doe'].join(' ');
  } else {
    return [formData.value.userInfo['family_name'] || 'Yamada', formData.value.userInfo['given_name'] || 'Hanako'].join(' ');
  }
});

</script>
