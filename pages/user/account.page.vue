<template>
  <div class="flex items-center">
    <img :src="pageContext.user.gravatar + '&s=100'" class="mr-8 rounded-full border-2 border-secondary-light">
    <h2>Hello, {{ pageContext.user.name }}!</h2>
  </div>
  <div v-if="pageContext.user.todo.length > 0">
    <p>Your account is {{ pageContext.user.completion }}% complete.</p>
    <p>Tasks still left to complete:</p>
    <ul>
      <li v-for="task in pageContext.user.todo">
        {{ task }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {usePageContext} from '../../utils/usePageContext';

const pageContext = usePageContext();
</script>

<style lang="scss">
</style>
