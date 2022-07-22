<template>
  <div v-if="props.show" class="absolute z-60 bg-secondary-dark p-2 shadow shadow-gray-900 dropdown"
      :class="directionsClasses">
    <slot></slot>
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core';
import { ref, watch, computed } from 'vue';
import { usePageContext } from '../../utils/usePageContext';

const props = defineProps(['show', 'direction']);
const emit = defineEmits(['toggle-dropdown']);

const target = ref(null);
onClickOutside(target, e => {
  emit('toggle-dropdown', false);
});

const pageContext = usePageContext();

watch(pageContext, () => {
  emit('toggle-dropdown', false);
});

const directionsClasses = computed(() => {
  switch (props.direction) {
    case 'up':
      return ['bottom-full', 'left-0', 'mb-3']
    case 'left':
      return ['top-0', 'right-full', 'mr-3', '-mt-2']
    case 'right':
      return ['top-0', 'left-full', 'ml-3', '-mt-2']
    default:
      // down is default
      return ['top-full', 'left-0', 'mt-4']
  }
})

</script>

<style scoped>

</style>
