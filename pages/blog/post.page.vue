<template>
  <div class="flex items-center">
    <h2 class="page-title w-full">{{ post.title }}</h2>
    <a :href="`/blog/edit/${post.slug}`" v-if="pageContext.user.role === 'admin'">
      <vue-feather type="edit-3" />
    </a>
  </div>
  <div><a :href="`/blog?author=${post.author.id}`">{{ post.author.name }}</a></div>
  <small>{{ post.posted }}</small>
  <div v-html="body">
  </div>
</template>

<script setup>
const props = defineProps(['post']);
import { marked } from 'marked';
import insane from 'insane';
import { ref } from 'vue';
import { usePageContext } from '../../utils/usePageContext';

let body = ref(insane(marked.parse(props.post.body)));

const pageContext = usePageContext();

</script>
