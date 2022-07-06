<template>
  <div class="divide-y-2 divide-primary-light">
    <div>
      <h2 class="page-title w-full">{{ post.title }}</h2>
      <span><em>{{ post.summary }}</em></span>
      <div class="grid grid-cols-[1fr,auto] mt-4 py-4 items-center">
        <div class="grid">
          <a :href="`/blog?author=${post.author.id}`">{{ post.author.name }}</a>
          <small>{{ post.posted }}</small>
        </div>
        <a :href="`/blog/edit/${post.slug}`" v-if="pageContext.user.role === 'admin'" title="Edit this post"
           class="leading-0">
          <vue-feather type="edit-3" />
        </a>
      </div>
    </div>

    <div v-html="body" class="blog-post py-8">
    </div>

    <div class="py-8 grid grid-cols-[1fr,25%]">
      <div>
        <div class="grid grid-cols-[auto,1fr] gap-4 items-end mb-4">
          <h3 class="leading-none">{{ post.author.name }}</h3>
          <em v-if="post.author.pronouns">{{ post.author.pronouns }}</em>
        </div>
        <div class="flex flex-wrap author-links">
          <a :href="`https://twitter.com/${post.author.twitter}`" v-if="post.author.twitter">
            <vue-feather type="twitter" size="1em"/>
            @{{ post.author.twitter }}
          </a>
          <a :href="`https://github.com/${post.author.github}`" v-if="post.author.github">
            <vue-feather type="github" size="1em"/>
            @{{ post.author.github }}
          </a>
          <a :href="`mailto:${post.author.email}`" v-if="post.author.email">
            <vue-feather type="mail" size="1em"/>
            {{ post.author.email }}
          </a>
          <a v-for="link in post.author.links" :href="link">
            <vue-feather type="link" size="1em"/>
            {{ link.split('//')[1] }}
          </a>
          <a :href="`/blog?author=${post.author.id}`">
            <vue-feather type="file-text" size="1em"/>
            {{ post.author.posts.length }} {{ post.author.posts.length !== 1 ? 'posts' : 'post' }}
          </a>
        </div>
      </div>
      <img :src="post.author.gravatar + '&s=150'" class="md:ml-4 rounded-full border-2 border-secondary-light justify-self-end">
      <div class="my-2 col-span-2">{{ post.author.bio }}</div>
    </div>
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

<style lang="scss">
.blog-post {
  img {
    max-width: 60%;
    margin: 2em auto;
  }
}

.author-links > a {
  display: grid;
  grid-template-columns: 1em auto;
  grid-gap: 5px;
  align-items: center;
  margin-right: 1em;
}
</style>
