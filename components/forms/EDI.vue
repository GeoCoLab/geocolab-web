<template>
  <FormKit type="form" v-model="formData" form-class="mx-auto long-form" submit-label="Save & Continue"
           @submit="submitHandler" :errors="errors">
    <FormKitSchema :schema="schema"/>
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
  forms.submitForm('edi', formData.value)
       .then(r => {
         if (r.status >= 400) {
           errors.value = r.data.errors;
         } else {
           // if the user is changed, we need to reload
           window.location.reload();
         }
       });
}

const schema = [
  {
    '$formkit': 'select',
    'id': 'country',
    'label': 'Do you currently work in a low- or lower-middle income country as determined by the World Bank designation of Gross National Income per capita?',
    'name': 'country',
    'options': [
      { 'label': 'Yes', 'value': 'yes' },
      { 'label': 'No', 'value': 'no' }
    ],
    'placeholder': '--',
    'validation': 'required',
    'validation-label': 'This information'
  },
  {
    '$cmp': 'country-select',
    'if': '$get(country).value',
    'props': {
      'classes': { 'wrapper': 'dependent' },
      'id': 'country_expand',
      'label': 'Please specify:',
      'name': 'country_expand',
      'placeholder': '--',
      'validation': 'required'
    }
  },
  {
    '$formkit': 'select',
    'id': 'gender',
    'label': 'What best describes your gender?',
    'name': 'gender',
    'options': [
      { 'label': 'Man', 'value': 'man' },
      { 'label': 'Woman', 'value': 'woman' },
      { 'label': 'Nonbinary', 'value': 'nonbinary' },
      { 'label': 'Prefer to self-describe', 'value': 'selfdescribe' },
      { 'label': 'Prefer not to say', 'value': 'decline' }
    ],
    'placeholder': '--',
    'validation': 'required',
    'validation-label': 'This information'
  },
  {
    '$formkit': 'text',
    'classes': { 'wrapper': 'dependent' },
    'id': 'gender_expand',
    'if': '$get(gender).value === selfdescribe',
    'label': 'Please describe:',
    'name': 'gender_expand',
    'validation': 'required',
    'validation-label': 'This information'
  },
  {
    '$formkit': 'select',
    'id': 'trans',
    'label': 'Is your gender identity the same as the sex you were assigned at birth?',
    'name': 'trans',
    'options': [
      { 'label': 'Yes', 'value': 'yes' },
      { 'label': 'No', 'value': 'no' },
      { 'label': 'Prefer not to say', 'value': 'decline' }
    ],
    'placeholder': '--',
    'validation': 'required',
    'validation-label': 'This information'
  },
  {
    '$formkit': 'select',
    'id': 'orientation',
    'label': 'What best describes your sexual orientation?',
    'name': 'orientation',
    'options': [
      { 'label': 'Gay man', 'value': 'gay' },
      { 'label': 'Gay woman/lesbian', 'value': 'lesbian' },
      { 'label': 'Bisexual', 'value': 'bisexual' },
      { 'label': 'Asexual', 'value': 'asexual' },
      { 'label': 'Heterosexual/straight', 'value': 'straight' },
      { 'label': 'Prefer to self-describe', 'value': 'selfdescribe' },
      { 'label': 'Prefer not to say', 'value': 'decline' }
    ],
    'placeholder': '--',
    'validation': 'required',
    'validation-label': 'This information'
  },
  {
    '$formkit': 'text',
    'classes': { 'wrapper': 'dependent' },
    'id': 'orientation_expand',
    'if': '$get(orientation).value === selfdescribe',
    'label': 'Please describe:',
    'name': 'orientation_expand',
    'validation': 'required',
    'validation-label': 'This information'
  },
  {
    '$formkit': 'select',
    'id': 'ethnicity',
    'label': 'What best describes your ethnicity?',
    'name': 'ethnicity',
    'options': [
      {
        'label': 'White (Eg: White German, White Irish, White English, etc)',
        'value': 'white'
      },
      {
        'label': 'Hispanic, Latino or Spanish origin (Eg: Mexican or Mexican American, Puerto Rican, Cuban, Salvadoran, Dominican, Colombian, etc)',
        'value': 'hispanic'
      },
      {
        'label': 'Black or African American (Eg: Black British, African American, Jamaican, Haitian, Nigerian, Ethiopian, Somalian, etc)',
        'value': 'black'
      },
      {
        'label': 'Asian (Eg: Chinese, Filipino, Asian Indian, Vietnamese, Korean, Japanese, etc)',
        'value': 'asian'
      },
      {
        'label': 'Indigenous American (Eg: Navajo nation, Blackfeet tribe, Mayan, Aztec, Native Village or Barrow Inupiat Traditional Government, Nome Eskimo Community, etc)',
        'value': 'indigenous_american'
      },
      {
        'label': 'Middle Eastern or North African (Eg: Lebanese, Iranian, Egyptian, Syrian, Moroccan, Algerian, etc)',
        'value': 'middle_eastern'
      },
      {
        'label': 'Native Hawaiian or Other Pacific Islander (Eg: Native Hawaiian, Samoan, Chamorro, Tongan, Fijian, etc)',
        'value': 'pacific_islander'
      },
      {
        'label': 'Mixed race (if you wish, please describe)',
        'value': 'mixed'
      },
      { 'label': 'Another race, ethnicity or origin', 'value': 'other' }
    ],
    'placeholder': '--',
    'validation': 'required',
    'validation-label': 'This information'
  },
  {
    '$formkit': 'text',
    'classes': { 'wrapper': 'dependent' },
    'id': 'ethnicity_expand',
    'if': '$get(ethnicity).value === mixed || $get(ethnicity).value === other',
    'label': 'Please describe:',
    'name': 'ethnicity_expand',
    'validation': {
      'else': 'optional',
      'if': '$get(ethnicity).value === other',
      'then': 'required'
    },
    'validation-label': 'This information'
  },
  {
    '$formkit': 'select',
    'id': 'disability',
    'label': 'Do you have an impairment, health condition or learning difference that has a substantial or long-term impact on your ability to carry out day-to-day activities?',
    'name': 'disability',
    'options': [
      {
        'label': 'A specific learning difficulty such as dyslexia, dyspraxia or AD(H)D',
        'value': 'learning'
      },
      {
        'label': 'A social/communication impairment such as Asperger\'s syndrome/other autistic spectrum disorder',
        'value': 'social'
      },
      {
        'label': 'A long standing illness or health condition such as cancer, HIV, diabetes, chronic heart disease, or epilepsy',
        'value': 'chronic'
      },
      {
        'label': 'A mental health condition, such as depression, schizophrenia or anxiety disorder',
        'value': 'mental'
      },
      {
        'label': 'A physical impairment or mobility issues, such as difficulty using arms or using a wheelchair or crutches',
        'value': 'mobility'
      },
      { 'label': 'Deaf or a serious hearing impairment', 'value': 'hearing' },
      {
        'label': 'Blind or a serious visual impairment uncorrected by glasses',
        'value': 'sight'
      },
      {
        'label': 'A disability, impairment or medical condition that is not listed',
        'value': 'other'
      },
      { 'label': 'No known disability', 'value': 'no' },
      { 'label': 'Prefer not to say', 'value': 'decline' }
    ],
    'placeholder': '--',
    'validation': 'required',
    'validation-label': 'This information'
  }
];


</script>
