<template>
  <FormKit type="form" v-model="postData" form-class="mx-auto long-form" submit-label="Save"
           @submit="savePost" :errors="errors">
    <FormKit type="text" name="title" label="Title" />
    <FormKit type="datetime-local" name="posted" label="Posted"/>
    <FormKit type="text" name="slug" label="URL"/>
    <FormKit type="text" name="summary" label="Summary"/>
    <div class="form-row-custom mt-12">
      <Codemirror
          v-model="postData.body"
          :style="{ height: '800px' }"
          class="linewrap"
          :autofocus="true"
          :indent-with-tab="true"
          :tabSize="2"
          :extensions="extensions"
          @change="saved = false"
      />
    </div>
  </FormKit>

</template>

<script setup>
import { markdown } from '@codemirror/lang-markdown';
import { Codemirror } from 'vue-codemirror';
import { ref } from 'vue';
import {api} from '../../utils/api';
import { navigate } from 'vite-plugin-ssr/client/router';

const props = defineProps(['post']);

const extensions = [markdown()];
const saved = ref(false);

let postData = ref({ ...props.post });
let errors = ref([]);

async function savePost() {
  api.post('/blog/save', postData.value).then((r) => {
    navigate(`/blog/post/${r.data.slug}`);
    return;
  })
}
</script>
