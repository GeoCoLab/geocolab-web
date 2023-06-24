<template>
  <h2 class="page-title">Managed Facilities</h2>
  <div class="grid grid-cols-1 xl:grid-cols-2">
    <div class="contents" v-for="o in orgs">
      <div class="col-span-2">
        <h3>{{ o.name }}</h3>
      </div>
      <div class="m-4 p-4 border-primary-darkest border-2" v-for="f in o.facilities">
        <div class="grid grid-cols-[1fr,auto] items-end mb-4">
          <span class="text-primary-dark text-3xl font-display">{{ f.name }}</span>
          <a :href="'/facilities/edit/' + o.id">
            <vue-feather type="edit" size="1em" class="mr-2" title="Edit" />
          </a>
        </div>
        <div class="grid grid-cols-[1fr,auto] p-4">
          <span class="detail-row-header font-bold">Notes</span>
          <span>{{ f.notes }}</span>
          <span class="detail-row-header font-bold">Analyses</span>
          <div>
            <ul>
              <li v-for="a in f.analyses" class="m-0 p-0">{{ a.name }}</li>
            </ul>
          </div>
          <span class="detail-row-header font-bold">Other Analyses</span>
          <span>{{ f.other_analyses }}</span>
          <span class="detail-row-header font-bold">Managers</span>
          <div>
            <ul>
              <li v-for="m in f.managers" class="m-0 p-0">{{ m.name }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useEnumStore } from '../../../store/enums';

defineProps(['orgs']);
const enums = useEnumStore();
</script>
