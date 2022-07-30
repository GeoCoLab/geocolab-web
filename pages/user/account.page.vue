<template>
  <div class="flex items-center">
    <img :src="pageContext.user.gravatar + '&s=100'" class="mr-8 rounded-full border-2 border-primary-light">
    <div class="grid grid-flow-row w-full max-w-2xl gap-2">
      <h2>Hello, {{ pageContext.user.name }}!</h2>
      <div class="h-1 rounded-full w-full bg-gray-100">
        <div class="h-1 rounded-full" :style="progressStyle"></div>
      </div>
      <small>Your account is {{ pageContext.user.completion }}% complete.</small>
      <ul class="flex items-center">
        <li v-for="task in tasks" class="m-0">
          <div class="mr-4 text-sm grid grid-flow-col items-center gap-1">
            <vue-feather type="check" size="1.2em" v-if="task.done"/>
            <span class="cursor-pointer" :class="{'text-gray-500': task.done, 'text-primary-darkest': !task.done}" @click="task.action">{{ task.label }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <component :is="currentTab" v-if="currentTab"></component>
</template>

<script setup>
import { computed } from 'vue';
import { usePageContext } from '../../utils/usePageContext';
import {ref, defineAsyncComponent} from 'vue';
import {navigate} from 'vite-plugin-ssr/client/router';

const pageContext = usePageContext();
const currentTab = ref(null);

// tabs
const BlogAuthor = defineAsyncComponent(() => import('../../components/forms/BlogAuthor.vue'))

const progressStyle = computed(() => {
  let completion = pageContext.user.completion;
  let width = `${ completion }%`;
  let colour = `hsl(${ completion },75%,60%)`;
  return { width, backgroundColor: colour };
});

const tasks = pageContext.user.all_tasks.map(t => {
  let displayTask = {
    label: t,
    done: !pageContext.user.todo.includes(t),
    action: null
  };
  switch (t) {
    case 'email':
      displayTask.label = 'Create account';
      displayTask.action = () => navigate('/user/register');
      break;
    case 'author':
      displayTask.label = 'Blog profile';
      displayTask.action = () => {
        currentTab.value = BlogAuthor;
      }
      break;
  }
  return displayTask
})

</script>

<style lang="scss">
</style>
