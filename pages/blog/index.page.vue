<template>
  <h2 class="page-title">Blog</h2>
  <div v-if="pageContext.user.role === 'admin'" class="flex justify-end"><a href="/blog/new" class="button">New Post</a></div>
  <div v-for="p in summaries" class="blog-summary">
    <h3><a :href="`/blog/post/${p.slug}`">{{ p.title }}</a></h3>
    <small>{{ p.posted }}</small>
    <p>{{ p.summary }}</p>
  </div>
</template>

<script setup>
import {usePageContext} from '../../utils/usePageContext';

defineProps(['summaries'])
const pageContext = usePageContext();
</script>

<style scoped lang="scss">
@import "scss/vars";
.blog-summary {
  padding: 1em;
  margin: 1em auto;
  &:not(:last-child) {
    border-bottom: 2px solid $primary;
  }
}
</style>
