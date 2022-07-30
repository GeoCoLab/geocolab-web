<template>
  <div class="min-h-screen grid page-grid grid-cols-3">
    <div class="w-full px-10 py-1 grid items-center col-span-3 relative" :class="{'header-home': isHome}" id="header"
         title="Photo by Max van den Oetelaar on Unsplash">
      <div class="flex flex-col container relative">
        <a href="/" title="GeoCoLab" class="no-underline">
          <h1 class="site-title font-display font-bold text-primary-white text-5xl" :class="{'sm:text-7xl': isHome}">GeoCoLab</h1>
        </a>
        <span
            class="site-subtitle text-primary-lightest leading-none text-xl" :class="{'sm:text-2xl': isHome}">Matching access to analytical facilities with underserved researchers</span>
      </div>
    </div>
    <Nav />
    <div class="h-full mx-auto p-20 main-content col-start-2">
      <div class="w-full lg:w-90 xl:w-80 mx-auto">
        <slot />
      </div>
    </div>
    <div class="col-span-3 p-4 bg-primary-dark text-primary-lightest footer">
        <ul class="flex items-center leading-0">
          <li class="px-4">© GeoCoLab, 2022</li>
          <li class="text-sm px-4"><a href="/about/terms">Terms & Conditions</a></li>
          <li class="text-sm px-4"><a href="/about/privacy">Privacy Notice</a></li>
          <li class="text-sm px-4"><a href="/about/mou">Memorandum of Understanding</a></li>
          <li class="text-sm px-4 flex items-center">
            <a href="https://github.com/geocolab/geocolab" target="_blank">Source</a>
            <vue-feather type="github" size="1em" class="pl-2"/>
          </li>
        </ul>
    </div>
  </div>
</template>

<script setup>
import Nav from '../components/Nav.vue';
import { usePageContext } from '../utils/usePageContext';
import { computed } from 'vue';

const pageContext = usePageContext();

const isHome = computed(() => {
  return pageContext.urlPathname === '/';
});
</script>
