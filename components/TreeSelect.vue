<template>
  <FormKit type="checkbox" :name="name" :label="label" validation-label="This information" multiple v-model="value" @change="changeValue" />
</template>

<script setup>
import {ref} from 'vue';

const props = defineProps(['modelValue', 'name', 'label']);
const emit = defineEmits(['update:modelValue']);
const value = ref([])

function changeValue() {
  emit('update:modelValue', value.value)
}
</script>

<style scoped>

</style>
