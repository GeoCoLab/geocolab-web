<template>
  <h2 class="page-title">Managed Organisations/Institutions</h2>
  <div class="grid grid-cols-1 xl:grid-cols-2">
    <div class="m-4 p-4 border-primary-darkest border-2" v-for="o in orgs">
      <div class="grid grid-cols-[1fr,auto] items-end mb-4">
        <span class="text-primary-dark text-3xl font-display">{{ o.name }}</span>
        <a :href="'/orgs/edit/' + o.id">
          <vue-feather type="edit" size="1em" class="mr-2" title="Edit"/>
        </a>
      </div>
      <div class="grid grid-cols-[1fr,auto] p-4">
        <span class="detail-row-header font-bold">ROR ID</span>
        <a :href="'https://ror.org/' + o.ror_id" target="_blank">{{ o.ror_id }}</a>
        <span class="detail-row-header font-bold">Location</span>
        <span>{{ enums.countries[o.country] }}</span>
        <span class="detail-row-header font-bold">Facilities</span>
        <div><ul><li v-for="f in o.facilities"><a :href="'/facilities/' + f.id" class="m-0 p-0">{{ f.name }}</a></li></ul></div>
        <span class="detail-row-header font-bold">Managers</span>
        <div><ul><li v-for="m in o.managers">{{ m.name }}</li></ul></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useEnumStore } from '../../../store/enums';

defineProps(['orgs']);
const enums = useEnumStore();
</script>
