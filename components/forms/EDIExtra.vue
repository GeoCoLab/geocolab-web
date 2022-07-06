<template>
  <FormKit type="form" v-model="formData" form-class="mx-auto long-form" @submit="submitHandler" :errors="errors">
    <FormKitSchema :schema="schema" />
  </FormKit>
</template>

<script setup>
import { ref } from 'vue';
import { usePageContext } from '../../utils/usePageContext';
import { useFormStore } from '../../store/forms';

const forms = useFormStore();
const pageContext = usePageContext();

const formData = ref({});
const errors = ref([]);

async function submitHandler() {
  forms.submitForm('edi_extra', formData.value)
       .then(r => {
         if (r.status >= 400) {
           errors.value = r.data.errors;
         } else {
           // user is changed, so navigate like this to force a reload
           window.location.pathname = '/';
         }
       });
}

const schema = [
  {
    '$formkit': 'select',
    'id': 'role_type',
    'label': 'Is your current role:',
    'name': 'role_type',
    'options': [{ 'label': 'Research only', 'value': 'research' }, {
      'label': 'Teaching only',
      'value': 'teaching'
    }, { 'label': 'Research and teaching', 'value': 'both' }, { 'label': 'Other', 'value': 'other' }],
    'placeholder': '--'
  },
  {
    '$formkit': 'text',
    'classes': { 'wrapper': 'dependent' },
    'id': 'role_type_expand',
    'if': '$get(role_type).value === other',
    'label': 'Please describe:',
    'name': 'role_type_expand'
  },
  {
    '$formkit': 'select',
    'id': 'contract',
    'label': 'What kind of contract best describes your current role?',
    'name': 'contract',
    'options': [{ 'label': 'Open ended/permanent', 'value': 'permanent' }, {
      'label': 'Fixed term (>1y)',
      'value': 'fixed_long'
    }, { 'label': 'Fixed term (<1y)', 'value': 'fixed_short' }],
    'placeholder': '--'
  },
  {
    '$formkit': 'select',
    'help': 'Please choose how you most strongly identify or what best aligns with your role/title. Early career is typically defined as <7-10 years post-PhD, mid career as 10-20 and senior as >20, but this may also depend on personal circumstances.',
    'id': 'career_stage',
    'label': 'What best describes your career stage?',
    'name': 'career_stage',
    'options': [{ 'label': 'Undergraduate', 'value': 'undergraduate' }, {
      'label': 'Research masters',
      'value': 'masters'
    }, {
      'label': 'PhD',
      'value': 'phd'
    }, {
      'label': 'Post-doctoral research associate/early career research fellow/equivalent',
      'value': 'postdoc'
    }, {
      'label': 'Early career lecturer/assistant professor/researcher',
      'value': 'early'
    }, {
      'label': 'Mid career lecturer/assistant professor/researcher',
      'value': 'mid'
    }, { 'label': 'Senior career lecturer/professor/researcher', 'value': 'senior' }],
    'placeholder': '--'
  },
  {
    '$formkit': 'select',
    'id': 'funding',
    'label': 'Who currently funds your research?',
    'name': 'funding',
    'options': [{ 'label': 'National research body (e.g. UKRI, NSF)', 'value': 'national' }, {
      'label': 'Institution',
      'value': 'institution'
    }, { 'label': 'Self-funded', 'value': 'self' }, { 'label': 'Other', 'value': 'other' }],
    'placeholder': '--',
    'if': '$get(career_stage).value === masters || $get(career_stage).value === phd || $get(career_stage).value === postdoc'
  },
  {
    '$formkit': 'text',
    'classes': { 'wrapper': 'dependent' },
    'id': 'funding_expand',
    'if': '$get(funding).value === other',
    'label': 'Please describe:',
    'name': 'funding_expand'
  },
  {
    '$formkit': 'checkbox',
    'classes': { 'wrapper': 'dependent' },
    'id': 'has_budget',
    'if': '$get(funding).value',
    'label': 'Do you have a specific research and training budget?',
    'name': 'has_budget'
  },
  {
    '$el': 'div',
    'attrs': { 'class': 'formkit-double' },
    'children': [{
      '$el': 'span',
      'attrs': { 'class': 'formkit-label' },
      'children': 'What is the value of this per year?'
    }, {
      '$cmp': 'currency-select',
      'props': {
        'classes': { 'wrapper': 'dependent' },
        'id': 'budget_currency',
        'name': 'budget_currency',
        'placeholder': 'Currency',
        'validation': 'required'
      }
    }, {
      '$formkit': 'number',
      '__raw__sectionsSchema': {
        'prefix': {
          '$el': 'div',
          'attrs': { 'class': 'input-prefix' },
          'children': '$get(budget_currency).value || \'Please choose currency\''
        }
      },
      'classes': { 'wrapper': 'dependent' },
      'disabled': '$get(budget_currency).value === undefined',
      'id': 'budget_value',
      'min': 0,
      'name': 'budget_value',
      'placeholder': 'Value per year'
    }],
    'if': '$get(has_budget).value === true'
  },
  {
    '$formkit': 'checkbox',
    'id': 'family_firsts',
    'label': 'Are you the first person in your family to:',
    'name': 'family_firsts',
    'options': [{ 'label': 'Study for a Bachelors', 'value': 'bachelors' }, {
      'label': 'Study for a Masters',
      'value': 'masters'
    }, { 'label': 'Study for a PhD', 'value': 'phd' }, {
      'label': 'Work as a researcher/academic',
      'value': 'academic'
    }]
  }
];
</script>
