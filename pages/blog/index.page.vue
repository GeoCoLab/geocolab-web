<template>
  <h2 class="page-title">Blog</h2>
  <div v-if="pageContext.user.role === 'admin'" class="flex justify-end"><a href="/blog/new" class="button">New Post</a>
  </div>
  <div v-for="p in summaries" class="blog-summary py-8 px-2">
    <div class="mb-4">
      <h3><a :href="`/blog/post/${p.slug}`">{{ p.title }}</a></h3>
      <div class="grid grid-cols-[1fr,auto]">
        <div class="grid">
          <small><a :href="`/blog?author=${p.author.id}`">{{ p.author.name }}</a></small>
          <small>{{ p.posted }}</small>
        </div>
        <img :src="p.author.gravatar + '&s=30'" class="md:ml-4 rounded-full border-2 border-secondary-light justify-self-end">
      </div>
    </div>

    <p>{{ p.summary }}</p>
  </div>
</template>

<script setup>
import { usePageContext } from '../../utils/usePageContext';

defineProps(['summaries']);
const pageContext = usePageContext();
</script>

<style scoped lang="scss">
@import 'scss/vars';

.blog-summary {
  &:not(:last-child) {
    border-bottom: 2px solid $primary;
  }
}
</style>
