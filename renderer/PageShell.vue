<template>
  <div class="min-h-screen grid page-grid grid-cols-3">
    <Nav/>
    <div class="w-full px-10 py-1 grid items-center col-span-3" :class="{'header-home': isHome}" id="header"
         title="Photo by Max van den Oetelaar on Unsplash">
      <div class="flex flex-col container">
        <h1 class="site-title font-display font-bold text-primary-lightest">GeoCoLab</h1>
        <span
            class="site-subtitle text-primary-light">Matching access to analytical facilities with underserved researchers</span>
      </div>
    </div>
    <div class="h-full mx-auto p-20 main-content col-start-2">
      <div class="w-full lg:w-90 xl:w-80 mx-auto">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Nav from '../components/Nav.vue';
import {usePageContext} from '../utils/usePageContext';
import { computed } from 'vue';

const pageContext = usePageContext();

const isHome = computed(() => {
  return pageContext.urlPathname === '/';
});
</script>
