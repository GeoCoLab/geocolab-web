<template>
  <h2 class="page-title">Researcher registration</h2>
  <p v-if="(!ediTodo) && (!ediExtraTodo)" class="text-red-500 font-bold text-xl text-center">
    <template v-if="pageContext.user.role === 'researcher'">
      You have already completed this step.
    </template>
    <template v-else>
      You do not need to complete this step.
    </template>
  </p>
  <template v-if="ediTodo">
    <article class="prose lg:prose-lg">
      <h3>Participation</h3>
      <p>Your participation in this questionnaire is voluntary. However, completion is required for registration with
         GeoCoLab. You may refuse to take part in GeoCoLab or exit the questionnaire at any time without penalty.</p>
      <h3>Benefits</h3>
      <p>GeoCoLab is designed to improve access to analytical facilities for minority and marginalised scientists. By
         this we mean individuals who are part of groups who have been historically excluded, or marginalised in
         geoscience, due to their gender, race, disability, LGBTQ+, religion, and those working in low- or low-middle
         income countries. The following questions will be used to ensure that you meet one or more required
         criteria.</p>
      <p>The data collected here will additionally be used to evaluate and monitor use of the GeoCoLab app. Data used
         for this purpose will be anonymised and aggregated data may be shared with third parties (e.g. NERC as project
         funders) and in publications.</p>
      <h3>Risks</h3>
      <p>There are no foreseeable risks involved in participating in GeoCoLab other than those encountered in day-to-day
         life.</p>
      <h3>Confidentiality</h3>
      <p>Your name, institution and email address will be stored securely and only passed on to your matched analytical
         facility. Your questionnaire answers will be stored separately and securely. These will not be shared. Your
         contact details or identifying information will not be passed on to a third party.</p>
      <h3>Contact</h3>
      <p>If you have questions at any time about the GeoCoLab or the procedures, you may contact us at <a
          href="mailto:geocolab.app@gmail.com">GeoCoLab.App@gmail.com</a>. If you have any questions, concerns, or
         complaints that you wish to address to someone other than the investigator, you may contact the Ethics
         Committee in the Faculty of Science and Engineering, University of Hull: <a
            href="mailto:fose-ethics@hull.ac.uk">fose-ethics@hull.ac.uk</a></p>
    </article>
    <EDI />
  </template>
  <template v-if="ediExtraTodo && !ediTodo">
    <article class="prose lg:prose-lg">
      <p>The following questions will help us understand our users and to evaluate and monitor use of GeoCoLab. Data
         used for this purpose will be anonymised and aggregated data may be shared with third parties (e.g. NERC as
         project funders) and in publications.</p>
    </article>
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
