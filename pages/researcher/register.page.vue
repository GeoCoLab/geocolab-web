<template>
  <h2 class="page-title">Researcher registration</h2>
  <p>GeoCoLab is designed to improve access to analytical facilities for minority and marginalised scientists. The
     following questions will be used to ensure that you meet one or more required criteria. The data collected here
     will additionally be used to evaluate and monitor use of the GeoCoLab app. Data used for this purpose will be
     anonymised and aggregated data may be shared with third parties (e.g. NERC as project funders) and in publications.
     Further details on how this data is collected, stored, used and shared is provided in the GeoCoLab terms and
     conditions.</p>
  <p v-if="(!ediTodo) && (!ediExtraTodo)" class="text-red-500 font-bold text-xl text-center">
    <template v-if="pageContext.user.role === 'researcher'">
      You have already completed this step.
    </template>
    <template v-else>
      You do not need to complete this step.
    </template>
  </p>
  <EDI v-if="ediTodo" />
  <template v-if="ediExtraTodo && !ediTodo">
    <p>The following questions will help us understand our users and to evaluate and monitor use of GeoCoLab. Data used
       for this purpose will be anonymised and aggregated data may be shared with third parties (e.g. NERC as project
       funders) and in publications.</p>
    <EDIExtra />
  </template>
</template>

<script setup>
import { computed } from 'vue';
import { usePageContext } from '../../utils/usePageContext';
import EDI from '../../components/forms/EDI.vue';
import EDIExtra from '../../components/forms/EDIExtra.vue';

const pageContext = usePageContext();

const ediTodo = computed(() => {
  return pageContext.user.todo.includes('edi');
});

const ediExtraTodo = computed(() => {
  return pageContext.user.todo.includes('edi_extra');
});
</script>
